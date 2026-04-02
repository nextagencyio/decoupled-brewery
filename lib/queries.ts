// Tagged template that returns the query string
const gql = (strings: TemplateStringsArray, ...values: any[]) => strings.reduce((a, s, i) => a + s + (values[i] || ''), '')

export const GET_BEVERAGES = gql`
  query GetBeverages($first: Int = 20) {
    nodeBeverages(first: $first, sortKey: CREATED_AT) {
      nodes {
        id title path created { timestamp } changed { timestamp }
        ... on NodeBeverage { body { processed summary } style abv price seasonal image { url alt width height } }
      }
    }
  }
`

export const GET_EVENTS = gql`
  query GetEvents($first: Int = 10) {
    nodeEvents(first: $first, sortKey: CREATED_AT) {
      nodes {
        id title path created { timestamp } changed { timestamp }
        ... on NodeEvent { body { processed summary } eventDate location image { url alt width height } }
      }
    }
  }
`

export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id title path heroTitle heroSubtitle heroDescription { processed }
        featuresItems { ... on ParagraphFeatureItem { id title description { processed } icon } }
        ctaTitle ctaDescription { processed } ctaPrimary ctaSecondary
      }
    }
  }
`

export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage { id title body { processed } }
          ... on NodeBeverage { id title body { processed } style abv price seasonal image { url alt width height } }
          ... on NodeEvent { id title body { processed } eventDate location image { url alt width height } }
          ... on NodeHomepage { id title heroTitle heroSubtitle heroDescription { processed } featuresItems { ... on ParagraphFeatureItem { id title description { processed } icon } } ctaTitle ctaDescription { processed } ctaPrimary ctaSecondary }
        }
      }
    }
  }
`
