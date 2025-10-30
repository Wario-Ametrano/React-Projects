import './App.css';
import Product from './components/Product';
import { createBrowserRouter , createRoutesFromElements,RouterProvider ,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import RootLayout from './components/RootLayout';
import Cart from './components/Cart';
import Home from './components/Home';
import UserProfile from './components/UserProfile';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
   <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />        {/* Home come default su "/" */}
      <Route path="dashboard" element={<Dashboard />} /> {/* Dashboard é la pagina al cui interno ci sono i prodotti*/}
      <Route path="profile" element={<UserProfile />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  ));
  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
