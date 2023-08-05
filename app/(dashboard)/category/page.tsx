import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Category',
  description: 'Category Page'
}

export default function Category() {



  return (
    <section className="container" id="add-user">
      <h1 className="text-6xl font-bold tracking-widest text-center blur-[.8px] max-md:text-4xl">CATEGORY</h1>

      <div className="px-5 py-8 mt-12 bg-white shadow rounded-xl dark:bg-gray-800 shadow-gray-500 max-md:mx-3 max-sm:mx-1.5">
        <h1 className="text-3xl font-bold text-center">Add Category</h1>
        <form className="grid grid-cols-2 mt-6 gap-x-5 gap-y-8 max-md:grid-cols-1">
          <div className="flex flex-col space-y-1.5">
            <label htmlFor="input-name" className=' dark:text-white'>Enter The Name Category</label>
            <input type="text" id="input-name" name="name" className="b-t py-2 px-3.5 rounded-xl" placeholder="Name" />
            <span className="text-sm text-red-500">{ /* The Filed is Requeued */}</span>
          </div>
          <div className="flex flex-col space-y-1.5">
            <label htmlFor="input-description" className='dark:text-white'>Enter The Description Category</label>
            <textarea id="input-description" name="description" className="b-t py-2 px-3.5 rounded-xl" placeholder="Description..." />
            <span className="text-sm text-red-500">{ /* The Filed is Requeued */}</span>
          </div>
        </form>
      </div>
    </section>
  );
}
