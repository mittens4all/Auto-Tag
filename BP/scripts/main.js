import { world } from "@minecraft/server";

world.afterEvents.worldLoad.subscribe(() => {
    import("./autotag.js");
});
