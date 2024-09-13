### Tools
=== "Pre-v5"

    - **Pan** :retroed-pan: :  
    Allows the user to adjust the view of the scene.  
    ^^Controls^^:
        - Left Click (Drag): Moves camera through the editor.</ul>
    ^^Shortcuts^^:<ul/>
        - ++s++: Selects the Pan Tool as the current tool.
        - Middle Click (Drag): Lets the user move the camera as if using the pan tool regardless of the currently selected tool.
    - **Pencil** :retroed-pencil: :  
    Draws chunks on the stage.  
    ^^Controls^^:
        - Left Click: Places chunk in the scene at the current layer.
        - Right Click: Selects chunk from the current layer for future placement.
        - ++c++: Picks a tile hovered by the cursor for editing in the Tile Properties tab.</ul>
    ^^Shortcuts^^:<ul/>
        - ++a++: Selects the Pencil Tool as the current tool.
    - **Eraser** :retroed-eraser: :  
    Used for cleaning chunks on the layout with left click.  
    ^^Shortcuts^^:
        - ++r++: Selects the Eraser Tool as the current tool.
    - **Entity** :retroed-entity: :  
    Select and move entities when in Select mode, or places entities when in Placement mode.  
    ^^Controls (Select Mode)^^:
        - Left Click: Selects an entity, hold to move it around the stage.
        - Right Click: Selects an entity, will skip a previously selected entity if it's overlapping
        - ++ctrl+c++: Copies the currently selected entity.
        - ++ctrl+v++: Pastes an stored entity at cursor's position.
        - ++up++ | ++down++ | ++left++ | ++right++: Moves the selected entity 4 px in the chosen direction.
        - ++up++ | ++down++ | ++left++ | ++right++ + ++ctrl++: Moves the selected entity 16 px in the chosen direction.
        - ++up++ | ++down++ | ++left++ | ++right++ + ++shift++: Moves the selected entity 1 px in the chosen direction.
        - ++delete++ | ++backspace++: Deletes the selected entity. </ul>
    ^^Controls (Placement Mode)^^:<ul/>
        - Left Click: Places an entity at the cursor's position.
        - Right Click: Clears selected object and returns to Select mode.</ul>
    ^^Shortcuts^^:<ul/>
        - ++e++: Selects the Entity Tool as the current tool.
    - **Select** :retroed-select: :  
    Selects and moves various entities.  
    ^^Controls^^:
        - Left Click (Drag): Selects all entities inside the select box.
        - Left Click (Hold & Drag on selected entity): Moves all entities using the hovered entity as an anchor.
        - ++delete++ | ++backspace++: Deletes all selected entities.</ul>
    ^^Shortcuts^^:<ul/>
        - ++w++: Selects the Select Tool as the current tool.

=== "v5"

    - **Pan** :retroed-pan: :  
    Allows the user to adjust the view of the scene.  
    ^^Controls^^:
        - Left Click (Drag): Moves camera through the editor.</ul>
    ^^Shortcuts^^:<ul/>
        - ++s++: Selects the Pan Tool as the current tool.
        - Middle Click (Drag): Lets the user move the camera as if using the pan tool regardless of the currently selected tool.
    - **Pencil** :retroed-pencil: :  
    Draws tiles on the stage.  
    ^^Controls^^:
        - Left Click: Places tile in the scene at the current layer.
        - Right Click: Selects tile from the current layer for future placement.
        - ++z++: Flips tile for placement horizontally.
        - ++x++: Flips tile for placement tile vertically.</ul>
    ^^Shortcuts^^:<ul/>
        - ++a++: Selects the Pencil Tool as the current tool.
    - **Eraser** :retroed-eraser: :  
    Used for cleaning tiles on the layout with left click.  
    ^^Controls^^:
        - Left Click (Drag): Cleans tiles on the current layer at cursors position.</ul>
    ^^Shortcuts^^:<ul/>
        - ++r++: Selects the Eraser Tool as the current tool.
    - **Stamp** :retroed-stamp: :  
    Places on the stage a preset of tiles selected from the Stamp List tab.  
    ^^Shortcuts^^:
        - ++k++: Selects the Stamp Tool as the current tool.
    - **Stamp Copy** :retroed-stamp-copy: :  
    Stores a preset of tiles from the stage in the Stamp List by dragging with left click.  
    ^^Shortcuts^^:
        - ++l++: Selects the Stamp Copy Tool as the current tool.
    - **Entity** :retroed-entity: :  
    Select and move entities when in Select mode, or places entities when in Placement mode.  
    ^^Controls (Select Mode):^^
        - Left Click: Selects an entity, hold to move it around the stage.
        - Right Click: Selects an entity, will skip a previously selected entity if it's overlapping
        - ++ctrl+c++: Copies the currently selected entity.
        - ++ctrl+v++: Pastes an stored entity at cursor's position.
        - ++up++ | ++down++ | ++left++ | ++right++: Moves the selected entity 4 px in the chosen direction.
        - ++up++ | ++down++ | ++left++ | ++right++ + ++ctrl++: Moves the selected entity 16 px in the chosen direction.
        - ++up++ | ++down++ | ++left++ | ++right++ + ++shift++: Moves the selected entity 1 px in the chosen direction.
        - ++delete++ | ++backspace++: Deletes the selected entity. </ul>
    ^^Controls (Placement Mode)^^:<ul/>
        - Left Click: Places an entity at the cursor's position.
        - Right Click: Clears selected object and returns to Select mode.</ul>
    ^^Shortcuts^^:<ul/>
        - ++e++ : Selects the Entity Tool as the current tool.
    - **Select** :retroed-select: :  
    Selects and moves various entities.  
    ^^Controls^^:
        - Left Click (Drag): Selects all entities inside the select box.
        - Left Click (Hold & Drag on selected entity): Moves all entities using the hovered entity as an anchor.
        - ++up++ | ++down++ | ++left++ | ++right++: Moves the selected entity 4 px in the chosen direction.
        - ++up++ | ++down++ | ++left++ | ++right++ + ++ctrl++: Moves the selected entity 16 px in the chosen direction.
        - ++up++ | ++down++ | ++left++ | ++right++ + ++shift++: Moves the selected entity 1 px in the chosen direction.
        - ++delete++ | ++backspace++: Deletes all selected entities.</ul>
    ^^Shortcuts^^:<ul/>
        - ++w++: Selects the Select Tool as the current tool.

## Scene Lists

### Tile Layers
---
=== "pre-v5"
    Lists the layers of the scene, composed by one foreground layer and 8 backgrounds layers, selecting any of them on the list will highlight the layer in the scene viewer for chunk editing, the checkbox determines which layers should be visible on the scene editor.
=== "v5"
    Lists the existing layers of the scene, selecting any of them on the list will highlight the layer in the scene viewer for chunk editing, the checkbox determines which layers should be visible on the scene editor.
    Add: Creates a new layer on the scene and prompts the Layer Properties tab, scenes are limited to 8 layers.
    Remove: Deletes the selected layer from the scene.
    Move Up/Down: Moves the position of the Layer on the list.

### Chunk/Tile List
---
=== "pre-v5"
    Lists all 512 (256 in v1) available chunks on the scene, clicking any of them will select the chunk for it's use with the Pencil tool.
=== "v5"
    Lists all 1024 available tiles on the scene, clicking any of them will select the tile for it's use with the Pencil tool.  
    ^^Defaults^^: Properties used by the Pencil tool to determine how the tile from the tile list should be placed and what solidity must have by default  
    *Flip X/Y*: Flips the tile horizontally/vertically.  
    *Solid A/B (Top)*: The tile will be placed with top collision enabled.  
    *Solid A/B (LRB)*: The tile will be placed with left, right, and bottom collision enabled.  
    These options are not mutually exclusive, meaning is possible(and expected) to combine them.

### Stamp List (v5)
---
Displays a list of stamps loaded from a Stamp library and those created by the Stamp Copy tool, clicking any of them will select the stamp for it's use with the Stamp tool.  
Add Stamp: Creates a new empty stamp, prompts the Stamp Properties tab.
Remove Stamp: Deletes the selected stamp.

### Object List
---
Displays the available objects loaded from the Gameconfig (if the scene has "**Load Global Objects**" enabled) and Stageconfig that entities can use.
Clicking any of them with the entity tool selected will set it to Placement Mode with the desired object.
=== "Pre-v5"
    Add Object: Creates a "New Object" in the Stageconfig.  
    Remove Object: Deletes the object from the scene, along with any entity that was using the object.
=== "v5"
    Add Object (Game Link Required):
        Prompts an Object Search tool, which loads any objects detected in the Game Link, any object with it's checkbox marked will be added into the stage.  

    Remove Object: Deletes the object from the scene, along with any entity that was using the object.

### Entity List
---
Shows the existing entities on the scene with their respective object names and slot.  
Pre-v5 scenes have an entity limit of 1024 entities on scene, while v5 has a limit of 2048 **active** entities based on the filter of the entity.  
This means, for example, that you can have:

  - 2048 active entities on the scene across all filters.
  - 2048 active entities on each individual filter. (16384)
  - 1640 active entities w/ filter 1, 1280 w/ filter 2, 360 w/ filter 1 & 3 (sum gives 2000), 130 w/ filter 2, 3 & 4 (sum gives 1770).
</ul>but you can't have:<ul/>
  - 2371 active entities across all filters.
  - 2049 active entities on an individual filter.
  - 1640 active entities w/ filter 1, 1280 w/ filter 2, 789 w/ filter 1 & 3 (exceeded by 381 entities)
  
Selecting an entity from the list will move the camera to it's location and prompt the Entity Properties tab with it's information.  

Add Entity: Creates a Blank Object in the middle of the screen, this option is disabled if the entity cap is reached.  
Delete Entity: Deletes the entity selected either from the list or with the Entity tool.  
Move Up/Down: switches the entity slot of the selected entity with the previous/next entity on the list.  

### Parallax List
---
=== "Pre-v5"
    Lists all parallax entries used by layers with type "Horizontal Scroll" or "Vertical Scroll"
=== "v5"
    Lists all parallax entries of the currently selected layer if it's layer type is "Horizontal Scroll" or "Vertical Scroll""

Add Parallax: Adds a new parallax entry to the list and prompts the Scroll Properties tab.  
Remove Parallax: Deletes the currently selected parallax entry from the list.  
Import Parallax: Loads parallax data from a .xml file loaded from the file search prompt.  
Export Parallax: Saves the current parallax data on a .xml file.  

## Properties
### Scene Properties
Allan please add details.
### Layer Properties
Allan please add details.
### Tile Properties
Allan please add details.
### Stamp Properties (v5)
Allan please add details.
### Entity Properties
Allan please add details.
### Scroll Properties
Allan please add details.