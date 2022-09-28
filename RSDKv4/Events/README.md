# RSDK v5 Events

RetroScript v4, the scripting language used by RSDKv4, is comprised three main events, along with three optional editor events. Events are akin to "default functions" of sorts, and are called by the engine every frame to achieve a specific task. To define events, `event [name]` is used to open one and `end event` is used to close one. The available events are as follows:

- `ObjectUpdate` - Called once every frame (if priority allows) to run a general update of the object, for things like animation
- `ObjectDraw` - Called once every frame (if priority allows) to draw the object. Ideally only drawing should occur here, nothing else like movement or animation. Draw Order is based on the object's `object.drawOrder` value.
- `ObjectStartup` - Called once per every object type on stage startup. Used to load sprite sheets and set up Sprite Frames, as well as apply any starting values needed for the object type.

`ObjectUpdate` is parallel to the `ObjectMain` seen in RSDKv3 and earlier, though here the name was changed to match better.

TODO: the rest

