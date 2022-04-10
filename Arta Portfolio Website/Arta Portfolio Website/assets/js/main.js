/*=============== SHOW SIDEBAR ===============*/
const navMenu = document.getElementById('sidebar'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if(navToggle) {
	navToggle.addEventListener("click", () => {
		navMenu.classList.add('show-sidebar')
	})
}

/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if(navClose) {
	navClose.addEventListener("click", () => {
		navMenu.classList.remove('show-sidebar')
	})
}

/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
tabContent = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
	tab.addEventListener("click", () => {
		const target = document.querySelector(tab.dataset.target)
	
	tabContent.forEach(tabContent => {
		tabContent.classList.remove("skills_active")
	})

	target.classList.add('skills_active')
	
	tabs.forEach(tab => {
		tab.classList.remove("skills_active")
	})
	tab.classList.add('skills_active')

	})
})


/*=============== INPUT ANIMATION ===============*/
const input = document.querySelectorAll(".input");
function focusFunc() {
	let parent = this.parentNode;
	parent.classList.add("focus");

}
function blurFunc() {
	let parent = this.parentNode;
	if(this.value == "") {
		parent.classList.remove("focus");
	}
}
input.forEach((input) => {
	input.addEventListener("focus", focusFunc);
	input.addEventListener("blur", blurFunc);
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);


function navHighlighter()
{
	let scrollY = window.pageYOffset;
	sections.forEach(current => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50,
		sectionID = current.getAttribute("id");
		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
		{
			document.querySelector('.nav_menu a[href*=' + sectionID + ']').classList.add("active-link")
		}
		else
		{
			document.querySelector('.nav_menu a[href*=' + sectionID + ']').classList.remove("active-link")
		 }
	})
}


