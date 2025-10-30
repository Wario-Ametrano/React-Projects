 import 'bootstrap/dist/css/bootstrap.min.css';
 import { Card, Button, Alert } from 'react-bootstrap';
 import { useState,useEffect } from "react";
 import { useDispatch ,useSelector} from 'react-redux';
 import { add } from '../store/cartSlice';
 import { getProducts } from '../store/productSlice';
 import StatusCode from '../utils/StatusCode';

  const Product = () => {

    const dispatch = useDispatch();
    const {data : products , status} = useSelector(state => state.products);

    //const [products, getProducts] = useState([]);

    useEffect(() => {

        //Dispatch an action thunk to fetch products
        dispatch(getProducts());

        //API call without thunk
    /*  fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(result => getProducts(result));
    */
    }
    , []);


    if (status === StatusCode.LOADING) {
        return <div>Loading...</div>;
    }
    if (status === StatusCode.ERROR) {
        return <Alert key="danger" variant='danger'>Something went wrong! Please try again later</Alert>;
    }

    const addToCart = (product) => {
        //dispatch an action to add product to cart
        dispatch(add(product));
    }

    const cards = products.map((product) => (
       <div className="col-md-3 d-flex justify-content-center" style={{ marginBottom: '30px' }}>
            <Card key={product.id} style={{height:"440px" , width: '18rem', marginBottom: '20px' }}>
                <div className="text-center" style={{height:"150px",}}>
                    <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px', marginTop: '20px' }}/>
                </div>
                <Card.Body>
                    <Card.Title style={{ height: '50px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {product.title}
                    </Card.Title>
                    <Card.Text style={{ height: '70px', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '-10px' }}>
                        {product.description}
                    </Card.Text>
                    <div>
                        <Card.Text style={{height: '25px', overflow: 'hidden', textOverflow: 'ellipsis', margin: 0, color:"CornflowerBlue",fontWeight:'500'}}> Category: {product.category}</Card.Text>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center',justifyContent: 'center', gap: '5px', marginBottom: '10px' }}>
                        <i className="bi bi-star-fill" style={{ color: 'orange' }}></i>
                        <Card.Text style={{height: '20px', overflow: 'hidden', textOverflow: 'ellipsis', margin: 0,}}> {product.rating.rate}</Card.Text>
                        <i className="bi bi-hand-thumbs-up-fill" style={{ color: 'LightSeaGreen' }}></i>
                        <Card.Text style={{height: '20px', overflow: 'hidden', textOverflow: 'ellipsis', margin: 0,}}> {product.rating.count}</Card.Text>
                    </div>
                    <Card.Title style={{ height: '20px', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '-10px',marginBottom:"-30px" }}>
                        {product.price}€
                    </Card.Title>
                </Card.Body>
                <Card.Footer style={{ background: 'white' }}>
                    <Button variant="primary" onClick={()=>addToCart(product)}>Add To Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ));
    return (
        <>
            <div className="row">
                {cards}
            </div>
        </>
    );
}
export default Product;