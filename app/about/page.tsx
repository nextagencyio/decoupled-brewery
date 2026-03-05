import Header from '../components/Header'
import Image from 'next/image'
import { Metadata } from 'next'
import { Droplets, Leaf, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Blackstone Brewing and our approach to craft beer.',
}

const principles = [
  {
    icon: Droplets,
    title: 'Craft Over Hype',
    text: 'We brew classic styles with modern precision, emphasizing balance, drinkability, and consistency in every batch.',
  },
  {
    icon: Leaf,
    title: 'Local Ingredients',
    text: 'Whenever possible, we source grain and hops from regional partners and rotate seasonal beers around local harvests.',
  },
  {
    icon: Award,
    title: 'Quality First',
    text: 'From cellar checks to small-batch experimentation, quality control drives every decision in our brewery.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary-950">
      <Header />
      <main className="pt-28 pb-16">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden border border-primary-800">
              <Image
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1600&q=80"
                alt="Blackstone Brewing taproom and bar"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/85 via-primary-950/50 to-transparent" />
            </div>
            <div className="bg-primary-900/60 border border-primary-800 rounded-2xl p-8 md:p-10">
              <p className="text-accent-400 uppercase tracking-[0.18em] text-xs font-semibold mb-4">Our Story</p>
              <h1 className="text-4xl md:text-5xl font-display font-light text-white mb-6">
                Built on good beer and better company.
              </h1>
              <p className="text-amber-200/80 text-lg leading-relaxed mb-5">
                Blackstone Brewing started with a simple goal: make honest craft beer that people actually want to drink pint after pint.
              </p>
              <p className="text-amber-200/70 leading-relaxed">
                What began as a small neighborhood brewhouse has grown into a full production brewery and community taproom, still guided by the same hands-on approach and obsession with flavor.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="grid md:grid-cols-3 gap-5">
            {principles.map((item) => {
              const Icon = item.icon
              return (
                <article key={item.title} className="bg-primary-900 border border-primary-800 rounded-xl p-6">
                  <div className="w-10 h-10 rounded-lg bg-accent-500/15 border border-accent-500/25 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-accent-400" />
                  </div>
                  <h2 className="text-xl font-semibold text-white mb-3">{item.title}</h2>
                  <p className="text-amber-200/70 leading-relaxed">{item.text}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-900 border border-primary-800 rounded-2xl p-8 md:p-10">
            <h2 className="text-3xl font-display font-light text-white mb-6">Visit the Taproom</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-amber-200/80">
              <div>
                <p className="text-accent-400 text-xs uppercase tracking-[0.18em] mb-2">Monday - Thursday</p>
                <p>3:00 PM - 10:00 PM</p>
              </div>
              <div>
                <p className="text-accent-400 text-xs uppercase tracking-[0.18em] mb-2">Friday</p>
                <p>12:00 PM - 11:00 PM</p>
              </div>
              <div>
                <p className="text-accent-400 text-xs uppercase tracking-[0.18em] mb-2">Saturday</p>
                <p>11:00 AM - 11:00 PM</p>
              </div>
              <div>
                <p className="text-accent-400 text-xs uppercase tracking-[0.18em] mb-2">Sunday</p>
                <p>11:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
