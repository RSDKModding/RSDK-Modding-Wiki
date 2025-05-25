# GameXML

GameXML is a modding feature included in the [RSDKv4 Decompilation](README.md). It uses a file named `Game.xml` to add or replace various elements of the [GameConfig](TODO) of a game without directly modifying the `GameConfig.bin` file, allowing for better compatibility between mods that require modifying the contents of said file.

This feature is only available if the decompilation is built with the Mod Loader, which is included by default when building.

## Usage

To use GameXML, add a file named `Game.xml` in the `Game` directory of the Data folder of your mod. Unlike other Data or script files, the `Game.xml` file from each mod that includes one will be loaded, rather than only the one with the highest priority.

GameXML, as the name and file extension suggest, uses [Extensible Markup Language](https://en.wikipedia.org/wiki/XML) to store and load information. All elements in `Game.xml` must be contained within a root element named `game`, like so:

```xml
<game>
	<!-- elements go here -->
</game>
```

You only need to include elements that you are adding/replacing.

## Game Title

The game title that appears in the window title and in the [Dev Menu](../Overview/DevMenu.md) can be overwritten with the `title` element. The `name` attribute contains the name to replace the game title with.

```xml
<title name="My Game" />
```

## Variables

Global variables can be added using the `variables` element. This element should contain a `variable` child element for each global variable to add, with the following attributes:

`name`

:   The name of the global variable.

`value`

:   The default value of the variable. Takes an integer.

```xml
<variables>
	<variable name="player.collectibles" value="0" />
	<variable name="options.enableLives" value="1" />
</variables>
```

!!! note
    The GameConfig has a maximum global variable count of 256 variables. The Origins versions of Sonic 2 gets very close to this limit, having 240 variables as of version 2.0.2. Keep this in mind when adding new variables.

## Palettes

The global palettes can be modified using the `palette` element. There are two types of child elements that can be used to overwrite colors.

### colors

This element uses the following attributes:

`bank`

:   The index of the palette bank to modify.

`start`

:   The index of the color in the palette to start modifying colors at.

The text value of the element should contain the colors to overwrite the original colors with, starting at the index specified in the `start` attribute. Colors can be defined as either hex (`FFFFFF` or `#FFFFFF`, letters are case-insensitive) or an RGB triplet (`(255, 255, 255)` or `(255 255 255)`).

```xml
<palette>
	<colors bank="0" start="2">202080 #4040a0 (96, 96, 192) (128 128 224)</colors>
</palette>
```

### color

This element uses the following attributes:

`bank`

:   The index of the palette bank to modify.

`index`

:   The index of the color in the palette to modify.

`r`, `g`, `b`

:   The red, green, and blue values in the RGB value for the color to use.

```xml
<palette>
	<color bank="0" index="2" r="32" g="32" b="128" />
	<color bank="0" index="3" r="64" g="64" b="160" />
	<color bank="0" index="4" r="96" g="96" b="192" />
	<color bank="0" index="5" r="128" g="128" b="224" />
</palette>
```

## Objects

Global objects can be added using the `objects` element. This element should contain an `object` child element for each global object to add, with the following attributes:

`name`

:   The name of the global object.

`script`

:   The path to the script file for the object.

`forceLoad`

:   Takes a boolean. If set to `true`, all stage objects will have their IDs incremented by 1 to prevent breaking stage layouts. **The object should not be added as both a global and stage object at once if this is enabled!**

```xml
<objects>
	<object name="My Object" script="Global/MyObject.txt" forceLoad="true" />
</objects>
```

## Sound Effects

Sound effects can be added using the `sounds` element. This element should contain a `soundfx` child element for each sound effect to add, with the following attributes:

`name`

:   The name of the sound effect.

`path`

:   The path to the sound effect file.

```xml
<sounds>
	<soundfx name="My SFX" path="Global/MySFX.wav" />
	<soundfx name="Other SFX" path="Global/OtherSFX.wav" />
</sounds>
```

## Players

Players can be added using the `players` element. This element should contain an `player` child element for each player to add, with the `name` attribute containing the name of the player.

```xml
<players>
	<player name="PLAYER 1" />
	<player name="PLAYER 2" />
</players>
```

## Stages

Stages can be added using the `presentationStages`, `regularStages`, `specialStages`, and `bonusStages` elements, each used for their corresponding stage list. These elements should contain a `stage` child element for each stage to add, with the following attributes:

`name`

:   The name of the stage.

`folder`

:   The name of the stage's folder in the `Stages` directory.

`id`

:   The stage's act ID.

`highlight`

:   Takes a boolean. If set to `false`, only the last (and presumably only) character in the stage name will be highlighted when selecting it in the [Dev Menu](../Overview/DevMenu.md) stage select.

```xml
<presentationStages>
	<stage name="MY STAGE" folder="MyStage" id="1" highlight="true" />
</presentationStages>


<regularStages>
	<stage name="WORLD 1 LEVEL 1" folder="World1" id="1" highlight="true" />
	<stage name="2" folder="World1" id="2" highlight="false" />
	<stage name="3" folder="World1" id="3" highlight="false" />
	<stage name="WORLD 2 LEVEL 1" folder="World2" id="1" highlight="true" />
	<stage name="2" folder="World2" id="2" highlight="false" />
	<stage name="3" folder="World2" id="3" highlight="false" />
</regularStages>


<specialStages>
	<stage name="SPECIAL 1" folder="Special" id="1" highlight="true" />
	<stage name="2" folder="Special" id="2" highlight="false" />
	<stage name="3" folder="Special" id="3" highlight="false" />
	<stage name="4" folder="Special" id="4" highlight="false" />
</specialStages>


<bonusStages>
	<stage name="BONUS" folder="Bonus" id="1" highlight="true" />
</bonusStages>
```