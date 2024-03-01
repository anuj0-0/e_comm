import React from 'react'

function BrandFilter(props) {

    let { value } = props
    let brand = value.map(item => {
        return item.brand
    })
    brand = Array.from(new Set([...brand]))
    return (
        <>
            <div className='filters'>
                <div class="dropdown">
                    <button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Brand
                    </button>
                    <ul class="dropdown-menu">
                        {brand.map(item => {
                            return (
                                <li><a class="dropdown-item" href="#">{item}</a></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default BrandFilter