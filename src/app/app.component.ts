import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ryder';
  password = '';

  length = 0;
  includeNumbers = false;
  includeLetters = false;
  includeSymbols = false;

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    const symbols = '!@#$%^&*()_+';
    let validChars ='';

    if (this.includeLetters) validChars += letters;
    if (this.includeNumbers) validChars += numbers;
    if (this.includeSymbols) validChars += symbols;

    let generatedPassword ='';

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars.at(index);
    }

    this.password = generatedPassword;
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  sayHello() {
    console.log('aasdasd');
  }

  onInputLength(event: Event) {
    let target = undefined;
    if (event.target) {
      target = event.target as HTMLInputElement;
      this.length = parseInt(target?.value);
    }
  }
}
