import Image from "next/image";


const AboutHouseBenifits = () => {
    return (
     <>
   {/* About the dream house */}
   <div className="flex flex-row w-full h-60 mt-10 justify-evenly items-basline">
        <Image src="/house.jpg" alt="Special Olympics Southern California" width={300} height={400} />
        <div className="w-80">
          <h1 className="text-xl font-bold text-gray-600"> About the Dream House</h1>
          <p className="text-gray-600">
          Imagine this as your new home! Step into this exquisite custom-built, 5,000 square foot home nestled in the exclusive Calabasas community of The Oaks. This coastal inspired Mediterranean residence is an architectural masterpiece featuring six bedrooms, seven bathrooms, hardwood walnut floors, a chef’s kitchen built with custom cabinetry. 
          </p>

        </div>
      </div>

      {/* Benefiting SO */}
      <div className="flex flex-row w-full h-60 mt-10 justify-evenly items-basline">
        <Image src="/happy.jpg" alt="Special Olympics Southern California" width={300} height={400} />
        <div className="w-80">
          <h1 className="text-xl font-bold text-gray-600"> Benefiting The Community</h1>
          <p className="text-gray-600">
            All proceeds from the Eric B Raffle benefit the community. The Eric B Raffle enriches the lives of tens of thousands of people and their communities through sports, leadership programs, and athlete wellness.
          </p>

        </div>
      </div>

     </>
    );
    }

    export default AboutHouseBenifits;