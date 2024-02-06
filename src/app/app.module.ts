import { CUSTOM_ELEMENTS_SCHEMA , NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuBarComponent } from './components/header/menu-bar/menu-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { MainButtonComponent } from './components/main-button/main-button.component';
import { NavigationComponent } from './components/header/navigation/navigation.component';
import { MatIconModule } from '@angular/material/icon';
import { CardImageComponent } from './components/card-image/card-image.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';

import { register } from 'swiper/element/bundle';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardPriceComponent } from './components/card-price/card-price.component'

register()

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    MenuBarComponent,
    HeaderComponent,
    MainButtonComponent,
    NavigationComponent,
    CardImageComponent,
    BannerComponent,
    FooterComponent,
    CarouselComponent,
    CardPriceComponent,
  ],
  imports: [
    BrowserModule,
		MatIconModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
