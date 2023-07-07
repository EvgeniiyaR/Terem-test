import '../index.css';
import {
  buttonFirst,
  buttonSecond,
  block,
  blockFirst,
  blockMiddleFirst,
  blockLastFirst,
  blockLastSecond,
} from './utils/constants';

const hiddenBlockFirst = () => {
  blockFirst.classList.toggle('block__first_hidden');
}

const changeBlock = () => {
  block.classList.toggle('block_change');
  blockMiddleFirst.classList.toggle('block__middle-first_change');
  blockLastFirst.classList.toggle('block__last-first_change');
  blockLastSecond.classList.toggle('block__last-second_change');
}

buttonFirst.addEventListener('click', hiddenBlockFirst);
buttonSecond.addEventListener('click', changeBlock);
