import { getRandom } from './getRandom';
import {disabledBtn} from './isDisabledBtn';

const refs = {
  inputRef: document.querySelector('.input-member'),
  btnRef: document.querySelector('.add-btn'),
  membersRef: document.querySelector('.members'),
  deleteBtnRef: document.querySelector('.delete-btn'),
  memberRef: document.querySelector('.member'),
  randomNameBtn: document.querySelector('.random-name-btn'),
  randomNameList: document.querySelector('.random-name-list'),
};

const membersArray = [];

refs.btnRef.addEventListener('click', addToList);

function addToList(e) {
  e.preventDefault();
  const memberForList = refs.inputRef.value;
  membersArray.push(memberForList);
  refs.inputRef.value = '';
  const newLi = markupList(memberForList);
  refs.membersRef.insertAdjacentHTML('afterbegin', newLi);
  disabledBtn(membersArray);
}

function markupList(el) {
  return `
<li class="member" name="${el}">
<span>${el}</span>
<button type="button" class="delete-btn">Delete</button>
</li>
`;
}

refs.membersRef.addEventListener('click', deleteMember);

function deleteMember(e) {
  if (e.target.classList.contains('delete-btn')) {
    const memberElement = e.target.parentNode;
    const memberName = memberElement.getAttribute('name');
    const index = findMemberIndex(memberName);
    membersArray.splice(index, 1);
    reMarkupList(membersArray);
  }
}

function findMemberIndex(el) {
  const index = membersArray.indexOf(el);
  return index;
}

function reMarkupList(array) {
  refs.membersRef.innerHTML = '';
  const newList = array.map(value => markupList(value)).join('');
  refs.membersRef.insertAdjacentHTML('afterbegin', newList);
  return newList;
}

refs.randomNameBtn.addEventListener('click', markupRandomName);

function markupRandomName() {
  const randomName = getRandom(membersArray);
  const name = `<p>${randomName}</p>`;
  refs.randomNameList.insertAdjacentHTML('afterbegin', name);
}


  disabledBtn(membersArray);