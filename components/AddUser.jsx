import { Transition } from '@headlessui/react';
import React from 'react'

const AddUser = () => {
  return (
    <div className='container mx-auto my-8'>
        <div className='h-12'>
            <button className='rounded bg-slate-600 text-white px-6 py-2 font-semibold'>
                Add User
            </button>
        </div>
        <Transition appear show={isOpen}></Transition>
    </div>
  )
}

export default AddUser;
