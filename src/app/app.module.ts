import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from  '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { DistrictsComponent } from './states/districts/districts.component';
import { HeaderComponent } from './header/header.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { StatesComponent } from './states/states.component';
import { PostsComponent } from './admin/posts/posts.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DistrictsComponent,
    HeaderComponent,
    LatestNewsComponent,
    StatesComponent,
    PostsComponent,
    LoginComponent,
    LogoutComponent,
    PrecautionsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CKEditorModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
