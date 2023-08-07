"use client"
import { useForm } from 'react-hook-form';
import axios from 'axios';

interface IFormInput {
  name: string
}

export default function FormCategory() {
  const { register, handleSubmit, setError, formState: { errors } } = useForm<IFormInput>();


  const onSubmit = async (data: IFormInput) => {
    console.log(data)

    const response = await axios.post('/api/category', {
      name: data.name
    })
    console.log(response)


    // setError('name', {
    //   message: 'The Field is exits'
    // })
    
  }



  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 mt-6 gap-x-5 gap-y-8 max-md:grid-cols-1">
      <div className='space-y-3'>
        <label htmlFor="input-name" className="x-label">Enter The Name Category <span className='requeued'>*</span></label>
        <input  {...register("name", { required: "The Name Category is Requeued" })} id="input-name" className="x-input" placeholder="Name" />
        <span className="block text-red-500">{errors.name && (errors.name.message)}</span>
      </div>
      <div className='flex items-center justify-center'>
        <button className="btn-create-update">Create Category</button>
      </div>
    </form>
  )
}