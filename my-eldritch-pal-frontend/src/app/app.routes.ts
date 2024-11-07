import { Routes } from '@angular/router';
import { RentComponent } from './rent/rent.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'rent', component: RentComponent },
    
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
