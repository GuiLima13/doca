const INITIAL_STATE = JSON.parse(localStorage.getItem("carrinho")) == null || 
JSON.parse(localStorage.getItem("carrinho")) === undefined ? [] : 
JSON.parse(localStorage.getItem("carrinho"))


    //const [carrinho,setCarrinho] = useState([]);
    

export default function carrinho(state = INITIAL_STATE, action) {
    if (action.type === "ADD_TO_CART") {
        
        localStorage.setItem("carrinho",JSON.stringify([...state,action.carrinho]))
        return [ ...state,action.carrinho];
    } 
        return state;
}