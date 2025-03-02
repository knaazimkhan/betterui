import fs from 'fs/promises'
import path from 'path'

import sharp from 'sharp'

const inputPath = path.join(process.cwd(), 'public', 'logo.svg')
const outputPath = path.join(process.cwd(), 'public', 'icons')
const sizes = {
  favicon16: 16,
  favicon32: 32,
  favicon256: 256,
  appleIcon: 180,
  androidSmall: 192,
  androidLarge: 512,
} as const

async function generateFavicons() {
  try {
    await fs.access(inputPath)

    await fs.mkdir(outputPath, { recursive: true })

    const sourceBuffer = await fs.readFile(inputPath)

    Promise.all([
      // Favicon 16x16
      sharp(sourceBuffer)
        .resize(sizes.favicon16, sizes.favicon16)
        .png()
        .toFile(path.join(outputPath, 'favicon-16x16.png')),

      // Favicon 32x32
      sharp(sourceBuffer)
        .resize(sizes.favicon32, sizes.favicon32)
        .png()
        .toFile(path.join(outputPath, 'favicon-32x32.png')),

      // Favicon 256x256
      sharp(sourceBuffer)
        .resize(sizes.favicon256, sizes.favicon256)
        .png()
        .toFile(path.join(outputPath, 'favicon-256x256.png')),

      // Apple Touch Icon 180x180
      sharp(sourceBuffer)
        .resize(sizes.appleIcon, sizes.appleIcon)
        .png()
        .toFile(path.join(outputPath, 'apple-touch-icon.png')),

      // Android Chrome Icon 192x192
      sharp(sourceBuffer)
        .resize(sizes.androidSmall, sizes.androidSmall)
        .png()
        .toFile(path.join(outputPath, 'android-chrome-192x192.png')),

      // Android Chrome Icon 512x512
      sharp(sourceBuffer)
        .resize(sizes.androidLarge, sizes.androidLarge)
        .png()
        .toFile(path.join(outputPath, 'android-chrome-512x512.png')),

      // Favicon ICO 256x256
      sharp(sourceBuffer)
        .resize(sizes.favicon256, sizes.favicon256)
        .png()
        .toBuffer()
        .then((buffer) =>
          fs.writeFile(path.join(outputPath, 'favicon.ico'), buffer)
        ),

      // Safari Pinned Tab SVG
      fs.copyFile(inputPath, path.join(outputPath, 'safari-pinned-tab.svg')),
    ])
    console.log('All favicons generated successfully!')
  } catch (error) {
    console.error('Error generating favicons:', error)
  }
}

// sizes.forEach(async (size) => {
//   const outputFilePath = path.join(outputDir, `favicon-${size}.png`)
//   try {
//     const svgBuffer = fs.readFileSync(inputPath)
//     const pngBuffer = await sharp(svgBuffer).resize(size, size).toBuffer()

//     await sharp(pngBuffer).toFile(outputFilePath)

//     console.log(`Favicon ${size}x${size} generated successfully!`)
//   } catch (error) {
//     console.error(`Error generating favicon ${size}x${size}:`, error)
//   }
// })

generateFavicons()
