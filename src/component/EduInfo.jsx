import React from 'react'
import { FaBookOpenReader } from "react-icons/fa6";
import { BiSolidSchool } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";

export default function EduInfo({exam, institute, year, result}) {
    return (
        <div>
            <div className="mx-72 mt-16 mb-10 mockup-window bg-base-300 border">
                    <div className="bg-base-200 pl-10 py-6">
                        <p className="mb-3 font-semibold text-lg">FEATURED EDUCATION</p>
                        <div className="flex gap-6 mb-3">
                            <FaBookOpenReader className="text-2xl my-auto" />
                            <p className="text-2xl font-semibold">{exam}</p>
                        </div>
                        <div className="flex gap-6 mb-3">
                            <BiSolidSchool className='my-auto' />
                            <p className='font-serif text-xl'>{institute}</p>
                        </div>
                        <div className="flex gap-6 mb-4">
                            <SlCalender className='my-auto' />
                            <p>{year}</p>
                        </div>
                        <div>
                            <button className="border-2 border-neutral-400 px-5 py-2 rounded font-medium">{result}</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}
