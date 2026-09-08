import { Helmet } from "react-helmet-async";

const DEFAULT_SEO = {
  title: "Eslam Ayman | Full-Stack Web Developer",
  description:
    "Eslam Ayman is a Full-Stack Web Developer specializing in Angular, React.js, Node.js, Express.js, MongoDB, REST APIs, and modern responsive web applications.",
  keywords:
    "Eslam Ayman, Full-Stack Developer, MERN, MEAN, Angular, React.js, Node.js, Express.js, MongoDB, JavaScript, TypeScript",
  image: "/profile.png",
  author: "Eslam Ayman",
  themeColor: "#0f172a",
};

export default function SEO(props) {
  const seo = { ...DEFAULT_SEO, ...props };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content={seo.author} />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content={seo.themeColor} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Eslam Ayman Portfolio" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  );
}
