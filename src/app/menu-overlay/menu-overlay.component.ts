import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-menu-overlay',
  standalone: true,
  imports: [],
  templateUrl: './menu-overlay.component.html',
  styleUrl: './menu-overlay.component.scss'
})

export class MenuOverlayComponent {
  activeAboutMe: string | null = null;
  activeSkills: string | null = null;
  activePortfolio: string | null = null;
  activeContact: string | null = null;

  @Output() toggleMenu: EventEmitter<void> = new EventEmitter();

  constructor(private router: Router) {}

  emitToggleMenu() {
    const burgerMenu: HTMLElement = document.getElementById('burgerMenu') as HTMLElement;
    const x: HTMLElement = document.getElementById('x') as HTMLElement;
    const body: HTMLElement = document.getElementById('body') as HTMLElement;

    this.toggleMenu.emit();
    
    if (x.style.display === 'none') {
      burgerMenu.style.display = 'none';
      x.style.display = 'flex';
      body.style.overflowY = 'hidden';
    } else {
      burgerMenu.style.display = 'flex';
      x.style.display = 'none';
      body.style.overflowY = 'scroll';
    }
  }

  setActiveElementAboutMe(elementId: string) {
    this.router.navigateByUrl('mainPage');
    this.activeAboutMe = elementId;
    this.activeSkills = null;
    this.activePortfolio = null;
    this.activeContact = null;
    setTimeout(() => this.scrollToContainer('aboutMe'), 100);
    this.emitToggleMenu();
  }

  setActiveElementSkills(elementId: string) {
    this.router.navigateByUrl('mainPage');
    this.activeSkills = elementId;
    this.activeAboutMe = null;
    this.activePortfolio = null;
    this.activeContact = null;
    setTimeout(() => this.scrollToContainer('mySkillsSection'), 100);
    this.emitToggleMenu();
  }

  setActiveElementPortfolio(elementId: string) {
    this.router.navigateByUrl('mainPage');
    this.activePortfolio = elementId;
    this.activeSkills = null;
    this.activeAboutMe = null;
    this.activeContact = null;
    setTimeout(() => this.scrollToContainer('portfolio'), 100);
    this.emitToggleMenu();
  }

  setActiveElementContact(elementId: string) {
    this.router.navigateByUrl('mainPage');
    this.activeContact = elementId;
    this.activePortfolio = null;
    this.activeSkills = null;
    this.activeAboutMe = null;
    setTimeout(() => this.scrollToContainer('contact'), 100);
    this.emitToggleMenu();
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
    let flag: HTMLImageElement = document.getElementById('flagInHeader') as HTMLImageElement;

    let name= document.getElementById('nameInput') as HTMLInputElement;
    let email = document.getElementById('emailInput') as HTMLInputElement;
    let message = document.getElementById('messageInput') as HTMLTextAreaElement;

    if (flag.src.includes('british.png')) {
      flag.src = '../../assets/img/flags/german.png';
      name.placeholder = "Dein Name";
      email.placeholder = "Deine E-Mail-Adresse";
      message.placeholder = "Deine Nachricht";
    } else {
      flag.src = '../../assets/img/flags/british.png';
      name.placeholder = "Your name";
      email.placeholder = "Your email";
      message.placeholder = "Your message";
    }
  }
}
