'use client';

import LoginPage from '@/app/landing/page';
import Overview from '@/app/overview/Overview';
import { useAuth } from '@/context/AuthContext';

export default function Home() {
  const { user, logOut } = useAuth();

  if (!user) {
    return <LoginPage />;
  }

  return (
    <div>
      <button onClick={logOut}>Log out</button>
      <Overview />
    </div>
  );
}
