let reviews = document.querySelector('.reviews__block');
let moreReviews = document.querySelector('.reviews__more');
let i = 0
let count = 6;

moreReviews.addEventListener('click', () => {
 count += 3;
 createElem()
})

async function createElem() {
 // 
 let url = `./files/reviews.json`
 let response = await fetch(url)
 let json = await response.json();
 //
 // итерация по json файлу
 if (count > json.length) {
  moreReviews.style.display = "none"
 }
 for (i; i < count; i++) {

  // создание контейнера   
  let reviewBox = document.createElement("div");
  reviewBox.className = 'reviewer';

  //Контейнер для фото и рейтинга
  let reviewerHead = document.createElement("div");
  reviewerHead.className = 'reviewer__head';

  //Контейнер для информации о человеке (Имя и Возраст)
  let reviewerInfo = document.createElement("div");
  reviewerInfo.className = 'reviewer__info';

  //Создание оценки 
  let grade = document.createElement("div");
  grade.className = 'reviewer__grade';


  //Заполнение оценки
  let gradeFill = document.createElement("span");
  gradeFill.className = 'reviewer__grade-fill';
  gradeFill.style.width = `${20 * json[i].Rating}%`
  //Создание имени
  let name = document.createElement("span");
  name.className = 'reviewer__name';
  name.textContent = json[i].Name;

  //Cоздание возраста
  let age = document.createElement("span");
  age.className = 'reviewer__age';
  age.textContent = json[i].Age;

  //Создание услуги 
  let service = document.createElement("span");
  service.className = 'reviewer__service';
  service.textContent = json[i].Service;

  //Какая услуга 

  let serviceDetails = document.createElement("span");
  serviceDetails.className = 'reviewer__service-details';
  serviceDetails.textContent = `${json[i].ServiceDetails} ${json[i].Graft}`;

  //Добавление фото 
  let photo = document.createElement('img');
  photo.className = 'reviewer__photo';
  photo.src = json[i].Photo;


  //Создание текста   
  let p = document.createElement('p');
  p.className = 'reviewer__text'
  p.textContent = json[i].Review

  //Создание кнопки  'Подробнее'  
  let button = document.createElement('a');
  button.href = json[i].Page
  button.className = 'review-details'
  button.innerHTML = 'Подробнее'





  //Добавление в верстку
  grade.appendChild(gradeFill)
  reviewerHead.appendChild(photo)
  reviewerHead.appendChild(grade)
  reviewerInfo.appendChild(name)
  reviewerInfo.appendChild(age)
  reviewBox.appendChild(reviewerHead)
  reviewBox.appendChild(reviewerInfo)
  reviewBox.appendChild(service)
  reviewBox.appendChild(serviceDetails)
  reviewBox.appendChild(p)
  reviewBox.appendChild(button)
  reviews.appendChild(reviewBox)
 }

}
createElem()