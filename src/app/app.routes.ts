import { Routes } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum.component';
import { MainpageComponent } from './mainpage/mainpage.component';

export const routes: Routes = [
    { path: '', component: MainpageComponent },
    { path: 'impressum', component: ImpressumComponent },
];
