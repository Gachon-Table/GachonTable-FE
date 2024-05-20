'use client';

import Dropdown from 'src/components/Dropdown.tsx';
import { usePathname } from 'next/navigation';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/admin/login';

  return (
    <html lang="en">
      <body>
        {!isLoginPage && <Dropdown />}
        {children}
      </body>
    </html>
  );
}
