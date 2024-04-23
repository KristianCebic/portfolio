import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  canSendMessage: boolean;

  constructor() {
    this.canSendMessage = false;
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

  activateTheSendMessageButton(): void {
    const nameText: HTMLInputElement = document.getElementById('name') as HTMLInputElement;
    const emailText: HTMLInputElement = document.getElementById('email') as HTMLInputElement;
    const messageText: HTMLTextAreaElement = document.getElementById('message') as HTMLTextAreaElement;
    const checkbox: HTMLInputElement = document.getElementById('privacyPolicy1') as HTMLInputElement;
    const sendMessageButton: HTMLButtonElement = document.getElementById('sendMessage') as HTMLButtonElement;
  
    this.canSendMessage = nameText.value !== '' && emailText.value !== '' && messageText.value !== '' && checkbox.checked;

    if (this.canSendMessage) {
      sendMessageButton.classList.add('sendMessageGreenButton');
    } else {
      sendMessageButton.classList.remove('sendMessageGreenButton');
    }
  }
  
  sendMessage(event: Event): void {
    event.preventDefault();

    if(this.canSendMessage) {
      alert('Die Nachricht wurde erfolgreich gesendet!');
    }
  }
}
