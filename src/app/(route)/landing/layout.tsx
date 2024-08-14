import React from 'react';

interface RouteLayoutProps {
  children: React.ReactNode;
}

const RouteLayout: React.FC<RouteLayoutProps> = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}

export default RouteLayout;
