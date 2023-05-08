import bodyLayout from '../layout/body.html';

export default class LayoutBuilder {
  TEXTAREA_COLS = 70;

  constructor(keyboard) {
    this.keyboard = keyboard;
  }

  placeTextArea() {
    const textArea = document.createElement('textarea');
    textArea.classList.add('output-area');
    textArea.cols = this.TEXTAREA_COLS;
    textArea.wrap = 'hard';
    this.main.prepend(textArea);
  }

  languageSwitchHandler() {
    setTimeout(() => {
      this.main.removeChild(this.main.lastChild);
      this.main.append(this.keyboard.getLayout());
    }, this.keyboard.BUTTON_TRANSITION - 50);
  }

  build() {
    document.body.insertAdjacentHTML('afterbegin', bodyLayout);
    this.main = document.body.querySelector('main');
    this.placeTextArea();
    this.main.append(this.keyboard.getLayout());
    document.addEventListener('langSwitch', this.languageSwitchHandler.bind(this));
  }
}
