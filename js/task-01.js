/**Напиши скрипт который:

1.Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
2.Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента 
(тега <h2>) и количество элементов в категории (всех вложенных в него <li>).*/

/*Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5*/

const listWithLiItem = document.querySelectorAll('li.item')
console.log(`Number of categories: ${listWithLiItem.length}`);
listWithLiItem.forEach(item => {
    const nameTitleEl = item.querySelector('h2').textContent;
  
    const totalTitleEl = item.querySelectorAll('li').length;
    
    console.log(`Category: ${nameTitleEl} \n Elements: ${totalTitleEl}`);
    
})









