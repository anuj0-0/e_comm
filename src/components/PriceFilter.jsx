import React from 'react'

function PriceFilter(props) {
    let { value } = props
    let price = value.map(item => {
        return item.price
    })
    price = Array.from(new Set([...price]))
    return (
        <>
            <div className='filters'>
                <div class="dropdown">
                    <button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Price
                    </button>
                    <ul class="dropdown-menu">
                        <label for="customRange2" class="form-label" style={{textAlign:"center"}}>Range</label>
                        <input type="range" class="form-range" min="0" max="1000" id="customRange2"/>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default PriceFilter