import Image from "next/image";
import styles from "../styles/index.module.scss";

const Logo: React.FC = () => {
  return (
    <picture className={styles.Logo}>
      <Image src="/jewerly2.png" width={250} height={150} alt="logo" />
    </picture>
  );
};

export default Logo;
