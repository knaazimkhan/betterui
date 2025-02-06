'use client'

interface ComponentWrapperProps {
  title: string
  children: React.ReactNode
}
export function ComponentWrapper({ title, children }: ComponentWrapperProps) {
  return (
    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-white">{title}</h2>
      {children}
    </div>
  )
}
