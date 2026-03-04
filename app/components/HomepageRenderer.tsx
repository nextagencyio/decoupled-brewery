'use client'

import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { GlassWater, Flame, Star, Calendar, MapPin, Award } from 'lucide-react'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const features = [
  { icon: GlassWater, title: 'Craft Brews', desc: '24 rotating taps of handcrafted beer' },
  { icon: Flame, title: 'Scratch Kitchen', desc: 'Wood-fired food paired with our beers' },
  { icon: Star, title: 'Award-Winning', desc: 'Multiple gold medals at national competitions' },
  { icon: Calendar, title: 'Live Events', desc: 'Music, trivia, and tastings every week' },
  { icon: MapPin, title: 'Taproom Tours', desc: 'Behind-the-scenes brewery experience' },
  { icon: Award, title: 'Private Events', desc: 'Host your celebration at our venue' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80&fit=crop', alt: 'Brewing Tanks' },
  { src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80&fit=crop', alt: 'Tap Room' },
  { src: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=600&q=80&fit=crop', alt: 'Craft Beer Flight' },
  { src: 'https://images.unsplash.com/photo-1532634993-15f421e42ec0?w=600&q=80&fit=crop', alt: 'Brewing Process' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-primary-950">
      <Header />

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Features Showcase */}
      <section className="py-20 bg-primary-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-accent-400 to-transparent" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-light text-white mb-4 uppercase tracking-wide">The Blackstone Experience</h2>
            <p className="text-amber-200/60 max-w-2xl mx-auto">More than a brewery - a gathering place for craft beer lovers</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {features.map((item) => (
              <div key={item.title} className="text-center group">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full border border-primary-700 group-hover:border-accent-500/50 flex items-center justify-center transition-colors">
                  <item.icon className="w-6 h-6 text-accent-400" />
                </div>
                <h3 className="text-white font-medium mb-1">{item.title}</h3>
                <p className="text-sm text-amber-200/40">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-primary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-light text-white mb-4 uppercase tracking-wide">Gallery</h2>
            <p className="text-amber-200/60">A glimpse into the Blackstone experience</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryImages.map((img) => (
              <div key={img.alt} className="relative aspect-[4/3] overflow-hidden group">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary-950/20 group-hover:bg-primary-950/0 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-primary-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-sm font-light">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      <footer className="bg-primary-950 border-t border-primary-800/50 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="font-display text-2xl text-white mb-4 tracking-wide uppercase">Blackstone Brewing</h3>
              <p className="text-amber-200/40 text-sm leading-relaxed max-w-sm">
                Small-batch craft brewery and taproom. Brewed with purpose, served with pride since 2015. Located in the heart of downtown.
              </p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-accent-400 mb-4 font-medium">Explore</h4>
              <nav className="flex flex-col gap-2">
                <a href="/beers" className="text-sm text-amber-200/50 hover:text-white transition-colors">Beverages</a>
                <a href="/events" className="text-sm text-amber-200/50 hover:text-white transition-colors">Events</a>
                <a href="/about" className="text-sm text-amber-200/50 hover:text-white transition-colors">About</a>
              </nav>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-accent-400 mb-4 font-medium">Contact</h4>
              <div className="text-sm text-amber-200/50 space-y-2">
                <p>456 Hop Street</p>
                <p>Portland, OR 97201</p>
                <p className="text-accent-400">(555) 876-5432</p>
                <p>cheers@blackstonebrewing.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-800/50 pt-8 text-center text-xs text-amber-200/30">
            <p>&copy; {new Date().getFullYear()} Blackstone Brewing Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
