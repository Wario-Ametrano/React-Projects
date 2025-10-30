import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from 'react-bootstrap';
import { remove } from '../store/cartSlice';

const Cart = () => {
  const productCart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const removeToCart = (product) => {
    dispatch(remove(product));
  };

  //  Calcolo del totale
  const totalPrice = productCart.reduce((sum, product) => sum + product.price, 0).toFixed(2);

  const cards = productCart.map((product) => (
    <div className="col-md-12 d-flex justify-content-center" style={{ marginBottom: '30px' }} key={product.id}>
      <Card style={{ height: "380px", width: '40%', marginBottom: '20px' }}>
        <div className="text-center" style={{ height: "150px" }}>
          <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px', marginTop: '20px' }} />
        </div>
        <Card.Body>
          <Card.Title style={{ height: '50px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {product.title}
          </Card.Title>
          <Card.Text style={{ height: '70px', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '-10px' }}>
            {product.description}
          </Card.Text>
          <Card.Title style={{ height: '20px', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '-10px', marginBottom: "-30px" }}>
            {product.price}€
          </Card.Title>
        </Card.Body>
        <Card.Footer style={{ background: 'white' }}>
          <Button variant="danger" onClick={() => removeToCart(product)}>Remove From Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
        <div className='Gradient p-3 mb-4'>
            <h1>Cart</h1>
            <div className="row">
                {cards}
            </div>
            {/*  Totale */}
            <div className="text-center mt-4" style={{margin:"20px", backgroundColor:"white",height:"130px",alignSelf:"center",paddingTop:"30px",borderRadius: 6 }} >
                <h4>Total: <strong>{totalPrice}€</strong></h4>
                <Button variant="success">Proceed to Checkout</Button>
            </div>
        </div>
    </>
  );
};

export default Cart;
