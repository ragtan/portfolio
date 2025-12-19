// app/layout.tsx
import './globals.css';
import RootNavWrapper from './RootNavWrapper';

export const metadata = {
  title: 'Raghav Taneja – Audio Engineer & Sound Designer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="m-0 font-sans bg-black text-zinc-100">
        {/* Client-side nav wrapper will handle GHAV vs Portfolio navbar */}
        <RootNavWrapper />

        {/* Main content; paddingTop is handled in RootNavWrapper if needed */}
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
