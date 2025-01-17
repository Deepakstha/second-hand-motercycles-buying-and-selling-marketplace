"use client";
import styles from "@/styles/pickYourRideSection.module.css";
const PickYourRideSection = () => {
  return (
    <section className="my-4">
      <div>
        <div className="my-8">
          <p className="text-2xl font-bold text-center">Pick your Ride</p>
        </div>
        <div>
          <div>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <img
                  className={styles.logo}
                  src="/logos/yamaha.png"
                  alt="img"
                />
              </li>
              <li className={styles.li}>
                <img className={styles.logo} src="/logos/honda.png" alt="img" />
              </li>
              <li className={styles.li}>
                <img className={styles.logo} src="/logos/ktm.png" alt="img" />
              </li>
              <li className={styles.li}>
                <img
                  className={styles.logo}
                  src="/logos/royalenfield.png"
                  alt="img"
                />
              </li>
              <li className={styles.li}>
                <img
                  className={styles.logo}
                  src="/logos/suzuki.png"
                  alt="img"
                />
              </li>
              <li className={styles.li}>
                <img
                  className={styles.logo}
                  src="/logos/aprilia.png"
                  alt="img"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickYourRideSection;
