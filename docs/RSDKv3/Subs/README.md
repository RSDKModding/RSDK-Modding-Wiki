# RSDKv3 Subs

RetroScript v3, the scripting language used by RSDKv3, is comprised of four main subs, along with three optional editor subs. Subs are akin to "default functions" of sorts, and are called by the engine every frame to achieve a specific task. To define subs, `sub [name]` is used to open one and `end sub` is used to close one.

## ObjectMain
Called once every frame (if priority allows) to run a general update of the object, for things like movement and animation processing.

``` title="Example"
sub ObjectMain
	Object.XPos += Object.Value0
	Object.YPos += Object.Value1
	
	Object.AnimationTimer++
	if Object.AnimationTimer >= 8
		Object.Frame++
		if Object.Frame >= 4
			Object.Frame = 0
		end if
		Object.AnimationTimer = 0
	end if
end sub
```

!!! note
	`ObjectMain` is parallel to the `ObjectUpdate` event seen in RSDKv4, though there the name was changed to match better.

## ObjectDraw
Called once every frame (if priority allows) to draw the object. Although some objects in Sonic CD also have movement or animation processing code in this sub, it's strongly recommended to only include drawing code. Draw order is based on the object's `Object.drawOrder` value.

``` title="Example"
sub ObjectDraw
	DrawSprite(Object.Frame)
end sub
```

## ObjectStartup
Called once per object type on stage startup. Used to load spritesheets and set up SpriteFrames, apply any starting values needed for the object type, or other initialization code.

``` title="Example"
sub ObjectStartup
	LoadSpriteSheet("Global/Items.gif")
	
	SpriteFrame(-8, -8, 16, 16, 1, 1)
	SpriteFrame(-8, -8, 16, 16, 1, 18)
	SpriteFrame(-8, -8, 16, 16, 1, 35)
	SpriteFrame(-8, -8, 16, 16, 1, 52)
	
	TempValue0 = 32
	while TempValue0 < 1056
		if Object[ArrayPos0].Type == TypeName[Object]
			Object[ArrayPos0].DrawOrder = 4
		end if
		TempValue0++
	loop
end sub
```

## RSDKEdit
Called whenever modifying an object's editor variable in an editor. This sub can be excluded from your script if the object doesn't have an editor variable.

``` title="Example"
sub RSDKEdit
	if Editor.ReturnVariable == true
		switch Editor.VariableID
		case EDIT_VAR_PROPVAL // Property Value
			CheckResult = Object.PropertyValue
			break
			
		case 0 // Alignment
			CheckResult = Object.PropertyValue
			break
		end switch
	else
		switch Editor.VariableID
		case EDIT_VAR_PROPVAL // Property Value
			Object.PropertyValue = Editor.VariableValue
			break
			
		case 0 // Alignment
			Object.PropertyValue = Editor.VariableValue
			break
		end switch
	end if
end sub
```

## RSDKDraw
Called once every frame to draw the object in an editor.

``` title="Example"
sub RSDKDraw
	DrawSprite(0)
	if Editor.ShowGizmos == true
		DrawSprite(1)
	end if
end sub
```

## RSDKLoad
Called once per object type when game logic is (re)loaded in an editor. Used to load spritesheets, set up SpriteFrames, and add editor variables and aliases.

``` title="Example"
sub RSDKLoad
	LoadSpriteSheet("Global/Items.gif")
	SpriteFrame(-8, -8, 16, 16, 1, 1)
	SpriteFrame(-8, -8, 16, 16, 1, 18)

	AddEditorVariable("Alignment")
	SetActiveVariable("Alignment")
	AddEnumVariable("Left", 0)
	AddEnumVariable("Center", 1)
	AddEnumVariable("Right", 2)
	
	SetVariableAlias(ALIAS_VAR_VAL0, "Width")
end sub
```
