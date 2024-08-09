'use client';

import { useState } from 'react';
import dynamic from "next/dynamic";
import { useMenu } from '../../context/MenuContext';
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

    return (
        <main className={`${styles.main} ${menuOpen ? styles.menuAbierto : ''}`}>
            <h1>Catálogo de Joyas</h1>
            <section className={styles.buttonsContainer}>
                <button onClick={() => setSelectedComponent('Cadenas')}>Cadenas</button>
                <button onClick={() => setSelectedComponent('Anillos')}>Anillos</button>
                <button onClick={() => setSelectedComponent('Pulseras')}>Pulseras</button>
                <button onClick={() => setSelectedComponent('Zarcillos')}>Zarcillos</button>
            </section>
            {renderComponent()}
        </main>
    );
}

export default CatalogoJoyas;
