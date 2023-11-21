'use client';

import { ReactNode, useState } from 'react';

export default function ThemeSwitcher(props: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`${isDark ? 'dark' : 'light'}`}>
      <div className="w-full bg-primary-50 text-center">
        <button
          className="mx-auto my-4 mb-12 w-96 rounded-xl bg-primary p-2 font-bold uppercase text-on-primary shadow-xl"
          onClick={() => setIsDark(!isDark)}
        >
          {`Switch to ${!isDark ? 'dark' : 'light'} theme.`}
        </button>
      </div>
      {props.children}
    </div>
  );
}
