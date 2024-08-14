import dynamic from "next/dynamic"

const DynamicService = dynamic(() => import('../../components/Servicios'));

export default function Home() {
  return <DynamicService />
}
