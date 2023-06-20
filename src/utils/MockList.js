export const MockList = () => {
    return [
        {
            id: 1,
            name: "Alimentação",
            permalink: "/list/test-2",
            itens: [
                {
                    id: 1,
                    name: "Beber água",
                    isDone: false
                },{
                    id: 2,
                    name: "Tomar suplemento",
                    isDone: false
                },
                {
                    id: 3,
                    name: "Comer frutas",
                    isDone: false
                }
            ]
        },
        {
            id: 2,
            name: "Exercícios",
            permalink: "/list/exerc",
            itens: [
                {
                    id: 1,
                    name: "Alongar",
                    isDone: false
                },{
                    id: 2,
                    name: "Ir à academia",
                    isDone: false
                },
            ]
        },
    ]
}