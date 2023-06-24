import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetesNewsComponent } from '../letes-news/letes-news.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, LetesNewsComponent],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {}
