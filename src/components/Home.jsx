import SearchBar from "./SearchBar";

export default function Home() {
    return (
    <div classNameName="App">
      <nav className="">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center">
              <img src="/EasyMoney-1-removebg-preview 1.png" className="h-12 mr-3" alt="Flowbite Logo" />
              {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Easy Money</span> */}
          </a>
          {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button> */}
          <div className="w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-black rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="/login" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-black">Login</a>
              </li>
              <li>
                <a href="/signup" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-black">Signup</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    <div className='w-full m-auto max-w-[30rem] mt-[30vh] text-center'>
      <h1 className='text-[4rem] mb-6 font-bold'>Easy Money</h1>
      <p className='opacity-70 mb-4'>Find service jobs instantly.</p>
      <SearchBar></SearchBar>
      {/* <input list="job-types" placeholder="Start typing..."></input>
<datalist id="job-types">
  <option>Local</option>
  <option>High School Internship</option>
  <option>Remote Job</option>
  <option>Medical</option>
  <option>Medical</option>
</datalist> */}
    </div>
    </div>
    )
}