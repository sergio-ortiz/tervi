import Layout from "../components/Layout";
import DualImage from "../components/DualImage.js";
import styles from "../styles/Home.module.css";
import corona from "/public/corona.jpg";
import Carousel from "../components/Carousel";
import fs from "fs";
import path from "path";
import Image from "next/image";
import Prices from "../components/Prices";

export async function getStaticProps() {
  const images = fs.readdirSync(path.join("public", "carousel"));
  return { props: { images } };
}

const SanitationPage = ({ images }) => (
  <Layout
    hero={corona}
    mainHeading={"Welcome to TerminateVirus.\nDisinfect & Sanitize"}
    meta={
      "facility, custodian, porter, clean, cleaner, cleaning, janitorial, janitor, COVID-19, SARS-CoV-2, coronavirus, disinfect, disinfecting, sanitize, sanitizing, decontamination, decontaminate"
    }
    title={"TerminateVirus | COVID-19 Disinfecting Services"}
    extras={["prices"]}
  >
    <h1 className={styles.mainHeading}>
      <br />
    </h1>
    <main id="about" className={styles.main}>
      <div className={styles.container}>
        <h2 className={styles.subheading}>About</h2>
        <p className={styles.paragraph}>
          We are a facility disinfecting service provider.
        </p>
        <p className={styles.paragraph}>
          <strong>
            We are certified by ACE (Academy of Cleaning Experts) Infection
            Prevention Experts Bloodborne for Bloodborne Pathogens and other
            Infectious Diseases Cleaning, Decontamination, Disinfection and
            Sanitation certification OSHA.
            <a href="/certification.pdf" target="_blank">
              View Certification
            </a>
          </strong>
        </p>
        <p className={styles.paragraph}>
          TerminateVirus SARS-CoV-2, COVID-19 Having a disinfected and sanitized
          environment is every business priority. Together we will face this
          unparalleled global pandemic we find ourselves in, by keeping your
          home and workplace safe. Our certified professional staff will conduct
          decontamination of confirmed and non-confirmed sites disinfecting and
          sanitizing all high touch and open areas to reduce the risk of
          exposure and stop the spread of Coronavirus.
        </p>
        <div className={styles.imgDiv}>
          <Carousel images={images} />
        </div>
        <p className={styles.paragraph}>
          Open your company’s doors by showing employees and customers that your
          business is utilizing a professional disinfecting service provider to
          keep our community safe.
        </p>
        <p className={styles.paragraph}>
          We have 2 different types of disinfecting foggers, with each one
          having their own specific use. The Hudson FOG Electric Atomizer is
          used to disinfect open areas as well as warehouses. The GDAE10
          Electric Intelligent ULV Sprayer Fogger is used for offices
          disinfecting as well as stores, homes, cars, buses, and buildings.
        </p>
        <p className={styles.paragraph}>
          We use disinfectants approved by the CDC and the EPA to eliminate
          SARS-CoV-2.
        </p>
        <video
          className={styles.video}
          src="/terminateVirus.mp4"
          autoPlay
          playsInline
          muted
          loop
        ></video>
        <p className={styles.paragraph}>
          TerminateVirus now added the Premium Portable UV Surface and Air
          Sanitizer System This is a strong antimicrobial ultraviolet
          disinfection system that will treat all exposed areas and will
          eliminate Bacteria, Viruses, Corona Virus, Mold Spores.
        </p>
        <div className={styles.imgDiv}>
          <Image src="/uv.jpg" layout="fill" />
        </div>
        <p className={styles.paragraph}>
          It is recommended by the CDC disinfect frequently touched surfaces
          daily. This includes tables, doorknobs, light switches, countertops,
          handles, desks, phones, keyboards, toilets, faucets, and sinks. <br />
          <a
            href="https://www.cdc.gov/coronavirus/2019-ncov/community/disinfecting-building-facility.html"
            target="_blank"
            rel="noreferrer"
          >
            https://www.cdc.gov/coronavirus/2019-ncov/community/disinfecting-building-facility.html
          </a>
        </p>
        <p className={styles.paragraph}>
          "EPA has updated List N to include the types of surfaces products can
          be used on (e.g., hard or soft) and use sites (e.g., hospital,
          institutional or residential). Products that can be applied via
          fogging are now noted in the formulation column. This additional
          information will empower the public to choose products that are
          appropriate for their specific circumstances." <br />
          <a
            href="https://www.epa.gov/newsreleases/epa-continues-add-new-surface-disinfectant-products-list-n-effort-combat-covid-19
          "
            target="_blank"
            rel="noreferrer"
          >
            https://www.epa.gov/newsreleases/epa-continues-add-new-surface-disinfectant-products-list-n-effort-combat-covid-19
          </a>
        </p>
        <p className={styles.paragraph}>
          Other useful links <br />
          <a
            href="https://www.cdc.gov/coronavirus/2019-ncov/downloads/stop-the-spread-of-germs-11x17-en.pdf"
            target="_blank"
            rel="noreferrer"
          >
            https://www.cdc.gov/coronavirus/2019-ncov/downloads/stop-the-spread-of-germs-11x17-en.pdf
          </a>
          <br />
          <a
            href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention-H.pdf
          "
            target="_blank"
            rel="noreferrer"
          >
            https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention-H.pdf
          </a>
        </p>
      </div>
      <DualImage />
      <div id="prices" className={styles.spacer} />
      <Prices />
    </main>
  </Layout>
);

export default SanitationPage;
