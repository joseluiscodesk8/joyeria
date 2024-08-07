'use client';

import React, { useState } from 'react';
import dynamic from "next/dynamic";

const DynamicCadenas = dynamic(() => import('../../components/Cadenas'));
const DynamicAnillos = dynamic(() => import('../../components/Anillos'));
const DynamicPulseras = dynamic(() => import('../../components/Pulseras'));
const DynamicZarcillos = dynamic(() => import('../../components/Zarcillos'));

const CatalogoJoyas: React.FC = () => {
    const [selectedComponent, setSelectedComponent] = useState('Cadenas');

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
        <>
            <h1>Catálogo de Joyas</h1>
            <div>
                <button onClick={() => setSelectedComponent('Cadenas')}>Cadenas</button>
                <button onClick={() => setSelectedComponent('Anillos')}>Anillos</button>
                <button onClick={() => setSelectedComponent('Pulseras')}>Pulseras</button>
                <button onClick={() => setSelectedComponent('Zarcillos')}>Zarcillos</button>
            </div>
            {renderComponent()}
        </>
    )
}

export default CatalogoJoyas;