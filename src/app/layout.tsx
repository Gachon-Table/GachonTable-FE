// src/app/layout.tsx
import React from 'react';
import './/globals.css';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>My Next.js App</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
