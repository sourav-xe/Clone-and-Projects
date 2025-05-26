import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-gradient-to-br from-black to-gray-900 text-white">
        {/* Hero Section */}
        <div className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900">
          <motion.div
            className="absolute inset-0 z-10 flex flex-col items-center justify-center space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 80 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-center"
              style={{
                fontFamily: "'Poppins', sans-serif",
                textShadow: '0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(0,255,255,0.3)',
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Our Story: Where Innovation Meets Style
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-300"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Discover the journey behind our brand and our mission to revolutionize the world of footwear.
            </motion.p>
          </motion.div>
        </div>

        {/* Brand Values Section */}
        <section className="px-8 py-16 bg-black bg-opacity-70">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Innovation', 'Quality', 'Customer Satisfaction'].map((value, idx) => (
              <motion.div
                className="p-6 bg-gray-800 rounded-xl shadow-xl hover:scale-105 transition-transform"
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + idx * 0.2 }}
              >
                <h3 className="text-2xl font-semibold mb-4">{value}</h3>
                <p className="text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="px-8 gap-4 py-16 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            What Our Customers Are Saying
          </motion.h2>

          <div className="flex justify-center space-x-8">
            {/* Testimonial 1 */}
            <motion.div
              className="max-w-sm bg-black bg-opacity-70 text-white p-8 rounded-xl shadow-xl hover:scale-105 transition-transform"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-lg mb-4">
                "These shoes are a game changer! I've never felt so comfortable while looking so stylish."
              </p>
              <div className="text-right font-semibold">- Sarah M.</div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              className="max-w-sm bg-black bg-opacity-70 text-white p-8 rounded-xl shadow-xl hover:scale-105 transition-transform"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-lg mb-4">
                "Incredible quality and the most comfortable fit! Perfect for my daily runs and workouts."
              </p>
              <div className="text-right font-semibold">- John D.</div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              className="max-w-sm bg-black bg-opacity-70 text-white p-8 rounded-xl shadow-xl hover:scale-105 transition-transform"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
            >
              <p className="text-lg mb-4">
                "I love these shoes! Stylish, comfortable, and perfect for all my adventures."
              </p>
              <div className="text-right font-semibold">- Emily R.</div>
            </motion.div>
          </div>
          <div className="flex justify-center space-x-8">
            {/* Testimonial 1 */}
            <motion.div
              className="max-w-sm bg-black bg-opacity-70 text-white p-8 rounded-xl shadow-xl hover:scale-105 transition-transform"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-lg mb-4">
                "These shoes are a game changer! I've never felt so comfortable while looking so stylish."
              </p>
              <div className="text-right font-semibold">- Sarah M.</div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              className="max-w-sm bg-black bg-opacity-70 text-white p-8 rounded-xl shadow-xl hover:scale-105 transition-transform"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-lg mb-4">
                "Incredible quality and the most comfortable fit! Perfect for my daily runs and workouts."
              </p>
              <div className="text-right font-semibold">- John D.</div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              className="max-w-sm bg-black bg-opacity-70 text-white p-8 rounded-xl shadow-xl hover:scale-105 transition-transform"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
            >
              <p className="text-lg mb-4">
                "I love these shoes! Stylish, comfortable, and perfect for all my adventures."
              </p>
              <div className="text-right font-semibold">- Emily R.</div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
