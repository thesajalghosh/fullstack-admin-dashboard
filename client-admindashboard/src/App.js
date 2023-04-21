
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Dashboard from "./scenes/dashboard/Dashboard"
import Layout from "./scenes/layout/Layout.jsx"
import Products from "./scenes/products/Products"
import Transactions from 'scenes/transactions/Transactions';
import Geography from 'scenes/geography/Geography';
import Customers from 'scenes/customer/Customers';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
   
    <Routes>
    <Route element={ <Layout/>}>
    <Route path="/" element={<Navigate to="/dashboard" replace/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/product" element={<Products/>}/>
    <Route path="/customers" element={<Customers/>}/>
    <Route path="/geography" element={<Geography/>}/>
    <Route path="/transactions" element={<Transactions/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
