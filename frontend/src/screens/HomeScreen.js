import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import logger from "use-reducer-logger";

import Product from "../components/Product";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Helmet } from "react-helmet-async";


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
        <Helmet>
          <title>Gross Modas</title>
        </Helmet>
        <h1>Produtos em Destaque</h1>
        <div className="products">
          {loading ? (
            <div>Carregando...</div>
          ) : error ? (
            <div>{error}</div>
          ) : (  
           <Row>
                {products.map((product) => (
                  <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                    <Product product={product}></Product>
                  </Col>    
                ))}
           </Row>                
         )} 
      </div>   
    </div>
  );
}
export default HomeScreen;