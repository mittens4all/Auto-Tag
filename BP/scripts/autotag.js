import { world } from '@minecraft/server';

world.afterEvents.playerSpawn.subscribe((event) => {
    if (!event.initialSpawn) return;
    const player = event.player;
    const gamerTag = parseGamerTag(player);
    if (!player.hasTag(gamerTag)) {
        player.addTag(gamerTag);
    }
});

function parseGamerTag(player) {
    let gamerTag = player.name;

    if (!gamerTag.includes(' ')) {
        return gamerTag;
    }

    if (gamerTag.includes(' ')) {
        gamerTag = gamerTag.replace(' ', '_');
        return gamerTag;
    }
}
