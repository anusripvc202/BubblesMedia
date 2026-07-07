'use client';
import { useState, useEffect, createContext, useContext } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('bm_cart');
      if (stored) setCartItems(JSON.parse(stored));
    } catch {}
  }, []);

  // Persist cart to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem('bm_cart', JSON.stringify(cartItems));
    } catch {}
  }, [cartItems]);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (service) => {
    setCartItems(prev => {
      if (prev.find(i => i.id === service.id)) return prev; // already in cart
      return [...prev, service];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
  };

  const isInCart = (id) => cartItems.some(i => i.id === id);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, isInCart, cartCount: cartItems.length, isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within a CartProvider');
  return ctx;
}
