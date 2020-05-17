import Player from "./Player";
import Coin from "./Coin";
import Lava from "./Lava";

const levelChars = {
    ".": "empty", "#": "wall", "+": "lava",
    "@": Player, "o": Coin,
    "=": Lava, "|": Lava, "v": Lava
};

export default levelChars;