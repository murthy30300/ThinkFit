import React from 'react';

/**
 * Card component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.hover - Whether to show hover effects
 * @param {Function} props.onClick - Click handler function
 */
export default function Card({ children, className = '', hover = false, onClick }) {
  return (
    <div 
      className={`
        bg-white/90 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg
        ${hover ? 'hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 cursor-pointer' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
}