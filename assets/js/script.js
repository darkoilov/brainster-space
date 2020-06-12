// ---------------- homePage ---------------- 
var width = $(window).width();

let list = document.getElementById("list");
let products = [
  {
    id: "0",
    link: "https://brainster.co/",
    img: "assets/images/Za_Nas/edukacija1.jpg",
    title: "Едукација",
    desc:
      "Научи практични вештини за трансформација во кариерата. Нашата специјалност е да ти помогнеме да го најдеш правилниот skill set кој ќе одговори на реалните потреби на пазарот на труд. Организираме курсеви, академии и персонализирани обуки...",
  },
  {
    id: "1",
    link: "#events",
    img: "assets/images/Za_Nas/nastani.jpg",
    title: "Настани",
    desc:
      "Специјално курирани и организирани настани кои ги поврзуваат правите таленти со иновативните компании. Идејата е да нашата tech заедница расте, се инспирира и креира преку овие настани.",
  },
  {
    id: "2",
    link: "#",
    img: "assets/images/Za_Nas/coworking.jpg",
    title: "Coworking",
    desc:
      "Биди дел од tech заедницата на иноватори, креативци и претприемачи. Резервирај стол во нашата shared office. Пичирај го твојот бизнис и нашиот тим заедно ќе одлучи секој месец со кого да ги дели своите канцеларии.",
  },
  {
    id: "3",
    link: "#spaceEvent",
    img: "assets/images/Za_Nas/prostor_zan_astani.jpg",
    title: "Простор за настани",
    desc:
      "Имаш идеја за обука или настан од tech областа? Ние имаме простор за реализација. Нашиот тим внимателно ги одбира и курира сите настани.",
  },
  {
    id: "partnerstva",
    link: "#",
    img: "assets/images/Za_Nas/partnerstva_tech_komp.jpg",
    title: "Партнерства со Tech компании",
    desc:
      "Целта и идејата е креирање на tech заедница која ќе се негува, расте и креира подобро утро за сите нас. Преку директно и индиректно поврзување на tech талентите со компаниите.",
  },
  {
    id: "inovacii",
    link: "#",
    img: "assets/images/Za_Nas/IMG_7397.jpg",
    title: "Иновации за компании",
    desc:
      "Нов концепт кој ќе им помогне на компаниите да преминат од стариот во новиот начин на работење. Подгответе ја вашата компанија за дигитална трансформација.",
  },
];

products.forEach((e) => {
  list.innerHTML += `<div class="item" id="${e.id}">
  <a href="${e.link}" class="link">
    <div class="img-content">
    <img src="${e.img}" alt="">
    </div>
    <div class="item-content clearfix">
      <h2 class="title">${e.title}</h2>
      <p class="paragraph">${e.desc}</p>
      <i class="far fa-arrow-alt-circle-right arrow"></i>
      </div>
  </a>
  </div>`;
});

let education = document.querySelector("#education");

education.innerHTML += `<div class='col-lg-5 col-sm-12 edu'>
  <h1>Едукација</h1>
  <p>Дали си подготвен да одговориш на потребите на иднината. Вистинските курсеви, академии и семинарски
  кои ќе ти овозможат кариерна трансформација во областа дигитален маркетинг, дизајн, програмирање и Data Science</p>
  <a href="#" type="button" class="btn btns academyBtn academyEducation">АКАДЕМИИ</a>
  <a href="#" type="button" class="btn btns companyBtn companyEducation">ЗА КОМПАНИИ</a>
</div>
<div class='col-lg-7 col-sm-12 edu2'>
<img src= 'assets/images/Za_Nas/edukacija1.jpg'>
</div>
<div class='col-lg-5 col-sm-12 displayNone edu1'>
        <h1>КОМПАНИИ</h1>
        <p>Компаниите имаат можност да ги надоградат своите тимови, а со тоа да го подобрат перформансот на својата компанија. <br> <br>
        Дигиталната трансформација се случува, а вашите компании треба да бидат подготвени за да се адаптираат соодветно. Обуки, семинари, курсеви или team building?  <br> <br>
        Во Brainster Space имаме специјално обучен тим кој е подготвен да ја насочи и адаптира сподели својата експертиза со денешните потреби на компаниите.</p>
          <a href="#" type="button" class="btn btns academyBtn academyEducation accbtn">АКАДЕМИИ</a>
          <a href="#" type="button" class="btn btns companyBtn companyEducation">ЗА КОМПАНИИ</a>
        </div>
        <div class='col-lg-7 col-sm-12 displayNone edu3'>
          <img src= 'assets/images/IMG_7707.jpg'>
          </div>
   `;

let nastani = document.getElementById("nastani");

let events = [
  {
    id: "0",
    link: "#",
    img: "assets/images/Nastani/IMG_7481.jpg",
    title: "Codeworks",
    desc:
      "Вистинскиот настан за сите tech таленти кои сакаат да кодираат и да научат што е ново во tech заедицата. Настан кој ги поврзува mid programerite со IT компаниите. <br> Deep Dive Intensive Seminar <br> Ексклузивни семинари кои комбинираат три различни техники на учење. ",
  },
  {
    id: "1",
    link: "#",
    img: "assets/images/Nastani/instruktori.jpg",
    title: "Deep Dive into Marketing",
    desc:
      "Deep Dive into Marketing се серија од интензивни семинари кои се наменски подготвени да ти помогнат да ги совладаш и предвидиш современите промени, предизвици и идните трендови во областа во маркетингот.",
  },
  {
    id: "2",
    link: "#",
    img: "assets/images/Nastani/Hristijan-Nosecka-1024x536.jpg",
    title: "Deep Dive into Data Science",
    desc:
      "Deep Dive into Data Science се серија од интензивни семинари кои се наменски подготвени да ти помогнат да ги совладаш и предвидиш современите промени, предизвици и идните трендови во областа на Data Science",
  },
];

events.forEach((e) => {
  nastani.innerHTML += `<div class="item" id="${e.id}">
  <a href="${e.link}" class="link">
    <div class="img-content">
    <img src="${e.img}" alt="">
    </div>
    <div class="item-content clearfix">
      <h2 class="title">${e.title}</h2>
      <p class="paragraph">${e.desc}</p>
      <i class="far fa-arrow-alt-circle-right arrow"></i>
      </div>
  </a>
  </div>`;
});

let nastaniBtn = document.querySelector(".nastaniBtn");

nastaniBtn.innerHTML += `<a href="#events" type="button" class="btn btns academyBtn calendarForEventsBtn"><i class="far fa-calendar-alt"></i>КАЛЕНДАР НА НАСТАНИ</a>`;

let coworking = document.getElementById("coworking");

coworking.innerHTML += `<div class='col-lg-7 col-md-12'>
<img src= 'assets/images/Za_Nas/coworking.jpg'>
</div>
<div class='col-lg-5 col-md-12'>
<span>SOLD OUT</span>
<h1>Coworking</h1>
<p>Биди дел од tech заедницата на иноватори, креативци и претприемачи. Резервирај стол во нашата shared office. Пичирај го твојот бизнис и нашиот тим заедно ќе одлучи секој месец со кого да ги дели своите канцеларии.</p>
<a href="#" type="button" class="btn btns academyBtn coworkingBtn">РЕЗЕРВИРАЈ МЕСТО</a>
<p id="coworkingAddText">Местата се распродадени.</p>
</div>
`;

let spaceEvent = document.getElementById("spaceEvent");

spaceEvent.innerHTML += `
<div class='col-lg-5 col-md-12'>
<h1>Простор за настани</h1>
<p>Можност за презентации, обуки, конференции, networking настани. Одбери ја просторијата која најмногу ќе одговара на твојата идеја. Го задржуваме правото да одбереме кој настан ќе се организира во нашиот Brainster Space.</p>
<a href="#spaceEvent" type="button" class="btn btns academyBtn"><i class="fas fa-arrow-right"></i>ВИДИ ГО ПРОСТОРОТ</a>
</div>
<div class='col-lg-7 col-md-12'>
<img src= 'assets/images/Za_Nas/prostor_zan_astani.jpg'>
</div>
`;
let partners = document.querySelector(".partners");
partners.innerHTML +=
  '<a href="#spaceEvent" type="button" class="btn btns academyBtn"><i class="fas fa-arrow-right"></i>ВИДИ ГО ПРОСТОРОТ</a>';

let joinModal = document.querySelector("#myModal");
let navBtn1 = document.querySelector("#navBtn1");
let navBtn2 = document.querySelector("#navBtn2");
let span = document.getElementsByClassName("close")[0];
let closeBtn = document.querySelector(".closeBtn");
let closeBtn1 = document.querySelector(".closeBtn1");


navBtn1.addEventListener("click", function () {
  joinModal.style.display = "block";
});
navBtn2.addEventListener("click", function () {
  joinModal.style.display = "block";
});
span.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", function (e) {
  if (
    e.target == joinModal ||
    e.target == partnersModal ||
    e.target == innovationModal
  ) {
    joinModal.style.display = "none";
    partnersModal.style.display = "none";
    innovationModal.style.display = "none";
  }
});

let partnersModal = document.querySelector("#myModal2");

let partnersBtn = document.querySelector("#partnerstva");
let partnersCloseX = document.getElementsByClassName("partnersClose")[0];
let partnersCloseBtn = document.querySelector("#partnersCloseBtn");



function closeModal() {
  partnersModal.style.display = "none";
  innovationModal.style.display = "none";
  joinModal.style.display = "none";

  let partnersModal2 = document.querySelector("#myModal2");
  var feedback = partnersModal2.querySelectorAll(".invalid-feedback");
  let innovationModal2 = document.querySelector("#myModal3");
  var feedback1 = innovationModal2.querySelectorAll(".invalid-feedback");

  for (let i = 0; i < feedback.length; i++) {
    feedback[i].style.display = "none";
  }
  for (let i = 0; i < feedback1.length; i++) {
    feedback1[i].style.display = "none";
  }

  var innovationInput = innovationModal.querySelectorAll(".form-control");
  var partnersInput = partnersModal.querySelectorAll(".form-control");

  for (let i = 0; i < innovationInput.length; i++) {
    innovationInput[i].value = "";
    innovationInput[i].style.borderColor = "black";
  }
  for (let i = 0; i < partnersInput.length; i++) {
    partnersInput[i].value = "";
    partnersInput[i].style.borderColor = "black";
  }

}
let feedbackNumber = document.querySelector(".feedbackNumber")
let feedbackName = document.querySelector(".feedbackName")
function validatePartnersModal() {
  var forms = document.getElementsByClassName("needs-validation");
  var validation = Array.prototype.filter.call(forms, function (form) {
    window.addEventListener("load", function () {
      form.addEventListener("submit", function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          // event.stopPropagation();
          form.classList.add("was-validated");
          feedbackNumber.style.display = "block";
          feedbackName.style.display = "block";
        }
        let inputUserPartner = document.querySelector("#usrname2")
        let inputNumberPartner = document.querySelector("#number2")
        if (inputUserPartner.checkValidity()) {
          feedbackName.style.display = "none";
        }
        if (inputNumberPartner.checkValidity()) {
          feedbackNumber.style.display = "none";
        }

      });
    });
  });
}
validatePartnersModal();

partnersBtn.addEventListener("click", function (e) {
  partnersModal.style.display = "block";
  feedbackNumber.style.display = "none";
  feedbackName.style.display = "none";
});

partnersCloseBtn.addEventListener("click", closeModal);
partnersCloseX.addEventListener("click", closeModal);

let innovationModal = document.querySelector("#myModal3");
let innovationBtn2 = document.querySelector("#inovacii");
let innovationCloseX2 = document.getElementsByClassName("partnersClose2")[0];
let innovationCloseBtn2 = document.querySelector("#partnersCloseBtn2");

innovationBtn2.addEventListener("click", function (e) {
  innovationModal.style.display = "block";
});

innovationCloseX2.addEventListener("click", closeModal);
innovationCloseBtn2.addEventListener("click", closeModal);

let visibleEdu = true;
$(".companyBtn").click(function (e) {
  e.preventDefault();
  $(".edu").hide();
  $(".edu2").hide();
  $(".edu1").show();
  $(".edu3").show();
});
$(".accbtn").click(function (e) {
  e.preventDefault();
  $(".edu").show();
  $(".edu2").show();
  $(".edu1").hide();
  $(".edu3").hide();
});
$('.academyEducation').click(function (e) {
  e.preventDefault();
})

let coworkingBtn = document.querySelector(".coworkingBtn");
let coworkingAddText = document.querySelector("#coworkingAddText");
coworkingBtn.addEventListener("click", function (e) {
  e.preventDefault();
  coworkingAddText.style.display = "block";
  coworkingAddText.style.textDecoration = "none";
});

var coworkingAddTextInterval = setInterval(coworkingaddedTextInterwal, 3000);
function coworkingaddedTextInterwal() {
  coworkingAddText.style.display = "none";
}

let footer = document.querySelector('.footer')

footer.innerHTML = `<div class="row">
<div class="col-md-4 col-lg-2 links">
  <h5>Корисни линкови</h5>
  <ul>
    <li>
     <a href="" class="contactPopup">Контакт
<span class="popuptext" id="contactPopup">
<h3>Контакт</h3>
<ul>
<li>
  <b>Емаил:</b> anja@brainster.co 
</li>
<li>
  <b>Телефон:</b> 070 233 414 
</li>
</ul>
</span>
</a>
</li>
    <li>
      <a href="https://www.wearelaika.com/">Отворени Позиции</a>
    </li>
    <li>
      <a href="https://medium.com/wearelaika/brainster-space-the-new-home-of-the-local-tech-community-in-skopje-ffe97b564152
      ">Галерија</a>
    </li>
    <li>
      <a href="#">Календар</a>
    </li>
  </ul>
</div>
<div class="col-md-4 col-lg-2 center">
  <h5>Социјални мрежи</h5>
  <ul>
    <li>
      <div class="row icons center">
        <div class="col-md-4 col-lg-4 col-2">
          <a href="#"><i class="fab fa-facebook facebook"></i>
          </a> </div>
        <div class="col-md-4 col-lg-4 col-2">
          <a href="#"> <i class="fab fa-linkedin linkedin"></i>
          </a> </div>
        <div class="col-md-4 col-lg-4 col-2">
          <a href="#"><i class="fab fa-instagram insta"></i></a>
        </div>
      </div>
    </li>
  </ul>
</div>
<div class="col-md-2 offset-md-2 col-lg-1 offset-lg-7">
  <a class="navbar-brand footerLogo" href="#"><img src="assets/images/brainster_space_logo.svg" alt=""></a>
</div>
</div>
<div class="copyright">
<p class="margin0">COPYRIGHT&copy;BrainsterSpace. All Rights Reserved.</p>
</div>`;

popupBtn = document.querySelector(".contactPopup");
let popup = document.getElementById("contactPopup");

popupBtn.addEventListener("click", function (e) {
  e.preventDefault();
  popup.classList.toggle("showContactPopup");
});
popupBtn.addEventListener("mouseout", function (e) {
  e.preventDefault();
  popup.classList.remove("showContactPopup");
});

var filterBtns = document.getElementById("navActive");
var btns = filterBtns.getElementsByClassName("btnsActive");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var active = document.getElementsByClassName("active");
    active[0].className = active[0].className.replace(" active", "");
    this.className += " active";
    this.className += "";
  });
}


// ---------------- spaceBlog ---------------- 


let listSpaceBlog = document.getElementById("listSpaceBlog");

let filterCard = [
  {
    id: 'kariera1',
    category: 'КАРИЕРА',
    link: '#',
    img: 'assets/images/Space_Blog_Kartici/deepd.png',
    title: 'Deep Dive семинари кои ќе овозможуваат брз кариерен напредок',
    desc: 'Нов продукт од Brainster во Brainster Space. Интензивни дводневни семинари кои ќе ти помогнат од Mid level брзо да го постигнеш твојот Senior напредок.',
    number: '1/9'
  },
  {
    id: 'tehnologija1',
    category: 'ТЕХНОЛОГИЈА',
    link: '#',
    img: 'assets/images/Space_Blog_Kartici/OFIS LEASURE_01_1.jpg',
    title: 'Ако не те бива за програмирање дали можеш да имаш кариера...',
    desc: 'Tech индустријата е најпосакувана област за работа, заради големата побарувачка, секојдневните промени и големиот инкам.',
    number: '2/9'

  },
  {
    id: 'tehnologija2',
    category: 'ТЕХНОЛОГИЈА',
    link: '#',
    img: 'assets/images/Space_Blog_Kartici/Data.jpeg',
    title: 'Што значи денес, твојата канцеларија да е smart?',
    desc: 'На отварањето на Brainster Space, добиваме супер подарок- smart home уред. Голем дел од нас беа збунети за тоа што се можеме да добиеме со него.',
    number: '3/9'
  },
  {
    id: 'datascience1',
    category: 'DATA SCIENCE',
    link: '#',
    img: 'assets/images/Space_Blog_Kartici/tech.jpg',
    title: 'Како до кариера во Data Science?',
    desc: 'Од искуството на студентите на нашата академија, решивме да ви помогнеме со неколку tips за потребите skills за да започнете да работите Data Science.',
    number: '4/9'
  },
  {
    id: 'marketing1',
    category: 'МАРКЕТИНГ',
    link: '#',
    img: 'assets/images/Space_Blog_Kartici/instruktori.jpg',
    title: 'Интервју со Николај Ванчев, арт директор во Tank, Estonija. #SpaceFamily',
    desc: 'Николај Ванчев е Creative direktor во TANK (ЕСТОНИЈА). Неговата успешна 12 годишна кариера како арт директор тој ја гради во реномирани агенции...',
    number: '5/9'
  },
  {
    id: 'dizajn1',
    category: 'ДИЗАЈН',
    link: '#',
    img: 'assets/images/Space_Blog_Kartici/design.jpg',
    title: 'Зошто дизајн, накратко со Дијана Димитриевска #SpaceFamlily',
    desc: 'Интервју со Дијана Димитриевска, графички дизајнер, DJ и инструктор на Академијата за графички дизајн во Brainster.',
    number: '6/9'
  },
  {
    id: 'dizajn2',
    category: 'ДИЗАЈН',
    link: '#',
    img: 'assets/images/Space_Blog_Kartici/mobile.jpg',
    title: 'Што е потребно за добар мобилен дизајн',
    desc: 'UX/UI дизајнерите се дигитални продукт дизајнери. Нивната задача е да создаваат корисен, релевантен и едноставен за корисниците продукт.',
    number: '7/9'
  }, {
    id: 'impact1',
    category: 'IMPACT',
    link: '#',
    img: 'assets/images/Space_Blog_Kartici/Team-Picture-1200x600.jpg',
    title: 'Македонско-американската компанија Upshift доби инвестиција од 3.7 милиони...',
    desc: 'Он-дименд платформата за работа се шири со нова рунда финансирање предводена од Recruit која е најголемата HR Tech компанија во светот...',
    number: '8/9'
  }, {
    id: 'impact2',
    category: 'IMPACT',
    link: '#',
    img: 'assets/images/Space_Blog_Kartici/20191128_141433810_iOS-1200x600.jpg',
    title: 'Локалната апликација Challenger и нејзиниот импакт. #SpaceFamily',
    desc: 'Мисијата на Challenger е да создавање општествено одговорна заедница која создава подобри индивидуални навики...',
    number: '9/9'
  }
];

filterCard.forEach(e => {
  listSpaceBlog.innerHTML += `<div class="item filterDiv" id="${e.id}">
  <a href="#spaceBlog/cards" class="link">
    <div class="img-content">
    <img src="${e.img}" alt="">
    </div>
    <div class="item-content clearfix textSpaceBlog">
      <h2 class="title">${e.title}</h2>
      <p class="paragraph">${e.desc}</p>
      <div>
      <span class="categoryBg">${e.category}</span>
      <i class="far fa-arrow-alt-circle-right arrow"></i></div>
      </div>
  </a>
  </div>`;
});


let carousel = document.querySelector('.carousel-inner')

filterCard.forEach(e => {
  carousel.innerHTML += `<div class="carousel-item">
  <div class="filterCardImg width100">
  <img src="${e.img}" alt="">
  </div> 
  <div class="carousel-caption">
  <span class="categoryBg">${e.category}</span>
  <h1 class="title">${e.title}</h1>
  <p class="paragraph">${e.desc}</p>
  <div class="carouselPhotoNum">${e.number}</div>
  <a  href="#spaceBlog/carousel" type="button" class="btn btns floatLeft carouselBtn"><i class="fas fa-arrow-right"></i> ДОЗНАЈ ПОВЕЌЕ</a>
  </div>`
})

document.querySelector("#demo > div > div:nth-child(1)").classList.add('active')




filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeFilterClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addFilterClass(x[i], "show");
  }
}

function addFilterClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
  }
}

function removeFilterClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

document.querySelector("#kariera1").classList.add('kariera')
document.querySelector("#tehnologija1").classList.add('tehnologija')
document.querySelector("#tehnologija2").classList.add('tehnologija')
document.querySelector("#datascience1").classList.add('datescience')
document.querySelector("#marketing1").classList.add('marketing')
document.querySelector("#dizajn1").classList.add('dizajn')
document.querySelector("#dizajn2").classList.add('dizajn')
document.querySelector("#impact1").classList.add('impact')
document.querySelector("#impact2").classList.add('impact')



var filterBtns = document.getElementById("filterBtns");
var btns = filterBtns.getElementsByClassName("filterBtn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var active = document.getElementsByClassName("active");
    active[1].className = active[1].className.replace(" active", "");
    this.className += " active";
    this.className += "";
  });
}

$('.navbarTogglerFilter').click(function () {
  if ($(".filter").css("display") === "block") {
    $('#filterBtns > a.btn.filterBtn').animate({ "marginTop": "-30" }, 500)
    $('#filterBtns > a.btn.filterBtn').animate({ "marginTop": "0" }, 500)

    $(".filter").animate({ height: "0" }, 500, function () {
      $(this).css("display", "none");
    })
  } else {
    $('.filter').css("display", "block");
    $('#filterBtns > a.btn.filterBtn').animate({ "marginTop": "0" }, 500)

    $(".filter").animate({ height: "380" }, 500)
  }
})

// ---------------- events ---------------- 

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let months = ['Јануари', 'Февруари', 'Март', 'Април', 'Мај', 'Јуни', 'Јули', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември']

let nextBtn = document.querySelector('#calendarNextBtn');
let prevBtn = document.querySelector('#calendarPrevBtn');

$('#calendarNextBtn').click(function (e) {
  next()
  e.preventDefault()
})
$('#calendarPrevBtn').click(function (e) {
  prev()
  e.preventDefault()
})


const eventsData = [
  {
    date: new Date(2020, 3, 4),
    title: 'Deep dive into Data Science',
    time: '10:00 - 18:00ч',
    day: 'Ден 1',
    bgColor: '#162C9B',
    color: 'white'
  },
  {
    date: new Date(2020, 3, 5),
    title: 'Deep dive into Data Science',
    time: '10:00 - 18:00ч',
    day: 'Ден 2',
    bgColor: '#162C9B',
    color: 'white'
  },
  {
    date: new Date(2020, 3, 25),
    title: 'Deep Dive into Marketing',
    time: '10:00 - 18:00ч',
    day: 'Ден 1',
    bgColor: 'red',
    color: 'white'
  },
  {
    date: new Date(2020, 3, 26),
    title: 'Deep Dive into Marketing',
    time: '10:00 - 18:00ч',
    day: 'Ден 2',
    bgColor: 'red',
    color: 'white'
  },
]

renderCalendar(currentMonth, currentYear, eventsData);

function next() {
  currentYear = (currentMonth == 11) ? currentYear + 1 : currentYear;
  currentMonth = (currentMonth + 1) % 12;
  renderCalendar(currentMonth, currentYear, eventsData);
}

function prev() {
  currentYear = (currentMonth == 0) ? currentYear - 1 : currentYear;
  currentMonth = (currentMonth == 0) ? 11 : currentMonth - 1;
  renderCalendar(currentMonth, currentYear, eventsData);
}

function renderCalendar(month, year, events) {
  let renderToday = new Date();
  let firstDay = new Date(year, month).getDay();
  let daysInMonth = 32 - new Date(year, month, 32).getDate();

  let calendar = document.querySelector('#calendar-body');
  let monthAndYear = document.querySelector('#montyAndYear')
  monthAndYear.innerHTML = `${months[month]} ${year}`;
  calendar.innerHTML = '';
  let thisYearAndMonthEvents = events.filter(event => event.date.getFullYear() == year && event.date.getMonth() == month);

  let date = 1;
  for (let i = 0; i < 6; i++) {
    let week = document.createElement('div');
    week.classList.add('calendar-week');
    for (let j = 0; j < 7; j++) {
      if (i == 0 && j < firstDay) {
        let emptyCell = document.createElement('div');
        emptyCell.classList.add('empty-cell');
        week.appendChild(emptyCell);
      } else if (date <= daysInMonth) {
        let dayCell = document.createElement('div');
        dayCell.classList.add('day-cell');
        if (date == renderToday.getDate() && month == renderToday.getMonth() && year == renderToday.getFullYear()) {
          dayCell.classList.add('today');
        }
        let dayCellHTML = '';
        if (thisYearAndMonthEvents.length) {
          let todayEvent = thisYearAndMonthEvents.filter(event => event.date.getDate() == date);
          if (todayEvent.length) {
            dayCell.classList.add('event-day');

            todayEvent.forEach(ev => {
              dayCellHTML += `<div class="event" style="border-left:4px solid ${ev.bgColor}"><div>${ev.title}</div><div>${ev.time}</div><div>${ev.day}</div></div><span>${date}</span>`;
              dayCell.style.backgroundColor = ev.bgColor;
              dayCell.style.color = ev.color;
            });
          }
        }
        dayCell.innerHTML = (dayCellHTML == '') ? `<span>${date}</span>` : dayCellHTML;
        week.appendChild(dayCell);
        date++;
      } else if (date > daysInMonth) {
        let emptyCell = document.createElement('div');
        emptyCell.classList.add('empty-cell');
        week.appendChild(emptyCell);
      }
    }
    calendar.appendChild(week);
  }
}

let nextEvent = document.querySelector('.nextEvent');

nextEvent.innerHTML += `<div class="col-md-5 leftEvent">
<p>${eventsData[1].date.getDate()}/${eventsData[0].date.getDate()}.${eventsData[1].date.getMonth()}.${eventsData[1].date.getFullYear()}</p>
<p class="nextEventsTitle">${eventsData[0].title}<p>
<p>${eventsData[0].time}</p>
</div>
<div class="col-md-5 rightEvent">
<p>${eventsData[2].date.getDate()}/${eventsData[3].date.getDate()}.${eventsData[3].date.getMonth()}.${eventsData[3].date.getFullYear()}</p>
<p class="nextEventsTitle">${eventsData[3].title}<p>
<p>${eventsData[3].time}</p>
</div>
`
// ---------------- academyPage ---------------- 

let academy = document.getElementById("academy");

academy.innerHTML += `
<div class='col-lg-4 col-sm-12 selfCenter'>
<h1>Академии</h1>
<p>Нашите академии ќе ти помогнат да ги совладаш најбараните вештини на денешницата преку интерактивна настава и практична работа на реални проекти.</p>
<p>Инструктори кои се докажани експерти во својата област. Преку нив имаш можност да ги научиш и предвидиш предизвиците на иднината на работење и да се поврзеш со сегашните и идните врвни професионалци и компании.</p>
<p>Академиите ќе ти го отворат патот кон кариера каква што посакуваш.
</p>
</div>
<div class='col-lg-8 col-sm-12'>
<img src= 'assets/images/Za_Nas/prostor_zan_astani.jpg'>
</div>
`;

let academyCard = document.getElementById("academyCard");
let academyCards = [
  {
    link: "https://design.brainster.co/?utm_source=brainster.co&utm_medium=academies&utm_campaign=website&utm_content=design",
    img: "https://brainster.co/storage/academy_1574434268.jpg",
    title: "Академија за графички дизајн",
    desc1: "Слободни места: 4",
    desc2: "Уписи до: 26.08.2019",
    desc3: "Стани дизајнер за 7 месеци",
    desc4: "Партнери за вработување: 5",
  },
  {
    link:
      "https://marketpreneurs.brainster.co/?utm_source=brainster.co&utm_medium=academies&utm_campaign=website&utm_content=mkt",
    img: "https://brainster.co/storage/academy_1574507099.png",
    title: "Академија за дигитален маркетинг",
    desc1: "Слободни места: 4",
    desc2: "Уписи до: 26.08.2019",
    desc3: "Стани дизајнер за 7 месеци",
    desc4: "Партнери за вработување: 5",
  },
  {
    link: "https://codepreneurs.brainster.co/?utm_source=brainster.co&utm_medium=academies&utm_campaign=website&utm_content=frontend",
    img: "https://brainster.co/storage/academy_1574507399.png",
    title: "Академија за Front&minus;end програмирање",
    desc1: "Слободни места: 4",
    desc2: "Уписи до: 26.08.2019",
    desc3: "Стани дизајнер за 7 месеци",
    desc4: "Партнери за вработување: 5",
  },
  {
    link: "https://codepreneurs.brainster.co/?utm_source=brainster.co&utm_medium=academies&utm_campaign=website&utm_content=fullstack",
    img: "https://brainster.co/storage/academy_1574507592.png",
    title: "Академија за Full&minus;stack програмирање",
    desc1: "Слободни места: 4",
    desc2: "Уписи до: 26.08.2019",
    desc3: "Стани дизајнер за 7 месеци",
    desc4: "Партнери за вработување: 5",
  },
  {
    link: "https://datascience.brainster.co/?utm_source=brainster.co&utm_medium=academies&utm_campaign=website&utm_content=data_science",
    img: "https://brainster.co/storage/academy_1574508115.png",
    title: "Академија за Data science",
    desc1: "Слободни места: 4",
    desc2: "Уписи до: 26.08.2019",
    desc3: "Стани дизајнер за 7 месеци",
    desc4: "Партнери за вработување: 5",
  },
  {
    link: "https://qa.brainster.co/?utm_source=brainster.co&utm_medium=academies&utm_campaign=website&utm_content=qa",
    img: "https://brainster.co/storage/academy_1574507930.png",
    title: "Академија за software testing",
    desc1: "Слободни места: 4",
    desc2: "Уписи до: 26.08.2019",
    desc3: "Стани дизајнер за 7 месеци",
    desc4: "Партнери за вработување: 5",
  },
];

academyCards.forEach((e) => {
  academyCard.innerHTML += `
    <div class="item cardsAcademy col-md-4 col-lg-4 col-12">
    <a href="${e.link}" target="_blank" class="link academyCardsBackground">
      <div class="img-content imgAcademy">
      <img src="${e.img}" alt="">
      </div>
      <div class="item-content clearfix itemContentAcademy">
      <h2 class="title">${e.title}</h2>
      <div class="cardDescDiv">
        <div class="cardDesc"><i class="far fa-calendar-alt font16"></i>${e.desc1}</div>
        <div class="cardDesc"><i class="fas fa-user-tie marginRight10"></i>${e.desc2}</div>
        <div class="cardDesc"><i class="far fa-clock marginRight10"></i>${e.desc3}</div>
        <div class="cardDesc"><i class="fas fa-hands-helping marginRight10"></i>${e.desc4}</div>
        </div>
        </div>
    </a>
    </div>`;
});

// ---------------- spaceEvent ---------------- 

let spaceEvent2 = document.getElementById("spaceEventPage2");

spaceEvent2.innerHTML += `
<div class='col-lg-4 col-sm-12 selfCenter'>
<h1>Простор за настани</h1>
<p>Нашиот простор се прилагодува според потребите на вашиот настан. Седум различни простории и Space Kitchen.</p>
<p>Наменски создадени да се прилагодуваат и менуваат во согласност со типот на настан кој го организирате.</p>
<p>Организираме конференции до 150 ученици и обуки и предавања за групи од 20 ученици. Контактирај не за да ви хостираме одличен настан
</p>
<a href="#spaceEvent/eventHostContact" class="btn btns academyBtn booking"><i class="fas fa-plus"></i> БУКИРАЈ НЕ</a>
</div>
<div class='col-lg-8 col-sm-12'>
<img src= 'assets/images/Za_Nas/prostor_zan_astani.jpg'>
</div>
`;

let ourSpacesImgs = [
  {
    img: 'assets/images/Renderi/1.jpg',
    title: 'Brainster',
  },
  {
    img: 'assets/images/Renderi/2.jpg',
    title: 'Конференциска сала',
  },
  {
    img: 'assets/images/Renderi/3.jpg',
    title: 'Сала со бина',
  },
  {
    img: 'assets/images/Renderi/4.jpg',
    title: 'Адаптибилна училница',
  },
  {
    img: 'assets/images/Renderi/5.jpg',
    title: 'Училница',
  },
  {
    img: 'assets/images/Renderi/6.jpg',
    title: 'Училница',
  },
  {
    img: 'assets/images/Renderi/7.jpg',
    title: 'Хол',
  },
  {
    img: 'assets/images/Renderi/8.jpg',
    title: 'Канцелариски простор',
  },
  {
    img: 'assets/images/Renderi/9.jpg',
    title: 'Space Kitchen',
  }];

let ourSpacesLeft = document.querySelector('.ourSpacesLeft')
ourSpacesLeft.innerHTML += `
      <h1>Нашите простории</h1>
      <p>Комплетно адаптибилни. Една сала за 150 учесници или три помали сали за групи од по 50 учесника. Училници за од 25 до 40 учесника. Избор од две локации</p>
      <p>Пулт за прием. И најважното место за networking- Brainster Kitchen.</p>
      <p>Како го замислувате вашиот следен настан?</p>
      `;

let addAblumImg = document.getElementById('addAblumImg')
ourSpacesImgs.forEach(e => {
  addAblumImg.innerHTML += `<div class='albumImgs'> 
        <img src="${e.img}" alt="">
             <h5>${e.title}</h5>
      </div>`;
});

let spaceKitchen = document.getElementById("spaceKitchen");
spaceKitchen.innerHTML += `
<div class='col-lg-4'>
<div class='row'>
<div class='col-lg-12 spaceKitchenBgImg1 spaceKitchenImg'>
</div>
</div> 
<div class='row margin-top20'> 
<div class='col-lg-6 spaceKitchenImg spaceKitchenBgImg2'>
</div>
<div class='col-lg-6 spaceKitchenImg spaceKitchenBgImg3'>
</div>
</div> 
</div>
<div class='col-lg-4 spaceKitchenBgImg4'>
</div>
<div class='col-lg-4 col-sm-12 selfCenter'>
<h1>Space Kitchen</h1>
<p>Место каде сите настани започнуваат и завршуваат. Место каде нашиот тим готви и експериментира. Нашата кујна има само едно правило.</p>
<p>Храната мора да биде вегетаријанска. Пијалок, кафе или мезе. Вие одберете вид на кетеринг ние ќе го обезбедиме.</p>
</div>
`;

let eventHost = document.querySelector('.eventHost');

eventHost.innerHTML += `
<div class='col-lg-4 selfCenter'>
<h1>Event Host</h1>
<p class="margin-top20">Ања Макеска</p>
<p>anja@brainster.co</p>
<p>+389 (0)70 233 414</p>

</div>
<div class='col-lg-4 offset-lg-4 col-12 col-md-6'>
<img src= 'assets/images/Renderi/anja1.jpg'>
</div>
`
// -----------------------------------------------------------------------

$(window).on("resize", function () {
  responsiveMobileButton()
  filterBtnOnResize()
});
$(window).on("load", function () {
  responsiveMobileButton()
  filterBtnOnResize()
});
function responsiveMobileButton() {
  if ($(window).width() >= 427 && $(window).width() <= 992) {
    $('.navButton2').css("display", "none")
    $('#navBtn1').css("display", "block")
    $('.filter').css({ "display": "block", "height": "min-content" })
  } else if ($(window).width() < 427) {
    $('.navButton2').css({ "display": "block", "marginTop": "15px" })
    $('#navBtn1').css("display", "none")
    $('.filter').css("display", "none")
  } else if ($(window).width() > 992) {
    $('#navBtn2').css("display", "block")
    $('.navButton2').css("display", "block")
    $('.filter').css({ "display": "block", "height": "min-content" })
  }
}

function handleRoute() {
  let hash = location.hash;
  if (hash === "") {
    $("#homepageSection").show();
    $("#spaceBlogSection").hide();
    $("#eventsSection").hide();
    $("#academySection").hide();
    $("#spaceEventSection").hide();
    $('#navbarTogglerFilter').hide()
    $("#spaceBlogNavBtn").removeClass('active');
    $("#logo").addClass('active');
    $("#eventsNavBtn").removeClass('active');
    $("#academyNavBtn").removeClass('active');
    $("#spaceEventNavBtn").removeClass('active');
  } else if (hash === "#spaceBlog" || hash === "#spaceBlog/carousel" || hash === "#spaceBlog/cards") {
    $("#homepageSection").hide();
    $("#spaceBlogSection").show();
    $("#eventsSection").hide();
    $("#academySection").hide();
    $("#spaceEventSection").hide();
    $("#spaceBlogNavBtn").addClass('active');
    $("#logo").removeClass('active');
    $("#eventsNavBtn").removeClass('active');
    $("#academyNavBtn").removeClass('active');
    $("#spaceEventNavBtn").removeClass('active');
  } else if (hash === "#events") {
    $("#homepageSection").hide();
    $("#spaceBlogSection").hide();
    $("#eventsSection").show();
    $("#academySection").hide();
    $("#spaceEventSection").hide();
    $('.navbarTogglerFilter').hide()
    $("#spaceBlogNavBtn").removeClass('active');
    $("#logo").removeClass('active');
    $("#eventsNavBtn").addClass('active');
    $("#academyNavBtn").removeClass('active');
    $("#spaceEventNavBtn").removeClass('active');
  } else if (hash === "#academy") {
    $("#homepageSection").hide();
    $("#spaceBlogSection").hide();
    $("#eventsSection").hide();
    $("#academySection").show();
    $("#spaceEventSection").hide();
    $('.navbarTogglerFilter').hide()
    $("#spaceBlogNavBtn").removeClass('active');
    $("#logo").removeClass('active');
    $("#eventsNavBtn").removeClass('active');
    $("#academyNavBtn").addClass('active');
    $("#spaceEventNavBtn").removeClass('active');
  } else if (hash === "#spaceEvent" || hash === "#spaceEvent/eventHostContact") {
    $("#homepageSection").hide();
    $("#spaceBlogSection").hide();
    $("#eventsSection").hide();
    $("#academySection").hide();
    $("#spaceEventSection").show();
    $('.navbarTogglerFilter').hide()
    $("#spaceBlogNavBtn").removeClass('active');
    $("#logo").removeClass('active');
    $("#eventsNavBtn").removeClass('active');
    $("#academyNavBtn").removeClass('active');
    $("#spaceEventNavBtn").addClass('active');
  } else {
    location.hash = "";
  }
}

handleRoute();
$(window).on("hashchange", function () {
  handleRoute()
  filterBtnOnResize()
  $(document).scrollTop(0)
});

function filterBtnOnResize() {
  let hash = location.hash;
  if (hash === "#spaceBlog" || hash === "#spaceBlog/carousel" || hash === "#spaceBlog/cards") {
    if ($(window).width() < 427) {
      $('.navbarTogglerFilter').show()
    } else if ($(window).width() >= 427) {
      $('.navbarTogglerFilter').hide()
    }
  }
}

