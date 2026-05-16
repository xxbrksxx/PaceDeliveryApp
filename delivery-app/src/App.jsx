import { useState } from 'react'
import './App.css'
import { restaurants, orderStatuses } from './data/mockData'

function App() {
  const [cart, setCart] = useState([])
  const [selectedRestaurant, setSelectedRestaurant] = useState(null)
  const [orders, setOrders] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [showOrders, setShowOrders] = useState(false)

  const addToCart = (item, restaurant) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id)
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ))
    } else {
      setCart([...cart, { ...item, quantity: 1, restaurantName: restaurant.name }])
    }
  }

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId))
  }

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(itemId)
    } else {
      setCart(cart.map(item => 
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      ))
    }
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)
  }

  const placeOrder = () => {
    if (cart.length === 0) return
    
    const newOrder = {
      id: Date.now(),
      items: [...cart],
      total: getTotalPrice(),
      status: orderStatuses.pending,
      date: new Date().toLocaleString()
    }
    
    setOrders([newOrder, ...orders])
    setCart([])
    setShowCart(false)
    alert('Order placed successfully! 🎉')
  }

  const RestaurantCard = ({ restaurant }) => (
    <div 
      className="restaurant-card"
      onClick={() => setSelectedRestaurant(restaurant)}
    >
      <div className="restaurant-image">{restaurant.image}</div>
      <div className="restaurant-info">
        <h3>{restaurant.name}</h3>
        <div className="restaurant-details">
          <span className="rating">⭐ {restaurant.rating}</span>
          <span className="delivery-time">🕐 {restaurant.deliveryTime}</span>
          <span className="delivery-fee">🚚 ${restaurant.deliveryFee}</span>
        </div>
        <div className="categories">
          {restaurant.categories.map(cat => (
            <span key={cat} className="category-tag">{cat}</span>
          ))}
        </div>
      </div>
    </div>
  )

  const RestaurantDetail = ({ restaurant }) => (
    <div className="restaurant-detail">
      <button className="back-button" onClick={() => setSelectedRestaurant(null)}>
        ← Back to Restaurants
      </button>
      <div className="restaurant-header">
        <div className="restaurant-image-large">{restaurant.image}</div>
        <div className="restaurant-header-info">
          <h1>{restaurant.name}</h1>
          <div className="restaurant-meta">
            <span>⭐ {restaurant.rating}</span>
            <span>🕐 {restaurant.deliveryTime}</span>
            <span>🚚 ${restaurant.deliveryFee} delivery</span>
          </div>
        </div>
      </div>
      
      <h2 className="menu-title">Menu</h2>
      <div className="menu-items">
        {restaurant.menu.map(item => (
          <div key={item.id} className="menu-item">
            <div className="menu-item-info">
              <h3>{item.name}</h3>
              <p className="description">{item.description}</p>
              <p className="price">${item.price.toFixed(2)}</p>
            </div>
            <button 
              className="add-to-cart-btn"
              onClick={() => addToCart(item, restaurant)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )

  const Cart = () => (
    <div className="cart-modal">
      <div className="cart-content">
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-btn" onClick={() => setShowCart(false)}>×</button>
        </div>
        
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <p className="restaurant-name">{item.restaurantName}</p>
                    <p className="item-price">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <p className="item-total">${(item.price * item.quantity).toFixed(2)}</p>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              ))}
            </div>
            
            <div className="cart-summary">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${getTotalPrice()}</span>
              </div>
              <div className="summary-row">
                <span>Delivery Fee:</span>
                <span>$2.99</span>
              </div>
              <div className="summary-row total">
                <span>Total:</span>
                <span>${(parseFloat(getTotalPrice()) + 2.99).toFixed(2)}</span>
              </div>
              <button className="checkout-btn" onClick={placeOrder}>
                Place Order
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )

  const Orders = () => (
    <div className="orders-modal">
      <div className="orders-content">
        <div className="orders-header">
          <h2>Your Orders</h2>
          <button className="close-btn" onClick={() => setShowOrders(false)}>×</button>
        </div>
        
        {orders.length === 0 ? (
          <p className="empty-orders">No orders yet</p>
        ) : (
          <div className="orders-list">
            {orders.map(order => (
              <div key={order.id} className="order-card">
                <div className="order-header">
                  <span className="order-id">Order #{order.id}</span>
                  <span className={`order-status status-${order.status.toLowerCase().replace(' ', '-')}`}>
                    {order.status}
                  </span>
                </div>
                <div className="order-date">{order.date}</div>
                <div className="order-items">
                  {order.items.map((item, index) => (
                    <div key={index} className="order-item">
                      <span>{item.name} x{item.quantity}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="order-total">Total: ${order.total}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )

  return (
    <div className="app">
      <header className="header">
        <h1>🚀 QuickEats</h1>
        <div className="header-actions">
          <button className="header-btn" onClick={() => setShowOrders(true)}>
            📦 Orders ({orders.length})
          </button>
          <button className="header-btn cart-btn" onClick={() => setShowCart(true)}>
            🛒 Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
          </button>
        </div>
      </header>

      <main className="main-content">
        {selectedRestaurant ? (
          <RestaurantDetail restaurant={selectedRestaurant} />
        ) : (
          <>
            <div className="hero">
              <h2>Delicious Food Delivered to Your Door</h2>
              <p>Choose from the best restaurants in your area</p>
            </div>
            
            <div className="restaurants-grid">
              {restaurants.map(restaurant => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          </>
        )}
      </main>

      {showCart && <Cart />}
      {showOrders && <Orders />}
    </div>
  )
}

export default App
