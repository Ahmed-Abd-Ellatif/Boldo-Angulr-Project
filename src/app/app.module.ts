import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { EnterpriseCardComponent } from './shared/enterprise-card/enterprise-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EnterpriseCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HomePageComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
