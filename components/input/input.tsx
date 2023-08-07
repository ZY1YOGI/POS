import React from 'react'

interface IInput {
  name: string;
  
}



export default function Input() {
  return (
    <div>
      <label htmlFor="input-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter The Name Category</label>
      <input type="text" id="input-name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" />
      <span className="text-sm text-red-500">{ /* The Filed is Requeued */}</span>
    </div>
  )
}
