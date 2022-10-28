//NavBar
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll',()=>{
    const getscrollY = window.scrollY;

    if(getscrollY >= 200){
        navbar.classList.add('navmenus');
    }else{
        navbar.classList.remove('navmenus');
    }
})

//Slider Nav
const sliderNav = document.querySelector('.slider-navs');
const toggleBtn = document.getElementById('toggler');
const closeBtn = document.getElementById('btn-close');

toggleBtn.addEventListener('click',()=>{
  sliderNav.classList.add('active');
});

closeBtn.addEventListener('click',()=>{
  sliderNav.classList.remove('active');
});

//Accordion
const accrodHeaders = document.querySelectorAll(".accord-header");
accrodHeaders.forEach((ach) => {
  ach.addEventListener('click',toggleItem,false)
});

function toggleItem() {
  const currentContentEle = this.nextElementSibling;

  const isCollapsed = currentContentEle.classList.contains("collapse");

  accrodHeaders.forEach((ach) => {
    const contentEle = ach.nextElementSibling;
    if (!contentEle.classList.contains("collapse")) {
      contentEle.classList.add("collapse");
    }
  });

  if (isCollapsed) {
    currentContentEle.classList.remove("collapse");
  }
}

//Footer date and time
let years = document.getElementById('year');
let dates = new Date().getUTCFullYear();
years.textContent = dates;