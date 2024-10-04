export default class Collapse {
  constructor() {
    this.slider = '';
    this.hidden = 'collapse__slider--hidden';
    this.lock = true;

    this.init();
  }

  onClickButton() {
    if (this.lock) {
      const hidden = !this.slider.classList.contains(this.hidden);
      const childHeight = this.slider.firstElementChild.clientHeight;
      const height = childHeight + this.slider.offsetHeight;

      this.slider.classList.toggle(this.hidden);
      this.slider.style.maxHeight = `${height}px`;
      this.slider.style.border = '1px solid #b6b6b6';

      if (hidden) this.slider.style.maxHeight = 0;

      setTimeout(() => {
        if (hidden) this.slider.style.border = 'none';
        this.lock = true;
      }, 700);
    } else {
      this.slider.classList.toggle(this.hidden);
    }
    this.lock = false;
  }

  init() {
    document.querySelector('button').addEventListener('click', () => this.onClickButton());
  }

  slide() {
    this.slider = document.querySelector('.collapse__slider');
    this.slider.style.transition = 'max-height 0.7s linear';
    this.slider.style.maxHeight = `${this.slider.offsetHeight}px`;
  }
}
