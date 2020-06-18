const INITIAL_STATE = {
    active: {},
    categorias: [
        {
            id: 1,
            title: "Bolos"
        },
        {
            id: 2,
            title: "Bolos de Pote"
        }, 
        {
            id: 3,
            title: "Cupcake"
        },
        {
            id: 4,
            title: "Doces"
        },
        {
            id: 5,
            title: "Salgados"
        },
        {
            id: 6,
            title: "Tortas"
        },
        {
            id: 7,
            title: "Sua festa"
        }
    ]
}

export default function categorias(state = INITIAL_STATE, action) {
    console.log("teste")
    if (action.type === "TOGGLE_CATEGORIA") {
        return { ...state, active: action.categoria.title };
    } 
        return state;
    
}