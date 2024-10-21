# LoadImage

## Description
Loads and displays an image.

## Parameters
`filename`

:   The file path of the image to load, relative to `Data/Images/`. Images may **ONLY** be in PNG format and **MUST** have a resolution of 1024x512 pixels.

    !!! note
        Prior to REV02, RSDKv5 used the TGA format for images instead of PNG.

`displayLength`

:   The amount of time, in seconds, to show the image on-screen (excluding the time during fading in/out).

`fadeSpeed`

:   The amount of time, in seconds, to take for the image to fade in/out.

`skipCallback`

:   The function that will be called every frame the image is shown to determine if it should be skipped. The function must return a `bool32` value. Setting this to `NULL` will make the image unskippable.

## Return Value
Returns `true` as a `bool32` if the image loaded successfully; otherwise, returns `false`.

## Syntax
=== "C"

	``` c
	RSDK.LoadImage(const char *filename, double displayLength, double fadeSpeed, bool32 (*skipCallback)())
	```

=== "C++"

	``` cpp
	Video::LoadImage(const char *filename, double displayLength, double fadeSpeed, bool32 (*skipCallback)())
	```

## Example
=== "C"

	``` c
	RSDK.LoadImage("Image.png", 32.0, 1.0, MyObject_ImageSkipCB);
	```

=== "C++"

	``` cpp
	Video::LoadImage("Image.png", 32.0, 1.0, ImageSkipCB);
	```