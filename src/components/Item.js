import React from 'react'

function Item(props) {
   
  return (
    <div className='Item'>
        <img src={props.image} alt='' />
        <p>{props.title}</p>
        <span className='price'>
            {props.price}            
        </span>


    </div>
  )
}

export default Item;