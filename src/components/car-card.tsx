import { Car } from "src/shared/car";
import Image from "next/image";
import styles from "./car-card.module.css";

export const CarCard = ({ car }: { car: Car }) => {
  return (
    <div className={styles.card}>
      <span className={styles.subtitle}>{car.bodyType}</span>
      <br />
      <strong>{car.modelName}</strong>
      <br />
      {car.modelType}
      <br />
      <Image src={car.imageUrl} alt={car.modelName} width={290} height={220} />
      <br />
      <div className={styles.cardLinks}>
        <a href={`/learn/${car.id}`} className={styles.cardLink}>
          LEARN &#62;
        </a>
        <a href={`/shop/${car.id}`} className={styles.cardLink}>
          SHOP &#62;
        </a>
      </div>
    </div>
  );
};
