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

  return (
    <div className="container my-5">
      <h1 className="mb-4">
        <i className="bi bi-cart3 me-2"></i>Shopping Cart
      </h1>
      
      <div className="row g-4">
    
        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-header bg-white py-3 border-bottom">
              <h5 className="mb-0">
                <i className="bi bi-bag-check me-2"></i>
                Cart Items ({cartItems.length})
              </h5>
            </div>
            <div className="card-body p-0">
              {cartItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`p-3 ${index !== cartItems.length - 1 ? 'border-bottom' : ''}`}
                >
                  <div className="row align-items-center g-3">
                  
                    <div className="col-6 col-md-2">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="img-fluid rounded shadow-sm"
                        style={{ maxHeight: '100px', objectFit: 'cover' }}
                      />
                    </div>
                    
                   
                    <div className="col-6 col-md-3">
                      <h6 className="mb-1 fw-bold">{item.title}</h6>
                      <p className="text-muted small mb-1">
                        <i className="bi bi-person me-1"></i>
                        {item.author}
                      </p>
                      <p className="text-muted small mb-0">
                        <i className="bi bi-tag me-1"></i>
                        {item.category}
                      </p>
                    </div>
                    
                    
                    <div className="col-4 col-md-2 text-center">
                      <small className="text-muted d-block mb-1">Price</small>
                      <p className="fw-bold mb-0 text-primary">${item.price}</p>
                    </div>
                    
                    
                    <div className="col-4 col-md-2">
                      <small className="text-muted d-block mb-1 text-center">Quantity</small>
                      <div className="input-group input-group-sm">
                        <button 
                          className="btn btn-outline-secondary"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <i className="bi bi-dash"></i>
                        </button>
                        <input 
                          type="text" 
                          className="form-control text-center fw-bold" 
                          value={item.quantity}
                          readOnly
                          style={{ maxWidth: '50px' }}
                        />
                        <button 
                          className="btn btn-outline-secondary"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <i className="bi bi-plus"></i>
                        </button>
                      </div>
                    </div>
                    
                   
                    <div className="col-3 col-md-2 text-center">
                      <small className="text-muted d-block mb-1">Subtotal</small>
                      <p className="fw-bold mb-0 text-success">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    
                   
                    <div className="col-1 col-md-1 text-center">
                      <button 
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => removeFromCart(item.id)}
                        title="Remove item"
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="card-footer bg-white border-top">
              <Link to="/" className="btn btn-outline-primary">
                <i className="bi bi-arrow-left me-2"></i>Continue Shopping
              </Link>
            </div>
          </div>
        </div>
        
       
        <div className="col-lg-4">
          <div className="card shadow-sm border-0 sticky-top" style={{ top: '20px' }}>
            <div className="card-header bg-primary text-white py-3">
              <h5 className="mb-0">
                <i className="bi bi-receipt me-2"></i>Order Summary
              </h5>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-3 pb-2">
                <span className="text-muted">Subtotal:</span>
                <span className="fw-bold">${calculateTotal()}</span>
              </div>
              <div className="d-flex justify-content-between mb-3 pb-2">
                <span className="text-muted">Tax (10%):</span>
                <span className="fw-bold">${calculateTax()}</span>
              </div>
              <div className="d-flex justify-content-between mb-3 pb-3 border-bottom">
                <span className="text-muted">Shipping:</span>
                <span className="text-success fw-bold">
                  <i className="bi bi-truck me-1"></i>FREE
                </span>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <strong className="fs-5">Total:</strong>
                <strong className="text-primary fs-4">${calculateFinalTotal()}</strong>
              </div>
              
              <button className="btn btn-primary w-100 py-2 mb-3">
                <i className="bi bi-lock-fill me-2"></i>Proceed to Checkout
              </button>
              
              <div className="text-center">
                <small className="text-muted">
                  <i className="bi bi-shield-check me-1"></i>
                  Secure Checkout
                </small>
              </div>
            </div>
          </div>
          
         
          <div className="card shadow-sm border-0 mt-3">
            <div className="card-body">
              <h6 className="mb-3">
                <i className="bi bi-gift me-2"></i>Have a Promo Code?
              </h6>
              <div className="input-group">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Enter code"
                />
                <button className="btn btn-outline-primary">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }

export default Cart;