'use client'

import { motion } from 'framer-motion'

export interface SVGPathTextProps {
  text: string
  pathD?: string
  duration?: number
  fontFamily?: string
  fontWeight?: string
  fontStyle?: string
  textDecoration?: string
}

export function SVGPathText({
  text,
  pathD = `M10 80 Q150 20 300 80`,
  duration = 2,
  fontFamily = 'Arial',
  fontWeight = 'normal',
  fontStyle = 'normal',
  textDecoration = 'none',
}: SVGPathTextProps) {
  // Dynamically calculate the font size and SVG width based on the length of the text
  const baseFontSize = 24
  const scaledFontSize = Math.max(
    baseFontSize,
    Math.min(baseFontSize * (text.length / 6), baseFontSize * 2)
  ) // Scale font size based on text length
  const svgWidth = Math.max(300, text.length * 15) // Adjust SVG width based on text length

  const calculatedOffset = Math.max(25, 25 - text.length * 0.5, 0)

  return (
    <div className="text-4xl font-bold text-white">
      <svg width={svgWidth} height="100" viewBox={`0 0 ${svgWidth} 100`}>
        <motion.path
          d={pathD}
          fill="transparent"
          stroke="white"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration,
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
          fontFamily={fontFamily}
          fontWeight={fontWeight}
          fontStyle={fontStyle}
          textDecoration={textDecoration}
        >
          <textPath href="#textPath" startOffset={`${calculatedOffset}%`}>
            {text}
          </textPath>
        </motion.text>
        <defs>
          <path id="textPath" d={pathD} />
        </defs>
      </svg>
    </div>
  )
}
