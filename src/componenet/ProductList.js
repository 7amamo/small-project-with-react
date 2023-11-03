import { useEffect, useState } from "react"
import Product from "./Product"

function ProductList (){
    let APIURL = "https://fakestoreapi.com/products"
    let [products,setproducts] = useState([])
    let [categories,setcategories] = useState([])

    let allproduct = ()=>{
        fetch(APIURL)
        .then((res)=> res.json())
        .then((data)=> setproducts(data))
    }
    let allcategory = ()=>{
        fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then((data)=> setcategories(data))
    }

    let dataincategory = (cat)=>{
        fetch(`${APIURL}/category/${cat}`)
        .then(res=>res.json())
        .then((data)=> setproducts(data))
    }
    useEffect(()=>{
        allproduct()
        allcategory()
    },[] )

    // console.log(products)
    return(
        <>
        <h2 className="text-center p-3">our product</h2>
        <button type="button"   class="btn btn-info ms-3 mb-4" onClick={()=>{
            allproduct()
        }}>All</button>
        {categories.map((cat)=>{
            return(
                <button type="button" key={cat}  class="btn btn-info ms-3 mb-4" onClick={()=>{
                    dataincategory(cat)
                }}>{cat}</button>
                // <button key={cat} className=""> {cat}</button>
            )
        })}
        <div className="container">
            <div className="row">
                {products.map((product)=>{
                    return (
                        <div className="col-3" key={product.id}>
                            <Product  product={product} show={true}/>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}
export default ProductList ;