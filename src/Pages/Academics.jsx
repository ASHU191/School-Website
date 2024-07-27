import React from 'react'
import Faculties from "../components/Home/Faculties/Faculties";
import CustomizedTables from "./CustomizedTables";
import OurExpertsTeachers from "../components/Home/OurExpertTeachers/OurExpertTeachers";



const Academics = () => {
    const cardsData = [
        {
            title: "Academic Orientation",
            description: "Education at xyz is oriented towards deve-loping a person in a holistic manner. Thisentails developing in the individual an approach to life that is productive, stimulating, rewarding and beneficial to the immediate society as well as to mankind. The General Education Curriculum at zyx has been developed to address this orie-ntation. This general education components are common to all "
        },
        {
            title: "Student Advising",
            description: "DThe Student Advisory Services basically take two forms, viz. academic advising and personal advising. Academic advising is designed to assist students in analyzing and achieving their educational and career goals through academic programs in the university. Each student is provided specific guidance in choosing courses every semester, selecting major concentration as well as "
        },
        {
            title: "Examination Systeme",
            description: "In addition to class work, home assignments, term papers, project works, case studies, quizzes, weekly tests, presentations, etc., there shall be three compulsory examinations in each semester for each course, a first-term, a mid term and the final examination. The general guideline for students is that every class contact hour is to be backed up by a minimum of 3 hours of private study. More…"
        },
        {
            title: "Classification & Course Load",
            description: "The normal course load for a full time student is twelve (12) credit hours in a semester. However, a student may register in a minimum of three (3) credit hours and a maximum of fifteen (15). The course load may vary from department to department and based on the result of a student."
        },
        {
            title: "Course Numbering System",
            description: "Each course is numbered by 3 capital letters followed by three digits, course title and credit hours. CEN 213 Civil Engineering Materials (3) where CEN refers the subject area, 213 refers the level of the course, ‘Civil Engineering Materials” indicates title of the course and “3” indicates the number of credit hours the course carries."
        },
        {
            title: "Semester System",
            description: "The academic year is divided into 3 semesters namely Spring, Summer and Fall. Spring semester starts in January and ends in April, Summer semester starts in May and ends in August. FALL semester starts in September and ends in December."
        }
    ];

    return (
        <div>
            <div className='container mx-auto'>
                <h1 className="text-4xl font-bold text-center my-16">Academic Vision</h1>
                <p className="text-blue text-lg mx-auto">
                    we strives to be a globally recognized center of excellence in education and research, fostering a dynamic learning environment that empowers individuals to thrive in a rapidly evolving world. Our vision is to cultivate critical thinking, innovation, and social responsibility in our students, equipping them to make meaningful contributions to society. We are committed to diversity, inclusion, and sustainability, envisioning a future where our institution is a catalyst for positive change, driving progress, and shaping a better world
                </p>
            </div>

            <Faculties />

            <div className="container mx-auto px-4 bg-gray pb-10">
                <h1 className="text-4xl font-bold text-center my-16 pt-10">Academic Systems & Standards</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                    {cardsData.map((card, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h1 className="text-2xl font-semibold mb-4">{card.title}</h1>
                            <p>{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>



            <div>
                <h1 className="text-4xl font-bold mt-24 text-center">Grading System</h1>
                <p className='text-center my-12'>xyz follows a letter grading system and the grades A, B+, B, B-,C+, C, C-, D+ and D are considered passing grades. Grade ‘F’ is the failing grade.</p>
            </div>

            <CustomizedTables />

           <OurExpertsTeachers/>

        </div>
    )
}

export default Academics