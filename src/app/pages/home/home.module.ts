import { HomePage } from './home.page';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { HomePageRoutingModule } from './home-routing.module';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@NgModule({
  declarations: [HomePage], 

  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    HomePageRoutingModule,
  ],

  providers: [
    SocialSharing,
  ]
})
export class HomePageModule {

}
