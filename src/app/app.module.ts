
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { BlogModule } from "./blog/blog.module";
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BlogModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
