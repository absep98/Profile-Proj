import React, { useState } from 'react'
import { HiChevronRight } from 'react-icons/hi'

const Experience = () => {
    const [activeTab, setActiveTab] = useState('citrix');

    const experiences = {
        citrix: {
            company: "Citrix Systems",
            title: "Software Engineer",
            period: "May 2023 - Present",
            duties: [
                "Working on Admin UI Portal delivering the features and fixing the critical bugs from the customer.",
                "Enhancing the regression and working on moving the On Prem infrastructure to cloud.",
                "Maintaining the Sanity pipeline for Gateway."
            ]
        },
        juniper2: {
            company: "Juniper Networks",
            title: "Software Engineer 2",
            period: "November 2022 - May 2023",
            duties: [
                "Collaborated closely with the product manager at Juniper Networks on UI development, delivering features, and rigorously testing them within JCLOUD. JCLOUD, a software-as-a-service (SaaS) solution, serves as a crucial link between on-premises applications and network devices, facilitating seamless integration. My responsibilities encompassed working extensively on REST API testing using Postman and conducting UI testing using Selenium, ensuring the robustness and reliability of our solutions."
            ]
        },
        juniper1: {
            company: "Juniper Networks",
            title: "Software Engineer",
            period: "July 2021 - November 2022",
            duties: [
                "Developed the Automation Robert Framework and implemented the Negative Event API for the testing team, streamlining testing processes.",
                "Contributed to the transition of Robot-written scripts to Python scripts, enhancing automation capabilities.",
                "Spearheaded the enhancement of bandwidth usage tracking features integrated with MX devices.",
                "Engaged in collaborative efforts with software engineers to design and evaluate application procedures, optimizing system efficiency."
            ]
        }
    };

    return (
        <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent 
                             bg-gradient-to-r from-blue-600 to-indigo-600 animate-fade-in-down">
                    Where I've Worked
                </h2>

                {/* Experience Container */}
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Tab Buttons */}
                    <div className="md:w-1/4 flex md:flex-col overflow-x-auto md:overflow-x-visible">
                        {Object.entries(experiences).map(([key, value]) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`px-4 py-3 text-left font-mono text-sm whitespace-nowrap transition-all duration-300
                                          hover:bg-blue-50 hover:text-blue-600 relative
                                          ${activeTab === key 
                                            ? 'text-blue-600 border-b-2 md:border-b-0 md:border-l-2 border-blue-600 bg-blue-50' 
                                            : 'text-gray-600 border-b-2 md:border-b-0 md:border-l-2 border-gray-200'}`}
                            >
                                {value.company}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="md:w-3/4">
                        <div className="transform transition-all duration-300 hover:scale-[1.01]">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">
                                {experiences[activeTab].title}
                            </h3>
                            <h4 className="text-lg text-blue-600 mb-4 font-mono">
                                {experiences[activeTab].company}
                            </h4>
                            <p className="text-gray-600 mb-4 font-mono">
                                {experiences[activeTab].period}
                            </p>
                            <ul className="space-y-4">
                                {experiences[activeTab].duties.map((duty, index) => (
                                    <li key={index} 
                                        className="flex gap-2 group transform transition-all duration-300 hover:translate-x-2">
                                        <span className="text-blue-500 mt-1.5">
                                            <HiChevronRight className="transform group-hover:translate-x-1 transition-transform" />
                                        </span>
                                        <span className="text-gray-700">{duty}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience