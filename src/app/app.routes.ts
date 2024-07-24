import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { DonationsComponent } from './donations/donations.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'facilities', component: FacilitiesComponent },
  { path: 'donations', component: DonationsComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
