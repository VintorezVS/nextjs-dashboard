import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col justify-center align-middle md:flex-row md:overflow-hidden">
      {children}
    </div>
  );
}
