# Auto Tag

Minecraft Bedrock 1.21.100+ behavior pack, when a player first joins a world they are given a tag of their player name. Allows for easier identification of a player when using an NBT editor like Universal Minecraft Tool, since player data is displayed as a long alphanumeric sequence instead of the player's gamer tag.

## Installing the pack:

You may dowload the latest release from the [Releases Page](https://github.com/mittens4all/Auto-Tag/releases)

Add the Auto Tag add-on to your behavior packs on your world. Behavior packs may disable achievements, but editing the world with an NBT editor can re-enable achievements when uploading your world to a realm.

Re-enable achievements on either pc or mobile with the free NBT editor [Dovetail](https://github.com/Offroaders123/Dovetail)

## How to Use

You can check a player's tags after they join by running the following command in chat:

```yaml
/tag <entity: target> list
```

**Notes**
- Player names that include spaces will automatically convert the space to an underscore.
- Make sure the feedback gamerule is set to true in order to see the player's tags in chat:

```
/gamerule sendcommandfeedback true
```

### NBT editor

![Universal Minecraft Tool](/images/autotag_umt.png) 

## Author

- [@mittens4all](https://www.github.com/mittens4all)
- [Youtube](https://www.youtube.com/@mittens4all)

```js
       _                              _     _       _ _  
      (_)  _     _                   | |   | |     | | | 
 ____  _ _| |_ _| |_ _____ ____   ___| |___| |_____| | | 
|    \| (_   _|_   _) ___ |  _ \ /___)_____  (____ | | | 
| | | | | | |_  | |_| ____| | | |___ |     | / ___ | | | 
|_|_|_|_|  \__)  \__)_____)_| |_(___/      |_\_____|\_)_)
                                                         
```