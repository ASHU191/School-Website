import React, { useState } from 'react';
import teacher1 from "../assets/Home/Teacher1.png";
import teacher2 from "../assets/Home/Teacher2.png";
import teacher3 from "../assets/Home/Teacher3.png";
import teacher4 from "../assets/Home/Teacher4.png";

const Allteachers = () => {
    const [currentFilter, setCurrentFilter] = useState('All');

    const teachers = [
        { id: 1, name: 'Teacher 1', faculty: 'Faculty of Business', image: teacher1 },
        { id: 2, name: 'Teacher 2', faculty: 'Faculty of Engineering', image: teacher1 },
        { id: 3, name: 'Teacher 3', faculty: 'Faculty of Agriculture', image: teacher2 },
        { id: 4, name: 'Teacher 4', faculty: 'Faculty of Business', image: teacher3 },
        { id: 5, name: 'Teacher 5', faculty: 'Faculty of Business', image: teacher4 },
        { id: 6, name: 'Teacher 6', faculty: 'Faculty of Agriculture', image: teacher4 },
        { id: 7, name: 'Teacher 7', faculty: 'Faculty of Business', image: teacher1},
        { id: 8, name: 'Teacher 8', faculty: 'Faculty of Engineering', image: teacher2 },
        { id: 9, name: 'Teacher 9', faculty: 'Faculty of Engineering', image: teacher1 },
        { id: 10, name: 'Teacher 10', faculty: 'Faculty of Business', image: teacher4 },
       
        // Add more teachers as needed
    ];

    const handleFilterChange = (filter) => {
        setCurrentFilter(filter);
    };

    const filteredTeachers = currentFilter === 'All'
        ? teachers
        : teachers.filter(teacher => teacher.faculty === currentFilter);

    return (
        <div>
            <h1 className="text-center pt-10 text-4xl font-bold mt-3">Our Expert Teachers</h1>

            <div className="flex flex-wrap items-center content-center justify-center gap-5 pt-20 ">
                <button
                    className={`px-4 py-2 rounded-md ${currentFilter === 'All' ? 'bg-blue text-white' : 'bg-blue text-white'}`}
                    onClick={() => handleFilterChange('All')}
                >
                    All
                </button>
                <button
                    className={`sm:gap-32 px-4 py-2 rounded-md ${currentFilter === 'Faculty of Business' ? 'bg-gray text-blue' : 'bg-gray text-blue'}`}
                    onClick={() => handleFilterChange('Faculty of Business')}
                >
                    Faculty of Business
                </button>
                <button
                    className={`px-4 py-2 rounded-md ${currentFilter === 'Faculty of Engineering' ? 'bg-gray text-blue' : 'bg-gray text-blue'}`}
                    onClick={() => handleFilterChange('Faculty of Engineering')}
                >
                    Faculty of Engineering
                </button>
                <button
                    className={`px-4 py-2 rounded-md ${currentFilter === 'Faculty of Agriculture' ? 'bg-gray text-blue' : 'bg-gray text-blue'}`}
                    onClick={() => handleFilterChange('Faculty of Agriculture')}
                >
                    Faculty of Agriculture
                </button>
            </div>

            <div className=" flex flex-wrap items-center content-center justify-center pt-10 gap-2 sm:gap-5">
                {filteredTeachers.map(teacher => (
                    <img key={teacher.id} className="h-40 w-40 sm:h-80 sm:w-auto items-center content-center justify-center" src={teacher.image} alt={teacher.name} />
                ))}
            </div>


        </div>
    );
};

export default Allteachers;
