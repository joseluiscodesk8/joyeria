'use client'

import dynamic from "next/dynamic";

const DynamicFabricacion = dynamic(() => import('../../components/Fabricacion'));

const Fabricaion: React.FC = () => {
    return <DynamicFabricacion  />
}

export default Fabricaion;