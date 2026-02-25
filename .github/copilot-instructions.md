# LifeHub Shopping App - Product Requirements Document (PRD)

## Product Overview
- **Purpose**: Client-side shopping web app for browsing and purchasing lifestyle products
- **Scope**: Prototype with core e-commerce functionality and enhanced UX features
- **Success Criteria**: Functional shopping experience with cart management, checkout, and modern notification system

## Target Audience
- **Primary Users**: Online shoppers looking for electronics and home goods
- **User Personas**: 
  - Tech enthusiasts seeking gadgets and accessories
  - Home decorators looking for lifestyle products
- **Use Cases**: 
  - Browse product catalog with search/filter
  - View detailed product information
  - Add/remove items from shopping cart with visual feedback
  - Complete checkout process with confirmation
  - Navigate between pages seamlessly with persistent state

## Functional Requirements
- **Core Features**: 
  - Product browsing with search and sort functionality
  - Product detail viewing with images and descriptions
  - Cart management (add/remove/update quantities) with visual indicators
  - Checkout process with form validation and order confirmation
  - Persistent cart storage using localStorage
  - In-app notification system replacing browser alerts
  - Visual cart badge showing item count
- **User Flows**: Home → Products → Product Details → Cart → Checkout → Order Confirmation
- **Data Requirements**: Product catalog, cart items, order history with XSS protection

## Technical Requirements
- **Technology Stack**: HTML, CSS, JavaScript (client-side only)
- **Browser Support**: Modern browsers with ES6+ support
- **Data Storage**: localStorage for cart persistence, user preferences, and order history
- **Performance**: Responsive design with smooth animations and optimized notifications
- **Security**: XSS protection for user inputs, HTML sanitization

## Page Specifications
- **Home Page**: Hero section with features showcase and call-to-action
- **Products Page**: Grid layout with search/filter, product cards with images/prices
- **Product Details**: Large image, description, price, add to cart functionality
- **Shopping Cart**: Item list with quantities, totals, checkout button, visual cart badge
- **Checkout**: Form fields with validation, enhanced order confirmation with success message

## Enhanced UX Features
- **Notification System**: 
  - Toast notifications instead of browser alerts
  - Success, error, and info message types
  - Auto-dismiss after 4 seconds with manual close option
  - Slide-in animations from right side
- **Cart Badge**: 
  - Circular badge on cart icon showing item count
  - Hidden when cart is empty, shows count up to 99+
  - Positioned on sidebar navigation cart link
- **Order Confirmation**: 
  - Detailed success message with order number and total
  - Continue shopping button for better user flow
  - Professional styling with icons and animations

## Sample Data Structure
- **Product Schema**: `{id, name, price, description, image}`
- **Cart Schema**: `{productId, quantity}`
- **Order Schema**: `{id, items, total, date}`
- **Sample Dataset**: 4 products (Camera, Headphones, Coffee Mug, Desk Plant)

## UI/UX Guidelines
- **Design Style**: Modern glassmorphism with gradients and animations
- **Color Scheme**: Teal accent (#2b7a78), purple-blue gradients, success green (#28a745), error red (#dc3545)
- **Typography**: Segoe UI font family
- **Component Library**: FontAwesome icons, custom CSS animations
- **Notifications**: Glassmorphism cards with colored left borders and appropriate icons

## Navigation Structure
- **Sidebar Navigation**: Collapsible left sidebar with glassmorphism effect
- **Pages**: Home, Products, Cart, Checkout
- **State Persistence**: Sidebar collapse state saved in localStorage
- **Responsive**: Auto-collapse on mobile (<300px)
- **Cart Badge**: Visual indicator on cart navigation item

## Security Considerations
- **XSS Prevention**: HTML sanitization for all user inputs
- **Input Validation**: Form validation with proper error messaging
- **Safe DOM Manipulation**: Escaped HTML content in dynamic elements

---

# Wireframe Diagrams

## Sidebar Navigation

### Desktop Sidebar (Expanded)
```
┌─────────────────────┐
│ ❤ LifeHub          │ ← Gradient header
├─────────────────────┤
│ 🏠 Home            │
│ 📦 Products        │
│ 🛒 Cart (2) [🔴2]  │ ← Cart badge
│ 💳 Checkout        │
└─────────────────────┘
```

### Mobile Sidebar (Collapsed <300px)
```
┌─────┐
│ ❤   │
├─────┤
│ 🏠  │
│ 📦  │
│ 🛒🔴│ ← Badge visible
│ 💳  │
└─────┘
```

## Notification System
```
┌─────────────────────────────────────┐
│ ✅ Order #123456 placed successfully! ❌ │ ← Toast notification
└─────────────────────────────────────┘
```

## Page Layouts

### 1. Home/Landing Page
```
┌─────┐─────────────────────────────────────────────────────────┐
│     │    Welcome to LifeHub              [Floating Heart]    │
│ S   │    Discover amazing products...                        │
│ I   │                                                        │
│ D   │    [📊 4+ Products] [🚚 Fast] [🛡️ Secure]             │
│ E   │                                                        │
│ B   │    [🛍️ Shop Now]  [ℹ️ Learn More]                     │
│ A   │                                                        │
│ R   ├─────────────────────────────────────────────────────────┤
│🔴2  │                Why Choose LifeHub?                     │
│     │                                                        │
│     │  [📷 Electronics]  [🏠 Home & Living]  [🌱 Eco-Friendly] │
│     │   Latest gadgets    Beautiful items     Sustainable    │
└─────┴─────────────────────────────────────────────────────────┘
```

### 5. Checkout Page with Order Confirmation
```
┌─────┐─────────────────────────────────────────────────────────┐
│     │ Checkout                                               │
│ S   │                                                        │
│ I   │ ┌─────────────────────────────────────────────────────┐ │
│ D   │ │ Name     [_________________________]                │ │
│ E   │ │ Email    [_________________________]                │ │
│ B   │ │ Address  [_________________________]                │ │
│ A   │ │ Card #   [_________________________]                │ │
│ R   │ │                  [Place Order]                      │ │
│     │ └─────────────────────────────────────────────────────┘ │
│     │                                                        │
│     │ ┌─────────────────────────────────────────────────────┐ │
│     │ │              ✅ Order Success!                      │ │
│     │ │         Thank you John Doe!                        │ │
│     │ │       Order #123456 confirmed                      │ │
│     │ │          Total: ₹2,599.97                          │ │
│     │ │        [🛍️ Continue Shopping]                       │ │
│     │ └─────────────────────────────────────────────────────┘ │
└─────┴─────────────────────────────────────────────────────────┘
```

## Navigation Flow
```
Home → Products → Product Details → Cart → Checkout → Order Confirmation
  ↑        ↑           ↓            ↑        ↓            ↓
  └────────┴───────────┴────────────┴────────┴────────────┘
                                                    ↓
                                            [Continue Shopping]
```

## Implementation Notes
- **Currency**: Indian Rupees (₹)
- **Icons**: FontAwesome 6.4.0
- **Animations**: CSS transitions and keyframes for notifications and badges
- **Storage**: localStorage for cart, preferences, and order history
- **Responsive**: Mobile-first design with breakpoints
- **State Management**: Vanilla JavaScript with DOM manipulation
- **Notifications**: Glassmorphism design with auto-dismiss and manual close
- **Security**: HTML escaping for XSS prevention
- **Error Handling**: Comprehensive try-catch blocks and null checks