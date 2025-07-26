// components/common/SEO.tsx
import Head from "next/head";
import { useRouter } from "next/router";

type Props = {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: string;
};

const defaultMeta = {
  type: "website",
  image: "/images/og-default.jpg",
};

export const SEO = ({
  title,
  description,
  canonical,
  image = defaultMeta.image,
  type = defaultMeta.type,
}: Props) => {
  const { asPath } = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://biosmile.ma";
  const url = canonical || `${baseUrl}${asPath}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${baseUrl}${image}`} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${image}`} />
    </Head>
  );
};
