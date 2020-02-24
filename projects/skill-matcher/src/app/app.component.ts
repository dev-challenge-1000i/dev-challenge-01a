import { Component, Inject } from '@angular/core';
import { DeveloperInterface } from '../model/developer';
import { ProjectInterface } from '../model/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ch02';
  constructor(
    @Inject('developers') private developers: Array<DeveloperInterface>,
    @Inject('projects') private projects: Array<ProjectInterface>
  ) {}
}
