import React from 'react'

function CategeryFiltet(props) {
   
    let { value } = props
    let category    = value.map(item => {
        return item.category
    })
    category = Array.from(new Set([...category]))
    return (
        <>
            <div className='filters'>
                <div class="dropdown">
                    <button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    category
                    </button>
                    <ul class="dropdown-menu">
                        {category.map(item => {
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

export default CategeryFiltet