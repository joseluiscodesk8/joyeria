import { FaGem, FaHammer, FaRing, FaPhoneAlt } from 'react-icons/fa';
import { MdWatch } from 'react-icons/md';


import styles from '../styles/index.module.scss';
import { useMenu } from '../context/MenuContext';



const Servicios: React.FC = () => {

  const { menuOpen } = useMenu();

    const sections = [
    {
      icon: <FaGem />,
      title: 'Catálogo de Joyería',
      description: 'Explora nuestra amplia gama de joyas exclusivas y de alta calidad.',
    },
    {
      icon: <FaHammer />,
      title: 'Fabricación de Joyería',
      description: 'Personaliza tus joyas con nuestro servicio de fabricación a medida.',
    },
    {
      icon: <MdWatch />,
      title: 'Relojes',
      description: 'Encuentra el reloj perfecto para cualquier ocasión.',
    },
    {
      icon: <FaRing />,
      title: 'Joyería en Plata',
      description: 'Descubre nuestra colección de joyas de plata fina.',
    },
  ];

  return (
    <main className={`${styles.Servicios} ${menuOpen ? styles.menuAbierto : ""}`}>
      {sections.map((section, index) => (
        <section key={index}>
          <span>{section.icon}</span>
          <h3>{section.title}</h3>
          <p>{section.description}</p>
        </section>
      ))}
    </main>
  );
};

export default Servicios;
