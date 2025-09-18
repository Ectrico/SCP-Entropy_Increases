import { system, world } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
import { Entropy_Increases, Inbreak, Infection, setGameMode } from "../main";

export function VoteChangeMode() {
  // 使用更清晰的变量名
  const votes = {
    entropyIncreases: 0, // EI模式票数
    inbreak: 0, // Inbreak模式票数
    infection: 0, // Infection模式票数
  };

  const votedPlayers = new Set(); // 防止重复投票
  const VOTE_DURATION = 300; // 30秒投票时间 (20 ticks/second * 15)
  const VOTE_UPDATE_INTERVAL = 40; // 每2秒更新统计

  // 投票统计显示
  const voteInterval = system.runInterval(() => {
    world.sendMessage(
      `§e投票统计: §bEI-${votes.entropyIncreases} ` + `§2Inbreak-${votes.inbreak} ` + `§cInfection-${votes.infection}`
    );
  }, VOTE_UPDATE_INTERVAL);

  // 创建投票菜单
  const voteMenu = new ActionFormData()
    .title("模式投票")
    .header("§a选择下一回合游戏模式")
    .button("§bEntropy_Increases\n§b新收容失效模式")
    .button("§2Inbreak\n§2入侵模式")
    .button("§cInfection\n§c感染模式");

  // 向所有玩家显示投票菜单
  for (const player of world.getAllPlayers()) {
    if (votedPlayers.has(player.id)) continue;

    voteMenu
      .show(player as any)
      .then((response) => {
        if (response.selection === undefined) return;

        votedPlayers.add(player.id);

        switch (response.selection) {
          case 0:
            votes.entropyIncreases++;
            break;
          case 1:
            votes.inbreak++;
            break;
          case 2:
            votes.infection++;
            break;
        }

        // 给玩家投票反馈
        const votedFor = ["§bEntropy_Increases", "§2Inbreak", "§cInfection"][response.selection];
        player.sendMessage(`§a你已投票: ${votedFor}`);
      })
      .catch(() => {});
  }

  // 投票结束处理
  system.runTimeout(() => {
    system.clearRun(voteInterval);

    // 找出得票最高的模式
    const voteResults = [
      { mode: Entropy_Increases, votes: votes.entropyIncreases, name: "§bEntropy_Increases" },
      { mode: Inbreak, votes: votes.inbreak, name: "§2Inbreak" },
      { mode: Infection, votes: votes.infection, name: "§cInfection" },
    ];

    // 按票数排序
    voteResults.sort((a, b) => b.votes - a.votes);

    // 处理平票情况（选择第一个最高票的）
    const winningMode = voteResults[0];

    setGameMode(winningMode.mode);
    world.sendMessage(`§e投票结束！下一回合模式: §l${winningMode.name}`);
  }, VOTE_DURATION);
}
