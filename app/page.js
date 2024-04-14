'use client';
import Footer from "./components/Footer";
import AboutHouseBenifits from "./components/AboutHouseBenifits";
import TicketPrice from "./components/TicketPrice";
import Image from "next/image";
import Countdown from "./components/CountDown";
import CarousalComponent from "./components/CarousalComponent";
import NavBar from "./components/NavBar";

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* NavBar */}
     <NavBar/>

      {/* Leading Title & Timer */}
      <div className="flex flex-row items-center justify-evenly w-full h-40  ">
        <h1 className="text-4xl text-[#085da0]">Eric B Raffle</h1>
        <Countdown />
      </div>

      {/* Carousal */}

 <CarousalComponent />

      {/* Chance of winning */}

      <div className="flex flex-row w-full h-60 bg-gray-500 mt-10">
        <Image style={{ width: '100%', height: 'auto' }} src="/OddsBar.png" alt="Special Olympics Southern California" width={0} height={0} sizes="100vw" layout="full" />
      </div>

      {/* Aditional Drawings */}
      <div className="flex flex-col justify-center items-center bg-gray-100 w-full ">
        <h1 className="text-4xl font-bold text-[#085da0] mt-12"> Additional Drawings </h1>
        <div className="flex flex-row bg-gray-100 mt-6 ">
          <Image className="m-4" src="/car1.jpg" alt="yellow car" width={300} height={600} />
          <Image className="m-4"  src="/car1.jpg" alt="yellow car" width={300} height={600} />
          <Image className="m-4" src="/IconAddOn.jpg" alt="yellow car" width={300} height={600} />

        </div>
      </div>



      {/* Ticket Price */}
      <TicketPrice />

      <AboutHouseBenifits />

      <Footer />


    </main>
  );
}
