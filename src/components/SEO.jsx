import { Helmet } from "react-helmet-async";

// 1. Default config separated (clean architecture)
const DEFAULT_SEO = {
  title: "Eslam Ayman | Frontend React Developer",
  description:
    "Frontend React Developer specializing in React.js, JavaScript, Tailwind CSS, responsive web applications, and modern UI development.",
  keywords:
    "React Developer, Frontend Developer, JavaScript, React.js, Tailwind CSS, Portfolio, Eslam Ayman",
  image: "/profile.png",
  url: "https://eslam8078.is-a.dev",
  author: "Eslam Ayman",
  themeColor: "#0f172a",
};

export default function SEO(props) {
  const seo = { ...DEFAULT_SEO, ...props };

  return (
    <Helmet>
      {/* Basic */}
      <title>{seo.title}</title>
      <meta name="title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content={seo.author} />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content={seo.themeColor} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Portfolio" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {/* Canonical */}
      <link rel="canonical" href={seo.url} />
    </Helmet>
  );
}