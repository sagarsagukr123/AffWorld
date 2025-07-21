import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../redux/authSlice';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Link, useNavigate } from 'react-router-dom';

const data = [
  { name: 'Jan', sales: 4000, revenue: 2400 },
  { name: 'Feb', sales: 3000, revenue: 1398 },
  { name: 'Mar', sales: 2000, revenue: 9800 },
  { name: 'Apr', sales: 2780, revenue: 3908 },
  { name: 'May', sales: 1890, revenue: 4800 },
  { name: 'Jun', sales: 2390, revenue: 3800 },
];

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(clearUser());
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <div className="nav-left">
          <Link to="/" className="nav-link active">Dashboard</Link>
          <Link to="/products" className="nav-link">Products</Link>
        </div>
        <div className="nav-right">
          <span className="welcome-text">Welcome, {user?.firstName || 'User'}!</span>
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
      </nav>
      
      <main className="dashboard-content">
        <div className="dashboard-header">
          <h1>Sales Dashboard</h1>
        </div>
        
        <div className="chart-container">
          <BarChart
            width={800}
            height={400}
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#8884d8" name="Sales" />
            <Bar dataKey="revenue" fill="#82ca9d" name="Revenue" />
          </BarChart>
        </div>

        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Total Sales</h3>
            <p>$16,060</p>
          </div>
          <div className="stat-card">
            <h3>Total Revenue</h3>
            <p>$26,106</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard; 