import { Component, EventEmitter, Output } from '@angular/core';
import { AppComponent } from '../app.component';
import { MenuOverlayComponent } from '../menu-overlay/menu-overlay.component';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    AppComponent,
    MenuOverlayComponent,
    CommonModule,
    RouterLink,
    TranslateModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  activeAboutMe: string | null = null;
  activeSkills: string | null = null;
  activePortfolio: string | null = null;

  constructor(private router: Router, private translate: TranslateService) {}

  @Output() toggleMenu: EventEmitter<void> = new EventEmitter();

  emitToggleMenu() {
    const burgerMenu: HTMLElement = document.getElementById('burgerMenu') as HTMLElement;
    const x: HTMLElement = document.getElementById('x') as HTMLElement;

    this.toggleMenu.emit();
    
    if (x.style.display === 'none') {
      burgerMenu.style.display = 'none';
      x.style.display = 'flex';
    } else {
      burgerMenu.style.display = 'flex';
      x.style.display = 'none';
    }
  }

  setActiveElementAboutMe(elementId: string) {
    this.router.navigateByUrl('mainPage');
    this.activeAboutMe = elementId;
    this.activeSkills = null;
    this.activePortfolio = null;
    setTimeout(() => this.scrollToContainer('aboutMe'), 100);
  }

  setActiveElementSkills(elementId: string) {
    this.router.navigateByUrl('mainPage');
    this.activeSkills = elementId;
    this.activeAboutMe = null;
    this.activePortfolio = null;
    setTimeout(() => this.scrollToContainer('mySkillsSection'), 100);
  }

  setActiveElementPortfolio(elementId: string) {
    this.router.navigateByUrl('mainPage');
    this.activePortfolio = elementId;
    this.activeSkills = null;
    this.activeAboutMe = null;
    setTimeout(() => this.scrollToContainer('portfolio'), 100);
  }

  scrollToKristian() {
    this.router.navigateByUrl('mainPage');
    setTimeout(() => this.scrollToContainer('firstSection'), 100);
  }

  scrollToContainer(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      const headerOffset = document.querySelector('.header')?.clientHeight ?? 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  changeLanguage() {
    let flag: HTMLImageElement = document.getElementById('flag') as HTMLImageElement;

    let name= document.getElementById('nameInput') as HTMLInputElement;
    let email = document.getElementById('emailInput') as HTMLInputElement;
    let message = document.getElementById('messageInput') as HTMLTextAreaElement;

    if (flag.src.includes('german.png')) {
      flag.src = '../../assets/img/flags/british.png';
      name.placeholder = "Dein Name";
      email.placeholder = "Deine E-Mail-Adresse";
      message.placeholder = "Deine Nachricht";
      this.translate.use('de');
    } else {
      flag.src = '../../assets/img/flags/german.png';
      name.placeholder = "Your name";
      email.placeholder = "Your email";
      message.placeholder = "Your message";
      this.translate.use('en');
    }
  }
}
