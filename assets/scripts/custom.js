let fullpageDisable = function () {
  width = document.body.clientWidth;
  if (width > 991) {
    new fullpage("#fullpage", {
      autoScrolling: true,
      scrollVertically: true,
      fixedElements: "#letsTalk",
      afterLoad: function () {
        let activeSection = document.querySelectorAll(
          ".fp-table.active .aos-init"
        );
        for (let i = 0; i < activeSection.length; i++) {
          activeSection[i].classList.add("aos-animate");
        }
      },
    });
  }
  AOS.init({
    once: true,
    offset: 0,
  });
};
window.addEventListener("load", fullpageDisable);

// _BEGIN > Function For Navigation Menu < AVN //

const body = document.querySelector("html");
const hamburger = document.querySelector("#hamburger");
hamburger.addEventListener("click", function () {
  body.classList.toggle("show-menu");
});
// _ENDS > Function For Navigation Menu < AVN //

// Accordion start
window.addEventListener("load", function () {
  const boxShadowClass = "accordion-box-shadow";
  const shownItem = this.document.querySelector(".accordion-collapse.show");
  console.log(shownItem);
  shownItem.closest(".accordion-item").classList.add(boxShadowClass);

  const btnList = this.document.querySelectorAll(
    ".faq-accordion .accordion-button"
  );

  function removeShadow() {
    const accHeaderList = this.document.querySelectorAll(
      ".faq-accordion .accordion-item"
    );
    accHeaderList.forEach((head) => {
      head.classList.remove(boxShadowClass);
    });
  }

  btnList.forEach((btn) => {
    btn.addEventListener("click", function () {
      removeShadow();
      this.closest(".accordion-item").classList.add(boxShadowClass);
    });
  });
});
// Accordion end

const tabs = document.querySelectorAll(".nav-link");
const element = document.querySelectorAll("p");
