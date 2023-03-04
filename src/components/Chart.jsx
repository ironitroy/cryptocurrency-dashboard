import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

const options = [
  { id: 1, label: "Bitcoin" },
  { id: 2, label: "Ethereum" },
  { id: 3, label: "Tether" },
  { id: 4, label: "BNB" },
];

const Chart = () => {
  const [cryptoIsOpen, setCryptoIsOpen] = useState(false);
  const [chartTypeIsOpen, setChartTypeIsOpen] = useState(false);
  const [selectedCryptos, setSelectedCryptos] = useState([]);
  const [selectedChartType, setSelectedChartType] = useState("Line");

  const cryptoToggleDropdown = () => {
    setCryptoIsOpen(!cryptoIsOpen);
  };

  const chartToggleDropdown = () => {
    setChartTypeIsOpen(!chartTypeIsOpen);
  };

  const handleOptionSelect = (optionId) => {
    if (selectedCryptos.includes(optionId)) {
      setSelectedCryptos(selectedCryptos.filter((id) => id !== optionId));
    } else {
      setSelectedCryptos([...selectedCryptos, optionId]);
    }
  };

  const handleChartType = (option) => {
    setSelectedChartType(option);
    setChartTypeIsOpen(false);
  };

  return (
    <div className="grid grid-cols-4 items-center">
      <div className="col-span-2 justify-center flex items-center p-8">
        <button className="bg-indigo-50 mx-1 rounded-md px-4 h-6  text-sm">
          1D
        </button>
        <button className="bg-indigo-50 mx-1 rounded-md px-4 h-6 text-sm">
          1W
        </button>
        <button className="bg-indigo-50 mx-1 rounded-md px-4 h-6 text-sm">
          1M
        </button>
        <button className="bg-indigo-50 mx-1 rounded-md px-4 h-6  text-sm">
          6M
        </button>
        <button className="bg-indigo-50 mx-1 rounded-md px-4 h-6  text-sm">
          1Y
        </button>
        <button className="bg-indigo-50 mx-1 rounded-md px-4 h-6 text-sm">
          {" "}
          <FaCalendarAlt className="h-3" />
        </button>
      </div>
      {/* Cryptocurrency Dropdown */}
      <div className="">
        <div className="relative inline-block w-full text-left">
          <div>
            <span className="rounded-lg w-full shadow-sm">
              <button
                type="button"
                className="inline-flex items-center h-9 justify-between w-full rounded-lg px-4 py-2 bg-indigo-50 text-sm font-medium text-gray-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
                onClick={cryptoToggleDropdown}
              >
                Cryptocurrency
                {cryptoIsOpen ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />}
              </button>
            </span>
          </div>

          {cryptoIsOpen && (
            <div className="origin-top absolute overflow-hidden mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <input
                className="px-2 pl-4 py-2 text-sm m-2 mx-auto block rounded-lg w-11/12 outline outline-1 outline-slate-400 hover:outline-indigo-500 hover:outline-offset-0"
                type="text"
                placeholder="Search coin"
              />
              {options.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  className={`${
                    selectedCryptos.includes(option.id)
                      ? "bg-indigo-50 text-gray-900"
                      : "text-gray-700"
                  } block w-full text-left px-4 py-2 text-sm leading-5 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900`}
                  role="menuitem"
                  onClick={() => handleOptionSelect(option.id)}
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      checked={selectedCryptos.includes(option.id)}
                      onChange={() => handleOptionSelect(option.id)}
                    />
                    <span className="ml-2">{option.label}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Cryptocurrency Dropdown */}

      {/* ChartType Dropdown */}

      <div className="">
        <div className="relative inline-block w-full text-left">
          <span className="rounded-lg flex justify-center w-full ">
            <button
              type="button"
              className="inline-flex h-9 bg-indigo-50 w-2/3 shadow-sm items-center justify-between  rounded-lg  px-4 py-2  text-sm font-medium text-gray-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
              onClick={chartToggleDropdown}
            >
              Chart type
              {chartTypeIsOpen ? (
                <BsFillCaretUpFill />
              ) : (
                <BsFillCaretDownFill />
              )}
            </button>
          </span>

          {chartTypeIsOpen && (
            <div className="flex justify-self-center">
              <div className="origin-top absolute left-0 mx-auto right-0 text-center mt-2 w-2/3 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <ul
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <li
                    onClick={() => handleChartType("line")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Line
                  </li>
                  <li
                    onClick={() => handleChartType("bar")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Bar
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* ChartType Dropdown */}
    </div>
  );
};

export default Chart;
