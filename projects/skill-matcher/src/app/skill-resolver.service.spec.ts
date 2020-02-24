import { TestBed } from '@angular/core/testing';
import { SkillResolverService } from "./skill-resolver.service";
import { Skill } from "./../model/skill";
import { DeveloperInterface } from "../model/developer";

const developerFixtures: Array<DeveloperInterface> = [
  {
    email: "jonn.smith@example",
    skills: [Skill.PYTHON]
  } as DeveloperInterface,
  {
    email: "hector.another@example",
    skills: [Skill.PYTHON, Skill.KOTLIN]
  } as DeveloperInterface,
  {
    email: "anne.williams@example",
    skills: [Skill.CRYSTAL]
  } as DeveloperInterface,
  {
    email: "henry.johnson@example",
    skills: [Skill.HASKELL]
  } as DeveloperInterface,
  {
    email: "hannah.something@example",
    skills: [Skill.PASCAL]
  } as DeveloperInterface
];

describe("SkillResolver", () => {
  let skillResolver;

  beforeEach(() => {
    skillResolver = new SkillResolverService(developerFixtures);
  });

  it("should be truthy after creation", () => {
    expect(skillResolver).toBeTruthy();
  });

  it("should be able to find developer with existing skill", () => {
    expect(
      skillResolver.findDeveloperWithSkill(Skill.PASCAL)
    ).toEqual( {
      email: "hannah.something@example",
      skills: [ Skill.PASCAL ]
    } as DeveloperInterface);
  });

  // it("should throw exception if developer with given skill is unavailable", () => {
  //   expect(
  //       skillResolver.getDeveloperWithSkill(Skill.C_SHARP)
  //   ).toThrowError(/No developer with required skill is available/);
  // });

  // it("should be able to find developer that have most matching skills for project", () => {
  //   expect(
  //     skillResolver.findDeveloperWithMostMatchingSkillsForProject({
  //       name: "Example Project",
  //       requiredSkills: [Skill.TYPE_SCRIPT, Skill.CSS, Skill.HTML]
  //     })
  //   ).toHaveProperty("email", "hannah.something@example");
  // });

  // it("should throw exception if matching developer is unavailable", () => {
  //   expect(
  //     skillResolver.getDeveloperWithMostMatchingSkillsForProject({
  //       name: "Example Project",
  //       requiredSkills: [Skill.RUST]
  //     })
  //   ).toThrowError(new Error("No developers with matching skills could be found"));
  // });

  // it("should be able to compose development team with mixing position levels", () => {
  //   const result = skillResolver.composeDevelopmentTeamForProject({
  //     name: "Another Example Project",
  //     requiredSkills: [Skill.PYTHON, Skill.HTML]
  //   });

  //   expect(result).toHaveProperty("length", 2);
  //   expect(result[0]).toHaveProperty("email", "anne.williams@example");
  //   expect(result[0]).toHaveProperty("position", DeveloperPosition.JUNIOR);
  //   expect(result[1]).toHaveProperty("email", "henry.johnson@example");
  //   expect(result[1]).toHaveProperty("position", DeveloperPosition.SENIOR);
  // });
});
