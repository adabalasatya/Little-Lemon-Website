"use client";

import { useState } from "react";
import { Calendar, Clock, Users, Phone, Mail, MapPin, CheckCircle } from "lucide-react";

export default function ReservationsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "",
    specialRequests: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Reservation submitted:", formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "2",
        occasion: "",
        specialRequests: ""
      });
      setIsSubmitted(false);
      setIsLoading(false);
    }, 4000);
  };

  const availableTimes = [
    "17:00", "17:30", "18:00", "18:30", 
    "19:00", "19:30", "20:00", "20:30",
    "21:00", "21:30", "22:00"
  ];

  const occasions = ["Birthday", "Anniversary", "Business", "Date Night", "Family Gathering", "Other"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50/30 pt-28">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#495e57] via-[#2d3731] to-[#495e57]/90 pt-32 pb-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4K')] opacity-20" />
        <div className="max-w-7xl mx-auto px-6 lg:px-24 relative z-10">
          <div className="max-w-4xl text-center text-white space-y-8">
            <div className="inline-flex ml-24 items-center gap-3 bg-white/20 backdrop-blur-xl px-6 py-3 rounded-3xl border border-white/30 shadow-2xl">
              <Calendar className="w-6 h-6" />
              <span className="text-lg font-semibold tracking-wide">Book Your Table Now</span>
            </div>
            <h1 className="text-6xl lg:text-7xl ml-24 font-black bg-gradient-to-r from-white via-gray-100 to-white/80 bg-clip-text text-transparent drop-shadow-4xl leading-tight">
              Make a Reservation
            </h1>
            <p className="text-2xl text-gray-200/90 ml-48 backdrop-blur-sm font-light leading-relaxed max-w-2xl mx-auto">
              Secure your table at Little Lemon
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT - FORM CENTERED + 3 SMALL CARDS BELOW */}
      <div className="max-w-7xl mx-auto px-6 lg:px-24 py-20">
        {/* ✅ CENTERED RESERVATION FORM */}
        <div className="max-w-6xl mx-auto mb-20">
          {isSubmitted ? (
            <div className="bg-white/95 backdrop-blur-2xl rounded-4xl shadow-2xl p-12 text-center border border-gray-200 mx-auto">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <CheckCircle className="w-14 h-14 text-white" />
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-6">Reservation Confirmed!</h2>
              <p className="text-xl text-gray-600 mb-12">
                Thank you {formData.name}! Confirmation sent to <strong>{formData.email}</strong>
              </p>
              <div className="bg-gray-50 rounded-3xl p-8">
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div><strong>Date:</strong> {formData.date}</div>
                  <div><strong>Time:</strong> {formData.time}</div>
                  <div><strong>Guests:</strong> {formData.guests}</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white/95 backdrop-blur-2xl rounded-4xl shadow-2xl p-10 border border-white/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg font-bold text-gray-900 mb-3">👤 Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border text-green-600 border-gray-200 rounded-3xl focus:outline-none focus:ring-4 focus:ring-[#f4ce14] focus:border-transparent bg-white shadow-xl transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-bold text-gray-900 mb-3">📧 Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border border-gray-200 text-green-600 rounded-3xl focus:outline-none focus:ring-4 focus:ring-[#f4ce14] focus:border-transparent bg-white shadow-xl transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Date, Time, Guests */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-bold  text-gray-900 mb-2 flex items-center gap-2">
                      📅 Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-200  text-green-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#f4ce14] bg-white shadow-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                      🕐 Time *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 text-green-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#f4ce14] bg-white shadow-lg"
                    >
                      <option value="">Select time</option>
                      {availableTimes.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                      👥 Guests *
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 text-green-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#f4ce14] bg-white shadow-lg"
                    >
                      {[1,2,3,4,5,6,7,8,9,10].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Occasion & Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">🎉 Occasion</label>
                    <select
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 text-green-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#f4ce14] bg-white shadow-lg"
                    >
                      <option value="">Select occasion</option>
                      {occasions.map(occasion => (
                        <option key={occasion} value={occasion}>{occasion}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">📱 Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 text-green-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#f4ce14] bg-white shadow-lg"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">💬 Special Requests</label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-2xl text-green-600 focus:outline-none focus:ring-2 focus:ring-[#f4ce14] bg-white shadow-lg resize-vertical"
                    placeholder="Dietary restrictions, seating preferences..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full font-black text-xl py-6 px-8  text-green-600 rounded-3xl shadow-2xl transition-all duration-500 flex items-center justify-center gap-3 uppercase tracking-wider ${
                    isLoading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-[#f4ce14] to-[#ffed4a] text-[#495e57] hover:shadow-3xl hover:scale-[1.02] border-4 border-white/50'
                  }`}
                >
                  {isLoading ? (
                    <>
                      <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    'Confirm Reservation'
                  )}
                </button>
              </form>
            </div>
          )}
        </div>

        {/* ✅ 3 SMALL CARDS BELOW FORM - HORIZONTAL */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Location Card */}
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-green-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-[#f4ce14] to-[#ffed4a] rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#495e57]" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Location</h4>
            </div>
            <div className="space-y-4 text-center">
              <div className="font-bold text-lg text-gray-900">123 Mediterranean Way</div>
              <div className="text-gray-600">Chicago, IL 60601</div>
              <div className="space-y-2 pt-8">
                <a href="tel:+1312555LEMON" className="block p-3 bg-emerald-50 hover:bg-emerald-100 rounded-2xl text-sm transition-all group-hover:scale-105">
                  <Phone className="w-4 h-4 inline mr-2 text-emerald-600" />
                 <span className="text-gray-500"> (312) 555-LEMON</span>
                </a>
                <a href="mailto:reservations@littlelemon.com" className="block p-3 bg-blue-50 hover:bg-blue-100 rounded-2xl text-sm transition-all group-hover:scale-105">
                  <Mail className="w-4 h-4 inline mr-2 text-blue-600" />
                  <span className="text-gray-400">reservations@littlelemon.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Hours Card */}
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-gray-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-[#495e57] to-[#2d3731] rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Hours</h4>
            </div>
            <div className="space-y-3">
              {[
                { day: "Mon", time: "Closed" },
                { day: "Tue-Thu", time: "5-10 PM" },
                { day: "Fri-Sat", time: "4-11 PM" },
                { day: "Sun", time: "4-9 PM" }
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center p-4 bg-gradient-to-r from-white/80 rounded-2xl border border-white/50 hover:shadow-md transition-all">
                  <span className="font-semibold text-gray-900">{item.day}</span>
                  <span className={`px-3 py-1 rounded-xl text-sm font-bold ${
                    item.time === 'Closed' 
                      ? 'bg-gray-100 text-gray-600' 
                      : 'bg-emerald-100 text-emerald-800'
                  }`}>
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Policies Card */}
          <div className="bg-gradient-to-br from-amber-50/80 to-white/90 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-[#f4ce14]/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-amber-100/50">
              <div className="w-12 h-12 bg-gradient-to-br from-[#f4ce14] to-[#ffed4a] rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                <svg className="w-6 h-6 text-[#495e57]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900">Policies</h4>
            </div>
            <ul className="space-y-3">
              {[
                "Arrive 10 min early",
                "15 min grace period",
                "24h cancel notice", 
                "Large groups deposit",
                "Smart casual dress"
              ].map((policy, idx) => (
                <li key={idx} className="flex items-center gap-3 p-4 bg-white/90 rounded-2xl backdrop-blur-xl border border-white/60 hover:shadow-md transition-all group-hover:bg-white">
                  <div className="w-2 h-2 bg-[#f4ce14] rounded-full shadow-md group-hover:scale-125 transition-transform flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{policy}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
