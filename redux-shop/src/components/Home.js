// src/components/Home.js
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Product from './Product';

const Home = () => {
  const [index, setIndex] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        if (!mounted) return;
        setProducts(Array.isArray(data) ? data.slice(0, 5) : []);
        setLoading(false);
      })
      .catch((err) => {
        if (!mounted) return;
        console.error(err);
        setError('Impossibile caricare i prodotti');
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '40vh' }}>
        <Spinner animation="border" role="status" />
        <span className="ms-2">Caricamento...</span>
      </div>
    );
  }


  return (
    <>
    <div className="Gradient p-3 mb-4" >
      <Carousel activeIndex={index} onSelect={handleSelect} fade>
        {products.map((product) => (
          <Carousel.Item key={product.id}>
            <img
              className="d-block w-100"
              src={product.image}
              alt={product.title}
              style={{ height: '450px', objectFit: 'contain', background: '#f8f9fa' }}
            />
            <Carousel.Caption style={{ background: 'rgba(0,0,0,0.45)', borderRadius: 6 }}>
              <h3 style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{product.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* qui mostriamo le descrizioni generate da descPr */}
      <div className="container mt-4">
          <Product />
      </div>
    </div>
    </>
  );
};

export default Home;
