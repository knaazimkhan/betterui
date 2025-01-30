'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { registry } from '@/docs/registry';

const categories = {
  atoms: 'Basic building blocks',
  molecules: 'Compound components',
  organisms: 'Complex UI patterns',
  templates: 'Page-level components',
};

export default function ComponentsPage() {
  const groupedComponents = Object.entries(registry).reduce((acc, [key, value]) => {
    if (!acc[value.type]) {
      acc[value.type] = [];
    }
    acc[value.type].push({ key, ...value });
    return acc;
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  }, {} as Record<string, any[]>);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
          Components
        </h1>
        <p className="mt-4 text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
          Explore our collection of beautiful, accessible, and customizable components.
        </p>
      </motion.div>

      <div className="space-y-16">
        {Object.entries(categories).map(([category, description], categoryIndex) => (
          <motion.section
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.1 }}
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold capitalize">{category}</h2>
              <p className="mt-2 text-secondary-600 dark:text-secondary-400">{description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groupedComponents[category]?.map((component, index) => (
                <motion.div
                  key={component.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (categoryIndex * 0.1) + (index * 0.05) }}
                >
                  <Link
                    href={`/docs/components/${component.key}`}
                    className="block group"
                  >
                    <div className="relative overflow-hidden rounded-lg border border-secondary-200 dark:border-secondary-800 bg-white dark:bg-secondary-900 p-6 transition-all duration-200 hover:border-primary-500 dark:hover:border-primary-400">
                      <div className="mb-4">
                        <h3 className="text-xl font-semibold group-hover:text-primary-500">
                          {component.name}
                        </h3>
                        <p className="mt-1 text-sm text-secondary-600 dark:text-secondary-400">
                          {component.metadata.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {component.metadata.features.slice(0, 3).map((feature: string) => (
                          <span
                            key={feature}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-50 text-primary-700 dark:bg-primary-900 dark:text-primary-300"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="absolute top-4 right-4 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                        <svg
                          className="w-5 h-5 text-primary-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
} 