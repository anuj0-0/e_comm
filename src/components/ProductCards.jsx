import React from 'react';
import { PiShoppingCartBold } from "react-icons/pi";

function ProductCards() {
    let { products } = JSON.parse(localStorage.getItem('products'))
  return (
    <>
     <div className='product-container container container-fluid'>
                <div className='row pt-3 m-auto gap-2 d-flex justify-content-center'>
                    {products.map(element => {
                        return (
                            <div className="card col-2" >
                                <img src={element.thumbnail} className="card-img-top" alt="..." style={{ width: "100%", height: "200px" }} />
                                <div className="card-body">
                                    <h5 className="card-title">{element.title}</h5>
                                    <p className="card-text">{element.description}</p>
                                </div>
                                <div className='card-footer d-flex justify-content-space-between'>
                                    <a href="#" className="btn btn-warning" style={{ margin: "auto", width: "40%", height: "40px" }}><PiShoppingCartBold /></a>
                                    <a href="#" className="btn btn-primary" style={{ margin: "auto", width: "50%", height: "40px",textAlign:"center" }}>View</a>

                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
    </>
  )
}

export default ProductCards