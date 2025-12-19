// app/RootNavWrapper.tsx
'use client';

import { usePathname } from 'next/navigation';
import NavBar from '@/components/NavBar';
import GhavNavBar from './ghav/components/GhavNav';

export default function RootNavWrapper() {
  const pathname = usePathname();
  const isGhav = pathname.startsWith('/ghav');

  return (
    <>
      {isGhav ? <GhavNavBar /> : <NavBar />}
    </>
  );
}
