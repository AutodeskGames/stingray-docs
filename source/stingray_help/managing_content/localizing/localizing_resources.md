# Localizing resources

You may sometimes need your game to load and use different versions of a resource depending on runtime conditions. For example, if you want to translate your game into multiple languages, you may need to show different textures or play different animations depending on the current language chosen by the player. Or, you may need to use different versions of a resource depending on the platform the game currently is running on.

Stingray provides a built-in resource selection mechanism that can automatically choose the most appropriate version of each resource to load, based on settings that you specify.

## The basic override mechanism

The localization mechanism is based on the fundamental concept of *overrides*. Overrides specify that when a certain resource is requested by the engine, a different one should be automatically substituted. For example, if the following override was active:

* `trees/larch_03.unit` → `trees/pine_05.unit`

Then whenever the engine was about to spawn `larch_03`, it would spawn `pine_05` instead. So a level full of larches would be seen as a level full of pine trees instead.

The override happens when a resource is instantiated, for example when a unit is spawned. It doesn't apply retroactively, so any larches that were spawned before the override was enabled will still be larches after the override has been enabled.

The overriding resources will still be pines. If you ask them for their name, it will be `trees/pine_05`, not `trees/larch_03`. It is up to the game developer to make sure that they have all the necessary actors, bones, meshes etc, to work as substitutes for the resources they are overriding.

Note that only individual resources can be overriden. You can't override folders.

## Scripted overrides

The most straightforward way of making one resource override another is to explicitly specify it from the script:

~~~{lua}
stingray.Application.set_resource_override("unit", "trees/larch_03", "trees/pine_05")
~~~

This type of override is extremely flexible and powerful, since it gives the script complete control over which resources override which other resources. But since this approach is completely script driven, it doesn't affect how packages are compiled. So any resources that you want to use to override other resources will have to be manually added to the `.package` files.

## Suffix overrides

The suffix override system creates automatic overrides based on resource suffixes. It is not as flexible as the scripted system, but it is more convenient, and since it is a static system it is understood by the bundling system.

Suffix overrides are specified in the `settings.ini` file. A sample might look like this:

```
data_compiler = {
    resource_overrides = [
        {suffix = ".win32", platforms = ["win32"]}
        {suffix = ".ps4", platforms = ["ps4"]}
        {suffix = ".xb1", platforms = ["xb1"]}
        {suffix = ".ios", platforms = ["ios"]}
        {suffix = ".android", platforms = ["android"]}

        {suffix = ".noblood", flags = ["noblood"]}
        {suffix = ".4k", flags = ["4k"]}
        {suffix = ".color-blind", flags = ["color-blind"]}
    ]
}
```

When a suffix override is active and the project has a resource with the suffix an override is automatically created from the base resource to the suffixed resource.

So if the `.ps4` suffix is active and the engine has both the resources `rocks/big_white_rock.unit` and `rocks/big_white_rock.ps4.unit`, then the override:

* `rocks/big_white_rock.unit` → `rock/big_white_rock.ps4.unit`

will automatically be created.

Traditionally, suffix overrides start with a period (`.`), but this is not a requirement. The suffix could be any string, such as `-hifi`.

There are two types of suffix overrides -- platform suffixes and flag suffixes. Platform suffixes apply automatically when you compile your data for a particular platform. I.e if you have:

```
{suffix = ".mobile", platforms = ["ios", "android"]}
```

Then this override will be active whenever you are compiling for iOS or Android.

For flag suffixes, you can specify the state of the flag at compile time:

```
--resource-flag-true noblood --resource-flag-false 4k
```

If you do, the flags will be hard-mapped to *true* or *false* and only the resources corresponding to those values will be included in the bundles.

Any flags not set to *true* or *false* during compile time will be considered dynamic flags. In this case, both resource variants will be included in the bundles and you can switch between them at runtime by setting and clearing the flags:

~~~{lua}
stingray.Application.set_resource_override_flag("color-blind", 100)
~~~

This enables the `color-blind` flag and sets its priority to 100. Priorities come into play when multiple runtime resources could potentially apply. The override with the highest priority will take precedence. The base resource (without any runtime flags) is considered to have priority 0. Explicit overrides set by the script will always have precedence over scripted overrides.

For simplicity, multiple suffixes on a resource are not supported. At most one suffix will match. If you want to use combinations of flags and platforms you have to create explicit suffixes for those combinations.

## Game authoring with localized resources

While you are working on your game, always refer to the most generic version of your resources. If you explicitly put `big_white_rock.ps4` units in a level, then that resource will be used on all platforms. To get the override resolution, you should put `big_white_rock` units in the level and they will be automatically remapped to `big_white_rock.ps4`, `big_white_rock.xb1`, based on your override settings.
