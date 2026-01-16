import { Suspense } from 'react'
import Navbar from "@/app/(homepage)/Navbar/page"
import Header from '@/app/(homepage)/Header/page';
import Menu from '@/app/(homepage)/Menu/page';
import Footer from '@/app/(homepage)/Footer/page';

export default function Home() {
  return (
    <>
      {/* <Suspense fallback={<div className="h-16 bg-gray-100">Loading nav...</div>}>
        <Navbar/>
      </Suspense> */}
       <Suspense fallback={<div className="h-16 bg-gray-100">Loading nav...</div>}>
        <Header/>
      </Suspense>
      <Suspense fallback={<div className="h-16 ">Loading nav...</div>}>
        <Menu/>
      </Suspense>
       {/* <Suspense fallback={<div className="h-16">Loading nav...</div>}>
        <Footer/>
      </Suspense> */}

    </>
  );
}
