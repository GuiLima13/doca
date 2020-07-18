import React, {useEffect, useState } from 'react';

import './style.css'


import api from '../../services/api'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


import * as ProdutoActions from '../../store/actions/produto'

const MainDetalheProduto = (props) => {

    const [qtde, setQtde] = useState(1)
   // const [produto, setProduto] = useState()
    
                //api.get('/produto'+props.produto.index).then(res=>{
                    
                   // props.dispatch(ProdutoActions.addToProductSelected(res.data[0]))

                    //console.log()
                    //console.log(props.produto.index)
              //  })
    
                
        



    const handleAddToCart = async (e) => {
        e.preventDefault();
        alert('teste')
        //console.log(qtde)
        //console.log(e.target.parentNode.children[0].value)
    }

    const handleTrocaImage = (e) => {
        document.getElementById('img_detalhe_produto').src = e.target.src
    }

    return (
        <div className="card-body">



            <div className="main_produtos row">

                <div className="col-lg-5">

                    <Link className="text-center d-block mb-4" >
                        <img id="img_detalhe_produto" src={"./images/"+props.produto.produto.foto1+".jpg"} className="img-fluid" alt="Product-img" ></img>
                    </Link>
                    <div className="d-lg-flex d-none justify-content-center">
                        <Link >
                            <img src={"./images/"+props.produto.produto.foto1+".jpg"} onClick={handleTrocaImage} className="img_mini_produto img-fluid img-thumbnail p-2" alt="Product-img"></img>
                        </Link>
                        <Link className="ml-2" >
                            <img src={"./images/"+props.produto.produto.foto2+".jpg"} onClick={handleTrocaImage} className="img_mini_produto img-fluid img-thumbnail p-2" alt="Product-img" ></img>
                        </Link>
                        <Link className="ml-2" >
                            <img src={"./images/"+props.produto.produto.foto3+".jpg"} onClick={handleTrocaImage} className="img_mini_produto img-fluid img-thumbnail p-2" alt="Product-img" ></img>
                        </Link>
                    </div>

                </div>

                <div className="col-lg-7">
                    <form className="pl-lg-4">
                        <h3 className="mt-0">{props.produto.produto.nomeProduto}<Link className="text-muted" href="/"><i className="mdi mdi-square-edit-outline ml-2"></i></Link></h3>
                        <p className="mb-1">Adicionado: 09/12/2018</p>
                        <p className="font-16" value="4.5" tag="p" id="rating-container">
                            <span className="text-warning mdi mdi-star">
                            </span>
                            <span className="text-warning mdi mdi-star"></span>
                            <span className="text-warning mdi mdi-star"></span>
                            <span className="text-warning mdi mdi-star"></span>
                            <span className="text-warning mdi mdi-star-outline"></span>
                        </p>

                        <div className="mt-3">
                            <h4><span className="badge badge-success-lighten">Disponivel</span></h4>
                        </div>

                        <div className="mt-4">
                            <h6 className="font-14">Valor</h6>
                            <h3>{Number(props.produto.produto.valorVenda).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })+" / "+props.produto.produto.tipoUnidade}</h3>
                        </div>

                        <div className="mt-4">
                            <h6 className="font-14">Quantidade:</h6>
                            <div className="d-flex ">
                                <input
                                    type="number"
                                    min="1"
                                    onChange={(e) => (setQtde(e.target.value))}
                                    className="form-control input_qtde_detalhe_produto"
                                    placeholder="1"></input>
                                <button
                                    type="button"
                                    onClick={handleAddToCart}
                                    className="add_produto ml-2">Compre agora</button>
                            </div>

                        </div>


                        <div className="mt-4">
                            <h6 className="font-14">Descrição:</h6>
                            <p>{props.produto.produto.descricao}</p>
                        </div>


                    </form>
                </div>
            </div>
            <div className="table-responsive mt-4">
            </div>
        </div>
    )
}

export default connect(state => ({ produto: state.produto }))(MainDetalheProduto)
