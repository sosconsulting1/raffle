const NavBar = () => {
    return (
        <div className="flex flex-col items-center w-full bg-[#313231]">
        <ul className="flex flex-row">
          <li className="p-4">
            <a href="/thehouse">The House</a>
          </li>
          <li className="p-4">
            <a href="/Vehicles">Vehicles</a>

          </li>
          <li className="p-4">
            <a href="/vacations">Vacations</a>
          </li>
          <li className="p-4">
            <a href="/moreprizes">More Prizes</a>
          </li>
          <li className="p-4">
            <a href="/about">About</a>
          </li>
          <li className="p-4">
            <a href="/getyourtickets">Get Your tickets</a>
          </li>
          <li className="p-4">
            <a href="/contact">800.888.9898</a>
          </li>
        </ul>
      </div>
    );
    }

export default NavBar;