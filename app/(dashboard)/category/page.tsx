import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Category',
  description: 'Category Page'
}

export default function Category() {


  
  return (
    <section className="container" id="add-user">
      <h1 className="text-3xl font-bold text-center">Category</h1>

      <div className="bg-white px-3 py-8 mt-12 rounded-xl">
        <h1 className="text-3xl font-bold text-center text-gray-800">Add Category</h1>
        <form className="grid grid-cols-2 gap-x-5 gap-y-8 max-md:grid-cols-1">
          <div className="flex flex-col">
            <label htmlFor="input-name">Enter The Name Category</label>
            <input type="text" id="input-name" name="name" className="b-t py-2 px-3.5 rounded-xl" placeholder="Name"/>
            <span className="text-sm text-red-500">{ /* The Filed is Requeued */}</span>
          </div>

        </form>
      </div>
    </section>
  );
}
