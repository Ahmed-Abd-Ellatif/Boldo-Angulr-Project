import { Component } from '@angular/core';
import { ServicesSectionCardComponent } from '../services-section-card/services-section-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss'],
  standalone: true,
  imports: [ServicesSectionCardComponent, CommonModule],
})
export class ServicesSectionComponent {}
