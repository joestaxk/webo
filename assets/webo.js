function $(targ) {
  return document.querySelector(targ);
}

function $$(targ) {
  return document.querySelectorAll(targ);
}

// window.onload =function() {
//   const loadHTML = $("#loading");

//   // remove hidden
//   $("#main").removeAttribute("hidden");
//   loadHTML.setAttribute("hidden", 1)
// }

//   window.storeWindowEventClassname = {};

// function dropdown(targ, dropTarg) {
//   const dropbtn = $(targ);
//   const dropmenu = $(dropTarg);

//   if (!dropbtn || !dropmenu) return;

//   dropbtn.addEventListener("click", () => {
//     if (dropbtn.dataset.dropState === "open") {
//       dropmenu.setAttribute("hidden", true);
//       dropbtn.dataset.dropState = "close";
//     } else {
//       dropmenu.removeAttribute("hidden");
//       dropbtn.dataset.dropState = "open";
//     }
//   });

//   window.addEventListener("click", (ev) => {
//     if (!ev.target.closest(targ) && dropbtn.dataset.dropState === "open") {
//       dropmenu.setAttribute("hidden", true);
//       dropbtn.dataset.dropState = "close";
//     }
//   });

//   // Initialize the dropdown state
//   dropbtn.dataset.dropState = "close";
//   dropmenu.setAttribute("hidden", true);
// }

// // Example usage
// dropdown(
//   "[data-tnav='header-personal']",
//   "[data-tnav='header-personal-dropdown']"
// );
// dropdown(
//   "[data-tnav='header-business']",
//   "[data-tnav='header-business-dropdown']"
// );


function Accordion(targ) {
    const dropbtns = $$(targ);
  
    if (!dropbtns.length) return;
  
    dropbtns.forEach((el) => {
      el.addEventListener("click", (ev) => {
        const target = ev.target.closest(`[data-tnav="faq-section-question"]`);
  
        const dropmenu = target.parentElement.querySelector("[data-tnav='faq-section-answer']");
        const svg = target.querySelector("svg");

        if (target.dataset.dropState === "open") {
          dropmenu.setAttribute("hidden", true);
          target.dataset.dropState = "close";
          svg.classList.add("rotate-180")
        } else {
          dropmenu.removeAttribute("hidden");
          target.dataset.dropState = "open";
          svg.classList.remove("rotate-180")
        }
      });
  
      // Initialize the dropdown state
      el.dataset.dropState = "close";
    });
  }
  
  Accordion(`[data-tnav="faq-section-question"]`);


//  navBar

function navBar() {
    const navbar__mobile = document.querySelector("#navbar_mobile");

    // const openNavBar = document.querySelector("#openNavBar");
    // const closeNavBar = document.querySelector("#closeNavBar");

    if(navbar__mobile) {
        // navbar_mobile

        const isHidden = navbar__mobile.hasAttribute("hidden");
        if(!isHidden) {
            navbar__mobile.setAttribute("hidden", 1)


            // closeNavBar.classList.add("hidden")
            // openNavBar.classList.remove("hidden")
        }else {
            navbar__mobile.removeAttribute("hidden")
            
            // openNavBar.classList.add("hidden")
            // closeNavBar.classList.remove("hidden")
        }
    }
}