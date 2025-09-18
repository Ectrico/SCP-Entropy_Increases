import { system, world } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
import { PlaySoundForAllPlayer } from "./misc";
// 定义主世界维度
let overworld;
// 定义下界维度
let nether;
// 定义末地维度
let theEnd;
world.afterEvents.worldLoad.subscribe((arg) => {
    // 获取主世界维度
    overworld = world.getDimension("overworld");
    // 获取下界维度
    nether = world.getDimension("nether");
    // 获取末地维度
    theEnd = world.getDimension("the_end");
});
export function MusicVote(music, info) {
    let Yes = 0;
    let No = 0;
    const VoteForm = new ActionFormData().title("音乐投票器").body(`投票选择是否播放：${info}`).button(`是`).button(`否`);
    for (const players of world.getAllPlayers()) {
        const player = players;
        VoteForm.show(player).then((response) => {
            // world.sendMessage(`${response.selection}`);
            switch (response.selection) {
                case 0:
                    player.sendMessage(`你选择播放此音乐！`);
                    Yes++;
                    break;
                case 1:
                    player.sendMessage(`你选择不播放此音乐！`);
                    No++;
                    break;
            }
        });
    }
    system.runTimeout(() => {
        if (Yes > No) {
            world.sendMessage(`对播放音乐：§e${info}§f的投票已完成, 结果为：播放`);
            overworld.runCommand(`stopsound @a`);
            // world.sendMessage(`${music}`);
            system.runTimeout(() => {
                PlaySoundForAllPlayer(music);
            }, 1);
        } //
        else {
            world.sendMessage(`对播放音乐：§e${info}§f的投票已完成, 结果为：不播放`);
        }
    }, 200);
}
//# sourceMappingURL=activity.js.map