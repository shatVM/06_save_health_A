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

document.getElementById('btn_health_wishes').addEventListener('click', () => {    
   let index = Math.floor(Math.random() * arrayOfhealthWishes.length)
   document.getElementById('p-health-wishes').innerText = arrayOfhealthWishes[index]
})

let galleryImage = 1

document.getElementById("main-image").setAttribute('src',`img/gallery/${galleryImage}.jpg`)

document.getElementById('right-arrow').addEventListener('click',()=>{
   galleryImage++
   console.log(galleryImage)

   if(galleryImage == 4) galleryImage = 1

   document.getElementById("main-image").setAttribute('src',`img/gallery/${galleryImage}.jpg`)
})

document.getElementById('left-arrow').addEventListener('click',()=>{
   galleryImage--
   console.log(galleryImage)

   if(galleryImage == 0) galleryImage = 3

   document.getElementById("main-image").setAttribute('src',`img/gallery/${galleryImage}.jpg`)
})