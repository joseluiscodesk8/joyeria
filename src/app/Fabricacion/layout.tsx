import dynamic from "next/dynamic";
import { Inter } from "next/font/google";


import { MenuProvider } from '../../context/MenuContext';
import "../../styles/globals.scss";


const DynamicMenu = dynamic(() => import('../../components/Menu'));
const DynamicFooter = dynamic(() => import('../../components/Footer'));

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <MenuProvider><body className={inter.className}><DynamicMenu />{children} <DynamicFooter /></body></MenuProvider>
    </html>
  )
}
