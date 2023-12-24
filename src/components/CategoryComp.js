import React, { Component } from "react";
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
export default class CategoryComp extends Component {
    //w-screen bg-themeColor1 h-20 flex flex-row items-center justify-center hover:bg-themeColor2
    render() {
        const { onCategoryChange } = this.props
        return (
                        <div className="lg:mx-auto max-w-screen bg-white h-20 xl:mt-8 lg:mt-8 md:-ml-16 ">
                <div className='flex flex-row items-center justify-center xl:ml-20 lg:ml-8'>
                    <div className='my-1 flex flex-row '>
                        <h1 className='text-left text-themeColor2 font-bold text-lg my-2 mx-3 cursor-pointer hover:border-b-4 hover:border-themeColor1' onClick={() => onCategoryChange('general')}>Latest Stories</h1>
                        <h1 className='text-left text-themeColor2 font-bold text-lg my-2 mx-3 cursor-pointer hover:border-b-4 hover:border-themeColor1' onClick={() => onCategoryChange('Science')}>Science</h1>
                        <h1 className='text-left text-themeColor2 font-bold text-lg my-2 mx-3 cursor-pointer hover:border-b-4 hover:border-themeColor1' onClick={() => onCategoryChange('Sports')}>Sports</h1>
                        <h1 className='text-left text-themeColor2 font-bold text-lg my-2 mx-3 cursor-pointer hover:border-b-4 hover:border-themeColor1' onClick={() => onCategoryChange('Business')}>Business</h1>
                        <h1 className='text-left text-themeColor2 font-bold text-lg my-2 mx-3 cursor-pointer hover:border-b-4 hover:border-themeColor1' onClick={() => onCategoryChange('Health')}>Health</h1>
                        <h1 className='text-left text-themeColor2 font-bold text-lg my-2 mx-3 cursor-pointer hover:border-b-4 hover:border-themeColor1' onClick={() => onCategoryChange('Technology')}>Technology</h1>
                        <h1 className='text-left text-themeColor2 font-bold text-lg my-2 mx-3 cursor-pointer hover:border-b-4 hover:border-themeColor1' onClick={() => onCategoryChange('Entertainment')}>Entertainment</h1>
                    </div>
                    <div className="my-1 flex-end ml-auto mr-auto">
                        <h1><i className="text-left text-themeColor2 font-bold text-2xl my-3 mx-3 cursor-pointer hover:text-themeColor1 pi pi-th-large"></i></h1>
                    </div>
                </div>
            </div> 
            // <>
            //     <Disclosure as="categories" className="bg-white w-full">
            //         {({ open }) => (
            //             <>
            //                 <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            //                     <div className="relative flex h-16 items-center justify-between">
            //                         <div className="absolute inset-y-0 left-0 flex items-center sm:hidden bg-white">
            //                             {/* Mobile menu button*/}
            //                             <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-themeColor1 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            //                                 <span className="absolute -inset-0.5" />
            //                                 <span className="sr-only">Open main menu</span>
            //                                 {open ? (
            //                                     <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
            //                                 ) : (
            //                                     <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            //                                 )}
            //                             </Disclosure.Button>
            //                         </div>
            //                         <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            //                             <div className="flex flex-shrink-0 items-center">
            //                                 <h1 className="text-2xl italic font-bold text-themeColor1 cursor-pointer">Daily Dose</h1>
            //                             </div>
            //                             <div className="hidden sm:block sm:ml-6">
            //                                 <h1 className='text-left text-themeColor2 font-bold text-lg my-2 mx-3 cursor-pointer hover:border-b-4 hover:border-themeColor1' onClick={() => onCategoryChange('general')}>Latest Stories</h1>
            //                                 <h1 className='text-left text-themeColor2 font-bold text-lg my-2 mx-3 cursor-pointer hover:border-b-4 hover:border-themeColor1' onClick={() => onCategoryChange('Science')}>Science</h1>
            //                                 <h1 className='text-left text-themeColor2 font-bold text-lg my-2 mx-3 cursor-pointer hover:border-b-4 hover:border-themeColor1' onClick={() => onCategoryChange('Sports')}>Sports</h1>
            //                                 <h1 className='text-left text-themeColor2 font-bold text-lg my-2 mx-3 cursor-pointer hover:border-b-4 hover:border-themeColor1' onClick={() => onCategoryChange('Health')}>Health</h1>
            //                                 <h1 className='text-left text-themeColor2 font-bold text-lg my-2 mx-3 cursor-pointer hover:border-b-4 hover:border-themeColor1' onClick={() => onCategoryChange('Technology')}>Technology</h1>
            //                                 <h1 className='text-left text-themeColor2 font-bold text-lg my-2 mx-3 cursor-pointer hover:border-b-4 hover:border-themeColor1' onClick={() => onCategoryChange('Entertainment')}>Entertainment</h1>
            //                             </div>
            //                         </div>
            //                         <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            //                             <h1><i className="text-left text-themeColor2 font-bold text-2xl my-3 mx-3 cursor-pointer hover:text-themeColor1 pi pi-th-large"></i></h1>
            //                         </div>
            //                     </div>
            //                 </div>
            //                 <Disclosure.Panel className="sm:hidden bg-white-800 text-themeColor2">
            //                     <div className="space-y-1 px-2 pb-3 pt-2">
            //                         <h1 className='text-left text-themeColor2 font-bold text-lg my-2 mx-3 cursor-pointer hover:border-b-4 hover:border-themeColor1' onClick={() => onCategoryChange('general')}>Latest Stories</h1>
            //                         <h1 className='text-left text-themeColor2 font-bold text-lg my-2 mx-3 cursor-pointer hover:border-b-4 hover:border-themeColor1' onClick={() => onCategoryChange('Science')}>Science</h1>
            //                         <h1 className='text-left text-themeColor2 font-bold text-lg my-2 mx-3 cursor-pointer hover:border-b-4 hover:border-themeColor1' onClick={() => onCategoryChange('Sports')}>Sports</h1>
            //                         <h1 className='text-left text-themeColor2 font-bold text-lg my-2 mx-3 cursor-pointer hover:border-b-4 hover:border-themeColor1' onClick={() => onCategoryChange('Health')}>Health</h1>
            //                         <h1 className='text-left text-themeColor2 font-bold text-lg my-2 mx-3 cursor-pointer hover:border-b-4 hover:border-themeColor1' onClick={() => onCategoryChange('Technology')}>Technology</h1>
            //                         <h1 className='text-left text-themeColor2 font-bold text-lg my-2 mx-3 cursor-pointer hover:border-b-4 hover:border-themeColor1' onClick={() => onCategoryChange('Entertainment')}>Entertainment</h1>
            //                     </div>
            //                 </Disclosure.Panel>
            //             </>
            //         )}
            //     </Disclosure>
            // </>
        )
    }
}