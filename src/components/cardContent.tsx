// src/components/ui/cardContent.tsx
import React from 'react';

interface CardContentProps {
  children: React.ReactNode;
}

const CardContent: React.FC<CardContentProps> = ({ children }) => {
  return <div className="text-gray-700">{children}</div>;
};

export { CardContent };
