import { getClient } from '@/lib/drupal-client'
import { GET_HOMEPAGE_DATA } from '@/lib/queries'
import HomepageRenderer from './components/HomepageRenderer'
import SetupGuide from './components/SetupGuide'
import ContentSetupGuide from './components/ContentSetupGuide'
import { Metadata } from 'next'
import { checkConfiguration } from '../lib/config-check'

// Enable ISR with 1 hour revalidation
export const revalidate = 3600
export const dynamic = 'force-dynamic'


export async function generateMetadata(): Promise<Metadata> {
  const title = 'Blackstone Brewing Co. - Craft Beer, Brewed with Purpose'
  const description = 'Small-batch craft brewery and taproom featuring handcrafted beers on tap, brewery tours, live events, and a scratch kitchen.'

  return {
    title,
    description,
    keywords: ['craft brewery', 'taproom', 'craft beer', 'IPA', 'stout', 'lager', 'brewery tours', 'beer events'],
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default async function Home() {
  const configStatus = checkConfiguration()

  if (!configStatus.isConfigured) {
    return <SetupGuide missingVars={configStatus.missingVars} />
  }

  const client = getClient()

  let homepageContent: any = null
  try {
    const result = await client.raw(GET_HOMEPAGE_DATA) as any
    homepageContent = result?.nodeHomepages?.nodes?.[0] ?? null
  } catch (e) {
    console.error('Error fetching homepage:', e)
  }

  if (!homepageContent) {
    const drupalBaseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL
    return <ContentSetupGuide drupalBaseUrl={drupalBaseUrl} />
  }

  return <HomepageRenderer homepageContent={homepageContent} />
}
