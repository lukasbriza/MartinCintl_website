const inputsData = [
  {
    id: "name-input",
    name: "name",
    type: "text",
    placeholder: "Jméno a přijmení",
    errorMessage: "Zadán nevalidní znak.",
    label: "Jméno",
    labelCounter: "02",
    required: true,
  },
  {
    id: "telephone-input",
    name: "telephone",
    type: "tel",
    placeholder: "Telefon...",
    errorMessage:
      "Je povolen pouze tvar telefonního čísla o délce 9-ti čísel. Bez mezer.",
    label: "Telefon",
    labelCounter: "03",
    required: true,
  },
  {
    id: "text-input",
    name: "text",
    type: "textarea",
    placeholder: "Zpráva...",
    errorMessage: "Nejsou povoleny speciální znaky.",
    label: "Zpráva",
    labelCounter: "04",
  },
];

const selectOptionsData = [
  {
    id: "personalTraining",
    value: "Osobní trénink",
    optionNumber: 1,
  },
  {
    id: "diagnostic",
    value: "Funkční diagnostika",
    optionNumber: 2,
  },
  {
    id: "onlineCoaching",
    value: "Online Coaching",
    optionNumber: 3,
  },
];

export { inputsData, selectOptionsData };
