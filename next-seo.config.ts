const description =
  "Launch your own fully automated store with Snipcart, Printful, and Next.js";
const title = "IVES SWAG store";
const url = "https://iveshubproducts.vercel.app/";

const seo = {
  title,
  titleTemplate: "%s | IVES SWAG store",
  description,
  openGraph: {
    description,
    title,
    type: "website",
    url,
  },
  twitter: {
    handle: "@immutablehex",
    site: "@immutablehex",
  },
};

export { seo as defaultSEO, url as defaultUrl };
