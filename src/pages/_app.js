import { DefaultSeo } from "next-seo";
import '../styles/global.css';

import "tailwindcss/tailwind.css";
import "../styles/app.css";

import { defaultSEO } from "../../next-seo.config";
import { WishlistProvider } from "../context/wishlist";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <WishlistProvider>
      <Layout>
        <DefaultSeo {...defaultSEO} />
        <Component {...pageProps} />
      </Layout>
    </WishlistProvider>
  );
}

export default MyApp;
