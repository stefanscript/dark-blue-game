import Level from "./Level";
import {simpleLevelPlan} from "./levelPlans";

let simpleLevel = new Level(simpleLevelPlan);
console.log(`${simpleLevel.width} by ${simpleLevel.height}`);