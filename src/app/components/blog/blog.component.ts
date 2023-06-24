import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  cardData = [
    {
      imgCard: '../../../assets/images/blog1.png',
      category: ' Category',
      dateTime: 'November 22, 2021',
      desc: 'Pitch termsheet backing validation focus release.',
      userName: 'Chandler Bing',
      userImg: '../../../assets/images/profile1.png',
    },
    {
      imgCard: '../../../assets/images/blog2.png',
      category: ' Category',
      dateTime: 'November 22, 2021',
      desc: ' Seed round direct mailing non-disclosure agreement graphical user interface rockstar.',
      userName: 'Rachel Green',
      userImg: '../../../assets/images/profile2.png',
    },
    {
      imgCard: '../../../assets/images/blog3.png',
      category: ' Category',
      dateTime: 'November 22, 2021',
      desc: 'Beta prototype sales iPad gen-z marketing network effects value proposition',
      userName: 'Monica Geller',
      userImg: '../../../assets/images/profile3.png',
    },
  ];
}
