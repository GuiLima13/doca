const INITIAL_STATE = JSON.parse(localStorage.getItem("carrinho")) == null || 
JSON.parse(localStorage.getItem("carrinho")) === undefined ? [] : 
JSON.parse(localStorage.getItem("carrinho"))

export default function carrinho(state = INITIAL_STATE, action) {
    if (action.type === "TOGGLE_CARRINHO") {
        console.log(action)
        return { ...state};
    } 
        return state;
    
}