import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createRandomDeveloperData } from '../fixtures/developer';
import { createRandomProjectData } from '../fixtures/project';
import { SkillsPipe } from './skills.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SkillsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: 'developers', useValue: createRandomDeveloperData() },
    { provide: 'projects', useValue: createRandomProjectData() },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
