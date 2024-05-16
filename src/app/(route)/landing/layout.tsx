// src/app/(route)/layout.tsx
import React from 'react';

interface RouteLayoutProps {
  children: React.ReactNode;
}

const RouteLayout: React.FC<RouteLayoutProps> = ({ children }) => {
  return (
    <div>
      {/* <header>Route Layout Header</header> */}
      <main>{children}</main>
      {/* <footer>Route Layout Footer</footer> */}
    </div>
  );
}

export default RouteLayout;
