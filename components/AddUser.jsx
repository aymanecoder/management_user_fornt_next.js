import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react'
import { useState } from 'react';

const AddUser = () => {
    const [isOpen, setIsOpen] = useState(false)
    function closeModal(){
        setIsOpen(false);
    }
    
    function openModal(){
        setIsOpen(true);
    }
  return (
   
    <div className='container mx-auto my-8'>
        <div className='h-12'>
            <button className='rounded bg-slate-600 text-white px-6 py-2 font-semibold' onClick={openModal}>
                Add User
            </button>
        </div>
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
                <div className='min-h-screen px-4 text-center'>
                    <Transition.Child as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95">

                        <div className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md'>
                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">Add new User</Dialog.Title>
                            <div className='flex max-w-md max-auto'>
                                <div className='py-2'>
                                    <div className='h-12 my-4'>
                                        <label className='block text-gray-600 text-sm font-normal'>First Name</label>
                                        <input type='text' name="firstname" className='h-10 w-96 border mt-2 px-2 py-2' />
                                    </div>
                                    <div className='h-12 my-4'>
                                        <label className='block text-gray-600 text-sm font-normal'>Last Name</label>
                                        <input type='text' name="firstname" className='h-10 w-96 border mt-2 px-2 py-2' />
                                    </div>
                                    <div className='h-12 my-4'>
                                        <label className='block text-gray-600 text-sm font-normal'>Email Id</label>
                                        <input type='text' name="firstname" className='h-10 w-96 border mt-2 px-2 py-2' />
                                    </div>
                                    <div className='h-14 my-4 space-x-4 pt-4'>
                                        <button className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6-">Save</button>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Transition.Child>
                </div>

            </Dialog>
        </Transition>
    </div>
  )
}

export default AddUser;
