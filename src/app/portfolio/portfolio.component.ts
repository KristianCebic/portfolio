import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})

export class PortfolioComponent {
  @ViewChildren('project') elements!: QueryList<ElementRef>; //holt alle elemente, die beobachtet werden sollen
  
  constructor () {

    const options = { //einstellungen, die festlegen, ab welchem bereich ein element als "beobachtet" festgelegt werden soll
      root: null,
      rootMargin: '0px',
      threshold: .4
    }
 
    const callbacks = (entries: IntersectionObserverEntry[]) => { //festlegt, was passieren soll, wenn ein intersection observer eine callback funktion aufruft
      entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animationSlideInLeft');
          }
      });
  };
  
  let observer = new IntersectionObserver(callbacks, options); // erstellt eine neue instanz für den observer

  this.elements.forEach((element: ElementRef) => { // erstellt eine beobachtung für jeden einzelnen dom element
    observer.observe(element.nativeElement);
  });
  }

  liveTest(url: string) {
    window.open(url, '_blank');
  }
}
