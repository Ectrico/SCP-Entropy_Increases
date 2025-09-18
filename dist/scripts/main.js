// scripts/main.ts
import {
  world as world13,
  system as system12
} from "@minecraft/server";

// scripts/classes.ts
import { world as world4 } from "@minecraft/server";

// scripts/maps/ft_site_15.ts
var GateA_Blast_Position = [
  { x: 1940, y: 61, z: -4607 },
  { x: 1940, y: 61, z: -4608 },
  { x: 1940, y: 61, z: -4609 },
  { x: 1940, y: 60, z: -4607 },
  { x: 1940, y: 60, z: -4608 },
  { x: 1940, y: 60, z: -4609 }
];
var GateA_Blast_Area = [
  { x: 1947, y: 60, z: -4621 },
  { x: 1927, y: 60, z: -4590 }
];
var Button = [
  [{ x: 1941, y: 61, z: -4610 }, "north"],
  [{ x: 1939, y: 61, z: -4606 }, "south"]
];
var Terminal = {
  AlphaWarhead: { x: 1961, y: 21, z: -4721 },
  OmegaWarhead: { x: 1986, y: 114, z: -4645 }
};
var EleBoxFuse = {
  GateA: [
    ["6a", { x: 1983, y: 66, z: -4713 }, "west"],
    ["6a", { x: 1983, y: 66, z: -4713 }, "west"]
  ],
  GateB: [
    ["9a", { x: 1979, y: 29, z: -4741 }, "west"],
    ["9a", { x: 1979, y: 29, z: -4741 }, "west"],
    ["9a", { x: 2007, y: 29, z: -4682 }, "west"],
    ["9a", { x: 2011, y: 29, z: -4764 }, "west"]
  ],
  ContainmentRoom: [
    // SCP-504
    ["3a", { x: 1953, y: 61, z: -4653 }, "east"]
  ],
  Setblock: [
    // Gate-A
    { x: 1948, y: 57, z: -4608 },
    // Gate-B
    { x: 1887, y: 57, z: -4689 },
    // SCP-504
    { x: 1949, y: 56, z: -4651 }
  ]
};
var EleBoxWire = {
  EmergencyExit: [
    // EZ
    [{ x: 1984, y: 61, z: -4625 }, "east"],
    // LCZ SCP-914
    [{ x: 1892, y: -3, z: -4673 }, "east"]
  ],
  EmergencyExitRandom: [
    // LCZ
    [{ x: 1896, y: -3, z: -4668 }, "west"],
    [{ x: 1881, y: -6, z: -4712 }, "east"],
    [{ x: 1929, y: -4, z: -4756 }, "east"]
  ],
  Setblock: [
    // EmergencyExit
    // EZ
    { x: 1990, y: 57, z: -4630 },
    // LCZ
    { x: 1990, y: 57, z: -4628 },
    // SCP-914
    { x: 1990, y: 57, z: -4626 }
  ],
  EmergencyExitDoor: [
    { x: 1990, y: 60, z: -4633 },
    { x: 1990, y: 61, z: -4631 },
    { x: 1990, y: 60, z: -4632 }
  ]
};
var EmergencyExitDoorSetting = { x: 1990, y: 57, z: -4624 };
var LeverSwitch = {
  OmegaWarheadRemote: { x: 1966, y: 21, z: -4721 },
  Gate: [
    // LCZ
    [{ x: 1931, y: -3, z: -4640 }, 0, "forward", "bedrock"],
    // HCZ
    [{ x: 1983, y: 29, z: -4649 }, 0, "forward", "bedrock"],
    // SCP008
    [{ x: 2032, y: 29, z: -4731 }, 6, "", "redstone_block"]
  ],
  SCP: [
    // 966
    [{ x: 2010, y: 29, z: -4708 }, 14, "reverse", "redstone_block", 0, "forward", "bedrock"],
    // 049
    [{ x: 1949, y: 11, z: -4683 }, 14, "reverse", "redstone_block", 0, "forward", "bedrock"]
  ]
};
var BreachControl = {
  SCP: [
    // 173
    { x: 1956, y: -2, z: -4709 },
    // SCP-457
    { x: 1978, y: 28, z: -4761 }
  ]
};
var FireDoor = {
  SCP457: [
    { x: 1979, y: 28, z: -4762 },
    { x: 1979, y: 29, z: -4760 }
  ]
};
var Pocket_Dimension = {
  Pocket: { x: 2071, y: 0, z: -4752 },
  TelePoint: [
    { x: 2071, y: 0, z: -4762 },
    { x: 2079, y: 0, z: -4760 },
    { x: 2081, y: 0, z: -4752 },
    { x: 2079, y: 0, z: -4744 },
    { x: 2071, y: 0, z: -4742 },
    { x: 2063, y: 0, z: -4744 },
    { x: 2061, y: 0, z: -4752 },
    { x: 2063, y: 0, z: -4760 }
  ],
  Exit: [
    { x: 2060, y: 31, z: -4758 },
    { x: 2060, y: 31, z: -4758 },
    { x: 1949, y: 30, z: -4681 },
    { x: 2045, y: 30, z: -4709 }
  ]
};
var EscapeArea = [
  { x: 2062, y: 65, z: -4814 },
  { x: 2074, y: 71, z: -4821 }
];
var HelicopterLandingZone = [
  { x: 1940, y: 114, z: -4672 },
  { x: 1932, y: 116, z: -4680 }
];
var CPTeleport = [
  // EZ-HCZ-1
  // 上
  [
    { x: 1995, y: 60, z: -4662 },
    { x: 1995, y: 60, z: -4660 },
    { x: 1998, y: 60, z: -4661 }
  ],
  [
    { x: 1997, y: 60, z: -4660 },
    { x: 1997, y: 60, z: -4662 },
    { x: 1994, y: 60, z: -4661 }
  ],
  // 下
  [
    { x: 1995, y: 28, z: -4662 },
    { x: 1995, y: 28, z: -4660 },
    { x: 1998, y: 28, z: -4661 }
  ],
  [
    { x: 1997, y: 28, z: -4660 },
    { x: 1997, y: 28, z: -4662 },
    { x: 1994, y: 28, z: -4661 }
  ],
  // EZ-HCZ-2
  // 上
  [
    { x: 2044, y: 60, z: -4677 },
    { x: 2046, y: 60, z: -4677 },
    { x: 2045, y: 60, z: -4680 }
  ],
  [
    { x: 2046, y: 60, z: -4679 },
    { x: 2044, y: 60, z: -4679 },
    { x: 2045, y: 60, z: -4676 }
  ],
  // 下
  [
    { x: 2044, y: 28, z: -4677 },
    { x: 2046, y: 28, z: -4677 },
    { x: 2045, y: 28, z: -4680 }
  ],
  [
    { x: 2046, y: 28, z: -4679 },
    { x: 2044, y: 28, z: -4679 },
    { x: 2045, y: 28, z: -4676 }
  ],
  // HCZ-LCZ-1
  // 上
  [
    { x: 1925, y: 28, z: -4708 },
    { x: 1925, y: 28, z: -4710 },
    { x: 1922, y: 28, z: -4709 }
  ],
  [
    { x: 1923, y: 28, z: -4710 },
    { x: 1923, y: 28, z: -4708 },
    { x: 1926, y: 28, z: -4709 }
  ],
  // 下
  [
    { x: 1925, y: -4, z: -4708 },
    { x: 1925, y: -4, z: -4710 },
    { x: 1922, y: -4, z: -4709 }
  ],
  [
    { x: 1923, y: -4, z: -4710 },
    { x: 1923, y: -4, z: -4708 },
    { x: 1926, y: -4, z: -4709 }
  ],
  // HCZ-LCZ-2
  // 上
  [
    { x: 1941, y: 28, z: -4634 },
    { x: 1939, y: 28, z: -4634 },
    { x: 1940, y: 28, z: -4631 }
  ],
  [
    { x: 1939, y: 28, z: -4632 },
    { x: 1941, y: 28, z: -4632 },
    { x: 1940, y: 28, z: -4635 }
  ],
  // 下
  [
    { x: 1941, y: -4, z: -4634 },
    { x: 1939, y: -4, z: -4634 },
    { x: 1940, y: -4, z: -4631 }
  ],
  [
    { x: 1939, y: -4, z: -4632 },
    { x: 1941, y: -4, z: -4632 },
    { x: 1940, y: -4, z: -4635 }
  ]
];
var LibTeleport = [
  { x: 1992, y: 11, z: -4654 },
  { x: 2008, y: 11, z: -4654 },
  { x: 2e3, y: 6, z: -4641 }
];
var LibTPTarget = [
  // LCZ
  { x: 1954, y: 3, z: -4714 },
  { x: 1845, y: -4, z: -4670 },
  { x: 1918, y: -4, z: -4617 },
  // HCZ
  { x: 1954, y: 28, z: -4681 },
  { x: 2054, y: 28, z: -4709 },
  { x: 1980, y: 28, z: -4641 },
  // EZ
  { x: 1941, y: 60, z: -4636 },
  { x: 1977, y: 60, z: -4727 },
  { x: 1908, y: 68, z: -4690 }
];
var SCP914Area = {
  intake: [
    { x: 1891, y: -4, z: -4666 },
    { x: 1889, y: -4, z: -4665 }
  ],
  output: [
    { x: 1879, y: -4, z: -4666 },
    { x: 1877, y: -4, z: -4665 }
  ]
};
var RandomItemsPoint = {
  SCP500_Or_SCP420J: [
    // LCZ
    { x: 1959, y: -4, z: -4650 },
    { x: 1928, y: 0, z: -4735 },
    { x: 1844, y: -4, z: -4666 },
    // HCZ
    { x: 2046, y: 28, z: -4661 },
    { x: 2035, y: 24, z: -4696 },
    { x: 2030, y: 28, z: -4729 },
    { x: 1924, y: 29, z: -4691 },
    // EZ
    { x: 1951, y: 60, z: -4628 },
    { x: 1975, y: 60, z: -4619 }
  ],
  Lv1: [
    //LCZ
    ["shelf", { x: 1890, y: -3, z: -4712 }],
    ["shelf", { x: 1890, y: -3, z: -4702 }],
    ["shelf", { x: 1876, y: -3, z: -4670 }],
    ["cabinet", { x: 1883, y: -4, z: -4618 }],
    ["cabinet", { x: 1887, y: -4, z: -4705 }],
    ["cabinet", { x: 1887, y: -4, z: -4708 }]
  ],
  Lv2: [
    // LCZ
    ["drops", { x: 1933, y: 0, z: -4757 }],
    ["drops", { x: 1921, y: -4, z: -4639 }],
    ["cabinet", { x: 1927, y: -4, z: -4732 }],
    ["cabinet", { x: 1927, y: -3, z: -4732 }],
    ["cabinet", { x: 1887, y: -3, z: -4706 }],
    ["cabinet", { x: 1919, y: -3, z: -4672 }]
  ],
  Lv1_2: [
    // LCZ
    ["drops", { x: 1919, y: 3, z: -4761 }],
    ["drops", { x: 1929, y: -5, z: -4752 }],
    ["drops", { x: 1919, y: -4, z: -4749 }],
    ["drops", { x: 1933, y: 0, z: -4757 }],
    ["shelf", { x: 1890, y: -4, z: -4710 }],
    ["shelf", { x: 1910, y: -3, z: -4704 }],
    ["cabinet", { x: 1933, y: -3, z: -4647 }],
    ["cabinet", { x: 1883, y: -3, z: -4618 }],
    ["cabinet", { x: 1843, y: -3, z: -4672 }],
    ["cabinet", { x: 1862, y: -3, z: -4678 }],
    ["cabinet", { x: 1887, y: -3, z: -4707 }],
    ["cabinet", { x: 1887, y: -4, z: -4709 }],
    ["cabinet", { x: 1908, y: -11, z: -4720 }],
    ["cabinet", { x: 1919, y: -4, z: -4672 }],
    // EZ
    ["shelf", { x: 1977, y: 60, z: -4659 }]
  ],
  Lv3: [
    // LCZ
    ["drops", { x: 1934, y: -3, z: -4727 }],
    ["shelf", { x: 1891, y: -3, z: -4753 }],
    ["drops", { x: 1879, y: -6, z: -4633 }],
    ["drops", { x: 1931, y: -3, z: -4666 }],
    ["drops", { x: 1941, y: -4, z: -4711 }],
    ["cabinet", { x: 1933, y: -4, z: -4647 }],
    ["cabinet", { x: 1867, y: -3, z: -4634 }],
    ["cabinet", { x: 1843, y: -4, z: -4672 }],
    ["cabinet", { x: 1862, y: -4, z: -4678 }],
    ["cabinet", { x: 1907, y: -10, z: -4720 }],
    ["cabinet", { x: 1906, y: -11, z: -4720 }],
    ["cabinet", { x: 1931, y: -4, z: -4663 }],
    ["cabinet", { x: 1931, y: -3, z: -4663 }],
    ["cabinet", { x: 1987, y: 60, z: -4613 }],
    // HCZ
    ["drops", { x: 1976, y: 28, z: -4762 }],
    ["shelf", { x: 2045, y: 29, z: -4714 }],
    ["drops", { x: 2014, y: 28, z: -4711 }],
    ["drops", { x: 2007, y: 28, z: -4682 }],
    // EZ
    ["shelf", { x: 1973, y: 61, z: -4659 }],
    ["drops", { x: 1904, y: 60, z: -4687 }]
  ],
  Lv4: [
    // LCZ
    ["cabinet", { x: 1924, y: -4, z: -4703 }],
    ["cabinet", { x: 1924, y: -3, z: -4703 }],
    ["cabinet", { x: 1987, y: 61, z: -4613 }],
    // HCZ
    ["drops", { x: 1935, y: 10, z: -4685 }],
    ["drops", { x: 2027, y: 29, z: -4730 }],
    ["cabinet", { x: 1983, y: 28, z: -4750 }],
    // EZ
    ["drops", { x: 2012, y: 60, z: -4679 }],
    ["shelf", { x: 1976, y: 61, z: -4665 }]
  ],
  Lv5: [
    // LCZ
    ["cabinet", { x: 1937, y: -4, z: -4655 }],
    // HCZ
    ["shelf", { x: 1927, y: 29, z: -4693 }],
    ["drops", { x: 1964, y: 28, z: -4701 }],
    ["shelf", { x: 2017, y: 29, z: -4765 }],
    ["shelf", { x: 2018, y: 28, z: -4758 }],
    ["drops", { x: 2082, y: 20, z: -4770 }],
    ["cabinet", { x: 1924, y: 28, z: -4690 }],
    ["cabinet", { x: 1924, y: 29, z: -4690 }],
    ["cabinet", { x: 1985, y: 29, z: -4750 }],
    ["cabinet", { x: 1984, y: 28, z: -4750 }],
    ["cabinet", { x: 2084, y: 20, z: -4771 }],
    ["cabinet", { x: 2084, y: 21, z: -4769 }],
    ["cabinet", { x: 2023, y: 28, z: -4734 }],
    ["cabinet", { x: 2023, y: 29, z: -4734 }],
    // EZ
    ["drops", { x: 1998, y: 60, z: -4669 }],
    ["cabinet", { x: 1942, y: 60, z: -4683 }],
    // Surface
    ["shelf", { x: 2005, y: 97, z: -4737 }]
  ],
  LvCI: [
    // Surface
    ["shelf", { x: 1910, y: 98, z: -4674 }],
    ["cabinet", { x: 1943, y: 60, z: -4683 }]
  ],
  LvDepartment: [
    // LCZ
    ["drops", { x: 1917, y: -4, z: -4618 }],
    // HCZ Armory
    ["shelf", { x: 2021, y: 28, z: -4751 }],
    // HCZ Warhead
    ["cabinet", { x: 1956, y: 20, z: -4719 }],
    // EZ
    ["drops", { x: 1947, y: 60, z: -4634 }],
    ["drops", { x: 1948, y: 60, z: -4712 }],
    ["shelf", { x: 1946, y: 61, z: -4683 }],
    ["cabinet", { x: 1941, y: 61, z: -4683 }],
    // Surface
    ["shelf", { x: 1910, y: 97, z: -4672 }],
    ["shelf", { x: 1881, y: 98, z: -4722 }],
    ["drops", { x: 2024, y: 79, z: -4734 }]
  ],
  FuseLow: [
    // LCZ
    { x: 1872, y: -4, z: -4683 },
    { x: 1843, y: -2, z: -4672 },
    { x: 1903, y: -4, z: -4676 },
    { x: 1933, y: -4, z: -4646 },
    { x: 1919, y: -30, z: -4695 },
    // HCZ
    { x: 1918, y: 28, z: -4705 },
    { x: 1936, y: 28, z: -4680 },
    { x: 1979, y: 28, z: -4651 },
    { x: 2044, y: 28, z: -4715 }
    // EZ
  ],
  FuseMiddle: [
    // LCZ
    { x: 1883, y: -6, z: -4637 },
    { x: 1864, y: -4, z: -4663 },
    { x: 1953, y: -5, z: -4670 },
    // HCZ
    { x: 1928, y: 28, z: -4689 },
    { x: 2012, y: 28, z: -4688 },
    { x: 2070, y: 20, z: -4771 },
    // EZ
    { x: 1983, y: 65, z: -4713 },
    { x: 1979, y: 60, z: -4726 },
    { x: 1937, y: 60, z: -4693 },
    { x: 1985, y: 60, z: -4650 }
  ],
  FuseHigh: [
    // LCZ
    { x: 1930, y: 3, z: -4748 },
    // HCZ
    { x: 1957, y: 20, z: -4714 },
    // EZ
    { x: 1918, y: 60, z: -4703 }
  ],
  FirstAidKit: [
    // LCZ
    { x: 1880, y: -7, z: -4701 },
    { x: 1859, y: -3, z: -4681 },
    { x: 1844, y: -4, z: -4669 },
    { x: 1867, y: -3, z: -4630 },
    // HCZ
    { x: 1944, y: 11, z: -4669 },
    { x: 1949, y: 11, z: -4686 },
    { x: 2021, y: 28, z: -4687 },
    { x: 1982, y: 28, z: -4632 },
    // EZ
    { x: 1963, y: 60, z: -4651 },
    { x: 1939, y: 61, z: -4682 },
    { x: 1940, y: 60, z: -4711 },
    { x: 1933, y: 60, z: -4726 },
    // Surface
    { x: 1946, y: 99, z: -4646 },
    { x: 1946, y: 99, z: -4648 },
    { x: 1946, y: 99, z: -4650 },
    { x: 1946, y: 99, z: -4652 },
    { x: 1946, y: 99, z: -4654 },
    { x: 1927, y: 97, z: -4727 },
    { x: 1968, y: 97, z: -4723 }
  ],
  SmallFirstAidKit: [
    // HCZ
    { x: 1956, y: 21, z: -4719 },
    { x: 1984, y: 29, z: -4756 },
    // EZ
    { x: 2037, y: 60, z: -4680 },
    { x: 1931, y: 60, z: -4610 },
    { x: 1907, y: 62, z: -4714 },
    // Surface
    { x: 1954, y: 99, z: -4647 },
    { x: 1917, y: 100, z: -4663 },
    { x: 1971, y: 97, z: -4708 },
    { x: 2011, y: 73, z: -4735 },
    { x: 2059, y: 76, z: -4736 },
    { x: 2059, y: 73, z: -4704 },
    { x: 2043, y: 65, z: -4703 },
    { x: 2038, y: 66, z: -4758 }
  ],
  Pistol: [
    // LCZ
    { x: 1907, y: -9, z: -4720 },
    { x: 1861, y: -4, z: -4678 },
    // HCZ
    // EZ
    { x: 1918, y: 60, z: -4681 },
    { x: 1952, y: 60, z: -4730 }
  ],
  SMG: [
    // LCZ
    { x: 1878, y: -4, z: -4741 },
    { x: 1906, y: -30, z: -4696 },
    // HCZ
    { x: 2035, y: 28, z: -4688 },
    { x: 2076, y: 14, z: -4747 },
    // EZ
    { x: 1952, y: 60, z: -4730 }
  ],
  Rifle: [
    // HCZ
    { x: 2005, y: 65, z: -4711 },
    // EZ
    { x: 1948, y: 60, z: -4619 },
    // Surface
    { x: 1965, y: 113, z: -4587 },
    { x: 1987, y: 113, z: -4649 },
    { x: 2034, y: 80, z: -4814 }
  ],
  Shotgun: [
    // HCZ
    { x: 1948, y: 28, z: -4708 },
    { x: 1928, y: 28, z: -4691 }
  ],
  SniperRifle: [
    // Surface
    { x: 1967, y: 113, z: -4644 },
    { x: 2029, y: 65, z: -4764 }
  ],
  NVG: [
    // LCZ
    { x: 1930, y: -4, z: -4637 },
    { x: 1915, y: -4, z: -4616 },
    { x: 1892, y: -4, z: -4673 },
    { x: 1890, y: -4, z: -4708 },
    { x: 1938, y: -3, z: -4732 },
    { x: 1957, y: -4, z: -4724 },
    { x: 1908, y: -4, z: -4704 },
    // LCZ Armory
    { x: 1865, y: -4, z: -4672 },
    { x: 1867, y: -4, z: -4672 },
    // HCZ
    { x: 1918, y: 28, z: -4726 },
    { x: 1940, y: 28, z: -4678 },
    { x: 1938, y: 11, z: -4663 },
    { x: 2025, y: 28, z: -4689 },
    { x: 2055, y: 28, z: -4715 },
    // HCZ Armory
    { x: 2016, y: 28, z: -4752 },
    { x: 2016, y: 28, z: -4753 },
    { x: 2016, y: 28, z: -4754 },
    // EZ
    { x: 1972, y: 61, z: -4663 },
    { x: 1973, y: 61, z: -4671 },
    { x: 2002, y: 65, z: -4691 },
    { x: 1966, y: 60, z: -4715 },
    { x: 1941, y: 60, z: -4635 },
    // EZ Armory
    { x: 1923, y: 60, z: -4696 },
    { x: 1922, y: 60, z: -4696 },
    { x: 1921, y: 60, z: -4696 },
    { x: 1920, y: 60, z: -4696 }
  ]
};
var FixedItemsPoint = {
  SCP500: [
    // LCZ
    { x: 1935, y: -3, z: -4659 }
    //SCP-500收容室
  ],
  SCP714: [{ x: 1935, y: -3, z: -4643 }],
  Lv2: [
    // LCZ
    ["drops", { x: 1920, y: -4, z: -4678 }]
  ],
  FirstAidKit: [
    // LCZ
    { x: 1968, y: -4, z: -4728 },
    { x: 1944, y: -4, z: -4652 },
    { x: 1923, y: -4, z: -4675 }
  ],
  SmallFirstAidKit: [
    // LCZ
    { x: 1967, y: -2, z: -4689 },
    { x: 1905, y: -4, z: -4684 },
    { x: 1878, y: 98, z: -4719 }
  ],
  Pistol: [
    // LCZ
    { x: 1927, y: -4, z: -4697 },
    // LCZ Armory
    { x: 1864, y: -4, z: -4669 },
    { x: 1866, y: -4, z: -4669 },
    { x: 1868, y: -4, z: -4669 },
    { x: 1864, y: -4, z: -4667 },
    { x: 1866, y: -4, z: -4667 },
    { x: 1868, y: -4, z: -4667 },
    // HCZ Armory
    { x: 2018, y: 28, z: -4764 },
    { x: 2020, y: 28, z: -4764 }
  ],
  SMG: [
    // LCZ Armory
    { x: 1864, y: -4, z: -4671 },
    { x: 1866, y: -4, z: -4671 },
    { x: 1868, y: -4, z: -4671 },
    // HCZ Armory
    { x: 2020, y: 28, z: -4752 },
    { x: 2018, y: 28, z: -4752 }
  ],
  Rifle: [
    // HCZ Armory
    { x: 2022, y: 28, z: -4762 },
    { x: 2022, y: 28, z: -4758 },
    { x: 2022, y: 28, z: -4754 },
    // EZ Armory
    { x: 1924, y: 60, z: -4701 },
    { x: 1924, y: 60, z: -4699 },
    { x: 1924, y: 60, z: -4697 },
    { x: 1923, y: 60, z: -4701 },
    { x: 1923, y: 60, z: -4699 },
    { x: 1923, y: 60, z: -4697 },
    { x: 1919, y: 60, z: -4697 },
    { x: 1919, y: 60, z: -4699 },
    { x: 1919, y: 60, z: -4701 }
  ],
  Shotgun: [
    // LCZ
    { x: 1973, y: -4, z: -4669 },
    // HCZ Armory
    { x: 2022, y: 28, z: -4760 },
    { x: 2022, y: 28, z: -4756 },
    // EZ Armory
    { x: 1920, y: 60, z: -4699 },
    { x: 1920, y: 60, z: -4701 }
  ],
  SniperRifle: [
    // EZ Armory
    { x: 1920, y: 60, z: -4697 },
    // Surface
    { x: 1891, y: 97, z: -4673 }
  ],
  WhiteHand: [{ x: 1894, y: -11, z: -4721 }],
  BlackHand: [{ x: 1912, y: -30, z: -4709 }],
  NVG: [
    // LCZ
    { x: 1921, y: -4, z: -4639 },
    { x: 1925, y: -30, z: -4705 },
    // HCZ
    { x: 2010, y: 28, z: -4709 }
  ],
  EmptyShelf: [
    // LCZ
    { x: 1927, y: 1, z: -4736 },
    { x: 1891, y: -4, z: -4753 },
    { x: 1890, y: -4, z: -4712 },
    { x: 1890, y: -3, z: -4710 },
    { x: 1890, y: -3, z: -4704 },
    { x: 1890, y: -4, z: -4704 },
    { x: 1890, y: -4, z: -4702 },
    { x: 1876, y: -4, z: -4670 },
    { x: 1876, y: -3, z: -4672 },
    { x: 1910, y: -4, z: -4704 },
    { x: 1910, y: -3, z: -4700 },
    { x: 1927, y: 28, z: -4693 },
    { x: 2019, y: 28, z: -4765 },
    { x: 2018, y: 29, z: -4761 },
    { x: 2018, y: 28, z: -4755 },
    { x: 2018, y: 29, z: -4755 },
    { x: 2017, y: 29, z: -4751 },
    { x: 2020, y: 29, z: -4761 },
    { x: 1975, y: 61, z: -4659 },
    { x: 1946, y: 60, z: -4683 },
    { x: 1948, y: 61, z: -4683 },
    { x: 1910, y: 97, z: -4674 },
    { x: 1883, y: 97, z: -4722 },
    { x: 2005, y: 96, z: -4737 },
    { x: 2005, y: 97, z: -4735 }
  ],
  EmptyCabinet: [
    // LCZ
    { x: 1937, y: -3, z: -4655 },
    { x: 1867, y: -4, z: -4634 },
    { x: 1887, y: -3, z: -4705 },
    { x: 1887, y: -4, z: -4706 },
    { x: 1887, y: -4, z: -4707 },
    { x: 1887, y: -3, z: -4708 },
    { x: 1887, y: -3, z: -4709 },
    { x: 1908, y: -10, z: -4720 },
    { x: 1907, y: -11, z: -4720 },
    { x: 1906, y: -10, z: -4720 },
    // HCZ
    { x: 1985, y: 28, z: -4750 },
    { x: 1984, y: 29, z: -4750 },
    { x: 1983, y: 29, z: -4750 },
    { x: 2084, y: 21, z: -4771 },
    { x: 2084, y: 21, z: -4770 },
    { x: 2084, y: 20, z: -4770 },
    { x: 2084, y: 20, z: -4769 },
    // EZ
    { x: 1943, y: 61, z: -4683 },
    { x: 1942, y: 61, z: -4683 },
    { x: 1941, y: 60, z: -4683 }
  ]
};
var SCP035SpawnPoint = [
  // SCP-035收容室
  { x: 1927, y: 29, z: -4678 },
  // SCP-008收容室
  { x: 2030, y: 28, z: -4733 },
  // 008封锁检查站
  { x: 1998, y: 28, z: -4664 },
  // 核弹井
  { x: 1965, y: 10, z: -4715 },
  // 重收铁桥
  { x: 2020, y: 24, z: -4691 },
  // SCP-049
  { x: 1956, y: 10, z: -4686 }
];
var SpawnPointClassD = [
  { x: 1908, y: 3, z: -4786 },
  { x: 1908, y: 3, z: -4782 },
  { x: 1908, y: 3, z: -4778 },
  { x: 1908, y: 3, z: -4774 },
  { x: 1908, y: 3, z: -4770 },
  { x: 1926, y: 3, z: -4786 },
  { x: 1926, y: 3, z: -4782 },
  { x: 1926, y: 3, z: -4778 },
  { x: 1926, y: 3, z: -4774 },
  { x: 1926, y: 3, z: -4770 }
];
var SpawnPointRes = [
  { x: 2001, y: 60, z: -4625 },
  { x: 2001, y: 60, z: -4619 },
  { x: 2001, y: 60, z: -4613 },
  { x: 2001, y: 60, z: -4607 },
  { x: 2001, y: 60, z: -4601 },
  { x: 1985, y: 60, z: -4601 },
  { x: 1985, y: 60, z: -4607 },
  // 安保室
  { x: 1985, y: 60, z: -4614 }
];
var SpawnPointGuard = [
  { x: 1919, y: 60, z: -4658 },
  { x: 1917, y: 60, z: -4653 },
  { x: 1917, y: 60, z: -4649 },
  { x: 1909, y: 60, z: -4653 },
  { x: 1909, y: 60, z: -4649 },
  { x: 1909, y: 60, z: -4644 },
  { x: 1903, y: 60, z: -4653 },
  { x: 1903, y: 60, z: -4649 },
  { x: 1903, y: 60, z: -4644 },
  { x: 1897, y: 60, z: -4653 },
  { x: 1897, y: 60, z: -4649 },
  { x: 1897, y: 60, z: -4644 }
];
var SpawnPointNTF = [
  { x: 2066, y: 66, z: -4894 },
  { x: 2068, y: 66, z: -4894 },
  { x: 2070, y: 66, z: -4894 },
  { x: 2066, y: 66, z: -4896 },
  { x: 2068, y: 66, z: -4896 },
  { x: 2070, y: 66, z: -4896 },
  { x: 2066, y: 66, z: -4898 },
  { x: 2068, y: 66, z: -4898 },
  { x: 2070, y: 66, z: -4898 }
];
var SpawnPointSNE = [
  { x: 1885, y: 91, z: -4649 },
  { x: 1885, y: 91, z: -4651 },
  { x: 1885, y: 91, z: -4653 },
  { x: 1887, y: 91, z: -4649 },
  { x: 1887, y: 91, z: -4651 },
  { x: 1887, y: 91, z: -4653 },
  { x: 1889, y: 91, z: -4649 },
  { x: 1889, y: 91, z: -4651 },
  { x: 1889, y: 91, z: -4653 }
];
var SpawnPointCI = [
  { x: 1958, y: 105, z: -4723 },
  { x: 1959, y: 106, z: -4722 },
  { x: 1960, y: 106, z: -4721 },
  { x: 1962, y: 105, z: -4718 },
  { x: 1964, y: 104, z: -4715 },
  { x: 1939, y: 105, z: -4716 },
  { x: 1937, y: 105, z: -4718 },
  { x: 1936, y: 105, z: -4720 },
  { x: 1934, y: 105, z: -4722 }
];
var SpawnPointSH = [
  // { x: 2002, y: -1, z: -4693 },
  // { x: 2000, y: -1, z: -4693 },
  // { x: 1998, y: -1, z: -4693 },
  // { x: 2002, y: -1, z: -4695 },
  { x: 2e3, y: -1, z: -4695 }
  // { x: 1998, y: -1, z: -4695 },
  // { x: 2002, y: -1, z: -4697 },
  // { x: 2000, y: -1, z: -4697 },
  // { x: 1998, y: -1, z: -4697 },
];
var SpawnPointGOC = [{ x: 1993, y: 63, z: -4590 }];
var SpawnPointSCP173 = [{ x: 1963, y: 0, z: -4713 }];
var SpawnPointSCP457 = [{ x: 1983, y: 28, z: -4761 }];
var SpawnPointSCP049 = [{ x: 1935, y: 10, z: -4692 }];
var SpawnPointSCP106 = [{ x: 2059, y: 14, z: -4753 }];
var SpawnPointSCP966 = [{ x: 2012, y: 28, z: -4704 }];
var SpawnPointSCP096 = [{ x: 2012, y: 28, z: -4688 }];
var SpawnPointSCP066 = [{ x: 1977, y: 60, z: -4727 }];
var SpawnPointSCP035 = [
  { x: 1950, y: 60, z: -4701 },
  { x: 1941, y: 60, z: -4710 },
  { x: 1920, y: 60, z: -4662 }
];
var SpawnPointSCP008_1 = [{ x: 2030, y: 28, z: -4733 }];

// scripts/misc.ts
import { ItemStack, world as world2 } from "@minecraft/server";

// scripts/exp_system/exp_system.ts
import { world } from "@minecraft/server";
var overworld;
var nether;
var theEnd;
world.afterEvents.worldLoad.subscribe((arg) => {
  overworld = world.getDimension("overworld");
  nether = world.getDimension("nether");
  theEnd = world.getDimension("the_end");
});
function ExpSetExp(PlayerID, Exp) {
  world.setDynamicProperty(`ExpExp^${PlayerID}`, Exp);
}
function ExpSetLevel(PlayerID, Level) {
  world.setDynamicProperty(`ExpLevel^${PlayerID}`, Level);
}
function ExpGetExp(PlayerID) {
  const Exp = world.getDynamicProperty(`ExpExp^${PlayerID}`);
  if (world.getDynamicProperty(`ExpExp^${PlayerID}`)) {
    return Exp;
  } else {
    ExpSetExp(PlayerID, 1);
    ExpGetExp(PlayerID);
  }
}
function ExpGetLevel(PlayerID) {
  const Level = world.getDynamicProperty(`ExpLevel^${PlayerID}`);
  if (world.getDynamicProperty(`ExpLevel^${PlayerID}`)) {
    return Level;
  } else {
    ExpSetLevel(PlayerID, 1);
    ExpGetLevel(PlayerID);
  }
}
function ExpAddExp(PlayerID, value) {
  let Exp = ExpGetExp(PlayerID);
  let Level = ExpGetLevel(PlayerID);
  const NewExp = Exp + value;
  ExpUpgrade(PlayerID, Level, NewExp);
  overworld.runCommand(`playsound "Save1" "${PlayerID}" 0 0 0 10000000000`);
}
function ExpUpgrade(PlayerID, Level, Exp) {
  if (Level < 1250) {
    const NextLevelExpNum = 100 * Math.pow(Level, 1.05);
    if (Exp > NextLevelExpNum) {
      Level += 1;
      ExpSetLevel(PlayerID, Level);
      overworld.runCommand(`playsound "Save2" "${PlayerID}" 0 0 0 10000000000`);
      EscapeRewardDrops(PlayerID);
    }
    ExpSetExp(PlayerID, Exp);
  }
}
var ExpOfMinute = 9;
function AddExpOfMinute() {
  for (const player of world.getAllPlayers()) {
    ExpAddExp(player.name, ExpOfMinute);
    player.sendMessage(`\xA7f\u4F60\u56E0 \u5728\u670D\u52A1\u5668\u4E2D\u6E38\u73A9 \u83B7\u5F97\u4E86 \xA7e${ExpOfMinute} \xA7f\u70B9\u7ECF\u9A8C\uFF01`);
    player.sendMessage(
      `\xA7f\u4F60\u73B0\u5728\u7684\u7ECF\u9A8C\u503C\u662F \xA7e${ExpGetExp(player.name)}/${Math.floor(
        100 * Math.pow(ExpGetLevel(player.name), 1.05)
      )} \xA7f\u7B49\u7EA7\u662F \xA7e${ExpGetLevel(player.name)}\uFF01`
    );
  }
}
function ExpChangeMassage(player, addExpNum, reason) {
  player.sendMessage(`\xA7f\u4F60\u56E0 ${reason} \u83B7\u5F97\u4E86 \xA7e${addExpNum} \xA7f\u70B9\u7ECF\u9A8C\uFF01`);
  player.sendMessage(
    `\xA7f\u4F60\u73B0\u5728\u7684\u7ECF\u9A8C\u503C\u662F \xA7e${ExpGetExp(player.name)}/${Math.floor(
      100 * Math.pow(ExpGetLevel(player.name), 1.05)
    )} \xA7f\u7B49\u7EA7\u662F \xA7e${ExpGetLevel(player.name)}\uFF01`
  );
}

// scripts/misc.ts
function FormatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");
  return `${formattedMinutes}:${formattedSeconds}`;
}
function FormatTimeTick(ticks) {
  const minutes = Math.floor(ticks / 20 / 60);
  const seconds = Math.floor(ticks / 20 % 60);
  const remainingTicks = ticks % 20;
  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${remainingTicks.toString().padStart(2, "0")}`;
}
function ClassesName(player) {
  const PlayerAllTags = player.getTags();
  if (PlayerAllTags.includes("dev")) {
    return "\xA7l\xA7a\u5F00\u53D1\u72B6\u6001\xA7r\xA7f";
  } else if (PlayerAllTags.includes("res_asst")) {
    return "\xA7l\xA7b\u7814\u7A76\u52A9\u7406\xA7r\xA7f";
  } else if (PlayerAllTags.includes("res_doctor")) {
    return "\xA7l\xA7b\u533B\u751F\xA7r\xA7f";
  } else if (PlayerAllTags.includes("res")) {
    return "\xA7l\xA7b\u7814\u7A76\u4EBA\u5458\xA7r\xA7f";
  } else if (PlayerAllTags.includes("res_senior")) {
    return "\xA7l\xA7b\u9AD8\u7EA7\u7814\u7A76\u5458\xA7r\xA7f";
  } else if (PlayerAllTags.includes("res_chief")) {
    return "\xA7l\xA7b\u7814\u7A76\u4E3B\u7BA1\xA7r\xA7f";
  } else if (PlayerAllTags.includes("res_cog_haz")) {
    return "\xA7l\xA7b\u8BA4\u77E5\u5371\u5BB3\u4E13\u5BB6\xA7r\xA7f";
  } else if (PlayerAllTags.includes("guard")) {
    return "\xA7l\xA71\u5B89\u5168\u5B98\u5458\xA7r\xA7f";
  } else if (PlayerAllTags.includes("guard_med")) {
    return "\xA7l\xA7a\u533B\u7597\u5B89\u5168\u5B98\u5458\xA7r\xA7f";
  } else if (PlayerAllTags.includes("guard_tech")) {
    return "\xA7l\xA71\u5B89\u5168\u5B98\u5458-\u6280\u672F\u5DE5\u7A0B\u5E08\xA7r\xA7f";
  } else if (PlayerAllTags.includes("guard_rru")) {
    return "\xA7l\xA7bMTF-\u5FEB\u901F\u53CD\u5E94\u5355\u4F4D\xA7r\xA7f";
  } else if (PlayerAllTags.includes("guard_chief")) {
    return "\xA7l\xA71\u5B89\u5168\u4E3B\u7BA1\xA7r\xA7f";
  } else if (PlayerAllTags.includes("guard_hs")) {
    return "\xA7l\xA71\u9632\u62A4\u5B89\u5168\u5458\xA7r\xA7f";
  } else if (PlayerAllTags.includes("guard_sd")) {
    return "\xA7l\xA71\u7AD9\u70B9\u4E3B\u7BA1\xA7r\xA7f";
  } else if (PlayerAllTags.includes("ntf")) {
    return "\xA7l\xA7bMTF-\u4E5D\u5C3E\u72D0-\u58EB\u5175\xA7r\xA7f";
  } else if (PlayerAllTags.includes("ntf_breaker")) {
    return "\xA7l\xA7bMTF-\u4E5D\u5C3E\u72D0-\u7A81\u7834\u624B\xA7r\xA7f";
  } else if (PlayerAllTags.includes("ntf_sniper")) {
    return "\xA7l\xA7bMTF-\u4E5D\u5C3E\u72D0-\u72D9\u51FB\u624B\xA7r\xA7f";
  } else if (PlayerAllTags.includes("ntf_med")) {
    return "\xA7l\xA7bMTF-\u4E5D\u5C3E\u72D0-\u533B\u7597\u5175\xA7r\xA7f";
  } else if (PlayerAllTags.includes("ntf_com")) {
    return "\xA7l\xA7bMTF-\u4E5D\u5C3E\u72D0-\u6307\u6325\u5B98\xA7r\xA7f";
  } else if (PlayerAllTags.includes("sne")) {
    return "\xA7l\xA7sMTF-\u975E\u793C\u52FF\u89C6-\u7A81\u51FB\u961F\u5458\xA7r\xA7f";
  } else if (PlayerAllTags.includes("sne_breaker")) {
    return "\xA7l\xA7sMTF-\u975E\u793C\u52FF\u89C6-\u7A81\u7834\u624B\xA7r\xA7f";
  } else if (PlayerAllTags.includes("sne_com")) {
    return "\xA7l\xA7sMTF-\u975E\u793C\u52FF\u89C6-\u6307\u6325\u5B98\xA7r\xA7f";
  } else if (PlayerAllTags.includes("rrh")) {
    return "\xA7l\xA7sMTF-\u7EA2\u53F3\u624B\xA7r\xA7f";
  } else if (PlayerAllTags.includes("classd")) {
    return "\xA7l\xA76D\u7EA7\u4EBA\u5458\xA7r\xA7f";
  } else if (PlayerAllTags.includes("classd_thief")) {
    return "\xA7l\xA76D\u7EA7\u4EBA\u5458-\u5C0F\u5077\xA7r\xA7f";
  } else if (PlayerAllTags.includes("classd_rioters")) {
    return "\xA7l\xA76D\u7EA7\u4EBA\u5458-\u66B4\u52A8\u5206\u5B50\xA7r\xA7f";
  } else if (PlayerAllTags.includes("classd_madman")) {
    return "\xA7l\xA7vD\u7EA7\u4EBA\u5458-\u75AF\u5B50\xA7r\xA7f";
  } else if (PlayerAllTags.includes("classd_engineer")) {
    return "\xA7l\xA76D\u7EA7\u4EBA\u5458-\u6280\u5DE5\xA7r\xA7f";
  } else if (PlayerAllTags.includes("classd_fugitive")) {
    return "\xA7l\xA76D\u7EA7\u4EBA\u5458-\u6F5C\u9003\u8005\xA7r\xA7f";
  } else if (PlayerAllTags.includes("ci_agent")) {
    return "\xA7l\xA72\u6DF7\u6C8C\u5206\u88C2\u8005-\u7279\u5DE5\xA7r\xA7f";
  } else if (PlayerAllTags.includes("ci")) {
    return "\xA7l\xA72\u6DF7\u6C8C\u5206\u88C2\u8005-\u58EB\u5175\xA7r\xA7f";
  } else if (PlayerAllTags.includes("ci_breaker")) {
    return "\xA7l\xA72\u6DF7\u6C8C\u5206\u88C2\u8005-\u7A81\u7834\u624B\xA7r\xA7f";
  } else if (PlayerAllTags.includes("ci_sniper")) {
    return "\xA7l\xA72\u6DF7\u6C8C\u5206\u88C2\u8005-\u72D9\u51FB\u624B\xA7r\xA7f";
  } else if (PlayerAllTags.includes("ci_med")) {
    return "\xA7l\xA72\u6DF7\u6C8C\u5206\u88C2\u8005-\u533B\u7597\u5175\xA7r\xA7f";
  } else if (PlayerAllTags.includes("ci_com")) {
    return "\xA7l\xA72\u6DF7\u6C8C\u5206\u88C2\u8005-\u6307\u6325\u5B98\xA7r\xA7f";
  } else if (PlayerAllTags.includes("goc")) {
    return "\xA7l\xA7b\u5168\u7403\u8D85\u81EA\u7136\u8054\u76DF-\u7A81\u51FB\u961F\u5458\xA7r\xA7f";
  } else if (PlayerAllTags.includes("goc_des")) {
    return "\xA7l\xA7b\u5168\u7403\u8D85\u81EA\u7136\u8054\u76DF-'\u6BC1\u706D\u8005'\xA7r\xA7f";
  } else if (PlayerAllTags.includes("goc_com")) {
    return "\xA7l\xA7b\u5168\u7403\u8D85\u81EA\u7136\u8054\u76DF-\u6307\u6325\u5B98\xA7r\xA7f";
  } else if (PlayerAllTags.includes("scp")) {
    return "\xA7l\xA7c\u5F02\u5E38\u9879\u76EE\xA7r\xA7f";
  } else {
    return "\xA77Unknow\xA7r\xA7f";
  }
}
function ShowNameTagClasses() {
  for (const player of world2.getAllPlayers()) {
    const PlayerID = player.name;
    let ItemDetectNum = player?.selectedSlotIndex;
    const ItemDetecter = player?.getComponent("minecraft:inventory")?.container?.getItem(ItemDetectNum)?.typeId;
    const ItemDetect = ItemDetecter;
    if (ItemDetect === "ei:id_card") {
      player.nameTag = `\xA7e[Lv.${ExpGetLevel(player.name)}]
\xA7f${PlayerID}
[${ClassesName(player)}]`;
    } else {
      player.nameTag = `\xA7e[Lv.${ExpGetLevel(player.name)}]
\xA7f${PlayerID}
[\xA77Unknow\xA7r\xA7f]`;
    }
  }
}
function PlaySoundForAllPlayer(SoundID) {
  const overworld9 = world2.getDimension("overworld");
  overworld9.runCommand(`playsound "${SoundID}" @a 0 0 0 100000000`);
}
function RemoveAllTags(player) {
  for (const tag of AllClassesTag) {
    player.removeTag(tag);
  }
}
function SpawnCorpseOnPlayerDeath() {
  world2.afterEvents.entityDie.subscribe((arg) => {
    let deadEntity = arg.deadEntity;
    if (!deadEntity || typeof deadEntity.location !== "object")
      return;
    const location = deadEntity.location;
    const playerTags = deadEntity.getTags();
    const dimension = arg.damageSource.damagingEntity?.dimension;
    if (deadEntity.typeId === "minecraft:player") {
      const deadPlayer = deadEntity;
      if (!playerTags.includes("scp") || playerTags.includes("scp035") && playerTags.includes("scp")) {
        const cropse = dimension?.spawnEntity("ei:corpse", location);
        if (cropse) {
          for (const tag of playerTags) {
            switch (tag) {
              case "allclassd":
                cropse.setProperty("ei:cropse_int_property", 0);
                break;
              case "sci":
                cropse.setProperty("ei:cropse_int_property", 1);
                break;
              case "allguard":
                cropse.setProperty("ei:cropse_int_property", 2);
                break;
              case "allntf":
              case "allsne":
              case "allrrh":
                cropse.setProperty("ei:cropse_int_property", 3);
                break;
              case "allci":
                cropse.setProperty("ei:cropse_int_property", 4);
                break;
              case "scp035":
                cropse.setProperty("ei:cropse_int_property", 5);
                break;
              default:
                cropse.setProperty("ei:cropse_int_property", 6);
                break;
            }
          }
          cropse.nameTag = `${deadPlayer.name}\u7684\u5C38\u4F53
[${ClassesName(deadPlayer)}]`;
          for (let i = 0; i < 27; i++) {
            const deadPlayerItem = deadPlayer.getComponent("minecraft:inventory")?.container.getItem(i);
            cropse.getComponent("minecraft:inventory")?.container.setItem(i, deadPlayerItem);
            deadPlayer.getComponent("minecraft:inventory")?.container.setItem(i, new ItemStack("minecraft:air"));
          }
        }
      }
    }
  });
}
function ClearAllCorpse() {
  const overworld9 = world2.getDimension("overworld");
  overworld9.runCommand(`kill @e[type=ei:corpse]`);
}

// scripts/character_skills.ts
import {
  world as world3,
  system as system2,
  EquipmentSlot,
  BlockVolume,
  GameMode as GameMode2
} from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
var overworld2;
var nether2;
var theEnd2;
world3.afterEvents.worldLoad.subscribe((arg) => {
  overworld2 = world3.getDimension("overworld");
  nether2 = world3.getDimension("nether");
  theEnd2 = world3.getDimension("the_end");
});
function HumanRaycast() {
  const AllPlayers = world3.getAllPlayers();
  for (const player of AllPlayers) {
    const SectorAngle = 120;
    const RaysCount = 30;
    const angleOffset = SectorAngle / RaysCount;
    const ViewDirection = player.getViewDirection();
    for (let i = 0; i < RaysCount; i++) {
      const angle = -SectorAngle / 2 + i * angleOffset;
      const RaycastOptions = {
        maxDistance: 72,
        includeLiquidBlocks: false,
        excludeNames: [player.name],
        tags: ["scp"],
        // type: "ft:scp173",
        ignoreBlockCollision: false
      };
      const PlayerHitEntity = overworld2.getEntitiesFromRay(
        player.getHeadLocation(),
        RotationDirection(ViewDirection, angle),
        RaycastOptions
      );
      if (player.getGameMode() !== GameMode2.Spectator) {
        if (!player.hasTag("scp")) {
          for (const RaycastHit of PlayerHitEntity) {
            if (RaycastHit.entity.hasTag("scp173")) {
              RaycastHit.entity.teleport(RaycastHit.entity.location);
            }
            if (RaycastHit.entity.hasTag("scp966")) {
              const HeadItemID = player.getComponent("minecraft:equippable")?.getEquipment(EquipmentSlot.Head)?.typeId;
              if (HeadItemID === "bli:yeshiyi") {
                overworld2.runCommand(`title "${player.name}" actionbar \xA7l\xA7c\u68C0\u6D4B\u5230SCP-966`);
              }
            }
            if (RaycastHit.entity.hasTag("scp096")) {
              Watch096 = true;
            } else {
              Watch096 = false;
            }
          }
        }
      }
    }
  }
}
function RotationDirection(direction, angle) {
  const radians = angle * Math.PI / 180;
  const NewDirection = {
    x: direction.x * Math.cos(radians) - direction.z * Math.sin(radians),
    y: direction.y,
    z: direction.x * Math.sin(radians) + direction.z * Math.cos(radians)
  };
  return NewDirection;
}
function SCP966Raycast() {
  const AllPlayers = world3.getAllPlayers();
  for (const player of AllPlayers) {
    const ViewDirection = player.getViewDirection();
    const RaycastOptions = {
      maxDistance: 30,
      includeLiquidBlocks: false,
      excludeNames: [player.name],
      excludeTags: ["scp"],
      // tags: [],
      // type: "ft:scp173",
      ignoreBlockCollision: false
    };
    const PlayerHitEntity = overworld2.getEntitiesFromRay(player.getHeadLocation(), ViewDirection, RaycastOptions);
    if (player.hasTag("scp966")) {
      for (const RaycastHit of PlayerHitEntity) {
        const HitPlayer = RaycastHit.entity;
        RaycastHit.entity.runCommand(`effect "${HitPlayer.name}" slowness 1 0`);
      }
    }
  }
}
function SCP106Noclip() {
  const AllPlayers = world3.getAllPlayers();
  for (const player of AllPlayers) {
    if (player.hasTag("scp106")) {
      const Begin = {
        x: player.location.x + 2,
        y: player.location.y + 2,
        z: player.location.z + 2
      };
      const End = {
        x: player.location.x - 2,
        y: player.location.y - 2,
        z: player.location.z - 2
      };
      const CenterX = Math.floor((Begin.x + End.x) / 2);
      const CenterZ = Math.floor((Begin.z + End.z) / 2);
      const DoorReset = new BlockVolume(Begin, End);
      const DoorResetRange = DoorReset.getBlockLocationIterator();
      for (const Doorlocation of DoorResetRange) {
        const Door = overworld2.getBlock(Doorlocation);
        const DoorState = Door?.permutation.getState("bl:door_geomrtry_states");
        if (DoorState === 0 && DoorState !== void 0) {
          if (Doorlocation.x === CenterX && Doorlocation.z === CenterZ) {
            try {
              Door?.setPermutation(Door.permutation.withState("bl:door_geomrtry_states", 0));
              Door?.setPermutation(Door.permutation.withState("bl:logical_sequence", "forward"));
              Door?.setPermutation(Door.permutation.withState("bl:collision", false));
            } catch {
            }
          } else {
            try {
              Door?.setPermutation(Door?.permutation.withState("bl:door_geomrtry_states", 0));
              Door?.setPermutation(Door?.permutation.withState("bl:logical_sequence", "forward"));
              Door?.setPermutation(Door?.permutation.withState("bl:collision", true));
            } catch {
            }
          }
        }
      }
    }
  }
}
function SCP457Burning() {
  for (const player of world3.getAllPlayers()) {
    if (player.hasTag("scp457")) {
      const location457 = player.location;
      const BrunStart = { x: location457.x - 2, y: location457.y - 2, z: location457.z - 2 };
      const BrunEnd = { x: location457.x + 2, y: location457.y + 2, z: location457.z + 2 };
      const BurnRange = new BlockVolume(BrunStart, BrunEnd).getBlockLocationIterator();
      for (const burnlocation of BurnRange) {
        for (const entity of overworld2.getEntitiesAtBlockLocation(burnlocation)) {
          if (!entity.hasTag("scp")) {
            entity.setOnFire(3);
          }
        }
      }
    }
  }
}
var SpawnPointSCP049_2;
var SCP049ChooseType;
var SCP049_Infection;
var SCP008_Infection;
var SCP049CoolDown;
world3.afterEvents.entityHitEntity.subscribe((arg) => {
  const DamagingEntity = arg.damagingEntity;
  const HitEntity = arg.hitEntity;
  const DamagingEntityLocation = DamagingEntity.location;
  if (DamagingEntity.hasTag("scp049")) {
    const SCP049 = DamagingEntity;
    const EntityQueryOptions3 = {
      excludeTags: ["scp"],
      location: DamagingEntityLocation,
      maxDistance: 2,
      minDistance: 0,
      name: HitEntity.name
    };
    const Touched = overworld2.getEntities(EntityQueryOptions3);
    if (Touched !== void 0) {
      const Toucheds = Touched;
      SCP049_Infection = Toucheds[0];
      SpawnPointSCP049_2 = [HitEntity.location];
      const TargetOffHandItem = SCP049_Infection.getComponent("equippable")?.getEquipment(EquipmentSlot.Offhand);
      if (TargetOffHandItem?.typeId === "bli:scp714") {
        DamagingEntity.runCommand(`title "${DamagingEntity.name}" times 0 3 0`);
        DamagingEntity.runCommand(`title" ${DamagingEntity.name}" title \xA76SCP-714\u9632\u5FA1`);
      } else {
        let Infections2 = function() {
          CoolTime = 10 * SecondUnit;
          overworld2.runCommand(`gamerule sendcommandfeedback false`);
          SCP049CoolDown = system2.runInterval(() => {
            CoolTime--;
            overworld2.runCommand(`title "${DamagingEntity.name}" times 0 5 0`);
            overworld2.runCommand(
              `title "${DamagingEntity.name}" title \xA7e"\u6B63\u5728\u8FDB\u884C\u5C38\u4F53\u624B\u672F...(${Math.floor(
                CoolTime / 20
              )}s)"
\xA7f\u6B63\u5728\u5C06\u73A9\u5BB6\xA7f\u8F6C\u5316\u4E3A\uFF1A\xA7c${SCP049ChooseType.subtitle}`
            );
            DamagingEntity.teleport(DamagingEntityLocation);
          }, 1);
          system2.runTimeout(() => {
            system2.clearRun(SCP049CoolDown);
            overworld2.runCommand(`gamerule sendcommandfeedback true`);
            spawn049_2(SCP049_Infection);
          }, 10 * SecondUnit);
        };
        var Infections = Infections2;
        Toucheds[0].kill();
        const Menu049 = new ActionFormData().title(`\xA7cSCP-049\u201C\u6CBB\u6108\u201D\u9009\u62E9\u5668`).button(`\xA7aSCP-049-2 \u6807\u51C6\u578B\uFF08\u8840\u91CF\uFF1A\u6807\u51C6\uFF09`).button(`\xA7bSCP-049-2 \u5FEB\u901F\u578B\uFF08\u8840\u91CF\uFF1A\u5C11\uFF09`).button(`\xA76SCP-049-2 \u6162\u901F\u578B\uFF08\u8840\u91CF\uFF1A\u591A\uFF09`);
        let CoolTime;
        Menu049.show(SCP049).then((response) => {
          switch (response.selection) {
            case 0:
              SCP049ChooseType = SCP_049_2;
              Infections2();
              break;
            case 1:
              SCP049ChooseType = SCP_049_2_Fast;
              Infections2();
              break;
            case 2:
              SCP049ChooseType = SCP_049_2_Slow;
              Infections2();
              break;
          }
        });
      }
    }
  }
  if (DamagingEntity.hasTag("scp096")) {
    const EntityQueryOptions3 = {
      excludeTags: ["scp"],
      location: DamagingEntityLocation,
      maxDistance: 2,
      minDistance: 0,
      name: HitEntity.name
    };
    const Touched = overworld2.getEntities(EntityQueryOptions3);
    if (Touched !== void 0 && Attack096 === true) {
      const Toucheds = Touched;
      const Target = Toucheds[0];
      Target.kill();
      PlaySoundForAllPlayer("D5");
    }
  }
  if (DamagingEntity.hasTag("scp008_1")) {
    const SCP008_1 = DamagingEntity;
    const EntityQueryOptions3 = {
      excludeTags: ["scp"],
      location: DamagingEntityLocation,
      maxDistance: 2,
      minDistance: 0,
      name: HitEntity.name
    };
    const Touched = overworld2.getEntities(EntityQueryOptions3);
    if (Touched !== void 0) {
      const Toucheds = Touched;
      SCP008_Infection = Toucheds[0];
      spawn008_1(SCP008_Infection, SCP008_Infection.location);
    }
  }
});
var Watch096 = false;
var WatchOther = false;
var Trigger = true;
var Attack096 = false;
var BreakDoorInterval;
var TriggerInterval;
function SCP096ScreamAttack(player) {
  let ScreamTime = 10;
  let AttackTime = 20;
  PlaySoundForAllPlayer("Tir");
  overworld2.runCommand(
    `replaceitem entity "${player.name}" slot.armor.head 0 icon:scp_096_crying 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
  );
  function Scream() {
    if (ScreamTime > 0) {
      ScreamTime--;
      system2.runTimeout(() => {
        Scream();
      }, 20);
    } else {
      system2.clearRun(TriggerInterval);
      Attack096 = true;
      Attack();
      overworld2.runCommand(`gamerule sendcommandfeedback true`);
      BreakDoorInterval = system2.runInterval(() => {
        if (player.hasTag("scp096")) {
          BreakDoor();
        }
      }, 1);
      PlaySoundForAllPlayer("Scr");
      overworld2.runCommand(`effect "${player.name}" speed 20 6 true`);
      overworld2.runCommand(
        `replaceitem entity "${player.name}" slot.armor.head 0 icon:scp_096_attacking 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
      );
    }
  }
  Scream();
  overworld2.runCommand(`gamerule sendcommandfeedback false`);
  TriggerInterval = system2.runInterval(() => {
    player.teleport(player.location);
  }, 0);
  function Attack() {
    if (AttackTime > 0) {
      AttackTime--;
      system2.runTimeout(() => {
        Attack();
        if (AttackTime === 9) {
          PlaySoundForAllPlayer("Scr");
        }
      }, 20);
    } else {
      overworld2.runCommand(
        `replaceitem entity "${player.name}" slot.armor.head 0 icon:scp_096_normal 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
      );
      system2.clearRun(BreakDoorInterval);
      Attack096 = false;
      system2.runTimeout(() => {
        WatchOther = false;
        Watch096 = false;
        Trigger = true;
      }, SecondUnit * 15);
    }
  }
  function BreakDoor() {
    const Begin = { x: player.location.x - 1, y: player.location.y - 1, z: player.location.z - 1 };
    const End = { x: player.location.x + 1, y: player.location.y + 1, z: player.location.z + 1 };
    const GetDoorRange = new BlockVolume(Begin, End).getBlockLocationIterator();
    for (const GetLocation of GetDoorRange) {
      const GetBlock = overworld2.getBlock(GetLocation);
      const GetBlockPermutation = GetBlock?.permutation.getState("bl:door_geomrtry_states");
      const AgreeDoor = [
        "bl:light_door",
        "bl:light_door_upper",
        "bl:light_door_2",
        "bl:light_door_2_upper",
        "bl:light_door_3",
        "bl:light_door_3_upper",
        "bl:light_door_3_break",
        "bl:light_door_3_break_upper",
        "bl:light_door_4",
        "bl:light_door_4_upper",
        "bl:bms_security_door",
        "bl:bms_security_door_upper",
        "bl:hcz_door",
        "bl:hcz_door_upper",
        "bl:bms_lab_door",
        "bl:bms_lab_door_upper",
        "bl:bms_lab_door_left",
        "bl:bms_lab_door_left_upper",
        "bl:bms_lab_door_right",
        "bl:bms_lab_door_right_upper"
      ];
      if (AgreeDoor.includes(GetBlock?.typeId)) {
        if (GetBlockPermutation === 0 && GetBlockPermutation !== void 0) {
          const GeoState = GetBlock?.permutation.withState("bl:door_geomrtry_states", 14);
          GetBlock?.setPermutation(GeoState);
          const LSState = GetBlock?.permutation.withState("bl:logical_sequence", "reverse");
          GetBlock?.setPermutation(LSState);
          PlaySoundForAllPlayer("DoorOpenFast");
        }
      }
    }
  }
}
function SCP096Raycast() {
  const AllPlayers = world3.getAllPlayers();
  for (const player of AllPlayers) {
    const SectorAngle = 120;
    const RaysCount = 15;
    const angleOffset = SectorAngle / RaysCount;
    const ViewDirection = player.getViewDirection();
    for (let i = 0; i < RaysCount; i++) {
      const angle = -SectorAngle / 2 + i * angleOffset;
      const RaycastOptions = {
        maxDistance: 72,
        includeLiquidBlocks: false,
        excludeNames: [player.name],
        excludeTags: ["scp"],
        // type: "ft:scp173",
        ignoreBlockCollision: false
      };
      const PlayerHitEntity = overworld2.getEntitiesFromRay(
        player.getHeadLocation(),
        RotationDirection(ViewDirection, angle),
        RaycastOptions
      );
      if (player.hasTag("scp096")) {
        if (PlayerHitEntity.length > 0) {
          WatchOther = true;
          if (Watch096 === true && Trigger === true) {
            Trigger = false;
            SCP096ScreamAttack(player);
          }
        }
      }
    }
  }
}

// scripts/classes.ts
var overworld3;
var nether3;
var theEnd3;
world4.afterEvents.worldLoad.subscribe((arg) => {
  overworld3 = world4.getDimension("overworld");
  nether3 = world4.getDimension("nether");
  theEnd3 = world4.getDimension("the_end");
});
var AllClassesTag = [
  "sci",
  "res_asst",
  "res_doctor",
  "res",
  "res_senior",
  "res_chief",
  "res_cog_haz",
  "allguard",
  "guard",
  "guard_med",
  "guard_tech",
  "guard_rru",
  "guard_chief",
  "guard_hs",
  "guard_sd",
  "allntf",
  "ntf",
  "ntf_breaker",
  "ntf_sniper",
  "ntf_med",
  "ntf_com",
  "allsne",
  "sne",
  "sne_breaker",
  "sne_com",
  "allrrh",
  "rrh",
  "allclassd",
  "classd",
  "classd_thief",
  "classd_rioters",
  "classd_madman",
  "classd_engineer",
  "classd_fugitive",
  "allci",
  "ci_agent",
  "ci",
  "ci_breaker",
  "ci_sniper",
  "ci_med",
  "ci_com",
  "allgoc",
  "goc",
  "goc_des",
  "goc_com",
  "scp",
  "sh",
  "scp173",
  "scp457",
  "scp066",
  "scp049",
  "scp049_2",
  "scp049_2_f",
  "scp049_2_s",
  "scp966",
  "scp106",
  "scp096",
  "scp035",
  "scp008_1"
];
var CanSpawnSCPTags = ["scp173", "scp457", "scp066", "scp049", "scp106", "scp096"];
var CanEscapeClassesTag = ["sci", "allclassd", "scp"];
var CanEvacuateClassesTag = ["sci", "allguard", "allntf", "allsne", "allrrh", "allgoc"];
var HumanInventory = [18, 27];
var ClassD = {
  title: "\xA76Class D",
  subtitle: "\xA76D\u7EA7\u4EBA\u5458",
  target_tip: "\xA7f\u8EB2\u907F\u5B89\u4FDD\u4EBA\u5458\u7684\u641C\u6355\n\u6CE8\u610F\u7A81\u7834\u6536\u5BB9\u7684\u5F02\u5E38\n\u4ED6\u4EEC\u4F1A\u6740\u6B7B\u4F60\n\u5C3D\u4E00\u5207\u53EF\u80FD\u9003\u79BB\u8BBE\u65BD",
  tag: "classd",
  group: "allclassd",
  items: [
    // ["l4gg:ak47", 1],
    // ["l4gg:ak47_mag", 16],
    // ["bli:lvci", 1],
  ],
  armor: [
    // ["slot.armor.head", "bli:fast_gasmask_ci"],
    ["slot.armor.chest", "bli:classd_clothes"],
    ["slot.armor.legs", "bli:pants_classd"]
    // ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory
};
var ClassD_Thief = {
  title: "\xA76Class D - Thief",
  subtitle: "\xA76D\u7EA7\u4EBA\u5458 - \u5C0F\u5077",
  target_tip: "\xA7f\u4E8B\u6545\u53D1\u751F\u524D\n\u4F60\u4ECE\u4E00\u4E2A\u5B89\u4FDD\u4EBA\u5458\u7684\u88E4\u88C6\u91CC\u5077\u4E86\u4E9B\u4E1C\u897F\n\u5229\u7528\u597D\u5B83\u4EEC\u3002\u8EB2\u907F\u5B89\u4FDD\u4EBA\u5458\u7684\u641C\u6355\n\u6CE8\u610F\u7A81\u7834\u6536\u5BB9\u7684\u5F02\u5E38\n\u4ED6\u4EEC\u4F1A\u6740\u6B7B\u4F60\n\u5C3D\u4E00\u5207\u53EF\u80FD\u9003\u79BB\u8BBE\u65BD",
  tag: "classd_thief",
  group: "allclassd",
  items: [
    ["bli:yeshiyi", 1, "random", "bli:lv1", 1],
    ["bli:first_aid_kit", 1, "random", "bli:small_first_aid_kit", 1]
    // ["bli:lvci", 1],
  ],
  armor: [
    // ["slot.armor.head", "bli:fast_gasmask_ci"],
    ["slot.armor.chest", "bli:classd_clothes"],
    ["slot.armor.legs", "bli:pants_classd"]
    // ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory
};
var ClassD_Rioters = {
  title: "\xA76Class D - Rioters",
  subtitle: "\xA76D\u7EA7\u4EBA\u5458 - \u66B4\u52A8\u5206\u5B50",
  target_tip: "\xA7f\u5173\u5728\u8FD9\u91CC\u7684\u6BCF\u4E00\u5929\u4F60\u90FD\u5BC6\u8C0B\u7740\u9020\u53CD\n\u56E0\u6B64\u4F60\u79EF\u7D2F\u4E86\u4E9B\u6B66\u5668\n\u8EB2\u907F\u5B89\u4FDD\u4EBA\u5458\u7684\u641C\u6355\n\u6CE8\u610F\u7A81\u7834\u6536\u5BB9\u7684\u5F02\u5E38\n\u4ED6\u4EEC\u4F1A\u6740\u6B7B\u4F60\n\u5C3D\u4E00\u5207\u53EF\u80FD\u9003\u79BB\u8BBE\u65BD",
  tag: "classd_rioters",
  group: "allclassd",
  items: [
    ["bli:simple_knife", 1, "random", "bli:water_pipe", 1]
    // ["l4gg:ak47_mag", 16],
    // ["bli:lvci", 1],
  ],
  armor: [
    // ["slot.armor.head", "bli:fast_gasmask_ci"],
    ["slot.armor.chest", "bli:classd_clothes"],
    ["slot.armor.legs", "bli:pants_classd"]
    // ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory
};
var ClassD_Madman = {
  title: "\xA7vClass D - Madman",
  subtitle: "\xA7vD\u7EA7\u4EBA\u5458 - \u75AF\u5B50",
  target_tip: "\xA7f\u4F60\u5728\u4E00\u5929\u5929\u7684\u56DA\u7981\u4E0E\u6050\u5413\u4E2D\u9010\u6E10\u766B\u72C2\n\u56E0\u6B64\u4F60\u75AF\u4E86\uFF0C\u662F\u7684\uFF0C\u771F\u7684\u75AF\u4E86\n\u4F60\u73B0\u5728\u89C1\u8C01\u6253\u8C01\uFF0C\u5373\u4F7F\u662F\u4F60\u7684\u961F\u53CB\n\u5C3D\u4E00\u5207\u53EF\u80FD\u9003\u79BB\u8BBE\u65BD",
  tag: "classd_madman",
  group: "allclassd",
  items: [["bli:simple_knife", 1, "random", "bli:water_pipe", 1]],
  armor: [
    // ["slot.armor.head", "bli:fast_gasmask_ci"],
    ["slot.armor.chest", "bli:vest_inverse"],
    ["slot.armor.legs", "bli:pants_classd"]
    // ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory
};
var ClassD_Engineer = {
  title: "\xA76Class D - Engineer",
  subtitle: "\xA76D\u7EA7\u4EBA\u5458 - \u6280\u5DE5",
  target_tip: "\xA7f\u4F60\u5728\u8BE5\u7AD9\u70B9\u7ECF\u5E38\u534F\u52A9\u7535\u5DE5\u8FDB\u884C\u8BBE\u65BD\u7EF4\u62A4\n\u56E0\u6B64\u4F60\u8FD8\u62E5\u6709\u4E00\u4E9B\u4FDD\u9669\u4E1D\u5B58\u8D27\n\u5E2E\u52A9\u961F\u53CB\u4FEE\u590D\u635F\u574F\u7684\u8BBE\u5907\n\u8EB2\u907F\u5B89\u4FDD\u4EBA\u5458\u7684\u641C\u6355\n\u6CE8\u610F\u7A81\u7834\u6536\u5BB9\u7684\u5F02\u5E38\n\u4ED6\u4EEC\u4F1A\u6740\u6B7B\u4F60\n\u5C3D\u4E00\u5207\u53EF\u80FD\u9003\u79BB\u8BBE\u65BD",
  tag: "classd_engineer",
  group: "allclassd",
  items: [
    ["bli:fuse_6a", 1, "random", "bli:fuse_9a", 1]
    // ["l4gg:ak47_mag", 16],
    // ["bli:lvci", 1],
  ],
  armor: [
    // ["slot.armor.head", "bli:fast_gasmask_ci"],
    ["slot.armor.chest", "bli:classd_clothes"],
    ["slot.armor.legs", "bli:pants_classd"]
    // ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory
};
var ClassD_Fugitive = {
  title: "\xA76Class D - Fugitive",
  subtitle: "\xA76D\u7EA7\u4EBA\u5458 - \u6F5C\u9003\u8005",
  target_tip: "\xA7f\u4F60\u901A\u8FC7\u201C\u975E\u6CD5\u201D\u6E20\u9053\u5077\u7A83\u4E86\u4E00\u4E2ASCP-268\n\u526F\u624B\u6301SCP-268\u65F6\u5176\u4ED6\u4EBA\u4F1A\u5C06\u4F60\u5FFD\u7565\n\u5229\u7528\u597D\u8FD9\u4E2A\u9053\u5177\uFF0C\u8FD9\u4F1A\u8BA9\u9003\u79BB\u8F7B\u800C\u6613\u4E3E\n\u8EB2\u907F\u5B89\u4FDD\u4EBA\u5458\u7684\u641C\u6355\n\u6CE8\u610F\u7A81\u7834\u6536\u5BB9\u7684\u5F02\u5E38\n\u4ED6\u4EEC\u4F1A\u6740\u6B7B\u4F60\n\u5C3D\u4E00\u5207\u53EF\u80FD\u9003\u79BB\u8BBE\u65BD",
  tag: "classd_fugitive",
  group: "allclassd",
  items: [
    ["bli:scp268", 1]
    // ["l4gg:ak47_mag", 16],
    // ["bli:lvci", 1],
  ],
  armor: [
    // ["slot.armor.head", "bli:fast_gasmask_ci"],
    ["slot.armor.chest", "bli:classd_clothes"],
    ["slot.armor.legs", "bli:pants_classd"]
    // ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory
};
var CI_Agent = {
  title: "\xA72Chaos Insurgency - Agent",
  subtitle: "\xA72\u6DF7\u6C8C\u5206\u88C2\u8005 - \u7279\u5DE5",
  target_tip: "\xA7f\u4F60\u65E9\u5DF2\u6F5C\u4F0F\u591A\u65F6\n\u73B0\u5728\u662F\u65F6\u5019\u4E86\n\u7EC4\u7EC7D\u7EA7\u4EBA\u5458\n\u4E0E\u652F\u63F4\u90E8\u961F\u91CC\u5E94\u5916\u5408\n\u5E2E\u52A9D\u7EA7\u9003\u79BB\u8BBE\u65BD",
  tag: "ci_agent",
  group: "allclassd",
  items: [
    ["bli:taser_m26", 1],
    ["bli:lv1", 1]
    // ["bli:lvci", 1],
  ],
  armor: [
    // ["slot.armor.head", "bli:fast_gasmask_ci"],
    ["slot.armor.chest", "bli:classd_clothes"],
    ["slot.armor.legs", "bli:pants_classd"]
    // ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory
};
var LimitClassDDefault = 27;
var LimitCIAgentDef = 1;
var LimitClassDFugitiveDef = 1;
function spawn_classd() {
  let LimitClassD = LimitClassDDefault;
  if (CustomSupportLimit !== void 0) {
    LimitClassD = CustomSupportLimit;
  }
  let PreSpawnPlayer = world4.getAllPlayers();
  let LimitCIAgent = LimitCIAgentDef;
  let LimitClassDFugitive = LimitClassDFugitiveDef;
  PreSpawnPlayer.forEach((player) => {
    const position = player.location;
    const PlayerTag = player.getTags();
    const PlayerID = player.name;
    if (LimitClassD !== 0) {
      if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
      } else {
        if (!player.hasTag("dev")) {
          player.removeTag("spectator");
          overworld3.runCommand(`effect "${PlayerID}" clear`);
          overworld3.runCommand(`gamemode adventure "${PlayerID}"`);
          const SpawnPointID = Math.floor(Math.random() * SpawnPointClassD.length);
          overworld3.runCommand(
            `tp "${PlayerID}" ${SpawnPointClassD[SpawnPointID].x} ${SpawnPointClassD[SpawnPointID].y} ${SpawnPointClassD[SpawnPointID].z}`
          );
          const SpawnAllType = [
            ClassD,
            ClassD_Thief,
            ClassD_Rioters,
            CI_Agent,
            ClassD_Engineer,
            ClassD_Madman,
            ClassD_Fugitive
          ];
          const TypeRandom = Math.floor(Math.random() * SpawnAllType.length);
          let SpawnType = SpawnAllType[TypeRandom];
          if (SpawnType === CI_Agent && LimitCIAgent !== 1) {
            SpawnType = ClassD;
          }
          if (SpawnType === CI_Agent && LimitCIAgent === 1) {
            LimitCIAgent = 0;
          }
          if (SpawnType === ClassD_Fugitive && LimitClassDFugitive !== 1) {
            SpawnType = ClassD;
          }
          if (SpawnType === ClassD_Fugitive && LimitClassDFugitive === 1) {
            LimitClassDFugitive = 0;
          }
          player.addTag(`${SpawnType.tag}`);
          player.addTag(`${SpawnType.group}`);
          overworld3.runCommand(`title "${PlayerID}" times 0 300 0`);
          overworld3.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
          overworld3.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}
${SpawnType.target_tip}`);
          overworld3.runCommand(`clear "${PlayerID}"`);
          overworld3.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
          overworld3.runCommand(`effect "${PlayerID}" resistance 20 255 true`);
          for (let slot = SpawnType.inventory[0]; slot < SpawnType.inventory[1]; slot++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" slot.inventory ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          overworld3.runCommand(
            `replaceitem entity "${PlayerID}" slot.hotbar 8 ei:id_card 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          );
          for (let i = 0; i < SpawnType.items.length; i++) {
            if (SpawnType.items[i][2] === "random") {
              const RandomNum = Math.random();
              if (RandomNum <= 0.5) {
                overworld3.runCommand(`give "${PlayerID}" ${SpawnType.items[i][0]} ${SpawnType.items[i][1]}`);
              } else {
                overworld3.runCommand(`give "${PlayerID}" ${SpawnType.items[i][3]} ${SpawnType.items[i][4]}`);
              }
            } else {
              overworld3.runCommand(`give "${PlayerID}" ${SpawnType.items[i][0]} ${SpawnType.items[i][1]}`);
            }
          }
          for (let i = 0; i < SpawnType.armor.length; i++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0`
            );
          }
          LimitClassD--;
        }
      }
    }
  });
}
var Res_Asst = {
  title: "\xA7bAssistant Researcher",
  subtitle: "\xA7b\u7814\u7A76\u52A9\u7406",
  target_tip: "\xA7f\u6CE8\u610F\u7A81\u7834\u6536\u5BB9\u7684\u5F02\u5E38\u548C\u5DF2\u7ECF\u51FA\u9003\u7684D\u7EA7\u4EBA\u5458\n\u4ED6\u4EEC\u4F1A\u6740\u6B7B\u4F60\n\u5BFB\u6C42\u5B89\u5168\u5B98\u5458\u4E0EMTF\u7684\u5E2E\u52A9\n\u5C3D\u4E00\u5207\u53EF\u80FD\u9003\u79BB\u8BBE\u65BD\n\xA7e\u542C\u4ECE\u7814\u7A76\u4E3B\u7BA1\u7684\u8C03\u5EA6\n\u4ED6\u6709\u4E0E\u4F60\u76F8\u6BD4\u66F4\u9AD8\u7684\u6743\u9650",
  tag: "res_asst",
  group: "sci",
  items: [["bli:lv2", 1]],
  armor: [
    // ["slot.armor.head", "bli:fast_gasmask_ci"],
    ["slot.armor.chest", "bli:res_clothes"]
    // ["slot.armor.legs", "bli:pants_ci"],
    // ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory
};
var Res_Doctor = {
  title: "\xA7bDoctor",
  subtitle: "\xA7b\u533B\u751F",
  target_tip: "\xA7f\u6CE8\u610F\u7A81\u7834\u6536\u5BB9\u7684\u5F02\u5E38\u548C\u5DF2\u7ECF\u51FA\u9003\u7684D\u7EA7\u4EBA\u5458\n\u4ED6\u4EEC\u4F1A\u6740\u6B7B\u4F60\n\u5BFB\u6C42\u5B89\u5168\u5B98\u5458\u4E0EMTF\u7684\u5E2E\u52A9\n\u7528\u4F60\u7684\u533B\u7597\u5305\u5E2E\u52A9\u961F\u53CB\n\u5C3D\u4E00\u5207\u53EF\u80FD\u9003\u79BB\u8BBE\u65BD\n\xA7e\u542C\u4ECE\u7814\u7A76\u4E3B\u7BA1\u7684\u8C03\u5EA6\n\u4ED6\u6709\u4E0E\u4F60\u76F8\u6BD4\u66F4\u9AD8\u7684\u6743\u9650",
  tag: "res_doctor",
  group: "sci",
  items: [
    ["bli:lv3", 1],
    ["bli:first_aid_kit_medic", 1]
  ],
  armor: [
    // ["slot.armor.head", "bli:fast_gasmask_ci"],
    ["slot.armor.chest", "bli:res_clothes"]
    // ["slot.armor.legs", "bli:pants_ci"],
    // ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory
};
var Res = {
  title: "\xA7bResearcher",
  subtitle: "\xA7b\u7814\u7A76\u4EBA\u5458",
  target_tip: "\xA7f\u6CE8\u610F\u7A81\u7834\u6536\u5BB9\u7684\u5F02\u5E38\u548C\u5DF2\u7ECF\u51FA\u9003\u7684D\u7EA7\u4EBA\u5458\n\u4ED6\u4EEC\u4F1A\u6740\u6B7B\u4F60\n\u5BFB\u6C42\u5B89\u5168\u5B98\u5458\u4E0EMTF\u7684\u5E2E\u52A9\n\u5C3D\u4E00\u5207\u53EF\u80FD\u9003\u79BB\u8BBE\u65BD\n\xA7e\u542C\u4ECE\u7814\u7A76\u4E3B\u7BA1\u7684\u8C03\u5EA6\n\u4ED6\u6709\u4E0E\u4F60\u76F8\u6BD4\u66F4\u9AD8\u7684\u6743\u9650",
  tag: "res",
  group: "sci",
  items: [["bli:lv3", 1]],
  armor: [
    // ["slot.armor.head", "bli:fast_gasmask_ci"],
    ["slot.armor.chest", "bli:res_clothes"]
    // ["slot.armor.legs", "bli:pants_ci"],
    // ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory
};
var Res_Senior = {
  title: "\xA7bSenior Researcher",
  subtitle: "\xA7b\u9AD8\u7EA7\u7814\u7A76\u4EBA\u5458",
  target_tip: "\xA7f\u6CE8\u610F\u7A81\u7834\u6536\u5BB9\u7684\u5F02\u5E38\u548C\u5DF2\u7ECF\u51FA\u9003\u7684D\u7EA7\u4EBA\u5458\n\u4ED6\u4EEC\u4F1A\u6740\u6B7B\u4F60\n\u5BFB\u6C42\u5B89\u5168\u5B98\u5458\u4E0EMTF\u7684\u5E2E\u52A9\n\u5C3D\u4E00\u5207\u53EF\u80FD\u9003\u79BB\u8BBE\u65BD\n\xA7e\u542C\u4ECE\u7814\u7A76\u4E3B\u7BA1\u7684\u8C03\u5EA6\n\u4ED6\u6709\u4E0E\u4F60\u76F8\u6BD4\u66F4\u9AD8\u7684\u6743\u9650",
  tag: "res_senior",
  group: "sci",
  items: [
    ["bli:lv4", 1],
    ["bli:yeshiyi", 1]
  ],
  armor: [
    // ["slot.armor.head", "bli:fast_gasmask_ci"],
    ["slot.armor.chest", "bli:res_clothes"]
    // ["slot.armor.legs", "bli:pants_ci"],
    // ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory
};
var Res_Chief = {
  title: "\xA7bResearch Chief",
  subtitle: "\xA7b\u7814\u7A76\u4E3B\u7BA1",
  target_tip: "\xA7f\u6CE8\u610F\u7A81\u7834\u6536\u5BB9\u7684\u5F02\u5E38\u548C\u5DF2\u7ECF\u51FA\u9003\u7684D\u7EA7\u4EBA\u5458\n\u4ED6\u4EEC\u4F1A\u6740\u6B7B\u4F60\n\u5BFB\u6C42\u5B89\u5168\u5B98\u5458\u4E0EMTF\u7684\u5E2E\u52A9\n\u5C3D\u4E00\u5207\u53EF\u80FD\u9003\u79BB\u8BBE\u65BD\n\xA7e\u4F60\u62E5\u6709\u76F8\u6BD4\u5176\u4ED6\u4EBA\u66F4\u9AD8\u7684\u6743\u9650\n\u53EF\u4EE5\u5E26\u9886\u961F\u53CB\u5FEB\u901F\u901A\u8FC7\u67D0\u4E9B\u4F4D\u7F6E",
  tag: "res_chief",
  group: "sci",
  items: [
    ["bli:lv5", 1],
    ["bli:glock18", 1],
    ["bli:pistol_mag", 8]
  ],
  armor: [
    // ["slot.armor.head", "bli:fast_gasmask_ci"],
    ["slot.armor.chest", "bli:res_clothes"]
    // ["slot.armor.legs", "bli:pants_ci"],
    // ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory
};
var Res_CogHaz = {
  title: "\xA7bCognitive Hazard Researcher",
  subtitle: "\xA7b\u8BA4\u77E5\u5371\u5BB3\u4E13\u5BB6",
  target_tip: "\xA7f\u6CE8\u610F\u7A81\u7834\u6536\u5BB9\u7684\u5F02\u5E38\u548C\u5DF2\u7ECF\u51FA\u9003\u7684D\u7EA7\u4EBA\u5458\n\u4ED6\u4EEC\u4F1A\u6740\u6B7B\u4F60\n\u5BFB\u6C42\u5B89\u5168\u5B98\u5458\u4E0EMTF\u7684\u5E2E\u52A9\n\u5C3D\u4E00\u5207\u53EF\u80FD\u9003\u79BB\u8BBE\u65BD\n\xA7e\u4F60\u62E5\u6709\u9488\u5BF9SCP\u7684\u6291\u5236\u5DE5\u5177\n\u53EF\u4EE5\u534F\u52A9\u961F\u53CB\u538B\u5236SCP\u5F02\u5E38",
  tag: "res_cog_haz",
  group: "sci",
  items: [
    ["bli:lv4", 1],
    ["ei:spray_fire_extinguisher", 1],
    ["ei:spray_lavender", 1],
    ["ei:spray_poison", 1]
  ],
  armor: [
    // ["slot.armor.head", "bli:fast_gasmask_ci"],
    ["slot.armor.chest", "bli:hazmat_suit_gray"]
    // ["slot.armor.legs", "bli:pants_ci"],
    // ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory
};
var LimitResDefault = 27;
var LimitResDoctorDef = 1;
var LimitResChiefDef = 1;
var LimitResCogHazDef = 1;
function spawn_res() {
  let LimitRes = LimitResDefault;
  if (CustomSupportLimit !== void 0) {
    LimitRes = CustomSupportLimit;
  }
  let PreSpawnPlayer = world4.getAllPlayers();
  let LimitResDoctor = LimitResDoctorDef;
  let LimitResChief = LimitResChiefDef;
  let LimitResCogHaz = LimitResCogHazDef;
  PreSpawnPlayer.forEach((player) => {
    const position = player.location;
    const PlayerTag = player.getTags();
    const PlayerID = player.name;
    if (LimitRes !== 0) {
      if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
      } else {
        if (!player.hasTag("dev")) {
          player.removeTag("spectator");
          overworld3.runCommand(`effect "${PlayerID}" clear`);
          overworld3.runCommand(`gamemode adventure "${PlayerID}"`);
          const SpawnPointID = Math.floor(Math.random() * SpawnPointRes.length);
          overworld3.runCommand(
            `tp "${PlayerID}" ${SpawnPointRes[SpawnPointID].x} ${SpawnPointRes[SpawnPointID].y} ${SpawnPointRes[SpawnPointID].z}`
          );
          const SpawnAllType = [Res_Asst, Res, Res_Doctor, Res_Senior, Res_Chief, Res_CogHaz];
          const TypeRandom = Math.floor(Math.random() * SpawnAllType.length);
          let SpawnType = SpawnAllType[TypeRandom];
          if (SpawnType === Res_Doctor && LimitResDoctor !== 1) {
            SpawnType = Res;
          }
          if (SpawnType === Res_Doctor && LimitResDoctor === 1) {
            LimitResDoctor = 0;
          }
          if (SpawnType === Res_Chief && LimitResChief !== 1) {
            SpawnType = Res;
          }
          if (SpawnType === Res_Chief && LimitResChief === 1) {
            LimitResChief = 0;
          }
          if (SpawnType === Res_CogHaz && LimitResCogHaz !== 1) {
            SpawnType = Res_CogHaz;
          }
          if (SpawnType === Res_CogHaz && LimitResCogHaz === 1) {
            LimitResCogHaz = 0;
          }
          player.addTag(`${SpawnType.tag}`);
          player.addTag(`${SpawnType.group}`);
          overworld3.runCommand(`title "${PlayerID}" times 0 300 0`);
          overworld3.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
          overworld3.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}
${SpawnType.target_tip}`);
          overworld3.runCommand(`clear "${PlayerID}"`);
          overworld3.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
          overworld3.runCommand(`effect "${PlayerID}" resistance 20 255 true`);
          for (let slot = SpawnType.inventory[0]; slot < SpawnType.inventory[1]; slot++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" slot.inventory ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          overworld3.runCommand(
            `replaceitem entity "${PlayerID}" slot.hotbar 8 ei:id_card 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          );
          for (let i = 0; i < SpawnType.items.length; i++) {
            if (SpawnType.items[i][2] === "random") {
              const RandomNum = Math.random();
              if (RandomNum <= 0.5) {
                overworld3.runCommand(`give "${PlayerID}" ${SpawnType.items[i][0]} ${SpawnType.items[i][1]}`);
              } else {
                overworld3.runCommand(`give "${PlayerID}" ${SpawnType.items[i][3]} ${SpawnType.items[i][4]}`);
              }
            } else {
              overworld3.runCommand(`give "${PlayerID}" ${SpawnType.items[i][0]} ${SpawnType.items[i][1]}`);
            }
          }
          for (let i = 0; i < SpawnType.armor.length; i++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0`
            );
          }
          if (PlayerID === "Ectrico") {
            overworld3.runCommand(`give "${PlayerID}" bli:skirt 1 0 {"minecraft:keep_on_death":{}}`);
          }
          LimitRes--;
        }
      }
    }
  });
}
var Guard = {
  title: "\xA71Security Officer",
  subtitle: "\xA71\u5B89\u5168\u5B98\u5458",
  target_tip: "\xA7f\u65E0\u6548\u5316\u4F60\u89C1\u5230\u7684\u6240\u6709SCP\u9879\u76EE\n\u6740\u6B7B\u4F60\u770B\u5230\u7684\u6240\u6709D\u7EA7\u4EBA\u5458\n\u8425\u6551\u4ECD\u56F0\u5728\u8BBE\u65BD\u5185\u7684\u5DE5\u4F5C\u4EBA\u5458\n\u6D88\u706D\u6240\u6709\u5165\u4FB5\u8005\n\u4E0D\u60DC\u4E00\u5207\u4EE3\u4EF7\u4FDD\u62A4\u8BBE\u65BD",
  tag: "guard",
  group: "allguard",
  items: [
    ["bli:fnp90", 1],
    ["bli:smg_mag", 16],
    ["bli:lv2", 1]
  ],
  armor: [
    ["slot.armor.head", "bli:fast_glass"],
    ["slot.armor.chest", "bli:vest_guard"],
    ["slot.armor.legs", "bli:pants_guard"],
    ["slot.armor.feet", "bli:boots_guard"]
  ],
  inventory: HumanInventory
};
var Guard_Med = {
  title: "\xA7aMedical Security Officer",
  subtitle: "\xA7a\u533B\u7597\u5B89\u5168\u5B98\u5458",
  target_tip: "\xA76\u4E3A\u4F60\u7684\u961F\u53CB\u8FDB\u884C\u6CBB\u7597\n\xA7f\u65E0\u6548\u5316\u4F60\u89C1\u5230\u7684\u6240\u6709SCP\u9879\u76EE\n\u6740\u6B7B\u4F60\u770B\u5230\u7684\u6240\u6709D\u7EA7\u4EBA\u5458\n\u8425\u6551\u4ECD\u56F0\u5728\u8BBE\u65BD\u5185\u7684\u5DE5\u4F5C\u4EBA\u5458\n\u6D88\u706D\u6240\u6709\u5165\u4FB5\u8005\n\u4E0D\u60DC\u4E00\u5207\u4EE3\u4EF7\u4FDD\u62A4\u8BBE\u65BD",
  tag: "guard_med",
  group: "allguard",
  items: [
    ["bli:glock19", 1],
    ["bli:pistol_mag", 16],
    ["bli:lv2", 1],
    ["bli:first_aid_kit_medic", 1]
  ],
  armor: [
    ["slot.armor.head", "bli:fast_med"],
    ["slot.armor.chest", "bli:vest_guard_med"],
    ["slot.armor.legs", "bli:pants_guard_med"],
    ["slot.armor.feet", "bli:boots_guard"]
  ],
  inventory: HumanInventory
};
var Guard_Tech = {
  title: "\xA7sTechnicians Security Officer",
  subtitle: "\xA7b\u5B89\u5168\u5B98\u5458 - \u6280\u672F\u5DE5\u7A0B\u5E08",
  target_tip: "\xA76\u4F60\u643A\u5E26\u4E00\u6839\u4FDD\u9669\u4E1D\n\u53EF\u4EE5\u8FDB\u884C\u6709\u6548\u7684\u5373\u65F6\u7535\u529B\u7EF4\u62A4\n\u534F\u52A9\u4F60\u7684\u961F\u53CB\n\xA7f\u65E0\u6548\u5316\u4F60\u89C1\u5230\u7684\u6240\u6709SCP\u9879\u76EE\n\u6740\u6B7B\u4F60\u770B\u5230\u7684\u6240\u6709D\u7EA7\u4EBA\u5458\n\u8425\u6551\u4ECD\u56F0\u5728\u8BBE\u65BD\u5185\u7684\u5DE5\u4F5C\u4EBA\u5458\n\u6D88\u706D\u6240\u6709\u5165\u4FB5\u8005\n\u4E0D\u60DC\u4E00\u5207\u4EE3\u4EF7\u4FDD\u62A4\u8BBE\u65BD",
  tag: "guard_tech",
  group: "allguard",
  items: [
    ["bli:hkump45", 1],
    ["bli:smg_mag", 16],
    ["bli:lvfs", 1],
    ["bli:fuse_8a", 1]
  ],
  armor: [
    ["slot.armor.head", "bli:fast_glass_hd"],
    ["slot.armor.chest", "bli:vest_guard"],
    ["slot.armor.legs", "bli:pants_guard"],
    ["slot.armor.feet", "bli:boots_guard"]
  ],
  inventory: HumanInventory
};
var Rapid_Reaction_Unit = {
  title: "\xA7bMTF - Rapid Reaction Unit",
  subtitle: "\xA7bMTF-\u5FEB\u901F\u53CD\u5E94\u5355\u4F4D",
  target_tip: "\xA7f\u4F60\u62E5\u6709\u76F8\u6BD4\u5176\u4ED6\u5B89\u5168\u5B98\u5458\u66F4\u9AD8\u7684\u6743\u9650\n\u65E0\u6548\u5316\u4F60\u89C1\u5230\u7684\u6240\u6709SCP\u9879\u76EE\n\u6740\u6B7B\u4F60\u770B\u5230\u7684\u6240\u6709D\u7EA7\u4EBA\u5458\uFF0C\u8425\u6551\u4ECD\u56F0\u5728\u8BBE\u65BD\u5185\u7684\u5DE5\u4F5C\u4EBA\u5458\uFF0C\u6D88\u706D\u6240\u6709\u5165\u4FB5\u8005\uFF0C\u4E0D\u60DC\u4E00\u5207\u4EE3\u4EF7\u4FDD\u62A4\u8BBE\u65BD",
  tag: "guard_rru",
  group: "allguard",
  items: [
    ["bli:mp9", 1],
    ["bli:smg_mag", 16],
    ["bli:lv5", 1],
    ["bli:first_aid_kit", 1],
    ["bli:first_aid_kit_blue", 1],
    ["bli:yeshiyi", 1]
  ],
  armor: [
    ["slot.armor.head", "bli:gasmask"],
    ["slot.armor.chest", "bli:vest_guard_blue"],
    ["slot.armor.legs", "bli:pants_guard_h"],
    ["slot.armor.feet", "bli:boots_guard"]
  ],
  inventory: HumanInventory
};
var Guard_Chief = {
  title: "\xA7bSecurity Chief",
  subtitle: "\xA7b\u5B89\u5168\u4E3B\u7BA1",
  target_tip: "\xA7f\u6307\u6325\u4F60\u7684\u961F\u5458\n\u65E0\u6548\u5316\u4F60\u89C1\u5230\u7684\u6240\u6709SCP\u9879\u76EE\n\u6740\u6B7B\u4F60\u770B\u5230\u7684\u6240\u6709D\u7EA7\u4EBA\u5458\n\u8425\u6551\u4ECD\u56F0\u5728\u8BBE\u65BD\u5185\u7684\u5DE5\u4F5C\u4EBA\u5458\n\u6D88\u706D\u6240\u6709\u5165\u4FB5\u8005\n\u4E0D\u60DC\u4E00\u5207\u4EE3\u4EF7\u4FDD\u62A4\u8BBE\u65BD",
  tag: "guard_chief",
  group: "allguard",
  items: [
    ["bli:hkump45", 1],
    ["bli:smg_mag", 16],
    ["bli:lv5", 1],
    ["bli:lvfs", 1]
  ],
  armor: [
    ["slot.armor.head", "bli:fast_med"],
    ["slot.armor.chest", "bli:vest_guard"],
    ["slot.armor.legs", "bli:pants_guard"],
    ["slot.armor.feet", "bli:boots_guard"]
  ],
  inventory: HumanInventory
};
var Hazmat_Security = {
  title: "\xA7bHazmat Security",
  subtitle: "\xA7b\u9632\u62A4\u5B89\u5168\u5458",
  target_tip: "\xA7f\u4F60\u643A\u5E26\u53EF\u6291\u5236\u90E8\u5206SCP\u9879\u76EE\u7684\u5316\u5B66\u54C1\n\u65E0\u6548\u5316\u4F60\u89C1\u5230\u7684\u6240\u6709SCP\u9879\u76EE\n\u6740\u6B7B\u4F60\u770B\u5230\u7684\u6240\u6709D\u7EA7\u4EBA\u5458\uFF0C\u8425\u6551\u4ECD\u56F0\u5728\u8BBE\u65BD\u5185\u7684\u5DE5\u4F5C\u4EBA\u5458\uFF0C\u6D88\u706D\u6240\u6709\u5165\u4FB5\u8005\uFF0C\u4E0D\u60DC\u4E00\u5207\u4EE3\u4EF7\u4FDD\u62A4\u8BBE\u65BD",
  tag: "guard_hs",
  group: "allguard",
  items: [
    ["bli:hkmp5pdw", 1],
    ["bli:smg_mag", 16],
    ["bli:lv4", 1],
    ["ei:spray_fire_extinguisher", 1],
    ["ei:spray_lavender", 1],
    ["ei:spray_poison", 1]
  ],
  armor: [
    ["slot.armor.head", "bli:yeshiyi"],
    ["slot.armor.chest", "bli:hazmat_suit"]
    // ["slot.armor.legs", "bli:pants_ci"],
    // ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory
};
var Site_Director = {
  title: "\xA7bSite Director",
  subtitle: "\xA7b\u7AD9\u70B9\u4E3B\u7BA1",
  target_tip: "\xA7f\u7EC4\u7EC7\u7AD9\u70B9\u7684\u6240\u6709\u57FA\u91D1\u4F1A\u6210\u5458\u904F\u5236\u6536\u5BB9\u5931\u6548\n\u65E0\u6548\u5316\u4F60\u89C1\u5230\u7684\u6240\u6709SCP\u9879\u76EE\n\u6740\u6B7B\u4F60\u770B\u5230\u7684\u6240\u6709D\u7EA7\u4EBA\u5458\n\u8425\u6551\u4ECD\u56F0\u5728\u8BBE\u65BD\u5185\u7684\u5DE5\u4F5C\u4EBA\u5458\n\u6D88\u706D\u6240\u6709\u5165\u4FB5\u8005\n\u4E0D\u60DC\u4E00\u5207\u4EE3\u4EF7\u4FDD\u62A4\u8BBE\u65BD",
  tag: "guard_sd",
  group: "allguard",
  items: [
    ["bli:taser_m26", 1],
    ["bli:lvsm", 1],
    ["bli:scp500", 1]
  ],
  armor: [
    // ["slot.armor.head", "bli:fast_med"],
    // ["slot.armor.chest", "bli:vest_guard"],
    // ["slot.armor.legs", "bli:pants_guard"],
    // ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory
};
var LimitGuardDefault = 27;
var LimitGuardMedDef = 1;
var LimitGuardTechDef = 1;
var LimitGuardChiefDef = 1;
var LimitHazmatSecurityDef = 1;
var LimitSite_DirectorDef = 1;
function support_guard() {
  let LimitGuard = LimitGuardDefault;
  if (CustomSupportLimit !== void 0) {
    LimitGuard = CustomSupportLimit;
  }
  let PreSpawnPlayer = world4.getAllPlayers();
  let LimitMed = LimitGuardMedDef;
  let LimitTech = LimitGuardTechDef;
  let LimitChief = LimitGuardChiefDef;
  let LimitHazmatSecurity = LimitHazmatSecurityDef;
  let LimitSite_Director = LimitSite_DirectorDef;
  PreSpawnPlayer.forEach((player) => {
    const position = player.location;
    const PlayerTag = player.getTags();
    const PlayerID = player.name;
    if (LimitGuard !== 0) {
      if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
      } else {
        if (!player.hasTag("dev")) {
          player.removeTag("spectator");
          overworld3.runCommand(`effect "${PlayerID}" clear`);
          overworld3.runCommand(`gamemode adventure "${PlayerID}"`);
          const SpawnPointID = Math.floor(Math.random() * SpawnPointGuard.length);
          overworld3.runCommand(
            `tp "${PlayerID}" ${SpawnPointGuard[SpawnPointID].x} ${SpawnPointGuard[SpawnPointID].y} ${SpawnPointGuard[SpawnPointID].z}`
          );
          const SpawnAllType = [
            Guard,
            Guard_Med,
            Guard_Tech,
            Rapid_Reaction_Unit,
            Guard_Chief,
            Hazmat_Security,
            Site_Director
          ];
          const TypeRandom = Math.floor(Math.random() * SpawnAllType.length);
          let SpawnType = SpawnAllType[TypeRandom];
          if (SpawnType === Guard_Med && LimitMed !== 1) {
            SpawnType = Guard;
          }
          if (SpawnType === Guard_Med && LimitMed === 1) {
            LimitMed = 0;
          }
          if (SpawnType === Guard_Chief && LimitChief !== 1) {
            SpawnType = Guard;
          }
          if (SpawnType === Guard_Chief && LimitChief === 1) {
            LimitChief = 0;
          }
          if (SpawnType === Guard_Tech && LimitTech !== 1) {
            SpawnType = Guard;
          }
          if (SpawnType === Guard_Tech && LimitTech === 1) {
            LimitTech = 0;
          }
          if (SpawnType === Hazmat_Security && LimitHazmatSecurity !== 1) {
            SpawnType = Guard;
          }
          if (SpawnType === Hazmat_Security && LimitHazmatSecurity === 1) {
            LimitHazmatSecurity = 0;
          }
          if (SpawnType === Site_Director && LimitSite_Director !== 1) {
            SpawnType = Guard;
          }
          if (SpawnType === Site_Director && LimitSite_Director === 1) {
            LimitSite_Director = 0;
          }
          player.addTag(`${SpawnType.tag}`);
          player.addTag(`${SpawnType.group}`);
          overworld3.runCommand(`title "${PlayerID}" times 0 300 0`);
          overworld3.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
          overworld3.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}
${SpawnType.target_tip}`);
          overworld3.runCommand(`clear "${PlayerID}"`);
          overworld3.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
          overworld3.runCommand(`effect "${PlayerID}" resistance 20 255 true`);
          for (let slot = SpawnType.inventory[0]; slot < SpawnType.inventory[1]; slot++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" slot.inventory ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          overworld3.runCommand(
            `replaceitem entity "${PlayerID}" slot.hotbar 8 ei:id_card 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          );
          for (let i = 0; i < SpawnType.items.length; i++) {
            overworld3.runCommand(`give "${PlayerID}" ${SpawnType.items[i][0]} ${SpawnType.items[i][1]}`);
          }
          for (let i = 0; i < SpawnType.armor.length; i++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0`
            );
          }
          LimitGuard--;
        }
      }
    }
  });
}
var NTF_Rifle = {
  title: "\xA7bMTF - Nine Tailed Fox - Soldier",
  subtitle: "\xA7b\u673A\u52A8\u7279\u9063\u961F-\u4E5D\u5C3E\u72D0-\u961F\u5458\xA7f",
  target_tip: "\xA7f\u652F\u63F4\u8BBE\u65BD\u5185\u7684\u5B89\u5168\u5B98\u5458\n\u914D\u5408\u4ED6\u4EEC\u904F\u5236\u6DF7\u6C8C\u5206\u88C2\u8005\u7684\u5165\u4FB5\n\u91CD\u65B0\u6536\u5BB9\u6216\u65E0\u6548\u5316\u5DF2\u7ECF\u7A81\u7834\u6536\u5BB9\u7684\u5F02\u5E38\u9879\u76EE\n\u5C3D\u5168\u529B\u4FDD\u62A4\u8BBE\u65BD\u5B89\u5168\n\u542C\u4ECE\u6307\u6325\u5B98\u7684\u6307\u6325",
  tag: "ntf",
  group: "allntf",
  items: [
    ["bli:m4a1s", 1],
    ["bli:rifle_mag", 15],
    ["bli:lv5", 1],
    ["ei:mtf_terminal", 1]
  ],
  armor: [
    ["slot.armor.head", "bli:fast_gasmask"],
    ["slot.armor.chest", "bli:vest_ntf"],
    ["slot.armor.legs", "bli:pants_ntf"],
    ["slot.armor.feet", "bli:boots_guard"]
  ],
  inventory: HumanInventory
};
var NTF_Breaker = {
  title: "\xA7bMTF - Nine Tailed Fox - Breaker",
  subtitle: "\xA7b\u673A\u52A8\u7279\u9063\u961F-\u4E5D\u5C3E\u72D0-\u7A81\u7834\u624B",
  target_tip: "\xA7f\u652F\u63F4\u8BBE\u65BD\u5185\u7684\u5B89\u5168\u5B98\u5458\n\u914D\u5408\u4ED6\u4EEC\u904F\u5236\u6DF7\u6C8C\u5206\u88C2\u8005\u7684\u5165\u4FB5\n\u91CD\u65B0\u6536\u5BB9\u6216\u65E0\u6548\u5316\u5DF2\u7ECF\u7A81\u7834\u6536\u5BB9\u7684\u5F02\u5E38\u9879\u76EE\n\u5C3D\u5168\u529B\u4FDD\u62A4\u8BBE\u65BD\u5B89\u5168\n\u542C\u4ECE\u6307\u6325\u5B98\u7684\u6307\u6325",
  tag: "ntf_breaker",
  group: "allntf",
  items: [
    ["bli:m3super90", 1],
    ["bli:shotgun_mag", 15],
    ["bli:lv5", 1],
    ["ei:mtf_terminal", 1]
  ],
  armor: [
    ["slot.armor.head", "bli:fast_glass_hd"],
    ["slot.armor.chest", "bli:vest_ntf"],
    ["slot.armor.legs", "bli:pants_ntf"],
    ["slot.armor.feet", "bli:boots_guard"]
  ],
  inventory: HumanInventory
};
var NTF_Sniper = {
  title: "\xA7bMTF - Nine Tailed Fox - Sniper",
  subtitle: "\xA7b\u673A\u52A8\u7279\u9063\u961F-\u4E5D\u5C3E\u72D0-\u72D9\u51FB\u624B",
  target_tip: "\xA7f\u652F\u63F4\u8BBE\u65BD\u5185\u7684\u5B89\u5168\u5B98\u5458\n\u914D\u5408\u4ED6\u4EEC\u904F\u5236\u6DF7\u6C8C\u5206\u88C2\u8005\u7684\u5165\u4FB5\n\u91CD\u65B0\u6536\u5BB9\u6216\u65E0\u6548\u5316\u5DF2\u7ECF\u7A81\u7834\u6536\u5BB9\u7684\u5F02\u5E38\u9879\u76EE\n\u5C3D\u5168\u529B\u4FDD\u62A4\u8BBE\u65BD\u5B89\u5168\n\u542C\u4ECE\u6307\u6325\u5B98\u7684\u6307\u6325",
  tag: "ntf_sniper",
  group: "allntf",
  items: [
    ["bli:sr25", 1],
    ["bli:rifle_mag", 15],
    ["bli:lv5", 1],
    ["ei:mtf_terminal", 1]
  ],
  armor: [
    ["slot.armor.head", "bli:fast_med"],
    ["slot.armor.chest", "bli:vest_ntf"],
    ["slot.armor.legs", "bli:pants_ntf"],
    ["slot.armor.feet", "bli:boots_guard"]
  ],
  inventory: HumanInventory
};
var NTF_Med = {
  title: "\xA7bMTF - Nine Tailed Fox - Medic",
  subtitle: "\xA7b\u673A\u52A8\u7279\u9063\u961F-\u4E5D\u5C3E\u72D0-\u533B\u7597\u5175",
  target_tip: "\xA76\u4E3A\u4F60\u7684\u961F\u53CB\u8FDB\u884C\u6CBB\u7597\n\xA7f\u652F\u63F4\u8BBE\u65BD\u5185\u7684\u5B89\u5168\u5B98\u5458\n\u914D\u5408\u4ED6\u4EEC\u904F\u5236\u6DF7\u6C8C\u5206\u88C2\u8005\u7684\u5165\u4FB5\n\u91CD\u65B0\u6536\u5BB9\u6216\u65E0\u6548\u5316\u5DF2\u7ECF\u7A81\u7834\u6536\u5BB9\u7684\u5F02\u5E38\u9879\u76EE\n\u5C3D\u5168\u529B\u4FDD\u62A4\u8BBE\u65BD\u5B89\u5168",
  tag: "ntf_med",
  group: "allntf",
  items: [
    ["bli:mp9", 1],
    ["bli:smg_mag", 16],
    ["bli:lv5", 1],
    ["bli:first_aid_kit_medic", 1],
    ["ei:mtf_terminal", 1]
  ],
  armor: [
    ["slot.armor.head", "bli:fast_med"],
    ["slot.armor.chest", "bli:vest_guard"],
    ["slot.armor.legs", "bli:pants_guard"],
    ["slot.armor.feet", "bli:boots_guard"]
  ],
  inventory: HumanInventory
};
var NTF_Commander = {
  title: "\xA7bMTF - Nine Tailed Fox - Commander",
  subtitle: "\xA7b\u673A\u52A8\u7279\u9063\u961F-\u4E5D\u5C3E\u72D0-\u6307\u6325\u5B98",
  target_tip: "\xA7f\u6307\u6325\u4F60\u7684\u961F\u5458\n\u652F\u63F4\u8BBE\u65BD\u5185\u7684\u5B89\u5168\u5B98\u5458\n\u914D\u5408\u4ED6\u4EEC\u904F\u5236\u6DF7\u6C8C\u5206\u88C2\u8005\u7684\u5165\u4FB5\n\u91CD\u65B0\u6536\u5BB9\u6216\u65E0\u6548\u5316\u5DF2\u7ECF\u7A81\u7834\u6536\u5BB9\u7684\u5F02\u5E38\u9879\u76EE\n\u5C3D\u5168\u529B\u4FDD\u62A4\u8BBE\u65BD\u5B89\u5168",
  tag: "ntf_com",
  group: "allntf",
  items: [
    ["bli:hk416", 1],
    ["bli:rifle_mag", 15],
    ["bli:lv5", 1],
    ["bli:lvw", 1],
    ["bli:yeshiyi", 1],
    ["ei:mtf_terminal", 1]
  ],
  armor: [
    ["slot.armor.head", "bli:fast_med"],
    ["slot.armor.chest", "bli:vest_ntf"],
    ["slot.armor.legs", "bli:pants_ntf"],
    ["slot.armor.feet", "bli:boots_guard"]
  ],
  inventory: HumanInventory
};
var LimitNTFDef = 27;
var LimitNTFMedDef = 1;
var LimitNTFComDef = 1;
var LimitNTFSniperDef = 1;
function support_ntf() {
  world4.sendMessage(`\xA7e[ANNOUNCE] \xA7bMTF unit Epsilon-11, designated Nine-Tailed Fox, has entered the facility.`);
  let LimitNTF = LimitNTFDef;
  if (CustomSupportLimit !== void 0) {
    LimitNTF = CustomSupportLimit;
  }
  let PreSpawnPlayer = world4.getAllPlayers();
  let LimitMed = LimitNTFMedDef;
  let LimitCom = LimitNTFComDef;
  let LimitSniper = LimitNTFSniperDef;
  PreSpawnPlayer.forEach((player) => {
    const position = player.location;
    const PlayerTag = player.getTags();
    const PlayerID = player.name;
    overworld3.runCommand(`playsound "AN" "${PlayerID}" ${position.x} ${position.y} ${position.z} 100`);
    if (LimitNTF !== 0) {
      if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
      } else {
        if (!player.hasTag("dev")) {
          player.removeTag("spectator");
          overworld3.runCommand(`effect "${PlayerID}" clear`);
          overworld3.runCommand(`gamemode adventure "${PlayerID}"`);
          const SpawnPointID = Math.floor(Math.random() * SpawnPointNTF.length);
          overworld3.runCommand(
            `tp "${PlayerID}" ${SpawnPointNTF[SpawnPointID].x} ${SpawnPointNTF[SpawnPointID].y} ${SpawnPointNTF[SpawnPointID].z}`
          );
          const SpawnAllType = [NTF_Rifle, NTF_Rifle, NTF_Breaker, NTF_Med, NTF_Commander, NTF_Sniper];
          const TypeRandom = Math.floor(Math.random() * SpawnAllType.length);
          let SpawnType = SpawnAllType[TypeRandom];
          if (SpawnType === NTF_Med && LimitMed !== 1) {
            SpawnType = NTF_Rifle;
          }
          if (SpawnType === NTF_Med && LimitMed === 1) {
            LimitMed = 0;
          }
          if (SpawnType === NTF_Commander && LimitCom !== 1) {
            SpawnType = NTF_Rifle;
          }
          if (SpawnType === NTF_Commander && LimitCom === 1) {
            LimitCom = 0;
          }
          if (SpawnType === NTF_Sniper && LimitSniper !== 1) {
            SpawnType = NTF_Rifle;
          }
          if (SpawnType === NTF_Sniper && LimitSniper === 1) {
            LimitSniper = 0;
          }
          player.addTag(`${SpawnType.tag}`);
          player.addTag(`${SpawnType.group}`);
          overworld3.runCommand(`title "${PlayerID}" times 0 300 0`);
          overworld3.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
          overworld3.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}
${SpawnType.target_tip}`);
          overworld3.runCommand(`clear "${PlayerID}"`);
          overworld3.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
          overworld3.runCommand(`effect "${PlayerID}" resistance 20 255 true`);
          for (let slot = SpawnType.inventory[0]; slot < SpawnType.inventory[1]; slot++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" slot.inventory ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          overworld3.runCommand(
            `replaceitem entity "${PlayerID}" slot.hotbar 8 ei:id_card 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          );
          for (let i = 0; i < SpawnType.items.length; i++) {
            overworld3.runCommand(`give "${PlayerID}" ${SpawnType.items[i][0]} ${SpawnType.items[i][1]}`);
          }
          for (let i = 0; i < SpawnType.armor.length; i++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0`
            );
          }
          LimitNTF--;
        }
      }
    }
  });
}
var SNE_Commandos = {
  title: "\xA7sMTF - See No Evil - Commandos",
  subtitle: "\xA7s\u673A\u52A8\u7279\u9063\u961F-\u975E\u793C\u52FF\u89C6-\u7A81\u51FB\u961F\u5458\xA7f",
  target_tip: "\xA7f\u652F\u63F4\u8BBE\u65BD\u5185\u7684\u5B89\u5168\u5B98\u5458\n\u5E2E\u52A9\u6536\u5BB9\u89C6\u89C9\u6A21\u56E0\u5371\u5BB3\u7C7BSCP\n\u914D\u5408\u4ED6\u4EEC\u904F\u5236\u6DF7\u6C8C\u5206\u88C2\u8005\u7684\u5165\u4FB5\n\u91CD\u65B0\u6536\u5BB9\u6216\u65E0\u6548\u5316\u5DF2\u7ECF\u7A81\u7834\u6536\u5BB9\u7684\u5F02\u5E38\u9879\u76EE\n\u5C3D\u5168\u529B\u4FDD\u62A4\u8BBE\u65BD\u5B89\u5168\n\u542C\u4ECE\u6307\u6325\u5B98\u7684\u6307\u6325",
  tag: "sne",
  group: "allsne",
  items: [
    ["bli:hkmp5pdw", 1],
    ["bli:smg_mag", 15],
    ["bli:lv5", 1],
    ["ei:mtf_terminal", 1]
  ],
  armor: [
    ["slot.armor.head", "bli:yeshiyi"],
    ["slot.armor.chest", "bli:vest_sne"],
    ["slot.armor.legs", "bli:pants_sne"],
    ["slot.armor.feet", "bli:boots_guard"]
  ],
  inventory: HumanInventory
};
var SNE_Breaker = {
  title: "\xA7sMTF - See No Evil - Breaker",
  subtitle: "\xA7s\u673A\u52A8\u7279\u9063\u961F-\u975E\u793C\u52FF\u89C6-\u7A81\u7834\u624B",
  target_tip: "\xA7f\u652F\u63F4\u8BBE\u65BD\u5185\u7684\u5B89\u5168\u5B98\u5458\n\u5E2E\u52A9\u6536\u5BB9\u89C6\u89C9\u6A21\u56E0\u5371\u5BB3\u7C7BSCP\n\u914D\u5408\u4ED6\u4EEC\u904F\u5236\u6DF7\u6C8C\u5206\u88C2\u8005\u7684\u5165\u4FB5\n\u91CD\u65B0\u6536\u5BB9\u6216\u65E0\u6548\u5316\u5DF2\u7ECF\u7A81\u7834\u6536\u5BB9\u7684\u5F02\u5E38\u9879\u76EE\n\u5C3D\u5168\u529B\u4FDD\u62A4\u8BBE\u65BD\u5B89\u5168\n\u542C\u4ECE\u6307\u6325\u5B98\u7684\u6307\u6325",
  tag: "sne_breaker",
  group: "allsne",
  items: [
    ["bli:m3super90", 1],
    ["bli:shotgun_mag", 15],
    ["bli:lv5", 1],
    ["ei:mtf_terminal", 1]
  ],
  armor: [
    ["slot.armor.head", "bli:yeshiyi"],
    ["slot.armor.chest", "bli:vest_sne"],
    ["slot.armor.legs", "bli:pants_sne"],
    ["slot.armor.feet", "bli:boots_guard"]
  ],
  inventory: HumanInventory
};
var SNE_Commander = {
  title: "\xA7sMTF - See No Evil - Commander",
  subtitle: "\xA7s\u673A\u52A8\u7279\u9063\u961F-\u975E\u793C\u52FF\u89C6-\u6307\u6325\u5B98",
  target_tip: "\xA7f\u6307\u6325\u4F60\u7684\u961F\u5458\n\u652F\u63F4\u8BBE\u65BD\u5185\u7684\u5B89\u5168\u5B98\u5458\n\u5E2E\u52A9\u6536\u5BB9\u89C6\u89C9\u6A21\u56E0\u5371\u5BB3\u7C7BSCP\n\u914D\u5408\u4ED6\u4EEC\u904F\u5236\u6DF7\u6C8C\u5206\u88C2\u8005\u7684\u5165\u4FB5\n\u91CD\u65B0\u6536\u5BB9\u6216\u65E0\u6548\u5316\u5DF2\u7ECF\u7A81\u7834\u6536\u5BB9\u7684\u5F02\u5E38\u9879\u76EE\n\u5C3D\u5168\u529B\u4FDD\u62A4\u8BBE\u65BD\u5B89\u5168",
  tag: "sne_com",
  group: "allsne",
  items: [
    ["bli:m4a1", 1],
    ["bli:rifle_mag", 15],
    ["bli:lv5", 1],
    ["bli:lvw", 1],
    ["ei:mtf_terminal", 1]
  ],
  armor: [
    ["slot.armor.head", "bli:yeshiyi"],
    ["slot.armor.chest", "bli:vest_sne"],
    ["slot.armor.legs", "bli:pants_sne"],
    ["slot.armor.feet", "bli:boots_guard"]
  ],
  inventory: HumanInventory
};
var LimitSNEDef = 3;
var LimitSNEMedDef = 1;
var LimitSNEComDef = 1;
var LimitSNESniperDef = 1;
function support_sne() {
  world4.sendMessage(`\xA7e[ANNOUNCE] \xA7bMTF unit Eta-10, designated See No Evil, has entered the facility.`);
  let LimitSNE = LimitSNEDef;
  if (CustomSupportLimit !== void 0) {
    LimitSNE = CustomSupportLimit;
  }
  let PreSpawnPlayer = world4.getAllPlayers();
  let LimitMed = LimitSNEMedDef;
  let LimitCom = LimitSNEComDef;
  let LimitSniper = LimitSNESniperDef;
  PreSpawnPlayer.forEach((player) => {
    const position = player.location;
    const PlayerTag = player.getTags();
    const PlayerID = player.name;
    overworld3.runCommand(`playsound "AN2" "${PlayerID}" ${position.x} ${position.y} ${position.z} 100`);
    if (LimitSNE !== 0) {
      if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
      } else {
        if (!player.hasTag("dev")) {
          player.removeTag("spectator");
          overworld3.runCommand(`effect "${PlayerID}" clear`);
          overworld3.runCommand(`gamemode adventure "${PlayerID}"`);
          const SpawnPointID = Math.floor(Math.random() * SpawnPointSNE.length);
          overworld3.runCommand(
            `tp "${PlayerID}" ${SpawnPointSNE[SpawnPointID].x} ${SpawnPointSNE[SpawnPointID].y} ${SpawnPointSNE[SpawnPointID].z}`
          );
          const SpawnAllType = [SNE_Commandos, SNE_Commandos, SNE_Breaker, SNE_Commander];
          const TypeRandom = Math.floor(Math.random() * SpawnAllType.length);
          let SpawnType = SpawnAllType[TypeRandom];
          if (SpawnType === SNE_Commander && LimitCom !== 1) {
            SpawnType = SNE_Commandos;
          }
          if (SpawnType === SNE_Commander && LimitCom === 1) {
            LimitCom = 0;
          }
          player.addTag(`${SpawnType.tag}`);
          player.addTag(`${SpawnType.group}`);
          overworld3.runCommand(`title "${PlayerID}" times 0 300 0`);
          overworld3.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
          overworld3.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}
${SpawnType.target_tip}`);
          overworld3.runCommand(`clear "${PlayerID}"`);
          overworld3.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
          overworld3.runCommand(`effect "${PlayerID}" resistance 20 255 true`);
          for (let slot = SpawnType.inventory[0]; slot < SpawnType.inventory[1]; slot++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" slot.inventory ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          overworld3.runCommand(
            `replaceitem entity "${PlayerID}" slot.hotbar 8 ei:id_card 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          );
          for (let i = 0; i < SpawnType.items.length; i++) {
            overworld3.runCommand(`give "${PlayerID}" ${SpawnType.items[i][0]} ${SpawnType.items[i][1]}`);
          }
          for (let i = 0; i < SpawnType.armor.length; i++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0`
            );
          }
          LimitSNE--;
        }
      }
    }
  });
}
var GOC_Commandos = {
  title: "\xA7bGlobal Occult Coalition - Commandos",
  subtitle: "\xA7b\u5168\u7403\u8D85\u81EA\u7136\u8054\u76DF-\u7A81\u51FB\u961F\u5458\xA7f",
  target_tip: "\xA7fGOC\u5DF2\u83B7\u5F97\u6388\u6743\u534F\u52A9\u904F\u5236\u6536\u5BB9\u5931\u6548\n\u6740\u6B7B\u4F60\u89C1\u5230\u7684\u6240\u6709SCP\n\u5BF9\u4E8E\u5165\u4FB5\u7684\u6DF7\u6C8C\u5206\u88C2\u8005\u53EF\u968F\u610F\u4EA4\u706B\n\u4FDD\u62A4\u4F60\u89C1\u5230\u7684D\u7EA7\u4EBA\u5458\n\u542C\u4ECE\u6307\u6325\u5B98\u7684\u6307\u6325",
  tag: "goc",
  group: "allgoc",
  items: [
    ["bli:m3super90", 1],
    ["bli:shotgun_mag", 15],
    ["bli:lv5", 1]
  ],
  armor: [
    ["slot.armor.head", "bli:fast_tech"],
    ["slot.armor.chest", "bli:vest_tech"],
    ["slot.armor.legs", "bli:pants_tech"],
    ["slot.armor.feet", "bli:boots_guard"]
  ],
  inventory: HumanInventory
};
var GOC_Des = {
  title: "\xA7bGlobal Occult Coalition - Destroyer",
  subtitle: "\xA7b\u5168\u7403\u8D85\u81EA\u7136\u8054\u76DF-'\u6BC1\u706D\u8005'",
  target_tip: "\xA7fGOC\u5DF2\u83B7\u5F97\u6388\u6743\u534F\u52A9\u904F\u5236\u6536\u5BB9\u5931\u6548\n\u6740\u6B7B\u4F60\u89C1\u5230\u7684\u6240\u6709SCP\n\u5BF9\u4E8E\u5165\u4FB5\u7684\u6DF7\u6C8C\u5206\u88C2\u8005\u53EF\u968F\u610F\u4EA4\u706B\n\u4FDD\u62A4\u4F60\u89C1\u5230\u7684D\u7EA7\u4EBA\u5458\n\xA7e\u4F60\u914D\u5907\u4E86\u653F\u5E9C\u8D44\u52A9\u7684\u5927\u5A01\u529B\u6FC0\u5149\u6B66\u5668\n\u53EF\u4EE5\u5BF9SCP\u9020\u6210\u5DE8\u91CF\u4F24\u5BB3\n\xA7f\u542C\u4ECE\u6307\u6325\u5B98\u7684\u6307\u6325",
  tag: "goc_des",
  group: "allgoc",
  items: [
    ["bli:tau", 1],
    ["bli:lv5", 1]
  ],
  armor: [
    ["slot.armor.head", "bli:fast_tech"],
    ["slot.armor.chest", "bli:vest_tech"],
    ["slot.armor.legs", "bli:pants_tech"],
    ["slot.armor.feet", "bli:boots_guard"]
  ],
  inventory: HumanInventory
};
var GOC_Commander = {
  title: "\xA7bGlobal Occult Coalition - Commander",
  subtitle: "\xA7b\u5168\u7403\u8D85\u81EA\u7136\u8054\u76DF-\u6307\u6325\u5B98",
  target_tip: "\xA7fGOC\u5DF2\u83B7\u5F97\u6388\u6743\u534F\u52A9\u904F\u5236\u6536\u5BB9\u5931\u6548\n\u6307\u6325\u4F60\u7684\u961F\u5458\n\u6740\u6B7B\u4F60\u89C1\u5230\u7684\u6240\u6709SCP\n\u5BF9\u4E8E\u5165\u4FB5\u7684\u6DF7\u6C8C\u5206\u88C2\u8005\u53EF\u968F\u610F\u4EA4\u706B\n\u4FDD\u62A4\u4F60\u89C1\u5230\u7684D\u7EA7\u4EBA\u5458",
  tag: "goc_com",
  group: "allgoc",
  items: [
    ["bli:ak103", 1],
    ["bli:rifle_mag", 15],
    ["bli:lv5", 1],
    ["bli:lvw", 1]
  ],
  armor: [
    ["slot.armor.head", "bli:fast_tech"],
    ["slot.armor.chest", "bli:vest_tech"],
    ["slot.armor.legs", "bli:pants_tech"],
    ["slot.armor.feet", "bli:boots_guard"]
  ],
  inventory: HumanInventory
};
var LimitGOCDef = 3;
var LimitGOCDesDef = 1;
var LimitGOCComDef = 1;
function support_goc() {
  let LimitGOC = LimitGOCDef;
  if (CustomSupportLimit !== void 0) {
    LimitGOC = CustomSupportLimit;
  }
  let PreSpawnPlayer = world4.getAllPlayers();
  let LimitDes = LimitGOCDesDef;
  let LimitCom = LimitGOCComDef;
  PreSpawnPlayer.forEach((player) => {
    const position = player.location;
    const PlayerTag = player.getTags();
    const PlayerID = player.name;
    if (LimitGOC !== 0) {
      if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
      } else {
        if (!player.hasTag("dev")) {
          player.removeTag("spectator");
          overworld3.runCommand(`effect "${PlayerID}" clear`);
          overworld3.runCommand(`gamemode adventure "${PlayerID}"`);
          const SpawnPointID = Math.floor(Math.random() * SpawnPointGOC.length);
          overworld3.runCommand(
            `tp "${PlayerID}" ${SpawnPointGOC[SpawnPointID].x} ${SpawnPointGOC[SpawnPointID].y} ${SpawnPointGOC[SpawnPointID].z}`
          );
          let SpawnType;
          switch (LimitGOC) {
            case 3:
              SpawnType = GOC_Commandos;
              break;
            case 2:
              SpawnType = GOC_Des;
              break;
            case 1:
              SpawnType = GOC_Commander;
              break;
          }
          player.addTag(`${SpawnType.tag}`);
          player.addTag(`${SpawnType.group}`);
          overworld3.runCommand(`title "${PlayerID}" times 0 300 0`);
          overworld3.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
          overworld3.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}
${SpawnType.target_tip}`);
          overworld3.runCommand(`clear "${PlayerID}"`);
          overworld3.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
          overworld3.runCommand(`effect "${PlayerID}" resistance 20 255 true`);
          for (let slot = SpawnType.inventory[0]; slot < SpawnType.inventory[1]; slot++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" slot.inventory ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          overworld3.runCommand(
            `replaceitem entity "${PlayerID}" slot.hotbar 8 ei:id_card 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          );
          for (let i = 0; i < SpawnType.items.length; i++) {
            overworld3.runCommand(`give "${PlayerID}" ${SpawnType.items[i][0]} ${SpawnType.items[i][1]}`);
          }
          for (let i = 0; i < SpawnType.armor.length; i++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0`
            );
          }
          LimitGOC--;
        }
      }
    }
  });
}
var RRH = {
  title: "\xA7cMTF - Red Right Hand",
  subtitle: "\xA7c\u673A\u52A8\u7279\u9063\u961F-\u7EA2\u53F3\u624B",
  target_tip: "\xA7f\u4F60\u4EE3\u8868\u7740O5\u8BAE\u4F1A\n\u652F\u63F4\u8BBE\u65BD\u5185\u7684\u5B89\u5168\u5B98\u5458\n\u914D\u5408\u4ED6\u4EEC\u904F\u5236\u6DF7\u6C8C\u5206\u88C2\u8005\u7684\u5165\u4FB5\n\u91CD\u65B0\u6536\u5BB9\u6216\u65E0\u6548\u5316\u5DF2\u7ECF\u7A81\u7834\u6536\u5BB9\u7684\u5F02\u5E38\u9879\u76EE\n\u5C3D\u5168\u529B\u4FDD\u62A4\u8BBE\u65BD\u5B89\u5168\n\xA7e\u5FC5\u8981\u65F6\u53EF\u81EA\u884C\u542F\u7528Omega\u6838\u5F39\u5934",
  tag: "rrh",
  group: "allrrh",
  items: [
    ["bli:hk416", 1],
    ["bli:mp9", 1],
    ["bli:lvwan", 1],
    ["ei:mtf_terminal", 1],
    ["bli:rifle_mag", 15],
    ["bli:smg_mag", 15]
  ],
  armor: [
    ["slot.armor.head", "bli:fast_rrh"],
    ["slot.armor.chest", "bli:vest_rrh"],
    ["slot.armor.legs", "bli:pants_rrh"],
    ["slot.armor.feet", "bli:boots_guard"]
  ],
  inventory: HumanInventory
};
var LimitRRHDef = 3;
function support_rrh() {
  world4.sendMessage(`\xA7e[ANNOUNCE] \xA7eMTF unit Alpha-1, designated Red Right Hand, has entered the facility.`);
  let LimitRRH = LimitRRHDef;
  if (CustomSupportLimit !== void 0) {
    LimitRRH = CustomSupportLimit;
  }
  let PreSpawnPlayer = world4.getAllPlayers();
  PreSpawnPlayer.forEach((player) => {
    const position = player.location;
    const PlayerTag = player.getTags();
    const PlayerID = player.name;
    overworld3.runCommand(`playsound "ANA1" "${PlayerID}" ${position.x} ${position.y} ${position.z} 100`);
    if (LimitRRH !== 0) {
      if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
      } else {
        if (!player.hasTag("dev")) {
          player.removeTag("spectator");
          overworld3.runCommand(`effect "${PlayerID}" clear`);
          overworld3.runCommand(`gamemode adventure "${PlayerID}"`);
          const SpawnPointID = Math.floor(Math.random() * SpawnPointSNE.length);
          overworld3.runCommand(
            `tp "${PlayerID}" ${SpawnPointSNE[SpawnPointID].x} ${SpawnPointSNE[SpawnPointID].y} ${SpawnPointSNE[SpawnPointID].z}`
          );
          const SpawnAllType = [RRH, RRH];
          const TypeRandom = Math.floor(Math.random() * SpawnAllType.length);
          let SpawnType = SpawnAllType[TypeRandom];
          player.addTag(`${SpawnType.tag}`);
          player.addTag(`${SpawnType.group}`);
          overworld3.runCommand(`title "${PlayerID}" times 0 300 0`);
          overworld3.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
          overworld3.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}
${SpawnType.target_tip}`);
          overworld3.runCommand(`clear "${PlayerID}"`);
          overworld3.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
          overworld3.runCommand(`effect "${PlayerID}" resistance 20 255 true`);
          for (let slot = SpawnType.inventory[0]; slot < SpawnType.inventory[1]; slot++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" slot.inventory ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          overworld3.runCommand(
            `replaceitem entity "${PlayerID}" slot.hotbar 8 ei:id_card 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          );
          for (let i = 0; i < SpawnType.items.length; i++) {
            overworld3.runCommand(`give "${PlayerID}" ${SpawnType.items[i][0]} ${SpawnType.items[i][1]}`);
          }
          for (let i = 0; i < SpawnType.armor.length; i++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0`
            );
          }
          LimitRRH--;
        }
      }
    }
  });
}
var CI_Rifle = {
  title: "\xA72Chaos Insurgency - Soldier",
  subtitle: "\xA72\u6DF7\u6C8C\u5206\u88C2\u8005-\u58EB\u5175",
  target_tip: "\xA7f\u6D88\u706D\u4E00\u5207\u963B\u6B62\u4F60\u4EEC\u7684\u4EBA\n\u62A2\u593ASCP\u7269\u54C1",
  tag: "ci",
  group: "allci",
  items: [
    ["bli:ak103", 1],
    ["bli:rifle_mag", 16],
    ["bli:lvci", 1]
  ],
  armor: [
    ["slot.armor.head", "bli:fast_gasmask_ci"],
    ["slot.armor.chest", "bli:vest_ci"],
    ["slot.armor.legs", "bli:pants_ci"],
    ["slot.armor.feet", "bli:boots_guard"]
  ],
  inventory: HumanInventory
};
var CI_Breaker = {
  title: "\xA72Chaos Insurgency - Breaker",
  subtitle: "\xA72\u6DF7\u6C8C\u5206\u88C2\u8005-\u7A81\u7834\u624B",
  target_tip: "\xA7f\u534F\u52A9\u4F60\u7684\u961F\u53CB\n\u6D88\u706D\u4E00\u5207\u963B\u6B62\u4F60\u4EEC\u7684\u4EBA\n\u62A2\u593ASCP\u7269\u54C1",
  tag: "ci_breaker",
  group: "allci",
  items: [
    ["bli:m3super90", 1],
    ["bli:shotgun_mag", 15],
    ["bli:lvci", 1]
  ],
  armor: [
    ["slot.armor.head", "bli:fast_glass_hd"],
    ["slot.armor.chest", "bli:vest_ci_h"],
    ["slot.armor.legs", "bli:pants_ci"],
    ["slot.armor.feet", "bli:boots_guard"]
  ],
  inventory: HumanInventory
};
var CI_Sniper = {
  title: "\xA72Chaos Insurgency - Sniper",
  subtitle: "\xA72\u6DF7\u6C8C\u5206\u88C2\u8005-\u72D9\u51FB\u624B",
  target_tip: "\xA7f\u534F\u52A9\u4F60\u7684\u961F\u53CB\n\u6D88\u706D\u4E00\u5207\u963B\u6B62\u4F60\u4EEC\u7684\u4EBA\n\u62A2\u593ASCP\u7269\u54C1",
  tag: "ci_sniper",
  group: "allci",
  items: [
    ["bli:sr25", 1],
    ["bli:rifle_mag", 16],
    ["bli:lvci", 1]
  ],
  armor: [
    ["slot.armor.head", "bli:fast_med"],
    ["slot.armor.chest", "bli:vest_ci"],
    ["slot.armor.legs", "bli:pants_ci"],
    ["slot.armor.feet", "bli:boots_guard"]
  ],
  inventory: HumanInventory
};
var CI_Med = {
  title: "\xA72Chaos Insurgency - Medic",
  subtitle: "\xA72\u6DF7\u6C8C\u5206\u88C2\u8005-\u533B\u7597\u5175",
  target_tip: "\xA7f\u4E3A\u4F60\u7684\u961F\u53CB\u8FDB\u884C\u6CBB\u7597\n\u6D88\u706D\u4E00\u5207\u963B\u6B62\u4F60\u4EEC\u7684\u4EBA\n\u62A2\u593ASCP\u7269\u54C1",
  tag: "ci_med",
  group: "allci",
  items: [
    ["bli:hkmp7", 1],
    ["bli:smg_mag", 16],
    ["bli:lvci", 1],
    ["bli:first_aid_kit_medic", 1]
  ],
  armor: [
    ["slot.armor.head", "bli:fast_med"],
    ["slot.armor.chest", "bli:vest_ci"],
    ["slot.armor.legs", "bli:pants_ci"],
    ["slot.armor.feet", "bli:boots_guard"]
  ],
  inventory: HumanInventory
};
var CI_Commander = {
  title: "\xA72Chaos Insurgency - Commander",
  subtitle: "\xA72\u6DF7\u6C8C\u5206\u88C2\u8005-\u6307\u6325\u5B98",
  target_tip: "\xA7f\u6307\u6325\u4F60\u7684\u961F\u5458\n\u6D88\u706D\u4E00\u5207\u963B\u6B62\u4F60\u4EEC\u7684\u4EBA\n\u62A2\u593ASCP\u7269\u54C1",
  tag: "ci_com",
  group: "allci",
  items: [
    ["bli:ak103t", 1],
    ["bli:rifle_mag", 16],
    ["bli:lvci", 1],
    ["bli:lvw", 1]
  ],
  armor: [
    ["slot.armor.head", "bli:fast_med"],
    ["slot.armor.chest", "bli:vest_ci"],
    ["slot.armor.legs", "bli:pants_ci"],
    ["slot.armor.feet", "bli:boots_guard"]
  ],
  inventory: HumanInventory
};
var LimitCIDefault = 27;
var LimitCIMedDef = 1;
var LimitCIComDef = 1;
var LimitCISniperDef = 1;
function support_ci() {
  let LimitCI = LimitCIDefault;
  if (CustomSupportLimit !== void 0) {
    LimitCI = CustomSupportLimit;
  }
  let PreSpawnPlayer = world4.getAllPlayers();
  let LimitMed = LimitCIMedDef;
  let LimitCom = LimitCIComDef;
  let LimitSniper = LimitCISniperDef;
  PreSpawnPlayer.forEach((player) => {
    const position = player.location;
    const PlayerTag = player.getTags();
    const PlayerID = player.name;
    if (LimitCI !== 0) {
      if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
      } else {
        if (!player.hasTag("dev")) {
          player.removeTag("spectator");
          overworld3.runCommand(`effect "${PlayerID}" clear`);
          overworld3.runCommand(`gamemode adventure "${PlayerID}"`);
          const SpawnPointID = Math.floor(Math.random() * SpawnPointCI.length);
          overworld3.runCommand(
            `tp "${PlayerID}" ${SpawnPointCI[SpawnPointID].x} ${SpawnPointCI[SpawnPointID].y} ${SpawnPointCI[SpawnPointID].z}`
          );
          const SpawnAllType = [CI_Rifle, CI_Rifle, CI_Breaker, CI_Med, CI_Commander, CI_Sniper];
          const TypeRandom = Math.floor(Math.random() * SpawnAllType.length);
          let SpawnType = SpawnAllType[TypeRandom];
          if (SpawnType === CI_Med && LimitMed !== 1) {
            SpawnType = CI_Med;
          }
          if (SpawnType === CI_Med && LimitMed === 1) {
            LimitMed = 0;
          }
          if (SpawnType === CI_Commander && LimitCom !== 1) {
            SpawnType = CI_Rifle;
          }
          if (SpawnType === CI_Commander && LimitCom === 1) {
            LimitCom = 0;
          }
          if (SpawnType === CI_Sniper && LimitSniper !== 1) {
            SpawnType = CI_Rifle;
          }
          if (SpawnType === CI_Sniper && LimitSniper === 1) {
            LimitSniper = 0;
          }
          player.addTag(`${SpawnType.tag}`);
          player.addTag(`${SpawnType.group}`);
          overworld3.runCommand(`title "${PlayerID}" times 0 300 0`);
          overworld3.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
          overworld3.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}
${SpawnType.target_tip}`);
          overworld3.runCommand(`clear "${PlayerID}"`);
          overworld3.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
          overworld3.runCommand(`effect "${PlayerID}" resistance 20 255 true`);
          for (let slot = SpawnType.inventory[0]; slot < SpawnType.inventory[1]; slot++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" slot.inventory ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          overworld3.runCommand(
            `replaceitem entity "${PlayerID}" slot.hotbar 8 ei:id_card 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          );
          for (let i = 0; i < SpawnType.items.length; i++) {
            overworld3.runCommand(`give "${PlayerID}" ${SpawnType.items[i][0]} ${SpawnType.items[i][1]}`);
          }
          for (let i = 0; i < SpawnType.armor.length; i++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0`
            );
          }
          LimitCI--;
        }
      }
    }
  });
}
var SerpentS_Hand = {
  title: "\xA7cSerpent's Hand",
  subtitle: "\xA7c\u86C7\u4E4B\u624B",
  target_tip: "\xA7f\u914D\u5408\u5176\u4ED6\u86C7\u4E4B\u624B\u6210\u5458\n\u5E2E\u52A9\u8BBE\u65BD\u5185\u7684SCP\u9003\u79BB\u8FD9\u5EA7\u8BBE\u65BD\n\u6740\u6B7B\u4E00\u5207\u963B\u6321\u4F60\u7684\u4EBA",
  tag: "sh",
  group: "scp",
  items: [
    ["bli:m4a1", 1],
    ["bli:rifle_mag", 16],
    ["bli:lv3", 1],
    ["bli:scp500", 1]
  ],
  armor: [
    ["slot.armor.head", "air"],
    ["slot.armor.chest", "bli:sh_clothes"],
    ["slot.armor.legs", "air"],
    ["slot.armor.feet", "air"]
  ],
  inventory: [0, 27],
  hotbar: [0, 9]
};
var LimitSerpentS_HandDef = 27;
function support_sh() {
  let LimitSerpentS_Hand = LimitSerpentS_HandDef;
  let PreSpawnPlayer = world4.getAllPlayers();
  PreSpawnPlayer.forEach((player) => {
    const position = player.location;
    const PlayerTag = player.getTags();
    const PlayerID = player.name;
    if (LimitSerpentS_Hand !== 0) {
      if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
      } else {
        if (!player.hasTag("dev")) {
          player.removeTag("spectator");
          overworld3.runCommand(`effect "${PlayerID}" clear`);
          overworld3.runCommand(`gamemode adventure "${PlayerID}"`);
          const SpawnPointID = 0;
          overworld3.runCommand(
            `tp "${PlayerID}" ${SpawnPointSH[SpawnPointID].x} ${SpawnPointSH[SpawnPointID].y} ${SpawnPointSH[SpawnPointID].z}`
          );
          let SpawnType = SerpentS_Hand;
          player.addTag(`${SpawnType.tag}`);
          player.addTag(`${SpawnType.group}`);
          overworld3.runCommand(`title "${PlayerID}" times 0 300 0`);
          overworld3.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
          overworld3.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}
${SpawnType.target_tip}`);
          overworld3.runCommand(`clear "${PlayerID}"`);
          overworld3.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
          overworld3.runCommand(`effect "${PlayerID}" resistance 5 255 true`);
          for (let i = 0; i < SpawnType.armor.length; i++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          overworld3.runCommand(
            `replaceitem entity "${PlayerID}" slot.hotbar 8 ei:id_card 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          );
          for (let i = 0; i < SpawnType.items.length; i++) {
            overworld3.runCommand(`give "${PlayerID}" ${SpawnType.items[i][0]} ${SpawnType.items[i][1]}`);
          }
          LimitSerpentS_Hand--;
        }
      }
    }
  });
}
var SCP_173 = {
  title: "\xA7cSCP-173",
  subtitle: "\xA7cSCP-173 - \u6700\u521D\u4E4B\u4F5C'\u96D5\u50CF'",
  target_tip: "\xA7f\u4F60\u662F\u4E00\u4E2A\u575A\u56FA\u7684\u96D5\u50CF\n\u4F60\u53EF\u4EE5\u8F7B\u677E\u7684\u626D\u65AD\u4EBA\u7C7B\u7684\u9888\u90E8\n\u4F46\u6709\u4EBA\u770B\u7740\u4F60\u7684\u65F6\u5019\u4F60\u65E0\u6CD5\u79FB\u52A8\n\u501F\u52A9\u7728\u773C\u95F4\u9699\u8FDB\u884C\u653B\u51FB\n\u6740\u5149\u4F60\u770B\u5230\u7684\u6240\u6709\u4EBA\u5E76\u9003\u79BB\u8BBE\u65BD",
  tag: "scp173",
  group: "scp",
  items: [
    // ["l4gg:shotgun", 1],
    // ["l4gg:shotgun_bullet_item", 72],
    // ["bli:lv5", 1],
    // ["bli:scp500", 5],
  ],
  armor: [
    ["slot.armor.head", "air"],
    ["slot.armor.chest", "air"],
    ["slot.armor.legs", "air"],
    ["slot.armor.feet", "bli:scp173"]
  ],
  inventory: [0, 27],
  hotbar: [0, 9]
};
var Limit173Def = 1;
function spawn173() {
  let Limit173 = Limit173Def;
  let PreSpawnPlayer = world4.getAllPlayers();
  PreSpawnPlayer.forEach((player) => {
    const position = player.location;
    const PlayerTag = player.getTags();
    const PlayerID = player.name;
    if (Limit173 !== 0) {
      if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
      } else {
        if (!player.hasTag("dev")) {
          player.removeTag("spectator");
          overworld3.runCommand(`effect "${PlayerID}" clear`);
          overworld3.runCommand(`gamemode adventure "${PlayerID}"`);
          const SpawnPointID = 0;
          overworld3.runCommand(
            `tp "${PlayerID}" ${SpawnPointSCP173[SpawnPointID].x} ${SpawnPointSCP173[SpawnPointID].y} ${SpawnPointSCP173[SpawnPointID].z}`
          );
          let SpawnType = SCP_173;
          player.addTag(`${SpawnType.tag}`);
          player.addTag(`${SpawnType.group}`);
          overworld3.runCommand(`title "${PlayerID}" times 0 300 0`);
          overworld3.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
          overworld3.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}
${SpawnType.target_tip}`);
          overworld3.runCommand(`clear "${PlayerID}"`);
          overworld3.runCommand(`effect "${PlayerID}" health_boost 100000 94 true`);
          overworld3.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
          overworld3.runCommand(`effect "${PlayerID}" resistance 5 255 true`);
          for (let slot = SpawnType.inventory[0]; slot < SpawnType.inventory[1]; slot++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" slot.inventory ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let slot = SpawnType.hotbar[0]; slot < SpawnType.hotbar[1]; slot++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let i = 0; i < SpawnType.items.length; i++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${i} ${SpawnType.items[i][0]} ${SpawnType.items[i][1]} 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let j = SpawnType.items.length; j < 9 - SpawnType.items.length; j++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${j} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let i = 0; i < SpawnType.armor.length; i++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          Limit173--;
        }
      }
    }
  });
}
var SCP_457 = {
  title: "\xA7cSCP-457",
  subtitle: "\xA7cSCP-457 - '\u706B\u7537'",
  target_tip: "\xA7f\u4F60\u5168\u8EAB\u6301\u7EED\u71C3\u70E7\u7740\u706B\u7130\n\u9760\u8FD1\u4EBA\u7C7B\u4F7F\u7528\u9AD8\u6E29\u70E7\u6B7B\u4ED6\u4EEC\n\u6740\u5149\u4F60\u770B\u5230\u7684\u6240\u6709\u4EBA\u5E76\u9003\u79BB\u8BBE\u65BD",
  tag: "scp457",
  group: "scp",
  items: [
    // ["l4gg:shotgun", 1],
    // ["l4gg:shotgun_bullet_item", 72],
    // ["bli:lv5", 1],
    // ["bli:scp500", 5],
  ],
  armor: [
    ["slot.armor.head", "icon:scp_457"],
    ["slot.armor.chest", "air"],
    ["slot.armor.legs", "air"],
    ["slot.armor.feet", "air"]
  ],
  inventory: [0, 27],
  hotbar: [0, 9]
};
var Limit457Def = 1;
function spawn457() {
  let Limit457 = Limit457Def;
  let PreSpawnPlayer = world4.getAllPlayers();
  PreSpawnPlayer.forEach((player) => {
    const position = player.location;
    const PlayerTag = player.getTags();
    const PlayerID = player.name;
    if (Limit457 !== 0) {
      if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
      } else {
        if (!player.hasTag("dev")) {
          player.removeTag("spectator");
          overworld3.runCommand(`effect "${PlayerID}" clear`);
          overworld3.runCommand(`gamemode adventure "${PlayerID}"`);
          const SpawnPointID = 0;
          overworld3.runCommand(
            `tp "${PlayerID}" ${SpawnPointSCP457[SpawnPointID].x} ${SpawnPointSCP457[SpawnPointID].y} ${SpawnPointSCP457[SpawnPointID].z}`
          );
          let SpawnType = SCP_457;
          player.addTag(`${SpawnType.tag}`);
          player.addTag(`${SpawnType.group}`);
          overworld3.runCommand(`title "${PlayerID}" times 0 300 0`);
          overworld3.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
          overworld3.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}
${SpawnType.target_tip}`);
          overworld3.runCommand(`clear "${PlayerID}"`);
          overworld3.runCommand(`effect "${PlayerID}" health_boost 100000 44 true`);
          overworld3.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
          overworld3.runCommand(`effect "${PlayerID}" resistance 5 255 true`);
          for (let slot = SpawnType.inventory[0]; slot < SpawnType.inventory[1]; slot++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" slot.inventory ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let slot = SpawnType.hotbar[0]; slot < SpawnType.hotbar[1]; slot++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let i = 0; i < SpawnType.items.length; i++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${i} ${SpawnType.items[i][0]} ${SpawnType.items[i][1]} 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let j = SpawnType.items.length; j < 9 - SpawnType.items.length; j++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${j} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let i = 0; i < SpawnType.armor.length; i++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          Limit457--;
        }
      }
    }
  });
}
var SCP_066 = {
  title: "\xA7cSCP-066",
  subtitle: "\xA7cSCP-066 - 'Eric\u7684\u73A9\u5177'",
  target_tip: "\xA7f\u4F60\u53EF\u4EE5\u653E\u51FA\u58F0\u97F3\u5DE8\u5927\u7684\u97F3\u4E50\n\u534A\u5F8410\u683C\u5185\u7684\u6240\u6709\u4EBA\u7C7B\u90FD\u5C06\u53D7\u5230\u4F24\u5BB3\n\u6740\u5149\u4F60\u770B\u5230\u7684\u6240\u6709\u4EBA\u5E76\u9003\u79BB\u8BBE\u65BD",
  tag: "scp066",
  group: "scp",
  items: [
    ["ei:music_attack", 1],
    ["ei:rush_stick", 1],
    ["ei:music_attack_eric", 1],
    ["ei:music_attack_note", 1],
    ["ei:change_models", 1]
  ],
  armor: [
    ["slot.armor.head", "icon:scp_066"],
    ["slot.armor.chest", "air"],
    ["slot.armor.legs", "air"],
    ["slot.armor.feet", "air"]
  ],
  inventory: [0, 27],
  hotbar: [0, 9]
};
var Limit066Def = 1;
function spawn066() {
  let Limit066 = Limit066Def;
  let PreSpawnPlayer = world4.getAllPlayers();
  PreSpawnPlayer.forEach((player) => {
    const position = player.location;
    const PlayerTag = player.getTags();
    const PlayerID = player.name;
    if (Limit066 !== 0) {
      if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
      } else {
        if (!player.hasTag("dev")) {
          player.removeTag("spectator");
          overworld3.runCommand(`effect "${PlayerID}" clear`);
          overworld3.runCommand(`gamemode adventure "${PlayerID}"`);
          const SpawnPointID = 0;
          overworld3.runCommand(
            `tp "${PlayerID}" ${SpawnPointSCP066[SpawnPointID].x} ${SpawnPointSCP066[SpawnPointID].y} ${SpawnPointSCP066[SpawnPointID].z}`
          );
          let SpawnType = SCP_066;
          player.addTag(`${SpawnType.tag}`);
          player.addTag(`${SpawnType.group}`);
          overworld3.runCommand(`title "${PlayerID}" times 0 300 0`);
          overworld3.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
          overworld3.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}
${SpawnType.target_tip}`);
          overworld3.runCommand(`clear "${PlayerID}"`);
          overworld3.runCommand(`effect "${PlayerID}" health_boost 100000 44 true`);
          overworld3.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
          overworld3.runCommand(`effect "${PlayerID}" resistance 5 255 true`);
          for (let slot = SpawnType.inventory[0]; slot < SpawnType.inventory[1]; slot++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" slot.inventory ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let slot = SpawnType.hotbar[0]; slot < SpawnType.hotbar[1]; slot++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let i = 0; i < SpawnType.items.length; i++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${i} ${SpawnType.items[i][0]} ${SpawnType.items[i][1]} 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let j = SpawnType.items.length; j < 9 - SpawnType.items.length; j++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${j} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let i = 0; i < SpawnType.armor.length; i++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          Limit066--;
        }
      }
    }
  });
}
var SCP_049 = {
  title: "\xA7cSCP-049",
  subtitle: "\xA7cSCP-049 - '\u75AB\u533B'",
  target_tip: "\xA7f\u5728\u4F60\u770B\u6765\u8FD9\u91CC\u7684\u5F88\u591A\u4EBA\u7C7B\u90FD\u611F\u67D3\u4E86\u602A\u75C5\n\u4F60\u9700\u8981\u6CBB\u6108\u4ED6\u4EEC\n\u4F60\u7684\u89E6\u6478\u5BF9\u4EBA\u7C7B\u6765\u8BF4\u662F\u81F4\u547D\u7684\n\u6740\u5149\u4F60\u770B\u5230\u7684\u6240\u6709\u4EBA\u5E76\u9003\u79BB\u8BBE\u65BD",
  tag: "scp049",
  group: "scp",
  items: [
    // ["ei:music_attack", 1],
    // ["ei:rush_stick", 1],
    // ["ei:music_attack_eric", 1],
    // ["ei:music_attack_note", 1],
    // ["ei:change_models", 1],
  ],
  armor: [
    ["slot.armor.head", "icon:scp_049"],
    ["slot.armor.chest", "air"],
    ["slot.armor.legs", "air"],
    ["slot.armor.feet", "air"]
  ],
  inventory: [0, 27],
  hotbar: [0, 9]
};
var Limit049Def = 1;
function spawn049() {
  let Limit049 = Limit049Def;
  let PreSpawnPlayer = world4.getAllPlayers();
  PreSpawnPlayer.forEach((player) => {
    const position = player.location;
    const PlayerTag = player.getTags();
    const PlayerID = player.name;
    if (Limit049 !== 0) {
      if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
      } else {
        if (!player.hasTag("dev")) {
          player.removeTag("spectator");
          overworld3.runCommand(`effect "${PlayerID}" clear`);
          overworld3.runCommand(`gamemode adventure "${PlayerID}"`);
          const SpawnPointID = 0;
          overworld3.runCommand(
            `tp "${PlayerID}" ${SpawnPointSCP049[SpawnPointID].x} ${SpawnPointSCP049[SpawnPointID].y} ${SpawnPointSCP049[SpawnPointID].z}`
          );
          let SpawnType = SCP_049;
          player.addTag(`${SpawnType.tag}`);
          player.addTag(`${SpawnType.group}`);
          overworld3.runCommand(`title "${PlayerID}" times 0 300 0`);
          overworld3.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
          overworld3.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}
${SpawnType.target_tip}`);
          overworld3.runCommand(`clear "${PlayerID}"`);
          overworld3.runCommand(`effect "${PlayerID}" health_boost 100000 44 true`);
          overworld3.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
          overworld3.runCommand(`effect "${PlayerID}" resistance 5 255 true`);
          for (let slot = SpawnType.inventory[0]; slot < SpawnType.inventory[1]; slot++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" slot.inventory ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let slot = SpawnType.hotbar[0]; slot < SpawnType.hotbar[1]; slot++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let i = 0; i < SpawnType.items.length; i++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${i} ${SpawnType.items[i][0]} ${SpawnType.items[i][1]} 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let j = SpawnType.items.length; j < 9 - SpawnType.items.length; j++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${j} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let i = 0; i < SpawnType.armor.length; i++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          Limit049--;
        }
      }
    }
  });
}
var SCP_049_2 = {
  title: "\xA7cSCP-049-2 - Normal",
  subtitle: "\xA7cSCP-049-2(\u6807\u51C6\u578B)",
  target_tip: "\xA7f\u4F60\u88AB049\u201C\u6CBB\u6108\u201D\u4E86\n\u4F60\u611F\u5230\u81EA\u5DF1\u53D8\u5F97\u5F3A\u58EE\u975E\u5E38\u6E34\u671B\u6D3B\u7269\n\u542C\u4ECE\u201C\u4E3B\u6CBB\u533B\u751F\u201D\u7684\u5F15\u5BFC\n\u6740\u5149\u4F60\u770B\u5230\u7684\u6240\u6709\u4EBA\u5E76\u9003\u79BB\u8BBE\u65BD",
  tag: "scp049_2",
  group: "scp",
  items: [
    // ["ei:music_attack", 1],
    // ["ei:rush_stick", 1],
    // ["ei:music_attack_eric", 1],
    // ["ei:music_attack_note", 1],
    // ["ei:change_models", 1],
  ],
  armor: [
    ["slot.armor.head", "icon:scp_049_2"],
    ["slot.armor.chest", "air"],
    ["slot.armor.legs", "air"],
    ["slot.armor.feet", "air"]
  ],
  inventory: [0, 27],
  hotbar: [0, 9],
  health: 24
};
var SCP_049_2_Fast = {
  title: "\xA7cSCP-049-2 - Fast",
  subtitle: "\xA7cSCP-049-2(\u5FEB\u901F\u578B)",
  target_tip: "\xA7f\u4F60\u88AB049\u201C\u6CBB\u6108\u201D\u4E86\n\u4F60\u611F\u5230\u81EA\u5DF1\u53D8\u5F97\u5F3A\u58EE\u975E\u5E38\u6E34\u671B\u6D3B\u7269\n\u542C\u4ECE\u201C\u4E3B\u6CBB\u533B\u751F\u201D\u7684\u5F15\u5BFC\n\u6740\u5149\u4F60\u770B\u5230\u7684\u6240\u6709\u4EBA\u5E76\u9003\u79BB\u8BBE\u65BD",
  tag: "scp049_2_f",
  group: "scp",
  items: [
    // ["ei:music_attack", 1],
    // ["ei:rush_stick", 1],
    // ["ei:music_attack_eric", 1],
    // ["ei:music_attack_note", 1],
    // ["ei:change_models", 1],
  ],
  armor: [
    ["slot.armor.head", "icon:scp_049_2"],
    ["slot.armor.chest", "air"],
    ["slot.armor.legs", "air"],
    ["slot.armor.feet", "air"]
  ],
  inventory: [0, 27],
  hotbar: [0, 9],
  health: 4
};
var SCP_049_2_Slow = {
  title: "\xA7cSCP-049-2 - Slow",
  subtitle: "\xA7cSCP-049-2(\u7F13\u6162\u578B)",
  target_tip: "\xA7f\u4F60\u88AB049\u201C\u6CBB\u6108\u201D\u4E86\n\u4F60\u611F\u5230\u81EA\u5DF1\u53D8\u5F97\u5F3A\u58EE\u975E\u5E38\u6E34\u671B\u6D3B\u7269\n\u542C\u4ECE\u201C\u4E3B\u6CBB\u533B\u751F\u201D\u7684\u5F15\u5BFC\n\u6740\u5149\u4F60\u770B\u5230\u7684\u6240\u6709\u4EBA\u5E76\u9003\u79BB\u8BBE\u65BD",
  tag: "scp049_2_s",
  group: "scp",
  items: [
    // ["ei:music_attack", 1],
    // ["ei:rush_stick", 1],
    // ["ei:music_attack_eric", 1],
    // ["ei:music_attack_note", 1],
    // ["ei:change_models", 1],
  ],
  armor: [
    ["slot.armor.head", "icon:scp_049_2"],
    ["slot.armor.chest", "air"],
    ["slot.armor.legs", "air"],
    ["slot.armor.feet", "air"]
  ],
  inventory: [0, 27],
  hotbar: [0, 9],
  health: 44
};
var Limit049_2Def = 1;
function spawn049_2(player) {
  try {
    let Limit049_2 = Limit049_2Def;
    const PlayerTag = player.getTags();
    const PlayerID = player.name;
    if (Limit049_2 !== 0) {
      if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
      } else {
        player.removeTag("spectator");
        overworld3.runCommand(`effect "${PlayerID}" clear`);
        overworld3.runCommand(`gamemode adventure "${PlayerID}"`);
        const SpawnPointID = 0;
        overworld3.runCommand(
          `tp "${PlayerID}" ${SpawnPointSCP049_2[SpawnPointID].x} ${SpawnPointSCP049_2[SpawnPointID].y} ${SpawnPointSCP049_2[SpawnPointID].z}`
        );
        let SpawnType = SCP049ChooseType;
        player.addTag(`${SpawnType.tag}`);
        player.addTag(`${SpawnType.group}`);
        overworld3.runCommand(`title "${PlayerID}" times 0 300 0`);
        overworld3.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
        overworld3.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}
${SpawnType.target_tip}`);
        overworld3.runCommand(`clear "${PlayerID}"`);
        overworld3.runCommand(`effect "${PlayerID}" health_boost 100000 ${SpawnType.health} true`);
        overworld3.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
        overworld3.runCommand(`effect "${PlayerID}" resistance 5 255 true`);
        for (let slot = SpawnType.inventory[0]; slot < SpawnType.inventory[1]; slot++) {
          overworld3.runCommand(
            `replaceitem entity "${PlayerID}" slot.inventory ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          );
        }
        for (let slot = SpawnType.hotbar[0]; slot < SpawnType.hotbar[1]; slot++) {
          overworld3.runCommand(
            `replaceitem entity "${PlayerID}" slot.hotbar ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          );
        }
        for (let i = 0; i < SpawnType.items.length; i++) {
          overworld3.runCommand(
            `replaceitem entity "${PlayerID}" slot.hotbar ${i} ${SpawnType.items[i][0]} ${SpawnType.items[i][1]} 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          );
        }
        for (let j = SpawnType.items.length; j < 9 - SpawnType.items.length; j++) {
          overworld3.runCommand(
            `replaceitem entity "${PlayerID}" slot.hotbar ${j} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          );
        }
        for (let i = 0; i < SpawnType.armor.length; i++) {
          overworld3.runCommand(
            `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          );
        }
        Limit049_2--;
      }
    }
  } catch {
  }
}
var SCP_966 = {
  title: "\xA7cSCP-966",
  subtitle: "\xA7cSCP-966 - '\u7761\u68A6\u6740\u624B'",
  target_tip: "\xA7f\u4F60\u6CE8\u89C6\u7684\u4EBA\u7C7B\u4F1A\u53D8\u7684\u865A\u5F31\n\u7528\u950B\u5229\u7684\u722A\u5B50\u6740\u6B7B\u4ED6\u4EEC\n\u4EBA\u7C7B\u5728\u6B63\u5E38\u60C5\u51B5\u4E0B\u770B\u4E0D\u5230\u4F60\n\u5C0F\u5FC3\u90A3\u4E9B\u643A\u5E26\u591C\u89C6\u4EEA\u7684\u4EBA\u7C7B\n\u6740\u5149\u4F60\u770B\u5230\u7684\u6240\u6709\u4EBA\u5E76\u9003\u79BB\u8BBE\u65BD",
  tag: "scp966",
  group: "scp",
  items: [
    // ["l4gg:shotgun", 1],
    // ["l4gg:shotgun_bullet_item", 72],
    // ["bli:lv5", 1],
    // ["bli:scp500", 5],
  ],
  armor: [
    ["slot.armor.head", "air"],
    ["slot.armor.chest", "air"],
    ["slot.armor.legs", "air"],
    ["slot.armor.feet", "air"]
  ],
  inventory: [0, 27],
  hotbar: [0, 9]
};
var Limit966Def = 1;
function spawn966() {
  let Limit966 = Limit966Def;
  let PreSpawnPlayer = world4.getAllPlayers();
  PreSpawnPlayer.forEach((player) => {
    const position = player.location;
    const PlayerTag = player.getTags();
    const PlayerID = player.name;
    if (Limit966 !== 0) {
      if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
      } else {
        if (!player.hasTag("dev")) {
          player.removeTag("spectator");
          overworld3.runCommand(`effect "${PlayerID}" clear`);
          overworld3.runCommand(`gamemode adventure "${PlayerID}"`);
          const SpawnPointID = 0;
          overworld3.runCommand(
            `tp "${PlayerID}" ${SpawnPointSCP966[SpawnPointID].x} ${SpawnPointSCP966[SpawnPointID].y} ${SpawnPointSCP966[SpawnPointID].z}`
          );
          let SpawnType = SCP_966;
          player.addTag(`${SpawnType.tag}`);
          player.addTag(`${SpawnType.group}`);
          overworld3.runCommand(`title "${PlayerID}" times 0 300 0`);
          overworld3.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
          overworld3.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}
${SpawnType.target_tip}`);
          overworld3.runCommand(`clear "${PlayerID}"`);
          overworld3.runCommand(`effect "${PlayerID}" health_boost 100000 44 true`);
          overworld3.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
          overworld3.runCommand(`effect "${PlayerID}" resistance 5 255 true`);
          for (let slot = SpawnType.inventory[0]; slot < SpawnType.inventory[1]; slot++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" slot.inventory ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let slot = SpawnType.hotbar[0]; slot < SpawnType.hotbar[1]; slot++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let i = 0; i < SpawnType.items.length; i++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${i} ${SpawnType.items[i][0]} ${SpawnType.items[i][1]} 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let j = SpawnType.items.length; j < 9 - SpawnType.items.length; j++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${j} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let i = 0; i < SpawnType.armor.length; i++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          Limit966--;
        }
      }
    }
  });
}
var SCP_106 = {
  title: "\xA7cSCP-106",
  subtitle: "\xA7cSCP-106 - '\u6050\u6016\u8001\u4EBA'",
  target_tip: "\xA7f\u4F60\u53EF\u4EE5\u5C06\u4EBA\u7C7B\u6293\u5165\u4F60\u7684\u53E3\u888B\u7A7A\u95F4\u5E76\u6740\u6B7B\u4ED6\u4EEC\n\u4F60\u53EF\u4EE5\u7A7F\u8FC7\u5927\u591A\u6570\u7684\u95E8\n\u6740\u5149\u4F60\u770B\u5230\u7684\u6240\u6709\u4EBA\u5E76\u9003\u79BB\u8BBE\u65BD",
  tag: "scp106",
  group: "scp",
  items: [
    ["ei:setpoint", 1],
    ["ei:gotopoint", 1]
    // ["bli:lv5", 1],
    // ["bli:scp500", 5],
  ],
  armor: [
    ["slot.armor.head", "icon:scp_106"],
    ["slot.armor.chest", "air"],
    ["slot.armor.legs", "air"],
    ["slot.armor.feet", "air"]
  ],
  inventory: [0, 27],
  hotbar: [0, 9]
};
var Limit106Def = 1;
function spawn106() {
  let Limit106 = Limit106Def;
  let PreSpawnPlayer = world4.getAllPlayers();
  PreSpawnPlayer.forEach((player) => {
    const position = player.location;
    const PlayerTag = player.getTags();
    const PlayerID = player.name;
    if (Limit106 !== 0) {
      if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
      } else {
        if (!player.hasTag("dev")) {
          player.removeTag("spectator");
          overworld3.runCommand(`effect "${PlayerID}" clear`);
          overworld3.runCommand(`gamemode adventure "${PlayerID}"`);
          const SpawnPointID = 0;
          overworld3.runCommand(
            `tp "${PlayerID}" ${SpawnPointSCP106[SpawnPointID].x} ${SpawnPointSCP106[SpawnPointID].y} ${SpawnPointSCP106[SpawnPointID].z}`
          );
          let SpawnType = SCP_106;
          player.addTag(`${SpawnType.tag}`);
          player.addTag(`${SpawnType.group}`);
          overworld3.runCommand(`title "${PlayerID}" times 0 300 0`);
          overworld3.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
          overworld3.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}
${SpawnType.target_tip}`);
          overworld3.runCommand(`clear "${PlayerID}"`);
          overworld3.runCommand(`effect "${PlayerID}" health_boost 100000 44 true`);
          overworld3.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
          overworld3.runCommand(`effect "${PlayerID}" resistance 5 255 true`);
          for (let slot = SpawnType.inventory[0]; slot < SpawnType.inventory[1]; slot++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" slot.inventory ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let slot = SpawnType.hotbar[0]; slot < SpawnType.hotbar[1]; slot++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let i = 0; i < SpawnType.items.length; i++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${i} ${SpawnType.items[i][0]} ${SpawnType.items[i][1]} 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let j = SpawnType.items.length; j < 9 - SpawnType.items.length; j++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${j} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let i = 0; i < SpawnType.armor.length; i++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          Limit106--;
        }
      }
    }
  });
}
var SCP_096 = {
  title: "\xA7cSCP-096",
  subtitle: "\xA7cSCP-096 - '\u5BB3\u7F9E\u7684\u4EBA'",
  target_tip: "\xA7f\u5927\u591A\u6570\u60C5\u51B5\u4E0B\u4F60\u662F\u6E29\u987A\u7684\n\u5F53\u4EBA\u7C7B\u770B\u5230\u4F60\u7684\u8138\u65F6\u5C06\u6FC0\u6012\u4F60\n\u72C2\u6012\u65F6\u4F60\u53EF\u4EE5\u5F92\u624B\u63B0\u5F00\u5927\u90E8\u5206\u95E8\n\u5E76\u4E14\u53EF\u4EE5\u5BF9\u9760\u8FD1\u4F60\u7684\u4EBA\u9020\u6210\u81F4\u547D\u653B\u51FB\n\u6740\u5149\u4F60\u770B\u5230\u7684\u6240\u6709\u4EBA\u5E76\u9003\u79BB\u8BBE\u65BD",
  tag: "scp096",
  group: "scp",
  items: [
    // ["ei:setpoint", 1],
    // ["ei:gotopoint", 1],
    // ["bli:lv5", 1],
    // ["bli:scp500", 5],
  ],
  armor: [
    ["slot.armor.head", "icon:scp_096_normal"],
    ["slot.armor.chest", "air"],
    ["slot.armor.legs", "air"],
    ["slot.armor.feet", "air"]
  ],
  inventory: [0, 27],
  hotbar: [0, 9]
};
var Limit096Def = 1;
function spawn096() {
  let Limit096 = Limit096Def;
  let PreSpawnPlayer = world4.getAllPlayers();
  PreSpawnPlayer.forEach((player) => {
    const position = player.location;
    const PlayerTag = player.getTags();
    const PlayerID = player.name;
    if (Limit096 !== 0) {
      if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
      } else {
        if (!player.hasTag("dev")) {
          player.removeTag("spectator");
          overworld3.runCommand(`effect "${PlayerID}" clear`);
          overworld3.runCommand(`gamemode adventure "${PlayerID}"`);
          const SpawnPointID = 0;
          overworld3.runCommand(
            `tp "${PlayerID}" ${SpawnPointSCP096[SpawnPointID].x} ${SpawnPointSCP096[SpawnPointID].y} ${SpawnPointSCP096[SpawnPointID].z}`
          );
          let SpawnType = SCP_096;
          player.addTag(`${SpawnType.tag}`);
          player.addTag(`${SpawnType.group}`);
          overworld3.runCommand(`title "${PlayerID}" times 0 300 0`);
          overworld3.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
          overworld3.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}
${SpawnType.target_tip}`);
          overworld3.runCommand(`clear "${PlayerID}"`);
          overworld3.runCommand(`effect "${PlayerID}" health_boost 100000 44 true`);
          overworld3.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
          overworld3.runCommand(`effect "${PlayerID}" resistance 5 255 true`);
          for (let slot = SpawnType.inventory[0]; slot < SpawnType.inventory[1]; slot++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" slot.inventory ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let slot = SpawnType.hotbar[0]; slot < SpawnType.hotbar[1]; slot++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let i = 0; i < SpawnType.items.length; i++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${i} ${SpawnType.items[i][0]} ${SpawnType.items[i][1]} 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let j = SpawnType.items.length; j < 9 - SpawnType.items.length; j++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${j} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let i = 0; i < SpawnType.armor.length; i++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          Limit096--;
        }
      }
    }
  });
}
var SCP_035 = {
  title: "\xA7cSCP-035",
  subtitle: "\xA7c\u5360\u636E\u9762\u5177",
  target_tip: "\xA7f\u4F60\u52FE\u5F15\u4E86\u4E00\u4F4D\u4E09\u7EA7\u7814\u7A76\u5458\u6234\u4E0A\u4E86\u4F60\n\u73B0\u5728\u4F60\u53EF\u4EE5\u81EA\u7531\u7684\u63A7\u5236\u4ED6\u7684\u8EAB\u4F53\n\u4F60\u5F3A\u5316\u4E86\u8FD9\u5177\u8EAB\u4F53\u4F7F\u5176\u66F4\u575A\u97E7\n\u4F46\u4EE3\u4EF7\u662F\u8FD9\u5177\u8EAB\u4F53\u4F1A\u9010\u6E10\u906D\u53D7\u8150\u8680\n\u5229\u7528\u597D\u8FD9\u526F\u8EAB\u8EAF\n\u6740\u5149\u4ED6\u4EEC\u6240\u6709\u4EBA",
  tag: "scp035",
  group: "scp",
  items: [
    ["minecraft:netherite_axe", 1],
    ["bli:glock19", 1],
    ["bli:pistol_mag", 3]
  ],
  armor: [
    // ["slot.armor.head", "turtle_helmet"],
    // ["slot.armor.chest", "air"],
    // ["slot.armor.legs", "air"],
    // ["slot.armor.feet", "air"],
  ],
  inventory: [0, 27],
  hotbar: [6, 9]
};
var Limit035Def = 1;
function spawn035() {
  let Limit035 = Limit035Def;
  let PreSpawnPlayer = world4.getAllPlayers();
  PreSpawnPlayer.forEach((player) => {
    const position = player.location;
    const PlayerTag = player.getTags();
    const PlayerID = player.name;
    if (Limit035 !== 0) {
      if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
      } else {
        if (!player.hasTag("dev")) {
          player.removeTag("spectator");
          overworld3.runCommand(`effect "${PlayerID}" clear`);
          overworld3.runCommand(`gamemode adventure "${PlayerID}"`);
          const SpawnPointID = Math.floor(Math.random() * SpawnPointSCP035.length);
          overworld3.runCommand(
            `tp "${PlayerID}" ${SpawnPointSCP035[SpawnPointID].x} ${SpawnPointSCP035[SpawnPointID].y} ${SpawnPointSCP035[SpawnPointID].z}`
          );
          let SpawnType = SCP_035;
          player.addTag(`${SpawnType.tag}`);
          player.addTag(`${SpawnType.group}`);
          overworld3.runCommand(`title "${PlayerID}" times 0 300 0`);
          overworld3.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
          overworld3.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}
${SpawnType.target_tip}`);
          overworld3.runCommand(`clear "${PlayerID}"`);
          overworld3.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
          overworld3.runCommand(`effect "${PlayerID}" resistance 5 255 true`);
          for (let i = 0; i < SpawnType.items.length; i++) {
            overworld3.runCommand(`give "${PlayerID}" ${SpawnType.items[i][0]} ${SpawnType.items[i][1]}`);
          }
          for (let i = 0; i < SpawnType.armor.length; i++) {
            overworld3.runCommand(
              `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          Limit035--;
        }
      }
    }
  });
}
var SCP_008_1 = {
  title: "\xA7cSCP-008-1",
  subtitle: "\xA7cSCP-008\u4E27\u5C38\u75C5\u6BD2\u53D7\u611F\u67D3\u4E2A\u4F53",
  target_tip: "\xA7f\u4F60\u662FSCP-008\u611F\u67D3\u8005\n\u808C\u8089\u8010\u529B\u548C\u529B\u91CF\u589E\u5F3A, \u65B0\u9648\u4EE3\u8C22\u901F\u5EA6\u6781\u4F4E\n\u4F60\u53EA\u80FD\u8FDB\u884C\u57FA\u672C\u7684\u8EAB\u4F53\u6D3B\u52A8\n\u4F60\u73B0\u5728\u4F1A\u7CBE\u529B\u5145\u6C9B\u5730\u671D\u7740\u4E0E\u4EBA\u7C7B\u76F8\u5173\u7684\u666F\u8C61\u3001\n\u58F0\u97F3\u548C\u6C14\u5473\u79FB\u52A8\u5E76\u8BD5\u56FE\u6444\u5165\u76EE\u6807\n\xA7c\u88AB\u4F60\u653B\u51FB\u7684\u4EBA\u4F1A\u88AB\u611F\u67D3\u4E3A\u50CF\u4F60\u4E00\u6837\u7684\u4E2A\u4F53\n\u6740\u5149\u4F60\u770B\u5230\u7684\u6240\u6709\u4EBA\u5E76\u9003\u79BB\u8BBE\u65BD\xA7f",
  tag: "scp008_1",
  group: "scp",
  items: [
    // ["ei:music_attack", 1],
    // ["ei:rush_stick", 1],
    // ["ei:music_attack_eric", 1],
    // ["ei:music_attack_note", 1],
    // ["ei:change_models", 1],
  ],
  armor: [
    ["slot.armor.head", "icon:scp_049_2"],
    ["slot.armor.chest", "air"],
    ["slot.armor.legs", "air"],
    ["slot.armor.feet", "air"]
  ],
  inventory: [0, 27],
  hotbar: [0, 9],
  health: 14
};
var Limit008_1Def = 1;
function spawn008_1(player, spawnlocation) {
  ClearAllTag(player);
  let Limit008_1 = Limit008_1Def;
  const position = player.location;
  const PlayerTag = player.getTags();
  const PlayerID = player.name;
  if (Limit008_1 !== 0) {
    if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
    } else {
      if (!player.hasTag("dev")) {
        player.removeTag("spectator");
        overworld3.runCommand(`effect "${PlayerID}" clear`);
        overworld3.runCommand(`gamemode adventure "${PlayerID}"`);
        const SpawnPointID = 0;
        overworld3.runCommand(`tp "${PlayerID}" ${spawnlocation.x} ${spawnlocation.y} ${spawnlocation.z}`);
        let SpawnType = SCP_008_1;
        player.addTag(`${SpawnType.tag}`);
        player.addTag(`${SpawnType.group}`);
        overworld3.runCommand(`title "${PlayerID}" times 0 300 0`);
        overworld3.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
        overworld3.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}
${SpawnType.target_tip}`);
        overworld3.runCommand(`clear "${PlayerID}"`);
        overworld3.runCommand(`effect "${PlayerID}" health_boost 100000 ${SpawnType.health} true`);
        overworld3.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
        overworld3.runCommand(`effect "${PlayerID}" resistance 5 255 true`);
        for (let slot = SpawnType.inventory[0]; slot < SpawnType.inventory[1]; slot++) {
          overworld3.runCommand(
            `replaceitem entity "${PlayerID}" slot.inventory ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          );
        }
        for (let slot = SpawnType.hotbar[0]; slot < SpawnType.hotbar[1]; slot++) {
          overworld3.runCommand(
            `replaceitem entity "${PlayerID}" slot.hotbar ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          );
        }
        for (let i = 0; i < SpawnType.items.length; i++) {
          overworld3.runCommand(
            `replaceitem entity "${PlayerID}" slot.hotbar ${i} ${SpawnType.items[i][0]} ${SpawnType.items[i][1]} 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          );
        }
        for (let j = SpawnType.items.length; j < 9 - SpawnType.items.length; j++) {
          overworld3.runCommand(
            `replaceitem entity "${PlayerID}" slot.hotbar ${j} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          );
        }
        for (let i = 0; i < SpawnType.armor.length; i++) {
          overworld3.runCommand(
            `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          );
        }
        Limit008_1--;
      }
    }
  }
}
function support_random() {
  const Random = Math.random();
  if (Random < 0.35) {
    support_ntf();
  } else if (Random > 0.35 && Random < 0.55) {
    support_sne();
  } else if (Random > 0.55 && Random < 0.8) {
    support_ci();
  } else {
    support_sh();
  }
}
function FacilityDetect() {
  let ResSum = 0;
  let ClassDSum = 0;
  let GuardSum = 0;
  let NTFSum = 0;
  let SNESum = 0;
  let RRHSum = 0;
  let CISum = 0;
  let SCPSum = 0;
  const AllPlayer = world4.getAllPlayers();
  for (const Player11 of AllPlayer) {
    if (Player11.hasTag("sci")) {
      ResSum++;
    }
    if (Player11.hasTag("allclassd")) {
      ClassDSum++;
    }
    if (Player11.hasTag("allguard")) {
      GuardSum++;
    }
    if (Player11.hasTag("allntf")) {
      NTFSum++;
    }
    if (Player11.hasTag("allsne")) {
      SNESum++;
    }
    if (Player11.hasTag("allrrh")) {
      RRHSum++;
    }
    if (Player11.hasTag("allci")) {
      CISum++;
    }
    if (Player11.hasTag("scp")) {
      SCPSum++;
    }
  }
  world4.sendMessage(
    `\xA7e[ANNOUNCE] \xA7bControl to NTF, camera scan complete. Multiple stragglers. Their positions are now being broadcasted to you.`
  );
  PlaySoundForAllPlayer("ACF1");
  for (const Player11 of AllPlayer) {
    const PlayerID = Player11.name;
    const position = Player11.location;
    if (Player11.hasTag("allguard") || Player11.hasTag("allntf") || Player11.hasTag("allsne") || Player11.hasTag("allrrh") || Player11.hasTag("dev")) {
      Player11.sendMessage(`\xA7e[Scan System] \xA7bResearcher\xA7f: ${ResSum}`);
      Player11.sendMessage(`\xA7e[Scan System] \xA76Class-D\xA7f: ${ClassDSum}`);
      Player11.sendMessage(`\xA7e[Scan System] \xA71Security Officer\xA7f: ${GuardSum}`);
      Player11.sendMessage(`\xA7e[Scan System] \xA7bMTF-Epsilon-11\xA7f: ${NTFSum}`);
      Player11.sendMessage(`\xA7e[Scan System] \xA7sMTF-Eta-10\xA7f: ${SNESum}`);
      Player11.sendMessage(`\xA7e[Scan System] \xA7cMTF-Alpha-10\xA7f: ${RRHSum}`);
      Player11.sendMessage(`\xA7e[Scan System] \xA72Chaos Insurgency\xA7f: ${CISum}`);
      Player11.sendMessage(`\xA7e[Scan System] \xA7cSCP Subject\xA7f: ${SCPSum}`);
    }
  }
}
function ClearAllTag(player) {
  for (let i = 0; i < AllClassesTag.length; i++) {
    player.removeTag(`${AllClassesTag[i]}`);
  }
}
function SpawnRandomSCP(num) {
  if (num > CanSpawnSCPTags.length) {
    num = CanSpawnSCPTags.length;
  }
  let SCPTags = CanSpawnSCPTags;
  let RandomTagsList = [];
  for (let i = 0; i < num; i++) {
    let RandomNum = Math.random();
    const RandomSCP = SCPTags[Math.floor(SCPTags.length * RandomNum)];
    RandomTagsList.push(RandomSCP.split("p")[1]);
    SCPTags = SCPTags.filter((scp) => scp !== RandomSCP);
  }
  for (const number of RandomTagsList) {
    switch (number) {
      case "173":
        spawn173();
        break;
      case "457":
        spawn457();
        break;
      case "066":
        spawn066();
        break;
      case "049":
        spawn049();
        break;
      case "106":
        spawn106();
        break;
      case "096":
        spawn096();
        break;
    }
  }
}

// scripts/items_spawn.ts
import { world as world5 } from "@minecraft/server";
var overworld4;
var nether4;
var theEnd4;
world5.afterEvents.worldLoad.subscribe((arg) => {
  overworld4 = world5.getDimension("overworld");
  nether4 = world5.getDimension("nether");
  theEnd4 = world5.getDimension("the_end");
});
function RandomItemSpawn() {
  for (const vector of RandomItemsPoint.SCP500_Or_SCP420J) {
    const RandomArray = ["bl:scp500_block", "bl:scp500_block", "bl:scp420j_block"];
    const Subject = RandomArray[Math.floor(Math.random() * RandomArray.length)];
    const Vector = vector;
    if (Math.random() < 0.7) {
      overworld4.setBlockType(Vector, Subject);
    }
  }
  for (const [type, vector] of RandomItemsPoint.Lv1) {
    const Vector = vector;
    if (Math.random() < 0.7) {
      if (type === "shelf" || type === "cabinet") {
        const Shelf = overworld4.getBlock(Vector);
        const NewState = Shelf?.permutation.withState("ft:contain", "1");
        Shelf?.setPermutation(NewState);
      } else if (type === "drops") {
        overworld4.setBlockType(Vector, "bl:card_placed_lv1");
      }
    }
  }
  for (const [type, vector] of RandomItemsPoint.Lv2) {
    const Vector = vector;
    if (Math.random() < 0.8) {
      if (type === "shelf" || type === "cabinet") {
        const Shelf = overworld4.getBlock(Vector);
        const NewState = Shelf?.permutation.withState("ft:contain", "2");
        Shelf?.setPermutation(NewState);
      } else if (type === "drops") {
        overworld4.setBlockType(Vector, "bl:card_placed_lv2");
      }
    }
  }
  for (const [type, vector] of RandomItemsPoint.Lv1_2) {
    const Vector = vector;
    const RandomNum = Math.random();
    if (RandomNum <= 0.8) {
      if (type === "shelf" || type === "cabinet") {
        const Shelf = overworld4.getBlock(Vector);
        const NewState = Shelf?.permutation.withState("ft:contain", "1");
        Shelf?.setPermutation(NewState);
      } else if (type === "drops") {
        overworld4.setBlockType(Vector, "bl:card_placed_lv1");
      }
    } else if (RandomNum > 0.5 && RandomNum <= 0.7) {
      if (type === "shelf" || type === "cabinet") {
        const Shelf = overworld4.getBlock(Vector);
        const NewState = Shelf?.permutation.withState("ft:contain", "2");
        Shelf?.setPermutation(NewState);
      } else if (type === "drops") {
        overworld4.setBlockType(Vector, "bl:card_placed_lv2");
      }
    } else {
    }
  }
  for (const [type, vector] of RandomItemsPoint.Lv3) {
    const Vector = vector;
    if (Math.random() < 0.7) {
      if (type === "shelf" || type === "cabinet") {
        const Shelf = overworld4.getBlock(Vector);
        const NewState = Shelf?.permutation.withState("ft:contain", "3");
        Shelf?.setPermutation(NewState);
      } else if (type === "drops") {
        overworld4.setBlockType(Vector, "bl:card_placed_lv3");
      }
    }
  }
  for (const [type, vector] of RandomItemsPoint.Lv4) {
    const Vector = vector;
    if (Math.random() < 0.6) {
      if (type === "shelf" || type === "cabinet") {
        const Shelf = overworld4.getBlock(Vector);
        const NewState = Shelf?.permutation.withState("ft:contain", "4");
        Shelf?.setPermutation(NewState);
      } else if (type === "drops") {
        overworld4.setBlockType(Vector, "bl:card_placed_lv4");
      }
    }
  }
  for (const [type, vector] of RandomItemsPoint.Lv5) {
    const Vector = vector;
    if (Math.random() < 0.5) {
      if (type === "shelf" || type === "cabinet") {
        const Shelf = overworld4.getBlock(Vector);
        const NewState = Shelf?.permutation.withState("ft:contain", "5");
        Shelf?.setPermutation(NewState);
      } else if (type === "drops") {
        overworld4.setBlockType(Vector, "bl:card_placed_lv5");
      }
    }
  }
  for (const [type, vector] of RandomItemsPoint.LvCI) {
    const Vector = vector;
    if (Math.random() < 0.3) {
      if (type === "shelf" || type === "cabinet") {
        const Shelf = overworld4.getBlock(Vector);
        const NewState = Shelf?.permutation.withState("ft:contain", "ci");
        Shelf?.setPermutation(NewState);
      } else if (type === "drops") {
        overworld4.setBlockType(Vector, "bl:card_placed_lvci");
      }
    }
  }
  for (const [type, vector] of RandomItemsPoint.LvDepartment) {
    const Vector = vector;
    const DepartmentCards = ["alpha", "fs", "sm", "w"];
    const RandomCard = DepartmentCards[Math.floor(Math.random() * DepartmentCards.length)];
    if (Math.random() < 0.1) {
      if (type === "shelf" || type === "cabinet") {
        const Shelf = overworld4.getBlock(Vector);
        const NewState = Shelf?.permutation.withState("ft:contain", RandomCard);
        Shelf?.setPermutation(NewState);
      } else if (type === "drops") {
        overworld4.setBlockType(Vector, `bl:card_placed_lv${RandomCard}`);
      }
    }
  }
  for (const vector of RandomItemsPoint.FuseLow) {
    const FuseLowArray = ["bl:fuse_1a", "bl:fuse_2a", "bl:fuse_3a"];
    const Fuse = FuseLowArray[Math.floor(Math.random() * FuseLowArray.length)];
    const Vector = vector;
    if (Math.random() < 0.9) {
      overworld4.setBlockType(Vector, Fuse);
    }
  }
  for (const vector of RandomItemsPoint.FuseMiddle) {
    const FuseLowArray = ["bl:fuse_4a", "bl:fuse_6a", "bl:fuse_8a"];
    const Fuse = FuseLowArray[Math.floor(Math.random() * FuseLowArray.length)];
    const Vector = vector;
    if (Math.random() < 0.7) {
      overworld4.setBlockType(Vector, Fuse);
    }
  }
  for (const vector of RandomItemsPoint.FuseHigh) {
    const FuseLowArray = ["bl:fuse_9a", "bl:fuse_12a"];
    const Fuse = FuseLowArray[Math.floor(Math.random() * FuseLowArray.length)];
    const Vector = vector;
    if (Math.random() < 0.4) {
      overworld4.setBlockType(Vector, Fuse);
    }
  }
  for (const vector of RandomItemsPoint.FirstAidKit) {
    const Vector = vector;
    if (Math.random() < 0.7) {
      overworld4.setBlockType(Vector, "bl:first_aid_kit");
    }
  }
  for (const vector of RandomItemsPoint.SmallFirstAidKit) {
    const Vector = vector;
    if (Math.random() < 0.7) {
      overworld4.setBlockType(Vector, "bl:small_first_aid_kit");
    }
  }
  for (const vector of RandomItemsPoint.Pistol) {
    const Vector = vector;
    if (Math.random() < 0.7) {
      overworld4.setBlockType(Vector, RandonGunString("pistol"));
    }
  }
  for (const vector of RandomItemsPoint.SMG) {
    const Vector = vector;
    if (Math.random() < 0.7) {
      overworld4.setBlockType(Vector, RandonGunString("smg"));
    }
  }
  for (const vector of RandomItemsPoint.Rifle) {
    const Vector = vector;
    if (Math.random() < 0.5) {
      overworld4.setBlockType(Vector, RandonGunString("rifle"));
    }
  }
  for (const vector of RandomItemsPoint.Shotgun) {
    const Vector = vector;
    if (Math.random() < 0.3) {
      overworld4.setBlockType(Vector, RandonGunString("smg"));
    }
  }
  for (const vector of RandomItemsPoint.SniperRifle) {
    const Vector = vector;
    if (Math.random() < 0.3) {
      overworld4.setBlockType(Vector, RandonGunString("rifle"));
    }
  }
  for (const vector of RandomItemsPoint.NVG) {
    const Vector = vector;
    if (Math.random() < 0.7) {
      overworld4.setBlockType(Vector, "bl:gpnvg");
    }
  }
}
function FixedItemSpawn() {
  for (const vector of FixedItemsPoint.SCP500) {
    const Vector = vector;
    overworld4.setBlockType(Vector, "bl:scp500_block");
  }
  for (const vector of FixedItemsPoint.SCP714) {
    const Vector = vector;
    overworld4.setBlockType(Vector, "bl:scp714_block");
  }
  for (const [type, vector] of FixedItemsPoint.Lv2) {
    const Vector = vector;
    if (type === "shelf" || type === "cabinet") {
      const Shelf = overworld4.getBlock(Vector);
      const NewState = Shelf?.permutation.withState("ft:contain", "2");
      Shelf?.setPermutation(NewState);
    } else if (type === "drops") {
      overworld4.setBlockType(Vector, "bl:card_placed_lv2");
    }
  }
  for (const vector of FixedItemsPoint.FirstAidKit) {
    const Vector = vector;
    overworld4.setBlockType(Vector, "bl:first_aid_kit");
  }
  for (const vector of FixedItemsPoint.SmallFirstAidKit) {
    const Vector = vector;
    overworld4.setBlockType(Vector, "bl:small_first_aid_kit");
  }
  for (const vector of FixedItemsPoint.Pistol) {
    const Vector = vector;
    overworld4.setBlockType(Vector, RandonGunString("pistol"));
  }
  for (const vector of FixedItemsPoint.SMG) {
    const Vector = vector;
    overworld4.setBlockType(Vector, RandonGunString("smg"));
  }
  for (const vector of FixedItemsPoint.Rifle) {
    const Vector = vector;
    overworld4.setBlockType(Vector, RandonGunString("rifle"));
  }
  for (const vector of FixedItemsPoint.Shotgun) {
    const Vector = vector;
    overworld4.setBlockType(Vector, RandonGunString("smg"));
  }
  for (const vector of FixedItemsPoint.SniperRifle) {
    const Vector = vector;
    overworld4.setBlockType(Vector, RandonGunString("rifle"));
  }
  for (const vector of FixedItemsPoint.WhiteHand) {
    const Vector = vector;
    overworld4.setBlockType(Vector, "bl:invhand_white");
  }
  for (const vector of FixedItemsPoint.BlackHand) {
    const Vector = vector;
    overworld4.setBlockType(Vector, "bl:invhand_black");
  }
  for (const vector of FixedItemsPoint.NVG) {
    const Vector = vector;
    overworld4.setBlockType(Vector, "bl:gpnvg");
  }
}
function ClearAllItems() {
  for (const vector of FixedItemsPoint.EmptyShelf) {
    const Vector = vector;
    const Shelf = overworld4.getBlock(Vector);
    const NewState = Shelf?.permutation.withState("ft:contain", "empty");
    Shelf?.setPermutation(NewState);
  }
  for (const vector of FixedItemsPoint.EmptyCabinet) {
    const Vector = vector;
    const Shelf = overworld4.getBlock(Vector);
    Shelf?.setPermutation(Shelf.permutation.withState("ft:contain", "empty"));
    Shelf?.setPermutation(Shelf.permutation.withState("ft:cabinet_geo", 0));
    Shelf?.setPermutation(Shelf.permutation.withState("ft:logical_sequence", "forward"));
  }
  for (const vector of RandomItemsPoint.SCP500_Or_SCP420J) {
    const Vector = vector;
    overworld4.setBlockType(Vector, "air");
  }
  for (const [type, vector] of RandomItemsPoint.Lv1) {
    const Vector = vector;
    if (type === "shelf") {
      const Shelf = overworld4.getBlock(Vector);
      const NewState = Shelf?.permutation.withState("ft:contain", "empty");
      Shelf?.setPermutation(NewState);
    } else if (type === "cabinet") {
      const Shelf = overworld4.getBlock(Vector);
      Shelf?.setPermutation(Shelf.permutation.withState("ft:contain", "empty"));
      Shelf?.setPermutation(Shelf.permutation.withState("ft:cabinet_geo", 0));
      Shelf?.setPermutation(Shelf.permutation.withState("ft:logical_sequence", "forward"));
    } else if (type === "drops") {
      overworld4.setBlockType(Vector, "air");
    }
  }
  for (const [type, vector] of RandomItemsPoint.Lv2) {
    const Vector = vector;
    if (type === "shelf") {
      const Shelf = overworld4.getBlock(Vector);
      const NewState = Shelf?.permutation.withState("ft:contain", "empty");
      Shelf?.setPermutation(NewState);
    } else if (type === "cabinet") {
      const Shelf = overworld4.getBlock(Vector);
      Shelf?.setPermutation(Shelf.permutation.withState("ft:contain", "empty"));
      Shelf?.setPermutation(Shelf.permutation.withState("ft:cabinet_geo", 0));
      Shelf?.setPermutation(Shelf.permutation.withState("ft:logical_sequence", "forward"));
    } else if (type === "drops") {
      overworld4.setBlockType(Vector, "air");
    }
  }
  for (const [type, vector] of RandomItemsPoint.Lv1_2) {
    const Vector = vector;
    if (type === "shelf") {
      const Shelf = overworld4.getBlock(Vector);
      const NewState = Shelf?.permutation.withState("ft:contain", "empty");
      Shelf?.setPermutation(NewState);
    } else if (type === "cabinet") {
      const Shelf = overworld4.getBlock(Vector);
      Shelf?.setPermutation(Shelf.permutation.withState("ft:contain", "empty"));
      Shelf?.setPermutation(Shelf.permutation.withState("ft:cabinet_geo", 0));
      Shelf?.setPermutation(Shelf.permutation.withState("ft:logical_sequence", "forward"));
    } else if (type === "drops") {
      overworld4.setBlockType(Vector, "air");
    }
  }
  for (const [type, vector] of RandomItemsPoint.Lv3) {
    const Vector = vector;
    if (type === "shelf") {
      const Shelf = overworld4.getBlock(Vector);
      const NewState = Shelf?.permutation.withState("ft:contain", "empty");
      Shelf?.setPermutation(NewState);
    } else if (type === "cabinet") {
      const Shelf = overworld4.getBlock(Vector);
      Shelf?.setPermutation(Shelf.permutation.withState("ft:contain", "empty"));
      Shelf?.setPermutation(Shelf.permutation.withState("ft:cabinet_geo", 0));
      Shelf?.setPermutation(Shelf.permutation.withState("ft:logical_sequence", "forward"));
    } else if (type === "drops") {
      overworld4.setBlockType(Vector, "air");
    }
  }
  for (const [type, vector] of RandomItemsPoint.Lv4) {
    const Vector = vector;
    if (type === "shelf") {
      const Shelf = overworld4.getBlock(Vector);
      const NewState = Shelf?.permutation.withState("ft:contain", "empty");
      Shelf?.setPermutation(NewState);
    } else if (type === "cabinet") {
      const Shelf = overworld4.getBlock(Vector);
      Shelf?.setPermutation(Shelf.permutation.withState("ft:contain", "empty"));
      Shelf?.setPermutation(Shelf.permutation.withState("ft:cabinet_geo", 0));
      Shelf?.setPermutation(Shelf.permutation.withState("ft:logical_sequence", "forward"));
    } else if (type === "drops") {
      overworld4.setBlockType(Vector, "air");
    }
  }
  for (const [type, vector] of RandomItemsPoint.Lv5) {
    const Vector = vector;
    if (type === "shelf") {
      const Shelf = overworld4.getBlock(Vector);
      const NewState = Shelf?.permutation.withState("ft:contain", "empty");
      Shelf?.setPermutation(NewState);
    } else if (type === "cabinet") {
      const Shelf = overworld4.getBlock(Vector);
      Shelf?.setPermutation(Shelf.permutation.withState("ft:contain", "empty"));
      Shelf?.setPermutation(Shelf.permutation.withState("ft:cabinet_geo", 0));
      Shelf?.setPermutation(Shelf.permutation.withState("ft:logical_sequence", "forward"));
    } else if (type === "drops") {
      overworld4.setBlockType(Vector, "air");
    }
  }
  for (const [type, vector] of RandomItemsPoint.LvCI) {
    const Vector = vector;
    if (type === "shelf") {
      const Shelf = overworld4.getBlock(Vector);
      const NewState = Shelf?.permutation.withState("ft:contain", "empty");
      Shelf?.setPermutation(NewState);
    } else if (type === "cabinet") {
      const Shelf = overworld4.getBlock(Vector);
      Shelf?.setPermutation(Shelf.permutation.withState("ft:contain", "empty"));
      Shelf?.setPermutation(Shelf.permutation.withState("ft:cabinet_geo", 0));
      Shelf?.setPermutation(Shelf.permutation.withState("ft:logical_sequence", "forward"));
    } else if (type === "drops") {
      overworld4.setBlockType(Vector, "air");
    }
  }
  for (const [type, vector] of RandomItemsPoint.LvDepartment) {
    const Vector = vector;
    if (type === "shelf") {
      const Shelf = overworld4.getBlock(Vector);
      const NewState = Shelf?.permutation.withState("ft:contain", "empty");
      Shelf?.setPermutation(NewState);
    } else if (type === "cabinet") {
      const Shelf = overworld4.getBlock(Vector);
      Shelf?.setPermutation(Shelf.permutation.withState("ft:contain", "empty"));
      Shelf?.setPermutation(Shelf.permutation.withState("ft:cabinet_geo", 0));
      Shelf?.setPermutation(Shelf.permutation.withState("ft:logical_sequence", "forward"));
    } else if (type === "drops") {
      overworld4.setBlockType(Vector, "air");
    }
  }
  for (const vector of RandomItemsPoint.FuseLow) {
    const Vector = vector;
    overworld4.setBlockType(Vector, "air");
  }
  for (const vector of RandomItemsPoint.FuseMiddle) {
    const Vector = vector;
    overworld4.setBlockType(Vector, "air");
  }
  for (const vector of RandomItemsPoint.FuseHigh) {
    const Vector = vector;
    overworld4.setBlockType(Vector, "air");
  }
  for (const vector of RandomItemsPoint.FirstAidKit) {
    const Vector = vector;
    overworld4.setBlockType(Vector, "air");
  }
  for (const vector of RandomItemsPoint.SmallFirstAidKit) {
    const Vector = vector;
    overworld4.setBlockType(Vector, "air");
  }
  for (const vector of RandomItemsPoint.Pistol) {
    const Vector = vector;
    overworld4.setBlockType(Vector, "air");
  }
  for (const vector of RandomItemsPoint.Rifle) {
    const Vector = vector;
    overworld4.setBlockType(Vector, "air");
  }
  for (const vector of RandomItemsPoint.Shotgun) {
    const Vector = vector;
    overworld4.setBlockType(Vector, "air");
  }
  for (const vector of RandomItemsPoint.SniperRifle) {
    const Vector = vector;
    overworld4.setBlockType(Vector, "air");
  }
  for (const vector of RandomItemsPoint.NVG) {
    const Vector = vector;
    overworld4.setBlockType(Vector, "air");
  }
}
var PistolString = ["bl:glock18_block", "bl:glock18_block", "bl:glock19_block"];
var SMGString = [
  // "bl:fnp90_block",
  "bl:fnp90_block",
  "hkmp5pdw_block",
  "hkmp7_block",
  "hkump45_block",
  "bl:mp9_block"
];
var RifleString = [
  // "bl:m4a1s_block",
  "bl:m4a1s_block",
  "bl:m4a1_block",
  "bl:ak103_block",
  "bl:ak103t_block",
  "bl:hk416_block",
  "bl:fnscarh_block"
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

// scripts/map_event.ts
import {
  world as world6,
  system as system5,
  BlockVolume as BlockVolume2
} from "@minecraft/server";
var overworld5;
var nether5;
var theEnd5;
world6.afterEvents.worldLoad.subscribe((arg) => {
  overworld5 = world6.getDimension("overworld");
  nether5 = world6.getDimension("nether");
  theEnd5 = world6.getDimension("the_end");
});
function LeverReset() {
  for (let i = 0; i < LeverSwitch.Gate.length; i++) {
    const location = LeverSwitch.Gate[i][0];
    const Lever = overworld5.getBlock(location);
    const GeoState = LeverSwitch.Gate[i][1];
    const LSState = LeverSwitch.Gate[i][2];
    const Setblock = LeverSwitch.Gate[i][3];
    const LeverID = Lever?.typeId;
    if (LeverID === "bl:scp008_switch") {
      const NewGeoState = Lever?.permutation.withState("ft:geometry", GeoState);
      Lever?.setPermutation(NewGeoState);
    } else {
      const NewGeoState = Lever?.permutation.withState("bl:door_geomrtry_states", GeoState);
      Lever?.setPermutation(NewGeoState);
      const NewLSState = Lever?.permutation.withState("bl:logical_sequence", LSState);
      Lever?.setPermutation(NewLSState);
    }
    overworld5.runCommand(`setblock ${location.x} ${location.y - 3} ${location.z} ${Setblock}`);
  }
  for (let i = 0; i < LeverSwitch.SCP.length; i++) {
    const location = LeverSwitch.SCP[i][0];
    const Lever = overworld5.getBlock(location);
    const GeoState = LeverSwitch.SCP[i][1];
    const LSState = LeverSwitch.SCP[i][2];
    const Setblock = LeverSwitch.Gate[i][3];
    const NewGeoState = Lever?.permutation.withState("bl:door_geomrtry_states", GeoState);
    Lever?.setPermutation(NewGeoState);
    const NewLSState = Lever?.permutation.withState("bl:logical_sequence", LSState);
    Lever?.setPermutation(NewLSState);
    overworld5.runCommand(`setblock ${location.x} ${location.y - 3} ${location.z} ${Setblock}`);
  }
}
function BreachActivat() {
  for (let i = 0; i < LeverSwitch.SCP.length; i++) {
    const location = LeverSwitch.SCP[i][0];
    const Lever = overworld5.getBlock(location);
    const GeoState = LeverSwitch.SCP[i][4];
    const LSState = LeverSwitch.SCP[i][5];
    const Setblock = LeverSwitch.SCP[i][6];
    const NewGeoState = Lever?.permutation.withState("bl:door_geomrtry_states", GeoState);
    Lever?.setPermutation(NewGeoState);
    const NewLSState = Lever?.permutation.withState("bl:logical_sequence", LSState);
    Lever?.setPermutation(NewLSState);
    overworld5.runCommand(`setblock ${location.x} ${location.y - 3} ${location.z} ${Setblock}`);
  }
  for (let i = 0; i < BreachControl.SCP.length; i++) {
    const location = BreachControl.SCP[i];
    overworld5.runCommand(`setblock ${location.x} ${location.y} ${location.z} bl:auto_on_off_block`);
  }
}
function EleBoxFuseReset() {
  for (let i = 0; i < EleBoxFuse.GateA.length; i++) {
    const location = EleBoxFuse.GateA[i][1];
    overworld5.runCommand(`setblock ${location.x} ${location.y} ${location.z} air`);
  }
  for (let i = 0; i < EleBoxFuse.GateB.length; i++) {
    const location = EleBoxFuse.GateB[i][1];
    overworld5.runCommand(`setblock ${location.x} ${location.y} ${location.z} air`);
  }
  for (let i = 0; i < EleBoxFuse.ContainmentRoom.length; i++) {
    const location = EleBoxFuse.ContainmentRoom[i][1];
    overworld5.runCommand(`setblock ${location.x} ${location.y} ${location.z} air`);
  }
  for (let i = 0; i < EleBoxFuse.Setblock.length; i++) {
    const location = EleBoxFuse.Setblock[i];
    overworld5.runCommand(`setblock ${location.x} ${location.y} ${location.z} air`);
  }
  system5.runTimeout(() => {
    const RandomNumA = Math.floor(Math.random() * EleBoxFuse.GateA.length);
    const RandomNumB = Math.floor(Math.random() * EleBoxFuse.GateB.length);
    const RandomEleBoxA = EleBoxFuse.GateA[RandomNumA];
    const RandomEleBoxB = EleBoxFuse.GateB[RandomNumB];
    const EleBoxLocationA = RandomEleBoxA[1];
    const EleBoxLocationB = RandomEleBoxB[1];
    overworld5.runCommand(
      `setblock ${EleBoxLocationA.x} ${EleBoxLocationA.y} ${EleBoxLocationA.z} bl:elecbox_fuse_${RandomEleBoxA[0]} ["minecraft:cardinal_direction"="${RandomEleBoxA[2]}"]`
    );
    overworld5.runCommand(
      `setblock ${EleBoxLocationB.x} ${EleBoxLocationB.y} ${EleBoxLocationB.z} bl:elecbox_fuse_${RandomEleBoxB[0]} ["minecraft:cardinal_direction"="${RandomEleBoxB[2]}"]`
    );
    for (let i = 0; i < EleBoxFuse.ContainmentRoom.length; i++) {
      const EleBoxContainmentRoomLocation = EleBoxFuse.ContainmentRoom[i][1];
      overworld5.runCommand(
        `setblock ${EleBoxContainmentRoomLocation.x} ${EleBoxContainmentRoomLocation.y} ${EleBoxContainmentRoomLocation.z} bl:elecbox_fuse_${EleBoxFuse.ContainmentRoom[i][0]} ["minecraft:cardinal_direction"="${EleBoxFuse.ContainmentRoom[i][2]}"]`
      );
    }
  }, 60);
}
function EleBoxWireReset() {
  for (let i = 0; i < EleBoxWire.EmergencyExit.length; i++) {
    const location = EleBoxWire.EmergencyExit[i][0];
    overworld5.runCommand(`setblock ${location.x} ${location.y} ${location.z} air`);
  }
  for (let i = 0; i < EleBoxWire.EmergencyExitRandom.length; i++) {
    const location = EleBoxWire.EmergencyExitRandom[i][0];
    overworld5.runCommand(`setblock ${location.x} ${location.y} ${location.z} air`);
  }
  for (let i = 0; i < EleBoxWire.Setblock.length; i++) {
    const location = EleBoxWire.Setblock[i];
    overworld5.runCommand(`setblock ${location.x} ${location.y} ${location.z} air`);
  }
  system5.runTimeout(() => {
    for (let i = 0; i < EleBoxWire.EmergencyExit.length; i++) {
      const location = EleBoxWire.EmergencyExit[i][0];
      overworld5.runCommand(
        `setblock ${location.x} ${location.y} ${location.z} bl:elecbox_wire ["minecraft:cardinal_direction"="${EleBoxWire.EmergencyExit[i][1]}"]`
      );
    }
    const RandomNumEmergencyExit = Math.floor(Math.random() * EleBoxWire.EmergencyExitRandom.length);
    const RandomEleBox = EleBoxWire.EmergencyExitRandom[RandomNumEmergencyExit];
    const EleBoxLocation = RandomEleBox[0];
    overworld5.runCommand(
      `setblock ${EleBoxLocation.x} ${EleBoxLocation.y} ${EleBoxLocation.z} bl:elecbox_wire ["minecraft:cardinal_direction"="${RandomEleBox[1]}"]`
    );
  }, 60);
  const EEDoorRange = new BlockVolume2(
    EleBoxWire.EmergencyExitDoor[0],
    EleBoxWire.EmergencyExitDoor[1]
  ).getBlockLocationIterator();
  for (const EEDlocation of EEDoorRange) {
    const EEDoor = overworld5.getBlock(EEDlocation);
    EEDoor?.setPermutation(EEDoor.permutation.withState("bl:door_geomrtry_states", 0));
    EEDoor?.setPermutation(EEDoor.permutation.withState("bl:logical_sequence", "forward"));
  }
}
function EmergencyExitDoorSet(type) {
  const location = EmergencyExitDoorSetting;
  switch (type) {
    case "enable":
      overworld5.runCommand(`setblock ${location.x} ${location.y} ${location.z} bedrock`);
      break;
    case "disable":
      overworld5.runCommand(`setblock ${location.x} ${location.y} ${location.z} air`);
      break;
  }
}
function EEOpenSpawnGOC() {
  const DetectBlock = overworld5.getBlock(EleBoxWire.EmergencyExitDoor[2]);
  const DetectState = DetectBlock?.permutation.getState("bl:door_geomrtry_states");
  if (DetectState === 1) {
    support_goc();
  }
}
function EscapeFacility() {
  const EscapeRange = new BlockVolume2(EscapeArea[0], EscapeArea[1]);
  const EscapeRangeBlock = EscapeRange.getBlockLocationIterator();
  for (const EscapeLocation of EscapeRangeBlock) {
    const entities = overworld5.getEntitiesAtBlockLocation(EscapeLocation);
    for (const entity of entities) {
      if (entity.typeId === "minecraft:player") {
        const player = entity;
        const playerID = player.name;
        const playerTags = player.getTags();
        for (const playertag of playerTags) {
          if (CanEscapeClassesTag.includes(playertag)) {
            overworld5.runCommand(`gamemode spectator "${playerID}"`);
            player.addTag("spectator");
            overworld5.runCommand(`title "${playerID}" times 0 200 0`);
            overworld5.runCommand(`title "${playerID}" title \xA7e\u4F60\u6210\u529F\u9003\u51FA\u4E86\u8BBE\u65BD\uFF01`);
            if (RoundTime !== void 0) {
              const TimeRemaining = FormatTime(1860 - RoundTime);
              overworld5.runCommand(
                `title "${playerID}" subtitle \xA7e\u4F60\u5728 \xA7l\xA7b${TimeRemaining} \xA7r\xA7e\u5185\u9003\u79BB\u4E86\u8BBE\u65BD\uFF0C\u5E72\u7684\u6F02\u4EAE\uFF01`
              );
            }
            world6.sendMessage(`\xA7e\u73A9\u5BB6 \xA7l\xA7b${playerID} \xA7r\xA7e\u4F5C\u4E3A \xA7l${ClassesName(player)} \xA7r\xA7e\u6210\u529F\u9003\u51FA\u4E86\u8BBE\u65BD\uFF01`);
            for (let i = 0; i < AllClassesTag.length; i++) {
              player.removeTag(`${AllClassesTag[i]}`);
            }
            world6.sendMessage(`\xA7d\u89E6\u53D1\u4E13\u5C5E\u5956\u52B1\u6389\u843D\uFF01`);
            EscapeRewardDrops(player.name);
            ExpAddExp(player.name, 27);
            ExpChangeMassage(player, 27, "\u6210\u529F\u9003\u79BB\u8BBE\u65BD");
            system5.runTimeout(() => {
              overworld5.runCommand(`title "${playerID}" times 0 200 0`);
              overworld5.runCommand(`title "${playerID}" title Spectator`);
              overworld5.runCommand(`title "${playerID}" subtitle \u4F60\u73B0\u5728\u662F\u65C1\u89C2\u8005\uFF0C\u8BF7\u7B49\u5F85\u590D\u6D3B...`);
            }, 140);
          }
        }
      }
    }
  }
}
function HelipadEvacuate() {
  const OmegaWarheadTerminal = overworld5.getBlock(Terminal.OmegaWarhead);
  const OmegaState = OmegaWarheadTerminal?.permutation.getState("ft:warhead_state");
  if (OmegaState !== "idle" && OmegaState !== "ready" && OmegaState !== "paused" && OmegaState !== "detonated") {
    const EvacuateRange = new BlockVolume2(HelicopterLandingZone[0], HelicopterLandingZone[1]);
    const EvacuateRangeBlock = EvacuateRange.getBlockLocationIterator();
    for (const EvacuateLocation of EvacuateRangeBlock) {
      const entities = overworld5.getEntitiesAtBlockLocation(EvacuateLocation);
      for (const entity of entities) {
        if (entity.typeId === "minecraft:player") {
          const player = entity;
          const playerID = player.name;
          const playerTags = player.getTags();
          for (const playertag of playerTags) {
            if (CanEvacuateClassesTag.includes(playertag)) {
              overworld5.runCommand(`gamemode spectator "${playerID}"`);
              player.addTag("spectator");
              player.sendMessage(`\xA7e\u4F60\u6210\u529F\u64A4\u79BB\u4E86\u8BBE\u65BD\uFF01`);
              player.sendMessage(`\xA7e\u4F60\u5728Omega\u7684\u6838\u7206\u4E2D\u5E78\u514D\u4E8E\u96BE\uFF0C\u5E72\u7684\u6F02\u4EAE\uFF01`);
              world6.sendMessage(`\xA7e\u73A9\u5BB6 \xA7l\xA7b${playerID} \xA7r\xA7e\u4F5C\u4E3A \xA7l${ClassesName(player)} \xA7r\xA7e\u6210\u529F\u64A4\u79BB\u8BBE\u65BD\uFF01`);
              for (let i = 0; i < AllClassesTag.length; i++) {
                player.removeTag(`${AllClassesTag[i]}`);
              }
              world6.sendMessage(`\xA7d\u89E6\u53D1\u4E13\u5C5E\u5956\u52B1\u6389\u843D\uFF01`);
              EscapeRewardDrops(player.name);
              ExpAddExp(player.name, 50);
              ExpChangeMassage(player, 50, "\u6210\u529F\u9003\u79BB\u8BBE\u65BD");
              system5.runTimeout(() => {
                overworld5.runCommand(`title "${playerID}" times 0 200 0`);
                overworld5.runCommand(`title "${playerID}" title Spectator`);
                overworld5.runCommand(`title "${playerID}" subtitle \u4F60\u73B0\u5728\u662F\u65C1\u89C2\u8005\uFF0C\u8BF7\u7B49\u5F85\u590D\u6D3B...`);
              }, 140);
            }
          }
        }
      }
    }
  }
}
function PocketDimensionTeleport() {
  for (let i = 0; i < Pocket_Dimension.TelePoint.length; i++) {
    const ExitPoint = Pocket_Dimension.Exit[Math.floor(Math.random() * Pocket_Dimension.Exit.length)];
    const RandomNum = Math.random();
    if (RandomNum <= 0.4) {
      overworld5.runCommand(
        `tp @e[x=${Pocket_Dimension.TelePoint[i].x},y=${Pocket_Dimension.TelePoint[i].y},z=${Pocket_Dimension.TelePoint[i].z},dx=+0,dy=+1,dz=+0] ${ExitPoint.x} ${ExitPoint.y} ${ExitPoint.z}`
      );
    } else if (RandomNum > 0.4 && RandomNum < 0.7) {
      overworld5.runCommand(
        `tp @e[x=${Pocket_Dimension.TelePoint[i].x},y=${Pocket_Dimension.TelePoint[i].y},z=${Pocket_Dimension.TelePoint[i].z},dx=+0,dy=+1,dz=+0] ${Pocket_Dimension.Pocket.x} ${Pocket_Dimension.Pocket.y} ${Pocket_Dimension.Pocket.z}`
      );
    } else {
      overworld5.runCommand(
        `execute as @a[tag=scp106] at @s run damage @e[x=${Pocket_Dimension.TelePoint[i].x},y=${Pocket_Dimension.TelePoint[i].y},z=${Pocket_Dimension.TelePoint[i].z},dx=+0,dy=+1,dz=+0] 100 entity_attack entity @s`
      );
    }
  }
}
function CheckPointTeleport() {
  for (let i = 0; i < CPTeleport.length; i++) {
    const TeleLocation1 = CPTeleport[i][0];
    const TeleLocation2 = CPTeleport[i][1];
    const TeleEntitys1 = overworld5.getEntitiesAtBlockLocation(TeleLocation1);
    const TeleEntitys2 = overworld5.getEntitiesAtBlockLocation(TeleLocation2);
    const Destination = {
      x: CPTeleport[i][2].x + 0.5,
      y: CPTeleport[i][2].y,
      z: CPTeleport[i][2].z + 0.5
    };
    for (const TeleEntity1 of TeleEntitys1) {
      if (TeleEntity1.hasTag("scp")) {
        TeleEntity1.teleport(Destination);
      }
    }
    for (const TeleEntity2 of TeleEntitys2) {
      if (TeleEntity2.hasTag("scp")) {
        TeleEntity2.teleport(Destination);
      }
    }
  }
}
function LibraryTeleport() {
  for (const TPoint of LibTeleport) {
    const Point = LibTPTarget[Math.floor(Math.random() * LibTPTarget.length)];
    overworld5.runCommand(
      `tp @a[x=${TPoint.x},y=${TPoint.y},z=${TPoint.z},dx=0,dy=1,dz=0] ${Point.x} ${Point.y} ${Point.z}`
    );
  }
}
function FireDoorReset() {
  const FireDoors = new BlockVolume2(FireDoor.SCP457[0], FireDoor.SCP457[1]);
  for (const DoorLocation of FireDoors.getBlockLocationIterator()) {
    const Door = overworld5.getBlock(DoorLocation);
    const NewGeo = Door?.permutation.withState("bl:door_geomrtry_states", 0);
    Door?.setPermutation(NewGeo);
    const NewLS = Door?.permutation.withState("bl:logical_sequence", "forward");
    Door?.setPermutation(NewLS);
  }
}
function AlphaWarheadReset() {
  const AlphaWarheadTerminal = overworld5.getBlock(Terminal.AlphaWarhead);
  AlphaWarheadTerminal?.setPermutation(AlphaWarheadTerminal?.permutation.withState("ft:warhead_state", "idle"));
}
function AlphaWarheadDeactivated() {
  const AlphaWarheadTerminal = overworld5.getBlock(Terminal.AlphaWarhead);
  AlphaWarheadTerminal?.setPermutation(AlphaWarheadTerminal?.permutation.withState("ft:warhead_state", "detonated"));
}
function OmegaWarheadReset() {
  const OmegaWarheadTerminal = overworld5.getBlock(Terminal.OmegaWarhead);
  OmegaWarheadTerminal?.setPermutation(
    OmegaWarheadTerminal?.permutation.withState("ft:warhead_state", "idle")
  );
}
function OmegaWarheadDeactivated() {
  const OmegaWarheadTerminal = overworld5.getBlock(Terminal.OmegaWarhead);
  OmegaWarheadTerminal?.setPermutation(OmegaWarheadTerminal?.permutation.withState("ft:warhead_state", "detonated"));
}
function OmegaWarheadRemoteReset() {
  overworld5.runCommand(
    `setblock ${LeverSwitch.OmegaWarheadRemote.x} ${LeverSwitch.OmegaWarheadRemote.y} ${LeverSwitch.OmegaWarheadRemote.z} bl:lever_on_off ["minecraft:cardinal_direction"="north"]`
  );
}
var GateABlast = 1;
function GateA_Blast(player) {
  const GateA_Blast_Volume = new BlockVolume2(GateA_Blast_Area[0], GateA_Blast_Area[1]);
  for (const position of GateA_Blast_Volume.getBlockLocationIterator()) {
    const BlastPlayer = player.dimension.getEntitiesAtBlockLocation(position);
    if (BlastPlayer.includes(player)) {
      let BlastTimeCut2 = function() {
        if (BlastTime > 0) {
          BlastTime--;
          overworld5.runCommand(`title @a times 0 3 0`);
          overworld5.runCommand(`titleraw @a title {"rawtext":[{"text":" "}]}`);
          overworld5.runCommand(
            `title @a subtitle \xA7cGate-A\u7206\u7834\u7CFB\u7EDF\u5DF2\u542F\u52A8
${FormatTimeTick(BlastTime)}










`
          );
          system5.runTimeout(() => {
            BlastTimeCut2();
          }, 1);
          if (BlastTime % 40 === 0) {
            PlaySoundForAllPlayer("AL5");
          }
        } else {
          for (const BlockLocation of GateA_Blast_Position) {
            for (let i = 0; i <= 5; i++) {
              overworld5.runCommand(
                `particle minecraft:knockback_roar_particle ${BlockLocation.x} ${BlockLocation.y} ${BlockLocation.z}`
              );
              overworld5.runCommand(
                `particle minecraft:large_explosion ${BlockLocation.x} ${BlockLocation.y} ${BlockLocation.z}`
              );
            }
            PlaySoundForAllPlayer("NUKE2");
            const DoorBlock = overworld5.getBlock(BlockLocation);
            const NewState = DoorBlock?.permutation.withState("bl:door_geomrtry_states", 14);
            DoorBlock?.setPermutation(NewState);
          }
        }
      };
      var BlastTimeCut = BlastTimeCut2;
      let BlastTime = 600;
      if (GateABlast === 1) {
        GateABlast = 0;
        BlastTimeCut2();
        PlaySoundForAllPlayer("AL3");
        PlaySoundForAllPlayer("EIJNRP");
        world6.sendMessage("\xA7d[BGM] \xA7bJoel Nielsen - Residue Processing");
        world6.sendMessage("\xA7e[ANNOUNCE] \xA7cGate-A Blast system activated. 30s remaning.");
        for (const Buttons of Button) {
          const Position = Buttons[0];
          const Button2 = overworld5.getBlock(Position);
          overworld5.runCommand(
            `setblock ${Position.x} ${Position.y} ${Position.z} bl:on_off_error ["minecraft:cardinal_direction"="${Buttons[1]}"]`
          );
        }
      }
      break;
    }
  }
}
function GateA_Reset() {
  GateABlast = 1;
  for (const BlockLocation of GateA_Blast_Position) {
    for (let i = 0; i <= 5; i++) {
      const DoorBlock = overworld5.getBlock(BlockLocation);
      const NewState = DoorBlock?.permutation.withState("bl:door_geomrtry_states", 0);
      DoorBlock?.setPermutation(NewState);
    }
  }
  for (const Buttons of Button) {
    const Position = Buttons[0];
    const Button2 = overworld5.getBlock(Position);
    overworld5.runCommand(
      `setblock ${Position.x} ${Position.y} ${Position.z} bl:on_off_card5_w_check ["minecraft:cardinal_direction"="${Buttons[1]}"]`
    );
  }
}
function SCP914Clear() {
  const SCP914IntakeVolume = new BlockVolume2(SCP914Area.intake[0], SCP914Area.intake[1]);
  const SCP914OutputVolume = new BlockVolume2(SCP914Area.output[0], SCP914Area.output[1]);
  for (const location of SCP914IntakeVolume.getBlockLocationIterator()) {
    overworld5.setBlockType(location, "minecraft:air");
  }
  for (const location of SCP914OutputVolume.getBlockLocationIterator()) {
    overworld5.setBlockType(location, "minecraft:air");
  }
}
function SCP035Spawn() {
  const SpawnPoint = SCP035SpawnPoint[Math.floor(Math.random() * SCP035SpawnPoint.length)];
  overworld5.spawnEntity("ei:scp035_entity", { x: SpawnPoint.x + 0.5, y: SpawnPoint.y, z: SpawnPoint.z + 0.5 });
}
function SCP035Clear() {
  overworld5.runCommand(`kill @e[type=ei:scp035_entity]`);
}

// scripts/item_components.ts
import {
  system as system8,
  world as world9
} from "@minecraft/server";
import { ActionFormData as ActionFormData3 } from "@minecraft/server-ui";

// scripts/customize/custom_skin.ts
import { world as world8 } from "@minecraft/server";
import { ActionFormData as ActionFormData2 } from "@minecraft/server-ui";

// scripts/customize/player_skin_data.ts
import { world as world7 } from "@minecraft/server";

// scripts/customize/weapon_skin_data.ts
var SkinList = {
  HK_MP7_Miku16th: "hkmp7_miku16th",
  M4A1_S_PrintStream: "m4a1s_printstream",
  AK_103_GL_SPAS12: "ak103_gf_spas12"
};
var HK_MP7_SkinList = [
  {
    id: "hkmp7_miku16th",
    title: "\xA7cMiku 16th \u521D\u97F316\u5468\u5E74",
    level: "\xA7c[\u53F2\u8BD7]",
    icon_path: "textures/icons/weapons/hkmp7_miku16th.png",
    permission: "\xA7aPublic",
    ascription: "\xA7bFT-Official"
  }
];
var M4A1_S_SkinList = [
  {
    id: "m4a1s_printstream",
    title: "\xA7cPrintStream \u5370\u82B1\u96C6",
    level: "\xA7c[\u53F2\u8BD7]",
    icon_path: "textures/icons/weapons/m4a1s_printstream.png",
    permission: "\xA7aPublic",
    ascription: "\xA7bFT-Official"
  },
  {
    id: "m4a1s_genshin_furina",
    title: "\xA7bGenshin Furina \u8299\u5B81\u5A1C",
    level: "\xA7c[\u53F2\u8BD7]",
    icon_path: "textures/icons/weapons/m4a1s_genshin_furina.png",
    permission: "\xA7aPublic",
    ascription: "\xA7eRadEvening60474"
  },
  {
    id: "m4a1s_reverse_vertin ",
    title: "\xA7fReverse Vertin \u7EF4\u5C14\u6C40",
    level: "\xA7b[\u9650\u5B9A]",
    icon_path: "textures/icons/weapons/m4a1s_reverse_vertin.png",
    permission: "\xA7aPublic",
    ascription: "\xA7eQAQ6454"
  },
  {
    id: "m4a1s_clear_water",
    title: "\xA7bClear Water \u6F84\u6F88\u4E4B\u6C34",
    level: "\xA7d[\u7A00\u6709]",
    icon_path: "textures/icons/weapons/m4a1s_clear_water.png",
    permission: "\xA7aPublic",
    ascription: "\xA7bFT-Official"
  },
  {
    id: "m4a1s_forest_camo",
    title: "\xA72Forest Camo \u4E1B\u6797\u8FF7\u5F69",
    level: "\xA7s[\u666E\u901A]",
    icon_path: "textures/icons/weapons/m4a1s_forest_camo.png",
    permission: "\xA7aPublic",
    ascription: "\xA7bFT-Official"
  },
  {
    id: "m4a1s_urban_digital",
    title: "\xA70Urban_Digital \u57CE\u5E02\u6570\u7801",
    level: "\xA7s[\u666E\u901A]",
    icon_path: "textures/icons/weapons/m4a1s_urban_digital.png",
    permission: "\xA7aPublic",
    ascription: "\xA7bFT-Official"
  }
];
var M4A1_SkinList = [
  {
    id: "m4a1_gf_lunasia",
    title: "\xA7a\u5C11\u5973\u524D\u7EBF Lunsia \u9732\u5C3C\u897F\u4E9A",
    level: "\xA7b[\u9650\u5B9A]",
    icon_path: "textures/icons/weapons/m4a1_gf_lunasia.png",
    permission: "\xA7aPublic",
    ascription: "\xA7e\u51AC\u65E5"
  }
];
var AK103_SkinList = [
  {
    id: "ak103_gf_spas12",
    title: "\xA71\u5C11\u5973\u524D\u7EBF SPAS-12",
    level: "\xA7b[\u9650\u5B9A]",
    icon_path: "textures/icons/weapons/ak103_gf_spas12.png",
    permission: "\xA76Private",
    ascription: "\xA7eerersuan142"
  }
];

// scripts/customize/player_skin_data.ts
var SkinMap = /* @__PURE__ */ new Map();
var SkinStateString = {
  true: "\xA7a[\u5DF2\u62E5\u6709]\xA7f",
  false: "\xA76[\u672A\u62E5\u6709]\xA7f"
};
function SetSkinState(player, SkinID, State) {
  const Skin_Name = `${SkinID}|${player}`;
  SkinMap.set(Skin_Name, State);
  SaveSkinInfo();
}
function GetSkinState(player, SkinID) {
  const Skin_Name = `${SkinID}|${player.name}`;
  const SkinState = SkinMap.get(Skin_Name);
  if (SkinMap) {
    return SkinState;
  } else {
    return SkinStateString.false;
  }
}
function SaveSkinInfo() {
  for (const [skin_info, state] of SkinMap.entries()) {
    world7.setDynamicProperty(skin_info, state);
  }
}
function LoadSkinInfo() {
  for (const player of world7.getAllPlayers()) {
    for (const SkinID in SkinList) {
      const Skin_Name = `${SkinList[SkinID]}|${player.name}`;
      const getstate = world7.getDynamicProperty(Skin_Name);
      let state;
      if (getstate) {
        state = getstate;
      } else {
        state = SkinStateString.false;
      }
      SkinMap.set(Skin_Name, state);
    }
  }
  world7.sendMessage(`\xA7a\u4ECE\u5730\u56FE\u8BFB\u53D6\u73A9\u5BB6\u81EA\u5B9A\u4E49\u76AE\u80A4\u4FE1\u606F\u5B8C\u6210\uFF01`);
}
function DefaultPlayerSkinDataLoad() {
  SetSkinState("Ectrico", "hkmp7_miku16th", SkinStateString.true);
  SetSkinState("Ectrico", "m4a1s_printstream", SkinStateString.true);
  SetSkinState("Ectrico", "m4a1s_clear_water", SkinStateString.true);
  SetSkinState("Ectrico", "m4a1s_forest_camo", SkinStateString.true);
  SetSkinState("Ectrico", "m4a1s_urban_digital", SkinStateString.true);
  SetSkinState("erersuan142", "ak103_gf_spas12", SkinStateString.true);
  SetSkinState("QAQ6454", "m4a1_gf_lunsia", SkinStateString.true);
  SetSkinState("DongRe2010", "m4a1s_reverse_vertin", SkinStateString.true);
  SetSkinState("RadEvening60474", "m4a1s_genshin_furina", SkinStateString.true);
}

// scripts/customize/custom_skin.ts
var overworld6;
var nether6;
var theEnd6;
world8.afterEvents.worldLoad.subscribe((arg) => {
  overworld6 = world8.getDimension("overworld");
  nether6 = world8.getDimension("nether");
  theEnd6 = world8.getDimension("the_end");
});
var CustomizeMenu;
world8.afterEvents.worldLoad.subscribe(() => {
  CustomizeMenu = new ActionFormData2();
  CustomizeMenu.title(`\xA7d\u81EA\u5B9A\u4E49\u4E2A\u6027\u5316\u83DC\u5355`).button(`\xA7b\u67AA\u68B0\u76AE\u80A4`);
});
var GunSkinMenu;
world8.afterEvents.worldLoad.subscribe(() => {
  GunSkinMenu = new ActionFormData2();
  GunSkinMenu.title(`\xA7d[\u67AA\u68B0\u76AE\u80A4]\u81EA\u5B9A\u4E49\u4E2A\u6027\u5316\u83DC\u5355`).button(`\xA7fHK MP7`, "textures/icons/weapons/hkmp7.png").button(`\xA7fM4A1-S`, "textures/icons/weapons/m4a1s.png").button(`\xA7fM4A1`, "textures/icons/weapons/m4a1.png").button(`\xA7fAK-103`, "textures/icons/weapons/ak103.png");
});
function ShowCustomizeMenu(player) {
  const HKMP7SkinMenu = new ActionFormData2();
  HKMP7SkinMenu.title(`\xA7d[HK-MP7\u67AA\u68B0\u76AE\u80A4]\u81EA\u5B9A\u4E49\u4E2A\u6027\u5316\u83DC\u5355`);
  for (const ThisSkin of HK_MP7_SkinList) {
    try {
      HKMP7SkinMenu.button(
        `${GetSkinState(player, ThisSkin.id)}${ThisSkin.title}${ThisSkin.level}
\xA7f\u8BB8\u53EF: ${ThisSkin.permission}	\xA7f\u5B9A\u5236\u6240\u5C5E: ${ThisSkin.ascription}`,
        `${ThisSkin.icon_path}`
      );
    } catch {
    }
  }
  const M4A1_SSkinMenu = new ActionFormData2();
  M4A1_SSkinMenu.title(`\xA7d[M4A1-S\u67AA\u68B0\u76AE\u80A4]\u81EA\u5B9A\u4E49\u4E2A\u6027\u5316\u83DC\u5355`);
  for (const ThisSkin of M4A1_S_SkinList) {
    try {
      M4A1_SSkinMenu.button(
        `${GetSkinState(player, ThisSkin.id)}${ThisSkin.title}${ThisSkin.level}
\xA7f\u8BB8\u53EF: ${ThisSkin.permission}	\xA7f\u5B9A\u5236\u6240\u5C5E: ${ThisSkin.ascription}`,
        `${ThisSkin.icon_path}`
      );
    } catch {
    }
  }
  const M4A1SkinMenu = new ActionFormData2();
  M4A1SkinMenu.title(`\xA7d[M4A1\u67AA\u68B0\u76AE\u80A4]\u81EA\u5B9A\u4E49\u4E2A\u6027\u5316\u83DC\u5355`);
  for (const ThisSkin of M4A1_SkinList) {
    try {
      M4A1SkinMenu.button(
        `${GetSkinState(player, ThisSkin.id)}${ThisSkin.title}${ThisSkin.level}
\xA7f\u8BB8\u53EF: ${ThisSkin.permission}	\xA7f\u5B9A\u5236\u6240\u5C5E: ${ThisSkin.ascription}`,
        `${ThisSkin.icon_path}`
      );
    } catch {
    }
  }
  const AK103SkinMenu = new ActionFormData2();
  AK103SkinMenu.title(`\xA7d[AK103\u67AA\u68B0\u76AE\u80A4]\u81EA\u5B9A\u4E49\u4E2A\u6027\u5316\u83DC\u5355`);
  for (const ThisSkin of AK103_SkinList) {
    try {
      AK103SkinMenu.button(
        `${GetSkinState(player, ThisSkin.id)}${ThisSkin.title}${ThisSkin.level}
\xA7f\u8BB8\u53EF: ${ThisSkin.permission}	\xA7f\u5B9A\u5236\u6240\u5C5E: ${ThisSkin.ascription}`,
        `${ThisSkin.icon_path}`
      );
    } catch {
    }
  }
  const playerAny = player;
  CustomizeMenu.show(playerAny).then((response) => {
    switch (response.selection) {
      case 0:
        GunSkinMenu.show(playerAny).then((gun_response) => {
          switch (gun_response.selection) {
            case 0:
              HKMP7SkinMenu.show(playerAny).then((hkmp7skin_response) => {
                const SelectedSkin = HK_MP7_SkinList[hkmp7skin_response.selection];
                if (GetSkinState(player, SelectedSkin.id) === SkinStateString.true) {
                  ReplaceSkinItem(player, SelectedSkin.id, "bli:hkmp7");
                } else {
                  player.sendMessage(`\xA76\u4F60\u6682\u672A\u62E5\u6709\u6B64\u7269\u54C1\uFF01`);
                }
              });
              break;
            case 1:
              M4A1_SSkinMenu.show(playerAny).then((m4a1sskin_response) => {
                const SelectedSkin = M4A1_S_SkinList[m4a1sskin_response.selection];
                if (GetSkinState(player, SelectedSkin.id) === SkinStateString.true) {
                  ReplaceSkinItem(player, SelectedSkin.id, "bli:m4a1s");
                } else {
                  player.sendMessage(`\xA76\u4F60\u6682\u672A\u62E5\u6709\u6B64\u7269\u54C1\uFF01`);
                }
              });
              break;
            case 2:
              M4A1SkinMenu.show(playerAny).then((m4a1skin_response) => {
                const SelectedSkin = M4A1_SkinList[m4a1skin_response.selection];
                if (GetSkinState(player, SelectedSkin.id) === SkinStateString.true) {
                  ReplaceSkinItem(player, SelectedSkin.id, "bli:m4a1");
                } else {
                  player.sendMessage(`\xA76\u4F60\u6682\u672A\u62E5\u6709\u6B64\u7269\u54C1\uFF01`);
                }
              });
              break;
            case 3:
              AK103SkinMenu.show(playerAny).then((ak103skin_response) => {
                const SelectedSkin = AK103_SkinList[ak103skin_response.selection];
                if (GetSkinState(player, SelectedSkin.id) === SkinStateString.true) {
                  ReplaceSkinItem(player, SelectedSkin.id, "bli:ak103");
                } else {
                  player.sendMessage(`\xA76\u4F60\u6682\u672A\u62E5\u6709\u6B64\u7269\u54C1\uFF01`);
                }
              });
              break;
          }
        });
        break;
    }
  });
}
function ReplaceSkinItem(player, skinID, replaceItem) {
  for (let i = 0; i < 9; i++) {
    const Item = player.getComponent("inventory")?.container?.getItem(i)?.typeId;
    if (Item === replaceItem) {
      overworld6.runCommand(
        `replaceitem entity "${player.name}" slot.hotbar ${i} bli:${skinID} 1 0 {"minecraft:keep_on_death":{}}`
      );
      break;
    }
  }
}

// scripts/item_components.ts
var overworld7;
var nether7;
var theEnd7;
world9.afterEvents.worldLoad.subscribe((arg) => {
  overworld7 = world9.getDimension("overworld");
  nether7 = world9.getDimension("nether");
  theEnd7 = world9.getDimension("the_end");
});
function RegisterCustomComponent() {
  system8.beforeEvents.startup.subscribe((initevent) => {
    initevent.itemComponentRegistry.registerCustomComponent("ei:scp106_setpoint", SCP106SetPoint);
    initevent.itemComponentRegistry.registerCustomComponent("ei:scp106_gotopoint", SCP106GoToPoint);
    initevent.itemComponentRegistry.registerCustomComponent("ei:scp066_music_attack_eric", SCP066MusicAttackEric);
    initevent.itemComponentRegistry.registerCustomComponent("ei:scp066_music_attack_note", SCP066MusicAttackNote);
    initevent.itemComponentRegistry.registerCustomComponent("ei:scp066_music_attack", SCP066MusicAttack);
    initevent.itemComponentRegistry.registerCustomComponent("ei:scp066_rush_stick", SCP066RushStick);
    initevent.itemComponentRegistry.registerCustomComponent("ei:mtf_terminal", MTF_Terminal);
    initevent.itemComponentRegistry.registerCustomComponent("ei:change_models", ChangeModels);
    initevent.itemComponentRegistry.registerCustomComponent("ei:open_customize_menu", OpenCustomizeMenu);
  });
}
var SCP106SetPoint = {
  onUse: (arg) => {
    const player = arg.source;
    const location = {
      x: player.location.x,
      y: player.location.y,
      z: player.location.z
    };
    const x = location.x;
    const y = location.y;
    const z = location.z;
    const dimension = player.dimension;
    arg.itemStack?.getComponent(`cooldown`)?.startCooldown(player);
    const result = dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} bl:decals1_512x replace air`);
    if (result.successCount > 0) {
      dimension.runCommand(`playsound "106Corrosion1" @a ${x} ${y} ${z}`);
      const LastPoint = world9.getDynamicProperty("scp106telepoint");
      if (LastPoint !== void 0) {
        dimension.runCommand(
          `fill ${LastPoint.x} ${LastPoint.y} ${LastPoint.z} ${LastPoint.x} ${LastPoint.y} ${LastPoint.z} air replace bl:decals1_512x`
        );
      }
      world9.setDynamicProperty("scp106telepoint", location);
      player.sendMessage(`\u4F20\u9001\u70B9\u751F\u6210\u6210\u529F\uFF01`);
    } else {
      player.sendMessage(`\u4F20\u9001\u70B9\u751F\u6210\u5931\u8D25\uFF01`);
    }
  }
};
var SCP106GoToPoint = {
  onUse: (arg) => {
    const player = arg.source;
    const location = {
      x: player.location.x,
      y: player.location.y,
      z: player.location.z
    };
    const x = location.x;
    const y = location.y;
    const z = location.z;
    const dimension = player.dimension;
    arg.itemStack?.getComponent(`cooldown`)?.startCooldown(player);
    const Point = world9.getDynamicProperty("scp106telepoint");
    if (Point !== void 0) {
      let Reduce2 = function() {
        if (i < 2) {
          if (i === 0.02) {
            dimension.runCommand(`playsound "106Corrosion2" @a ${x} ${y} ${z}`);
            system8.runTimeout(() => {
              dimension.runCommand(`playsound "106Corrosion2" @a ${x} ${y} ${z}`);
            }, 40);
          }
          dimension.runCommand(`tp "${player.name}" ${x} ${y - i} ${z}`);
          system8.runTimeout(() => {
            Reduce2();
            i += 0.02;
          }, 1);
        } else {
          dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} air replace bl:decals1_512x`);
          Add2();
        }
      }, Add2 = function() {
        if (j < 2.1) {
          if (j === 0.02) {
            dimension.runCommand(`playsound "106Breathing" @a ${x} ${y} ${z}`);
            system8.runTimeout(() => {
              dimension.runCommand(`playsound "106Breathing" @a ${x} ${y} ${z}`);
            }, 50);
          }
          dimension.runCommand(
            `tp "${player.name}" ${Math.floor(Point.x)} ${Math.floor(Point.y) - 2 + j} ${Math.floor(Point.z)}`
          );
          system8.runTimeout(() => {
            Add2();
            j += 0.02;
          }, 1);
        }
      };
      var Reduce = Reduce2, Add = Add2;
      let i = 0;
      let j = 0;
      dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} bl:decals1_512x replace air`);
      Reduce2();
    }
  }
};
var DetectCoolDown = 1;
var DetectCoolDownTime = 0;
var MTF_Terminal = {
  onUse: (arg) => {
    const player = arg.source;
    const Terminal2 = new ActionFormData3().title("\xA7bMTF\u673A\u52A8\u7279\u9063\u961F - \u63A7\u5236\u7EC8\u7AEF").body("\xA7e\u9009\u62E9\u53EF\u6267\u884C\u64CD\u4F5C\uFF1A").button("\xA7c\u7206\u7834Gate-A", "textures/icons/detonators.png").button(`\xA7b\u8BBE\u65BD\u626B\u63CF\xA76(\u51B7\u5374\u5269\u4F59\uFF1A${DetectCoolDownTime}s)`, "textures/icons/scan.png");
    Terminal2.show(player).then((response) => {
      const selectNum = response.selection;
      switch (selectNum) {
        case 0:
          GateA_Blast(player);
          break;
        case 1:
          TerminalFacilityDetect();
          break;
      }
    });
    function TerminalFacilityDetect() {
      if (DetectCoolDown === 1) {
        let CoolDownReduce2 = function() {
          if (DetectCoolDownTime > 0) {
            DetectCoolDownTime--;
            system8.runTimeout(() => {
              CoolDownReduce2();
            }, 20);
          }
          if (DetectCoolDownTime === 0) {
            DetectCoolDown = 1;
          }
        };
        var CoolDownReduce = CoolDownReduce2;
        FacilityDetect();
        DetectCoolDown = 0;
        DetectCoolDownTime = 60;
        CoolDownReduce2();
      } else {
        player.sendMessage(`\xA76\u8BBE\u65BD\u626B\u63CF\u51B7\u5374\u4E2D\uFF01`);
      }
    }
  }
};
var SCP066MusicAttackEric = {
  onUse: (arg) => {
    const SCP066 = arg.source;
    const dimension = arg.source.dimension;
    arg.itemStack?.getComponent(`cooldown`)?.startCooldown(SCP066);
    const location = { x: SCP066.location.x, y: SCP066.location.y, z: SCP066.location.z };
    const SoundOptions = {
      location,
      volume: 1
    };
    PlaySoundForAllPlayer("066E1");
  }
};
var SCP066MusicAttackNote = {
  onUse: (arg) => {
    const SCP066 = arg.source;
    const dimension = arg.source.dimension;
    arg.itemStack?.getComponent(`cooldown`)?.startCooldown(SCP066);
    const location = { x: SCP066.location.x, y: SCP066.location.y, z: SCP066.location.z };
    const SoundOptions = {
      location,
      volume: 1
    };
    const RandomNum = Math.random();
    let NoteAllID = ["066N1", "066N1", "066N2", "066N6"];
    let NoteID = NoteAllID[Math.floor(NoteAllID.length * RandomNum)];
    PlaySoundForAllPlayer(`${NoteID}`);
  }
};
var SCP066MusicAttack = {
  onUse: (arg) => {
    const SCP066 = arg.source;
    const dimension = arg.source.dimension;
    arg.itemStack?.getComponent(`cooldown`)?.startCooldown(SCP066);
    const location = { x: SCP066.location.x, y: SCP066.location.y, z: SCP066.location.z };
    const SoundOptions = {
      location,
      volume: 1
    };
    const ViewDirection = SCP066.getViewDirection();
    const DirectionX = -ViewDirection.x;
    const DirectionZ = -ViewDirection.z;
    const VectorXZ3 = {
      x: -DirectionX * 0,
      z: -DirectionZ * 0
    };
    PlaySoundForAllPlayer("066B");
    let AttackNum = 20;
    function SCP066Attack() {
      if (AttackNum > 0) {
        dimension.runCommand(`execute as @a[tag=scp066] at @s run damage @e[r=10,tag=!scp] 2 magic entity @s`);
        AttackNum--;
        system8.runTimeout(() => {
          SCP066Attack();
        }, 20);
      }
    }
    SCP066Attack();
  }
};
var SCP066RushStick = {
  onUse: (arg) => {
    const SCP066 = arg.source;
    const dimension = arg.source.dimension;
    arg.itemStack?.getComponent(`cooldown`)?.startCooldown(SCP066);
    const location = { x: SCP066.location.x, y: SCP066.location.y, z: SCP066.location.z };
    const ViewDirection = SCP066.getViewDirection();
    if (SCP066.isOnGround) {
      const VectorXZ3 = {
        x: ViewDirection.x * 7,
        z: ViewDirection.z * 7
      };
      SCP066.applyKnockback(VectorXZ3, 0);
    }
    let Target = void 0;
    let CatchTarget;
    CatchTarget = system8.runInterval(() => {
      const SCP066CurrentLocation = SCP066.location;
      const EntityQueryOptions3 = {
        excludeNames: [`${SCP066.name}`],
        excludeTags: ["scp"],
        location: SCP066CurrentLocation,
        maxDistance: 1,
        minDistance: 0
      };
      let Targets;
      Targets = Array.from(overworld7.getEntities(EntityQueryOptions3));
      if (Targets.length > 0) {
        system8.clearRun(CatchTarget);
        Target = Targets[0];
        Targets = void 0;
        SCP066Stick();
      }
    }, 1);
    system8.runTimeout(() => {
      system8.clearRun(CatchTarget);
    }, 7);
    let StickNum = 10 * 20;
    function SCP066Stick() {
      const TargetHealth = Target?.getComponent("minecraft:health")?.currentValue;
      if (StickNum > 0 && TargetHealth > 0) {
        const TargetViewDirection = Target?.getViewDirection();
        const TargetPosition = Target?.location;
        const OppositeDirection = {
          x: -TargetViewDirection.x,
          y: -TargetViewDirection.y,
          z: -TargetViewDirection.z
        };
        const length = Math.sqrt(OppositeDirection.x ** 2 + OppositeDirection.y ** 2 + OppositeDirection.z ** 2);
        const NormalizedDirection = {
          x: OppositeDirection.x / length,
          y: OppositeDirection.y / length,
          z: OppositeDirection.z / length
        };
        const Offset = {
          x: NormalizedDirection.x * 0.5,
          y: NormalizedDirection.y * 0.5,
          z: NormalizedDirection.z * 0.5
        };
        const TeleportLocation = {
          x: TargetPosition.x + Offset.x,
          y: TargetPosition.y + Offset.y + 0.5,
          z: TargetPosition.z + Offset.z
        };
        SCP066.teleport(TeleportLocation);
        StickNum--;
        dimension.runCommand(`title @a[tag=scp066] actionbar \u7C98\u6027\u5269\u4F59\u65F6\u95F4\uFF1A${Math.floor(StickNum / 20)}s`);
        system8.runTimeout(() => {
          SCP066Stick();
        }, 1);
      } else {
        Target = void 0;
      }
    }
  }
};
var ChangeModels = {
  onUse: (arg) => {
    const player = arg.source;
    const playerAny = arg.source;
    let ModalForm;
    if (player.hasTag("scp066")) {
      ModalForm = new ActionFormData3().title("SCP-066\u6A21\u578B\u66F4\u6362\u5668").body("\u9009\u62E9\u8981\u66F4\u6362\u7684\u6A21\u578B").button("\u65E7\u7248\u6A21\u578B", "textures/icons/scp066_old.png").button("\u65B0\u7248\u6A21\u578B", "textures/icons/scp066.png");
    }
    ModalForm?.show(playerAny).then((response) => {
      if (player.hasTag("scp066")) {
        switch (response.selection) {
          case 0:
            player.runCommand(
              `replaceitem entity "${player.name}" slot.armor.head 0 icon:scp_066_old 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
            break;
          case 1:
            player.runCommand(
              `replaceitem entity "${player.name}" slot.armor.head 0 icon:scp_066 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
        }
      }
    });
  }
};
var OpenCustomizeMenu = {
  onUse: (arg) => {
    const player = arg.source;
    ShowCustomizeMenu(player);
  }
};

// scripts/mode_control/vote_change.ts
import { system as system9, world as world10 } from "@minecraft/server";
import { ActionFormData as ActionFormData4 } from "@minecraft/server-ui";
function VoteChangeMode() {
  const votes = {
    entropyIncreases: 0,
    // EI模式票数
    inbreak: 0,
    // Inbreak模式票数
    infection: 0
    // Infection模式票数
  };
  const votedPlayers = /* @__PURE__ */ new Set();
  const VOTE_DURATION = 300;
  const VOTE_UPDATE_INTERVAL = 40;
  const voteInterval = system9.runInterval(() => {
    world10.sendMessage(
      `\xA7e\u6295\u7968\u7EDF\u8BA1: \xA7bEI-${votes.entropyIncreases} \xA72Inbreak-${votes.inbreak} \xA7cInfection-${votes.infection}`
    );
  }, VOTE_UPDATE_INTERVAL);
  const voteMenu = new ActionFormData4().title("\u6A21\u5F0F\u6295\u7968").header("\xA7a\u9009\u62E9\u4E0B\u4E00\u56DE\u5408\u6E38\u620F\u6A21\u5F0F").button("\xA7bEntropy_Increases\n\xA7b\u65B0\u6536\u5BB9\u5931\u6548\u6A21\u5F0F").button("\xA72Inbreak\n\xA72\u5165\u4FB5\u6A21\u5F0F").button("\xA7cInfection\n\xA7c\u611F\u67D3\u6A21\u5F0F");
  for (const player of world10.getAllPlayers()) {
    if (votedPlayers.has(player.id))
      continue;
    voteMenu.show(player).then((response) => {
      if (response.selection === void 0)
        return;
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
      const votedFor = ["\xA7bEntropy_Increases", "\xA72Inbreak", "\xA7cInfection"][response.selection];
      player.sendMessage(`\xA7a\u4F60\u5DF2\u6295\u7968: ${votedFor}`);
    }).catch(() => {
    });
  }
  system9.runTimeout(() => {
    system9.clearRun(voteInterval);
    const voteResults = [
      { mode: Entropy_Increases, votes: votes.entropyIncreases, name: "\xA7bEntropy_Increases" },
      { mode: Inbreak, votes: votes.inbreak, name: "\xA72Inbreak" },
      { mode: Infection, votes: votes.infection, name: "\xA7cInfection" }
    ];
    voteResults.sort((a, b) => b.votes - a.votes);
    const winningMode = voteResults[0];
    setGameMode(winningMode.mode);
    world10.sendMessage(`\xA7e\u6295\u7968\u7ED3\u675F\uFF01\u4E0B\u4E00\u56DE\u5408\u6A21\u5F0F: \xA7l${winningMode.name}`);
  }, VOTE_DURATION);
}

// scripts/items_function/spray_can.ts
import {
  EntityDamageCause as EntityDamageCause2,
  system as system10,
  world as world11
} from "@minecraft/server";
function sprayCanComponentRegistry() {
  system10.beforeEvents.startup.subscribe((arg) => {
    arg.itemComponentRegistry.registerCustomComponent("ei:spray_can", SprayOnUse);
  });
}
var SprayPlayerState = /* @__PURE__ */ new Map();
var SprayOnUse = {
  onUse: (arg) => {
    const player = arg.source;
    const playerId = player.name;
    const dimension = player.dimension;
    const item = arg.itemStack;
    const itemId = item?.typeId;
    const selectSlotIndex = player.selectedSlotIndex;
    const sprayId = itemId.replace("ei:spray_", "");
    const oldId = SprayPlayerState.get(playerId);
    if (oldId !== void 0) {
      try {
        system10.clearRun(oldId);
      } catch {
      }
      SprayPlayerState.delete(playerId);
    }
    SprayPlayerState.set(
      playerId,
      system10.runInterval(() => {
        spray_shot(sprayId);
      }, 2)
    );
    function spray_shot(type) {
      const location = player.location;
      const PlayerViewDirection = player.getViewDirection();
      dimension.playSound("spray_Hiss", location);
      spawnBulletTrail(player.getHeadLocation(), PlayerViewDirection, 4, 0.2, dimension);
      const RaycastOptions = {
        maxDistance: 4,
        includeLiquidBlocks: false,
        excludeNames: [player.name],
        excludeTypes: ["minecraft:item"],
        ignoreBlockCollision: false
      };
      const EntityApplyDamageOptions3 = {
        cause: EntityDamageCause2.selfDestruct,
        damagingEntity: player
      };
      const entityRaycastHitArray = dimension.getEntitiesFromRay(
        player.getHeadLocation(),
        PlayerViewDirection,
        RaycastOptions
      );
      for (const entityRaycastHit of entityRaycastHitArray) {
        const ViewDirection = entityRaycastHit.entity.getViewDirection();
        const DirectionX = -ViewDirection.x;
        const DirectionZ = -ViewDirection.z;
        const VectorXZ3 = {
          x: -DirectionX * 0,
          z: -DirectionZ * 0
        };
        switch (type) {
          case "fire_extinguisher":
            if (entityRaycastHit.entity.hasTag("scp457")) {
              entityRaycastHit.entity.applyDamage(2, EntityApplyDamageOptions3);
              entityRaycastHit.entity.applyKnockback(VectorXZ3, 0);
            } else {
              entityRaycastHit.entity.addEffect("slowness", 2, { amplifier: 2 });
              entityRaycastHit.entity.applyKnockback(VectorXZ3, 0);
            }
            break;
          case "lavender":
            if (entityRaycastHit.entity.hasTag("scp049")) {
              entityRaycastHit.entity.addEffect("slowness", 100, { amplifier: 3 });
              entityRaycastHit.entity.addEffect("weakness", 100, { amplifier: 3 });
            }
            break;
          case "poison":
            if (!entityRaycastHit.entity.hasTag("scp173") || !entityRaycastHit.entity.hasTag("scp939"))
              entityRaycastHit.entity.addEffect("fatal_poison", 200, { amplifier: 1 });
        }
      }
    }
  }
};
world11.afterEvents.itemStopUse.subscribe((arg) => {
  const player = arg.source;
  const item = arg.itemStack;
  if (SprayPlayerState.get(player.name) !== void 0) {
    system10.clearRun(SprayPlayerState.get(player.name));
  }
});
world11.afterEvents.entityDie.subscribe((arg) => {
  const dead = arg.deadEntity;
  if (dead.typeId === "minecraft:player") {
    const playerName = dead.name;
    if (SprayPlayerState.has(playerName)) {
      system10.clearRun(SprayPlayerState.get(playerName));
      SprayPlayerState.delete(playerName);
    }
  }
});
world11.afterEvents.playerLeave.subscribe((arg) => {
  const playerName = arg.playerName;
  if (SprayPlayerState.has(playerName)) {
    system10.clearRun(SprayPlayerState.get(playerName));
    SprayPlayerState.delete(playerName);
  }
});
function spawnBulletTrail(origin, direction, range, step = 0.5, dimension) {
  const steps = Math.floor(range / step);
  const startOffset = 1.5;
  try {
    for (let i = 0; i < steps; i += 5) {
      const offset = startOffset + i * step;
      const x = origin.x + direction.x * offset;
      const y = origin.y + direction.y * offset;
      const z = origin.z + direction.z * offset;
      const particleId = i === 0 ? "minecraft:elephant_tooth_paste_vapor_particle" : "minecraft:elephant_tooth_paste_vapor_particle";
      const block = dimension.getBlock({ x: Math.floor(x), y: Math.floor(y), z: Math.floor(z) });
      if (block && !block.isAir) {
        break;
      }
      dimension.spawnParticle(particleId, { x, y, z });
    }
  } catch {
  }
}

// scripts/entities/scp035.ts
import { world as world12, EquipmentSlot as EquipmentSlot2, ItemStack as ItemStack2, ItemLockMode } from "@minecraft/server";
function equipSCP035OnInteract() {
  world12.afterEvents.playerInteractWithEntity.subscribe((arg) => {
    const player = arg.player;
    const dimension = player.dimension;
    const entity = arg.target;
    const itemStack = arg.itemStack;
    if (entity.typeId === "ei:scp035_entity" && !player.hasTag("scp")) {
      entity.kill();
      RemoveAllTags(player);
      player.addTag("scp");
      player.addTag("scp035");
      player.runCommand(`clear "${player.name}"`);
      player.runCommand(`effect "${player.name}" instant_health 1 255 true`);
      player.runCommand(`effect "${player.name}" resistance 5 255 true`);
      const scp035 = new ItemStack2("ei:scp035", 1);
      scp035.lockMode = ItemLockMode.slot;
      scp035.keepOnDeath = true;
      const headSlot = player.getComponent("minecraft:equippable")?.getEquipmentSlot(EquipmentSlot2.Head);
      headSlot?.setItem(scp035);
      player.onScreenDisplay.setTitle(SCP_035.title);
      player.onScreenDisplay.updateSubtitle(`${SCP_035.subtitle}
${SCP_035.target_tip}`);
      for (let slot = SCP_035.inventory[0]; slot < SCP_035.inventory[1]; slot++) {
        dimension.runCommand(
          `replaceitem entity "${player.name}" slot.inventory ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
        );
      }
      for (let slot = SCP_035.hotbar[0]; slot < SCP_035.hotbar[1]; slot++) {
        dimension.runCommand(
          `replaceitem entity "${player.name}" slot.hotbar ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
        );
      }
      for (let i = 0; i < SCP_035.items.length; i++) {
        dimension.runCommand(
          `give "${player.name}" ${SCP_035.items[i][0]} ${SCP_035.items[i][1]} 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
        );
      }
      for (let i = 0; i < SCP_035.armor.length; i++) {
        dimension.runCommand(
          `replaceitem entity "${player.name}" ${SCP_035.armor[i][0]} 0 ${SCP_035.armor[i][1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
        );
      }
    }
  });
  world12.afterEvents.entityDie.subscribe((arg) => {
    const deadEntity = arg.deadEntity;
    const location = deadEntity.location;
    const dimension = deadEntity.dimension;
    if (deadEntity.hasTag("scp035")) {
      const scp035Entity = deadEntity;
      dimension.spawnEntity("ei:scp035_entity", { x: location.x, y: location.y + 1, z: location.z });
    }
  });
}

// scripts/main.ts
var overworld8;
var nether8;
var theEnd8;
equipSCP035OnInteract();
RegisterCustomComponent();
SpawnCorpseOnPlayerDeath();
sprayCanComponentRegistry();
world13.afterEvents.worldLoad.subscribe(() => {
  LoadSkinInfo();
  DefaultPlayerSkinDataLoad();
  overworld8 = world13.getDimension("overworld");
  nether8 = world13.getDimension("nether");
  theEnd8 = world13.getDimension("the_end");
});
var Entropy_Increases = {
  PreTimeDef: 70,
  RoundTimeDef: 1800,
  ResetTimeDef: 60
};
var Inbreak = {
  PreTimeDef: 60,
  RoundTimeDef: 720,
  ResetTimeDef: 60
};
var Infection = {
  PreTimeDef: 30,
  RoundTimeDef: 720,
  ResetTimeDef: 60
};
var Version = "v1.7.0";
var Dev = ["Ectrico"];
var SecondUnit = 19;
var GameMode3 = Entropy_Increases;
function setGameMode(mode) {
  GameMode3 = mode;
}
var Maps = { Site_15: "Site-15", Site_217: "Site-217" };
var Map2 = Maps.Site_15;
world13.afterEvents.worldLoad.subscribe(() => {
  overworld8.runCommand(`kill @e[type=item]`);
  ResetPlayer();
});
var PreTimeDef = 60;
var RoundTimeDef = 1800;
var ResetTimeDef = 60;
var PreTime;
var ResetTime;
var RoundTime;
function InitializePreTime() {
  PreTime = GameMode3.PreTimeDef;
  PreTime++;
}
function InitializeResetTime() {
  ResetTime = GameMode3.ResetTimeDef;
  ResetTime++;
}
function InitializeRoundTime() {
  RoundTime = GameMode3.RoundTimeDef;
  RoundTime++;
}
InitializeResetTime();
var ResetTimeIntervalId;
function ResetTimeReduce() {
  ResetTimeIntervalId = system12.runInterval(() => {
    ResetTime--;
    overworld8.runCommand(`title @a actionbar \u91CD\u7F6E\u65F6\u95F4\uFF1A${ResetTime}`);
    if (ResetTime === 0) {
      system12.clearRun(ResetTimeIntervalId);
      let PlayerNum = 0;
      let DevNum = 0;
      for (const player of world13.getAllPlayers()) {
        if (player.hasTag("dev")) {
          DevNum++;
        } else {
          PlayerNum++;
        }
      }
      if (PlayerNum > 1) {
        InitializePreTime();
        PreTimeReduce();
      } else {
        world13.sendMessage(`\xA76\u65E0\u6CD5\u542F\u52A8\u5BF9\u5C40\uFF0C\u5F53\u524D\u6E38\u620F\u4EBA\u6570\u4E0D\u8DB32\u4EBA\u3002`);
        world13.sendMessage(`\xA7e\u5728\u7EBF\u5F00\u53D1\u72B6\u6001\u73A9\u5BB6\u6570\uFF1A${DevNum}`);
        ServerNowPlayerDetect = 1;
      }
    }
  }, SecondUnit);
}
var PreTimeIntervalId;
function PreTimeReduce() {
  PreTimeIntervalId = system12.runInterval(() => {
    PreTime--;
    overworld8.runCommand(`title @a actionbar \u51C6\u5907\u65F6\u95F4\uFF1A${PreTime}`);
    if (PreTime === 0) {
      system12.clearRun(PreTimeIntervalId);
      InitializeRoundTime();
      RoundTimeReduce();
      RoundTimeState = true;
    }
  }, SecondUnit);
}
var RoundTimeIntervalId;
var RoundTimeState = false;
function RoundTimeReduce() {
  RoundTimeIntervalId = system12.runInterval(() => {
    RoundTime--;
    overworld8.runCommand(
      `title @a actionbar \u56DE\u5408\u65F6\u95F4\uFF1A ${Math.floor(RoundTime / 60)}:${RoundTime % 60 < 10 ? "0" : ""}${RoundTime % 60}`
    );
    if (RoundTime === 0) {
      system12.clearRun(RoundTimeIntervalId);
      RoundTimeState = false;
      InitializeResetTime();
      ResetTimeReduce();
    }
  }, SecondUnit);
}
ResetTimeReduce();
var CustomSupportLimit;
var PreTimeStart = 1;
var EnableDeadCount = 0;
system12.runInterval(() => {
  if (PreTime === GameMode3.PreTimeDef && PreTimeStart === 1) {
    let player = world13.getAllPlayers();
    if (GameMode3 === Entropy_Increases) {
      world13.sendMessage(`\xA7b[BGM] \xA7eOpening Credits - Hans Zimmer,Lorne Balfe`);
      PlaySoundForAllPlayer("OC");
      player.forEach((player2) => {
        const position = player2.location;
        const playerID = player2.name;
        system12.runTimeout(() => {
          overworld8.runCommand(
            `playsound "AL2" "${playerID}" ${position.x.toFixed(2)} ${position.y.toFixed(2)} ${position.z.toFixed(
              2
            )} 100`
          );
          overworld8.runCommand(`camerashake add "${playerID}" 0.05 60`);
        }, SecondUnit * 10);
      });
      overworld8.runCommand(`title @a times 0 200 0`);
      overworld8.runCommand(`title @a title \xA7eGameMode - \xA7eSCP: Entropy_Increases`);
      overworld8.runCommand(`title @a subtitle \xA7e\u6E38\u620F\u6A21\u5F0F - \xA7eSCP: \u71B5\u589E - ${Version}`);
      world13.sendMessage(`\xA7e\u6E38\u620F\u6A21\u5F0F - \xA7eSCP: \u71B5\u589E - \xA7bFission_Track\u5DE5\u4F5C\u5BA4\u9879\u76EE\u4F5C\u54C1 - \xA76#help\u83B7\u53D6\u6A21\u5F0F\u5E2E\u52A9`);
      system12.runTimeout(() => {
        world13.sendMessage(
          `\xA7e[ANNOUNCE] \xA7cThe site is experiencing multiple Keter and Euclid-level containment breaches. Full-site lockdown initiated.`
        );
        let LimitAverage = Math.floor(player.length / 4);
        if (LimitAverage < 1) {
          LimitAverage = 1;
        }
        system12.runTimeout(() => {
          CustomSupportLimit = LimitAverage;
          spawn_res();
        }, 1);
        system12.runTimeout(() => {
          CustomSupportLimit = LimitAverage;
          SpawnRandomSCP(LimitAverage);
        }, 2);
        system12.runTimeout(() => {
          CustomSupportLimit = LimitAverage;
          support_guard();
        }, 3);
        system12.runTimeout(() => {
          CustomSupportLimit = 27;
          spawn_classd();
          CustomSupportLimit = void 0;
        }, 4);
      }, SecondUnit * 10);
    }
    if (GameMode3 === Inbreak) {
      world13.sendMessage(`\xA7b[BGM] \xA7eHummell Gets the Rockets (Alan Walker Remix) - Hans Zimmer,Alan Walker`);
      player.forEach((player2) => {
        const position = player2.location;
        const playerID = player2.name;
        overworld8.runCommand(
          `playsound "Hummell Gets the Rockets" "${playerID}" ${position.x.toFixed(2)} ${position.y.toFixed(
            2
          )} ${position.z.toFixed(2)} 100`
        );
      });
      overworld8.runCommand(`title @a times 0 200 0`);
      overworld8.runCommand(`title @a title \xA7eGameMode - \xA72SCP: Inbreak`);
      overworld8.runCommand(`title @a subtitle \xA7e\u6E38\u620F\u6A21\u5F0F - \xA72SCP: \u5165\u4FB5 - 1.0.0`);
      world13.sendMessage(`\xA7e\u6E38\u620F\u6A21\u5F0F - \xA72SCP: \u5165\u4FB5 - \xA7bFission_Track\u5DE5\u4F5C\u5BA4\u5F00\u6E90\u9879\u76EE\u4F5C\u54C1 - \xA76#help\u83B7\u53D6\u6A21\u5F0F\u5E2E\u52A9`);
      let LimitAverage = Math.floor(player.length / 4);
      if (LimitAverage < 1) {
        LimitAverage = 1;
      }
      system12.runTimeout(() => {
        CustomSupportLimit = LimitAverage;
        support_guard();
      }, SecondUnit * 10);
      system12.runTimeout(() => {
        CustomSupportLimit = 2 * LimitAverage;
        support_ci();
      }, 250);
      system12.runTimeout(() => {
        CustomSupportLimit = void 0;
      }, 300);
    }
    if (GameMode3 === Infection) {
      world13.sendMessage(`\xA7b[BGM] \xA7eBriefing [Black Mesa - Blue Shift Bonus OST] - Daver`);
      player.forEach((player2) => {
        const position = player2.location;
        const playerID = player2.name;
        overworld8.runCommand(
          `playsound "Briefing" "${playerID}" ${position.x.toFixed(2)} ${position.y.toFixed(2)} ${position.z.toFixed(
            2
          )} 100`
        );
      });
      overworld8.runCommand(`title @a times 0 200 0`);
      overworld8.runCommand(`title @a title \xA7eGameMode - \xA7cSCP: Infection`);
      overworld8.runCommand(`title @a subtitle \xA7e\u6E38\u620F\u6A21\u5F0F - \xA7cSCP: \u611F\u67D3 - 0.1.0`);
      world13.sendMessage(`\xA7e\u6E38\u620F\u6A21\u5F0F - \xA7cSCP: \u611F\u67D3 - \xA7bFission_Track\u5DE5\u4F5C\u5BA4\u9879\u76EE\u4F5C\u54C1 - \xA76#help\u83B7\u53D6\u6A21\u5F0F\u5E2E\u52A9`);
      let LimitAverage = Math.floor(player.length / 2);
      if (LimitAverage < 1) {
        LimitAverage = 1;
      }
      system12.runTimeout(() => {
        spawn008_1(
          world13.getAllPlayers()[Math.floor(Math.random() * world13.getAllPlayers().length)],
          SpawnPointSCP008_1[0]
        );
        system12.runTimeout(() => {
          CustomSupportLimit = LimitAverage;
          support_guard();
        }, SecondUnit * 10);
        system12.runTimeout(() => {
          spawn_classd();
        }, 50);
        system12.runTimeout(() => {
          CustomSupportLimit = void 0;
        }, 100);
      }, 200);
    }
    EnableDeadCount = 1;
    PreTimeStart = 0;
  }
}, 1);
var RoundTimeStart = 1;
var VictoryDecision = 0;
var VictoryDecision2 = 1;
system12.runInterval(() => {
  if (RoundTime === GameMode3.RoundTimeDef && RoundTimeStart === 1) {
    world13.sendMessage(`\xA7e\u6E38\u620F\u5F00\u59CB`);
    overworld8.runCommand(`title @a times 0 200 0`);
    overworld8.runCommand(`title @a title \xA7eGame Start. Good Luck\uFF01.`);
    if (GameMode3 === Entropy_Increases) {
      BreachActivat();
    }
    if (GameMode3 === Inbreak) {
      overworld8.runCommand(`title @a subtitle \xA7bMTF\u4E5D\u5C3E\u72D0\u673A\u52A8\u7279\u9063\u961F\u5DF2\u8FDB\u5165\u8BBE\u65BD`);
      support_ntf();
    }
    if (GameMode3 === Infection) {
      world13.sendMessage(
        `\xA7e[ANNOUNCE]\xA7c\u8BBE\u65BD\u906D\u9047SCP-008\u75C5\u6BD2\u6CC4\u9732\uFF0C\xA7e\u8BF7\u8BBE\u65BD\u5185\u7684\u6240\u6709D\u7EA7\u4EBA\u5458\u4E0E\u5B89\u4FDD\u4EBA\u5458\u5408\u4F5C\uFF0C\xA76\u6740\u6B7B\u6240\u6709SCP-008\u5B9E\u4F53`
      );
      world13.sendMessage(
        `\xA7e[ANNOUNCE]\xA7c\u8BBE\u65BD\u906D\u9047SCP-008\u75C5\u6BD2\u6CC4\u9732\uFF0C\xA7e\u8BF7\u8BBE\u65BD\u5185\u7684\u6240\u6709D\u7EA7\u4EBA\u5458\u4E0E\u5B89\u4FDD\u4EBA\u5458\u5408\u4F5C\uFF0C\xA76\u6740\u6B7B\u6240\u6709SCP-008\u5B9E\u4F53`
      );
      world13.sendMessage(
        `\xA7e[ANNOUNCE]\xA7c\u8BBE\u65BD\u906D\u9047SCP-008\u75C5\u6BD2\u6CC4\u9732\uFF0C\xA7e\u8BF7\u8BBE\u65BD\u5185\u7684\u6240\u6709D\u7EA7\u4EBA\u5458\u4E0E\u5B89\u4FDD\u4EBA\u5458\u5408\u4F5C\uFF0C\xA76\u6740\u6B7B\u6240\u6709SCP-008\u5B9E\u4F53`
      );
    }
    let player = world13.getAllPlayers();
    player.forEach((player2) => {
      const position = player2.location;
      const playerID = player2.name;
      overworld8.runCommand(
        `playsound "Bell2" "${playerID}" ${position.x.toFixed(2)} ${position.y.toFixed(2)} ${position.z.toFixed(2)} 100`
      );
    });
    RoundTimeStart = 0;
    system12.runTimeout(() => {
      VictoryDecision = 1;
      VictoryDecision2 = 1;
    }, 100);
  }
}, 1);
var RoundTime660 = 1;
system12.runInterval(() => {
  if (GameMode3 === Inbreak) {
    if (RoundTime === 660 && RoundTime660 === 1) {
      const AllPlayer = world13.getAllPlayers();
      for (const Player11 of AllPlayer) {
        const PlayerID = Player11.name;
        const position = Player11.location;
        overworld8.runCommand(
          `playsound "ACC" "${PlayerID}" ${position.x.toFixed(2)} ${position.y.toFixed(2)} ${position.z.toFixed(2)} 100`
        );
      }
      world13.sendMessage(
        `\xA7e[ANNOUNCE] \xA7bControl to NTF. We are now checking the camera feeds for potential threats. You should see any unauthorized intruders or escapees pinged on your navigation devices.`
      );
      RoundTime660 = 0;
    }
  }
}, 2);
var RoundTime620 = 1;
system12.runInterval(() => {
  if (GameMode3 === Inbreak) {
    if (RoundTime === 620 && RoundTime620 === 1) {
      const RandomDelay = Math.random() * 1e3;
      system12.runTimeout(() => {
        support_random();
      }, RandomDelay);
      RoundTime620 = 0;
    }
  }
}, 2);
var RoundTime500 = 1;
system12.runInterval(() => {
  if (GameMode3 === Inbreak) {
    if (RoundTime === 500 && RoundTime500 === 1) {
      const RandomDelay = Math.random() * 1e3;
      system12.runTimeout(() => {
        support_random();
      }, RandomDelay);
      const AllPlayer = world13.getAllPlayers();
      for (const Player11 of AllPlayer) {
        const PlayerID = Player11.name;
        const position = Player11.location;
        overworld8.runCommand(
          `playsound "HGTR" "${PlayerID}" ${position.x.toFixed(2)} ${position.y.toFixed(2)} ${position.z.toFixed(
            2
          )} 100`
        );
      }
      world13.sendMessage(`\xA7b[BGM] \xA7eHummell Gets The Rockets - Nick Glennie-Smith,Hans Zimmer,Harry Gregson-Williams`);
      RoundTime500 = 0;
    }
  }
}, 2);
var RoundTime480 = 1;
system12.runInterval(() => {
  if (GameMode3 === Inbreak) {
    if (RoundTime === 480 && RoundTime480 === 1) {
      FacilityDetect();
      RoundTime480 = 0;
    }
  }
  if (GameMode3 === Infection) {
    if (RoundTime === 380 && RoundTime380 === 1) {
      const RandomDelay = Math.random() * 1e3;
      system12.runTimeout(() => {
        support_ntf();
        PlaySoundForAllPlayer("The_Keeper");
        world13.sendMessage(`\xA7b[BGM] \xA7eThe Keeper [Black Mesa - Blue Shift OST] - Daver`);
      }, RandomDelay);
      RoundTime380 = 0;
    }
  }
}, 2);
var RoundTime380 = 1;
system12.runInterval(() => {
  if (GameMode3 === Inbreak) {
    if (RoundTime === 380 && RoundTime380 === 1) {
      const RandomDelay = Math.random() * 1e3;
      system12.runTimeout(() => {
        support_random();
      }, RandomDelay);
      RoundTime380 = 0;
    }
  }
}, 2);
system12.runInterval(() => {
  if (GameMode3 === Inbreak) {
    if (RoundTime === 300 && RoundTime300 === 1) {
      FacilityDetect();
      RoundTime300 = 0;
    }
  }
}, 2);
var RoundTime260 = 1;
system12.runInterval(() => {
  if (GameMode3 === Inbreak) {
    if (RoundTime === 260 && RoundTime260 === 1) {
      const RandomDelay = Math.random() * 1e3;
      system12.runTimeout(() => {
        support_random();
      }, RandomDelay);
      RoundTime260 = 0;
    }
  }
}, 2);
var RoundTime240 = 1;
system12.runInterval(() => {
  if (GameMode3 === Infection) {
    if (RoundTime === 240 && RoundTime240 === 1) {
      const RandomDelay = Math.random() * 1e3;
      system12.runTimeout(() => {
        support_ntf();
        PlaySoundForAllPlayer("Flammable");
        world13.sendMessage(`\xA7b[BGM] \xA7eFlammable [Black Mesa - Blue Shift OST] - Daver`);
      }, RandomDelay);
      RoundTime240 = 0;
    }
  }
}, 2);
var RoundTime140 = 1;
system12.runInterval(() => {
  if (GameMode3 === Inbreak) {
    if (RoundTime === 140 && RoundTime140 === 1) {
      const RandomDelay = Math.random() * 1e3;
      system12.runTimeout(() => {
        support_random();
      }, RandomDelay);
      RoundTime140 = 0;
    }
  }
}, 2);
system12.runInterval(() => {
  if (GameMode3 === Inbreak) {
    if (RoundTime === 120 && RoundTime120 === 1) {
      FacilityDetect();
      RoundTime120 = 0;
    }
  }
}, 2);
var RandomSupport = 1;
var RoundTime1500 = 1;
var RoundTime1000 = 1;
var RoundTime900 = 1;
var RoundTime600 = 1;
var RoundTime300 = 1;
var RoundTime180 = 1;
var RoundTime150 = 1;
var RoundTime120 = 1;
system12.runInterval(() => {
  if (GameMode3 === Entropy_Increases) {
    if (RoundTime <= 1500 && RoundTime % 300 === 0 && RoundTime !== 600 && RandomSupport === 1 && RoundTimeState === true) {
      RandomSupport = 0;
      let RandomTimeout = Math.random() * (SecondUnit * 50);
      system12.runTimeout(() => {
        support_random();
      }, RandomTimeout);
    }
    if (RoundTime <= 1500 + 1 && (RoundTime - 1) % 300 === 0 && RoundTimeState === true) {
      RandomSupport = 1;
    }
    if (RoundTime === 1500 && RoundTime1500 === 1) {
      RoundTime1500 = 0;
      world13.sendMessage(`\xA7b[BGM] \xA7eAttack - Hans Zimmer`);
      PlaySoundForAllPlayer("Attack");
    }
    if (RoundTime === 1e3 && RoundTime1000 === 1) {
      RoundTime1000 = 0;
      world13.sendMessage(`\xA7b[BGM] \xA7eHummell Gets The Rockets - Nick Glennie-Smith,Hans Zimmer,Harry Gregson-Williams`);
      PlaySoundForAllPlayer("HGTR");
    }
    if (RoundTime === 900 && RoundTime900 === 1) {
      RoundTime900 = 0;
      EmergencyExitDoorSet("enable");
    }
    if (RoundTime === 600 && RoundTime600 === 1) {
      RoundTime600 = 0;
      let RandomTimeout = Math.random() * (SecondUnit * 50);
      system12.runTimeout(() => {
        support_rrh();
      }, RandomTimeout);
      world13.sendMessage(`\xA7b[BGM] \xA7eTime - Hans Zimmer`);
      PlaySoundForAllPlayer("Time");
    }
    if (RoundTime === 180 && RoundTime180 === 1) {
      RoundTime180 = 0;
      const AllPlayer = world13.getAllPlayers();
      for (const Player11 of AllPlayer) {
        const PlayerID = Player11.name;
        const position = Player11.location;
        overworld8.runCommand(
          `playsound "WYEK" "${PlayerID}" ${position.x.toFixed(2)} ${position.y.toFixed(2)} ${position.z.toFixed(
            2
          )} 100`
        );
      }
      world13.sendMessage(`\xA7b[BGM] \xA7eWould You Even Know - Michael Wyckoff,Veronica Goudie`);
    }
    if (RoundTime === 150 && RoundTime150 === 1) {
      RoundTime150 = 0;
      OmegaWarheadDeactivated();
    }
    if (RoundTime === 120 && RoundTime120 === 1) {
      RoundTime120 = 0;
      AlphaWarheadDeactivated();
    }
  }
}, 2);
var ResetTimeStart = 1;
var Team = {
  Foundation: "\xA7bSCP\u57FA\u91D1\u4F1A",
  CI: "\xA72\u6DF7\u6C8C\u5206\u88C2\u8005",
  SCP: "\xA7cSCP",
  Unknown: "\xA7f\u65E0"
};
var VictoryTeam;
system12.runInterval(() => {
  if (ResetTime === GameMode3.ResetTimeDef && ResetTimeStart === 1) {
    let AllPlayers = world13.getAllPlayers();
    system12.runTimeout(() => {
      VictoryDecision = 0;
    }, 5);
    overworld8.runCommand(`title @a times 0 1200 0`);
    overworld8.runCommand(`stopsound @a`);
    overworld8.runCommand(`title @a title \xA7eGame Over\uFF01`);
    overworld8.runCommand(`title @a subtitle \xA7e\u6E38\u620F\u7ED3\u675F\uFF0C\u8BF7\u7B49\u5F85\u4E0B\u4E00\u56DE\u5408\u5F00\u59CB\uFF01`);
    world13.sendMessage(`\xA7c\u6E38\u620F\u7ED3\u675F`);
    world13.sendMessage(`\xA7e=============================`);
    world13.sendMessage(` `);
    if (VictoryTeam === void 0) {
      VictoryTeam = Team.Unknown;
    }
    world13.sendMessage(`\u672C\u56DE\u5408\u80DC\u5229\u9635\u8425\uFF1A ${VictoryTeam}`);
    if (GameMode3 === Inbreak) {
      world13.sendMessage(`\u672C\u6B21\u8BBE\u65BD\u653B\u51FB\u5171\u9020\u6210\uFF1A ${DeadCount} \u4EBA\u6B7B\u4EA1`);
    }
    world13.sendMessage(` `);
    if (AllPlayers.length >= 7) {
      if (Math.random() < 0.55) {
        RewardDrops();
        world13.sendMessage(`\xA7f\u5982\u679C\u4E2D\u5956, \u8BF7\u5C06\u622A\u56FE\u79C1\u4FE1\u4E8EQQ\u7FA4\u4E3B, `);
      } else {
        world13.sendMessage(`\xA76\u6CA1\u6709\u5956\u52B1\u7269\u54C1\u6389\u843D\u3002`);
      }
    } else {
      world13.sendMessage(`\xA76\u7531\u4E8E\u6E38\u620F\u4EBA\u6570\u4F4E\u4E8E7\u4EBA, \u65E0\u6CD5\u8FDB\u884C\u5956\u52B1\u7269\u54C1\u6389\u843D\u3002`);
    }
    world13.sendMessage(` `);
    world13.sendMessage(`\xA7e=============================`);
    AllPlayers.forEach((player) => {
      const position = player.location;
      const playerID = player.name;
      overworld8.runCommand(
        `playsound "Bell1" "${playerID}" ${position.x.toFixed(2)} ${position.y.toFixed(2)} ${position.z.toFixed(2)} 100`
      );
    });
    EnableDeadCount = 0;
    DeadCount = 0;
    ResetTimeStart = 0;
    RandomSupport = 0;
  }
}, 2);
var ResetTime5 = 1;
var ResetTime40 = 1;
system12.runInterval(() => {
  if (ResetTime === 40 && ResetTime40 === 1) {
    ResetTime40 = 0;
    VoteChangeMode();
  }
  if (ResetTime === 5 && ResetTime5 === 1) {
    overworld8.runCommand(`gamemode spectator @a[tag=!dev]`);
    ResetTime5 = 0;
    for (const player of world13.getAllPlayers()) {
      ClearAllTag(player);
    }
    LoadSkinInfo();
    ClearAllItems();
    EleBoxFuseReset();
    EleBoxWireReset();
    EmergencyExitDoorSet("disable");
    LeverReset();
    AlphaWarheadReset();
    OmegaWarheadReset();
    OmegaWarheadRemoteReset();
    GateA_Reset();
    FireDoorReset();
    ClearAllCorpse();
    SCP914Clear();
    SCP035Clear();
    world13.setDynamicProperty("scp106telepoint", void 0);
    system12.runTimeout(() => {
      RandomItemSpawn();
      FixedItemSpawn();
      SCP035Spawn();
    }, 60);
  }
}, 2);
function ResetEvent() {
  ResetTimeStart = 1;
  ResetTime40 = 1;
  ResetTime5 = 1;
  PreTimeStart = 1;
  RoundTimeStart = 1;
  RoundTime1500 = 1;
  RoundTime1000 = 1;
  RoundTime900 = 1;
  RoundTime660 = 1;
  RoundTime620 = 1;
  RoundTime600 = 1;
  RoundTime500 = 1;
  RoundTime480 = 1;
  RoundTime380 = 1;
  RoundTime300 = 1;
  RoundTime260 = 1;
  RoundTime240 = 1;
  RoundTime180 = 1;
  RoundTime140 = 1;
  RoundTime150 = 1;
  RoundTime120 = 1;
  RandomSupport = 1;
  RoundTimeState = false;
}
system12.runInterval(() => {
  if (ResetTime === 1) {
    ResetPlayer();
    overworld8.runCommand(`kill @e[type=item]`);
    ResetEvent();
  }
}, 0);
system12.runInterval(() => {
  if (VictoryDecision === 1) {
    let foundNtf = false;
    let foundCi = false;
    let foundSCP = false;
    const players = world13.getPlayers();
    if (players.length === 0) {
      return;
    }
    if (GameMode3 === Infection) {
      for (const player of players) {
        if (player.hasTag("sci") || player.hasTag("allguard") || player.hasTag("allntf") || player.hasTag("allsne") || player.hasTag("allrrh") || player.hasTag("allgoc") || player.hasTag("allclassd")) {
          foundNtf = true;
        }
        if (player.hasTag("scp")) {
          foundSCP = true;
        }
        if (foundNtf && foundSCP) {
          break;
        }
      }
    } else {
      for (const player of players) {
        if (player.hasTag("sci") || player.hasTag("allguard") || player.hasTag("allntf") || player.hasTag("allsne") || player.hasTag("allrrh") || player.hasTag("allgoc")) {
          foundNtf = true;
        }
        if (player.hasTag("allclassd") || player.hasTag("allci")) {
          foundCi = true;
        }
        if (player.hasTag("scp")) {
          foundSCP = true;
        }
        if (foundNtf && foundCi && foundSCP) {
          break;
        }
      }
    }
    const remainingTeams = [foundNtf, foundCi, foundSCP].filter(Boolean).length;
    if (remainingTeams === 1 && VictoryDecision2 === 1) {
      if (foundNtf) {
        SCPFoundationVictory();
      } else if (foundCi) {
        CIVictory();
      } else if (foundSCP) {
        SCPVictory();
      }
    }
  }
}, 0);
function CIVictory() {
  VictoryTeam = Team.CI;
  InitializeRound();
  VictoryDecision2 = 0;
}
function SCPFoundationVictory() {
  VictoryTeam = Team.Foundation;
  InitializeRound();
  VictoryDecision2 = 0;
}
function SCPVictory() {
  VictoryTeam = Team.SCP;
  InitializeRound();
  VictoryDecision2 = 0;
}
function InitializeRound() {
  overworld8.runCommand(`kill @e[type=item]`);
  ResetPlayer();
  if (ResetTime > 0 && ResetTime < ResetTimeDef) {
    system12.clearRun(ResetTimeIntervalId);
  }
  if (PreTime > 0 && PreTime < PreTimeDef) {
    system12.clearRun(PreTimeIntervalId);
  }
  if (RoundTime > 0 && PreTime < RoundTimeDef) {
    system12.clearRun(RoundTimeIntervalId);
  }
  ResetEvent();
  InitializeResetTime();
  ResetTimeReduce();
  world13.sendMessage("\xA7e[GameMode]>_: \xA7fRound Restarted.");
}
function ResetPlayer() {
  for (const player of world13.getAllPlayers()) {
    const PlayerID = player.name;
    for (let i = 0; i < AllClassesTag.length; i++) {
      overworld8.runCommand(`tag "${PlayerID}" remove ${AllClassesTag[i]}`);
    }
  }
}
function ForceStart() {
  InitializePreTime();
  PreTimeReduce();
}
world13.afterEvents.chatSend.subscribe((arg) => {
  const sender = arg.sender;
  const senderID = arg.sender.name;
  const message = arg.message;
  const Operator = sender.hasTag("operator");
  if (message === "#help") {
    sender.sendMessage(`\xA7e============\u6A21\u5F0F\u6307\u4EE4\u5E2E\u52A9\u83DC\u5355============`);
    sender.sendMessage(` `);
    sender.sendMessage(`-----------\u5E38\u89C4\u6307\u4EE4-----------`);
    sender.sendMessage(`\xA7b#version - \u67E5\u770B\u6E38\u620F\u6A21\u5F0F\u7248\u672C\xA77`);
    sender.sendMessage(`\xA77[\u65E0\u6548]#customize - \u6253\u5F00\u81EA\u5B9A\u4E49\u4E2A\u6027\u5316\u83DC\u5355\xA77`);
    sender.sendMessage(`-----------\u7BA1\u7406\u5458\u6307\u4EE4-----------`);
    sender.sendMessage(`\xA7e#round restart - \u91CD\u542F\u56DE\u5408\xA77`);
    sender.sendMessage(`\xA7e#spawn support random - \u5F3A\u5236\u5237\u65B0\u652F\u63F4\uFF1A\u968F\u673A\xA77`);
    sender.sendMessage(`\xA7e#spawn support ntf - \u5F3A\u5236\u5237\u65B0\u652F\u63F4\uFF1ANTF\xA77`);
    sender.sendMessage(`\xA7e#spawn support sne - \u5F3A\u5236\u5237\u65B0\u652F\u63F4\uFF1ASNE\xA77`);
    sender.sendMessage(`\xA7e#spawn support rrh - \u5F3A\u5236\u5237\u65B0\u652F\u63F4\uFF1ARRH\xA77`);
    sender.sendMessage(`\xA7e#spawn support ci - \u5F3A\u5236\u5237\u65B0\u652F\u63F4\uFF1ACI\xA77`);
    sender.sendMessage(`\xA7e#spawn support sh - \u5F3A\u5236\u5237\u65B0\u652F\u63F4\uFF1A\u86C7\u4E4B\u624B\xA77`);
    sender.sendMessage(`\xA7e#spawn res - \u5F3A\u5236\u5237\u65B0\uFF1AResearcher\xA77`);
    sender.sendMessage(`\xA7e#spawn classd - \u5F3A\u5236\u5237\u65B0\uFF1AClass D\xA77`);
    sender.sendMessage(`\xA7e#spawn guard - \u5F3A\u5236\u5237\u65B0\uFF1A\u5B89\u4FDD\u4EBA\u5458\xA77`);
    sender.sendMessage(`\xA7e#spawn scp173 - \u5F3A\u5236\u5237\u65B0\uFF1ASCP-173\xA77`);
    sender.sendMessage(`\xA7e#spawn scp457 - \u5F3A\u5236\u5237\u65B0\uFF1ASCP-457\xA77`);
    sender.sendMessage(`\xA7e#spawn scp066 - \u5F3A\u5236\u5237\u65B0\uFF1ASCP-066\xA77(\u5168\u5C40\u96501)`);
    sender.sendMessage(`\xA7e#spawn scp066 - \u5F3A\u5236\u5237\u65B0\uFF1ASCP-049\xA77(\u5168\u5C40\u96501)`);
    sender.sendMessage(`\xA7e#spawn scp966 - \u5F3A\u5236\u5237\u65B0\uFF1ASCP-966\xA77`);
    sender.sendMessage(`\xA7e#spawn scp106 - \u5F3A\u5236\u5237\u65B0\uFF1ASCP-106\xA77`);
    sender.sendMessage(`\xA7e#spawn scp035 - \u5F3A\u5236\u5237\u65B0\uFF1ASCP-035\xA77`);
    sender.sendMessage(`\xA7e#spawn scp008-1 <PlayerID> - \u5F3A\u5236\u5237\u65B0\uFF1ASCP-008-1\xA77`);
    sender.sendMessage(`\xA7e#force start - \u5F3A\u5236\u542F\u52A8\u56DE\u5408\xA77`);
    sender.sendMessage(`\xA7e#time skip reset - \u65F6\u95F4\u63A7\u5236\uFF1A\u8DF3\u8FC7\u91CD\u7F6E\u65F6\u95F4\xA77`);
    sender.sendMessage(`\xA7e#time skip pre - \u5F3A\u5236\u5237\u65B0\uFF1A\u8DF3\u8FC7\u51C6\u5907\u65F6\u95F4\xA77`);
    sender.sendMessage(`\xA7e#time skip round - \u5F3A\u5236\u5237\u65B0\uFF1A\u8DF3\u8FC7\u56DE\u5408\u65F6\u95F4\xA77`);
    sender.sendMessage(`\xA7e#time set <type> <number> - \u8BBE\u7F6E<type>\u7684\u65F6\u95F4\u4E3A...\xA77`);
    sender.sendMessage(`\xA7e#facility scan - \u626B\u63CF\u8BBE\u65BD\xA77`);
    sender.sendMessage(`\xA7e#exp get <PlayerID> - \u83B7\u53D6\u73A9\u5BB6\u7ECF\u9A8C\u7B49\u7EA7\u6570\u636E\xA77`);
    sender.sendMessage(`\xA7e#exp set exp/level <PlayerID> <value> - \u8BBE\u7F6E\u73A9\u5BB6\u7ECF\u9A8C/\u7B49\u7EA7\xA77`);
    sender.sendMessage(`\xA7e#exp add exp <PlayerID> <value> - \u4E3A\u73A9\u5BB6\u6DFB\u52A0\u7ECF\u9A8C\xA77`);
    sender.sendMessage(`\xA7e#drops random - \u968F\u673A\u5237\u65B0\u5956\u52B1\u6389\u843D\xA77`);
    sender.sendMessage(`\xA7e#skin set <PlayerID> <SkinID> <true/false> - \u8BBE\u7F6E\u73A9\u5BB6\u81EA\u5B9A\u4E49\u76AE\u80A4\u72B6\u6001\xA77`);
    sender.sendMessage(` `);
    sender.sendMessage(`\xA7e================End\uFF01=================`);
  }
  if (message === "#test") {
    SpawnRandomSCP(7);
  }
  if (message === "#version") {
    world13.sendMessage(`\xA7e[GameMode]>_: \xA7fSCP: Inbreak ${Version}`);
  }
  if (message === "#customize") {
    ShowCustomizeMenu(sender);
    world13.sendMessage(`\xA7e[GameMode]>_: \xA7fCustom Menu Opened.`);
  }
  if ((Dev.includes(senderID) || Operator) && message === "#round restart") {
    InitializeRound();
  }
  if ((Dev.includes(senderID) || Operator) && message === "#spawn support random") {
    support_random();
    world13.sendMessage("\xA7e[GameMode]>_: \xA7fSupport has been Spawned.");
  }
  if ((Dev.includes(senderID) || Operator) && message === "#spawn support ntf") {
    support_ntf();
    world13.sendMessage("\xA7e[GameMode]>_: \xA7fNTF has been Spawned.");
  }
  if ((Dev.includes(senderID) || Operator) && message === "#spawn support sne") {
    support_sne();
    world13.sendMessage("\xA7e[GameMode]>_: \xA7fSNE has been Spawned.");
  }
  if ((Dev.includes(senderID) || Operator) && message === "#spawn support rrh") {
    support_rrh();
    world13.sendMessage("\xA7e[GameMode]>_: \xA7fRRH has been Spawned.");
  }
  if ((Dev.includes(senderID) || Operator) && message === "#spawn support ci") {
    support_ci();
    world13.sendMessage("\xA7e[GameMode]>_: \xA7fCI has been Spawned.");
  }
  if ((Dev.includes(senderID) || Operator) && message === "#spawn support goc") {
    support_goc();
    world13.sendMessage("\xA7e[GameMode]>_: \xA7fGOC has been Spawned.");
  }
  if ((Dev.includes(senderID) || Operator) && message === "#spawn support sh") {
    support_sh();
    world13.sendMessage("\xA7e[GameMode]>_: \xA7fSerpent's Hand has been Spawned.");
  }
  if ((Dev.includes(senderID) || Operator) && message === "#spawn res") {
    spawn_res();
    world13.sendMessage("\xA7e[GameMode]>_: \xA7fResearcher has been Spawned.");
  }
  if ((Dev.includes(senderID) || Operator) && message === "#spawn classd") {
    spawn_classd();
    world13.sendMessage("\xA7e[GameMode]>_: \xA7fClass D has been Spawned.");
  }
  if ((Dev.includes(senderID) || Operator) && message === "#spawn guard") {
    support_guard();
    world13.sendMessage("\xA7e[GameMode]>_: \xA7fGuard has been Spawned.");
  }
  if ((Dev.includes(senderID) || Operator) && message === "#spawn scp173") {
    spawn173();
    world13.sendMessage("\xA7e[GameMode]>_: \xA7fSCP-173 has been Spawned.");
  }
  if ((Dev.includes(senderID) || Operator) && message === "#spawn scp457") {
    spawn457();
    world13.sendMessage("\xA7e[GameMode]>_: \xA7fSCP-457 has been Spawned.");
  }
  if ((Dev.includes(senderID) || Operator) && message === "#spawn scp066") {
    spawn066();
    world13.sendMessage("\xA7e[GameMode]>_: \xA7fSCP-066 has been Spawned.");
  }
  if ((Dev.includes(senderID) || Operator) && message === "#spawn scp049") {
    spawn049();
    world13.sendMessage("\xA7e[GameMode]>_: \xA7fSCP-049 has been Spawned.");
  }
  if ((Dev.includes(senderID) || Operator) && message === "#spawn scp966") {
    spawn966();
    world13.sendMessage("\xA7e[GameMode]>_: \xA7fSCP-966 has been Spawned.");
  }
  if ((Dev.includes(senderID) || Operator) && message === "#spawn scp106") {
    spawn106();
    world13.sendMessage("\xA7e[GameMode]>_: \xA7fSCP-106 has been Spawned.");
  }
  if ((Dev.includes(senderID) || Operator) && message === "#spawn scp096") {
    spawn096();
    world13.sendMessage("\xA7e[GameMode]>_: \xA7fSCP-096 has been Spawned.");
  }
  if ((Dev.includes(senderID) || Operator) && message === "#spawn scp035") {
    spawn035();
    world13.sendMessage("\xA7e[GameMode]>_: \xA7fSCP-035 has been Spawned.");
  }
  if ((Dev.includes(senderID) || Operator) && message.split(" ")[0] === "#spawn" && message.split(" ")[1] === "scp008-1") {
    const playerId = message.split(" ")[2];
    for (const player of world13.getAllPlayers()) {
      if (player.name === playerId) {
        spawn008_1(player, SpawnPointSCP008_1[0]);
        world13.sendMessage("\xA7e[GameMode]>_: \xA7fSCP-008-1 has been Spawned.");
      }
    }
  }
  if ((Dev.includes(senderID) || Operator) && message === "#force start") {
    ForceStart();
    world13.sendMessage("\xA7e[GameMode]>_: \xA7fForce Started.");
  }
  if ((Dev.includes(senderID) || Operator) && message === "#time skip reset") {
    ResetTime = 7;
    world13.sendMessage("\xA7e[GameMode]>_: \xA7fResetTime Skiped.");
  }
  if ((Dev.includes(senderID) || Operator) && message === "#time skip pre") {
    PreTime = 1;
    world13.sendMessage("\xA7e[GameMode]>_: \xA7fPreTime Skiped.");
  }
  if ((Dev.includes(senderID) || Operator) && message === "#time skip round") {
    RoundTime = 1;
    world13.sendMessage("\xA7e[GameMode]>_: \xA7fRoundTime Skiped.");
  }
  if ((Dev.includes(senderID) || Operator) && message.split(" ")[0] === "#time" && message.split(" ")[1] === "set") {
    const SetTime = Number(message.split(" ")[3]);
    if (message.split(" ")[2] === "reset") {
      ResetTime = SetTime;
    }
    if (message.split(" ")[2] === "pre") {
      PreTime = SetTime;
    }
    if (message.split(" ")[2] === "round") {
      RoundTime = SetTime;
    }
  }
  if ((Dev.includes(senderID) || Operator) && message === "#facility scan") {
    world13.sendMessage("\xA7e[GameMode]>_: \xA7fFacility Scan Complete!");
    FacilityDetect();
  }
  if ((Dev.includes(senderID) || Operator) && message.split(" ")[0] === "#exp") {
    let state = "undefined";
    if (message.split(" ")[1] === "get") {
      sender.sendMessage(
        `\xA7e[GameMode]>_: \xA7f\u73A9\u5BB6\uFF1A${message.split(" ")[2]} \u7ECF\u9A8C\uFF1A${ExpGetExp(
          `${message.split(" ")[2]}`
        )} \u7B49\u7EA7\uFF1A${ExpGetLevel(`${message.split(" ")[2]}`)}`
      );
    } else if (message.split(" ")[1] === "set") {
      if (message.split(" ")[2] === "exp") {
        ExpSetExp(`${message.split(" ")[3]}`, Number(message.split(" ")[4]));
        sender.sendMessage(
          `\xA7e[GameMode]>_: \xA7f\u5DF2\u5C06\u73A9\u5BB6\uFF1A${message.split(" ")[3]} \u7684\u7ECF\u9A8C\u70B9\u6570\u8BBE\u7F6E\u4E3A ${message.split(" ")[4]}`
        );
        sender.sendMessage(
          `\xA7e[GameMode]>_: \xA7f\u73A9\u5BB6\uFF1A${message.split(" ")[3]} \u73B0\u6709\u7ECF\u9A8C\u70B9\u6570\uFF1A${ExpGetExp(message.split(" ")[3])}`
        );
      } else if (message.split(" ")[2] === "level") {
        ExpSetLevel(`${message.split(" ")[3]}`, Number(message.split(" ")[4]));
      }
    } else if (message.split(" ")[1] === "add") {
      if (message.split(" ")[2] === "exp") {
        ExpAddExp(`${message.split(" ")[3]}`, Number(message.split(" ")[4]));
        sender.sendMessage(
          `\xA7e[GameMode]>_: \xA7f\u5DF2\u4E3A\u73A9\u5BB6\uFF1A${message.split(" ")[3]} \u6DFB\u52A0\u7ECF\u9A8C\u70B9\u6570 ${message.split(" ")[4]}`
        );
        sender.sendMessage(
          `\xA7e[GameMode]>_: \xA7f\u73A9\u5BB6\uFF1A${message.split(" ")[3]} \u73B0\u6709\u7ECF\u9A8C\u70B9\u6570\uFF1A${ExpGetExp(
            message.split(" ")[3]
          )} \u7B49\u7EA7\uFF1A${ExpGetLevel(message.split(" ")[3])}`
        );
      }
    } else {
      "undefined";
    }
  }
  if ((Dev.includes(senderID) || Operator) && message === "#drops random") {
    world13.sendMessage("\xA7e[GameMode]>_: \xA7fDroped!");
    RewardDrops();
  }
  if ((Dev.includes(senderID) || Operator) && message.split(" ")[0] === "#skin" && message.split(" ")[1] === "set") {
    let state = "undefined";
    if (message.split(" ")[4] === "true") {
      state = SkinStateString.true;
    } else if (message.split(" ")[4] === "false") {
      state = SkinStateString.false;
    } else {
      "undefined";
    }
    SetSkinState(message.split(" ")[2], message.split(" ")[3], state);
    world13.sendMessage(`\xA7e[GameMode]>_: \xA7fSkin Set \xA7b${message.split(" ")[2]} - ${message.split(" ")[3]} - ${state}!`);
  }
});
var EIRaycast173 = 1;
var EIBLINKING = 1;
var EIBlinkTime = 10;
function EIBlink() {
  if (EIBlinkTime > 0) {
    system12.runTimeout(() => {
      if (EIBLINKING === 1) {
        EIBlinkTime--;
      }
      EIBlink();
    }, 20);
  }
  if (EIBlinkTime === 0) {
    EIRaycast173 = 0;
    EIBlinkTime = 10;
    const AllPlayers = world13.getAllPlayers();
    for (const Player11 of AllPlayers) {
      overworld8.runCommand(`camera @a[tag=!scp] fade time 0 0.5 0 color 0 0 0`);
    }
    system12.runTimeout(() => {
      EIBlink();
      EIRaycast173 = 1;
    }, 10);
  }
}
EIBlink();
world13.afterEvents.worldLoad.subscribe(() => {
  system12.runInterval(() => {
    try {
      overworld8.runCommand(`effect @a[hasitem={item=bli:yeshiyi,location=slot.armor.head}] night_vision 15 255 true`);
      overworld8.runCommand(`effect @a[hasitem={item=bli:scp268,location=slot.weapon.offhand}] invisibility 1 0 true`);
      overworld8.runCommand(`effect @a[tag=scp] night_vision 15 255 true`);
      overworld8.runCommand(`effect @a[hasitem={item=bli:scp714,location=slot.weapon.offhand}] slowness 2 0 true`);
      overworld8.runCommand(`effect @a[tag=scp173] health_boost 100000 94 true`);
      overworld8.runCommand(`effect @a[tag=scp,tag=!sh,tag=!scp049_2,tag=!scp049_2_f] health_boost 100000 44 true`);
      overworld8.runCommand(`effect @a[tag=scp173] invisibility 3 255 true`);
      overworld8.runCommand(`effect @a[tag=scp173] speed 3 10 true`);
      const result = overworld8.runCommand(
        `execute as @a[tag=scp173] at @s run damage @e[r=1,tag=!scp] 100 entity_attack entity @s`
      );
      if (result.successCount > 0) {
        overworld8.runCommand(`execute as @a[tag=scp173] at @s run playsound NS3 @a ~ ~ ~`);
      }
      if (EIRaycast173 === 1) {
        HumanRaycast();
      }
      SCP457Burning();
      overworld8.runCommand(`effect @a[tag=scp457] invisibility 3 255 true`);
      overworld8.runCommand(`effect @a[tag=scp066] invisibility 3 255 true`);
      overworld8.runCommand(`effect @a[tag=scp066] slowness 3 0 true`);
      overworld8.runCommand(`effect @a[tag=scp049] invisibility 3 255 true`);
      overworld8.runCommand(`effect @a[tag=scp049_2] invisibility 3 255 true`);
      overworld8.runCommand(`effect @a[tag=scp049_2_f] invisibility 3 255 true`);
      overworld8.runCommand(`effect @a[tag=scp049_2_s] invisibility 3 255 true`);
      overworld8.runCommand(`effect @a[tag=scp049_2_f] speed 3 0 true`);
      overworld8.runCommand(`effect @a[tag=scp049_2_s] slowness 3 2 true`);
      SCP966Raycast();
      overworld8.runCommand(`effect @a[tag=scp966] invisibility 3 255 true`);
      overworld8.runCommand(`effect @a[tag=scp966] slowness 3 0 true`);
      overworld8.runCommand(`effect @a[tag=scp966] strength 2 1 true`);
      overworld8.runCommand(`effect @a[tag=scp106] invisibility 3 255 true`);
      overworld8.runCommand(`effect @a[tag=scp106] slowness 3 0 true`);
      overworld8.runCommand(
        `execute as @a[tag=scp106] at @s run tp @a[tag=!scp,m=!spectator,r=1] ${Pocket_Dimension.Pocket.x} ${Pocket_Dimension.Pocket.y} ${Pocket_Dimension.Pocket.z}`
      );
      overworld8.runCommand(`effect @a[tag=scp096] invisibility 3 255 true`);
      SCP096Raycast();
      overworld8.runCommand(`effect @a[tag=scp035] health_boost 100000 25 true`);
      overworld8.runCommand(`effect @a[tag=scp035] hunger 3 3 true`);
      overworld8.runCommand(`clear @a[tag=scp035] first_aid_kit_medic`);
      overworld8.runCommand(`effect @a[tag=scp008_1] invisibility 3 255 true`);
    } catch {
    }
  }, 1);
  system12.runInterval(() => {
    SCP106Noclip();
    PocketDimensionTeleport();
    CheckPointTeleport();
    EscapeFacility();
    HelipadEvacuate();
    ShowNameTagClasses();
    OmegaWarheadEnd();
    LibraryTeleport();
    EEOpenSpawnGOC();
  }, 7);
});
var ServerNowPlayerDetect = 0;
world13.afterEvents.worldLoad.subscribe(() => {
  system12.runInterval(() => {
    overworld8.runCommand(`effect @a saturation 10000 255 true`);
    const ServerNowPlayer = world13.getAllPlayers();
    if (ServerNowPlayerDetect === 1) {
      let PlayerNum = 0;
      let DevNum = 0;
      for (const Player11 of ServerNowPlayer) {
        if (Player11.hasTag("dev")) {
          DevNum++;
        } else {
          PlayerNum++;
        }
      }
      if (PlayerNum > 1) {
        InitializeRound();
        ServerNowPlayerDetect = 0;
      }
    }
    overworld8.runCommand(`effect @a[tag=scp173] instant_health 3 0 true`);
    overworld8.runCommand(`effect @a[tag=scp035] poison 2 2 true`);
  }, 100);
  system12.runInterval(() => {
    overworld8.runCommand(`execute as @a[tag=scp173] at @s run playsound 173R @a ~ ~ ~`);
  }, 180);
  system12.runInterval(() => {
    overworld8.runCommand(`execute as @a[tag=scp049] at @s run playsound 049C @a ~ ~ ~`);
  }, 500);
  system12.runInterval(() => {
    overworld8.runCommand(`execute as @a[tag=scp106] at @s run playsound 106C @a ~ ~ ~`);
  }, 700);
  system12.runInterval(() => {
    AddExpOfMinute();
  }, 3600);
});
function OmegaWarheadEnd() {
  if (RoundTime > 150) {
    const OmegaWarheadTerminal = overworld8.getBlock(Terminal.OmegaWarhead);
    const TerminalState = OmegaWarheadTerminal?.permutation.getState("ft:warhead_state");
    if (TerminalState === "detonated") {
      RoundTime = 5;
      world13.sendMessage(`\u5BF9\u5C40\u56E0Omega\u6838\u5F39\u7684\u5F15\u7206\u800C\u7ED3\u675F\uFF01`);
    }
  }
}
world13.afterEvents.playerJoin.subscribe((arg) => {
  const player = arg.playerName;
  overworld8.runCommand(`kill "${player}"`);
  system12.runTimeout(() => {
    for (let i = 0; i < AllClassesTag.length; i++) {
      overworld8.runCommand(`tag "${player}" remove ${AllClassesTag[i]}`);
    }
  }, 300);
});
var DeadCount = 0;
world13.afterEvents.entityDie.subscribe((arg) => {
  const DiedEntity = arg.deadEntity;
  if (DiedEntity.typeId === "minecraft:player") {
    const DiedPlayer = DiedEntity;
    const DiedPlayerID = DiedPlayer.name;
    system12.runTimeout(() => {
      overworld8.runCommand(`clear "${DiedPlayerID}"`);
    }, 20);
    const DiedPlayerTags = DiedEntity.getTags();
    let DiedPlayerClasses;
    DiedPlayerClasses = ClassesName(DiedEntity);
    world13.sendMessage(`\xA7c*DIED* \xA7f[${DiedPlayerClasses}\xA7f] \xA7f${DiedPlayerID}`);
    system12.runTimeout(() => {
      for (let i = 0; i < AllClassesTag.length; i++) {
        DiedEntity.removeTag(`${AllClassesTag[i]}`);
      }
    }, 20);
    if (EnableDeadCount === 1) {
      DeadCount++;
    }
  }
});
world13.afterEvents.playerSpawn.subscribe((arg) => {
  const RespawnPlayer = arg.player;
  const RespawnPlayerID = arg.player.name;
  if (!RespawnPlayer.hasTag("dev")) {
    overworld8.runCommand(`gamemode spectator "${RespawnPlayerID}"`);
  }
  RespawnPlayer.addTag("spectator");
  overworld8.runCommand(`title "${RespawnPlayerID}" times 0 200 0`);
  overworld8.runCommand(`title "${RespawnPlayerID}" title Spectator`);
  overworld8.runCommand(`title "${RespawnPlayerID}" subtitle \u4F60\u73B0\u5728\u662F\u65C1\u89C2\u8005\uFF0C\u8BF7\u7B49\u5F85\u590D\u6D3B...`);
});
function RewardDrops() {
  const AllPlayers = world13.getAllPlayers();
  const RandomPlayer = AllPlayers[Math.floor(AllPlayers.length * Math.random())];
  Drops(RandomPlayer.name);
}
function EscapeRewardDrops(RandomPlayer) {
  Drops(RandomPlayer);
}
function Drops(player) {
  const CurrentTime = /* @__PURE__ */ new Date();
  const DropProbability = Math.random();
  let RandomItem;
  function DropsMassage() {
    world13.sendMessage(
      `\xA7d[\u6389\u843D\u5956\u52B1] \xA7a\u606D\u559C \xA7b${player} \xA7a\u83B7\u5F97 ${RandomItem} \xA7a--- ${CurrentTime.getFullYear()}-${CurrentTime.getMonth() + 1}-${CurrentTime.getDate()} --- ${CurrentTime.getHours()}${CurrentTime.getMinutes()}`
    );
  }
  if (DropProbability < 0.03) {
    RandomItem = "\xA7b[FTRF-INFRA-Script x 1]";
    DropsMassage();
    PlaySoundForAllPlayer("Challenge_complete");
  } else if (DropProbability > 0.1 && DropProbability < 0.11) {
    RandomItem = "\xA7e[FTRF-Site-217_Ultra Edition x 1]";
    DropsMassage();
    PlaySoundForAllPlayer("Challenge_complete");
  } else if (DropProbability > 0.15 && DropProbability < 0.17) {
    RandomItem = "\xA7e[FT-Site-15_Standard Edition x 1]";
    DropsMassage();
    PlaySoundForAllPlayer("Challenge_complete");
  } else if (DropProbability > 0.3 && DropProbability < 0.6) {
    RandomItem = "\xA7g[\u7FA4\u81EA\u5B9A\u4E49\u5934\u8854 x 1]";
    DropsMassage();
  } else if (DropProbability > 0.99 && DropProbability < 1) {
    RandomItem = "\xA7c[\u53F2\u8BD7]HK-MP7 Miku 16th\xA7f x 1";
    SetSkinState(player, SkinList.HK_MP7_Miku16th, SkinStateString.true);
    DropsMassage();
    PlaySoundForAllPlayer("Challenge_complete");
  } else if (DropProbability > 0.98 && DropProbability < 0.99) {
    RandomItem = "\xA7c[\u53F2\u8BD7]M4A1-S PrintStream\xA7g\xA7f x 1";
    SetSkinState(player, SkinList.M4A1_S_PrintStream, SkinStateString.true);
    DropsMassage();
    PlaySoundForAllPlayer("Challenge_complete");
  } else if (DropProbability > 0.97 && DropProbability < 0.98) {
    RandomItem = "\xA7c[\u53F2\u8BD7]M4A1-S Genshin Furina \u8299\u5B81\u5A1C\xA7f x 1";
    SetSkinState(player, M4A1_S_SkinList[1].id, SkinStateString.true);
    DropsMassage();
    PlaySoundForAllPlayer("Challenge_complete");
  } else if (DropProbability > 0.92 && DropProbability < 0.97) {
    RandomItem = "\xA7b[\u9650\u5B9A]Reverse Vertin \u7EF4\u5C14\u6C40\xA7f x 1";
    SetSkinState(player, M4A1_S_SkinList[2].id, SkinStateString.true);
    DropsMassage();
  } else if (DropProbability > 0.87 && DropProbability < 0.92) {
    RandomItem = "\xA7b[\u9650\u5B9A]\u5C11\u5973\u524D\u7EBF Lunsia \u9732\u5C3C\u897F\u4E9A\xA7f x 1";
    SetSkinState(player, M4A1_SkinList[0].id, SkinStateString.true);
    DropsMassage();
  } else if (DropProbability > 0.84 && DropProbability < 0.87) {
    RandomItem = "\xA7d[\u7A00\u6709]Clear Water \u6F84\u6F88\u4E4B\u6C34\xA7f x 1";
    SetSkinState(player, M4A1_S_SkinList[3].id, SkinStateString.true);
    DropsMassage();
  } else if (DropProbability > 0.74 && DropProbability < 0.84) {
    RandomItem = "\xA7s[\u666E\u901A]Forest Camo \u4E1B\u6797\u8FF7\u5F69\xA7f x 1";
    SetSkinState(player, M4A1_S_SkinList[4].id, SkinStateString.true);
    DropsMassage();
  } else if (DropProbability > 0.64 && DropProbability < 0.74) {
    RandomItem = "\xA7s[\u666E\u901A]Urban_Digital \u57CE\u5E02\u6570\u7801\xA7f x 1";
    SetSkinState(player, M4A1_S_SkinList[5].id, SkinStateString.true);
    DropsMassage();
  } else {
    world13.sendMessage(`\xA76\u6CA1\u6709\u5956\u52B1\u7269\u54C1\u6389\u843D\u3002`);
  }
}
export {
  CustomSupportLimit,
  Entropy_Increases,
  EscapeRewardDrops,
  GameMode3 as GameMode,
  Inbreak,
  Infection,
  Map2 as Map,
  Maps,
  OmegaWarheadEnd,
  PreTime,
  ResetTime,
  RoundTime,
  SecondUnit,
  setGameMode
};

//# sourceMappingURL=../debug/main.js.map
