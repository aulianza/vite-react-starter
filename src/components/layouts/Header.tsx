import clsx from 'clsx';
import { BiMoon, BiSun } from 'react-icons/bi';

import Button from '../Button';
import { useTheme } from '@/hooks/useTheme';

const Header = ({ type }: { type: string }) => {
  const [theme, handleChange] = useTheme();

  return (
    <header
      className={clsx(
        'fixed top-0 z-50 w-full bg-white/10 px-0.5 py-1',
        'dark:bg-gray-700/10',
        'shadow-sm'
      )}
    >
      <div
        className={clsx(
          'flex items-center justify-between',
          'mx-auto h-14 px-3 md:px-1',
          type === 'responsive' ? 'max-w-5xl' : 'max-w-lg'
        )}
      >
        <a href='/'>
          <h1 className='text-lg font-medium text-black dark:text-white'>
            aulianza-vite-react-starter
          </h1>
        </a>
        <Button
          variant='outline'
          className={clsx(
            'dark:border-white dark:text-white dark:hover:bg-gray-500',
            'hover:border-black hover:bg-gray-200',
            'border-black !p-2 text-black',
            'rounded-full transition hover:rotate-45'
          )}
          onClick={handleChange}
        >
          {theme === 'light' ? <BiMoon size={20} /> : <BiSun size={20} />}
        </Button>
      </div>
    </header>
  );
};

export default Header;
