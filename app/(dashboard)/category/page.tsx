import { TableActions } from '@/components/table';
import type { Metadata } from 'next'




function FormCategory() {
  return (
    <form className="grid grid-cols-2 mt-6 gap-x-5 gap-y-8 max-md:grid-cols-1">
      <div className='space-y-3'>
        <label htmlFor="input-name" className="block font-medium text-gray-900 md:text-lg dark:text-white">Enter The Name Category <span className='text-red-500'>*</span></label>
        <input type="text" id="input-name" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" />
        <span className="block text-red-500">The Name Category is Requeued</span>
      </div>
      <div className='flex items-center justify-center'>
        <button className="px-6 py-3 text-white transition-colors duration-200 transform bg-blue-500 rounded-md md:w-1/2 hover:bg-blue-700 focus:outline-none focus:bg-gray-600">Create Category</button>
      </div>
    </form>
  )
}












export const metadata: Metadata = {
  title: 'Category',
  description: 'Category Page'
}

export default function Category() {



  return (
    <>

      <h1 className="text-6xl font-bold tracking-widest text-center blur-[.8px] max-md:text-4xl">CATEGORY</h1>

      <section className="container">
        <div className="container p-5 mx-auto my-8 bg-white rounded-lg shadow-lg bg-opacity-30 dark:text-white dark:bg-gray-900">
          <h1 className="text-3xl font-bold text-center">Add Category</h1>
          <FormCategory />
        </div>
      </section>

      <section className="container p-5 mx-auto my-8 bg-white rounded-lg shadow-lg bg-opacity-30 dark:text-white dark:bg-gray-900">
        <div>

        </div>
        <table className='w-full'>
          <thead className='border-b-4 md:text-3xl dark:text-gray-200'>
            <tr>
              <th>NAME</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody className='text-lg text-center md:text-2xl'>
            <tr className='border-b'>
              <td>test</td>
              <TableActions />
            </tr>
            <tr className='border-b'>
              <td>test</td>
              <TableActions />
            </tr>
          </tbody>

        </table>

      </section>

    </>
  );
}
