import Vector from "./Vector";
import levelChars from "./levelChars";

class Level {
    constructor(plan) {
        let rows = plan.trim().split("\n").map(line => [...line]);
        this.height = rows.length;
        this.width = rows[0].length;
        this.startActors = [];
        
        this.rows = rows.map((row, y) => {
            return row.map((character, x) => {
                let type = levelChars[character];
                if (typeof type == "string") return type;
                this.startActors.push(
                    type.create(new Vector(x, y), character));
                return "empty";
            });
        })
    }
}

export default Level;