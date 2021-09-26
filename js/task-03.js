const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryMakeUp = document.querySelector('.gallery');
const imageMakeUp = images.map(item => {
  const imageMake = `<li><img src=${item.url} alt='${item.alt}'>`;
  return imageMake;
});

galleryMakeUp.insertAdjacentHTML('beforeend', imageMakeUp);

galleryMakeUp.style.display = "grid";
galleryMakeUp.style.gridTemplateColumns = '40% auto 40%';
const makeStyleImg = document.querySelectorAll('img').forEach(item => {
  item.style.display = 'block';
  item.style.width = '80%';
  item.style.height = '80%';
});


