'use client'

import { motion } from 'framer-motion'

export function SVGPathText({ text }: { text: string }) {
  return (
    <div className="rounded bg-gray-800 p-4 text-4xl font-bold text-white">
      <svg width="300" height="100">
        <motion.path
          d={`M10 80 Q150 20 290 80`}
          fill="transparent"
          stroke="white"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'reverse',
          }}
        />
        <motion.text
          x="150"
          y="85"
          textAnchor="middle"
          fill="white"
          fontSize="24"
        >
          <textPath href="#textPath" startOffset="50%">
            {text}
          </textPath>
        </motion.text>
        <defs>
          <path id="textPath" d={`M10 80 Q150 20 290 80`} />
        </defs>
      </svg>
    </div>
  )
}
