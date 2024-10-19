const card = document.querySelector('.card');
/**
 * Создаем карточку занятия
 */
<<<<<<< HEAD
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
    let pushCounter = 0;
    if (current === max) {
        btn.classList.add('disabled');
    }
    btn.addEventListener('click', ()=>{
        pushCounter++;
        currentStudents.textContent = parseInt(currentStudents.textContent) + 1;
        // saveToJSON(lesson, max, current+1);
        if (parseInt(currentStudents.textContent) === max) {
            btn.classList.add('disabled');
        }
        const cancel = document.createElement('p');
        cancel.classList.add('cancel');
        if (!cardBody.lastChild.classList.contains('cancel')) {
            cancel.textContent = 'Отменить запсись';
            cardBody.appendChild(cancel);    
        }
        cancel.addEventListener('click', ()=>{
            pushCounter--;
            if (pushCounter === 0) {
                cardBody.removeChild(cancel);
            }
            btn.classList.remove('disabled');
            currentStudents.textContent = parseInt(currentStudents.textContent) - 1;
            // saveToJSON(lesson, max, current-1);           
        });
    });
    cardBody.appendChild(btn);
}

=======
async function getJson() {
    try {
        const rawData = await fetch("lessons.json");
        if (!rawData.ok) {
            throw new Error(`HTTP error! Status: ${rawData.status}`);
        }
        const jsonText = await rawData.text();
        const parsedData = JSON.parse(jsonText);
        
        parsedData.forEach(lesson => {
            createCard(lesson.lesson, lesson.total_students, lesson.current_students);
        });
        
    } catch (error) {
        console.error(error);
    }
    
}
getJson();
>>>>>>> 239d50b4a3ce83e6b1e92efd123e8ca7e70651ed

