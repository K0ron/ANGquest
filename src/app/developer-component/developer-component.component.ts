import { Gender } from './../gender.enum';
import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer-component.component.html',
  styleUrls: ['./developer-component.component.css'],
})
export class DeveloperComponentComponent implements OnInit {
  developer!: Developer;
  constructor() {}
  ngOnInit(): void {
    const skillA = new Skill('A', 'A', 'A');
    const skillB = new Skill('B', 'B', 'B');

    this.developer = new Developer('April', "O'Neil", 25, Gender.FEMALE, '🍕');

    this.developer.skills.push(skillA);
    this.developer.skills.push(skillB);
  }
}
