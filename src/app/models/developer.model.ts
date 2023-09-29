import { Gender } from './../gender.enum';
import { Skill } from './skill.model';

export class Developer {
  lastName!: string;
  firstName!: string;
  age!: number;
  gender!: Gender;
  bio!: string;
  skills!: Array<Skill>;

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    gender: Gender,
    bio: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.bio = bio;
    this.skills = [];
  }
}
