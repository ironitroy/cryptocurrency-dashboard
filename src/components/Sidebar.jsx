import React, { useEffect } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { getCoinsByMarket } from '../redux/actions';


function Sidebar() {

  const dispatch = useDispatch();
  const coins = useSelector(state => state.coins);
  const currency = useSelector(state => state.currency);

  useEffect(() => {
    dispatch(getCoinsByMarket(),);
  }, [dispatch]);

  const currencyFormatter = new Intl.NumberFormat('en-US' , { style: 'currency',
  currency: `${currency}`,
  });
  
  return (
    <div>
      <div className="px-8 pt-6 pb-3 font-Poppins text-xl font-medium rounded-lg bg-white h-[40rem]">
        Cryptocurrency by <br />
        market cap
        <div className="h-5/6 mt-4 scrollbar-hide overflow-y-auto">
          <div>
            {/* using map function */}

            {coins.map((coin) => (
                <div key={coin.id}>
                  <div className=" grid grid-cols-5 md:grid-cols-8 font-light p-2 border-gray-200 border-b hover:bg-gray-100 py-4 ">
                    <div className="col-span-5">
                      <div className="flex items-center gap-3">
                        <img
                          className=" text-center w-6"
                          src={coin.image}
                          alt={coin.name}
                        />

                        <div className="w-50%">
                          <p className=" flex text-base font-medium">
                            {coin.name}
                          </p>

                          <p className="text-left text-xs font-normal text-gray-500">
                            Mkt.Cap {currencyFormatter.format(coin.market_cap).slice(0, -3)}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" grid justify-end self-center">
                        <span
                          className={`flex text-center font-normal gap-4  ${
                            coin.price_change_percentage_24h < 0
                              ? "text-red-600"
                              : "text-green-600"
                          }`}
                        >
                          {coin.price_change_percentage_24h < 0 ? (
                            <FaCaretDown />
                          ) : (
                            <FaCaretUp />
                          )}
                        </span>
                    </div>
                    <div className={`col-span-2 self-center pr-2 justify-end text-center font-normal text-xs gap-4 
                    ${
                      coin.price_change_percentage_24h < 0
                              ? "text-red-600"
                              : "text-green-600"
                          }`}>
                      {coin.price_change_percentage_24h.toFixed(3)} %
                    </div>
                  </div>
                </div>
))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
