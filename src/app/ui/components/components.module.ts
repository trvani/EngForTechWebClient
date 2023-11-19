import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesModule } from './companies/companies.module';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CompaniesModule,
    HomeModule
  ]
})
export class ComponentsModule { }
