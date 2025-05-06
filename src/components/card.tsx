// src/components/ui/card.tsx
import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      {children}
    </div>
  );
};

export { Card };
