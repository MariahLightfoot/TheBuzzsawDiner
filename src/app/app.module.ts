import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { OwnersComponent } from './owners/owners.component';
import { FooterComponent } from './footer/footer.component';
import { ReliefPictureComponent } from './relief-picture/relief-picture.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
    ButtonsComponent,
    OwnersComponent,
    FooterComponent,
    ReliefPictureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
