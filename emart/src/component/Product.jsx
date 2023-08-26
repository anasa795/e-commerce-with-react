import React,{useState,useEffect, Fragment} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { addCart } from '../redux/action'
import Skeleton from 'react-loading-skeleton'
import {BallTriangle,FidgetSpinner} from 'react-loader-spinner'
import { useDispatch } from 'react-redux'



const Product = () => {

    const {id}=useParams()
console.log(useParams())
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    const dispatch=useDispatch()
    const addProduct=(product)=>{
        dispatch(addCart(product))
    }

    useEffect(() => {
      
    const getProduct=async()=>{
        setLoading(true)
        const response=await fetch(`https://fakestoreapi.com/products/${id}`)
        setProduct(await response.json())
        setLoading(false)
    }

    getProduct()


    }, [])
console.log(product)

    const Loading=()=>{
    return(
        <>
            <div className="col-md-3">
                {/* // <Skeleton height={400} />  */}
                {/* <Skeleton count={5} />  */}
                {/* <BallTriangle
                    height={100}
                    width={100}
                    radius={5}
                    color="#4fa94d"
                    ariaLabel="ball-triangle-loading"
                    wrapperClass={{}}
                    wrapperStyle=""
                    visible={true}
                    /> */}
                    <FidgetSpinner
                        visible={true}
                        height="200"
                        width="200"
                        ariaLabel="dna-loading"
                        wrapperStyle={{}}
                        wrapperClass="dna-wrapper"
                        ballColors={['#fff', '#fff', '#fff']}
                        backgroundColor="#sss"
                        />
            </div>
        </>
        )
    }

     const ShowProductDetails=()=>{
        
    return(
        <>
            <Fragment >
                {
                    <>
                        <div className="  col-lg-6 "  >
                                <img  src={product.image} className="card-img-top" alt={product.title}/>
                        </div> 
                        <div className="  col-lg-6 row align-items-end "  >
                            <div className="card-body d-flex row align-items-end">
                                <div>
                                    <h5 className="card-title lead fs-3 m-5 ">{product.description}</h5>
                                    <p className="card-text fw-bold display-6 m-5 lead">${product.price}</p>
                                </div>
                                <div className=" d-flex  justify-content-center ">
                                    <NavLink to="/cart" className="btn btn-outline-dark fs-2 m-3">Go to Cart</NavLink>
                                    <button onClick={()=>addProduct(product)} className="btn btn-dark fs-2 m-3">Add to Cart</button>
                                </div>
                                <div className=" d-flex  justify-content-around ">
                                    <p className="card-text p-2 m-0 fs-2 lead">Purchase Times:{product.rating?.count}</p>
                                    <p className="card-text p-2 m-0 fs-2 lead">Rate:{product.rating?.rate} 
                                        <i className='fa fa-star'></i>
                                    </p>
                                </div>
                            </div>
                        </div>      
                    </>
                }
            </Fragment>
        </>
        )
    }

  return (
    <div>
        <div className="container my-5 py-5">
            <div className="row">
                <div className='col-12 mb-5'>
                    <h1 className='display-6 fw-border text-center '>
                        {product.title}
                    </h1>
                    <hr/>
                </div>
            </div>
            <div className='row justify-content-center'>
                {loading?<Loading/>:<ShowProductDetails/>}
            </div>
        </div>
    </div>
  )
}

export default Product
