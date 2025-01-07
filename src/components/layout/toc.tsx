'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/utils/cn';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

const TableOfContents = () => {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('h2, h3'))
      .map((element) => ({
        id: element.id,
        text: element.textContent || '',
        level: Number(element.tagName.charAt(1)),
      }));
    setHeadings(elements);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0% 0% -80% 0%',
        threshold: 1.0,
      }
    );

    elements.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elements.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  if (headings.length === 0) {
    return null;
  }

  return (
    <div className="hidden xl:block">
      <div className="fixed top-[4rem] bottom-0 right-0 z-20 w-[16rem] overflow-y-auto border-l border-secondary-200 bg-white px-4 py-6 dark:border-secondary-800 dark:bg-secondary-950">
        <div className="mb-4 text-sm font-semibold text-secondary-900 dark:text-secondary-100">
          On this page
        </div>
        <nav className="space-y-1">
          {headings.map((heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              className={cn(
                'block rounded-md px-2 py-1.5 text-sm transition-colors',
                heading.level === 2 ? 'pl-2' : 'pl-4',
                activeId === heading.id
                  ? 'bg-secondary-100 font-medium text-secondary-900 dark:bg-secondary-800 dark:text-secondary-100'
                  : 'text-secondary-600 hover:bg-secondary-100 hover:text-secondary-900 dark:text-secondary-400 dark:hover:bg-secondary-800 dark:hover:text-secondary-100'
              )}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(heading.id)?.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              {heading.text}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default TableOfContents; 