import { Routes } from '@angular/router';
import { RentComponent } from './rent/rent.component';
import { HomeComponent } from './home/home.component';
import { RentDetailComponent } from './rent/rent-detail/rent-detail.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'rent', component: RentComponent },
    { path: 'rent/:id', component: RentDetailComponent },
    { path: 'about', component: AboutComponent },
    { path: 'news', component: NewsComponent },
    
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
