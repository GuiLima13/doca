import React,{useState,useEffect} from "react"

import './style.css'




const CardProdutos = (props)=>{

    const [carrinho,setCarrinho] = useState(JSON.parse(localStorage.getItem("carrinho")));
    //const [carrinho,setCarrinho] = useState([]);
    const handleCarrinho = (e)=>{
        e.preventDefault()
        const produto = e.target.parentNode.parentNode.children
        setCarrinho([...carrinho,{produto:produto[1].innerText,preco:produto[3].innerText}])
    }

    useEffect(()=>{
        localStorage.setItem("carrinho",JSON.stringify(carrinho))
    },[carrinho])

    return (
        <div className="container_produto">
                <img alt="..." src={props.url}  className="img_produto"></img>
                <p className="descricao_produto">{props.cat}</p>
                <p className="nota_produto">estrelas</p>
                <p className="preco_produto">R$50,00</p>
                <form className="form_produto"> 
                    <input placeholder="0" className="qtd_produto" type="number"></input>
                    <button className="add_produto" onClick={ handleCarrinho }>Compre agora</button>
                </form>
        </div>
    )
}

export default CardProdutos