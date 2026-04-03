import React from 'react';
import banner from '../../assets/banner.png';
const Hero = () => {
    return (
        <section className="bg-white">
            <div className="mx-auto grid w-11/12 items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16">
                <div className="space-y-6">
                    <div>
                        <span className="badge badge-primary badge-outline rounded-full px-4 py-3 text-xs font-medium">
                            New: AI-Powered Tools Available
                        </span>
                    </div>

                    <h1 className="text-4xl text-[#101727] font-bold sm:text-5xl lg:text-6xl">
                        Supercharge Your
                        <br />
                        Digital Workflow
                    </h1>

                    <p className="max-w-xl text-base text-[#6B7280] sm:text-lg">
                        Access premium AI tools, design assets, templates, and productivity
                        software-all in one place. Start creating faster today.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 pt-2">
                        <button className="btn btn-primary rounded-full px-7">Explore Products</button>
                        <button className="btn btn-outline btn-primary rounded-full px-7">
                            <span className="text-sm">▶</span>
                            Watch Demo
                        </button>
                    </div>
                </div>

                <div className="mx-auto h-107 w-full max-w-md rounded-xl bg-base-300/40 shadow-sm">
                    <div className="h-full w-full">
                        <img src={banner} alt="Banner" className="h-full w-full"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;