"use client";

import { useState } from "react";
import { 
  Calendar, 
  Clock, 
  Users, 
  MapPin, 
  Phone, 
  Mail,
  ChevronRight,
  CheckCircle,
  Edit,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  Receipt,
  Truck  // Added missing import
} from "lucide-react";

const bookedTables = [
  {
    id: 1,
    tableNumber: "Table 12",
    date: "2024-03-20",
    time: "19:30",
    guests: 4,
    status: "Confirmed",
    specialRequests: "Window seat preferred",
  },
  {
    id: 2,
    tableNumber: "Table 05",
    date: "2024-03-22",
    time: "20:00",
    guests: 2,
    status: "Pending",
    specialRequests: "Anniversary celebration",
  },
  {
    id: 3,
    tableNumber: "VIP Table 03",
    date: "2024-03-25",
    time: "18:00",
    guests: 6,
    status: "Confirmed",
    specialRequests: "Birthday party - bring cake",
  },
];

const recentOrders = [
  {
    id: 1001,
    orderNumber: "#ORD-78945",
    date: "2024-03-15",
    time: "19:45",
    items: [
      { name: "Mediterranean Mezze Platter", quantity: 1, price: 24.99 },
      { name: "Grilled Lamb Chops", quantity: 2, price: 36.99 },
      { name: "Baklava", quantity: 1, price: 12.99 },
    ],
    total: 111.96,
    status: "Delivered",
    deliveryType: "Home Delivery",
  },
  {
    id: 1002,
    orderNumber: "#ORD-78946",
    date: "2024-03-18",
    time: "20:30",
    items: [
      { name: "Greek Salad", quantity: 1, price: 16.99 },
      { name: "Seafood Paella", quantity: 1, price: 32.99 },
      { name: "Rose Water Lemonade", quantity: 2, price: 6.99 },
    ],
    total: 63.96,
    status: "In Progress",
    deliveryType: "Pickup",
  },
  {
    id: 1003,
    orderNumber: "#ORD-78947",
    date: "2024-03-19",
    time: "21:00",
    items: [
      { name: "Lemon Herb Roasted Chicken", quantity: 1, price: 28.99 },
      { name: "Moussaka", quantity: 1, price: 26.99 },
    ],
    total: 55.98,
    status: "Preparing",
    deliveryType: "Home Delivery",
  },
];

const userDetails = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  membership: "Gold Member",
  joinedDate: "January 2023",
  totalOrders: 15,
  totalSpent: "$1,245.67",
};

export default function OrderOnlinePage() {
  const [activeTab, setActiveTab] = useState("bookings");
  const [editingTable, setEditingTable] = useState(null);
  const [currentOrderDetails, setCurrentOrderDetails] = useState(null);

  const handleEditBooking = (booking) => {
    setEditingTable(booking);
  };

  const handleCancelBooking = (bookingId) => {
    // In a real app, this would make an API call
    alert(`Cancel booking ${bookingId}`);
  };

  const handleViewOrderDetails = (order) => {
    setCurrentOrderDetails(order);
  };

  const getStatusColor = (status) => {
    switch(status) {
      case "Confirmed": return "bg-green-100 text-green-800";
      case "Pending": return "bg-yellow-100 text-yellow-800";
      case "Preparing": return "bg-blue-100 text-blue-800";
      case "In Progress": return "bg-orange-100 text-orange-800";
      case "Delivered": return "bg-emerald-100 text-emerald-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50/30">
      {/* Header */}
      <div className="bg-white/95 backdrop-blur-xl shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <h1 className="text-4xl font-black bg-gradient-to-r from-gray-900 via-[#495e57] to-slate-800 bg-clip-text text-transparent">
                My Orders & Bookings
              </h1>
              <p className="text-gray-600 text-lg">
                Manage your restaurant bookings and track your orders
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 bg-gradient-to-r from-[#f4ce14]/10 to-[#ffed4a]/10 p-4 rounded-3xl border border-[#f4ce14]/30">
                <div className="w-12 h-12 bg-gradient-to-br from-[#f4ce14] to-[#ffed4a] rounded-2xl flex items-center justify-center shadow-lg">
                  <ShoppingBag className="w-6 h-6 text-[#495e57]" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Orders</p>
                  <p className="text-2xl font-bold text-[#495e57]">{userDetails.totalOrders}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-3xl border border-emerald-200">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Receipt className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Spent</p>
                  <p className="text-2xl font-bold text-emerald-700">{userDetails.totalSpent}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* User Profile Card */}
        <div className="bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-xl rounded-4xl shadow-2xl p-8 mb-12 border border-white/50">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#495e57] to-[#2d3731] rounded-3xl flex items-center justify-center shadow-2xl">
                <span className="text-3xl font-bold text-white">JD</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">{userDetails.name}</h2>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span>{userDetails.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>{userDetails.phone}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-[#f4ce14]/20 to-[#ffed4a]/20 rounded-3xl p-6 border border-[#f4ce14]/30">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-[#f4ce14]" />
                  <span className="font-bold text-[#495e57]">{userDetails.membership}</span>
                </div>
                <p className="text-sm text-gray-600">Member since {userDetails.joinedDate}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-12">
          <button
            onClick={() => setActiveTab("bookings")}
            className={`px-8 py-4 rounded-3xl font-bold text-lg transition-all duration-300 flex items-center gap-3 ${
              activeTab === "bookings" 
                ? "bg-gradient-to-r from-[#495e57] to-[#2d3731] text-white shadow-2xl scale-105" 
                : "bg-white/80 backdrop-blur-xl text-gray-800 hover:scale-105 hover:shadow-xl"
            }`}
          >
            <Calendar className="w-5 h-5" />
            Table Bookings ({bookedTables.length})
          </button>
          
          <button
            onClick={() => setActiveTab("orders")}
            className={`px-8 py-4 rounded-3xl font-bold text-lg transition-all duration-300 flex items-center gap-3 ${
              activeTab === "orders" 
                ? "bg-gradient-to-r from-[#495e57] to-[#2d3731] text-white shadow-2xl scale-105" 
                : "bg-white/80 backdrop-blur-xl text-gray-800 hover:scale-105 hover:shadow-xl"
            }`}
          >
            <Receipt className="w-5 h-5" />
            Recent Orders ({recentOrders.length})
          </button>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Table Bookings Section */}
          {activeTab === "bookings" && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-900">Your Table Reservations</h2>
                <button className="bg-gradient-to-r from-[#f4ce14] to-[#ffed4a] text-[#495e57] font-bold px-6 py-3 rounded-3xl flex items-center gap-3 hover:shadow-xl transition-shadow">
                  <Plus className="w-5 h-5" />
                  Book New Table
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {bookedTables.map((booking) => (
                  <div key={booking.id} className="bg-white/90 backdrop-blur-xl rounded-4xl shadow-2xl p-8 border border-white/50 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{booking.tableNumber}</h3>
                        <span className={`px-4 py-1.5 rounded-2xl text-sm font-bold ${getStatusColor(booking.status)}`}>
                          {booking.status}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEditBooking(booking)}
                          className="p-3 hover:bg-blue-50/80 hover:text-blue-600 rounded-2xl transition-all duration-300"
                        >
                          <Edit className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleCancelBooking(booking.id)}
                          className="p-3 hover:bg-red-50/80 hover:text-red-600 rounded-2xl transition-all duration-300"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-4">
                        <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 p-4 rounded-3xl">
                          <Calendar className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Date</p>
                          <p className="font-bold text-gray-900">{new Date(booking.date).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="bg-gradient-to-r from-purple-50 to-purple-100/50 p-4 rounded-3xl">
                          <Clock className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Time</p>
                          <p className="font-bold text-gray-900">{booking.time}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="bg-gradient-to-r from-green-50 to-green-100/50 p-4 rounded-3xl">
                          <Users className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Guests</p>
                          <p className="font-bold text-gray-900">{booking.guests} people</p>
                        </div>
                      </div>
                    </div>
                    
                    {booking.specialRequests && (
                      <div className="bg-gradient-to-r from-amber-50 to-orange-50/50 p-6 rounded-3xl border border-amber-200">
                        <p className="text-sm text-gray-600 mb-2">Special Requests</p>
                        <p className="font-medium text-gray-900">{booking.specialRequests}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recent Orders Section */}
          {activeTab === "orders" && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-900">Your Recent Orders</h2>
                <button className="bg-gradient-to-r from-[#f4ce14] to-[#ffed4a] text-[#495e57] font-bold px-6 py-3 rounded-3xl flex items-center gap-3 hover:shadow-xl transition-shadow">
                  <ShoppingBag className="w-5 h-5" />
                  Order Again
                </button>
              </div>
              
              <div className="space-y-6">
                {recentOrders.map((order) => (
                  <div key={order.id} className="bg-white/90 backdrop-blur-xl rounded-4xl shadow-2xl p-8 border border-white/50 hover:shadow-3xl transition-all duration-500">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <h3 className="text-2xl font-bold text-gray-900">{order.orderNumber}</h3>
                          <span className={`px-4 py-1.5 rounded-2xl text-sm font-bold ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="w-4 h-4" />
                            <span>{order.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Clock className="w-4 h-4" />
                            <span>{order.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Truck className="w-4 h-4" />
                            <span>{order.deliveryType}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-3xl border border-emerald-200">
                        <p className="text-sm text-gray-600 mb-2">Total Amount</p>
                        <p className="text-3xl font-bold text-emerald-700">${order.total.toFixed(2)}</p>
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Order Items:</h4>
                      <div className="space-y-4">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex items-center justify-between p-4 bg-gray-50/80 rounded-3xl">
                            <div>
                              <p className="font-medium text-gray-900">{item.name}</p>
                              <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                              <p className="text-sm text-gray-600">${item.price.toFixed(2)} each</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-4 pt-6 border-t border-gray-200/50">
                      <button
                        onClick={() => handleViewOrderDetails(order)}
                        className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3.5 rounded-3xl hover:shadow-xl transition-shadow flex items-center justify-center gap-3"
                      >
                        <Receipt className="w-5 h-5" />
                        View Details
                      </button>
                      <button className="flex-1 bg-gradient-to-r from-[#495e57] to-[#2d3731] text-white font-bold py-3.5 rounded-3xl hover:shadow-xl transition-shadow flex items-center justify-center gap-3">
                        <ShoppingBag className="w-5 h-5" />
                        Reorder
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Stats Section */}
        <div className="mt-20 pt-12 border-t border-gray-200/50">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-white/80 backdrop-blur-xl rounded-4xl p-8 shadow-xl border border-white/50">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">{bookedTables.length}</h4>
              <p className="text-gray-600">Active Bookings</p>
            </div>
            
            <div className="text-center bg-white/80 backdrop-blur-xl rounded-4xl p-8 shadow-xl border border-white/50">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">{recentOrders.filter(o => o.status === 'Delivered').length}</h4>
              <p className="text-gray-600">Completed Orders</p>
            </div>
            
            <div className="text-center bg-white/80 backdrop-blur-xl rounded-4xl p-8 shadow-xl border border-white/50">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">{recentOrders.filter(o => o.status === 'In Progress' || o.status === 'Preparing').length}</h4>
              <p className="text-gray-600">Active Orders</p>
            </div>
            
            <div className="text-center bg-white/80 backdrop-blur-xl rounded-4xl p-8 shadow-xl border border-white/50">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">{bookedTables.reduce((sum, b) => sum + b.guests, 0)}</h4>
              <p className="text-gray-600">Total Guests Booked</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}