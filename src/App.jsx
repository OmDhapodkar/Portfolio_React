import styles from "./style";
import {
  Navbar,
  Stats,
  Footer,
  Hero,
  Experience,
  CardDeal,
  Feedback,
  TopBack,
  SideNav,
} from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Experience />
          <CardDeal />
          <Feedback />
        </div>
      </div>
      <Footer />
      <TopBack />
      <SideNav />
    </div>
  );
};

export default App;
