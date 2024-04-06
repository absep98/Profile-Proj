import React from 'react'

const Experience = () => {
    return (
        <div>
            <div className="p-[200px]">
            <p className="mb-4">Where I've worked</p>
                <div className="flex">       
                    <div className="">
                        <button id="tab-0" role="tab" tabIndex="0" aria-selected="true" aria-controls="panel-0" className="no-underline relative transition-all flex items-start w-full h-[150px] px-5 py-1 border-l-2 border-blue-200 bg-transparent text-green-500 font-mono text-xs text-left whitespace-nowrap">
                            <span className="flex align-top">Citrix Systems</span>
                        </button>
                    </div>
                    <div className="">
                        <h3 className="text-2xl">Software Engineer</h3>
                        <h5>May 2023 - Present</h5>
                        <ul>
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
                        <button id="tab-0" role="tab" tabIndex="0" aria-selected="true" aria-controls="panel-0" className="no-underline relative transition-all flex items-start w-full h-[150px] px-5 py-1 border-l-2 border-blue-200 bg-transparent text-green-500 font-mono text-xs text-left whitespace-nowrap">
                            <span className="flex align-top">Citrix Systems</span>
                        </button>
                        <button id="tab-0" role="tab" tabIndex="0" aria-selected="true" aria-controls="panel-0" className="no-underline relative transition-all flex items-center w-full h-12 px-5 py-1 border-l-2 border-blue-200 bg-transparent text-green-500 font-mono text-xs text-left whitespace-nowrap">
                            <span>Juniper Networks</span>
                        </button>
                    </div>
                    <div className="">
                        <h3 className="text-2xl">Software Engineer</h3>
                        <h5>May 2023 - Present</h5>
                        <ul>
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
            </div>
        </div>
    )
}

export default Experience