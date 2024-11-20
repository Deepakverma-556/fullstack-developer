'use client'; // Ensure this directive is at the top

import React, { useState } from 'react';

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <button
                onClick={openModal}
                className="px-4 py-2 font-semibold text-white bg-blue-500 rounded"
            >
                Open Modal
            </button>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold">Deactivate account</h2>
                            <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                                &times;
                            </button>
                        </div>
                        <div className="mt-4">
                            <p>
                                Are you sure you want to deactivate your account? All of your data will be
                                permanently removed from our servers forever. This action cannot be undone.
                            </p>
                        </div>
                        <div className="mt-6 flex justify-end space-x-4">
                            <button
                                onClick={closeModal}
                                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                            >
                                Cancel
                            </button>
                            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                                Deactivate
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
