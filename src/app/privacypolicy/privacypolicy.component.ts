import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MenuOverlayComponent } from '../menu-overlay/menu-overlay.component';

@Component({
  selector: 'app-privacypolicy',
  standalone: true,
  imports: [TranslateModule, CommonModule, RouterLink, HeaderComponent, FooterComponent, MenuOverlayComponent],
  templateUrl: './privacypolicy.component.html',
  styleUrl: './privacypolicy.component.scss'
})
export class PrivacypolicyComponent {
  constructor(private router: Router) {}
  isVisible: boolean = false;

  toggleMenu(): void {
    this.isVisible = !this.isVisible;
  }
}
