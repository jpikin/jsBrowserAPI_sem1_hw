
/**
 * Создаем карточку занятия
 */
const createCard = function () {

    const card = document.querySelector('.card');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    card.appendChild(cardBody);

    const cardTitle = document.createElement('p');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = 'Занятие: ';
    //
    const title = document.createElement('span'); // Название занятия
    //
    title.classList.add('title');
    cardTitle.appendChild(title);
    cardBody.appendChild(cardTitle);

    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = 'Максимальное количество учеников: ';
    //
    const maxStudents = document.createElement('span'); // Максимальное количество учеников
    //
    maxStudents.classList.add('max-students');
    cardText.appendChild(maxStudents);
    cardBody.appendChild(cardText);

    const cardText2 = document.createElement('p');
    cardText2.classList.add('card-text');
    cardText2.textContent = 'Текущее количество учеников: ';
    //
    const currentStudents = document.createElement('span'); // Текущее количество учеников
    //
    currentStudents.classList.add('current-students');
    cardText2.appendChild(currentStudents);
    cardBody.appendChild(cardText2);

    const btn = document.createElement('a');
    btn.classList.add('btn', 'btn-primary');
    btn.textContent = 'Записаться';
    btn.href = '#';
    cardBody.appendChild(btn);
}


