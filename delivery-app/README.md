# 🚀 QuickEats - Food Delivery App

A modern, responsive food delivery application built with React and Vite.

## Features

- **Browse Restaurants**: View a list of restaurants with ratings, delivery times, and categories
- **Restaurant Details**: Click on any restaurant to view their full menu
- **Shopping Cart**: Add items to cart, adjust quantities, and remove items
- **Place Orders**: Complete checkout and place orders
- **Order Tracking**: View order history with status tracking
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with gradients, animations, and responsive design

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Navigate to the project directory
cd delivery-app

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Production files will be generated in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
delivery-app/
├── src/
│   ├── data/
│   │   └── mockData.js      # Mock restaurant and menu data
│   ├── App.jsx              # Main application component
│   ├── App.css              # Application styles
│   ├── index.css            # Global styles
│   └── main.jsx             # Entry point
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
└── vite.config.js           # Vite configuration
```

## Usage

1. **Browse Restaurants**: Scroll through the list of available restaurants
2. **View Menu**: Click on a restaurant card to see their menu
3. **Add to Cart**: Click "Add to Cart" on any menu item
4. **View Cart**: Click the cart button in the header to review your order
5. **Adjust Quantities**: Use + and - buttons to change item quantities
6. **Place Order**: Click "Place Order" to complete your purchase
7. **Track Orders**: Click "Orders" in the header to view order history

## Features Demo

- 🍕 5 different restaurants with unique cuisines
- 🛒 Real-time cart management
- 📦 Order history with status tracking
- 📱 Fully responsive design
- ✨ Smooth animations and transitions

## License

MIT
