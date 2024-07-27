import React from "react";
import { Button } from "react-bootstrap";
import Schedule from "../Pages/Schedule";
import Frame2 from "../assets/Home/frame2.png";
import Frame1 from "../assets/Home/frame1.png";

const Admission = () => {
  const cardsData = [
    {
        title: "Merit Scholarship",
        description: "Merit scholaship awarded on the basis of results"
    },
    {
       title: "Merit Scholarship",
        description: "Merit scholaship awarded on the basis of results"
    },
    {
      title: "Merit Scholarship",
        description: "Merit scholaship awarded on the basis of results"
    },
    {
       title: "Merit Scholarship",
        description: "Merit scholaship awarded on the basis of results"
    },
    {
       title: "Merit Scholarship",
        description: "Merit scholaship awarded on the basis of results"
    },
    {
       title: "Merit Scholarship",
        description: "Merit scholaship awarded on the basis of results"
    }
];
  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center my-16">
          Bachelor Programs Requirements
        </h1>
        <p className="text-blue text-lg mx-auto">
          The minimum educational requirement for admission application to
          bachelor programs is Higher Secondary Certificate (HSC) or twelve
          years of formal education in schools or College in science, commerce,
          humanities, vocational or other fields. Polytechnic, Agricultural
          Diploma, Nursing diploma holders are also qualified. In case of
          Madrasha students, the minimum educational requirement for application
          is Alim certificate. To be eligible to apply, the person must meet the
          following requirements:
        </p>
        <ul className="list-disc pl-10">
          <li>
            Candidates with GPA 2.50 out of 5.00 in SSC HSC or equivalent
            examinations will have to have accumulated GPA of 6.00 to qualify
            for admission.
          </li>
          <li>
            Only candidates with Science in HSC or equivalent examinations will
            qualify for admission in engineering programs.
          </li>
          <li>
            GCE candidates, 2’A’ Levels with 5 ‘O’ Levels with minimum four ‘B’
            grades and three ‘C’ grades are required for admission in bachelor’s
            programs.
          </li>
          <li>
            Appeared candidates at the terminal level can apply for provisional
            Admission but must fulfill the condition of provisional Admission at
            the earliest.
          </li>
        </ul>
        <p className="text-blue text-lg mx-auto">
          For other types of education, IUBAT Admissions Office may be contacted
          for determining equivalence
        </p>
      </div>

      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center my-16">Admission Test</h1>
        <div className="flex gap-10 ">
          <p className="text-blue text-lg mx-auto w-1/2">
            we strives to be a globally recognized center of excellence in
            education and research, fostering a dynamic learning environment
            that empowers individuals to thrive in a rapidly evolving world. Our
            vision is to cultivate critical thinking, innovation, and social
            responsibility in our students, equipping them to make meaningful
            contributions to society. We are committed to diversity, inclusion,
            and sustainability, envisioning a future where our institution is a
            catalyst for positive change, driving progress, and shaping a better
            world
            <button className="bg-blue text-white mt-6 ml-14 ">
              Download Sample Question
            </button>
          </p>
          <div className="w-full h-50 bg-gray"></div>
        </div>
      </div>

      <h1 className="text-4xl font-bold mt-24 text-center pb-10">
        International Students
      </h1>
      <Schedule />

      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center my-16">Admission Test</h1>
        <div className="flex gap-10 ">
          <img src={Frame1} />

          <div>
            <p className="text-blue text-lg mx-auto w-full pb-20 pt-10">
              A degree from XYZ is an extraordinary venture one that keeps on
              increasing in value over the long run. We are reliably perceived
              as a top incentive in advanced education, in light of our blend of
              scholastic quality and reasonableness. Education from xyz stays
              truly significant, after a seemingly endless amount of time year
              after year.
            </p>
            <img src={Frame2} />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-10">
                <h1 className="text-4xl font-bold text-center my-16 pt-10">Scholarship</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                    {cardsData.map((card, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h1 className="text-2xl font-semibold mb-4">{card.title}</h1>
                            <p>{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>



    </div>
  );
};

export default Admission;
