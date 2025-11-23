import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import BookDetails from './pages/BookDetails';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    const existingItem = cartItems.find(item => item.id === book.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === book.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...book, quantity: 1 }]);
    }
  };

  const removeFromCart = (bookId) => {
    setCartItems(cartItems.filter(item => item.id !== bookId));
  };

  const updateQuantity = (bookId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(bookId);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === bookId 
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={
              <Cart 
                cartItems={cartItems} 
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            } />
            <Route path="/book/:id" element={<BookDetails addToCart={addToCart} />} />
          </Routes>
        </main>
       
      </div>
    </Router>
  );
}

export default App;