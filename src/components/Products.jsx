import React from 'react';
import '../App.css'
import ProductCards from './ProductCards';
import BrandFilter from './BrandFilter';
import CategeryFilter from './CategeryFilter';
import PriceFilter from './PriceFilter';

function Products() {
    let { products } = JSON.parse(localStorage.getItem('products'))
   
    return (
        <>
            <section id="filters">
             <div className='filter-box'>
             <BrandFilter value={products}/>
               <CategeryFilter value={products}/>
               <PriceFilter value={products}/>
             </div>
            </section>
            <section id="product-cards">
                <ProductCards />
            </section>
        </>
    )
}

export default Products