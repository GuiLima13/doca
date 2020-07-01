import React,{useState} from 'react';

import './style.css'

import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


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
        <div class="card-body">



            <div class="main_produtos row">

                <div class="col-lg-5">

                    <Link class="text-center d-block mb-4" >
                        <img  id="img_detalhe_produto" src="./images/brigadeiro.jpg" class="img-fluid" alt="Product-img" ></img>
                    </Link>
                    <div class="d-lg-flex d-none justify-content-center">
                        <Link >
                            <img src="./images/bolo1.jpg" onClick={handleTrocaImage} class="img_mini_produto img-fluid img-thumbnail p-2" alt="Product-img"></img>
                        </Link>
                        <Link class="ml-2" >
                            <img src="./images/bolodepote1.jpg" onClick={handleTrocaImage} class="img_mini_produto img-fluid img-thumbnail p-2" alt="Product-img" ></img>
                        </Link>
                        <Link class="ml-2" >
                            <img src="./images/cupecake1.jpg" onClick={handleTrocaImage} class="img_mini_produto img-fluid img-thumbnail p-2" alt="Product-img" ></img>
                        </Link>
                        <Link class="ml-2" >
                            <img src="./images/brigadeiro.jpg" onClick={handleTrocaImage} className="img_mini_produto img-fluid img-thumbnail p-2" alt="Product-img" ></img>
                        </Link>
                    </div>

                </div>

                <div class="col-lg-7">
                    <form class="pl-lg-4">
                        <h3 class="mt-0">Brigadeiro<Link class="text-muted" href="/"><i class="mdi mdi-square-edit-outline ml-2"></i></Link></h3>
                        <p class="mb-1">Adicionado: 09/12/2018</p>
                        <p class="font-16" value="4.5" tag="p" id="rating-container">
                            <span class="text-warning mdi mdi-star">
                            </span>
                            <span class="text-warning mdi mdi-star"></span>
                            <span class="text-warning mdi mdi-star"></span>
                            <span class="text-warning mdi mdi-star"></span>
                            <span class="text-warning mdi mdi-star-outline"></span>
                        </p>

                        <div class="mt-3">
                            <h4><span class="badge badge-success-lighten">Disponivel</span></h4>
                        </div>

                        <div class="mt-4">
                            <h6 class="font-14">Valor</h6>
                            <h3> R$ 1,50 Un</h3>
                        </div>

                        <div class="mt-4">
                            <h6 class="font-14">Quantidade:</h6>
                            <div class="d-flex ">
                                <input 
                                    type="number" 
                                    min="1" 
                                    onChange={(e)=>(setQtde(e.target.value))}
                                    class="form-control input_qtde_detalhe_produto" 
                                    placeholder="1"></input>
                                <button 
                                    type="button"
                                    onClick={handleAddToCart} 
                                    class="add_produto ml-2">Compre agora</button>
                            </div>

                        </div>


                        <div class="mt-4">
                            <h6 class="font-14">Descrição:</h6>
                            <p>Brigadeiro feito com muito amor e carinho</p>
                        </div>

                        
                    </form>
                </div>
            </div>
            <div class="table-responsive mt-4">
            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch => 
    bindActionCreators(carrinhoActions,dispatch)

export default connect(state => ({carrinho: state.carrinho}), mapDispatchToProps)(MainDetalheProduto)