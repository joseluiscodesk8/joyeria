import dynamic from "next/dynamic"

const DynamicService = dynamic(() => import('../../components/Services'));

export default function Home() {
  return <DynamicService />
}
