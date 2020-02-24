import { Pipe, PipeTransform } from '@angular/core';
import { Skill } from '../model/skill';

@Pipe({
  name: 'skills'
})
export class SkillsPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.map((i: Skill) => Skill[i]).join(', ');
  }

}
