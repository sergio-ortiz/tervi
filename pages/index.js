import Layout from "../components/Layout";
import ListBlock from "../components/ListBlock";
import styles from "../styles/Home.module.css";
import brilliantOffice from "../assets/sharp_brilliant_office.jpg";
import bankStaff from "../assets/bank_staff.jpg";
import elevatorBuilding from "../assets/elevator_building.jpg";
import terviTeam from "../assets/tervi_team.jpg";
import floorCare from "../assets/floor_care.jpg";
import officeMop from "../assets/office_mop.jpg";
import powerWash from "../assets/power_wash.jpg";

const HomePage = () => (
  <Layout
    hero={brilliantOffice}
    mainHeading={
      "Tervi strives to be your 5-star rating Professional Janitorial service provider."
    }
    meta={
      "facility, custodian, porter, clean, cleaner, cleaning, janitorial, janitor, COVID-19, SARS-CoV-2, coronavirus, disinfect, disinfecting, sanitize, sanitizing, decontamination, decontaminate"
    }
    title={"Tervi | Janitorial Cleaning Services"}
    extras={[]}
  >
    <div id="about" className={styles.container}>
      <div class={styles.spacer}></div>
      <ListBlock
        order={2}
        imageSrc={bankStaff}
        heading={"Our Work"}
        listItems={[
          "Tervi is a new reliable, ambitious company that is ready to make your life easier. We have trained, fully vaccinated, and reliable cleaners.",
          "Deliverables and Milestones Inspections and Reports.",
          "Cleaner coverage 100% insured. Always have backup cleaners.",
          "We conduct background checks on every employee hired.",
          "We have Commercial Janitorial / Cleaning and Disinfecting certifications",
          "Our employees go through periodic trainings on safety and janitorial work, OSHA",
        ]}
      />
      <ListBlock
        order={1}
        imageSrc={elevatorBuilding}
        heading={"Work compliance"}
        listItems={[
          "Tervi delivers a great reliable cleaning performance. ",
          "All of our cleaners have gone through training, background checks, and have been personally interviewed to ensure we bring the highest standards of cleaning.",
          "Small Business that focuses on Compliance Corporate Social Responsibility",
          "Low Fees compared to other companies",
          "Policies and procedures",
          "Deep Cleaning, Commercial Janitorial, and Maintenance",
        ]}
      />
      <ListBlock
        order={2}
        imageSrc={terviTeam}
        heading={"Why We Are better"}
        listItems={[
          "As a Small local business, we help the community",
          "Low Fees give us the competitive advantage over bigger companies.",
          "Large cleaning companies subcontract us, to the work you hired them for.",
          "Our Customer Approach offers more customized and personalized service.",
          "In addition to the scope of service, we are active listeners, flexible, creative, passionate, and adaptable.",
          "Level of Care to the highest degree as we want a perfect image.",
        ]}
      />
      <ListBlock
        order={1}
        imageSrc={floorCare}
        heading={"Where We Work"}
        listItems={[
          "Auto Dealerships, Apt/Office Buildings, Medical Facilities, Retail Stores, Education Facilities, Hospitals, Manufacturing Facilities, Factories, Restaurants, Fitness Centers, Social Ventures, Theaters, Clinics, Parks (maybe recreational), Theaters, Museums, Churches, Hotels, …etc.",
        ]}
      />
      <ListBlock
        order={2}
        imageSrc={officeMop}
        heading={"Customer Benefits"}
        listItems={[
          "We conduct inspections to check in with the janitors to make sure everything is up to your expectations.",
          "Regular follow-ups to ensure you’re satisfied (can offer in person or over the phone) How can we improve",
          "Always have backup cleaners ready at our disposal.",
          "Our overall goal is to make sure our customers are extremely satisfied",
        ]}
      />
      <ListBlock
        order={1}
        imageSrc={powerWash}
        heading={"Commercial Janitorial Cleaning"}
        listItems={[
          "All of our cleaners have gone through training, background checks, and have been personally interviewed to ensure we bring the highest standards of cleaning.",
          "Our exceptional customer service team is ready to assist you and to answer any questions you may have.",
          "We take into consideration that each location has to be up to the highest standard of professionalism for the benefit of your customers and employees and we’ll give it an exceptional cleaning to maintain that standard.",
        ]}
      />
    </div>
  </Layout>
);

export default HomePage;
