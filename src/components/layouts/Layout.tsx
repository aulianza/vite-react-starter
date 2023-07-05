import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  type?: 'mobile' | 'responsive';
}

const Layout = ({ children, type }: LayoutProps) => {
  const layoutType = type ?? 'responsive';

  return (
    <div className='dark:bg-dark'>
      <Header type={layoutType} />
      <main className={`layout-container ${layoutType}`}>{children}</main>
    </div>
  );
};

export default Layout;
