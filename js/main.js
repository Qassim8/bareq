const nav = document.querySelector("#navbar");
const showNavbar = () => { 
    nav.style.cssText = "left: 0 "
}
const hideNavbar = () => {
    nav.style.cssText = "left: -100%";
}
const video = document.querySelector(".video-modal");

const videoShow = () => {
  video.style.cssText = "top: 0 !important";
};

const videoHide = () => {
  video.style.cssText = "top: -100% !important";
};

const faqShow = (e) => {
  console.log(event.target);
  if (event.target.classList.contains("fa-plus")) {
    event.target.classList.remove("fa-plus");
    event.target.classList.add("fa-x");
  } else {
    event.target.classList.add("fa-plus");
    event.target.classList.remove("fa-x");
  }
  const parent = event.target.parentElement;
  const parentOfparent = parent.parentElement;
  if (parentOfparent.nextElementSibling.classList.contains("hide")) {
    parentOfparent.nextElementSibling.classList.remove("hide");
    parentOfparent.nextElementSibling.classList.add("show");
  } else {
    parentOfparent.nextElementSibling.classList.add("hide");
    parentOfparent.nextElementSibling.classList.remove("show");
  }
};

// تحديد جميع العناصر التي تحتوي على العداد
const counters = document.querySelectorAll('.counter');

// إعداد المراقب (Observer) لمراقبة العناصر عند ظهورها في الشاشة
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // عندما يظهر العنصر، ابدأ العد لهذا العنصر
      startCounting(entry.target);
      // إلغاء مراقبة العنصر بعد أن يبدأ العد
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5 // يعني أن 50% من العنصر يجب أن يكون في الشاشة ليبدأ العد
});

// مراقبة جميع العناصر التي تحتوي على العداد
counters.forEach(counter => {
  observer.observe(counter);
});

// وظيفة بدء العد
function startCounting(counterElement) {
  const target = parseInt(counterElement.getAttribute('data-key')); // الحصول على الرقم الهدف
  let current = 0;
  const increment = target / 100; // لتحديد السرعة (100 خطوة لتصل للعدد النهائي)
  
  const interval = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(interval); // إيقاف العد بعد الوصول للهدف
    }
    counterElement.textContent = Math.floor(current); // تحديث النص في العنصر
  }, 20); // تحديث كل 20 مللي ثانية
}

