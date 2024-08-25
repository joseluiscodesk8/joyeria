'use client'

import dynamic from "next/dynamic"

const DynamicSlider = dynamic(() => import('../../components/Slider'));
const DynamicService = dynamic(() => import('../../components/Servicios'));


export default function Home() {
  return (
    <>
    <DynamicSlider />
    <DynamicService />
    </>
  )
}
