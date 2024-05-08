import styles from "@/styles/Accueil.module.css";
import Button from "@/components/Button";
import Image from "next/image";
import portrait from "@/public/assets/portrait.jpg";


function Accueil() {
  return (
      <div className={styles.homeContainer}>
          <div className={styles.textContent}>
              <div className={styles.title}>
                  Hi! <br /> I'm <a className={styles.name}>Nooman</a> <br /> Web Developer
              </div>
              <div className={styles.btnDiv}>
                  <Button />
              </div>
          </div>
          <div className={styles.photo}>
              <Image src={portrait} alt="John's Portrait" width={300} height={300} />
          </div>
      </div>
  );
}


export default Accueil;
