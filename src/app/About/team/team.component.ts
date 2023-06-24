import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent {
  cardData = [
    {
      imgUrl: '../../../assets/images/team1.png',
      name: 'Michael Scott',
      jobTitle: 'General Manager',
    },
    {
      imgUrl: '../../../assets/images/team2.png',
      name: 'Dwight Schrute',
      jobTitle: 'General Manager',
    },
    {
      imgUrl: '../../../assets/images/team3.png',
      name: 'Pam Beetsley',
      jobTitle: 'General Manager',
    },
  ];
}
