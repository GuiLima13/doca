const INITIAL_STATE = JSON.parse(localStorage.getItem("carrinho")) == null || 
JSON.parse(localStorage.getItem("carrinho")) === undefined ?  [] : 
JSON.parse(localStorage.getItem("carrinho"))


    //const [carrinho,setCarrinho] = useState([]);
    

export default function carrinho(state = INITIAL_STATE, action) {
    if (action.type === "ADD_TO_CART") {
        
        localStorage.setItem("carrinho",JSON.stringify([...state,action.carrinho]))
        return [ ...state,action.carrinho];
    } else
    if (action.type === "REMOVE_TO_CART") {
        
        //state.splice(action.carrinho,1)
        
        //console.log(state)//[ ...state,action.carrinho];)
        console.log("Estado Removido")
        console.log(state.splice(action.carrinho,1))
        
        localStorage.setItem("carrinho",JSON.stringify(state))
        console.log("Estado atual")
        console.log(state)
        return [...state]
    } else{
        return state;
    }
}