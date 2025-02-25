# Class "Room"

???+ info
    You can get this class by using the following functions:

    * [Game:GetRoom()](Game.md#getroom)
    * [Level:GetCurrentRoom()](Level.md#getcurrentroom)

    ???+ example "Example Code"
        ```lua
        local room = Game():GetRoom()
        ```

## Functions
### Check·Line () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean CheckLine ( [Vector](Vector.md) Pos1, [Vector](Vector.md) Pos2, LinecheckMode Mode, int GridPathThreshold = 0, boolean IgnoreWalls = false, boolean IgnoreCrushable = false ) {: .copyable aria-label='Functions' }
Returns 2 values:
		* boolean: true if there are no obstructions between Pos1 and Pos2, false otherwise
		* Vector: first hit position from Pos1 to Pos2 (returns Pos2 if the line didn't hit anything)

???+ note "Notes"
    Linecheck Modes:

    **0** : makes the line check collide with anything that impedes ground movement

    **1** : is a cheaper version of 0, but is not as reliable

    **2** : is used for explosions, it only collides with walls and indestructible blocks

    **3** : is a line check that only collides with obstacles that can block projectiles
___
### Damage·Grid () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean DamageGrid ( int Index, int Damage ) {: .copyable aria-label='Functions' }
Damage Grid Entities currently this concerns [GridEntityPoop](GridEntityPoop.md) and GridEntity_Fire returns true if damageable entity was found (and possibly damaged) return false if not used by tears, bombs, some NPCs, etc
___
### Destroy·Grid () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean DestroyGrid ( int Index, boolean Immediate ) {: .copyable aria-label='Functions' }
calls DamageGrid internally to damage Poop/Fire removes rocks and opens secret doors returns true if something was destroyed returns false if not used for explosions mostly
___
### Emit·Blood·From·Walls () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void EmitBloodFromWalls ( int Duration, int Count ) {: .copyable aria-label='Functions' }

___
### Find·Free·Pickup·Spawn·Position () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [Vector](Vector.md) FindFreePickupSpawnPosition ( [Vector](Vector.md) Pos, float InitialStep = 0, boolean AvoidActiveEntities = false, boolean AllowPits = false ) {: .copyable aria-label='Functions' }
Starting from Pos, will try to find a free spawn position where a newly spawned pickup item will not collide with already spawned pickup items, or solid grid elements such as rocks, or pits The returned position will be aligned to the grid. If no free position is found, the original position (aligned to the grid) is returned.
___
### Find·Free·Tile·Position () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) FindFreeTilePosition ( [Vector](Vector.md) Pos, float DistanceThreshold ) {: .copyable aria-label='Functions' }
Finds the nearest free tile based on position Stops immediately if the tile sampled has a squared distance less than DistanceThresholdSQ
___
### Get·Alive·Bosses·Count () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetAliveBossesCount ( ) {: .copyable aria-label='Functions' }

___
### Get·Alive·Enemies·Count () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetAliveEnemiesCount ( ) {: .copyable aria-label='Functions' }

___
### Get·Award·Seed () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetAwardSeed ( ) {: .copyable aria-label='Functions' }

___
### Get·Backdrop·Type () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [BackdropType](enums/BackdropType.md) GetBackdropType ( ) {: .copyable aria-label='Functions' }

Returns the BackdropType of the current room.

___
### Get·Boss·ID () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetBossID ( ) {: .copyable aria-label='Functions' }
Returns the boss id of the second boss in a double trouble room. returns 0 otherwise.

This will return the subtype of the current room, since this value is used to determine the boss-portrait to display when entering.

A boss ID is **NOT** equal to the entity Type of the boss, but is defined as a separate value in the entities2.xml file inside the "bossID" attribute.
___
### Get·Bottom·Right·Pos () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) GetBottomRightPos ( ) {: .copyable aria-label='Functions' }
returns bottom right position inside of walls
___
### Get·Broken·Watch·State () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetBrokenWatchState ( ) {: .copyable aria-label='Functions' }

___
### Get·Center·Pos () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) GetCenterPos ( ) {: .copyable aria-label='Functions' }
returns the room center position
___
### Get·Clamped·Grid·Index () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetClampedGridIndex ( [Vector](Vector.md) Position ) {: .copyable aria-label='Functions' }
converts float position (x,y) to grid index (similar to ingrid) clamps the values if out of bounds
___
### Get·Clamped·Position () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) GetClampedPosition ( [Vector](Vector.md) Pos, float Margin ) {: .copyable aria-label='Functions' }
returns Pos clamped to room borders inside of walls
___
### Get·Decoration·Seed () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetDecorationSeed ( ) {: .copyable aria-label='Functions' }

___
### Get·Delirium·Distance () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetDeliriumDistance ( ) {: .copyable aria-label='Functions' }

___
### Get·Devil·Room·Chance () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### float GetDevilRoomChance ( ) {: .copyable aria-label='Functions' }

___
### Get·Door () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [GridEntityDoor](GridEntityDoor.md) GetDoor ( [DoorSlot](enums/DoorSlot.md) Slot ) {: .copyable aria-label='Functions' data-altreturn='nil' }
Returns the [GridEntityDoor](GridEntityDoor.md) at the given [DoorSlot](enums/DoorSlot.md) position. Returns nil if no Door is located there.

___
### Get·Door·Slot·Position () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) GetDoorSlotPosition ( [DoorSlot](enums/DoorSlot.md) Slot ) {: .copyable aria-label='Functions' }

___
### Get·Dungeon·Rock·Idx () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetDungeonRockIdx ( ) {: .copyable aria-label='Functions' }

___
### Get·Entities () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [EntityList](CppContainer_EntityList.md) GetEntities ( ) {: .copyable aria-label='Functions' }

???+ bug "Bugs"
    This function is bugged and you should use [Isaac.GetRoomEntities()](Isaac.md#getroomentities) instead!

___
### Get·Frame·Count () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetFrameCount ( ) {: .copyable aria-label='Functions' }

___
### Get·Grid·Collision () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [GridCollisionClass](enums/GridCollisionClass.md) GetGridCollision ( int GridIndex ) {: .copyable aria-label='Functions' }

Returns the [GridCollisionClass](enums/GridCollisionClass.md) of the grid entity at this grid index.
___
### Get·Grid·Collision·At·Pos () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [GridCollisionClass](enums/GridCollisionClass.md) GetGridCollisionAtPos ( [Vector](Vector.md) Pos ) {: .copyable aria-label='Functions' }

Returns the [GridCollisionClass](enums/GridCollisionClass.md) of the grid entity at this position in the room.
___
### Get·Grid·Entity () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [GridEntity](GridEntity.md) GetGridEntity ( int Index ) {: .copyable aria-label='Functions' data-altreturn='nil' }

Returns the [GridEntity](GridEntity.md) at this grid index. Returns `nil`, when no [GridEntity](GridEntity.md) is found.
___
### Get·Grid·Entity·From·Pos () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [GridEntity](GridEntity.md) GetGridEntityFromPos ( [Vector](Vector.md) Position ) {: .copyable aria-label='Functions' data-altreturn='nil' }

Returns the [GridEntity](GridEntity.md) at this position in the room. Returns `nil`, when no [GridEntity](GridEntity.md) is found.
___
### Get·Grid·Height () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetGridHeight ( ) {: .copyable aria-label='Functions' }

___
### Get·Grid·Index () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetGridIndex ( [Vector](Vector.md) Position ) {: .copyable aria-label='Functions' }
converts float position (x,y) to grid index returns -1 for invalid index
___
### Get·Grid·Path () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetGridPath ( int Index ) {: .copyable aria-label='Functions' }
Grid path is a property of a grid square that represents the "cost" of traveling over this grid cell. Its used for the path finding algorithms which search the cheapest path to a given location. If a grid cell has a value higher than 0, it can prevent grid entities from being spawned on that square. Thus, you can get around it by resetting the grid path to 0, and then spawning the grid entity.

Some enemies set it to 900 when they path over a square. Fireplaces set it to 950. Most grid entities set it to 1000 or higher, in order to prevent enemies to travel through them.
___
### Get·Grid·Path·From·Pos () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetGridPathFromPos ( [Vector](Vector.md) Position ) {: .copyable aria-label='Functions' }

___
### Get·Grid·Position () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) GetGridPosition ( int GridIndex ) {: .copyable aria-label='Functions' }
converts grid index to float (x,y) position undefined behavior for invalid index
___
### Get·Grid·Size () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetGridSize ( ) {: .copyable aria-label='Functions' }

___
### Get·Grid·Width () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetGridWidth ( ) {: .copyable aria-label='Functions' }

___
### Get·Laser·Target () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) GetLaserTarget ( [Vector](Vector.md) Pos, [Vector](Vector.md) Dir ) {: .copyable aria-label='Functions' }
returns the hit position for a laser beam (Technology, Robo-Baby) usually, the first poop, fire, rock, TNT, or wall encountered on a straight line

___
### Get·Lava·Intensity () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### float GetLavaIntensity ( ) {: .copyable aria-label='Functions' }
Usually returns 1, unless the lava is in the process of being cooled down by Flush! or other room flooding effects, in which case this will gradually decrease down to 0

___
### Get·Lighting·Alpha () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### float GetLightingAlpha ( ) {: .copyable aria-label='Functions' }

___
### Get·LRoom·Area·Desc () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### LRoomAreaDesc GetLRoomAreaDesc ( ) {: .copyable aria-label='Functions' }

???+ bug "Bug"
    Since it returns UserData, this function is unusable and therefore broken.
___
### Get·LRoom·Tile·Desc () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### LRoomTileDesc GetLRoomTileDesc ( ) {: .copyable aria-label='Functions' }

???+ bug "Bug"
    Since it returns UserData, this function is unusable and therefore broken.
___
### Get·Next·Shockwave·Id () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetNextShockwaveId ( ) {: .copyable aria-label='Functions' }

___
### Get·Random·Position () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) GetRandomPosition ( float Margin ) {: .copyable aria-label='Functions' }
returns random non tile aligned position
___
### Get·Random·Tile·Index () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetRandomTileIndex ( int Seed ) {: .copyable aria-label='Functions' }

___
### Get·Red·Heart·Damage () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean GetRedHeartDamage ( ) {: .copyable aria-label='Functions' }

___
### Get·Render·Mode () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [RenderMode](enums/RenderMode.md) GetRenderMode ( ) {: .copyable aria-label='Functions' }
Returns a RenderMode enum which can be used to render entities differently depending on context (i.e. custom water reflections)
___
### Get·Render·Scroll·Offset () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [Vector](Vector.md) GetRenderScrollOffset ( ) {: .copyable aria-label='Functions' }
The camera scroll offset and screen shake offsets are both represented here.
___
### Get·Render·Surface·Top·Left () {: aria-label='Functions' }
[ ](#){: .const .tooltip .badge } [ ](#){: .abrep .tooltip .badge }
#### const [Vector](Vector.md) GetRenderSurfaceTopLeft ( ) {: .copyable aria-label='Functions' }
The position the floor and wall textures will be rendered at.
___
### Get·Room·Config·Stage () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetRoomConfigStage ( ) {: .copyable aria-label='Functions' }
Returns the stage the room was designed for.

???- note "Stage IDs (corresponds to ids in stages.xml)"

    | ID | Backdrop | Notes |
    |--:|:--||
    |0|Special Rooms||
    |1|Basement||
    |2|Cellar||
    |3|Burning Basement||
    |4|Caves||
    |5|Catacombs||
    |6|Drowned Caves||
    |7|Depths||
    |8|Necropolis||
    |9|Dank Depths||
    |10|Womb||
    |11|Utero||
    |12|Scarred Womb||
    |13|Blue Womb (Hush)||
    |14|Sheol||
    |15|Cathedral||
    |16|Dark Room||
    |17|Chest||
    |18|Special Rooms (Greed Mode)||
    |19|Basement (Greed Mode)|Normally inaccessible. In greed mode, the main room is based off of the Special Rooms (Greed Mode) file.|
    |20|Caves (Greed Mode)|Normally inaccessible unless in the first variant of unused stage 13. In greed mode, the main room is based off of the Special Rooms (Greed Mode) file.|
    |21|Depths (Greed Mode)|Normally inaccessible unless in the second variant of unused stage 13. In greed mode, the main room is based off of the Special Rooms (Greed Mode) file.|
    |22|Womb (Greed Mode)|Normally inaccessible unless in the third variant of unused stage 13. In greed mode, the main room is based off of the Special Rooms (Greed Mode) file.|
    |23|Sheol (Greed Mode)|Normally inaccessible. In greed mode, the main room is based off of the Special Rooms (Greed Mode) file.|
    |24|The Shop (Greed Mode)|Normally inaccessible. In greed mode, the main room is based off of the Special Rooms (Greed Mode) file.|
    |25|Ultra Greed (Greed Mode)||
    |26|The Void|Normally inaccessible. This stage uses rooms from other stages, and will return their respective values.|
___
### Get·Room·Shape () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [RoomShape](enums/RoomShape.md) GetRoomShape ( ) {: .copyable aria-label='Functions' }

___
### Get·Second·Boss·ID () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetSecondBossID ( ) {: .copyable aria-label='Functions' }
Returns the boss id of the second boss in a double trouble room. returns 0 otherwise.

A boss ID is **NOT** equal to the entity Type of the boss, but is defined as a separate value in the entities2.xml file inside the "bossID" attribute.

___
### Get·Seeded·Collectible () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [CollectibleType](enums/CollectibleType.md) GetSeededCollectible ( int Seed ) {: .copyable aria-label='Functions' }

???+ bug "Bug"
    Calling this function crashes the game

___
### Get·Shop·Level () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetShopLevel ( ) {: .copyable aria-label='Functions' }

___
### Get·Spawn·Seed () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetSpawnSeed ( ) {: .copyable aria-label='Functions' }

___
### Get·Tinted·Rock·Idx () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### int GetTintedRockIdx ( ) {: .copyable aria-label='Functions' }

___
### Get·Top·Left·Pos () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) GetTopLeftPos ( ) {: .copyable aria-label='Functions' }
returns top left position inside of walls
___
### Get·Type () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [RoomType](enums/RoomType.md) GetType ( ) {: .copyable aria-label='Functions' }

___
### Get·Water·Current () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### [Vector](Vector.md) GetWaterCurrent ( ) {: .copyable aria-label='Functions' }
Returns a vector corresponding to any water current in the room

___
### Has·Curse·Mist () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean HasCurseMist ( ) {: .copyable aria-label='Functions' }
Returns true if the player is inside the abandoned mineshaft

___
### Has·Lava () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean HasLava ( ) {: .copyable aria-label='Functions' }
Returns true if the room contains lava pits

___
### Has·Slow·Down () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean HasSlowDown ( ) {: .copyable aria-label='Functions' }

___
### Has·Trigger·Pressure·Plates () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean HasTriggerPressurePlates ( ) {: .copyable aria-label='Functions' }
Returns true if there are one or more pressure plates in the room. (In order to see if the pressure plates are pressed or not, you will have to iterate over the grid entities in the room.)

___
### Has·Water () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean HasWater ( ) {: .copyable aria-label='Functions' }

___
### Has·Water·Pits () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean HasWaterPits ( ) {: .copyable aria-label='Functions' }

___
### Invalidate·Pickup·Vision () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void InvalidatePickupVision ( ) {: .copyable aria-label='Functions' }
Causes chest previews from Guppy's Eye to be updated on the next frame

___
### Is·Ambush·Active () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsAmbushActive ( ) {: .copyable aria-label='Functions' }

___
### Is·Ambush·Done () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsAmbushDone ( ) {: .copyable aria-label='Functions' }

___
### Is·Clear () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsClear ( ) {: .copyable aria-label='Functions' }

___
### Is·Current·Room·Last·Boss () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsCurrentRoomLastBoss ( ) {: .copyable aria-label='Functions' }

___
### Is·Door·Slot·Allowed () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsDoorSlotAllowed ( [DoorSlot](enums/DoorSlot.md) Slot ) {: .copyable aria-label='Functions' }
Returns whether this room design may have a door at a given position, disregarding whether those doors exist.

___
### Is·First·Enemy·Dead () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsFirstEnemyDead ( ) {: .copyable aria-label='Functions' }

___
### Is·First·Visit () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsFirstVisit ( ) {: .copyable aria-label='Functions' }

___
### Is·Initialized () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsInitialized ( ) {: .copyable aria-label='Functions' }

___
### Is·LShaped·Room () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsLShapedRoom ( ) {: .copyable aria-label='Functions' }

___
### Is·Mirror·World () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean IsMirrorWorld ( ) {: .copyable aria-label='Functions' }
Returns true if the player is inside the mirror dimension

___
### Is·Position·In·Room () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsPositionInRoom ( [Vector](Vector.md) Pos, float Margin ) {: .copyable aria-label='Functions' }

___
### Is·Sacrifice·Done () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean IsSacrificeDone ( ) {: .copyable aria-label='Functions' }

___
### Keep·Doors·Closed () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void KeepDoorsClosed ( ) {: .copyable aria-label='Functions' }

___
### Mama·Mega·Explosion () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void MamaMegaExplosion ( [Vector](Vector.md) Position ) {: .copyable aria-label='Functions' }

___
### Play·Music () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void PlayMusic ( ) {: .copyable aria-label='Functions' }

___
### Remove·Door () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void RemoveDoor ( [DoorSlot](enums/DoorSlot.md) Slot ) {: .copyable aria-label='Functions' }

___
### Remove·Grid·Entity () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void RemoveGridEntity ( int GridIndex, int PathTrail, boolean KeepDecoration ) {: .copyable aria-label='Functions' }

* `GridIndex` is the location of the grid as shown with the `debug 11` console command.
* `PathTrail` is the "cost" to leave behind on the square. In most cases, you would want to pass 0 for this argument.

**It is recommended to call [Room:Update()](#update) after calling this function in order to correctly apply the changes.**
___
### Render () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Render ( ) {: .copyable aria-label='Functions' }

___
### Respawn·Enemies () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void RespawnEnemies ( ) {: .copyable aria-label='Functions' }
for D7 collectible
___
### Screen·Wrap·Position () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) ScreenWrapPosition ( [Vector](Vector.md) Pos, float Margin ) {: .copyable aria-label='Functions' }

Returns Pos, screen-wrapped (if it is just outside the room on the right it will be moved to the left side of the room, etc)

???- note "Notes"
     This only wraps the point once, so if it has crossed multiple wrapping planes it will only wrap on the one it's closest to. For wrapping a position that has crossed two planes (outside a room in the top left for instance) call this function iteratively.
___
### Set·Ambush·Done () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetAmbushDone ( boolean Value ) {: .copyable aria-label='Functions' }

___
### Set·Broken·Watch·State () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetBrokenWatchState ( int State ) {: .copyable aria-label='Functions' }

___
### Set·Card·Against·Humanity () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetCardAgainstHumanity ( ) {: .copyable aria-label='Functions' }

___
### Set·Clear () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetClear ( boolean Clear ) {: .copyable aria-label='Functions' }
Needed for angel room, so the clear flag can be set to false when the angel spawns
___
### Set·First·Enemy·Dead () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetFirstEnemyDead ( boolean Value ) {: .copyable aria-label='Functions' }

___
### Set·Floor·Color () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetFloorColor ( [Color](Color.md) FloorColor ) {: .copyable aria-label='Functions' }

Allows you to apply a color modifier to the floor texture of the current room.

???- example "Example Code"
    This code changes the floor color to red.
    ```lua
    Game():GetRoom():SetFloorColor(Color(1,1,1,1,255,0,0))
    ```

___
### Set·Grid·Path () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean SetGridPath ( int Index, int Value ) {: .copyable aria-label='Functions' }
Grid path is a property of a grid square that represents the "cost" of traveling over this grid cell. Its used for the path finding algorithms which search the cheapest path to a given location. If a grid cell has a value higher than 0, it can prevent grid entities from being spawned on that square. Thus, you can get around it by resetting the grid path to 0, and then spawning the grid entity.

Some enemies set it to 900 when they path over a square. Fireplaces set it to 950. Most grid entities set it to 1000 or higher, in order to prevent enemies to travel through them.
___
### Set·Red·Heart·Damage () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetRedHeartDamage ( ) {: .copyable aria-label='Functions' }

___
### Set·Sacrifice·Done () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetSacrificeDone ( boolean Done ) {: .copyable aria-label='Functions' }

___
### Set·Shockwave·Param () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetShockwaveParam ( int ShockwaveId, [ShockwaveParams](ShockwaveParams.md) Params ) {: .copyable aria-label='Functions' }

___
### Set·Slow·Down () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetSlowDown ( int Duration ) {: .copyable aria-label='Functions' }

___
### Set·Wall·Color () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SetWallColor ( [Color](Color.md) WallColor ) {: .copyable aria-label='Functions' }

Allows you to apply a color modifier to the wall texture of the current room.

???- example "Example Code"
    This code changes the wall color to red.
    ```lua
    Game():GetRoom():SetWallColor(Color(1,1,1,1,255,0,0))
    ```

___
### Shop·Reshuffle () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void ShopReshuffle ( boolean KeepCollectibleIdx, boolean ReselectSaleItem ) {: .copyable aria-label='Functions' }

___
### Shop·Restock·Full () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void ShopRestockFull ( ) {: .copyable aria-label='Functions' }

___
### Shop·Restock·Partial () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void ShopRestockPartial ( ) {: .copyable aria-label='Functions' }

___
### Spawn·Clear·Award () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void SpawnClearAward ( ) {: .copyable aria-label='Functions' }

___
### Spawn·Grid·Entity () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean SpawnGridEntity ( int GridIndex, [GridEntityType](enums/GridEntityType.md) Type, int Variant, int Seed, int VarData ) {: .copyable aria-label='Functions' }

___
### Stop·Rain () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void StopRain ( ) {: .copyable aria-label='Functions' }
Stops any rain effects in the room

___
### Trigger·Clear () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### void TriggerClear ( boolean Silent = false ) {: .copyable aria-label='Functions' }
Triggers all room clear effects (does not actually clear the room)
Door opening sounds can be muted by setting Silent to true

___
### Try·Make·Bridge () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean TryMakeBridge ( [GridEntity](GridEntity.md) pit, [GridEntity](GridEntity.md) rock ) {: .copyable aria-label='Functions' }
Tries to create a bridge over a given pit. Returns true if the creation was successful. Returns false otherwise.

___
### Try·Place·Ladder () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void TryPlaceLadder ( [Vector](Vector.md) PlayerPos, [Vector](Vector.md) PlayerVelocity, [Entity](Entity.md) Ladder ) {: .copyable aria-label='Functions' }

___
### Try·Spawn·Blue·Womb·Door () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean TrySpawnBlueWombDoor ( boolean FirstTime = true, boolean IgnoreTime = false, boolean Force = false ) {: .copyable aria-label='Functions' }
Attempts to spawn a door to the Blue Womb
This usually does nothing outside of Mom's Heart's boss room unless Force is set to true

___
### Try·Spawn·Boss·Rush·Door () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean TrySpawnBossRushDoor ( boolean IgnoreTime = false, boolean Force = false ) {: .copyable aria-label='Functions' }
Attempts to spawn a door to the boss rush
This usually does nothing outside of Mom's boss room unless Force is set to true

___
### Try·Spawn·Devil·Room·Door () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean TrySpawnDevilRoomDoor ( boolean Animate = false, boolean Force = false ) {: .copyable aria-label='Functions' }
Attempts to spawn a door to the devil or angel room
This usually does nothing inside of non-boss rooms unless Force is set to true

___
### Try·Spawn·Mega·Satan·Room·Door () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean TrySpawnMegaSatanRoomDoor ( boolean Force = false ) {: .copyable aria-label='Functions' }
Attempts to spawn a door to Mega Satan
This usually does nothing outside of the starting room of the Chest/Dark Room unless Force is set to true

___
### Try·Spawn·Secret·Exit () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean TrySpawnSecretExit ( boolean Animate = false, boolean Force = false ) {: .copyable aria-label='Functions' }
Attempts to spawn a door to the Downpour, Mines or Mausoleum depending on the current floor
This usually does nothing outside of boss rooms unless Force is set to true

___
### Try·Spawn·Secret·Shop () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean TrySpawnSecretShop ( boolean Force = false ) {: .copyable aria-label='Functions' }
Attempts to spawn a trapdoor to the Member Card shop within the current room
This usually does nothing outside of shops or if the player doesn't hold a Member Card unless Force is set to true

___
### Try·Spawn·Special·Quest·Door () {: aria-label='Functions' }
[ ](#){: .rep .tooltip .badge }
#### boolean TrySpawnSpecialQuestDoor ( ) {: .copyable aria-label='Functions' }
Attempts to spawn either a door to the Mirror Dimension in Downpour, or the abandoned mineshaft in the Mines

___
### Try·Spawn·The·Void·Door () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### boolean TrySpawnTheVoidDoor ( boolean Force = false ) {: .copyable aria-label='Functions' }
Attempts to spawn a door to a room containing a Void portal
This usually does nothing outside of Hush's boss room unless Force is set to true

___
### Turn·Gold () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void TurnGold ( ) {: .copyable aria-label='Functions' }

___
### Update () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### void Update ( ) {: .copyable aria-label='Functions' }

Updates the current room.

**It is recommended to call this function after calling [Room:RemoveGridEntity()](#removegridentity) in order to correctly apply the changes.**

???- note "Notes"
    Calling this function is needed to apply some changes like spawning a trapdoor where a pit already exists.

    To do this, remove the pit, call the Update() function and then spawn the trapdoor.

???+ bug "Bug"
    As mentioned in the Repentance API Issue Tracker, [calling room:Update() as a part of card functionality forces an instant use of pocket active items](https://github.com/Meowlala/RepentanceAPIIssueTracker/issues/211).

___
### World·To·Screen·Position () {: aria-label='Functions' }
[ ](#){: .abrep .tooltip .badge }
#### [Vector](Vector.md) WorldToScreenPosition ( [Vector](Vector.md) WorldPos ) {: .copyable aria-label='Functions' }
Converts an entity position to one that can be used to render to the screen.
___
