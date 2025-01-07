import React from 'react';
import Header from './header';
import Sidebar from './sidebar';
import TableOfContents from './toc';

interface DocsLayoutProps {
  children: React.ReactNode;
}

const DocsLayout = ({ children }: DocsLayoutProps) => {
  return (
    <div className="min-h-screen bg-white dark:bg-secondary-950">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex flex-1">
          <main className="flex-1 px-4 pt-8 lg:px-8 lg:pt-12 lg:pl-[18rem] xl:pl-[20rem]">
            <div className="mx-auto max-w-3xl">
              {children}
            </div>
          </main>
          <TableOfContents />
        </div>
      </div>
    </div>
  );
};

export default DocsLayout; 