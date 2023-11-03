import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import  "./product.css";


function ProductDetails(){
    let params = useParams()
    let api = "https://fakestoreapi.com/products"
    let [product,setproduct] = useState({})

    useEffect(()=>{
        fetch(`${api}/${params.productid}`).then((res)=>res.json()).then((ara)=> setproduct(ara))
    },)
    // console.log(ara)

    return(
        <>
        <div className="container">

        <h1 className="text-center p-5"> Details {params.productid}</h1>
        <div className="details">
        <Product product={product} show={false} className="details"/>
        <h2 className="text-center">price :{product.price} $</h2>
        </div>
        </div>
        </>
    )
} export default ProductDetails;

