import { Link } from 'react-router-dom';

function Cart({ cartItems, removeFromCart, updateQuantity }) {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const calculateTax = () => {
    return (calculateTotal() * 0.1).toFixed(2);
  };

  const calculateFinalTotal = () => {
    return (parseFloat(calculateTotal()) + parseFloat(calculateTax())).toFixed(2);
  };

   if (cartItems.length === 0) {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-12 text-center py-5">
            <i className="bi bi-cart-x display-1 text-muted mb-4"></i>
            <h2 className="mb-3">Your Cart is Empty</h2>
            <p className="text-muted mb-4">Looks like you haven't added any books to your cart yet.</p>
            <Link to="/" className="btn btn-primary btn-lg">
              <i className="bi bi-arrow-left me-2"></i>Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }
  }

export default Cart;