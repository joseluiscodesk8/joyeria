import dynamic from "next/dynamic";

const DynamicMenu = dynamic(() => import('../../components/Menu'));

export default function Home() {
  return (
    <DynamicMenu/>
  );
}
