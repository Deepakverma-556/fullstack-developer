'use client';
import React, { useState } from 'react';

const Modal = ({ isOpen, closeModal }) => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({...formValues,[name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormValues({
            name: '',
            email: ''
        });
        closeModal();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 font-roboto">
            <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">You Can Mail Us</h2>
                    <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                        </svg>
                    </button>
                </div>
                <div className="border mt-2 border-gray-500 rounded-md p-4">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className='block text-xl font-medium text-black font-roboto'>Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                value={formValues.name}
                                onChange={handleChange}
                                className='border border-gray-400 py-2 px-3 mt-2 w-full text-base rounded-md'
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className='block text-xl font-medium text-black font-roboto'>E-mail</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                value={formValues.email}
                                onChange={handleChange}
                                className='border border-gray-400 py-2 px-3 mt-2 w-full rounded-md text-base'
                                required
                            />
                        </div>
                        <button type="submit" className='border border-white bg-green text-white font-semibold py-2 px-3 text-xl rounded-md mt-4 w-full hover:bg-black transition-all duration-300'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;
