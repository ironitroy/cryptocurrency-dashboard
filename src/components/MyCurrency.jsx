import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCurrency, getCoinsByMarket } from "../redux/actions";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

const MyCurrency = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("USD");
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    dispatch(updateCurrency(option));
    dispatch(getCoinsByMarket(option));
  };

  return (
    <>
      <div className="relative inline-block w-full text-left">
        <div>
          <span className="rounded-lg w-full shadow-sm">
            <button
              type="button"
              className="inline-flex items-center h-12 justify-between w-full rounded-lg border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
              onClick={toggleDropdown}
            >
              {selectedOption}
              {isOpen ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />}
            </button>
          </span>
        </div>

        {isOpen && (
          <div className="origin-top-right absolute text-center right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <ul
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <li
                onClick={() => handleOptionClick("USD")}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                USD
              </li>
              <li
                onClick={() => handleOptionClick("INR")}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                INR
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
export default MyCurrency;
