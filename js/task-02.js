/**
 * Напиши скрипт, который для каждого элемента массива ingredients:

1. Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
2. Добавит название ингредиента как его текстовое содержимое.
3. Добавит элементу класс item.
4. После чего вставит все <li> за одну операцию в список ul.ingredients.
 */

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arr = document.querySelector('#ingredients');

let newList = ingredients.map(el => {

    const listIngredients = document.createElement('li');
    listIngredients.textContent = el;
    
    return listIngredients;
});

arr.append(...newList)

console.log(newList);