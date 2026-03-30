# RSDKv2 Subs

RetroScript v2, the scripting language used by RSDKv2, is comprised of four main subs, along with two player subs, and one optional editor sub. Subs are akin to "default functions" of sorts, and are called by the engine every frame to achieve a specific task. To define subs, `sub [name]` is used to open one and `end sub` is used to close one.

## PlayerMain
Called once every frame to run a general update of the player, for things like movement and animation processing.

``` title="Example"
sub PlayerMain
	Player.XPos += Player.Value0
	Player.YPos += Player.Value1
	
	Player.Value2++
	if Player.Value2 >= 8
		Player.Frame++
		if Player.Frame >= 4
			Player.Frame = 0
		end if
		Player.Value2 = 0
	end if
end sub
```

## PlayerState
Called once every frame, if the player's state is set to its ID, to run a specified update of the player.

``` title="Example"
sub PlayerState 2
	Player.XPos += Player.Value0
	Player.YPos += Player.Value1
	
	Player.Value2++
	if Player.Value2 >= 8
		Player.Frame++
		if Player.Frame >= 4
			Player.Frame = 0
		end if
		Player.Value2 = 0
	end if
end sub
```

## ObjectMain
Called once every frame (if priority allows) to run a general update of the object, for things like movement and animation processing.

``` title="Example"
sub ObjectMain
	Object.XPos += Object.Value0
	Object.YPos += Object.Value1
	
	Object.Value2++
	if Object.Value2 >= 8
		Object.Frame++
		if Object.Frame >= 4
			Object.Frame = 0
		end if
		Object.Value2 = 0
	end if
end sub
```

!!! note
	`ObjectMain` is parallel to the `ObjectUpdate` event seen in RSDKv4, though there the name was changed to match better.

## ObjectPlayerInteraction
Called after `ObjectMain` for each active player to handle interactions between the object and the player(s).

``` title="Example"
sub ObjectPlayerInteraction
	PlayerObjectCollision(C_TOUCH, -8, -8, 8, 8)
	if CheckResult == true
		Object.State = 2
	end if
end sub
```

## ObjectDraw
Called once every frame (if priority allows) to draw the object. Although some objects in Sonic CD also have movement or animation processing code in this sub, it's strongly recommended to only include drawing code. Draw order is based on the object's `Object.DrawOrder` value.

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
		if Object[ArrayPos0].Type == 2
			Object[ArrayPos0].DrawOrder = 4
		end if
		TempValue0++
	loop
end sub
```

## RSDKLoad
Called once per object type when game logic is (re)loaded in an editor. Used to load spritesheets, set up SpriteFrames, and add editor variables and aliases.

``` title="Example"
sub RSDKLoad
	LoadSpriteSheet("Global/Items.gif")
	SetEditorIcon(Icon0, SingleIcon, -8, -8, 16, 16, 1, 1)
end sub
```
