import React from 'react';
 function Card(  ){
    return (
        <div className="max-w-sm mx-auto p-4">
      <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 duration-300 ease-in-out">
        
        {/* Image with overlay */}
        <div className="relative h-96">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/33207999/pexels-photo-33207999.jpeg"
            alt="Futuristic Tech"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Text content */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className=" items-center text-xs text-white/70 mb-38">
    
              <span>2025</span>
            </div>

            <h1 className="text-xl font-bold leading-snug mb-1">Class Warfare</h1>
            <p className="text-sky-300 font-medium text-xs mb-3">The Anti-Patterns</p>

            <button className="px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition text-xs font-medium">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
    )
 }
 export default Card;