import React,{useState} from 'react';

import './style.css'

import {connect} from 'react-redux'


import {bindActionCreators} from 'redux'
import * as carrinhoActions from '../../store/actions/carrinho'

const MainDetalheProduto = (props) => {

    const [qtde, setQtde] = useState(1)

    const handleAddToCart = (e)=>{
        console.log(qtde)
        //console.log(e.target.parentNode.children[0].value)
    }

    const handleTrocaImage = (e)=>{
        document.getElementById('img_detalhe_produto').src = e.target.src
    }

    return (
        <div className="card-body">



            <div className="main_produtos row">

                <div className="col-lg-5">

                    <a className="text-center d-block mb-4" >
                        <img  id="img_detalhe_produto" src="./images/brigadeiro.jpg" className="img-fluid" alt="Product-img" ></img>
                    </a>
                    <div className="d-lg-flex d-none justify-content-center">
                        <a >
                            <img src="./images/bolo1.jpg" onClick={handleTrocaImage} className="img_mini_produto img-fluid img-thumbnail p-2" alt="Product-img"></img>
                        </a>
                        <a className="ml-2" >
                            <img src="./images/bolodepote1.jpg" onClick={handleTrocaImage} className="img_mini_produto img-fluid img-thumbnail p-2" alt="Product-img" ></img>
                        </a>
                        <a className="ml-2" >
                            <img src="./images/cupecake1.jpg" onClick={handleTrocaImage} className="img_mini_produto img-fluid img-thumbnail p-2" alt="Product-img" ></img>
                        </a>
                        <a className="ml-2" >
                            <img src="./images/brigadeiro.jpg" onClick={handleTrocaImage} className="img_mini_produto img-fluid img-thumbnail p-2" alt="Product-img" ></img>
                        </a>
                    </div>

                </div>

                <div className="col-lg-7">
                    <form className="pl-lg-4">
                        <h3 className="mt-0">Brigadeiro<a className="text-muted" href="/"><i className="mdi mdi-square-edit-outline ml-2"></i></a></h3>
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
                            <h3> R$ 1,50 Un</h3>
                        </div>

                        <div className="mt-4">
                            <h6 className="font-14">Quantidade:</h6>
                            <div className="d-flex ">
                                <input 
                                    type="number" 
                                    min="1" 
                                    onChange={(e)=>(setQtde(e.target.value))}
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
                            <p>Brigadeiro feito com muito amor e carinho</p>
                        </div>

                        
                    </form>
                </div>
            </div>
            <div className="table-responsive mt-4">
            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch => 
    bindActionCreators(carrinhoActions,dispatch)

export default connect(state => ({carrinho: state.carrinho}), mapDispatchToProps)(MainDetalheProduto)