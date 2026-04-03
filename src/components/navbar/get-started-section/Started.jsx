import React from 'react';
import user from '../../../assets/user.png';
import product from '../../../assets/package.png';
import rocket from '../../../assets/rocket.png';

const Started = () => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="mx-auto w-11/12">
                <div className="mx-auto text-center">
                    <h2 className="text-3xl font-bold text-black sm:text-4xl">Get Started In 3 Steps</h2>
                    <p className="mt-4 text-[#6B7280]">
                        Start using premium digital tools in minutes, not hours.
                    </p>
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    <article className="relative rounded-2xl shadow-lg bg-white p-8 text-center">
                        <span className="absolute right-4 top-4 rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold text-white">
                            01
                        </span>

                        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-violet-100">
                            <img src={user} alt="" />
                        </div>

                        <h3 className="text-2xl font-bold text-black">Create Account</h3>
                        <p className="mt-3 text-sm text-[#6B7280]">
                            Sign up for free in seconds. No credit card required to get started.
                        </p>
                    </article>

                    <article className="relative rounded-2xl shadow-lg bg-white p-8 text-center">
                        <span className="absolute right-4 top-4 rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold text-white">
                            02
                        </span>

                        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-violet-100">
                            <img src={product} alt="" />
                        </div>

                        <h3 className="text-2xl font-bold text-black">Choose Products</h3>
                        <p className="mt-3 text-sm text-[#6B7280]">
                            Browse our catalog and select the tools that fit your needs.
                        </p>
                    </article>

                    <article className="relative rounded-2xl shadow-lg bg-white p-8 text-center">
                        <span className="absolute right-4 top-4 rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold text-white">
                            03
                        </span>

                        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-violet-100">
                            <img src={rocket} alt="" />
                        </div>

                        <h3 className="text-2xl font-bold text-black">Start Creating</h3>
                        <p className="mt-3 text-sm text-[#6B7280]">
                            Download and start using your premium tools immediately.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Started;