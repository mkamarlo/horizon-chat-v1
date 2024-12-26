import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Horizon Chat UI',
  description: 'Modern chat interface built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}