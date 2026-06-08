import { Helmet } from 'react-helmet'

type MetaProps = {
  title: string;
  description: string;
  url: string;
  image: string;
}

const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Oluwatobi Akinola',
  url: 'https://oluwatobiakinola.tech',
  jobTitle: 'Full Stack Engineer',
  description: 'Full Stack Engineer specialising in production-grade Node.js/TypeScript backends, cloud-native architectures on AWS and Azure, and responsive React interfaces across fintech, healthtech, and SaaS.',
  sameAs: [
    'https://github.com/itsoluwatobby',
    'https://linkedin.com/in/oluwatobi-akinola',
  ],
  knowsAbout: ['Node.js', 'TypeScript', 'React', 'PostgreSQL', 'AWS', 'Azure', 'Fintech', 'Healthtech', 'SaaS'],
}

export const MetaTags = ({ title, description, url, image }: MetaProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Oluwatobi Akinola" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />

      {/* Twitter / X Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@itsoluwatobby" />
      <meta name="twitter:creator" content="@itsoluwatobby" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(PERSON_SCHEMA)}</script>
    </Helmet>
  )
}
