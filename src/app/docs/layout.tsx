import React from 'react';
import DocsLayout from '@/components/layout/docs-layout';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DocsLayout>{children}</DocsLayout>;
} 