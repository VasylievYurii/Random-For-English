import { getRandom } from './getRandom';
import quote from '../data/benders-questions.json';

const refs = {
  randomQuote: document.querySelector('.box'),
};

function getRandomBenderQuote(quote) {
  const randomQuote = getRandom(quote);

  refs.randomQuote.textContent = randomQuote;
}

getRandomBenderQuote(quote);
