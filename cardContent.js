const card = document.querySelector('.card');
/**
 * Создаем карточку занятия
 */
const createCard = function (lesson, max, current) {

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    card.appendChild(cardBody);

    const cardTitle = document.createElement('p');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = 'Занятие: ';
    //
    const title = document.createElement('span'); // Название занятия
    title.textContent = lesson
    //
    title.classList.add('title');
    cardTitle.appendChild(title);
    cardBody.appendChild(cardTitle);

    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = 'Максимальное количество учеников: ';
    //
    const maxStudents = document.createElement('span'); // Максимальное количество учеников
    maxStudents.textContent = max;
    //
    maxStudents.classList.add('max-students');
    cardText.appendChild(maxStudents);
    cardBody.appendChild(cardText);

    const cardText2 = document.createElement('p');
    cardText2.classList.add('card-text');
    cardText2.textContent = 'Текущее количество учеников: ';
    //
    const currentStudents = document.createElement('span'); // Текущее количество учеников
    currentStudents.textContent = current;
    //
    currentStudents.classList.add('current-students');
    cardText2.appendChild(currentStudents);
    cardBody.appendChild(cardText2);

    const btn = document.createElement('a');
    btn.classList.add('btn', 'btn-primary');
    btn.textContent = 'Записаться';
    btn.href = '#';
    if (current >= max) {
        btn.classList.add('disabled')
    }
    btn.addEventListener('click', ()=>{
        cancelBtn.classList.remove('d-none');
        current++;
        readJsonFile();
        saveJson(lesson, current);
    });
    cardBody.appendChild(btn);

    const cancelBtn = document.createElement('a');
    cancelBtn.classList.add('d-none');
    cancelBtn.textContent = 'Отменить запись';
    cancelBtn.href="#";
    cancelBtn.addEventListener('click', ()=>{
        cancelBtn.classList.add('d-none');
    });
    cardBody.appendChild(cancelBtn);

}

async function saveJson(title, data) {
    
    try {
        const rawData = await fetch("lessons.json");
        if (!rawData.ok) {
            throw new Error(`HTTP error! Status: ${rawData.status}`);
        }
        const jsonText = await rawData.text();
        const parsedData = JSON.parse(jsonText);
        parsedData.forEach(lesson => {
            if(lesson.lesson === title) {
                lesson.currentStudents = data;
            }
        });
        
    } catch (error) {
        console.error(error);
    }
    
}
