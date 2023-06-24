import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-values',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss'],
})
export class ValuesComponent {
  cardData = [
    {
      imgUrl: '../../../assets/images/value1.png',
      title: 'We are commited.',
      desc: 'Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.',
    },
    {
      imgUrl: '../../../assets/images/value2.png',
      title: 'We are responsible.',
      desc: 'Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.',
    },
    {
      imgUrl: '../../../assets/images/value3.png',
      title: 'We aim for progress.',
      desc: 'Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.',
    },
  ];
}
