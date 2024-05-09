import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MenuOverlayComponent } from '../menu-overlay/menu-overlay.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-impressum',
  standalone: true,
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss',
  imports: [
    HeaderComponent,
    FooterComponent,
    MenuOverlayComponent,
    CommonModule,
    TranslateModule,
    RouterLink,
  ],
})
export class ImpressumComponent {
  constructor(private router: Router) {}

  isVisible: boolean = false;

  toggleMenu(): void {
    this.isVisible = !this.isVisible;
  }

  scrollToContainer(elementId: string): void {
    this.router.navigate(['/mainPage']);

    setTimeout(() => {
      this.navigateToContactContainer(elementId);
    }, 100);
  }

  navigateToContactContainer(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      const headerOffset = document.querySelector('.header')?.clientHeight ?? 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }

  liveTest(url: string) {
    window.open(url, '_blank');
  }
}
