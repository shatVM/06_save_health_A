const arrayOfhealthWishes = [
   "Збалансоване харчування: вживайте більше овочів, фруктів, злаків і нежирного білка.",
   "Достатня кількість води: пийте не менше 1,5-2 літрів води на день.",
   "Фізична активність: робіть зарядку, ходіть пішки, займайтеся спортом.",
   "Здоровий сон: спіть 7-9 годин на добу.",
   "Режим дня: лягайте і прокидайтеся в один і той самий час.",
   "Уникайте стресів: практикуйте медитацію або дихальні вправи.",
   "Сонячне світло: проводьте час на свіжому повітрі, щоб отримати вітамін D.",
   "Особиста гігієна: регулярно мийте руки, підтримуйте чистоту тіла.",
   "Відмова від шкідливих звичок: мінімізуйте вживання алкоголю та відмовтеся від куріння.",
   "Підтримка імунітету: їжте продукти, багаті на вітаміни C, D та цинк.",
   "Контроль ваги: слідкуйте за масою тіла, уникайте переїдання.",
   "Регулярні медичні обстеження: відвідуйте лікаря хоча б раз на рік.",
   "Безпека харчових продуктів: мийте продукти, дотримуйтеся правил зберігання їжі.",
   "Позитивне мислення: підтримуйте емоційне здоров'я, спілкуйтеся з приємними людьми.",
   "Розвиток розуму: читайте, розв'язуйте головоломки, навчайтеся новому.",
   "Релаксація: знайдіть час для хобі та відпочинку.",
   "Захист від інфекцій: у період епідемій дотримуйтеся дистанції та носіть маску.",
   "Вітамінізація: за потреби приймайте вітамінні добавки (після консультації з лікарем).",
   "Рух під час роботи: якщо у вас сидяча робота, робіть перерви на розминку.",
   "Свіже повітря: часто провітрюйте приміщення, виходьте на прогулянки."
];

const arrayOfGalleryImages = [
   "1.jpg",
   "2.jpg",
   "3.jpg",
   "young-handsome-physician-medical-robe-with-stethoscope.jpg",
   "person-using-tensiometer-blood-pressure.jpg",
]

document.getElementById('btn_health_wishes').addEventListener('click', () => {    
   let index = Math.floor(Math.random() * arrayOfhealthWishes.length)
   document.getElementById('p-health-wishes').innerText = arrayOfhealthWishes[index]
})

let galleryImage = 0

amin(galleryImage)

//document.getElementById("main-image").setAttribute('src',`img/gallery/${arrayOfGalleryImages[galleryImage]}`)

document.getElementById('right-arrow').addEventListener('click',()=>{
   galleryImage++
   console.log(galleryImage)

   if(galleryImage == arrayOfGalleryImages.length) galleryImage = 0

   //document.getElementById("main-image").setAttribute('src',`img/gallery/${arrayOfGalleryImages[galleryImage]}`)
   amin(galleryImage)
})

document.getElementById('left-arrow').addEventListener('click',()=>{
   galleryImage--
   console.log(galleryImage)

   if(galleryImage == -1) galleryImage = arrayOfGalleryImages.length - 1

   //document.getElementById("main-image").setAttribute('src',`img/gallery/${arrayOfGalleryImages[galleryImage]}`)
   amin(galleryImage)
})


function amin(galleryImage){
   const mainImage = document.getElementById('main-image');
   mainImage.style.opacity = '0'; // Почати з прозорості
   mainImage.setAttribute('src', `img/gallery/${arrayOfGalleryImages[galleryImage]}`);
   setTimeout(() => {       
       mainImage.style.opacity = '1'; // Показати зображення
   }, 300); // Час анімації має співпадати з transition у CSS
}

const arrayOfObjects = [
   {
      id:1,
      title:"Аевіт",
      photo:"",
      description:"",
      rating:4,
      type:""
   },
   {
      id:2,
      title:"Вітамін С",
      photo:"",
      description:"",
      rating:3,
      type:""
   },
   {
      id:3,
      title:"Вітамін D",
      photo:"",
      description:"",
      rating:5,
      type:""
   },
   {
      id:4,
      title:"Вітамін B3",
      photo:"",
      description:"",
      rating:5,
      type:""
   },
   {
      id:5,
      title:"Омега-3",
      photo:"",
      description:"",
      rating:3,
      type:""
   },
   {
      id:6,
      title:"Magnium-B6",
      photo:"",
      description:"",
      rating:3,
      type:""
   },
   
]

console.log(arrayOfObjects)


arrayOfObjects.forEach((item) =>{
   console.log(item)

   let divVitamin = document.createElement('div')
   divVitamin.innerText = item.title
   divVitamin.classList.add('vitamin')

   document.getElementById("p-vitamins").appendChild(divVitamin)
}) 

