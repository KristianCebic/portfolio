import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslateModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
  };

  canSendMessage: boolean;

  constructor() {
    this.canSendMessage = false;
  }

  scrollToContainer(elementId: string): void {
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

  activateTheSendMessageButton(): void {
    const nameText: HTMLInputElement = document.getElementById(
      'nameInput'
    ) as HTMLInputElement;
    const emailText: HTMLInputElement = document.getElementById(
      'emailInput'
    ) as HTMLInputElement;
    const messageText: HTMLTextAreaElement = document.getElementById(
      'messageInput'
    ) as HTMLTextAreaElement;
    const checkbox: HTMLInputElement = document.getElementById(
      'privacyPolicy1'
    ) as HTMLInputElement;
    const sendMessageButton: HTMLButtonElement = document.getElementById(
      'sendMessage'
    ) as HTMLButtonElement;

    this.canSendMessage =
      nameText.value !== '' &&
      emailText.value !== '' &&
      messageText.value !== '' &&
      checkbox.checked;

    if (this.canSendMessage) {
      sendMessageButton.classList.add('sendMessageGreenButton');
    } else {
      sendMessageButton.classList.remove('sendMessageGreenButton');
    }
  }

  sendMessage(event: Event): void {
    event.preventDefault();

    if (this.canSendMessage) {
      alert('Die Nachricht wurde erfolgreich gesendet!');
    }
  }

  mailTest = false;

  post = {
    endPoint: 'https://kristian-cebic.ch/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }
}
