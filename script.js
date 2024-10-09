/**
 * Читаем JSON и на его основе создаем карточки уроков
 */
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
