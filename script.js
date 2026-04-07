// let links = document.querySelector('.header .links');
// let iconBrs = document.querySelector('.header .fa-bars');

// // تأكد من وجود العناصر
// if (iconBrs && links) {
//     iconBrs.onclick = function(e) {
//         e.stopPropagation();
//         links.classList.toggle('open');
        
//         // تغيير الأيقونة
//         if (links.classList.contains('open')) {
//             iconBrs.classList.remove('fa-bars');
//             iconBrs.classList.add('fa-x');
//         } else {
//             iconBrs.classList.remove('fa-x');
//             iconBrs.classList.add('fa-bars');
//         }
//     }
// }

// // إغلاق القائمة عند النقر خارجها
// document.addEventListener('click', function(event) {
//     if (links && iconBrs && links.classList.contains('open')) {
//         if (!links.contains(event.target) && !iconBrs.contains(event.target)) {
//             links.classList.remove('open');
//             iconBrs.classList.remove('fa-x');
//             iconBrs.classList.add('fa-bars');
//         }
//     }
// });

// // إغلاق القائمة عند النقر على رابط
// if (links) {
//     let linkItems = links.querySelectorAll('a');
//     linkItems.forEach(link => {
//         link.addEventListener('click', function() {
//             links.classList.remove('open');
//             if (iconBrs) {
//                 iconBrs.classList.remove('fa-x');
//                 iconBrs.classList.add('fa-bars');
//             }
//         });
//     });
// }

// ######################################################
// let header = document.querySelector('.header');

// window.addEventListener("scroll", () => {
//     if (window.scrollY >= 50) {
//         header.classList.add("scrolled");
//         // تغيير لون الأيقونة عند التمرير
//         if (iconBrs) {
//             iconBrs.style.color = "#000";
//         }
//     } else {
//         header.classList.remove("scrolled");
//         if (iconBrs) {
//             iconBrs.style.color = "#fff";
//         }
//     }
// });
// ######################################################
let header = document.querySelector('.header');

window.addEventListener("scroll", () =>{
    if (window.scrollY >= 50) {
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }
})
// ######################################################

const slider = document.getElementById("slider");
const afterWrapper = document.getElementById("afterWrapper");
const container = document.querySelector(".compare-container");

let isDragging = false;

slider.addEventListener("mousedown", () => {
  isDragging = true;
});

window.addEventListener("mouseup", () => {
  isDragging = false;
});

window.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  let rect = container.getBoundingClientRect();
  let offsetX = e.clientX - rect.left;

  let percentage = (offsetX / rect.width) * 100;

  percentage = Math.max(0, Math.min(100, percentage));

  afterWrapper.style.width = percentage + "%";
  slider.style.left = percentage + "%";
});
// ######################################################
let reviews = document.querySelectorAll('.review .row .box');
let dots = document.querySelectorAll('.review .row .dots span');
let next = document.querySelector('.review .row .icons .next');
let prev = document.querySelector('.review .row .icons .prev');

let current = Array.from(reviews).findIndex(e => e.classList.contains('active'));
if (current === -1) current = 0;

function showReviews(index) {
    reviews.forEach(e => e.classList.remove('active'));
    reviews[index].classList.add('active');
    dots.forEach(e => e.classList.remove('active'));
    dots[index].classList.add('active');
}

prev.onclick = function() {
    current++
    if (current >= reviews.length) current = 0;
    showReviews(current)
}
next.onclick = function() {
    current--
    if (current < 0) current = reviews.length - 1;
    showReviews(current)
}
// ######################################################
let counter = document.querySelectorAll('.landing .boxes div h5');

let counters = document.querySelectorAll('.landing .boxes div h5');

counters.forEach((count, index) => {
    let startValue = 0;
    let endValue = Number(count.dataset.counter);
    let duration = 2000; 
    let steps = 100; 
    let increment = Math.ceil(endValue / steps); 
    let stepTime = Math.floor(duration / steps); 

    let countNum = setInterval(() => {
        startValue += increment;
        if (startValue >= endValue) {
            startValue = endValue; 
            clearInterval(countNum);
        }
        if(index < 2){
            count.textContent = startValue.toLocaleString() + '+';
        } else {
            count.textContent = startValue.toLocaleString();
        }
    }, stepTime);
});
// ######################################################
let element = document.querySelectorAll('.reaval, .reaval-img');

let observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    })
}, {threshold: 0.2});

element.forEach((el) => observer.observe(el));


//###########3##
let links = document.querySelector('.header .links');
let iconBars = document.querySelector('.header .fa-bars');

iconBars.onclick = function() {
    if (this.classList.contains('fa-bars')){
    this.classList.replace('fa-bars', 'fa-x');
}else{
    this.classList.replace('fa-x', 'fa-bars');
}
    links.classList.toggle('open');
}
