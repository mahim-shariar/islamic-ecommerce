// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";

const CheckoutSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    district: "",
    address: "",
    quantity: 1,
    notes: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Order submitted:", formData);
    setSubmitted(true);
    // Reset form data after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      district: "",
      address: "",
      quantity: 1,
      notes: "",
      description: "",
    });
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "tween", ease: "easeOut" } },
  };

  // Main cities of Bangladesh with their Sadar areas
  const mainCities = [
    { name: "Dhaka", sadar: "Dhaka Sadar" },
    { name: "Chittagong", sadar: "Chittagong Sadar" },
    { name: "Rajshahi", sadar: "Rajshahi Sadar" },
    { name: "Khulna", sadar: "Khulna Sadar" },
    { name: "Barishal", sadar: "Barishal Sadar" },
    { name: "Sylhet", sadar: "Sylhet Sadar" },
    { name: "Rangpur", sadar: "Rangpur Sadar" },
    { name: "Mymensingh", sadar: "Mymensingh Sadar" },
  ];

  // Districts organized by city with Sadar areas
  const districtsByCity = {
    Dhaka: {
      sadar: "Dhaka Sadar",
      districts: [
        "Gazipur",
        "Narayanganj",
        "Narsingdi",
        "Tangail",
        "Kishoreganj",
        "Manikganj",
        "Munshiganj",
        "Madaripur",
        "Shariatpur",
        "Gopalganj",
        "Faridpur",
        "Rajbari",
      ],
    },
    Chittagong: {
      sadar: "Chittagong Sadar",
      districts: [
        "Cox's Bazar",
        "Comilla",
        "Feni",
        "Lakshmipur",
        "Chandpur",
        "Noakhali",
        "Brahmanbaria",
        "Chittagong Hill Tracts",
      ],
    },
    Rajshahi: {
      sadar: "Rajshahi Sadar",
      districts: [
        "Bogra",
        "Pabna",
        "Natore",
        "Naogaon",
        "Chapainawabganj",
        "Joypurhat",
        "Sirajganj",
      ],
    },
    Khulna: {
      sadar: "Khulna Sadar",
      districts: [
        "Jessore",
        "Satkhira",
        "Meherpur",
        "Chuadanga",
        "Kushtia",
        "Magura",
        "Jhenaidah",
        "Narail",
        "Bagerhat",
      ],
    },
    Barishal: {
      sadar: "Barishal Sadar",
      districts: ["Pirojpur", "Bhola", "Barguna", "Patuakhali", "Jhalokati"],
    },
    Sylhet: {
      sadar: "Sylhet Sadar",
      districts: ["Moulvibazar", "Habiganj", "Sunamganj"],
    },
    Rangpur: {
      sadar: "Rangpur Sadar",
      districts: [
        "Dinajpur",
        "Kurigram",
        "Gaibandha",
        "Nilphamari",
        "Panchagarh",
        "Thakurgaon",
        "Lalmonirhat",
      ],
    },
    Mymensingh: {
      sadar: "Mymensingh Sadar",
      districts: ["Jamalpur", "Sherpur", "Netrokona"],
    },
  };

  return (
    <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-amber-100 overflow-x-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-amber-200"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Floating date seeds */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-amber-300 opacity-10"
          style={{
            width: `${Math.random() * 20 + 10}px`,
            height: `${Math.random() * 20 + 10}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 40 - 20, 0],
            rotate: [0, Math.random() * 360],
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-amber-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header with Islamic pattern */}
          <div className="bg-amber-600 px-6 py-4 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="white">
                <path
                  d="M50 0L0 50l50 50 50-50L50 0zm0 10l40 40-40 40-40-40 40-40z"
                  transform="rotate(45 50 50)"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white relative">
              <span className="font-arabic text-2xl block mb-1">
                طلب تمر العجوة
              </span>
              Order Premium Ajwa Dates
            </h2>
          </div>

          {submitted ? (
            <motion.div
              className="p-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-amber-100 mb-4">
                <svg
                  className="h-8 w-8 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-amber-900 mb-2">
                Order Received!
              </h3>
              <p className="text-amber-700 mb-6">
                Thank you for your order. We'll contact you shortly to confirm
                the details.
              </p>
              <motion.button
                onClick={() => setSubmitted(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors shadow-md"
              >
                Place Another Order
              </motion.button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Side - Information & Policies */}
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-l-2xl">
                  <div className="space-y-8">
                    {/* Product Information */}
                    <div>
                      <h3 className="text-xl font-semibold text-amber-900 mb-4 flex items-center">
                        <svg
                          className="w-6 h-6 mr-2 text-amber-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                          />
                        </svg>
                        Premium Ajwa Dates
                      </h3>
                      <div className="space-y-3 text-amber-800">
                        <p className="flex items-center">
                          <svg
                            className="w-5 h-5 mr-2 text-amber-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Premium Quality, Hand-picked
                        </p>
                        <p className="flex items-center">
                          <svg
                            className="w-5 h-5 mr-2 text-amber-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Certified Halal
                        </p>
                        <p className="flex items-center">
                          <svg
                            className="w-5 h-5 mr-2 text-amber-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Fresh & Authentic
                        </p>
                      </div>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h4 className="text-lg font-medium text-amber-900 mb-4">
                        Order Summary
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-amber-700">
                            Premium Ajwa Dates (1KG)
                          </span>
                          <span className="font-medium text-amber-800">
                            $24.99 × {formData.quantity}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-amber-700">Shipping</span>
                          <span className="font-medium text-amber-800">
                            $5.00
                          </span>
                        </div>
                        <div className="border-t border-amber-200 pt-3 mt-2">
                          <div className="flex justify-between">
                            <span className="text-lg font-bold text-amber-900">
                              Total
                            </span>
                            <span className="text-lg font-bold text-amber-900">
                              ${(24.99 * formData.quantity + 5).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Policies */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-medium text-amber-900">
                        Our Policies
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <svg
                            className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <div>
                            <h5 className="font-medium text-amber-900">
                              Quality Guarantee
                            </h5>
                            <p className="text-sm text-amber-700">
                              Premium quality, hand-picked, and certified halal
                              dates.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <svg
                            className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <div>
                            <h5 className="font-medium text-amber-900">
                              Fast Delivery
                            </h5>
                            <p className="text-sm text-amber-700">
                              Free delivery for orders above $50. 2-3 business
                              days delivery.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <svg
                            className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                            />
                          </svg>
                          <div>
                            <h5 className="font-medium text-amber-900">
                              Secure Payment
                            </h5>
                            <p className="text-sm text-amber-700">
                              100% secure payment processing with easy refund
                              policy.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Form */}
                <div className="p-8">
                  <div className="space-y-6">
                    {/* Contact Information */}
                    <motion.div variants={item}>
                      <h3 className="text-lg font-medium text-amber-900 mb-4 pb-2 border-b border-amber-100 flex items-center">
                        <svg
                          className="w-5 h-5 mr-2 text-amber-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        Contact Information
                      </h3>
                      <div className="space-y-4">
                        <div className="relative group">
                          <label
                            htmlFor="name"
                            className={`absolute left-3 transition-all duration-200 ${
                              formData.name
                                ? "text-xs -top-3 bg-white px-1 text-amber-600"
                                : "top-3 text-amber-700"
                            } group-focus-within:text-xs group-focus-within:-top-3 group-focus-within:bg-white group-focus-within:px-1 group-focus-within:text-amber-600`}
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full pt-4 pb-2 px-3 border-2 border-amber-100 rounded-lg focus:border-amber-300 focus:ring-2 focus:ring-amber-200 focus:ring-opacity-50 transition-all duration-200"
                          />
                        </div>

                        <div className="relative group">
                          <label
                            htmlFor="email"
                            className={`absolute left-3 transition-all duration-200 ${
                              formData.email
                                ? "text-xs -top-3 bg-white px-1 text-amber-600"
                                : "top-3 text-amber-700"
                            } group-focus-within:text-xs group-focus-within:-top-3 group-focus-within:bg-white group-focus-within:px-1 group-focus-within:text-amber-600`}
                          >
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pt-4 pb-2 px-3 border-2 border-amber-100 rounded-lg focus:border-amber-300 focus:ring-2 focus:ring-amber-200 focus:ring-opacity-50 transition-all duration-200"
                          />
                        </div>

                        <div className="relative group">
                          <label
                            htmlFor="phone"
                            className={`absolute left-3 transition-all duration-200 ${
                              formData.phone
                                ? "text-xs -top-3 bg-white px-1 text-amber-600"
                                : "top-3 text-amber-700"
                            } group-focus-within:text-xs group-focus-within:-top-3 group-focus-within:bg-white group-focus-within:px-1 group-focus-within:text-amber-600`}
                          >
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pt-4 pb-2 px-3 border-2 border-amber-100 rounded-lg focus:border-amber-300 focus:ring-2 focus:ring-amber-200 focus:ring-opacity-50 transition-all duration-200"
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* Shipping Details */}
                    <motion.div variants={item}>
                      <h3 className="text-lg font-medium text-amber-900 mb-4 pb-2 border-b border-amber-100 flex items-center">
                        <svg
                          className="w-5 h-5 mr-2 text-amber-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                        Shipping Details
                      </h3>
                      <div className="space-y-4">
                        <div className="relative group">
                          <label
                            htmlFor="country"
                            className={`absolute left-3 transition-all duration-200 ${
                              formData.country
                                ? "text-xs -top-3 bg-white px-1 text-amber-600"
                                : "top-3 text-amber-700"
                            } group-focus-within:text-xs group-focus-within:-top-3 group-focus-within:bg-white group-focus-within:px-1 group-focus-within:text-amber-600`}
                          >
                            Country
                          </label>
                          <select
                            id="country"
                            name="country"
                            required
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full pt-4 pb-2 px-3 border-2 border-amber-100 rounded-lg focus:border-amber-300 focus:ring-2 focus:ring-amber-200 focus:ring-opacity-50 appearance-none bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNkOTc3MDYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLWRvd24iPjxwYXRoIGQ9Im02IDkgNiA2IDYtNiIvPjwvc3ZnPg==')] bg-no-repeat bg-[right_0.5rem_center] bg-[length:1.5rem] transition-all duration-200"
                          >
                            <option value="" disabled hidden></option>
                            <option value="BD">Bangladesh</option>
                            <option value="Other">Other Country</option>
                          </select>
                        </div>

                        {formData.country === "BD" && (
                          <>
                            <div className="relative group">
                              <label
                                htmlFor="city"
                                className={`absolute left-3 transition-all duration-200 ${
                                  formData.city
                                    ? "text-xs -top-3 bg-white px-1 text-amber-600"
                                    : "top-3 text-amber-700"
                                } group-focus-within:text-xs group-focus-within:-top-3 group-focus-within:bg-white group-focus-within:px-1 group-focus-within:text-amber-600`}
                              >
                                City
                              </label>
                              <select
                                id="city"
                                name="city"
                                required
                                value={formData.city}
                                onChange={handleChange}
                                className="w-full pt-4 pb-2 px-3 border-2 border-amber-100 rounded-lg focus:border-amber-300 focus:ring-2 focus:ring-amber-200 focus:ring-opacity-50 appearance-none bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNkOTc3MDYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLWRvd24iPjxwYXRoIGQ9Im02IDkgNiA2IDYtNiIvPjwvc3ZnPg==')] bg-no-repeat bg-[right_0.5rem_center] bg-[length:1.5rem] transition-all duration-200"
                              >
                                <option value="" disabled hidden></option>
                                {mainCities.map((city) => (
                                  <option key={city.name} value={city.name}>
                                    {city.name}
                                  </option>
                                ))}
                              </select>
                            </div>

                            {formData.city && (
                              <div className="relative group">
                                <label
                                  htmlFor="district"
                                  className={`absolute left-3 transition-all duration-200 ${
                                    formData.district
                                      ? "text-xs -top-3 bg-white px-1 text-amber-600"
                                      : "top-3 text-amber-700"
                                  } group-focus-within:text-xs group-focus-within:-top-3 group-focus-within:bg-white group-focus-within:px-1 group-focus-within:text-amber-600`}
                                >
                                  Area
                                </label>
                                <select
                                  id="district"
                                  name="district"
                                  required
                                  value={formData.district}
                                  onChange={handleChange}
                                  className="w-full pt-4 pb-2 px-3 border-2 border-amber-100 rounded-lg focus:border-amber-300 focus:ring-2 focus:ring-amber-200 focus:ring-opacity-50 appearance-none bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNkOTc3MDYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLWRvd24iPjxwYXRoIGQ9Im02IDkgNiA2IDYtNiIvPjwvc3ZnPg==')] bg-no-repeat bg-[right_0.5rem_center] bg-[length:1.5rem] transition-all duration-200"
                                >
                                  <option value="" disabled hidden></option>
                                  <option
                                    value={districtsByCity[formData.city].sadar}
                                  >
                                    {districtsByCity[formData.city].sadar}
                                  </option>
                                  <optgroup label="Other Areas">
                                    {districtsByCity[
                                      formData.city
                                    ].districts.map((district) => (
                                      <option key={district} value={district}>
                                        {district}
                                      </option>
                                    ))}
                                  </optgroup>
                                </select>
                              </div>
                            )}
                          </>
                        )}

                        <div className="relative group">
                          <label
                            htmlFor="address"
                            className={`absolute left-3 transition-all duration-200 ${
                              formData.address
                                ? "text-xs -top-3 bg-white px-1 text-amber-600"
                                : "top-3 text-amber-700"
                            } group-focus-within:text-xs group-focus-within:-top-3 group-focus-within:bg-white group-focus-within:px-1 group-focus-within:text-amber-600`}
                          >
                            Detailed Address
                          </label>
                          <textarea
                            id="address"
                            name="address"
                            required
                            rows={3}
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full pt-4 pb-2 px-3 border-2 border-amber-100 rounded-lg focus:border-amber-300 focus:ring-2 focus:ring-amber-200 focus:ring-opacity-50 transition-all duration-200"
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* Checkout Button */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-medium py-4 px-6 rounded-xl shadow-lg flex items-center justify-center relative overflow-hidden text-lg transition-all duration-300 group"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        <svg
                          className="w-6 h-6 mr-2 group-hover:animate-bounce"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Confirm Order
                      </span>
                      <motion.span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CheckoutSection;
