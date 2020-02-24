import { Skill } from '../model/skill';

export const maleFirstNames = [
  'Johnathan', 'Frank', 'Will', 'Hulk', 'Jerry',
  'Teodor', 'Philip', 'Hector', 'Alfred', 'Wilfred'
];

export const femaleFirstNames = [
  'Angela', 'Ashley', 'Hannah', 'Isabel', 'Frances',
  'Merry', 'Jenny', 'Evelyn', 'Tatiana', 'Wendy'
];

export const lastNames = [
  'Smith', 'Jonhson', 'Chan', 'Abbott', 'Davis',
  'Perry', 'Abrams', 'Symons', 'Tucker', 'Tyson', 'Walsh'
];

export const domains = [
  'example', 'lorem', 'ipsum', 'dolor', 'amet'
];

export const tlds = [
  'com', 'code', 'org', 'io', 'cool'
];

export const prefixes = [
  'Acme', 'Awesome', 'Alpha', 'Beta', 'Omega', 'Web', 'Epsilon'
];

export const suffixes = [
  'Awesome', 'Pink', 'Blue', 'Yellow', 'Purple', 'Project', 'Global'
];

export const skills = [
  Skill.PYTHON,
  Skill.RUST,
  Skill.HASKELL,
  Skill.JAVA,
  Skill.KOTLIN,
  Skill.CRYSTAL,
  Skill.PASCAL,
  Skill.C_SHARP
];

export function getRandomFirstNamesPalette(): Array<string> {
  return (Math.random() > 0.5) ? maleFirstNames : femaleFirstNames;
}

export function getRandomItem(values: Array<any>): any {
  return values[Math.floor(Math.random() * values.length)]
}

export function getUniqueRandomItems(palette: Array<any>, howMany: number): Array<any> {
  const uniquePalette = palette.filter(
    (item, i, ar) => ar.indexOf(item) === i
  );
  if (uniquePalette.length < howMany) {
    throw new Error(`Palette cannot have less unique elements than desired result array`);
  }
  const randomItems = [];
  while(randomItems.length < howMany) {
    const item = getRandomItem(palette);
    if (randomItems.indexOf(item) === -1) {
      randomItems.push(item);
    }
  }
  return randomItems;
}
