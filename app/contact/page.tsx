import Header from '../components/Header'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Blackstone Brewing for taproom hours, private events, and brewery tours.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-primary-950">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-accent-400 uppercase tracking-[0.18em] text-xs font-semibold mb-3">Contact</p>
            <h1 className="text-4xl md:text-5xl font-display font-light text-white mb-4">Let&apos;s talk beer.</h1>
            <p className="text-amber-200/70 text-lg">
              Questions about hours, private events, or tours? Reach out and our taproom team will get back to you.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            <section className="lg:col-span-2 bg-primary-900 border border-primary-800 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">Taproom Info</h2>
              <div className="space-y-6 text-amber-200/80">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-accent-400 mt-0.5" />
                  <div>
                    <p className="text-white font-medium mb-1">Email</p>
                    <p>hello@blackstonebrewing.com</p>
                    <p>events@blackstonebrewing.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent-400 mt-0.5" />
                  <div>
                    <p className="text-white font-medium mb-1">Phone</p>
                    <p>(555) 789-0123</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent-400 mt-0.5" />
                  <div>
                    <p className="text-white font-medium mb-1">Address</p>
                    <p>800 Barrel Lane</p>
                    <p>Denver, CO 80202</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent-400 mt-0.5" />
                  <div>
                    <p className="text-white font-medium mb-1">Taproom Hours</p>
                    <p>Mon-Thu: 3 PM - 10 PM</p>
                    <p>Fri: 12 PM - 11 PM</p>
                    <p>Sat: 11 AM - 11 PM</p>
                    <p>Sun: 11 AM - 8 PM</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="lg:col-span-3 bg-primary-900 border border-primary-800 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">Send a Message</h2>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    className="w-full bg-primary-950 border border-primary-700 text-amber-100 placeholder:text-amber-200/40 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-500/50"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    className="w-full bg-primary-950 border border-primary-700 text-amber-100 placeholder:text-amber-200/40 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-500/50"
                    required
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="w-full bg-primary-950 border border-primary-700 text-amber-100 placeholder:text-amber-200/40 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-500/50"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full bg-primary-950 border border-primary-700 text-amber-100 placeholder:text-amber-200/40 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-500/50"
                  required
                />
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell us how we can help..."
                  className="w-full bg-primary-950 border border-primary-700 text-amber-100 placeholder:text-amber-200/40 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-500/50"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-accent-500 hover:bg-accent-400 text-primary-950 font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
