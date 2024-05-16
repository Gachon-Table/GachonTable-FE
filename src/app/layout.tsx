// src/app/layout.tsx
import React from 'react';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>루트디렉토리</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
