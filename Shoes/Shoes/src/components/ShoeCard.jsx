// ShoeCard.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react' // optional icon

export default function ShoeCard({ shoe }) {
  const navigate = useNavigate()

  const handleAddToCart = () => {
    // Here you can also add logic to add the shoe to a global state or context cart
    navigate('/cart')
  }

  return (
    <motion.div
      className="bg-zinc-900 rounded-xl p-4 shadow-lg hover:scale-105 transition transform"
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={shoe.image}
        alt={shoe.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-white text-xl font-semibold">{shoe.name}</h3>
      <p className="text-gray-400 mt-1">${shoe.price}</p>

      <div className="mt-4 flex flex-col gap-3">
        <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white font-medium">
          View Details
        </button>

        <button
          onClick={handleAddToCart}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full text-white font-semibold hover:brightness-110 transition"
        >
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>
      </div>
    </motion.div>
  )
}
