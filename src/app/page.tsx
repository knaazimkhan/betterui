import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6">
          Build Beautiful UIs{" "}
          <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
            Faster
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto mb-8">
          A modern, customizable UI component library built with Next.js and Tailwind CSS.
          Designed for developers who want to create stunning interfaces quickly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/docs"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition duration-150 ease-in-out"
          >
            Get Started
          </Link>
          <Link
            href="/components"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/10 hover:bg-primary-100 dark:hover:bg-primary-900/20 rounded-lg transition duration-150 ease-in-out"
          >
            View Components
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 border-t border-secondary-200 dark:border-secondary-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl bg-white dark:bg-secondary-900/50 border border-secondary-200 dark:border-secondary-800"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-500/10 text-primary-500 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-secondary-600 dark:text-secondary-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    title: "Modern Design System",
    description: "Built with the latest design principles and customizable to match your brand.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
        />
      </svg>
    ),
  },
  {
    title: "Type-Safe Components",
    description: "Built with TypeScript for better development experience and fewer bugs.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
  },
  {
    title: "Responsive & Accessible",
    description: "Components are mobile-first and follow WCAG accessibility guidelines.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        />
      </svg>
    ),
  },
];
