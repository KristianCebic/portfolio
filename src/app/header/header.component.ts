import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  activeAboutMe: string | null = null;
  activeSkills: string | null = null;
  activePortfolio: string | null = null;

  setActiveElementAboutMe(elementId: string) {
    this.activeAboutMe = elementId;
    this.activeSkills = null;
    this.activePortfolio = null;
    this.scrollToContainer('aboutMe');
  }

  setActiveElementSkills(elementId: string) {
    this.activeSkills = elementId;
    this.activeAboutMe = null;
    this.activePortfolio = null;
    this.scrollToContainer('mySkillsSection');
  }

  setActiveElementPortfolio(elementId: string) {
    this.activePortfolio = elementId;
    this.activeSkills = null;
    this.activeAboutMe = null;
    this.scrollToContainer('portfolio');
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
  
  openMenu() {
    const firstSection: HTMLElement = document.getElementById('firstSection') as HTMLElement;
    firstSection.innerHTML = `
      <div id="menuOverlay">
        <a href="/">About me</a>
        <a href="/">My skills</a>
        <a href="/">Portfolio</a>
        <a href="/">Contact</a>
      </div>
    `;
  }
}
