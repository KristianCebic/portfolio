import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent {
  @ViewChild('dott1') dott1!: ElementRef;
  @ViewChild('dott2') dott2!: ElementRef;
  @ViewChild('recensionText') recensionText!: ElementRef;
  @ViewChild('name') name!: ElementRef;

  d1: string = "assets/img/green_dot.svg";
  d2: string = "assets/img/purple_dot.svg";

  tobiText: string = "Kristian ist ein engagierter und zuverlässiger Teamkollege. In unserer Gruppenarbeit hat er durch sein hohes Fachwissen und seine Bereitschaft sich in neue Themen einzuarbeiten wesentlich zu unserem Teamerfolg beigetragen. Ich kann Kristian als disziplinierten Kollegen weiterempfehlen.";
  chrisText: string = "Kristian hat mich mit seinem Durchhaltevermögen beeindruckt. Während eines langen Teamprojekts ließ er nicht locker und biss sich durch, bis wir das Projekt gemeinsam erfolgreich abschließen konnten. Dabei übernahm er Verantwortung, war offen für Kritik und immer wissbegierig.";
  tobiNameRecension: string = "Tobias Reize - Team Partner";
  chrisNameRecension: string = "Christian Frei - Team Partner";
  nameRecension: string = this.tobiNameRecension;
  text: string = this.tobiText;
  tobias: boolean = true;
  chris: boolean = false;

  constructor(private renderer: Renderer2) {};

  showAnotherRecension() {
    this.renderer.addClass(this.recensionText.nativeElement, 'fade-in-from-down');
    this.renderer.addClass(this.name.nativeElement, 'fade-in-from-down');

    setTimeout(() => {
      this.renderer.removeClass(this.recensionText.nativeElement, 'fade-in-from-down');
      this.renderer.removeClass(this.name.nativeElement, 'fade-in-from-down');
    }, 100);
  
    if(this.d1 === "assets/img/green_dot.svg") {
      this.d1 = "assets/img/purple_dot.svg";
      this.d2 = "assets/img/green_dot.svg";
      this.tobias = false;
      this.chris = true;
    } else {
      this.d1 = "assets/img/green_dot.svg";
      this.d2 = "assets/img/purple_dot.svg";
      this.tobias = true;
      this.chris = false;
    }

    if(this.text == this.tobiText) {
      this.showRecensionFromChris();
    } else {
      this.showRecensionFromTobi();
    }
  }

  showRecensionFromChris() {
    this.text = this.chrisText;
    this.nameRecension = this.chrisNameRecension;
  }

  showRecensionFromTobi() {
    this.text = this.tobiText;
    this.nameRecension = this.tobiNameRecension;
  }
}
