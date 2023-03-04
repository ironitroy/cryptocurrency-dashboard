import './index.css';
import Header from './components/Header';
import MyCurrency from './components/MyCurrency';
import SearchBar from './components/SearchBar';
import Sidebar from './components/Sidebar';
import Chart from './components/Chart';


function App() {
  return (
    <>
      <Header />
      <div className='bg-indigo-100 w-full  container h-screen rounded-lg block mx-auto p-4 md:p-8 mt-16 md:mt-24'>
      <div className="grid grid-cols-9 mb-4 justify-center gap-4">
          <div className="col-span-full lg:col-span-6">
            <div className="grid gap-4 grid-cols-6">
              <div className="col-span-2 lg:col-span-1">
            <MyCurrency />
              </div>
              <div className="col-span-4 lg:col-span-5">
            <SearchBar />
                </div>
                <div className="col-span-full bg-white rounded-lg h-[26rem]">
                  <Chart />
                </div>

            </div>
          
          </div>
          <div className='col-span-full lg:col-span-3'><Sidebar  /></div>
        </div>
      </div>
    </>
  );
}

export default App;
