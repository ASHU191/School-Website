import React from 'react';

const App = () => {
    return (
        <>
            <div className="mx-auto">
                <h1 className="text-4xl font-bold text-center my-16">
                    Vision Statement
                </h1>
            </div>


            <div className="flex flex-col md:flex-row gap-10 px-10 h-auto md:h-40">
                <div className="relative w-full md:w-1/3 bg-gray group">
                    <div className="flex justify-center items-center flex-col h-full px-4 ">
                        <h1 className="text-2xl font-bold pt-7">Faculty Position(2)</h1>
                    </div>
                </div>
                <div className="relative w-full md:w-1/3 bg-gray group">
                    <div className="flex justify-center items-center flex-col h-full px-4 ">
                        <h1 className="text-2xl font-bold pt-7">Faculty Position(2)</h1>
                    </div>
                </div>
             
                <div className="relative w-full md:w-1/3 bg-gray group">
                    <div className="flex justify-center items-center flex-col h-full px-4 ">
                        <h1 className="text-2xl font-bold pt-7">Faculty Position(2)</h1>
                    </div>
                </div>
             
             
             


            </div>


        </>
    );
};

export default App;