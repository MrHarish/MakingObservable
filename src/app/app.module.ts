import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { WorkComponent } from './work/work.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { AppRouterModule } from './app-routing.module';
import { RouterModule } from '../../node_modules/@angular/router';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { AppSubjectService } from './app-subject.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    WorkComponent,
    PortfolioComponent,
    AboutComponent,
    UserComponent,
    PageNotFoundComponent,
    DynamicComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [AppSubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
