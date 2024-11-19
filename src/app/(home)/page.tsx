'use client'

import { NextPage } from "next";
import dynamic from "next/dynamic";

const DynamicLogo = dynamic(() => import('../../components/Logo'));
const DynamicCatalogo = dynamic(() => import('../../components/Catalogo'));

const Home:NextPage = () => {
  return <>
  <DynamicLogo />
    <DynamicCatalogo />
  </>
}

export default Home;