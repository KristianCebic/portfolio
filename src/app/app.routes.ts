import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
    { path: '', component: MainpageComponent },
    { path: 'mainPage', component: MainpageComponent },
    { path: 'impressum', component: ImpressumComponent },
  ];

  const routerOptions : ExtraOptions = {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  }
  
