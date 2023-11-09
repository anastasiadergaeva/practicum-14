// 1. Создайте пустой массив с именем grades и заполните массив случайными оценками от 1 до 100 для 12 студентов. Для генерации случайных оценок, используйте функцию Math.random().
const grades = [];
for (let i = 1; i < 12; i++) {
    let randomGrade = Math.floor(Math.random() * 100) + 1;
    grades.push(randomGrade);
}
console.log(`Массив с оценками студентов: ${grades}`);

// 2. Рассчитайте и выведите средний балл студентов, используя методы массивов.
const studentsGPA = Math.round(grades.reduce((acc, grade) => acc + grade, 0) / grades.length);
console.log(`Средний балл студентов: ${studentsGPA}`);

// 3. Найдите и выведите максимальный балл среди студентов, используя соответствующий метод массива.
const maxGrade = grades.sort((a, b) => b - a)[0];
console.log(`Максимальный балл среди студентов: ${maxGrade}`);

// 4. Найдите и выведите минимальный балл среди студентов, используя соответствующий метод массива.
const minGrade = grades.sort((a, b) => a - b)[0];
console.log(`Минимальный балл среди студентов: ${minGrade}`);

// 5. Посчитайте и выведите количество студентов, получивших положительную оценку (балл выше или равен 60). Используйте метод массива, который фильтрует оценки и оставляет только те, которые соответствуют заданному условию. Затем посчитайте количество оставшихся оценок и выведите результат.
const positiveGrades = grades.filter((grade) => {
    if (grade >= 60) {
        return grade;
    }
});

const quantityOfPositiveGrades = positiveGrades.length;
const quantityOfRemainingGrades = grades.length - quantityOfPositiveGrades;

console.log(`Положительные оценки: ${positiveGrades}. Количество положительных оценок:${quantityOfPositiveGrades}. Количество оставшихся оценок: ${quantityOfRemainingGrades}`);

// 6. Посчитайте и выведите количество студентов, получивших отрицательную оценку (балл ниже 60). Используйте аналогичный подход, как в предыдущем шаге.

const negativeGrades = grades.filter((grade) => {
    if (grade < 60) {
        return grade;
    }
});

const quantityOfNegativeGrades = negativeGrades.length;
const quantityOfRemainingGradesFromNegative = grades.length - quantityOfNegativeGrades;

console.log(`Отрицательные оценки: ${negativeGrades}. Количество отрицательных оценок:${quantityOfNegativeGrades}. Количество оставшихся оценок: ${quantityOfRemainingGradesFromNegative}`);

// 7. Преобразуйте числовые оценки в формат буквенных оценок A/B/C/D/E, используя следующие правила:
// - Если оценка находится в диапазоне от 80 до 100, преобразуйте её в "A"
// - Если оценка находится в диапазоне от 60 до 79, преобразуйте её в "B"
// - Если оценка находится в диапазоне от 40 до 59, преобразуйте её в "C"
// - Если оценка находится в диапазоне от 20 до 39, преобразуйте её в "D"
// - Если оценка ниже 20, преобразуйте её в "E".

const convertGrades = (grades) => {
    const convertedGrades = [];
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 80 && grades[i] <= 100) {
            convertedGrades.push("A");
        } else if (grades[i] >= 60 && grades[i] <= 79) {
            convertedGrades.push("B");
        } else if (grades[i] >= 40 && grades[i] <= 59) {
            convertedGrades.push("C");
        } else if (grades[i] >= 20 && grades[i] <= 39) {
            convertedGrades.push("D");
        } else {
            convertedGrades.push("E");
        }
    }

    return convertedGrades;
}

console.log(`Оценки в буквенном формате: ${convertGrades(grades)}`);