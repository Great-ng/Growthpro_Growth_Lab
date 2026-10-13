import { Helmet } from 'react-helmet-async';

interface MetaProps {
  title: string;
  description: string;
}

export default function Meta({ title, description }: MetaProps) {
  const pageTitle = `${title} | Growthpro Solutions`;
  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}
