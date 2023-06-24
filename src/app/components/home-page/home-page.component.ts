import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ServicesSectionComponent } from '../services-section/services-section.component';
import { ConnectOurCustomersComponent } from '../connect-our-customers/connect-our-customers.component';
import { OpinionComponent } from '../opinion/opinion.component';
import { OfferComponent } from '../offer/offer.component';
import { BlogComponent } from '../blog/blog.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true,
  imports: [
    HomeComponent,
    ServicesSectionComponent,
    ConnectOurCustomersComponent,
    OpinionComponent,
    OfferComponent,
    BlogComponent,
  ],
})
export class HomePageComponent {}
