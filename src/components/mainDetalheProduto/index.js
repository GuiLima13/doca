import React from 'react';

import './style.css'

const MainDetalheProduto = () => {
    const handleTrocaImage = (e)=>{
        document.getElementById('img_detalhe_produto').src = e.target.src
    }

    return (
        <div class="card-body">



            <div class="main_produtos row">

                <div class="col-lg-5">

                    <a class="text-center d-block mb-4" >
                        <img  id="img_detalhe_produto" src="./images/brigadeiro.jpg" class="img-fluid" alt="Product-img" ></img>
                    </a>
                    <div class="d-lg-flex d-none justify-content-center">
                        <a >
                            <img src="./images/bolo1.jpg" onClick={handleTrocaImage} class="img_mini_produto img-fluid img-thumbnail p-2" alt="Product-img"></img>
                        </a>
                        <a class="ml-2" >
                            <img src="./images/bolodepote1.jpg" onClick={handleTrocaImage} class="img_mini_produto img-fluid img-thumbnail p-2" alt="Product-img" ></img>
                        </a>
                        <a class="ml-2" >
                            <img src="./images/cupecake1.jpg" onClick={handleTrocaImage} class="img_mini_produto img-fluid img-thumbnail p-2" alt="Product-img" ></img>
                        </a>
                        <a class="ml-2" >
                            <img src="./images/brigadeiro.jpg" onClick={handleTrocaImage} class="img_mini_produto img-fluid img-thumbnail p-2" alt="Product-img" ></img>
                        </a>
                    </div>

                </div>

                <div class="col-lg-7">
                    <form class="pl-lg-4">
                        <h3 class="mt-0">Brigadeiro<a class="text-muted" href="/"><i class="mdi mdi-square-edit-outline ml-2"></i></a></h3>
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
                                <input type="number" min="1" class="form-control input_qtde_detalhe_produto" placeholder="1"  ></input>
                                <button type="button" class="add_produto ml-2"><i class="mdi mdi-cart mr-1"></i>Compre agora</button>
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

export default MainDetalheProduto