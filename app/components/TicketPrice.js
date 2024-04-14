const TicketPrice = () => {
   
    return (
        <div className="flex flex-row w-full h-60 bg-gray-600 mt-10">
        <div className="flex flex-col justify-center items-center w-1/2">
          <h1 className="text-2xl font-bold text-white"> Ticket Price: $150 </h1>
          <p className="text-white"> Discounts are available for 3-packs and 5-packs.  </p> 
          <p className="text-sm mt-4 text-center">Raffle subject to rules and regulations. If fewer than 67,000 tickets are sold the grand prize will become a $1,000,000 annuity paid monthly over 25 years, or a one-time cash payout of $700,000.</p>
          </div>
          <div className="flex justify-center items-center w-1/2">

          <button className="bg-blue-600 text-white font-bold text-xl rounded-md p-2 h-20 w-40"> Get Your Tickets </button> 
          </div>
      </div>
    )
    };

export default TicketPrice;