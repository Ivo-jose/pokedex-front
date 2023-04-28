import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules
import { RoutingModule } from './routing.module';
//Components pages
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RoutingModule
  ]
})
export class PagesModule { }
