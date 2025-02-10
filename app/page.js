'use client';

import LoginPage from '@/app/login/page';
import { useAuth } from '@/context/AuthContext';

export default function Home() {
  const { user, logOut } = useAuth();

  if (!user) {
    return <LoginPage />;
  }

  return (
    <div>
      <button onClick={logOut}>Log out</button>
    </div>
  );
}
