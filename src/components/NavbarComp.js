import React, { Component} from "react";
import { Disclosure} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";

export default class NavbarComp extends Component {
  render() {
    return (
      <>
        <Disclosure as="nav" className="bg-white w-full">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden bg-white">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-themeColor1 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                      <h1 className="text-2xl italic font-bold text-themeColor1 cursor-pointer">Daily Dose</h1>
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                      <div className="flex space-x-4">
                        
                        <Link className="relative text-themeColor2 text-gray-300 rounded-md px-3 py-2 text-md font-bold transition-all duration-300 hover:before:block hover:before:content-[''] hover:before:w-2.5 hover:before:h-2.5 hover:before:bg-red-500
                         hover:before:absolute hover:before:left-0 hover:before:top-1/2 hover:before:transform hover:before:-translate-y-1/2 hover:before:rounded-full cursor-pointer" to="/">Home</Link>

                        <Link className="relative text-themeColor2 text-gray-300 rounded-md px-3 py-2 text-md font-bold transition-all duration-300 hover:before:block hover:before:content-[''] hover:before:w-2.5 hover:before:h-2.5 hover:before:bg-red-500
                         hover:before:absolute hover:before:left-0 hover:before:top-1/2 hover:before:transform hover:before:-translate-y-1/2 hover:before:rounded-full cursor-pointer" to="/news">Categories</Link>

                        <a className="relative text-themeColor2 text-gray-300 rounded-md px-3 py-2 text-md font-bold transition-all duration-300 hover:before:block hover:before:content-[''] hover:before:w-2.5 hover:before:h-2.5 hover:before:bg-red-500
                         hover:before:absolute hover:before:left-0 hover:before:top-1/2 hover:before:transform hover:before:-translate-y-1/2 hover:before:rounded-full cursor-pointer">Top Headlines</a>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button
                      type="button"
                      className="relative text-themeColor2 text-gray-300 rounded-md px-3 py-2 text-md font-bold transition-all duration-300 hover:before:block hover:before:content-[''] hover:before:w-2.5 hover:before:h-2.5 hover:before:bg-red-500
                      hover:before:absolute hover:before:left-0 hover:before:top-1/2 hover:before:transform hover:before:-translate-y-1/2 hover:before:rounded-full cursor-pointer"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="color=bg-themeColor2"><i className="pi pi-search font-bold text-1xl"></i></span>

                    </button>
                    <button
                      type="button"
                      className="hidden sm:block relative text-themeColor2 text-gray-300 rounded-md px-3 py-2 text-md font-bold transition-all duration-300 hover:before:block hover:before:content-[''] hover:before:w-2.5 hover:before:h-2.5 hover:before:bg-red-500
                      hover:before:absolute hover:before:left-0 hover:before:top-1/2 hover:before:transform hover:before:-translate-y-1/2 hover:before:rounded-full cursor-pointer"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="color=bg-themeColor2"><i className="pi pi-align-right font-bold text-1xl"></i></span>

                    </button>


                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden bg-white-800 text-themeColor2">
                <div className="space-y-1 px-2 pb-3 pt-2">
                <a className="block relative text-themeColor2 text-gray-300 rounded-md px-3 py-2 text-md font-bold transition-all duration-300 hover:before:block hover:before:content-[''] hover:before:w-2.5 hover:before:h-2.5 hover:before:bg-red-500
                  hover:before:absolute hover:before:left-0 hover:before:top-1/2 hover:before:transform hover:before:-translate-y-1/2 hover:before:rounded-full cursor-pointer">Home</a>
                <a className="block relative text-themeColor2 text-gray-300 rounded-md px-3 py-2 text-md font-bold transition-all duration-300 hover:before:block hover:before:content-[''] hover:before:w-2.5 hover:before:h-2.5 hover:before:bg-red-500
                  hover:before:absolute hover:before:left-0 hover:before:top-1/2 hover:before:transform hover:before:-translate-y-1/2 hover:before:rounded-full cursor-pointer">Categories</a>
                <a className="block relative text-themeColor2 text-gray-300 rounded-md px-3 py-2 text-md font-bold transition-all duration-300 hover:before:block hover:before:content-[''] hover:before:w-2.5 hover:before:h-2.5 hover:before:bg-red-500
                  hover:before:absolute hover:before:left-0 hover:before:top-1/2 hover:before:transform hover:before:-translate-y-1/2 hover:before:rounded-full cursor-pointer">Top Headlines</a>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </>
    )
  }
}