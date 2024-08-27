'use client'

import dynamic from "next/dynamic";

const DynamicRelojesYPlata = dynamic(() => import('../../components/RelojesYPlata'));

const RelojesYPlata: React.FC = () => {
    return <DynamicRelojesYPlata />
}

export default RelojesYPlata;