import { DeveloperInterface } from '../model/developer';
import {
  domains,
  getRandomFirstNamesPalette,
  getRandomItem, getUniqueRandomItems,
  lastNames,
  tlds,
  skills as availableSkills
} from './samples';

export function createRandomDeveloperData(length: number = 5): Array<DeveloperInterface> {
  const result = [];
  for (let i = 0; i < length; ++i) {
    const firstName = getRandomItem(getRandomFirstNamesPalette());
    const lastName = getRandomItem(lastNames);
    const skills = getUniqueRandomItems(availableSkills, Math.floor(Math.random() * availableSkills.length));
    const email = `${firstName}.${lastName}@${getRandomItem(domains)}.${getRandomItem(tlds)}`.toLowerCase();
    result.push({ email, firstName, lastName, skills } as DeveloperInterface);
  }
  return result;
}
