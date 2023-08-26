import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { addCart,delCart } from '../redux/action'


const Cart = () => {
  const state=useSelector((state=>state.handleCart))
  const dispatch=useDispatch()

  const add=(product)=>{
    dispatch(addCart(product))
  }
  const muinus=(product)=>{
    dispatch(delCart(product))
  }
console.log(state)

  return (
      <>
          {state.map((product)=>
            <div className="card container m-5" key={product.id}>
              <div className=' d-flex column p-5 '>
                <div className='col-md-4'>
                  <img src={product.image}  className="card-img-top" alt={product.image}/>
                </div>
                <div className="card-body col-md-8 d-flex m-5  row align-items-center">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text fs-2" >Quantity : {product.qty}</p>
                  <p className="card-text fs-2" >Price : {product.qty}X{product.price}=
                   {product.qty*product.price}$</p>
                  <div>
                    
                  <button onClick={()=>add(product)} className="btn btn-dark m-3">Add +1</button>
                  <button onClick={()=>muinus(product)} className="btn btn-outline-dark">Muinus -1</button>
                  </div>
                </div>
              </div>
            </div>
            )}
    </>
  )
}

export default Cart
