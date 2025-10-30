 import Product from './Product';
 
 
 const Dashboard = () => {
     return (
        <>
            <div className='Gradient p-3 mb-4'>
                <div style={{display: 'flex', alignItems: 'center',justifyContent: 'center',gap: '15px',margin:"15px"}} >
                    <h1>Products</h1>
                    <i className="bi bi-bag-fill"></i>
                </div>
                    <Product />
            </div>
        </>
     );
 }
    export default Dashboard;