let options = {
  strings: ['Developer', 'Freelancer', 'Designer'],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true,
};
let typed = new Typed('.type', options);

// Portfolio
let portfolioBtns = document.querySelectorAll('#portfolio .nav-link');
let imgs = Array.from(document.querySelectorAll('#portfolio .tab-content div.active .row img'));
imageClick()
let slider = document.getElementById('slider');
let prevBtn = document.querySelector('.prevBtn');
let closeBtn = document.querySelector('.closeBtn');
let nextBtn = document.querySelector('.nextBtn');
let sliderImg = document.querySelector('#slider img');
let clickedImageIndex;

portfolioBtns.forEach((btn) => {
  btn.addEventListener('click', imgsUpdate);
});
function wait20ms() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 200);
  });
}
async function imgsUpdate() {
  await wait20ms();
  imgs = Array.from(document.querySelectorAll('#portfolio .tab-content div.active .row img'));
  console.log(imgs);
  imageClick();
};

// for each image open slider
function imageClick() {
  imgs.forEach((oneImg) => {
    oneImg.addEventListener('click', show);
  });
};
function show(e) {
  slider.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  sliderImg.src = this.src;
  clickedImageIndex = imgs.indexOf(this);
  document.querySelector('.current').innerHTML = clickedImageIndex + 1;
  document.querySelector('.total').innerHTML = imgs.length;
};
// close slider
closeBtn.addEventListener('click', close);
function close() {
  slider.style.display = 'none';
  document.body.style.overflowY = 'scroll';
};
// next and previous image
nextBtn.addEventListener('click', function () { slide(1) });
prevBtn.addEventListener('click', function () { slide(-1) });
function slide(i) {
  clickedImageIndex = clickedImageIndex + i;
  if (clickedImageIndex == imgs.length) {
    clickedImageIndex = 0;
  }
  if (clickedImageIndex < 0) {
    clickedImageIndex = imgs.length - 1;
  }
  document.querySelector('.current').innerHTML = clickedImageIndex + 1;
  sliderImg.src = imgs[clickedImageIndex].src;
}
// using keys
let box = document.querySelector('.box');
slider.addEventListener('click', function (e) {
  slider.style.display = 'none';
  document.body.style.overflowY = 'scroll';
});
box.addEventListener('click', function (e) {
  e.stopPropagation();
})
document.addEventListener('keydown', function (e) {
  if (slider.style.display === 'flex') {
    if (e.code == 'ArrowRight') { slide(1); }
    else if (e.code == 'ArrowLeft') { slide(-1); }
    else if (e.code == 'Escape') { close(); }
  }
})


// Counter
let counterSec = document.querySelector('#counter .item');
let counter = document.querySelectorAll('#counter .count');
let count1 = Number(counter[0].innerHTML);
let count2 = Number(counter[1].innerHTML);
let count3 = Number(counter[2].innerHTML);
let count4 = Number(counter[3].innerHTML);

function counter1() {
  if (count1 < 200) {
    count1++;
    counter[0].innerHTML = count1;
  }
  else {
    clearInterval();
  }
}
function counter2() {
  if (count2 < 345) {
    count2++;
    counter[1].innerHTML = count2;
  }
  else {
    clearInterval();
  }
}
function counter3() {
  if (count3 < 1800) {
    count3 += 5;
    counter[2].innerHTML = count3;
  }
  else {
    clearInterval();
  }
}
function counter4() {
  if (count4 < 1200) {
    count4 += 5;
    counter[3].innerHTML = count4;
  }
  else {
    clearInterval();
  }
}

// Form
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated');
      }, false)
    })
})()
let tArea = document.querySelector('form textarea');
let tAreaSpan = document.querySelector('form span');
tArea.addEventListener('keyup', function () {
  tAreaSpan.innerHTML = 50 - tArea.value.length;
})

// Scroll to Top
// Tool Tip
let toTop = document.getElementById('toTop');
toTop.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Navbar
var prevScrollpos = window.pageYOffset;
let navbar = document.querySelector('.navbar')
// Navbar Link
let navLinks = document.querySelectorAll('.navbar .nav-link');
let sec = document.querySelectorAll('.sec');

// Window Scroll
window.onscroll = function () {
  // 1
  let x = counterSec.offsetTop + counterSec.clientHeight - window.innerHeight;
  let y = x + window.innerHeight;
  if (window.scrollY.toFixed(0) > x && window.scrollY.toFixed(0) < y) {
    setInterval(function () { counter1() }, 5)
    setInterval(function () { counter2() }, 5)
    setInterval(function () { counter3() }, .5)
    setInterval(function () { counter4() }, .1)
  }
  // 2
  if (window.scrollY == 0) {
    navbar.classList.add('bg-transparent');
  }
  else {
    navbar.classList.remove('bg-transparent');
    navbar.classList.add('bg-dark');
    var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-62px";
    }
    prevScrollpos = currentScrollPos;
  }
  // 3
  if (window.scrollY > (window.innerHeight * .25)) {
    toTop.style.opacity = '1';
  }
  else {
    toTop.style.opacity = '0';
  }
  // 4
  let current = "";
  sec.forEach((section) => {
    let sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((li) => {
    li.classList.remove("active");
    if (li.getAttribute('href') == `#${current}`) {
      li.classList.add("active");
    }
  });
}

