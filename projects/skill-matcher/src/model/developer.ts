import { PersonInterface } from "./person";
import { Skill } from "./skill";

export interface DeveloperInterface extends PersonInterface {
  skills: Array<Skill>
}
