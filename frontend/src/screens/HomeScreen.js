import { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logger from "use-reducer-logger";
//import data from "../data";

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return {...state, loading: true};
        case "FETCH_SUCCESS":
            return {...state, products: action.plyload, loading: false};
        case "FETCH_FAIL":
            return {...state, loading: false, error: action.playload };
        default: 
            return state;       
    }
};

function HomeScreen(){
    const [{loading, error, products}, dispatch] = useReducer(logger(reducer), {
        products: [],
        loading: true, 
        error: '',
    });
    //const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            dispatch({type: "FETCH_REQUEST"});
            try {
                const result = await axios.get("/api/products");
                dispatch({type: "FETCH_SUCCESS", plyload: result.data});
            } catch (error) {
                dispatch({type: "FETCH_FAIL", playload: error.message});
            }
            
           // setProducts(result.data);
        };   
        fetchData(); 
    }, []);

    return (
      <div>
        <h1>Produtos em Destaque</h1>
        <div className="products">
          {loading ? (
            <div>Carregando...</div>
          ) : error ? (
            <div>{error}</div>
          ) : (               
           products.map((product) => (
             <div className="product" key={product.slug}>
               <Link to={`/products/${product.slug}`}>
                 <img src={product.image} alt={product.name} />
               </Link>  
               <div className="product-info">
                 <Link to={`/products/${product.slug}`}>                
                   <p>{product.name}</p>
                 </Link>                                
                 <p>
                   <strong>R${product.price}</strong>
                 </p>                 
                 <button>Comprar</button>
               </div>
             </div>
           ))
         )} 
      </div>   
    </div>
  );
}
export default HomeScreen;