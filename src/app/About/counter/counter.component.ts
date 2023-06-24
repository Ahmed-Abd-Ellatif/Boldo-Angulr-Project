import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  countData = [
    { num: '120M', title: 'Cool feature title' },
    { num: '10.000', title: 'Cool feature title' },
    { num: '240', title: 'Cool feature title' },
  ];
}
