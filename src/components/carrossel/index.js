import React from "react"
import './style.css'

const Carrossel = ()=>{

    return(
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://i.ytimg.com/vi/7J_lvGnTlxM/maxresdefault.jpg" className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                    <img src="https://i.ytimg.com/vi/MaXYkHE2-gY/maxresdefault.jpg" className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                    <img src="https://i.ytimg.com/vi/gBj74nwI45E/maxresdefault.jpg" className="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
}
 export default Carrossel;
