import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../redux/productSlice';
import { useNavigate, Link } from 'react-router-dom';
import ProductForm from '../components/ProductForm';
import { clearUser } from '../redux/authSlice';

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state) => state.auth.user);

  const handleSubmit = async (productData) => {
    setIsLoading(true);
    try {
      await dispatch(addProduct(productData)).unwrap();
      navigate('/products');
    } catch (error) {
      console.error('Failed to add product:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    dispatch(clearUser());
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <div className="nav-left">
          <Link to="/" className="nav-link">Dashboard</Link>
          <Link to="/products" className="nav-link active">Products</Link>
        </div>
        <div className="nav-right">
          <span className="welcome-text">Welcome, {user?.firstName || 'User'}!</span>
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
      </nav>
      <main className="dashboard-content">
        <div className="dashboard-header">
          <h1>Add New Product</h1>
        </div>
        <ProductForm onSubmit={handleSubmit} isLoading={isLoading} />
      </main>
    </div>
  );
};

export default AddProduct; 
