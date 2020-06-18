import React from "react"
import {connect} from "react-redux"




const GridProdutos = ({active})=>{

    return (
        <div>
            
           {
               active
           }
        </div>
    )
}

export default connect(state => ({active: state.categorias.active}))(GridProdutos)