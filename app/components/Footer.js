import { FaSquareTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
    return(
        <div className="flex flex-col  w-full h-60 bg-gray-600 mt-10">
        <ul className="flex flex-row justify-evenly">
          <li className="p-4">
            <h1 className="font-bold text-xl mb-2"> More Info: </h1>
            <p>FAQ</p>
            <p>Rules</p>
            <p>Media</p>
          </li>
          <li className="p-4">
            <h1 className="font-bold text-xl mb-2"> Spread The Word: </h1>
            <div className="flex flex-row justify-evenly">

            <FaSquareTwitter size={29} />
            <FaFacebookSquare size={29} />
            <FaSquareInstagram size={29}/>
            </div>
          </li>
          <li className="flex justify-center items-center p-4 bg-white h-10 rounded-md mt-6">
            <a className="font-bold text-xl text-gray-600" href="/vacations">Join our mailing list</a>
            <IoMdMail className="ml-2 " size={24} color="gray" />
          </li>



        </ul>
        <p className="text-center text-sm">© 2021 Eric B Raffle. All rights reserved.</p>
        <p className="text-center text-sm"> Raffle subject to rules and regulations found on ericbraffle.com. If fewer than 67,000 tickets are sold the grand prize will become a $1,000,000 annuity paid monthly over 25 years or a one-time cash payout of $700,000. </p>
      </div>

    )

}

export default Footer;