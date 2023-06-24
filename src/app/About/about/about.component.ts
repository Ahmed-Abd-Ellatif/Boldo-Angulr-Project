import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GallaryComponent } from '../gallary/gallary.component';
import { StoryComponent } from '../story/story.component';
import { CounterComponent } from '../counter/counter.component';
import { TeamComponent } from '../team/team.component';
import { ValuesComponent } from '../values/values.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    GallaryComponent,
    StoryComponent,
    CounterComponent,
    TeamComponent,
    ValuesComponent,
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {}
