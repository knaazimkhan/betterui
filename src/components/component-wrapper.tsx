'use client'
interface ComponentWrapperProps {
  title: string
  children: React.ReactNode
}
export function ComponentWrapper({ title, children }: ComponentWrapperProps) {
  return (
    <div className="rounded-lg bg-white/20 p-6 shadow-lg backdrop-blur-sm">
      <h2 className="mb-4 text-2xl font-semibold text-white">{title}</h2>
      {children}
    </div>
  )
}
