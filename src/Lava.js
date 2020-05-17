import Vector from "./Vector";

class Lava {
    constructor(pos, speed, reset) {
        this.pos = pos;
        this.speed = speed;
        this.reset = reset;
    }
    
    get type() {
        return "lava";
    }
    
    static create(pos, ch) {
        if (ch === "=") {
            return new Lava(pos, new Vector(2, 0));
        } else if (ch === "|") {
            return new Lava(pos, new Vector(0, 2));
        } else if (ch === "v") {
            return new Lava(pos, new Vector(0, 3), pos);
        }
    }
}

Lava.prototype.size = new Vector(1, 1);

export default Lava;