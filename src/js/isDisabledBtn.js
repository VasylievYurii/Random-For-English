const refs = {
    randomNameBtn: document.querySelector('.random-name-btn'),
    randomThemeBtn: document.querySelector('.random-theme-btn')
}

export function disabledBtn(array) {
    if (array.length === 0) {
      refs.randomNameBtn.disabled = true;
    } else {
      refs.randomNameBtn.disabled = false;
    }
  }

  export function disabledThemeBtn(array) {
    if (array.length === 0) {
      refs.randomThemeBtn.disabled = true;
    } else {
      refs.randomThemeBtn.disabled = false;
    }
  }