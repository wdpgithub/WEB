import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { NewscontantComponent } from './components/newscontant/newscontant.component';

const routes: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'news', component: NewsComponent },
    { path: 'newscontent/:id', component: NewscontantComponent },
    {
        path: '**',
        redirectTo: 'home'
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }