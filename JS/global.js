//MENU MOBILE
function menuMobile() {
  const btn = document.querySelector(".burger");
  const header = document.querySelector(".header");
  const link = document.querySelectorAll(".navbar a");

  btn.addEventListener("click", () => {
    header.classList.toggle("show-nav");
  });
  link.forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("show-nav");
    });
  });
}
menuMobile();
//PORTFOLIO
function tabsfilters() {
  const tabs = document.querySelectorAll(".portfolio-filters a");
  const projets = document.querySelectorAll(".portfolio .card");

  const resetActivelinks = () => {
    tabs.forEach((elem) => {
      elem.classList.remove("active");
    });
  };

  const showprojets = (elem) => {
    console.log(elem);
    projets.forEach((projet) => {
      let filter = projet.getAttribute("data-category");

      if (elem === "all") {
        projet.parentNode.classList.remove("hide");
        return;
      }
      console.log("lance");
      if (filter !== elem) {
        projet.parentNode.classList.add("hide");
      } else {
        projet.parentNode.classList.remove("hide");
      }
    });
  };
  tabs.forEach((elem) => {
    elem.addEventListener("click", (event) => {
      event.preventDefault();
      let filter = elem.getAttribute("data-filter");
      //console.log(filter);
      showprojets(filter);
      resetActivelinks();
      elem.classList.add("active");
    });
  });
}

tabsfilters();

function showProjetDetails() {
  const links = document.querySelectorAll(".card__link");
  const modals = document.querySelectorAll(".modal");
  const buttons = document.querySelectorAll(".modal__close");
  const hideModals = () => {
    modals.forEach((modal) => {
      modal.classList.remove("show");
    });
  };

  links.forEach((elem) => {
    elem.addEventListener("click", (event) => {
      event.preventDefault();
      document.querySelector(`[id=${elem.dataset.id}]`).classList.add("show");
    });
  });

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      hideModals();
    });
  });
}
showProjetDetails();

document.addEventListener("DOMContentLoaded", function () {
  // Sélectionner l'élément à animer
  var typedElement = document.querySelector(".typed");

  // Récupérer les chaînes à animer à partir de l'attribut data-typed-items
  var typedItems = typedElement.getAttribute("data-typed-items").split(",");

  var itemIndex = 0;
  var letterIndex = 0;
  var currentString = "";
  var typingSpeed = 150; // Vitesse de frappe en ms
  var deletingSpeed = 50; // Vitesse d'effacement en ms
  var pauseBetweenWords = 2000; // Pause entre les mots en ms

  function type() {
    if (letterIndex < typedItems[itemIndex].length) {
      // Ajouter une lettre
      currentString += typedItems[itemIndex].charAt(letterIndex);
      typedElement.innerHTML = currentString;
      letterIndex++;
      setTimeout(type, typingSpeed);
    } else {
      // Pause à la fin d'un mot avant de commencer à effacer
      setTimeout(erase, pauseBetweenWords);
    }
  }

  function erase() {
    if (letterIndex > 0) {
      // Enlever une lettre
      currentString = currentString.substring(0, currentString.length - 1);
      typedElement.innerHTML = currentString;
      letterIndex--;
      setTimeout(erase, deletingSpeed);
    } else {
      // Passer au mot suivant après avoir tout effacé
      itemIndex = (itemIndex + 1) % typedItems.length;
      setTimeout(type, typingSpeed);
    }
  }

  // Démarrer la machine à écrire
  setTimeout(type, typingSpeed);
});
