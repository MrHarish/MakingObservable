
import { Routes, RouterModule, Router } from "@angular/router"
import { HomeComponent } from "./home/home.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { WorkComponent } from "./work/work.component";
import { BlogComponent } from "./blog/blog.component";
import { AboutComponent } from "./about/about.component";
import { NgModule } from "@angular/core";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { UserComponent } from "./user/user.component";

const routes:Routes = [
    {path:'', component: HomeComponent},
    {path:'work', component: WorkComponent},
    {path:'portfolio', component: PortfolioComponent},
    {path:'blog', component: BlogComponent},
    {path:'about', component: AboutComponent},
    {path:'user',component: UserComponent},
    {path:'user/:id',component: UserComponent},
    {path: '**', component: PageNotFoundComponent},
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRouterModule{}