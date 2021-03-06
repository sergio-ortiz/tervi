import Head from "next/head";
import Header from "/components/Header";
import Footer from "/components/Footer";

const Layout = ({ children }) => (
  <>
    <Head>
      <meta
        name="keywords"
        content="facility, custodian, porter, clean, cleaner, cleaning, janitorial, janitor, COVID-19, SARS-CoV-2, coronavirus, disinfect, disinfecting, sanitize, sanitizing, decontamination, decontaminate"
      />
      <title>Tervi | Janitorial Cleaning Services</title>
    </Head>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
