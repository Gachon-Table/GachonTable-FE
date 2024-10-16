import React from 'react';

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="shadow-2xl shadow-gray-200">
      <main>{children}</main>
    </div>
  );
}
