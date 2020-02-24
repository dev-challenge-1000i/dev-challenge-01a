import {
  getRandomItem,
  getUniqueRandomItems,
  prefixes, skills, suffixes
} from './samples';
import { ProjectInterface } from '../model/project';

export function createRandomProjectData(length: number = 5): Array<ProjectInterface> {
  const result = [];
  for (let i = 0; i < length; ++i) {
    const prefix = getRandomItem(prefixes);
    const suffix = getRandomItem(suffixes);
    const requiredSkills = getUniqueRandomItems(skills, Math.floor(Math.random() * skills.length));
    result.push({ name: `${prefix} ${suffix}`, requiredSkills } as ProjectInterface);
  }
  return result;
}
