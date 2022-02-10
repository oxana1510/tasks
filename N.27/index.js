"use strict";

let formTag = document.forms.form;
formTag.addEventListener("submit", validateForm, false);

for (let i = 0; i < formTag.elements.length - 1; i++) {
  formTag[i].addEventListener("blur", validateFormInput, false);
  formTag[i].addEventListener("change", validateFormButtons, false);
}

let clicked = true;
formTag.elements.rubric.addEventListener("click", function (e) {
  clicked = false;
  let error = this.parentElement.querySelector(".error");
  if (clicked) {
    this.setAttribute("novalid", "novalid");
    error.innerHTML = "Выберете, пожалуйста, рубрику";
    e.preventDefault();
  } else {
    error.innerHTML = "";
    this.removeAttribute("novalid");
  }
});

function validateFormInput(e) {
  e = e || window.event;
  try {
    let val = this.value.trim();
    let error = this.parentElement.querySelector(".error");

    switch (this.getAttribute("name")) {
      case "author":
        if (val.length < 2 || val.length > 50) {
          this.setAttribute("novalid", "novalid");
          error.innerHTML =
            "Введите, пожалуйста, имя не менее 2-х и не более 50 символов";
          e.preventDefault();
        } else {
          error.innerHTML = "";
          this.removeAttribute("novalid");
        }
        break;

      case "sitename":
        if (val.length < 2 || val.length > 100) {
          this.setAttribute("novalid", "novalid");
          error.innerHTML =
            "Введите, пожалуйста, имя не менее 2-х и не более 100 символов";
          e.preventDefault();
        } else {
          error.innerHTML = "";
          this.removeAttribute("novalid");
        }
        break;

      case "siteurl":
        if (val.length == 0) {
          this.setAttribute("novalid", "novalid");
          error.innerHTML = "Введите, пожалуйста, название сайта";
          e.preventDefault();
        } else {
          error.innerHTML = "";
          this.removeAttribute("novalid");
        }
        break;

      case "startdate":
        if (val.length == 0) {
          this.setAttribute("novalid", "novalid");
          error.innerHTML = "Введите, пожалуйста, дату";
          e.preventDefault();
        } else {
          error.innerHTML = "";
          this.removeAttribute("novalid");
        }
        break;

      case "persons":
        if (val.length == 0 || val <= 0) {
          this.setAttribute("novalid", "novalid");
          error.innerHTML =
            "Введите, пожалуйста, количество посетителей в сутке";
          e.preventDefault();
        } else {
          error.innerHTML = "";
          this.removeAttribute("novalid");
        }
        break;

      case "email":
        let regEmail =
          /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (val.length == 0 || regEmail.test(val) == false) {
          this.setAttribute("novalid", "novalid");
          error.innerHTML = "Введите, пожалуйста, корректный email";
          e.preventDefault();
        } else {
          error.innerHTML = "";
          this.removeAttribute("novalid");
        }
        break;

      case "rubric":
        if (clicked) {
          this.setAttribute("novalid", "novalid");
          error.innerHTML = "Выберете, пожалуйста, рубрику";
          e.preventDefault();
        } else {
          error.innerHTML = "";
          this.removeAttribute("novalid");
        }
        break;

      case "article":
        if (val.length < 10) {
          this.setAttribute("novalid", "novalid");
          error.innerHTML =
            "Введите, пожалуйста, описание сайта (не менее 10-ти символов)";
          e.preventDefault();
        } else {
          error.innerHTML = "";
          this.removeAttribute("novalid");
        }
        break;
    }
  } catch (error) {
    console.log("Ошбика:", error);
    e.preventDefault();
  }
}

function validateFormButtons(e) {
  e = e || window.event;
  try {
    let error = this.parentElement.querySelector(".error");

    switch (this.getAttribute("name")) {
      case "rubric":
        if (clicked) {
          this.setAttribute("novalid", "novalid");
          error.innerHTML = "Выберете, пожалуйста, рубрику";
          e.preventDefault();
        } else {
          error.innerHTML = "";
          this.removeAttribute("novalid");
        }
        break;
      case "public":
        let radios = formTag.querySelectorAll('input[type="radio"]:checked');
        if (radios.length <= 0) {
          this.setAttribute("novalid", "novalid");
          error.innerHTML = "Введите, пожалуйста, размещение";
          e.preventDefault();
        } else {
          error.innerHTML = "";
          this.removeAttribute("novalid");
        }
        break;

      case "comments":
        if (!this.checked) {
          this.setAttribute("novalid", "novalid");
          error.innerHTML = "Разрешите, пожалуйста, отзывы";
          e.preventDefault();
        } else {
          error.innerHTML = "";
          this.removeAttribute("novalid");
        }
        break;
    }
  } catch (error) {
    console.log("Ошбика:", error);
    e.preventDefault();
  }
}

function validateForm(e) {
  e = e || window.event;

  try {
    for (let i = 0; i < formTag.elements.length - 1; i++) {
      let val = formTag[i].value.trim();
      let error = formTag[i].parentElement.querySelector(".error");

      switch (formTag[i].getAttribute("name")) {
        case "author":
          if (val.length < 2 || val.length > 50) {
            formTag[i].setAttribute("novalid", "novalid");
            error.innerHTML =
              "Введите, пожалуйста, имя не менее 2-х и не более 50 символов";
            e.preventDefault();
          } else {
            error.innerHTML = "";
            formTag[i].removeAttribute("novalid");
          }
          break;

        case "sitename":
          if (val.length < 2 || val.length > 100) {
            formTag[i].setAttribute("novalid", "novalid");
            error.innerHTML =
              "Введите, пожалуйста, имя не менее 2-х и не более 100 символов";
            e.preventDefault();
          } else {
            error.innerHTML = "";
            formTag[i].removeAttribute("novalid");
          }
          break;

        case "siteurl":
          if (val.length == 0) {
            formTag[i].setAttribute("novalid", "novalid");
            error.innerHTML = "Введите, пожалуйста, название сайта";
            e.preventDefault();
          } else {
            error.innerHTML = "";
            formTag[i].removeAttribute("novalid");
          }
          break;

        case "startdate":
          if (val.length == 0) {
            formTag[i].setAttribute("novalid", "novalid");
            error.innerHTML = "Введите, пожалуйста, дату";
            e.preventDefault();
          } else {
            error.innerHTML = "";
            formTag[i].removeAttribute("novalid");
          }
          break;

        case "persons":
          if (val.length == 0 || val <= 0) {
            formTag[i].setAttribute("novalid", "novalid");
            error.innerHTML =
              "Введите, пожалуйста, количество посетителей в сутке";
            e.preventDefault();
          } else {
            error.innerHTML = "";
            formTag[i].removeAttribute("novalid");
          }
          break;

        case "email":
          let regEmail =
            /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
          if (val.length == 0 || regEmail.test(val) == false) {
            formTag[i].setAttribute("novalid", "novalid");
            error.innerHTML = "Введите, пожалуйста, корректный email";
            e.preventDefault();
          } else {
            error.innerHTML = "";
            formTag[i].removeAttribute("novalid");
          }
          break;

        case "rubric":
          if (clicked) {
            formTag[i].setAttribute("novalid", "novalid");
            error.innerHTML = "Выберете, пожалуйста, рубрику";
            e.preventDefault();
          } else {
            error.innerHTML = "";
            formTag[i].removeAttribute("novalid");
          }
          break;

        case "public":
          let radios = formTag.querySelectorAll('input[type="radio"]:checked');
          if (radios.length <= 0) {
            formTag[i].setAttribute("novalid", "novalid");
            error.innerHTML = "Введите, пожалуйста, размещение";
            e.preventDefault();
          } else {
            error.innerHTML = "";
            formTag[i].removeAttribute("novalid");
          }
          break;

        case "comments":
          if (!formTag[i].checked) {
            formTag[i].setAttribute("novalid", "novalid");
            error.innerHTML = "Разрешите, пожалуйста, отзывы";
            e.preventDefault();
          } else {
            error.innerHTML = "";
            formTag[i].removeAttribute("novalid");
          }
          break;

        case "article":
          if (val.length < 10) {
            formTag[i].setAttribute("novalid", "novalid");
            error.innerHTML =
              "Введите, пожалуйста, описание сайта (не менее 10-ти символов)";
            e.preventDefault();
          } else {
            error.innerHTML = "";
            formTag[i].removeAttribute("novalid");
          }
          break;
      }

      for (let i = 0; i < formTag.elements.length - 1; i++) {
        if (formTag[i].getAttribute("novalid")) {
          formTag[i].focus();
          break;
        } else {
          formTag[i].blur();
        }
      }
    }
  } catch (error) {
    console.log("Ошбика:", error);
    e.preventDefault();
  }
}
