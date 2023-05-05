import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Module
import { PagesModule } from '../pages/pages.module';
//Component
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';



@NgModule({
  declarations: [
    PokeHeaderComponent,
    PokeSearchComponent
  ],
  exports: [
    PokeHeaderComponent,
    PokeSearchComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
