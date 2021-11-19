const inputsData = [
    {
        id: "name-input",
        name: "name",
        type: "text",
        placeholder: "Jméno a přijmení",
        errorMessage: "Zadán nevalidní znak. Minimální počet znaků je 3.",
        label: "Jméno",
        pattern: "^[A-Za-z0-9]{3,}$",
        labelCounter: "02",
        required: true,
    },{
        id: "telephone-input",
        name: "telephone",
        type: "tel",
        placeholder: "Telefon...",
        errorMessage: "Je povolen pouze tvar telefonního čísla o délce 9-ti čísel. Bez mezer.",
        label: "Telefon",
        labelCounter: "03",
        pattern: "^[0-9]{9,9}$",
        required: true,
    },{
        id: "text-input",
        name: "text",
        type: "textarea",
        placeholder: "Zpráva...",
        errorMessage: "Nejsou povoleny speciální znaky.",
        label: "Zpráva",
        labelCounter: "04",
        pattern: "^\w\d\s"
    }
]

const selectOptionsData = [
    {
        id: "personalTraining",
        value: "Osobní trénink",
        optionNumber: 1
    },{
        id: "diagnostic",
        value: "Funkční diagnostika",
        optionNumber: 2
    },{
        id: "onlineCoaching",
        value: "Online Coaching",
        optionNumber: 3
    }
]

export {inputsData, selectOptionsData}