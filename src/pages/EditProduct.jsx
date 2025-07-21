import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { updateProduct } from '../redux/productSlice';
import ProductForm from '../components/ProductForm';
import { clearUser } from '../redux/authSlice';

const EditProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const product = useSelector((state) =>
    state.products.products.find((p) => p.id === parseInt(id))
  );
  const user = useSelector((state) => state.auth.user);

  const handleSubmit = async (productData) => {
    setIsLoading(true);
    try {
      await dispatch(updateProduct({ id: product.id, ...productData })).unwrap();
      navigate('/products');
    } catch (error) {
      console.error('Failed to update product:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    dispatch(clearUser());
    navigate('/login');
  };

  if (!product) {
    return (
      <div className="dashboard-container">
        <main className="dashboard-content">
          <p>Product not found.</p>
          <Link to="/products">Go back to Products</Link>
        </main>
      </div>
    );
  }

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
          <h1>Edit Product</h1>
        </div>
        <ProductForm product={product} onSubmit={handleSubmit} isLoading={isLoading} />
      </main>
    </div>
  );
};

export default EditProduct; 