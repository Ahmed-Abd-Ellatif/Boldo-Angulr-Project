import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-letes-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './letes-news.component.html',
  styleUrls: ['./letes-news.component.scss'],
})
export class LetesNewsComponent {
  cradData = [
    {
      imgUrl: '../../../assets/images/blog1.png',
      dateTime: 'November 22, 2021',
      desc: 'Pitch termsheet backing validation focus release.',
      userImg: '../../../assets/images/profile1.png',
      userName: 'Chandler Bing',
    },
    {
      imgUrl: '../../../assets/images/blog2.png',
      dateTime: 'November 22, 2021',
      desc: 'Pitch termsheet backing validation focus release.',
      userImg: '../../../assets/images/profile2.png',
      userName: 'Rachel Green',
    },
    {
      imgUrl: '../../../assets/images/blog3.png',
      dateTime: 'November 22, 2021',
      desc: 'Pitch termsheet backing validation focus release.',
      userImg: '../../../assets/images/profile3.png',
      userName: 'Monica Geller',
    },
    {
      imgUrl: '../../../assets/images/blog4.png',
      dateTime: 'November 22, 2021',
      desc: 'Pitch termsheet backing validation focus release.',
      userImg: '../../../assets/images/profile3.png',
      userName: 'Monica Geller',
    },
    {
      imgUrl: '../../../assets/images/blog5.png',
      dateTime: 'November 22, 2021',
      desc: 'Pitch termsheet backing validation focus release.',
      userImg: '../../../assets/images/profile2.png',
      userName: 'Rachel Green',
    },
    {
      imgUrl: '../../../assets/images/blog6.png',
      dateTime: 'November 22, 2021',
      desc: 'Pitch termsheet backing validation focus release.',
      userImg: '../../../assets/images/profile1.png',
      userName: 'Chandler Bing',
    },
  ];
}
