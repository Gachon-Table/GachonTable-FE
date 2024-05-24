'use client';

import Dropdown from './_components/Dropdown';
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
    <html lang="en" className="h-full">
      <body className="h-full overflow-hidden">
        {!isLoginPage && (
          <div className="flex h-full flex-col">
            <div className="px-4 pt-4">
              <Dropdown />
            </div>
            <div className="flex-grow px-4">{children}</div>
          </div>
        )}
        {isLoginPage && <div className="flex h-full flex-col">{children}</div>}
      </body>
    </html>
  );
}
