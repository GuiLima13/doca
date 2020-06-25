export function addToCart(carrinho){
    return{
        type:'ADD_TO_CART',
        carrinho
    }
}

export function removeToCart(carrinho){
    return{
        type:'REMOVE_TO_CART',
        carrinho
    }
}