import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { IntroductionComponent } from '../introduction/introduction.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { MenuOverlayComponent } from '../menu-overlay/menu-overlay.component';
import { AppComponent } from '../app.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';



@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [
    HeaderComponent,
    IntroductionComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    MenuOverlayComponent,
    AppComponent,
    RouterOutlet,
    CommonModule,
    TranslateModule
  ],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})
export class MainpageComponent {
  isVisible: boolean = false;

  toggleMenu(): void {
    this.isVisible = !this.isVisible;
    console.log('toggleMenu aufgerufen', this.isVisible)
  }
}
