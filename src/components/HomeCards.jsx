import React from 'react'
import { PiShoppingCartBold } from "react-icons/pi";
function HomeCards() {
    let { products } = JSON.parse(localStorage.getItem('products'))
    let arr = [];
    for (let i = 0; i < 4; i++) {
        arr.push(products[i])
    }
    return (
        <>
            <div className='homeHead pb-5'>
                <h3 style={{ textAlign: "center" }}>Products</h3>
                <div className='underline'></div>
            </div>

            <div className='container d-flex pt-3 m-auto gap-2'>
                {arr.map(element => {
                    return (
                        <div className="card" >
                            <img src={element.thumbnail} className="card-img-top" alt="..." style={{ width: "100%", height: "100%" }} />
                            <div className="card-body">
                                <h5 className="card-title">{element.title}</h5>
                                <p className="card-text">{element.description}</p>
                            </div>
                            <div className='card-footer d-flex justify-content-space-between'>
                            <a href="#" className="btn btn-warning" style={{margin:"auto",width:"40%",height:"40px"}}><PiShoppingCartBold/></a>
                            <a href="#" className="btn btn-primary" style={{margin:"auto",width:"40%",height:"40px"}}>View</a>
                            
                            </div>
                        </div>
                    )

                })
                }                                       
            </div>
        </>
    )
}

export default HomeCards