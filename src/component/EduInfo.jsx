import React from 'react'
import { FaBookOpenReader } from "react-icons/fa6";
import { BiSolidSchool } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";

export default function EduInfo({exam, institute, year, result}) {
    return (
        <div>
            <div className="mx-72 mt-10 mockup-window bg-base-300 border">
                    <div className="bg-base-200 pl-10 py-6">
                        <p className="mb-3 font-semibold ">FEATURED EDUCATION</p>
                        <div className="flex gap-4 mb-2">
                            <FaBookOpenReader className="text-lg my-auto" />
                            <p className="text-lg font-semibold">{exam}</p>
                        </div>
                        <div className="flex gap-4 mb-2">
                            <BiSolidSchool className='my-auto' />
                            <p className='font-serif '>{institute}</p>
                        </div>
                        <div className="flex gap-4 mb-3">
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
