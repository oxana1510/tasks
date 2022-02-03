let formDef1 = [
  { label: "Название сайта:", kind: "longtext", name: "sitename" },
  { label: "URL сайта:", kind: "longtext", name: "siteurl" },
  { label: "Посетителей в сутки:", kind: "number", name: "visitors" },
  { label: "E-mail для связи:", kind: "shorttext", name: "email" },
  {
    label: "Рубрика каталога:",
    kind: "combo",
    name: "division",
    variants: [
      { text: "здоровье", value: 1 },
      { text: "домашний уют", value: 2 },
      { text: "бытовая техника", value: 3 },
    ],
  },
  {
    label: "Размещение:",
    kind: "radio",
    name: "payment",
    variants: [
      { text: "бесплатное", value: 1 },
      { text: "платное", value: 2 },
      { text: "VIP", value: 3 },
    ],
  },
  { label: "Разрешить отзывы:", kind: "check", name: "votes" },
  { label: "Описание сайта:", kind: "memo", name: "description" },
  { caption: "Опубликовать", kind: "submit" },
];

let formDef2 = [
  { label: "Фамилия:", kind: "longtext", name: "lastname" },
  { label: "Имя:", kind: "longtext", name: "firstname" },
  { label: "Отчество:", kind: "longtext", name: "secondname" },
  { label: "Возраст:", kind: "number", name: "age" },
  { caption: "Зарегистрироваться", kind: "submit" },
];

function createForm(form) {
  let formTag = document.querySelector("form");
  formTag.setAttribute("action", "https://fe.it-academy.by/TestForm.php");
  form.forEach((item) => {
    if (item.kind === "longtext") {
      let br = document.createElement("br");
      let label = document.createElement("label");
      label.innerHTML = item.label;
      let input = document.createElement("input");
      input.setAttribute("name", item.name);
      formTag.appendChild(label);
      formTag.appendChild(input);
      formTag.appendChild(br);
    }

    if (item.kind === "number") {
      let br = document.createElement("br");
      let label = document.createElement("label");
      label.innerHTML = item.label;
      let input = document.createElement("input");
      input.setAttribute("name", item.name);
      input.setAttribute("type", "number");
      formTag.appendChild(label);
      formTag.appendChild(input);
      formTag.appendChild(br);
    }

    if (item.kind === "shorttext") {
      let br = document.createElement("br");
      let label = document.createElement("label");
      label.innerHTML = item.label;
      let input = document.createElement("input");
      input.setAttribute("name", item.name);
      input.setAttribute("type", "email");
      formTag.appendChild(label);
      formTag.appendChild(input);
      formTag.appendChild(br);
    }

    if (item.kind === "combo") {
      let br = document.createElement("br");
      let label = document.createElement("label");
      label.innerHTML = item.label;
      let select = document.createElement("select");
      select.setAttribute("name", item.name);

      item.variants.forEach((el) => {
        let option = document.createElement("option");
        option.setAttribute("value", el.value);
        option.innerHTML = el.text;
        select.appendChild(option);
      });

      formTag.appendChild(label);
      formTag.appendChild(select);
      formTag.appendChild(br);
    }

    if (item.kind === "radio") {
      let br = document.createElement("br");
      let label = document.createElement("label");
      label.innerHTML = item.label;
      formTag.appendChild(label);

      item.variants.forEach((el) => {
        let input = document.createElement("input");
        input.setAttribute("value", el.value);
        input.setAttribute("type", "radio");
        let span = document.createElement("span");
        span.innerHTML = el.text;
        formTag.appendChild(input);
        formTag.appendChild(span);
      });

      formTag.appendChild(br);
    }

    if (item.kind === "check") {
      let br = document.createElement("br");
      let label = document.createElement("label");
      label.innerHTML = item.label;
      let input = document.createElement("input");
      input.setAttribute("type", "checkbox");
      input.checked = true;
      formTag.appendChild(label);
      formTag.appendChild(input);
      formTag.appendChild(br);
    }

    if (item.kind === "memo") {
      let br = document.createElement("br");
      let label = document.createElement("label");
      label.innerHTML = item.label;
      let textarea = document.createElement("textarea");
      textarea.setAttribute("name", item.name);
      formTag.appendChild(label);
      formTag.appendChild(textarea);
      formTag.appendChild(br);
    }

    if (item.kind === "submit") {
      let input = document.createElement("input");
      input.setAttribute("type", "submit");
      input.setAttribute("value", item.caption);
      formTag.appendChild(input);
    }
  });
}

createForm(formDef1);
createForm(formDef2);
