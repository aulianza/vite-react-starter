import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { isExternalLink } from './helpers/link';
import { PAGES } from './constant/menu';

function App() {
  return (
    <section className='flex min-h-[800px] flex-col items-center justify-between py-5'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <p className='hidden fixed left-0 top-0 md:flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
          Get started by editing&nbsp;
          <code className='font-mono font-bold'>src/App.tsx</code>
        </p>
        <div className='fixed bottom-0 left-0 flex items-center h-20 md:h-48 w-full md:items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none'>
          <a
            className='pointer-events-none flex place-items-center gap-2 p-1 md:p-8 lg:pointer-events-auto lg:p-0'
            href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            By
          </a>
          <a
            className='hover:underline ml-1'
            href='http://aulianza.id'
            target='_blank'
          >
            aulianza
          </a>
        </div>
      </div>

      <div className='p-5 text-center relative flex flex-col space-y-8 md:space-y-6 place-items-center'>
        <div className='flex justify-center'>
          <a href='https://vitejs.dev' target='_blank'>
            <img src={viteLogo} className='logo' alt='Vite logo' />
          </a>
          <a href='https://react.dev' target='_blank'>
            <img src={reactLogo} className='logo react' alt='React logo' />
          </a>
        </div>
        <p className='text-lg'>
          ⚡️ Vite + React + TypeScript + Tailwind CSS starter template
        </p>
      </div>

      <div className='mb-32 flex flex-col md:flex-row gap-3 text-center lg:mb-0 lg:grid-cols-4 lg:text-left w-full'>
        {PAGES?.map((page, index) => (
          <a
            key={index}
            href={page?.url}
            className='w-full md:w-1/3 group rounded-lg border border-transparent px-5 py-4 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 hover:scale-[102%] transition-all duration-300'
            rel='noopener noreferrer'
            target={isExternalLink(page?.url) ? '_blank' : ''}
          >
            <div>
              <h2 className='mb-3 text-xl font-semibold'>{page?.title}</h2>
              <p className='m-0 max-w-[30ch] opacity-50'>{page?.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default App;
