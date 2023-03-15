import Head from "next/head";
import Header from "/components/Header";
import Footer from "/components/Footer";

const Layout = ({ children, hero, mainHeading, extras, meta, title }) => (
  <>
    <Head>
      <meta name="keywords" content={meta} />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
    <Header hero={hero} mainHeading={mainHeading} extras={extras} />
    {children}
    <Footer />
  </>
);

export default Layout;
