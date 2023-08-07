"use client"
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';

interface IFormInput {
  name: string
}

export default function FormCategory() {
  const { register, handleSubmit, setError, formState: { errors } } = useForm<IFormInput>();
  const [loading, setLoading] = useState<boolean>(false)

  const onSubmit = async (data: IFormInput) => {
    setLoading(true)
    console.log(data)

    const response = await axios.post('/api/category', {
      name: data.name
    })
    
    if (response.data.status == 422) {
      setError('name', { message: response.data.errors.name })
    }
    if(response.data.status == 500) {
      toast.success('Successfully toasted!')
    }


    setLoading(false)
  }



  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 mt-6 gap-x-5 gap-y-8 max-md:grid-cols-1">
      <div className='space-y-3'>
        <label htmlFor="input-name" className="x-label">Enter The Name Category <span className='requeued'>*</span></label>
        <input {...register("name", { required: "The Name Category is Requeued" })} id="input-name" className="x-input" placeholder="Name" />
        <span className="block text-red-500">{errors.name && (errors.name.message)}</span>
      </div>
      <div className='flex items-center justify-center'>
        <button className="btn-create-update">
          {loading ?
            <svg className="w-8 h-8 mr-3 animate-spin" viewBox="0 0 24 24"> <path className="fill-gray-200" d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"></path>
              <path className="fill-gray-800" d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
            </svg>
            : "Create Category"}
        </button>
      </div>
    </form>
  )
}