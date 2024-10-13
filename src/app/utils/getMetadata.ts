import { META } from '@/app/constants/metadata';

export interface metadataProps {
    title: string;
    asPath: string;
}

export const getMetadata = (metadataProps?: metadataProps) => {
  const { title, asPath } = metadataProps || {};

  const TITLE = title ? `${title} | 라인업지` : META.title;
  const PAGE_URL = asPath ? `${META.url}${asPath}` : META.url;

  return {
    metadataBase: new URL(META.url),
    alternates: { canonical: PAGE_URL },
    title: TITLE,
    description: META.description,
    keywords: [...META.keyword],
    openGraph: {
      title: TITLE,
      description: META.description,
      locale: 'ko_KR',
      type: 'website',
      url: PAGE_URL,
    },
  };
};