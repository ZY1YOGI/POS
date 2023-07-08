import React from 'react'

export default function header() {
  return (
      <header className="static px-5 py-1 ml-16 border-b border-red-700 shadow shadow-violet-100 dark:shadow-gray-900">
        <div className="relative flex items-center justify-between px-5 space-x-10">
          <h1 className="text-3xl font-bold max-md:text-lg dark:text-white">Skybal</h1>

          <div className="flex items-center flex-shrink-0 space-x-4 text-white">

            <div className="flex flex-col items-end text-gray-900 dark:text-white">
              <div className="text-xl font-medium">Youssef</div>
              <div className="text-sm font-light">Manger</div>
            </div>

            <div className="w-12 h-12 p-px border-2 border-white rounded-full cursor-pointer">
              <img src='' className="w-full h-full dark:invert-[100%]" />
            </div>
          </div>
        </div>
      </header>
  )
}
