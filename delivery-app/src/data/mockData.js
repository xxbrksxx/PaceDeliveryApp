// Mock data for the delivery app

export const restaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    image: "🍕",
    rating: 4.5,
    deliveryTime: "25-35 min",
    deliveryFee: 2.99,
    categories: ["Italian", "Pizza"],
    menu: [
      { id: 101, name: "Margherita Pizza", price: 12.99, description: "Classic tomato and mozzarella" },
      { id: 102, name: "Pepperoni Pizza", price: 14.99, description: "With extra pepperoni" },
      { id: 103, name: "Caesar Salad", price: 8.99, description: "Fresh romaine with Caesar dressing" }
    ]
  },
  {
    id: 2,
    name: "Burger Barn",
    image: "🍔",
    rating: 4.3,
    deliveryTime: "20-30 min",
    deliveryFee: 1.99,
    categories: ["American", "Burgers"],
    menu: [
      { id: 201, name: "Classic Burger", price: 9.99, description: "Beef patty with lettuce and tomato" },
      { id: 202, name: "Cheese Burger", price: 10.99, description: "With cheddar cheese" },
      { id: 203, name: "French Fries", price: 4.99, description: "Crispy golden fries" }
    ]
  },
  {
    id: 3,
    name: "Sushi Station",
    image: "🍣",
    rating: 4.7,
    deliveryTime: "30-40 min",
    deliveryFee: 3.99,
    categories: ["Japanese", "Sushi"],
    menu: [
      { id: 301, name: "California Roll", price: 11.99, description: "Crab, avocado, cucumber" },
      { id: 302, name: "Salmon Nigiri", price: 8.99, description: "Fresh salmon on rice" },
      { id: 303, name: "Miso Soup", price: 3.99, description: "Traditional Japanese soup" }
    ]
  },
  {
    id: 4,
    name: "Taco Town",
    image: "🌮",
    rating: 4.4,
    deliveryTime: "15-25 min",
    deliveryFee: 2.49,
    categories: ["Mexican", "Tacos"],
    menu: [
      { id: 401, name: "Beef Taco", price: 3.99, description: "Seasoned beef with cheese" },
      { id: 402, name: "Chicken Taco", price: 3.49, description: "Grilled chicken with salsa" },
      { id: 403, name: "Guacamole", price: 5.99, description: "Fresh avocado dip" }
    ]
  },
  {
    id: 5,
    name: "Noodle House",
    image: "🍜",
    rating: 4.6,
    deliveryTime: "25-35 min",
    deliveryFee: 2.99,
    categories: ["Asian", "Noodles"],
    menu: [
      { id: 501, name: "Ramen Bowl", price: 13.99, description: "Pork broth with noodles" },
      { id: 502, name: "Pad Thai", price: 12.99, description: "Thai stir-fried noodles" },
      { id: 503, name: "Spring Rolls", price: 6.99, description: "Crispy vegetable rolls" }
    ]
  }
];

export const orderStatuses = {
  pending: "Pending",
  confirmed: "Confirmed",
  preparing: "Preparing",
  onTheWay: "On the Way",
  delivered: "Delivered"
};
