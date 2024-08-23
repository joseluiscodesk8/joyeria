'use client'

import dynamic from "next/dynamic"

const DynamicService = dynamic(() => import('../../components/Servicios'));
const DynamicCadenas = dynamic(() => import('../../components/Cadenas'));

export default function Home() {
  return <DynamicService />
}
