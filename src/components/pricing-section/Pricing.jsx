import React from 'react';
import right from '../../assets/green_right.png';

const Pricing = () => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="mx-auto w-11/12 max-w-6xl">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-black sm:text-5xl">Simple, Transparent Pricing</h2>
                    <p className="mt-4 text-[#6B7280]">
                        Choose the plan that fits your needs. Upgrade or downgrade anytime.
                    </p>
                </div>

                <div className="mt-10 grid gap-5 lg:grid-cols-3">
                    <article className="rounded-2xl bg-[#F9FAFC] p-6 shadow-sm">
                        <h3 className="text-3xl font-bold text-black">Starter</h3>
                        <p className="mt-2 text-[#6B7280]">Perfect for getting started</p>

                        <div className="mt-5 text-black">
                            <span className="text-5xl font-bold">$0</span>
                            <span className="text-3xl text-[#6B7280]">/Month</span>
                        </div>

                        <ul className="mt-6 space-y-2 text-[#6B7280]">
                            <li className="flex items-center gap-2"><img src={right} alt="" className="h-4 w-4 shrink-0" /> <span>Access to 10 free tools</span></li>
                            <li className="flex items-center gap-2"><img src={right} alt="" className="h-4 w-4 shrink-0" /> <span>Basic templates</span></li>
                            <li className="flex items-center gap-2"><img src={right} alt="" className="h-4 w-4 shrink-0" /> <span>Community support</span></li>
                            <li className="flex items-center gap-2"><img src={right} alt="" className="h-4 w-4 shrink-0" /> <span>1 project per month</span></li>
                        </ul>

                        <button className="btn btn-primary mt-10 w-full rounded-full">Get Started Free</button>
                    </article>

                    <article className="relative rounded-2xl bg-linear-to-b from-primary to-secondary p-6 text-white shadow-lg">
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-warning px-4 py-1 text-xs font-semibold text-warning-content">
                            Most Popular
                        </span>

                        <h3 className="text-3xl font-bold">Pro</h3>
                        <p className="mt-2 text-white/80">Best for professionals</p>

                        <div className="mt-5">
                            <span className="text-5xl font-bold">$29</span>
                            <span className="text-3xl text-white/80">/Month</span>
                        </div>

                        <ul className="mt-6 space-y-2 text-white/90">
                            <li>✓ Access to all premium tools</li>
                            <li>✓ Unlimited templates</li>
                            <li>✓ Priority support</li>
                            <li>✓ Unlimited projects</li>
                            <li>✓ Cloud sync</li>
                            <li>✓ Advanced analytics</li>
                        </ul>

                        <button className="btn mt-10 w-full rounded-full border-none bg-white text-primary hover:bg-base-100">
                            Start Pro Trial
                        </button>
                    </article>

                    <article className="rounded-2xl bg-[#F9FAFC] p-6 shadow-sm">
                        <h3 className="text-3xl font-bold text-black">Enterprise</h3>
                        <p className="mt-2 text-[#6B7280]">For teams and businesses</p>

                        <div className="mt-5 text-black">
                            <span className="text-5xl font-bold">$99</span>
                            <span className="text-3xl text-[#6B7280]">/Month</span>
                        </div>

                        <ul className="mt-6 space-y-2 text-[#6B7280]">
                            <li className="flex items-center gap-2"><img src={right} alt="" className="h-4 w-4 shrink-0" /> <span>Everything in Pro</span></li>
                            <li className="flex items-center gap-2"><img src={right} alt="" className="h-4 w-4 shrink-0" /> <span>Team collaboration</span></li>
                            <li className="flex items-center gap-2"><img src={right} alt="" className="h-4 w-4 shrink-0" /> <span>Custom integrations</span></li>
                            <li className="flex items-center gap-2"><img src={right} alt="" className="h-4 w-4 shrink-0" /> <span>Dedicated support</span></li>
                            <li className="flex items-center gap-2"><img src={right} alt="" className="h-4 w-4 shrink-0" /> <span>SLA guarantee</span></li>
                            <li className="flex items-center gap-2"><img src={right} alt="" className="h-4 w-4 shrink-0" /> <span>Custom branding</span></li>
                        </ul>

                        <button className="btn btn-primary mt-10 w-full rounded-full">Contact Sales</button>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Pricing;