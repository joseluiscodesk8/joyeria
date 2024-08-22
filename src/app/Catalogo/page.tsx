'use client';

import { useState, useEffect } from 'react';
import dynamic from "next/dynamic";
import { useMenu } from '../../context/MenuContext';
import { motion } from 'framer-motion';
import styles from '../../styles/index.module.scss';

const DynamicCadenas = dynamic(() => import('../../components/Cadenas'));
const DynamicAnillos = dynamic(() => import('../../components/Anillos'));
const DynamicPulseras = dynamic(() => import('../../components/Pulseras'));
const DynamicZarcillos = dynamic(() => import('../../components/Zarcillos'));

const CatalogoJoyas: React.FC = () => {
    const [selectedComponent, setSelectedComponent] = useState('Cadenas');
    const { menuOpen } = useMenu(); 

    const renderComponent = () => {
        switch (selectedComponent) {
            case 'Anillos':
                return <DynamicAnillos />;
            case 'Pulseras':
                return <DynamicPulseras />;
            case 'Zarcillos':
                return <DynamicZarcillos />;
            default:
                return <DynamicCadenas />;
        }
    }

    const buttonVariants = {
        focused: { 
            boxShadow: 'inset 0 5px 20px rgba(0, 0, 0, 0.5)',
            transition: { duration: 0.3 }
        },
        unfocused: { 
            boxShadow: 'inset 0 0 5px rgba(0, 0, 0, 0.2)',
            transition: { duration: 0.3 }
        }
    };

    return (
        <main className={`${styles.main} ${menuOpen ? styles.menuAbierto : ''}`}>
            <h1>Catálogo de Joyas</h1>
            <section className={styles.buttonsContainer}>
                {['Cadenas', 'Anillos', 'Pulseras', 'Zarcillos'].map((item) => (
                    <motion.button
                        key={item}
                        onClick={() => setSelectedComponent(item)}
                        variants={buttonVariants}
                        initial={selectedComponent === item ? "focused" : "unfocused"}
                        animate={selectedComponent === item ? "focused" : "unfocused"}
                        whileTap={{ scale: .9 }}
                    >
                        {item}
                    </motion.button>
                ))}
            </section>
            {renderComponent()}
        </main>
    );
}

export default CatalogoJoyas;
