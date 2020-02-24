import { Injectable } from '@angular/core';
import { Skill } from '../model/skill'
import { DeveloperInterface } from '../model/developer'

@Injectable({
  providedIn: 'root'
})
export class SkillResolverService {
  constructor(
    private developers: Array<DeveloperInterface>
  ) {}
  findDeveloperWithSkill(skill: Skill): DeveloperInterface | undefined {
    return this.developers.find((dev: DeveloperInterface) => dev.skills.includes(skill));
  }
}
