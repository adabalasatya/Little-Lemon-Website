"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff,
  User,
  Phone,
  ChefHat,
  CheckCircle
} from "lucide-react";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? "Login submitted:" : "Signup submitted:", formData);
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      if (!isLogin) {
        setIsLogin(true); // Switch to login after successful signup
      }
      setFormData({
        email: "",
        password: "",
        name: "",
        phone: ""
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#495e57]/5 via-white to-[#f4ce14]/5">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-[80vh]">
          
          {/* Left Side - Brand/Info */}
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <div className="max-w-lg">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#f4ce14] rounded-full flex items-center justify-center">
                  <ChefHat className="w-6 h-6 text-[#495e57]" />
                </div>
                <h1 className="text-4xl font-bold text-gray-900">Little Lemon</h1>
              </div>
              
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Welcome {isLogin ? "Back" : "to Our Family"}
              </h2>
              
              <p className="text-gray-600 text-lg mb-10">
                {isLogin 
                  ? "Sign in to access your rewards, order history, and personalized recommendations."
                  : "Join our community to earn rewards, get exclusive offers, and manage your reservations."
                }
              </p>

              {/* Benefits */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#f4ce14]" />
                  <span className="text-gray-700">Earn rewards on every order</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#f4ce14]" />
                  <span className="text-gray-700">Track your reservations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#f4ce14]" />
                  <span className="text-gray-700">Exclusive member discounts</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#f4ce14]" />
                  <span className="text-gray-700">Priority customer support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-1/2">
            <div className="bg-white mt-20 rounded-3xl shadow-2xl p-8 max-w-md mx-auto">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {isLogin ? "Welcome Back!" : "Account Created!"}
                  </h2>
                  <p className="text-gray-600 mb-8">
                    {isLogin 
                      ? "You have successfully signed in to your account."
                      : "Your account has been created successfully. Please check your email to verify your account."
                    }
                  </p>
                  <Link
                    href="/"
                    className="inline-block bg-[#495e57] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#3a4a42] transition-colors"
                  >
                    Go to Homepage
                  </Link>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-10">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {isLogin ? "Sign In" : "Create Account"}
                    </h2>
                    
                    <button
                      onClick={() => setIsLogin(!isLogin)}
                      className="text-[#495e57] font-medium hover:text-[#f4ce14] transition-colors"
                    >
                      {isLogin ? "Need an account?" : "Already have an account?"}
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {!isLogin && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required={!isLogin}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f4ce14] focus:border-transparent"
                            placeholder="John Smith"
                          />
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f4ce14] focus:border-transparent"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    {!isLogin && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required={!isLogin}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f4ce14] focus:border-transparent"
                            placeholder="(123) 456-7890"
                          />
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                          minLength={8}
                          className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f4ce14] focus:border-transparent"
                          placeholder="Enter your password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                      {!isLogin && (
                        <p className="text-gray-500 text-xs mt-2">
                          Password must be at least 8 characters long
                        </p>
                      )}
                    </div>

                    {isLogin && (
                      <div className="flex items-center justify-between">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-[#f4ce14] rounded border-gray-300 focus:ring-[#f4ce14]"
                          />
                          <span className="ml-2 text-sm text-gray-700">Remember me</span>
                        </label>
                        
                        <Link
                          href="/forgot-password"
                          className="text-sm text-[#495e57] hover:text-[#f4ce14] transition-colors"
                        >
                          Forgot password?
                        </Link>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#f4ce14] to-[#ffd93d] text-[#495e57] font-bold py-3.5 rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      {isLogin ? "Sign In" : "Create Account"}
                    </button>

                    <div className="relative my-6">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-white text-gray-500">Or continue with</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        <span className="text-sm font-medium">Google</span>
                      </button>
                      
                      <button
                        type="button"
                        className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        <span className="text-sm font-medium">Facebook</span>
                      </button>
                    </div>

                    <p className="text-center text-gray-600 text-sm mt-6">
                      By continuing, you agree to our{" "}
                      <Link href="/terms" className="text-[#495e57] hover:text-[#f4ce14] transition-colors">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-[#495e57] hover:text-[#f4ce14] transition-colors">
                        Privacy Policy
                      </Link>
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}