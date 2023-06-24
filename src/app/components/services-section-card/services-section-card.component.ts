import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-services-section-card',
  templateUrl: './services-section-card.component.html',
  styleUrls: ['./services-section-card.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ServicesSectionCardComponent {
  @Input() cardData = { img: '', title: '', desc: '' };
}
