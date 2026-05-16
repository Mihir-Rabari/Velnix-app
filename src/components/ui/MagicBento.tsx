"use client";

import React, { useRef } from 'react';
import './MagicBento.css';

const cardData = [
  {
    title: 'Edge Infrastructure',
    description: 'Sub-millisecond latency via global PoP distribution and intelligent routing.',
    label: 'Performance',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full opacity-10">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    )
  },
  {
    title: 'Cloud Native',
    description: 'Kubernetes-orchestrated auto-scaling for infinite growth.',
    label: 'Scalability',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full opacity-10">
        <path d="M17.5 19a3.5 3.5 0 0 0 0-7h-1.5a7 7 0 1 0-14 0c0 1.93.78 3.68 2.05 4.95" />
        <path d="M12 12v9" />
        <path d="m8 17 4 4 4-4" />
      </svg>
    )
  },
  {
    title: 'Unified APIs',
    description: 'Single GraphQL endpoint for all microservices.',
    label: 'Architecture',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full opacity-10">
        <path d="M20 7h-9" />
        <path d="M14 17H5" />
        <circle cx="17" cy="17" r="3" />
        <circle cx="7" cy="7" r="3" />
      </svg>
    )
  },
  {
    title: 'Zero-Trust',
    description: 'Identity-aware proxying and mTLS encrypted tunnels.',
    label: 'Security',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full opacity-10">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    )
  },
  {
    title: 'Real-time Sync',
    description: 'State synchronization across nodes with Conflict-free Replicated Data Types.',
    label: 'Database',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full opacity-10">
        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
        <path d="M16 16h5v5" />
      </svg>
    )
  },
  {
    title: 'Modular Core',
    description: 'Extensible plugin architecture built on WASM for isolated execution.',
    label: 'Extensibility',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full opacity-10">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    )
  }
];

export default function MagicBento() {
  return (
    <div className="card-grid bento-section">
      {cardData.map((card, index) => (
        <div key={index} className="magic-bento-card group">
          {/* Background Decorative Icon */}
          <div className="absolute right-[-10%] bottom-[-10%] w-1/2 h-1/2 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700 ease-out pointer-events-none text-[#ff7057]">
            {card.icon}
          </div>
          
          <div className="magic-bento-card__header">
            <span className="magic-bento-card__label">{card.label}</span>
          </div>
          
          <div className="magic-bento-card__content">
            <h2 className="magic-bento-card__title group-hover:text-white transition-colors duration-300">
              {card.title}
            </h2>
            <p className="magic-bento-card__description">
              {card.description}
            </p>
          </div>

          {/* Corner Accent */}
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-transparent group-hover:border-[#ff7057]/30 transition-colors duration-300" />
        </div>
      ))}
    </div>
  );
}
