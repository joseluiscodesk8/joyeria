import Image from "next/image";
import styles from "../styles/index.module.scss";

const Logo: React.FC = () => {
  return (
    <picture className={styles.Logo}>
      <Image src="/joyeria.png" width={400} height={150} alt="logo" />
    </picture>
  );
};

export default Logo;
