import { FloatingShapesBackground } from '@/components/background/floating-shapes-background'
import { MovingDotsBackground } from '@/components/background/moving-dots-background'
import { GlitchButton } from '@/components/button/glitch-button'
import { MagneticButton } from '@/components/button/magnetic-button'
import { ParticleBurstButton } from '@/components/button/particle-burst-button'
import { PulseButton } from '@/components/button/pulse-button'
import { RippleButton } from '@/components/button/ripple-button'
import { ComponentWrapper } from '@/components/component-wrapper'
import { FeatureSection } from '@/components/sections/feature'
import { HeroSection } from '@/components/sections/hero'
import { GlitchEffectText } from '@/components/text/glitch-effect-text'
import { GradientWaveText } from '@/components/text/gradient-wave-text'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center space-y-6 text-center">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Grid */}
      <FeatureSection />

      {/* Text Animation Components Preview */}
      <div className="p-8">
        <div className="mx-auto max-w-6xl rounded-xl bg-white/10 p-8 shadow-2xl backdrop-blur-md">
          <h1 className="mb-12 text-center text-5xl font-bold text-purple-400">
            Text Animations
          </h1>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <ComponentWrapper title="Glitch Effect">
              <GlitchEffectText
                text="Glitch"
                glitchDirection="horizontal"
                glitchSpeed={0.5}
                className="hover:blur-[1px]"
              />
            </ComponentWrapper>
            <ComponentWrapper title="Glitch Effect">
              <GlitchEffectText
                text="Glitch"
                glitchDirection="vertical"
                glitchSpeed={1}
                textShadow="0 0 10px rgba(255, 0, 0, 1), 0 0 20px rgba(255, 0, 0, 0.8)"
              />
            </ComponentWrapper>
            <ComponentWrapper title="Radial Gradient">
              <GradientWaveText
                text="Radial Gradient"
                gradientType="radial"
                theme="ocean"
              />
            </ComponentWrapper>
            <ComponentWrapper title="Custom Easing">
              <GradientWaveText
                text="Ease In Out"
                easing="easeInOut"
                theme="forest"
                duration={3}
              />
            </ComponentWrapper>
          </div>
        </div>
      </div>

      {/* Button Animation Components Preview */}
      <div className="p-8">
        <div className="mx-auto max-w-6xl rounded-xl bg-white/10 p-8 shadow-2xl backdrop-blur-md">
          <h1 className="mb-12 text-center text-5xl font-bold text-purple-400">
            Button Animations
          </h1>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <ComponentWrapper title="Magnetic Button">
              <MagneticButton className="bg-teal-500 hover:bg-teal-500/90">
                Hover to attract
              </MagneticButton>
            </ComponentWrapper>
            <ComponentWrapper title="Ripple Button">
              <RippleButton className="bg-orange-500">
                Click me for ripple
              </RippleButton>
            </ComponentWrapper>
            <ComponentWrapper title="Glitch Button">
              <GlitchButton className="bg-cyan-500">
                Hover for glitch
              </GlitchButton>
            </ComponentWrapper>
            <ComponentWrapper title="Pulse Button">
              <PulseButton className="bg-rose-500">Hover to pulse</PulseButton>
            </ComponentWrapper>
            <ComponentWrapper title="Particle Burst Button">
              <ParticleBurstButton className="bg-fuchsia-500">
                Click for particles
              </ParticleBurstButton>
            </ComponentWrapper>
          </div>
        </div>
      </div>

      {/* Background Animation Components Preview */}
      <div className="p-8">
        <div className="mx-auto max-w-6xl rounded-xl bg-white/10 p-8 shadow-2xl backdrop-blur-md">
          <h1 className="mb-12 text-center text-5xl font-bold text-purple-400">
            Background Animations
          </h1>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-1">
            <ComponentWrapper title="Floating Shapes Background">
              <div className="relative h-[496px] w-full overflow-hidden">
                <FloatingShapesBackground />
              </div>
            </ComponentWrapper>
            <ComponentWrapper title="Moving Dots Background">
              <div className="relative h-[496px] w-full overflow-hidden">
                <MovingDotsBackground />
              </div>
            </ComponentWrapper>
          </div>
        </div>
      </div>
    </div>
  )
}
