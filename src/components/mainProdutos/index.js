import React,{useEffect,useState} from 'react';
import './style.css';


import api from '../../services/api'
import {connect} from "react-redux"

import CardProdutos from "../../components/cardProdutos"

const CardSobre = (props)=>{
    
    const [produtos,setProdutos] = useState([]);

    useEffect(()=>{
        
        
        const consultaBanco = async()=>{
            try {
                const res = await api.get('/produtoscategoria'+props.active);
                setProdutos(res.data)
                
            } catch (error) {
                alert('Erro ao consultar');
            }
        }
        consultaBanco();
    },[props.active])
    

    return(
        
        <main className="main_produtos">
            {
                produtos.map((produto,index) =>(
                    <CardProdutos 
                        teste={produto}
                        key={index} 
                        id={produto.id} 
                        preco={produto.valorVenda.toFixed(2)} 
                        nome={produto.nomeProduto} 
                        tipoUnidade={produto.tipoUnidade}
                        url={"../../images/"+produto.foto1+".jpg"} 
                        />
                ))
            }
            
        </main>
        
    )
}

export default connect(state => ({active: state.categorias.active}))(CardSobre)