import React,{useState,useEffect, Fragment} from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link, NavLink } from 'react-router-dom'
const Products = () => {


    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)

    let componentMounted=true

    useEffect(() => {
       const getProducts=async()=>{
        setLoading(true)
        const response=await fetch('https://fakestoreapi.com/products')
        if(componentMounted){
            setData(await response.clone().json())
            setFilter(await response.json())
            setLoading(false)

        }
        return ()=>{
            componentMounted=false
        }
       }
       getProducts()
    }, [])
    // console.log(filter)


    const Loading=()=>{
    return(
        <>
            <div className="col-md-3">
                {/* <Skeleton />  */}
                <Skeleton count={5} /> 
            </div>
        </>
        )
    }

    const filterProduct=(cat)=>{
        console.log(filter)
        console.log(data)
        setFilter(data.filter((acc)=>{
            if(acc.category===cat){
                return acc
            }
            
        }))
    }
    const ShowProducts=()=>{
        
    return(
        <>
            <div className='buttons d-flex justify-content-center flex-wrap mb-5 pb-5'>
                <button className='btn btn-outline-dark m-2' onClick={()=>setFilter(data)}>All</button>
                <button className='btn btn-outline-dark m-2' onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
                <button className='btn btn-outline-dark m-2' onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
                <button className='btn btn-outline-dark m-2' onClick={()=>filterProduct("jewelery")}>Jewelery </button>
                <button className='btn btn-outline-dark m-2' onClick={()=>filterProduct("electronics")}>Electronic </button>
            </div>
            <div  className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 justify-content-center">
                {filter.map((product)=>{
                    let a=Math.floor(Math.random() * 21);
                    let sale
                     
                        
                    if(a===product.id){
                        sale=true
                        
                    }
                    
                    return(
                        <Fragment key={product.id}>
                            
                            {
                                sale&&
                                 <div className="col"  >
                                    <div className="card h-100 p-4 text-center" key={product.id}>
                                        <NavLink to={`/products/${product.id}`}>
                                            <img  src={product.image} className="card-img-top" alt={product.title}/>
                                        </NavLink>
                                        <div className="card-body d-flex flex-column justify-content-end">
                                            <h5 className="card-title">{product.title.slice(0,12)}</h5>
                                            <div>
                                                <p className="card-text sale lead ">Sale 10%</p>
                                                <del className='m-2 '>${((product.price)*1.1).toFixed(2)}...</del> 
                                            </div>
                                            <p className="card-text fw-bold lead">${product.price}</p>
                                            <a href="#" className="btn btn-outline-dark">Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                            }
                            {
                                !sale&&
                                 <div className="col"  >
                                    <div className="card h-100 p-4 text-center" key={product.id}>
                                        <NavLink to={`/products/${product.id}`}>
                                                <img  src={product.image} className="card-img-top" alt={product.title}/>
                                        </NavLink>
                                        <div className="card-body d-flex flex-column justify-content-end">
                                            <h5 className="card-title">{product.title.slice(0,12)}...</h5>
                                            <p className="card-text fw-bold lead">${product.price}</p>
                                            <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                        </div>
                                    </div>
                                </div>
                            }
                        </Fragment>
                    )
                })}
            </div>
            
        </>
        )
    }


    // console.log(filter)

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
            <div className='col-12 mb-5'>
                <h1 className='display-6 fw-border text-center '>
                    Lastest Products
                </h1>
                <hr/>
            </div>
        </div>
        <div className='row justify-content-center'>
            {loading?<Loading/>:<ShowProducts/>}
        </div>
      </div>
    </div>
  )
}

export default Products
