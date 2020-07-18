const INITIAL_STATE = {
    index:'',
    produto:'',
}

export default function produto(state = INITIAL_STATE, action) {
    if (action.type === "ADD_TO_PRODUCT_SELECTED") {
        return {...state, produto:action.produto};
    }else if (action.type === "ADD_TO_INDEX_PRODUCT_SELECTED"){
        return {...state,index:action.index};
    }else{
        return state;
    }
}

