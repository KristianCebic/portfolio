import { Component, EventEmitter, Output } from '@angular/core';
import { AppComponent } from '../app.component';
import { MenuOverlayComponent } from '../menu-overlay/menu-overlay.component';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { VariableServiceService } from '../services/variable-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  activeAboutMe: string | null = null;
  activeSkills: string | null = null;
  activePortfolio: string | null = null;

  constructor(private router: Router, private translate: TranslateService, public variableService: VariableServiceService) {}

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

    const body: HTMLElement = document.getElementById('body') as HTMLElement;
    body.style.overflowY = 'hidden';
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
      this.variableService.currentFlag = 'british.png';
      if (name && email && message) {
        name.placeholder = "Dein Name";
        email.placeholder = "Deine E-Mail-Adresse";
        message.placeholder = "Deine Nachricht";
      }
      this.translate.use('de');
    } else {
      this.variableService.currentFlag = 'german.png';
      if (name && email && message) {
        name.placeholder = "Your name";
        email.placeholder = "Your email";
        message.placeholder = "Your message";
      }
      this.translate.use('en');
    }
    this.variableService.changeHeightOfIAmElement = !this.variableService.changeHeightOfIAmElement;
    this.variableService.iAm = !this.variableService.iAm
  }

  onHeaderClick($event: MouseEvent) {
    const header = $event.target as HTMLElement;

    if (this.variableService.menuOverlay === true && header.id === "header") {
      this.emitToggleMenu()
      console.log('onHeaderClick')
    }
  }

  onKCClick($event: MouseEvent) {
    const kc = $event.target as HTMLElement;

    if (this.variableService.menuOverlay === true && (kc.id === "name" || kc.id === "name2")) {
      this.emitToggleMenu()
      console.log('onKCClick')
    }
  }
}
