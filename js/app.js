// Global variables
const sectionsOnPage = document.querySelectorAll("section");
// Scrolling through the sections using getBoundingClientRect
// https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
function getCurrent(elemsec) {
  const currentSection = elemsec.getBoundingClientRect();
  return currentSection.top;
}
//active viewport function
function currentViewport() {
  //if statement true to determine if I need to add or remove the active CSS styling
  sectionsOnPage.forEach((element) => {
    if (getCurrent(element) > -200 && getCurrent(element) < 200)
      element.classList.add("your-active-class");
    //remove active class
    else element.classList.remove("your-active-class");
  });
}
//Creating the li items for the navbar using createDocumentFragment
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment
function createNavLiItems() {
  const virtualStack = document.createDocumentFragment();
  sectionsOnPage.forEach((element) => {
    // create navigation bar
    const section_id = element.getAttribute("id");
    const section_name = element.getAttribute("data-nav");
    const listitems = document.createElement("li");
    // Controls scrolling to selected nav item
    listitems.innerHTML = `<a class=menu__link href=#${section_id}>${section_name}</a> `;
    virtualStack.appendChild(listitems);
  });
  // Create the navbar and add the list items
  document.querySelector("#navbar__list").appendChild(virtualStack);
}
// Calls the function to build the navigation
createNavLiItems();
// Calls the function to add styling to link per active section
currentViewport();
// Event listener
document.addEventListener("scroll", currentViewport);
//can you help me know where the problem ,i tried so much and many code but the problem stal consist
const linksection = document.querySelectorAll("a");
linksection.forEach((element) => {
  element.addEventListener("click", function (disableLink) {
    disableLink.preventDefault();
    const currentSectionUrl = element.textContent;
    sectionsOnPage.forEach((element) => {
      const datanavcontent = element.getAttribute("data-nav");
      if (datanavcontent === currentSectionUrl) {
        element.scrollIntoView({
          behavior: "smooth",
        });
        currentViewport();
      }
    });
  });
});
//Creating a button that allows you to scroll to the top
const mybutton = document.getElementById("myBtn");
// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
