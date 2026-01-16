"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Flame, 
  Leaf, 
  ChefHat,
  Plus,
  Minus,
  ShoppingCart,
  X,
  CheckCircle,
  MapPin,
  Edit,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const categories = [
  "All",
  "Appetizers",
  "Main Courses",
  "Desserts",
  "Drinks",
  "Chef Specials"
];

const menuItems = [
  {
    id: 1,
    name: "Mediterranean Mezze Platter",
    description: "Assortment of hummus, baba ghanoush, falafel, dolma, and warm pita bread",
    price: 24.99,
    category: "Appetizers",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    prepTime: 15,
    spicy: false,
    vegetarian: true,
    featured: true
  },
  {
    id: 2,
    name: "Grilled Lamb Chops",
    description: "Australian lamb chops marinated in rosemary and garlic, served with roasted vegetables",
    price: 36.99,
    category: "Main Courses",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    prepTime: 25,
    spicy: false,
    vegetarian: false,
    featured: true
  },
  {
    id: 3,
    name: "Seafood Paella",
    description: "Traditional Spanish paella with shrimp, mussels, calamari, and saffron rice",
    price: 32.99,
    category: "Main Courses",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    prepTime: 35,
    spicy: true,
    vegetarian: false,
    featured: false
  },
  {
    id: 4,
    name: "Baklava",
    description: "Layered filo pastry with walnuts and honey syrup, served with vanilla ice cream",
    price: 12.99,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1563762213481-6c5ab2c53d54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    prepTime: 10,
    spicy: false,
    vegetarian: true,
    featured: true
  },
  {
    id: 5,
    name: "Greek Salad",
    description: "Fresh tomatoes, cucumbers, red onion, feta cheese, and kalamata olives",
    price: 16.99,
    category: "Appetizers",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    prepTime: 10,
    spicy: false,
    vegetarian: true,
    featured: false
  },
  {
    id: 6,
    name: "Lemon Herb Roasted Chicken",
    description: "Whole roasted chicken with lemon, oregano, and Mediterranean herbs",
    price: 28.99,
    category: "Main Courses",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    prepTime: 30,
    spicy: false,
    vegetarian: false,
    featured: false
  },
  {
    id: 7,
    name: "Moussaka",
    description: "Layers of eggplant, potatoes, and spiced minced meat topped with béchamel sauce",
    price: 26.99,
    category: "Main Courses",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    prepTime: 40,
    spicy: true,
    vegetarian: false,
    featured: true
  },
  {
    id: 8,
    name: "Rose Water Lemonade",
    description: "Freshly squeezed lemonade infused with rose water and mint",
    price: 6.99,
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    prepTime: 5,
    spicy: false,
    vegetarian: true,
    featured: false
  },
  {
    id: 9,
    name: "Beef Shawarma",
    description: "Marinated beef strips with tahini sauce, fresh veggies in pita bread",
    price: 18.99,
    category: "Main Courses",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    prepTime: 20,
    spicy: true,
    vegetarian: false,
    featured: true
  },
  {
    id: 10,
    name: "Spanakopita",
    description: "Greek spinach pie with feta cheese wrapped in crispy phyllo pastry",
    price: 14.99,
    category: "Appetizers",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    prepTime: 15,
    spicy: false,
    vegetarian: true,
    featured: false
  },
  {
    id: 11,
    name: "Turkish Coffee Panna Cotta",
    description: "Creamy panna cotta infused with Turkish coffee, served with caramel sauce",
    price: 10.99,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    prepTime: 12,
    spicy: false,
    vegetarian: true,
    featured: true
  },
  {
    id: 12,
    name: "Lamb Gyros",
    description: "Slow-roasted lamb with tzatziki, tomatoes, onions in warm flatbread",
    price: 22.99,
    category: "Main Courses",
    image: "https://images.unsplash.com/photo-1599161146681-816f8c6e2e8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    prepTime: 18,
    spicy: false,
    vegetarian: false,
    featured: false
  },
  {
    id: 13,
    name: "Fig & Honey Bruschetta",
    description: "Toasted bread with fresh figs, honey, goat cheese and walnuts",
    price: 13.99,
    category: "Appetizers",
    image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    prepTime: 10,
    spicy: false,
    vegetarian: true,
    featured: false
  },
  {
    id: 14,
    name: "Moroccan Tagine",
    description: "Slow-cooked chicken with apricots, almonds and aromatic spices",
    price: 29.99,
    category: "Main Courses",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    prepTime: 45,
    spicy: true,
    vegetarian: false,
    featured: true
  },
  {
    id: 15,
    name: "Turkish Delight Ice Cream",
    description: "Rose and pistachio flavored ice cream with pieces of Turkish delight",
    price: 9.99,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    prepTime: 8,
    spicy: false,
    vegetarian: true,
    featured: false
  },
  {
    id: 16,
    name: "Sangria",
    description: "Traditional Spanish sangria with red wine, fresh fruits and spices",
    price: 24.99,
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    prepTime: 15,
    spicy: false,
    vegetarian: true,
    featured: true
  },
  {
    id: 17,
    name: "Chef's Special Mixed Grill",
    description: "Assortment of lamb kofta, chicken shish, and beef skewers with rice",
    price: 34.99,
    category: "Chef Specials",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    prepTime: 30,
    spicy: true,
    vegetarian: false,
    featured: true
  },
  {
    id: 18,
    name: "Feta & Watermelon Salad",
    description: "Refreshing salad with watermelon, feta, mint and balsamic glaze",
    price: 15.99,
    category: "Appetizers",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    prepTime: 10,
    spicy: false,
    vegetarian: true,
    featured: false
  },
  {
    id: 19,
    name: "Octopus Carpaccio",
    description: "Thinly sliced octopus with lemon, olive oil and microgreens",
    price: 28.99,
    category: "Appetizers",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    prepTime: 15,
    spicy: false,
    vegetarian: false,
    featured: true
  },
  {
    id: 20,
    name: "Stuffed Grape Leaves",
    description: "Dolmas filled with rice, pine nuts, herbs and lemon zest",
    price: 17.99,
    category: "Appetizers",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    prepTime: 25,
    spicy: false,
    vegetarian: true,
    featured: false
  },
  {
    id: 21,
    name: "Halloumi Fries",
    description: "Crispy fried halloumi cheese with pomegranate molasses dip",
    price: 16.99,
    category: "Appetizers",
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    prepTime: 12,
    spicy: false,
    vegetarian: true,
    featured: true
  },
  {
    id: 22,
    name: "Grilled Sea Bass",
    description: "Whole grilled sea bass with lemon-herb butter and roasted potatoes",
    price: 38.99,
    category: "Main Courses",
    image: "https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    prepTime: 35,
    spicy: false,
    vegetarian: false,
    featured: true
  },
  {
    id: 23,
    name: "Vegetable Tagine",
    description: "Hearty vegetable stew with chickpeas, preserved lemons and couscous",
    price: 24.99,
    category: "Main Courses",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    prepTime: 40,
    spicy: true,
    vegetarian: true,
    featured: false
  },
  {
    id: 24,
    name: "Kunefe",
    description: "Shredded pastry with cheese, soaked in sweet syrup, topped with pistachios",
    price: 14.99,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    prepTime: 20,
    spicy: false,
    vegetarian: true,
    featured: true
  }
];

const dummyAddresses = [
  {
    id: 1,
    name: "Home",
    street: "123 Seaside Avenue, MVP Colony",
    city: "Visakhapatnam, Andhra Pradesh",
    pincode: "530017",
    phone: "+91 98765 43210"
  },
  {
    id: 2,
    name: "Work",
    street: "456 Marina Drive, Siripuram Junction",
    city: "Visakhapatnam, Andhra Pradesh", 
    pincode: "530003",
    phone: "+91 87654 32109"
  }
];

// Toast Component - SIMPLIFIED (No complex animations causing errors)
const Toast = ({ message, type = "success", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed top-24 right-6 z-[10005] p-6 rounded-3xl shadow-2xl backdrop-blur-xl border max-w-sm transform translate-x-0 opacity-100 transition-all duration-300
                    ${type === 'success' 
                      ? 'bg-emerald-500/95 border-emerald-400/50 text-white' 
                      : 'bg-amber-500/95 border-amber-400/50 text-white'
                    }`}>
      <div className="flex items-center gap-3">
        <CheckCircle className="w-6 h-6 flex-shrink-0" />
        <span className="font-semibold text-lg">{message}</span>
      </div>
    </div>
  );
};

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState({});
  const [showCart, setShowCart] = useState(false);
  const [showToast, setShowToast] = useState({ visible: false, message: "", type: "success" });
  const [selectedAddress, setSelectedAddress] = useState(dummyAddresses[0]);
  const [showOrderConfirm, setShowOrderConfirm] = useState(false);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  const addToCart = (itemId) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
    const itemName = menuItems.find(i => i.id === itemId)?.name || "Item";
    setShowToast({ visible: true, message: `${itemName} added to cart!`, type: "success" });
  };

  const removeFromCart = (itemId) => {
    setCart(prev => {
      const newCount = (prev[itemId] || 0) - 1;
      if (newCount <= 0) {
        const { [itemId]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [itemId]: newCount };
    });
  };

  const cartItemsCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  const cartTotal = Object.entries(cart).reduce((total, [itemId, quantity]) => {
    const item = menuItems.find(i => i.id === parseInt(itemId));
    return total + (item?.price || 0) * quantity;
  }, 0);

  const handleCheckout = () => {
    setShowCart(false);
    setShowOrderConfirm(true);
  };

  const confirmOrder = () => {
    setShowToast({ 
      visible: true, 
      message: "✅ Order placed successfully! Your meal is on its way!", 
      type: "success" 
    });
    setTimeout(() => {
      setCart({});
      setShowOrderConfirm(false);
      setShowToast({ visible: false });
    }, 3000);
  };

  // Pagination handlers
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50/30 pt-28">
      
      {/* Toast Notification */}
      {showToast.visible && (
        <Toast 
          message={showToast.message}
          type={showToast.type}
          onClose={() => setShowToast({ ...showToast, visible: false })}
        />
      )}

      {/* Header */}
      <header className="bg-white/95 backdrop-blur-xl shadow-lg sticky top-28 z-40 border-b border-white/60">
        <div className="max-w-7xl mx-auto px-4 lg:px-18 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4">
              <div>
                <h1 className="text-2xl lg:text-5xl font-black bg-gradient-to-r from-gray-900 via-[#495e57] to-slate-800 bg-clip-text text-transparent drop-shadow-2xl leading-tight">
                  Our Menu
                </h1>
                <div className="w-32 h-1.5 bg-gradient-to-r from-[#f4ce14] to-[#ffed4a] rounded-full shadow-lg mt-4" />
              </div>
            </div>
            
            <div className="flex items-center gap-6 flex-wrap">
              <div className="relative group w-full lg:w-96">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6 group-focus-within:text-[#f4ce14] transition-all duration-300" />
                <input
                  type="text"
                  placeholder="Search our exquisite dishes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-16 pr-6 py-4 bg-white/70 backdrop-blur-2xl border-2 border-gray-200 rounded-3xl shadow-2xl 
                           focus:outline-none focus:ring-4 focus:ring-[#f4ce14]/40 focus:border-[#f4ce14]/60 
                           transition-all duration-500 hover:shadow-3xl hover:bg-white/90 text-lg placeholder-gray-500"
                />
              </div>
              
              <button
                onClick={() => setShowCart(!showCart)}
                className="group relative p-5 bg-gradient-to-br from-[#495e57]/95 to-[#2d3731]/95 text-white 
                           backdrop-blur-2xl border border-white/30 rounded-3xl shadow-2xl hover:shadow-3xl 
                           hover:scale-110 hover:from-[#495e57] hover:to-[#3a4a42] transition-all duration-400 z-10"
              >
                <ShoppingCart className="w-4 h-4 group-hover:rotate-12 transition-transform duration-500" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-[#f4ce14] to-[#ffed4a] 
                                 shadow-xl text-[#495e57] text-sm font-black rounded-2xl w-9 h-9 flex items-center 
                                 justify-center animate-bounce border-2 border-white/50">
                    {cartItemsCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* WIDER Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 z-[10001] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent backdrop-blur-2xl" 
               onClick={() => setShowCart(false)} />
          <div className="absolute inset-y-0 right-0 w-full max-w-3xl bg-white/95 backdrop-blur-3xl shadow-2xl border-l-4 border-[#f4ce14]/30">
            <div className="h-full flex flex-col overflow-hidden">
              <div className="p-8 border-b border-white/50 bg-gradient-to-b from-white/100 to-white/80 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div className="space-y-3">
                    <h3 className="text-4xl font-black bg-gradient-to-r from-gray-900 to-[#495e57] bg-clip-text text-transparent">
                      Your Order
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#f4ce14] to-[#ffed4a] rounded-full shadow-md" />
                  </div>
                  <button
                    onClick={() => setShowCart(false)}
                    className="p-3 hover:bg-gray-200/60 backdrop-blur-sm rounded-3xl transition-all duration-300 hover:scale-110 hover:rotate-180"
                  >
                    <X className="w-8 h-8 text-gray-600 hover:text-gray-900 transition-colors" />
                  </button>
                </div>
              </div>
              
              <div className="flex-1 overflow-y-auto p-8 pb-24">
                {Object.entries(cart).length === 0 ? (
                  <div className="text-center py-24 space-y-8">
                    <div className="w-32 h-32 bg-gradient-to-br from-gray-100/70 to-gray-200/70 rounded-4xl backdrop-blur-2xl 
                                    flex items-center justify-center mx-auto shadow-2xl border border-white/50">
                      <ShoppingCart className="w-16 h-16 text-gray-400" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-3xl font-black text-gray-800">Your cart is empty</h3>
                      <p className="text-xl text-gray-600 max-w-md mx-auto leading-relaxed">
                        Discover our delicious Mediterranean dishes and start building your perfect meal!
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {Object.entries(cart).map(([itemId, quantity]) => {
                      const item = menuItems.find(i => i.id === parseInt(itemId));
                      if (!item) return null;
                      
                      return (
                        <div key={itemId} className="group bg-white/80 backdrop-blur-xl rounded-4xl p-8 border border-white/60 
                                                      shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500">
                          <div className="flex items-start justify-between gap-6">
                            <div className="flex-1 min-w-0">
                              <h4 className="text-2xl font-bold text-gray-900 group-hover:text-[#495e57] transition-colors line-clamp-2">
                                {item.name}
                              </h4>
                              <p className="text-[#f4ce14] text-3xl font-black mt-2 drop-shadow-lg">${(item.price * quantity).toFixed(2)}</p>
                              <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                            </div>
                            
                            <div className="flex items-center gap-4 bg-white/90 backdrop-blur-xl px-6 py-4 rounded-3xl 
                                            border border-white/50 shadow-xl shrink-0">
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="p-3 hover:bg-red-50/80 hover:text-red-600 rounded-2xl transition-all duration-300 hover:scale-110"
                              >
                                <Minus className="w-6 h-6" />
                              </button>
                              <span className="text-2xl font-black text-gray-900 w-12 text-center tracking-wider">{quantity}</span>
                              <button
                                onClick={() => addToCart(item.id)}
                                className="p-3 hover:bg-emerald-50/80 hover:text-emerald-600 rounded-2xl transition-all duration-300 hover:scale-110"
                              >
                                <Plus className="w-6 h-6" />
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
              
              <div className="p-8 border-t-4 border-[#f4ce14]/30 bg-gradient-to-t from-white/95 via-white/90 backdrop-blur-2xl shadow-2xl">
                <div className="space-y-6">
                  <div className="flex justify-between items-center text-3xl lg:text-4xl">
                    <span className="text-gray-800 font-black tracking-wide">Total</span>
                    <span className="font-black text-[#495e57] drop-shadow-lg">${cartTotal.toFixed(2)}</span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    disabled={cartTotal === 0}
                    className="block w-full bg-gradient-to-r from-[#f4ce14] via-[#ffed4a] to-[#f4ce14] text-[#495e57] 
                              font-black text-2xl py-8 px-12 rounded-4xl shadow-3xl hover:shadow-4xl hover:scale-[1.02] 
                              transition-all duration-500 uppercase tracking-widest border-4 border-white/50 
                              flex items-center justify-center gap-4 backdrop-blur-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Proceed to Checkout
                    <ShoppingCart className="w-8 h-8" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Order Confirmation Modal */}
      {showOrderConfirm && (
        <div className="fixed inset-0 z-[10003] flex items-center justify-center p-8 bg-black/60 backdrop-blur-sm">
          <div className="bg-white/95 backdrop-blur-3xl rounded-4xl p-12 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-4xl border-4 border-[#f4ce14]/30">
            <div className="text-center mb-12">
              <div className="w-32 h-32 bg-gradient-to-br from-emerald-500/30 to-emerald-400/20 rounded-4xl mx-auto mb-8 flex items-center justify-center border-4 border-emerald-400/50 shadow-2xl">
                <ShoppingCart className="w-16 h-16 text-emerald-600" />
              </div>
              <h2 className="text-4xl font-black bg-gradient-to-r from-gray-900 to-[#495e57] bg-clip-text text-transparent mb-4">
                Confirm Your Order
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#f4ce14] to-[#ffed4a] mx-auto rounded-full shadow-md" />
            </div>

            <div className="space-y-6 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <MapPin className="w-8 h-8 text-[#495e57]" />
                Delivery Address
              </h3>
              
              <div className="space-y-4">
                {dummyAddresses.map((address) => (
                  <button
                    key={address.id}
                    onClick={() => setSelectedAddress(address)}
                    className={`p-6 rounded-3xl border-4 transition-all duration-500 w-full text-left backdrop-blur-xl shadow-xl hover:shadow-2xl ${
                      selectedAddress.id === address.id
                        ? 'border-[#f4ce14]/60 bg-gradient-to-r from-[#f4ce14]/10 to-[#ffed4a]/10 scale-105 ring-4 ring-[#f4ce14]/20'
                        : 'border-gray-200/50 hover:border-[#f4ce14]/40 hover:shadow-2xl hover:-translate-y-1 bg-white/80'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-black text-xl text-[#495e57]">{address.name}</span>
                          {selectedAddress.id === address.id && <CheckCircle className="w-6 h-6 text-emerald-500" />}
                        </div>
                        <p className="text-lg font-semibold text-gray-900">{address.street}</p>
                        <p className="text-gray-700">{address.city} - {address.pincode}</p>
                        <p className="text-sm text-gray-600 mt-1">{address.phone}</p>
                      </div>
                      <Edit className={`w-6 h-6 transition-all duration-300 flex-shrink-0 ${
                        selectedAddress.id === address.id ? 'text-[#f4ce14] rotate-12 scale-110' : 'text-gray-400 group-hover:text-[#f4ce14]'
                      }`} />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6 mb-12">
              <h3 className="text-2xl font-bold text-gray-900">Order Summary</h3>
              <div className="bg-gradient-to-r from-gray-50/70 to-gray-100/50 backdrop-blur-xl p-6 rounded-3xl border border-white/50">
                <div className="text-3xl font-black text-[#495e57] text-center">
                  Total: ${cartTotal.toFixed(2)}
                </div>
                <p className="text-center text-gray-600 mt-2 text-lg">
                  {cartItemsCount} items
                </p>
              </div>
            </div>

            <div className="flex gap-4 pt-8 border-t border-white/50">
              <button
                onClick={() => setShowOrderConfirm(false)}
                className="flex-1 bg-gradient-to-r from-gray-500/90 to-gray-600/90 text-white font-black py-4 px-8 rounded-3xl 
                          shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-300 backdrop-blur-xl border border-white/50"
              >
                Back to Cart
              </button>
              <button
                onClick={confirmOrder}
                className="flex-1 bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 text-white font-black 
                          text-xl py-4 px-8 rounded-3xl shadow-3xl hover:shadow-4xl hover:scale-[1.02] transition-all duration-500 
                          backdrop-blur-xl border-4 border-white/50 flex items-center justify-center gap-3"
              >
                <CheckCircle className="w-6 h-6" />
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 lg:px-18 py-12 lg:py-18">
        {/* Categories */}
        <section className="mb-18">
          <div className="flex items-center gap-5 mb-5 pb-4">
            <div className="p-2 bg-gradient-to-br from-[#495e57]/20 to-[#2d3731]/20 rounded-3xl shadow-xl border border-white/50 backdrop-blur-xl">
              <Filter className="w-8 h-8 text-[#495e57] drop-shadow-lg" />
            </div>
            <div>
              <h2 className="text-3xl font-black text-gray-900 leading-tight">Filter Categories</h2>
              <p className="text-lg text-gray-600 font-medium mt-2">Discover dishes by cuisine type</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`group relative px-3 py-2 rounded-4xl font-bold text-xl shadow-2xl transition-all duration-700 backdrop-blur-xl 
                          border-2 overflow-hidden transform hover:-translate-y-2 hover:shadow-4xl ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-[#495e57] to-[#2d3731] text-white border-[#495e57]/60 scale-105 ring-4 ring-[#f4ce14]/30"
                    : "bg-white/90 text-gray-800 hover:bg-white hover:border-[#f4ce14]/40 hover:text-[#495e57] border-white/60"
                }`}
              >
                <span className="relative z-10">{category}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#f4ce14]/30 to-[#ffed4a]/30 rounded-4xl blur opacity-0 
                              group-hover:opacity-100 transition-all duration-700" />
              </button>
            ))}
          </div>
        </section>

        {/* Menu Grid */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {currentItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {item.featured && (
                    <div className="absolute top-4 left-4 bg-[#f4ce14] text-[#495e57] px-3 py-1 rounded-full text-sm font-bold">
                      Featured
                    </div>
                  )}
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <span>{item.rating}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{item.name}</h3>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {item.prepTime} min
                        </span>
                        {item.spicy && (
                          <span className="flex items-center gap-1">
                            <Flame className="w-4 h-4 text-red-500" />
                            Spicy
                          </span>
                        )}
                        {item.vegetarian && (
                          <span className="flex items-center gap-1">
                            <Leaf className="w-4 h-4 text-green-500" />
                            Vegetarian
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-[#495e57]">
                      ${item.price.toFixed(2)}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{item.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="text-[12px] text-gray-500">
                      Category: <span className="font-medium text-red-700">{item.category}</span>
                    </div>
                    
                    <button
                      onClick={() => addToCart(item.id)}
                      className="flex items-center gap-2 bg-[#495e57] text-white px-2 py-2 rounded-lg hover:bg-[#3a4a42] transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                      Add to Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {filteredItems.length > 0 && (
            <div className="mt-16 flex flex-col items-center justify-center space-y-8">
              <div className="text-center mb-8">
                <p className="text-xl text-gray-700 font-semibold">
                  Showing {startIndex + 1}-{Math.min(endIndex, filteredItems.length)} of {filteredItems.length} delicious dishes
                </p>
              </div>
              
              <div className="flex items-center gap-8 bg-white/80 backdrop-blur-xl p-8 rounded-4xl shadow-lg border-2 border-white/50">
                <button
                  onClick={goToPrevPage}
                  disabled={currentPage === 1}
                  className={`p-3 rounded-3xl font-bold text-lg flex items-center gap-3 transition-all duration-300 
                            ${currentPage === 1 
                              ? 'bg-gray-100/50 text-gray-400 cursor-not-allowed' 
                              : 'bg-gradient-to-r from-[#495e57]/20 to-[#2d3731]/20 text-[#495e57] hover:scale-110 hover:shadow-xl'
                            }`}
                >
                  <ChevronLeft className="w-6 h-6" />
                  Previous
                </button>
                
                <div className="bg-gradient-to-r from-[#f4ce14]/20 to-[#ffed4a]/20 backdrop-blur-xl p-3 rounded-3xl border-2 border-[#f4ce14]/30 shadow-xl">
                  <span className="text-2xl font-black text-[#495e57]">
                    Page {currentPage}
                  </span>
                </div>
                
                <button
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                  className={`p-3 rounded-3xl font-bold text-lg flex items-center gap-3 transition-all duration-300 
                            ${currentPage === totalPages 
                              ? 'bg-gray-100/50 text-gray-400 cursor-not-allowed' 
                              : 'bg-gradient-to-r from-[#495e57]/20 to-[#2d3731]/20 text-[#495e57] hover:scale-110 hover:shadow-xl'
                            }`}
                >
                  Next
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          )}

          {filteredItems.length === 0 && (
            <div className="col-span-full text-center py-32 space-y-10">
              <div className="w-40 h-40 bg-gradient-to-br from-gray-100/80 to-gray-200/80 rounded-4xl backdrop-blur-2xl 
                             flex items-center justify-center mx-auto shadow-3xl border-4 border-white/60">
                <Search className="w-20 h-20 text-gray-400 drop-shadow-lg" />
              </div>
              <div className="space-y-6 max-w-2xl mx-auto">
                <h3 className="text-5xl font-black text-gray-800 leading-tight">No dishes found</h3>
                <p className="text-2xl text-gray-600 font-medium leading-relaxed">
                  Try adjusting your search terms or filter options to discover our delicious menu
                </p>
              </div>
            </div>
          )}
        </section>

        {/* Info Section */}
        <section>
          <div className="bg-gradient-to-r from-white/70 via-amber-50/50 to-white/70 backdrop-blur-xl rounded-4xl p-20 shadow-4xl border border-gray-200">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
                {[
                  { icon: ChefHat, title: "Master Chefs", desc: "Award-winning culinary artists crafting Mediterranean masterpieces", stats: "15+ Years Experience" },
                  { icon: Leaf, title: "Fresh Daily", desc: "Locally sourced organic ingredients delivered fresh every morning", stats: "100% Organic" },
                  { icon: Clock, title: "Lightning Fast", desc: "Premium dishes prepared in 20-40 minutes for pickup or delivery", stats: "<40 Min Service" }
                ].map(({ icon: Icon, title, desc, stats }, index) => (
                  <div key={title} className="group hover:scale-105 transition-all duration-700 hover:-translate-y-4">
                    <div className="w-32 h-32 bg-gradient-to-br from-[#f4ce14]/30 via-[#ffed4a]/20 to-[#f4ce14]/10 
                                   backdrop-blur-2xl rounded-4xl flex items-center justify-center mx-auto mb-10 
                                   shadow-3xl group-hover:shadow-4xl group-hover:rotate-3 border-4 border-white/60 
                                   transition-all duration-700">
                      <Icon className="w-14 h-14 text-[#f4ce14] drop-shadow-2xl group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="space-y-4">
                      <div className="text-5xl font-black text-transparent bg-clip-text 
                                    bg-gradient-to-r from-gray-900 to-[#495e57] drop-shadow-lg">
                        {title}
                      </div>
                      <p className="text-xl text-gray-700 font-semibold leading-relaxed px-4">{desc}</p>
                      <div className="text-2xl font-black text-[#f4ce14] tracking-wider">{stats}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}