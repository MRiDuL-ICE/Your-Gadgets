# Your Gadget - Tech Accessories E-commerce-[Live](https://urgadget.netlify.app/)


## Requirements Followed By - [Requirements PDF](/Batch-10_Assignment-08-.pdf)

## Technologies Used
- React.js
- Tailwind CSS
- React Router DOM
- SweetAlert2
- React Helmet
- React Rating Stars Component

## React Fundamental Concepts Used

1. **Component Architecture**
   - Functional Components
   - Component Composition
   - Component Reusability
   - Props Drilling
   - Children Props

2. **Hooks Implementation**
   - useState for local state management
   - useEffect for data fetching and side effects
   - useContext for global state access
   - useNavigate and useLocation for routing
   - useParams for dynamic routing

3. **State Management**
   - Context API for global state (cart and wishlist)
   - Local state for UI interactions
   - State lifting when needed

4. **Routing**
   - Dynamic Routes
   - Protected Routes
   - Route Parameters
   - Nested Routes
   - Navigation Guards

5. **Event Handling**
   - Click Events
   - Form Events
   - Custom Event Handlers

## Data Management

### Context API Implementation
- Created a centralized context (ContextAPI.jsx) for managing:
  ```javascript
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  ```
- Context Provider wraps the entire application
- Global state access in components using useContext hook
- Manages shopping cart and wishlist functionality

### Data Flow
1. Product data fetched from JSON file
2. User interactions update global state
3. State changes trigger UI updates
4. Cart and wishlist management through context

## Key Features

1. **Dynamic Product Filtering**
   - Category-based filtering
   - Real-time updates
   - Active category highlighting
   - Empty state handling

2. **Shopping Cart Management**
   - Add/Remove items
   - Quantity updates
   - Total cost calculation
   - Purchase confirmation
   - Sort by price functionality

3. **Wishlist System**
   - Add/Remove items
   - Move items to cart
   - Prevent duplicate additions
   - Persistent storage

4. **Responsive Design**
   - Mobile-first approach
   - Breakpoint-specific layouts
   - Hamburger menu for mobile
   - Flexible grid system
   - Consistent styling across devices

5. **Enhanced User Experience**
   - Interactive product cards
   - Smooth transitions and animations
   - Toast notifications for user actions
   - Modal confirmations
   - Dynamic page titles
   - Loading and empty states

## Project Structure
```
src/
├── components/
│   ├── Banner/
│   ├── Dashboard/
│   ├── Details/
│   ├── Footer/
│   ├── Navbar/
│   ├── Product/
│   ├── Products/
│   └── Signup/
├── assets/
│   └── images/
├── ContextAPI/
└── ...
```

## Setup Instructions

1. Install dependencies
```bash
npm install
```

2. Run the development server
```bash
npm run dev
```

## Design Choices

- **Color Scheme**: Primary color #F3445A for consistent branding
- **UI Framework**: Tailwind CSS for responsive design
- **Component Library**: Custom components with consistent styling
- **State Management**: Context API for global state
- **Routing**: React Router v6 for navigation

## Future Enhancements

1. User Authentication
2. Payment Gateway Integration
3. Order History
4. Product Reviews
5. Search Functionality
6. Product Recommendations

