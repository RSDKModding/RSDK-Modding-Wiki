# RSDKv4 Events

RetroScript v4, the scripting language used by RSDKv4, is comprised of three main events, along with three optional editor events. Events are akin to "default functions" of sorts, and are called by the engine every frame to achieve a specific task. To define events, `event [name]` is used to open one and `end event` is used to close one.

## ObjectUpdate
Called once every frame (if priority allows) to run a general update of the object, for things like movement and animation processing.

``` title="Example"
event ObjectUpdate
	object.xpos += object.xvel
	object.ypos += object.yvel
	
	object.animationTimer++
	if object.animationTimer >= 8
		object.frame++
		if object.frame >= 4
			object.frame = 0
		end if
		object.animationTimer = 0
	end if
end event
```

!!! note
	`ObjectUpdate` is parallel to the `ObjectMain` sub seen in RSDKv3 and earlier, though here the name was changed to match better.

## ObjectDraw
Called once every frame (if priority allows) to draw the object. Although some objects in Sonic 1 and 2 also have movement or animation processing code in this event, it's strongly recommended to only include drawing code. Draw order is based on the object's `object.drawOrder` value.

``` title="Example"
event ObjectDraw
	DrawSprite(object.frame)
end event
```

## ObjectStartup
Called once per object type on stage startup. Used to load spritesheets and set up SpriteFrames, apply any starting values needed for the object type, or other initialization code.

``` title="Example"
event ObjectStartup
	LoadSpriteSheet("Global/Items.gif")
	
	SpriteFrame(-8, -8, 16, 16, 1, 1)
	SpriteFrame(-8, -8, 16, 16, 1, 18)
	SpriteFrame(-8, -8, 16, 16, 1, 35)
	SpriteFrame(-8, -8, 16, 16, 1, 52)
	
	foreach (TypeName[Object], arrayPos0, ALL_ENTITIES)
		object[arrayPos0].drawOrder = 4
	next
end event
```

## RSDKEdit
Called whenever modifying an object's editor variable in an editor. This event can be excluded from your script if the object doesn't have an editor variable.

``` title="Example"
event RSDKEdit
	if editor.returnVariable == true
		switch editor.variableID
		case EDIT_VAR_PROPVAL // property value
			checkResult = object.propertyValue
			break
			
		case 0 // alignment
			checkResult = object.propertyValue
			break
		end switch
	else
		switch editor.variableID
		case EDIT_VAR_PROPVAL // property value
			object.propertyValue = editor.variableValue
			break
			
		case 0 // alignment
			object.propertyValue = editor.variableValue
			break
		end switch
	end if
end event
```

## RSDKDraw
Called once every frame to draw the object in an editor.

``` title="Example"
event RSDKDraw
	DrawSprite(0)
	if editor.showGizmos == true
		DrawSprite(1)
	end if
end event
```

## RSDKLoad
Called once per object type when game logic is (re)loaded in an editor. Used to load spritesheets, set up SpriteFrames, and add editor variables and aliases.

``` title="Example"
event RSDKLoad
	LoadSpriteSheet("Global/Items.gif")
	SpriteFrame(-8, -8, 16, 16, 1, 1)
	SpriteFrame(-8, -8, 16, 16, 1, 18)

	AddEditorVariable("alignment")
	SetActiveVariable("alignment")
	AddEnumVariable("Left", 0)
	AddEnumVariable("Center", 1)
	AddEnumVariable("Right", 2)
	
	SetVariableAlias(ALIAS_VAR_VAL0, "width")
end event
```
