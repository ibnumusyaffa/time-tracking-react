import React from "react";
import logo from "./logo.svg";
import "./styles/global.css";

function App() {
  return (
    <div>
      <nav
        className="bg-blue-600 text-white  flex justify-center  border-b border-solid border-blue-700"
        style={{ height: 52 }}
      >
        <div className="flex justify-between w-4/6 h-full">
          <div className="flex text-sm font-semibold">
            <div className="flex justify-center items-center px-3 hover:bg-blue-700  cursor-pointer">
              <div className="h-5 w-5 ">
                <svg fill="#fff" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
              </div>
            </div>

            <div className="flex justify-center items-center px-3 hover:bg-blue-700  cursor-pointer bg-blue-700">
              <div>Time</div>
            </div>
            <div className="flex justify-center items-center px-3 hover:bg-blue-700  cursor-pointer">
              <div>Expenses</div>
            </div>
            <div className="flex justify-center items-center px-3 hover:bg-blue-700  cursor-pointer">
              <div>Projects</div>
            </div>
            <div className="flex justify-center items-center px-3 hover:bg-blue-700  cursor-pointer">
              <div>Team</div>
            </div>
            <div className="flex justify-center items-center px-3 hover:bg-blue-700  cursor-pointer">
              <div>Reports</div>
            </div>
            <div className="flex justify-center items-center px-3 hover:bg-blue-700  cursor-pointer">
              <div>Invoice</div>
            </div>
            <div className="flex justify-center items-center px-3 hover:bg-blue-700  cursor-pointer">
              <div>Manage</div>
            </div>
          </div>
          <div className="flex text-xs font-semibold">
            <div className="flex justify-center items-center px-3 hover:bg-blue-700  cursor-pointer">
              <div className="h-5 w-5 mr-2">
                <svg fill="#fff" viewBox="0 0 20 20">
                  <path
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>Help</div>
            </div>
            <div className="flex justify-center items-center px-3 hover:bg-blue-700  cursor-pointer">
              <div className="h-5 w-5 mr-2">
                <svg fill="#fff" viewBox="0 0 20 20">
                  <path
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>Settings</div>
            </div>
            <div className="flex justify-center items-center px-3 hover:bg-blue-700  cursor-pointer">
              <div className="bg-orange-300 text-orange-700 rounded-full h-8 w-8 flex justify-center items-center mr-3">
                IM
              </div>
              <div>Ibnu</div>
            </div>
          </div>
        </div>
      </nav>
      <div
        className="bg-gray-100 border-b text-xs   text-gray-700  border-solid border-gray-300 flex justify-center"
        style={{ height: 43 }}
      >
        <div className="flex justify-between w-4/6 h-full">
          <div className="flex">
            <div className="flex  items-center mr-5 cursor-pointer font-bold border-b-2 border-solid border-green-500">
              <div>Timesheet</div>
            </div>
            <div className="flex  items-center mr-5 cursor-pointer">
              <div>Pending Aproval</div>
            </div>
            <div className="flex  items-center mr-5 cursor-pointer">
              <div>Unsubmitted</div>
            </div>
          </div>
          <div className="flex"></div>
        </div>
      </div>

      <main className="flex justify-center items-center">
        <div className="w-4/6 py-5">
          <div className="flex justify-between">
            <div>Left</div>
            <div>Right</div>
          </div>
          <div className="flex h-12 mt-5">
            <div
              style={{ height: 55 }}
              className="w-full border-t border-b border-l  border-solid border-gray-400 rounded-tl rounded-bl px-3 py-1 cursor-pointer bg-gray-100 bg-gray-300"
            >
              <div className="text-sm">M</div>
              <div className="text-xs text-gray-700">08:00</div>
            </div>

            <div
              style={{ height: 55 }}
              className="w-full border-t border-b border-l border-solid border-gray-400 px-3 py-1 cursor-pointer bg-gray-100 hover:bg-gray-300"
            >
              <div className="text-sm">T</div>
              <div className="text-xs text-gray-700">08:00</div>
            </div>

            <div
              style={{ height: 55 }}
              className="w-full border-t border-b border-l border-solid border-gray-400 px-3 py-1 cursor-pointer bg-gray-100 hover:bg-gray-300 "
            >
              <div className="text-sm">W</div>
              <div className="text-xs text-gray-700">08:00</div>
            </div>

            <div
              style={{ height: 55 }}
              className="w-full border-t border-b border-l border-solid border-gray-400 px-3 py-1 cursor-pointer bg-gray-100 hover:bg-gray-300"
            >
              <div className="text-sm">Th</div>
              <div className="text-xs text-gray-700">08:00</div>
            </div>

            <div
              style={{ height: 55 }}
              className="w-full border-t border-b border-l border-solid border-gray-400 px-3 py-1 cursor-pointer bg-gray-100 hover:bg-gray-300"
            >
              <div className="text-sm">F</div>
              <div className="text-xs text-gray-700">08:00</div>
            </div>

            <div
              style={{ height: 55 }}
              className="w-full border-t border-b border-l border-solid border-gray-400 px-3 py-1 cursor-pointer bg-gray-100 hover:bg-gray-300"
            >
              <div className="text-sm">S</div>
              <div className="text-xs text-gray-700">08:00</div>
            </div>
            <div
              style={{ height: 55 }}
              className="w-full border-t border-b border-l border-solid border-gray-400 px-3 py-1 cursor-pointer bg-gray-100 hover:bg-gray-300"
            >
              <div className="text-sm">Su</div>
              <div className="text-xs text-gray-700">08:00</div>
            </div>

            <div
              style={{ height: 55 }}
              className="w-full  border-t border-b border-l border-r border-solid border-gray-400 rounded-tr rounded-br px-3 py-1 cursor-pointer bg-gray-100 hover:bg-gray-300"
            >
              M
            </div>
          </div>

          <div className="mt-5">
            <div className="flex justify-between items-center hover:bg-green-100  px-3  h-16 border-b border-solid border-gray-400">
              <div>
                <div className="text-sm font-semibold">Bisaberbagi</div>
                <div className="text-xs mt-1">Membuat API Users</div>
              </div>
              <div className="flex  items-center">
                <div className="mr-3 font-semibold">07:10:11</div>
                <div className="mr-3">
                  <button className="bg-green-500 text-white rounded px-3 py-2 text-xs">
                    <div style={{ height: 20, width: 20 }}>
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        stroke="#fff"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                  </button>
                </div>
                <div>
                  
                  <button className="bg-gray-200 text-sm px-3 py-2 rounded">Edit</button>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center hover:bg-green-100  px-3  h-16 border-b border-solid border-gray-400">
              <div>
                <div className="text-sm font-semibold">Bisaberbagi</div>
                <div className="text-xs mt-1">Membuat API Users</div>
              </div>
              <div className="flex  items-center">
                <div className="mr-3 font-semibold">07:10:11</div>
                <div className="mr-3">
                  <button className="bg-green-500 text-white rounded px-3 py-2 text-xs">
                    <div style={{ height: 20, width: 20 }}>
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        stroke="#fff"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                  </button>
                </div>
                <div>
                  
                  <button className="bg-gray-200 text-sm px-3 py-2 rounded">Edit</button>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center hover:bg-green-100  px-3  h-16 border-b border-solid border-gray-400">
              <div>
                <div className="text-sm font-semibold">Bisaberbagi</div>
                <div className="text-xs mt-1">Membuat API Users</div>
              </div>
              <div className="flex  items-center">
                <div className="mr-3 font-semibold">07:10:11</div>
                <div className="mr-3">
                  <button className="bg-green-500 text-white rounded px-3 py-2 text-xs">
                    <div style={{ height: 20, width: 20 }}>
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        stroke="#fff"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                  </button>
                </div>
                <div>
                  
                  <button className="bg-gray-200 text-sm px-3 py-2 rounded">Edit</button>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center hover:bg-green-100  px-3  h-16 border-b border-solid border-gray-400">
              <div>
                <div className="text-sm font-semibold">Bisaberbagi</div>
                <div className="text-xs mt-1">Membuat API Users</div>
              </div>
              <div className="flex  items-center">
                <div className="mr-3 font-semibold">07:10:11</div>
                <div className="mr-3">
                  <button className="bg-green-500 text-white rounded px-3 py-2 text-xs">
                    <div style={{ height: 20, width: 20 }}>
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        stroke="#fff"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                  </button>
                </div>
                <div>
                  
                  <button className="bg-gray-200 text-sm px-3 py-2 rounded">Edit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-100 h-16 border-t border-solid border-gray-300">
        <div className="flex items-center h-full justify-center">
          <div className="text-gray-700 text-sm">© 2020 Ibnu Musyaffa.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
