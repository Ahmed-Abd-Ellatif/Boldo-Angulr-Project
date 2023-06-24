import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class OpinionComponent {
  cardData = [
    {
      title:
        '  “Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”',
      imgUrl: './../../assets/images/review1.png',
      name: 'Severus Snape',
      position: 'Manager @ Stytherin',
    },
    {
      title:
        '  “Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”',
      imgUrl: './../../assets/images/review2.png',
      name: 'Severus Snape',
      position: 'Manager @ Stytherin',
    },
    {
      title:
        '  “Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”',
      imgUrl: './../../assets/images/review3.png',
      name: 'Severus Snape',
      position: 'Manager @ Stytherin',
    },
  ];
}
