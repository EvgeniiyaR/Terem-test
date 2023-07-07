import '../index.css';
import {
  body,
  form,
  modalTitle,
  templateSelect,
  firstName,
} from './utils/constants';


const generateSelect = (num) => {
  for (let i = 1; i <= num; i++) {
    const clone = templateSelect.content.cloneNode(true);
    const label = clone.querySelector('.form-label');
    const select = clone.querySelector('.form-control');
    label.textContent = `${i}. Выберите число`;
    label.setAttribute('for', `select${i}`);
    select.name = `select${i}`;
    select.id = `select${i}`;
    form.insertBefore(clone, firstName);
  }
}

const serializeForm = (formNode) => {
  const { elements } = formNode;
  const obj = {};
  Array.from(elements)
    .filter((item) => !!item.name)
    .map((element) => {
      const { name, value } = element;
      obj[name] = value;
    });
  return obj;
}

const onSubmit = (e) => {
  e.preventDefault();

  if (body.querySelector('.pre') !== null) {
    body.removeChild(body.querySelector('.pre'));
  }

  const bodyData = serializeForm(form);
  const configObj = {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  };

  fetch('./server.js', configObj)
  .then(() => {
    $('.modal').modal('show');
    modalTitle.textContent = 'Данные получены';
  })
  .catch((err) => {
    modalTitle.textContent = `Возникла ошибка: ${err}`;
  });

  const pre = document.createElement('pre');
  pre.innerHTML = JSON.stringify(bodyData, null, 2);
  pre.classList.add('pre');
  body.append(pre);
}

form.addEventListener('submit', (e) => onSubmit(e));
generateSelect(5);
