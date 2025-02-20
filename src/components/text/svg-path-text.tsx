'use client'

import { motion } from 'framer-motion'

export interface SVGPathTextProps {
  text: string
}

export function SVGPathText({ text }: SVGPathTextProps) {
  // Dynamically calculate the font size and SVG width based on the length of the text
  const baseFontSize = 24
  const scaledFontSize = Math.max(
    baseFontSize,
    Math.min(baseFontSize * (text.length / 6), baseFontSize * 2)
  ) // Scale font size based on text length
  const svgWidth = Math.max(300, text.length * 10) // Adjust SVG width based on text length

  return (
    <div className="text-4xl font-bold text-white">
      <svg width={svgWidth} height="100">
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
          fontSize={scaledFontSize}
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
