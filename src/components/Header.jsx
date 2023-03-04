// This is the header Component
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div className="shadow-md w-full  fixed top-0 left-0 z-10">
      <div className="md:flex bg-white py-4 px-14 ">
        <div className="font-bold text-xl cursor-pointer flex items-center font-Poppins text-gray-600">
          <span>
            <CurrencyDollarIcon className="h-10 w-10 text-indigo-500" />
          </span>
          igma<span className="text-indigo-600">C</span>rypto
        </div>
      </div>
    </div>
  );
};

export default Header;
