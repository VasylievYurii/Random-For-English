import themes from '../data/theme.json';
import { getRandom } from './getRandom';
import { disabledThemeBtn } from './isDisabledBtn';
import sprite from '../images/sprite.svg';

const refs = {
  form: document.querySelector('.theme-form'),
  randomThemeBtn: document.querySelector('.random-theme-btn'),
  randomTheme: document.querySelector('.random-theme'),
  selectAllBtn: document.querySelector('.select-all-btn'),
  disabledAllBtn: document.querySelector('.disabled-all-btn')
};

function getThemeList() {
  const themeList = themes
    .map(value => {
      return `
     
        <label class="checkbox-wrapper">
			<input type="checkbox" class="checkbox-input" name="${value}"/>
			<span class="checkbox-tile">
				<span class="checkbox-icon">
					<svg fill="currentColor" class="icons">
						<rect fill="none"></rect>
            <use href="${sprite}#${value}"></use>
						</svg>
				</span>
				<span class="checkbox-label">${value}</span>
			</span>
		</label>
         `;
    })
    .join('');
  refs.form.insertAdjacentHTML('afterbegin', themeList);
}

getThemeList();

refs.randomThemeBtn.addEventListener('click', getRandomTheme);
let checkedCheckboxes = [];
function getFormData(e) {
  e.preventDefault();
  checkedCheckboxes = Array.from(
    refs.form.querySelectorAll('input[type="checkbox"]:checked')
  );
  const selectedThemes = checkedCheckboxes.map(checkbox => checkbox.name);
  return selectedThemes;
}

disabledThemeBtn(checkedCheckboxes);

function getRandomTheme(e) {
  const newThemesArray = getFormData(e);
  const randomTheme = getRandom(newThemesArray);
  const showRandomTheme = markupRandomTheme(randomTheme);
  refs.randomTheme.innerHTML = showRandomTheme
  // refs.randomTheme.insertAdjacentHTML('afterbegin', showRandomTheme);
}

refs.form.addEventListener('change', isChange);

function isChange() {
  checkedCheckboxes = Array.from(
    refs.form.querySelectorAll('input[type="checkbox"]:checked')
  );
  disabledThemeBtn(checkedCheckboxes);
}

function markupRandomTheme(el) {
  return `<p>${el}</p>`;
}

refs.selectAllBtn.addEventListener('click', selectAllCheckboxes);

function selectAllCheckboxes() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = true;
  });
  isChange();
}

refs.disabledAllBtn.addEventListener('click', disabledAllCheckboxes);

function disabledAllCheckboxes(){
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = false;
  });
  isChange();
}