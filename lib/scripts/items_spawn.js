import { world } from "@minecraft/server";
import { RandomItemsPoint, FixedItemsPoint } from "./maps/ft_site_15";
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
// 物品刷新
export function RandomItemSpawn() {
    // SCP-500 || SCP-420-J
    for (const vector of RandomItemsPoint.SCP500_Or_SCP420J) {
        const RandomArray = ["bl:scp500_block", "bl:scp500_block", "bl:scp420j_block"];
        const Subject = RandomArray[Math.floor(Math.random() * RandomArray.length)];
        const Vector = vector;
        if (Math.random() < 0.7) {
            overworld.setBlockType(Vector, Subject);
        }
    }
    // Lv1
    for (const [type, vector] of RandomItemsPoint.Lv1) {
        const Vector = vector;
        if (Math.random() < 0.7) {
            if (type === "shelf" || type === "cabinet") {
                const Shelf = overworld.getBlock(Vector);
                const NewState = Shelf === null || Shelf === void 0 ? void 0 : Shelf.permutation.withState("ft:contain", "1");
                Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(NewState);
            } //
            else if (type === "drops") {
                overworld.setBlockType(Vector, "bl:card_placed_lv1");
            }
        }
    }
    // Lv2
    for (const [type, vector] of RandomItemsPoint.Lv2) {
        const Vector = vector;
        if (Math.random() < 0.8) {
            if (type === "shelf" || type === "cabinet") {
                const Shelf = overworld.getBlock(Vector);
                const NewState = Shelf === null || Shelf === void 0 ? void 0 : Shelf.permutation.withState("ft:contain", "2");
                Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(NewState);
            } //
            else if (type === "drops") {
                overworld.setBlockType(Vector, "bl:card_placed_lv2");
            }
        }
    }
    // Lv1_2
    for (const [type, vector] of RandomItemsPoint.Lv1_2) {
        const Vector = vector;
        const RandomNum = Math.random();
        if (RandomNum <= 0.8) {
            if (type === "shelf" || type === "cabinet") {
                const Shelf = overworld.getBlock(Vector);
                const NewState = Shelf === null || Shelf === void 0 ? void 0 : Shelf.permutation.withState("ft:contain", "1");
                Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(NewState);
            } //
            else if (type === "drops") {
                overworld.setBlockType(Vector, "bl:card_placed_lv1");
            }
        }
        //
        else if (RandomNum > 0.5 && RandomNum <= 0.7) {
            if (type === "shelf" || type === "cabinet") {
                const Shelf = overworld.getBlock(Vector);
                const NewState = Shelf === null || Shelf === void 0 ? void 0 : Shelf.permutation.withState("ft:contain", "2");
                Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(NewState);
            } //
            else if (type === "drops") {
                overworld.setBlockType(Vector, "bl:card_placed_lv2");
            }
        } //
        else {
            undefined;
        }
    }
    // Lv3
    for (const [type, vector] of RandomItemsPoint.Lv3) {
        const Vector = vector;
        if (Math.random() < 0.7) {
            if (type === "shelf" || type === "cabinet") {
                const Shelf = overworld.getBlock(Vector);
                const NewState = Shelf === null || Shelf === void 0 ? void 0 : Shelf.permutation.withState("ft:contain", "3");
                Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(NewState);
            } //
            else if (type === "drops") {
                overworld.setBlockType(Vector, "bl:card_placed_lv3");
            }
        }
    }
    // Lv4
    for (const [type, vector] of RandomItemsPoint.Lv4) {
        const Vector = vector;
        if (Math.random() < 0.6) {
            if (type === "shelf" || type === "cabinet") {
                const Shelf = overworld.getBlock(Vector);
                const NewState = Shelf === null || Shelf === void 0 ? void 0 : Shelf.permutation.withState("ft:contain", "4");
                Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(NewState);
            } //
            else if (type === "drops") {
                overworld.setBlockType(Vector, "bl:card_placed_lv4");
            }
        }
    }
    // Lv5
    for (const [type, vector] of RandomItemsPoint.Lv5) {
        const Vector = vector;
        if (Math.random() < 0.5) {
            if (type === "shelf" || type === "cabinet") {
                const Shelf = overworld.getBlock(Vector);
                const NewState = Shelf === null || Shelf === void 0 ? void 0 : Shelf.permutation.withState("ft:contain", "5");
                Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(NewState);
            } //
            else if (type === "drops") {
                overworld.setBlockType(Vector, "bl:card_placed_lv5");
            }
        }
    }
    // LvCI
    for (const [type, vector] of RandomItemsPoint.LvCI) {
        const Vector = vector;
        if (Math.random() < 0.3) {
            if (type === "shelf" || type === "cabinet") {
                const Shelf = overworld.getBlock(Vector);
                const NewState = Shelf === null || Shelf === void 0 ? void 0 : Shelf.permutation.withState("ft:contain", "ci");
                Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(NewState);
            } //
            else if (type === "drops") {
                overworld.setBlockType(Vector, "bl:card_placed_lvci");
            }
        }
    }
    // LvDepartment
    for (const [type, vector] of RandomItemsPoint.LvDepartment) {
        const Vector = vector;
        const DepartmentCards = ["alpha", "fs", "sm", "w"];
        const RandomCard = DepartmentCards[Math.floor(Math.random() * DepartmentCards.length)];
        if (Math.random() < 0.1) {
            if (type === "shelf" || type === "cabinet") {
                const Shelf = overworld.getBlock(Vector);
                const NewState = Shelf === null || Shelf === void 0 ? void 0 : Shelf.permutation.withState("ft:contain", RandomCard);
                Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(NewState);
            } //
            else if (type === "drops") {
                overworld.setBlockType(Vector, `bl:card_placed_lv${RandomCard}`);
            }
        }
    }
    // FuseLow
    for (const vector of RandomItemsPoint.FuseLow) {
        const FuseLowArray = ["bl:fuse_1a", "bl:fuse_2a", "bl:fuse_3a"];
        const Fuse = FuseLowArray[Math.floor(Math.random() * FuseLowArray.length)];
        const Vector = vector;
        if (Math.random() < 0.9) {
            overworld.setBlockType(Vector, Fuse);
        }
    }
    // FuseMiddle
    for (const vector of RandomItemsPoint.FuseMiddle) {
        const FuseLowArray = ["bl:fuse_4a", "bl:fuse_6a", "bl:fuse_8a"];
        const Fuse = FuseLowArray[Math.floor(Math.random() * FuseLowArray.length)];
        const Vector = vector;
        if (Math.random() < 0.7) {
            overworld.setBlockType(Vector, Fuse);
        }
    }
    // FuseHigh
    for (const vector of RandomItemsPoint.FuseHigh) {
        const FuseLowArray = ["bl:fuse_9a", "bl:fuse_12a"];
        const Fuse = FuseLowArray[Math.floor(Math.random() * FuseLowArray.length)];
        const Vector = vector;
        if (Math.random() < 0.4) {
            overworld.setBlockType(Vector, Fuse);
        }
    }
    // FirstAidKit
    for (const vector of RandomItemsPoint.FirstAidKit) {
        const Vector = vector;
        if (Math.random() < 0.7) {
            overworld.setBlockType(Vector, "bl:first_aid_kit");
        }
    }
    // SmallFirstAidKit
    for (const vector of RandomItemsPoint.SmallFirstAidKit) {
        const Vector = vector;
        if (Math.random() < 0.7) {
            overworld.setBlockType(Vector, "bl:small_first_aid_kit");
        }
    }
    // Pistol
    for (const vector of RandomItemsPoint.Pistol) {
        const Vector = vector;
        if (Math.random() < 0.7) {
            overworld.setBlockType(Vector, RandonGunString("pistol"));
        }
    }
    // SMG
    for (const vector of RandomItemsPoint.SMG) {
        const Vector = vector;
        if (Math.random() < 0.7) {
            overworld.setBlockType(Vector, RandonGunString("smg"));
        }
    }
    // Rifle
    for (const vector of RandomItemsPoint.Rifle) {
        const Vector = vector;
        if (Math.random() < 0.5) {
            overworld.setBlockType(Vector, RandonGunString("rifle"));
        }
    }
    // Shotgun 暂时改刷冲锋枪
    for (const vector of RandomItemsPoint.Shotgun) {
        const Vector = vector;
        if (Math.random() < 0.3) {
            overworld.setBlockType(Vector, RandonGunString("smg"));
        }
    }
    // SniperRifle 暂时改刷步枪
    for (const vector of RandomItemsPoint.SniperRifle) {
        const Vector = vector;
        if (Math.random() < 0.3) {
            overworld.setBlockType(Vector, RandonGunString("rifle"));
        }
    }
    // NVG
    for (const vector of RandomItemsPoint.NVG) {
        const Vector = vector;
        if (Math.random() < 0.7) {
            overworld.setBlockType(Vector, "bl:gpnvg");
        }
    }
}
export function FixedItemSpawn() {
    // SCP-500
    for (const vector of FixedItemsPoint.SCP500) {
        const Vector = vector;
        overworld.setBlockType(Vector, "bl:scp500_block");
    }
    // SCP-714
    for (const vector of FixedItemsPoint.SCP714) {
        const Vector = vector;
        overworld.setBlockType(Vector, "bl:scp714_block");
    }
    // Lv2
    for (const [type, vector] of FixedItemsPoint.Lv2) {
        const Vector = vector;
        if (type === "shelf" || type === "cabinet") {
            const Shelf = overworld.getBlock(Vector);
            const NewState = Shelf === null || Shelf === void 0 ? void 0 : Shelf.permutation.withState("ft:contain", "2");
            Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(NewState);
        } //
        else if (type === "drops") {
            overworld.setBlockType(Vector, "bl:card_placed_lv2");
        }
    }
    // FirstAidKit
    for (const vector of FixedItemsPoint.FirstAidKit) {
        const Vector = vector;
        overworld.setBlockType(Vector, "bl:first_aid_kit");
    }
    // SmallFirstAidKit
    for (const vector of FixedItemsPoint.SmallFirstAidKit) {
        const Vector = vector;
        overworld.setBlockType(Vector, "bl:small_first_aid_kit");
    }
    // Pistol
    for (const vector of FixedItemsPoint.Pistol) {
        const Vector = vector;
        overworld.setBlockType(Vector, RandonGunString("pistol"));
    }
    // SMG
    for (const vector of FixedItemsPoint.SMG) {
        const Vector = vector;
        overworld.setBlockType(Vector, RandonGunString("smg"));
    }
    // Rifle
    for (const vector of FixedItemsPoint.Rifle) {
        const Vector = vector;
        overworld.setBlockType(Vector, RandonGunString("rifle"));
    }
    // Shotgun 暂时改刷冲锋枪
    for (const vector of FixedItemsPoint.Shotgun) {
        const Vector = vector;
        overworld.setBlockType(Vector, RandonGunString("smg"));
    }
    // SniperRifle 暂时改刷步枪
    for (const vector of FixedItemsPoint.SniperRifle) {
        const Vector = vector;
        overworld.setBlockType(Vector, RandonGunString("rifle"));
    }
    // WhiteHand
    for (const vector of FixedItemsPoint.WhiteHand) {
        const Vector = vector;
        overworld.setBlockType(Vector, "bl:invhand_white");
    }
    // BlackHand
    for (const vector of FixedItemsPoint.BlackHand) {
        const Vector = vector;
        overworld.setBlockType(Vector, "bl:invhand_black");
    }
    // NVG
    for (const vector of FixedItemsPoint.NVG) {
        const Vector = vector;
        overworld.setBlockType(Vector, "bl:gpnvg");
    }
}
//
//
//
export function ClearAllItems() {
    // Empty_Shelf
    for (const vector of FixedItemsPoint.EmptyShelf) {
        const Vector = vector;
        const Shelf = overworld.getBlock(Vector);
        const NewState = Shelf === null || Shelf === void 0 ? void 0 : Shelf.permutation.withState("ft:contain", "empty");
        Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(NewState);
    }
    // Empty_Cabinet
    for (const vector of FixedItemsPoint.EmptyCabinet) {
        const Vector = vector;
        const Shelf = overworld.getBlock(Vector);
        Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(Shelf.permutation.withState("ft:contain", "empty"));
        Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(Shelf.permutation.withState("ft:cabinet_geo", 0));
        Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(Shelf.permutation.withState("ft:logical_sequence", "forward"));
    }
    // RandomVector3
    // SCP-500 || SCP-420-J
    for (const vector of RandomItemsPoint.SCP500_Or_SCP420J) {
        const Vector = vector;
        overworld.setBlockType(Vector, "air");
    }
    // Lv1
    for (const [type, vector] of RandomItemsPoint.Lv1) {
        const Vector = vector;
        if (type === "shelf") {
            const Shelf = overworld.getBlock(Vector);
            const NewState = Shelf === null || Shelf === void 0 ? void 0 : Shelf.permutation.withState("ft:contain", "empty");
            Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(NewState);
        } //
        else if (type === "cabinet") {
            const Shelf = overworld.getBlock(Vector);
            Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(Shelf.permutation.withState("ft:contain", "empty"));
            Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(Shelf.permutation.withState("ft:cabinet_geo", 0));
            Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(Shelf.permutation.withState("ft:logical_sequence", "forward"));
        } //
        else if (type === "drops") {
            overworld.setBlockType(Vector, "air");
        }
    }
    // Lv2
    for (const [type, vector] of RandomItemsPoint.Lv2) {
        const Vector = vector;
        if (type === "shelf") {
            const Shelf = overworld.getBlock(Vector);
            const NewState = Shelf === null || Shelf === void 0 ? void 0 : Shelf.permutation.withState("ft:contain", "empty");
            Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(NewState);
        } //
        else if (type === "cabinet") {
            const Shelf = overworld.getBlock(Vector);
            Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(Shelf.permutation.withState("ft:contain", "empty"));
            Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(Shelf.permutation.withState("ft:cabinet_geo", 0));
            Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(Shelf.permutation.withState("ft:logical_sequence", "forward"));
        } //
        else if (type === "drops") {
            overworld.setBlockType(Vector, "air");
        }
    }
    // Lv1_2
    for (const [type, vector] of RandomItemsPoint.Lv1_2) {
        const Vector = vector;
        if (type === "shelf") {
            const Shelf = overworld.getBlock(Vector);
            const NewState = Shelf === null || Shelf === void 0 ? void 0 : Shelf.permutation.withState("ft:contain", "empty");
            Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(NewState);
        } //
        else if (type === "cabinet") {
            const Shelf = overworld.getBlock(Vector);
            Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(Shelf.permutation.withState("ft:contain", "empty"));
            Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(Shelf.permutation.withState("ft:cabinet_geo", 0));
            Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(Shelf.permutation.withState("ft:logical_sequence", "forward"));
        } //
        else if (type === "drops") {
            overworld.setBlockType(Vector, "air");
        }
    }
    // Lv3
    for (const [type, vector] of RandomItemsPoint.Lv3) {
        const Vector = vector;
        if (type === "shelf") {
            const Shelf = overworld.getBlock(Vector);
            const NewState = Shelf === null || Shelf === void 0 ? void 0 : Shelf.permutation.withState("ft:contain", "empty");
            Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(NewState);
        } //
        else if (type === "cabinet") {
            const Shelf = overworld.getBlock(Vector);
            Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(Shelf.permutation.withState("ft:contain", "empty"));
            Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(Shelf.permutation.withState("ft:cabinet_geo", 0));
            Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(Shelf.permutation.withState("ft:logical_sequence", "forward"));
        } //
        else if (type === "drops") {
            overworld.setBlockType(Vector, "air");
        }
    }
    // Lv4
    for (const [type, vector] of RandomItemsPoint.Lv4) {
        const Vector = vector;
        if (type === "shelf") {
            const Shelf = overworld.getBlock(Vector);
            const NewState = Shelf === null || Shelf === void 0 ? void 0 : Shelf.permutation.withState("ft:contain", "empty");
            Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(NewState);
        } //
        else if (type === "cabinet") {
            const Shelf = overworld.getBlock(Vector);
            Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(Shelf.permutation.withState("ft:contain", "empty"));
            Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(Shelf.permutation.withState("ft:cabinet_geo", 0));
            Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(Shelf.permutation.withState("ft:logical_sequence", "forward"));
        } //
        else if (type === "drops") {
            overworld.setBlockType(Vector, "air");
        }
    }
    // Lv5
    for (const [type, vector] of RandomItemsPoint.Lv5) {
        const Vector = vector;
        if (type === "shelf") {
            const Shelf = overworld.getBlock(Vector);
            const NewState = Shelf === null || Shelf === void 0 ? void 0 : Shelf.permutation.withState("ft:contain", "empty");
            Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(NewState);
        } //
        else if (type === "cabinet") {
            const Shelf = overworld.getBlock(Vector);
            Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(Shelf.permutation.withState("ft:contain", "empty"));
            Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(Shelf.permutation.withState("ft:cabinet_geo", 0));
            Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(Shelf.permutation.withState("ft:logical_sequence", "forward"));
        } //
        else if (type === "drops") {
            overworld.setBlockType(Vector, "air");
        }
    }
    // LvCI
    for (const [type, vector] of RandomItemsPoint.LvCI) {
        const Vector = vector;
        if (type === "shelf") {
            const Shelf = overworld.getBlock(Vector);
            const NewState = Shelf === null || Shelf === void 0 ? void 0 : Shelf.permutation.withState("ft:contain", "empty");
            Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(NewState);
        } //
        else if (type === "cabinet") {
            const Shelf = overworld.getBlock(Vector);
            Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(Shelf.permutation.withState("ft:contain", "empty"));
            Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(Shelf.permutation.withState("ft:cabinet_geo", 0));
            Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(Shelf.permutation.withState("ft:logical_sequence", "forward"));
        } //
        else if (type === "drops") {
            overworld.setBlockType(Vector, "air");
        }
    }
    // LvDepartment
    for (const [type, vector] of RandomItemsPoint.LvDepartment) {
        const Vector = vector;
        if (type === "shelf") {
            const Shelf = overworld.getBlock(Vector);
            const NewState = Shelf === null || Shelf === void 0 ? void 0 : Shelf.permutation.withState("ft:contain", "empty");
            Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(NewState);
        } //
        else if (type === "cabinet") {
            const Shelf = overworld.getBlock(Vector);
            Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(Shelf.permutation.withState("ft:contain", "empty"));
            Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(Shelf.permutation.withState("ft:cabinet_geo", 0));
            Shelf === null || Shelf === void 0 ? void 0 : Shelf.setPermutation(Shelf.permutation.withState("ft:logical_sequence", "forward"));
        } //
        else if (type === "drops") {
            overworld.setBlockType(Vector, "air");
        }
    }
    // FuseLow
    for (const vector of RandomItemsPoint.FuseLow) {
        const Vector = vector;
        overworld.setBlockType(Vector, "air");
    }
    // FuseMiddle
    for (const vector of RandomItemsPoint.FuseMiddle) {
        const Vector = vector;
        overworld.setBlockType(Vector, "air");
    }
    // FuseHigh
    for (const vector of RandomItemsPoint.FuseHigh) {
        const Vector = vector;
        overworld.setBlockType(Vector, "air");
    }
    // FirstAidKit
    for (const vector of RandomItemsPoint.FirstAidKit) {
        const Vector = vector;
        overworld.setBlockType(Vector, "air");
    }
    // SmallFirstAidKit
    for (const vector of RandomItemsPoint.SmallFirstAidKit) {
        const Vector = vector;
        overworld.setBlockType(Vector, "air");
    }
    // Pistol
    for (const vector of RandomItemsPoint.Pistol) {
        const Vector = vector;
        overworld.setBlockType(Vector, "air");
    }
    // Rifle
    for (const vector of RandomItemsPoint.Rifle) {
        const Vector = vector;
        overworld.setBlockType(Vector, "air");
    }
    // Shotgun
    for (const vector of RandomItemsPoint.Shotgun) {
        const Vector = vector;
        overworld.setBlockType(Vector, "air");
    }
    // SniperRifle
    for (const vector of RandomItemsPoint.SniperRifle) {
        const Vector = vector;
        overworld.setBlockType(Vector, "air");
    }
    // NVG
    for (const vector of RandomItemsPoint.NVG) {
        const Vector = vector;
        overworld.setBlockType(Vector, "air");
    }
}
const PistolString = ["bl:glock18_block", "bl:glock18_block", "bl:glock19_block"];
const SMGString = [
    // "bl:fnp90_block",
    "bl:fnp90_block",
    "hkmp5pdw_block",
    "hkmp7_block",
    "hkump45_block",
    "bl:mp9_block",
];
const RifleString = [
    // "bl:m4a1s_block",
    "bl:m4a1s_block",
    "bl:m4a1_block",
    "bl:ak103_block",
    "bl:ak103t_block",
    "bl:hk416_block",
    "bl:fnscarh_block",
];
function RandonGunString(type) {
    if (type === "pistol") {
        return PistolString[Math.floor(Math.random() * PistolString.length)];
    }
    if (type === "rifle") {
        return RifleString[Math.floor(Math.random() * RifleString.length)];
    }
    if (type === "smg") {
        return SMGString[Math.floor(Math.random() * SMGString.length)];
    }
    throw new Error("Invalid gun type");
}
//# sourceMappingURL=items_spawn.js.map