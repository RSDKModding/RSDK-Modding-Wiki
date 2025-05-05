# GameXML

GameXML is a modding feature included in the [RSDKv5(U) Decompilation](README.md). It uses a file named `Game.xml` to add or replace various elements of the [GameConfig](TODO) of a game without directly modifying the `GameConfig.bin` file, allowing for better compatibility between mods that require modifying the contents of said file.

This feature is only available if the decompilation is built with the Mod Loader, which is included by default when building.

## Usage

To use GameXML, add a file named `Game.xml` in the `Game` directory of the Data folder of your mod. Unlike other Data files, the `Game.xml` file from each mod that includes one will be loaded, rather than only the one with the highest priority.

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

Global objects can be added using the `objects` element. This element should contain an `object` child element for each global object to add, with the `name` attribute containing the name of the object.

```xml
<objects>
	<object name="MyObject" />
</objects>
```

## Sound Effects

Sound effects can be added using the `sounds` element. This element should contain a `soundfx` child element for each sound effect to add, with the `path` attribute containing the path to the sound effect file.

```xml
<sounds>
	<soundfx path="Global/MySFX.wav" />
	<soundfx path="Global/OtherSFX.wav" />
</sounds>
```

## Stages

Stages can be added using the `category` element. The `name` attribute of this field contains the name of the stage category to add the stages to. If a category with that name doesn't exist, a new one will be created.

`category` elements should contain a `stage` child element for each stage to add, with the following attributes:

`name`

:   The name of the stage.

`folder`

:   The name of the stage's folder in the `Stages` directory.

`id`

:   The stage's scene ID.

`filter`

:   The stage filter to use. Has no effect on REV01.

```xml
<category name="My Stages">
	<stage name="MY STAGE" folder="MyStage" id="1" filter="0" />
</category>


<category name="Levels">
	<stage name="World 1 Level 1" folder="World1" id="1" filter="0" />
	<stage name="2" folder="World1" id="2" filter="0" />
	<stage name="3" folder="World1" id="3" filter="0" />
	<stage name="World 2 Level 1" folder="World2" id="1" filter="0" />
	<stage name="2" folder="World2" id="2" filter="0" />
	<stage name="3" folder="World2" id="3" filter="0" />
</category>


<category name="Special Stages">
	<stage name="SPECIAL 1" folder="Special" id="1" filter="0" />
	<stage name="2" folder="Special" id="1" filter="1" />
	<stage name="3" folder="Special" id="1" filter="2" />
	<stage name="4" folder="Special" id="1" filter="4" />
</category>


<category name="Bonus Levels">
	<stage name="Bonus" folder="Bonus" id="1" filter="0" />
</category>
```