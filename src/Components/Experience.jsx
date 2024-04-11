import React from 'react'

const Experience = () => {
    return (
        <div>
            <div className="p-[100px]">
                <p className="mb-4">Where I've worked</p>
                <div className="flex">
                    <div className="">
                        <button id="tab-0" role="tab" tabIndex="0" aria-selected="true" aria-controls="panel-0" className="no-underline relative transition-all flex items-start w-full h-[150px] px-5 py-1 border-l-2 border-blue-200 bg-transparent text-green-500 font-mono text-xs text-left whitespace-nowrap">
                            <span className="flex align-top">Citrix Systems</span>
                        </button>
                    </div>
                    <div className="">
                        <h3 className="text-2xl">Software Engineer</h3>
                        <h5 className="m-2">May 2023 - Present</h5>
                        <ul className="m-2">
                            <li >
                                <span style={{ color: 'Black' }}>▹</span>
                                Working on Admin UI Portal delivering the features and the
                                fixing the critical bugs from the customer.
                            </li>
                            <li>
                                <span style={{ color: 'Black' }}>▹</span>
                                Enhancing the regression and working on moving the On Prem
                                infrasture to cloud.
                            </li>
                            <li>
                                <span style={{ color: 'Black' }}>▹</span>
                                Maintaining the Sanity pipeline for Gateway.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex">
                    <div className="">
                        <button id="tab-0" role="tab" tabIndex="0" aria-selected="true" aria-controls="panel-0" className="no-underline relative transition-all flex items-start w-full h-[420px] px-5 py-1 border-l-2 border-blue-200 bg-transparent text-green-500 font-mono text-xs text-left whitespace-nowrap">
                            <span>Juniper Networks</span>
                        </button>
                    </div>
                    <div className="">
                        <h3 className="text-2xl">Software Engineer 2</h3>
                        <h5 className="m-2">November 2022 - May 2023</h5>
                        <ul className="m-2">
                            <li >
                                <span className="max-w-10" style={{ color: 'Black' }}>▹</span>
                                I collaborated closely with the product manager at Juniper Networks on UI development, delivering features, and rigorously testing them within JCLOUD. JCLOUD, a software-as-a-service (SaaS) solution, serves as a crucial link between on-premises applications and network devices, facilitating seamless integration. My responsibilities encompassed working extensively on REST API testing using Postman and conducting UI testing using Selenium, ensuring the robustness and reliability of our solutions.
                            </li>
                        </ul>
                        <h3 className="text-2xl">Software Engineer</h3>
                        <h5>July 2021 - November 2022</h5>
                        <ul className="m-2">
                            <li >
                                <span className="max-w-10" style={{ color: 'Black' }}>▹</span>
                                Developed the Automation Robert Framework and implemented the Negative Event API for the testing team, streamlining testing processes.                    
                            </li>
                            <li >
                                <span className="max-w-10" style={{ color: 'Black' }}>▹</span>
                                Contributed to the transition of Robot-written scripts to Python scripts, enhancing automation capabilities.                        
                            </li>
                            <li >
                                <span className="max-w-10" style={{ color: 'Black' }}>▹</span>
                                Spearheaded the enhancement of bandwidth usage tracking features integrated with MX devices.
                            </li>
                            <li >
                                <span className="max-w-10" style={{ color: 'Black' }}>▹</span>
                                Engaged in collaborative efforts with software engineers to design and evaluate application procedures, optimizing system efficiency.
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience