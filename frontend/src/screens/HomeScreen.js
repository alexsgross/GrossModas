import { Link } from "react-router-dom";
import data from "../data";

function HomeScreen(){
    return <div>
        <h1>Produtos em Destaque</h1>
            <div className="products">
            {data.products.map((product) => (
                <div className="product" key={product.slug}>
                <Link to={`/products/${product.slug}`}>
                    <img src={product.image} alt={product.name} />
                </Link>  
                <div className="product-info">
                    <Link to={`/products/${product.slug}`}>                
                    <p>{product.name}</p>
                    </Link>
                    <Link to={`/products/${product.slug}`}>
                    <p>
                        <strong>{product.price}</strong>
                    </p>
                    </Link>    
                    <button>Comprar</button>
                </div>
                </div>
            ))}
            </div>   
    </div>;
}
export default HomeScreen;