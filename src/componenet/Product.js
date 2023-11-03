import { Link } from "react-router-dom";

function Product(props) {
    let {product,show} = props;
    return (
        <>
            <div className="card" >
                <img src={product.image} className="card-img-top" alt={product.title}/>
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        
                        {show && <Link to = {`/products/${product.id}`} className="btn btn-primary">Buy</Link>}
                    </div>
            </div>
        </>
    )
}
export default Product