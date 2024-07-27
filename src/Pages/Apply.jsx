import { useState } from 'react';
import Upload from "../components/Upload"


function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Contact() {
    const [agreed, setAgreed] = useState(false);

    return (
        <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
                <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}>
                </div>
            </div>
            <div className="mx-auto  text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Job Application Form</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600 pt-10">
                    Unlock your academic and professional future by applying for exciting opportunities at our university
                </p>
            </div>
            <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 ">

                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                            FULL NAME
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                autoComplete="name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                            E-MAIL
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                placeholder='ex: name@gmail.com'
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 bg-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                            Phone Number
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="number"
                                name="number"
                                id="number"
                                autoComplete="number"
                                placeholder='+92'
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                            Apply position
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="text"
                                id="text"
                                autoComplete="text"
                                placeholder='ex: Assistant professor'
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 bg-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                            Earliest Possible Start Date
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="date"
                                name="date"
                                id="date"
                                autoComplete="date"
                                placeholder='DD/MM/YYYY'
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                            Cover Letter
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                name="message"
                                id="message"
                                rows={4}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white"
                                defaultValue={''}
                            />
                        </div>
                        <p className='pt-3'>Please do not exceed 200 words</p>
                    </div>
                </div>
                <Upload/>
            </form>
            <div className='text-center'><button className="bg-blue rounded-lg px-8 text-white w-fit mt-5">Apply</button></div>




        </div>
    );
}