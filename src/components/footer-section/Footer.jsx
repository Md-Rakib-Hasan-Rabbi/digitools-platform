import React from 'react';
import instagram from '../../assets/Instagram.png';
import facebook from '../../assets/Facebook.png';
import twitter from '../../assets/Twitter.png';

const Footer = () => {
    return (
        <footer className="bg-[#081632] text-white">
            <div className="mx-auto w-11/12 max-w-6xl py-14 lg:py-16">
                <div className="grid gap-10 border-b border-white/15 pb-12 sm:grid-cols-2 lg:grid-cols-5">
                    <div className="sm:col-span-2 lg:col-span-1">
                        <h2 className="text-5xl font-bold">DigiTools</h2>
                        <p className="mt-4 text-sm leading-7 text-white/70">
                            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold">Product</h3>
                        <ul className="mt-4 space-y-3 text-white/70">
                            <li><a className="hover:text-white" href="#">Features</a></li>
                            <li><a className="hover:text-white" href="#">Pricing</a></li>
                            <li><a className="hover:text-white" href="#">Templates</a></li>
                            <li><a className="hover:text-white" href="#">Integrations</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold">Company</h3>
                        <ul className="mt-4 space-y-3 text-white/70">
                            <li><a className="hover:text-white" href="#">About</a></li>
                            <li><a className="hover:text-white" href="#">Blog</a></li>
                            <li><a className="hover:text-white" href="#">Careers</a></li>
                            <li><a className="hover:text-white" href="#">Press</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold">Resources</h3>
                        <ul className="mt-4 space-y-3 text-white/70">
                            <li><a className="hover:text-white" href="#">Documentation</a></li>
                            <li><a className="hover:text-white" href="#">Help Center</a></li>
                            <li><a className="hover:text-white" href="#">Community</a></li>
                            <li><a className="hover:text-white" href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold">Social Links</h3>
                        <div className="mt-4 flex items-center gap-3">
                            <a href=""><img src={instagram} alt="" /></a>
                            <a href=""><img src={facebook} alt="" /></a>
                            <a href=""><img src={twitter} alt="" /></a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex flex-col gap-4 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
                    <p>© 2026 Digitools. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a className="hover:text-white" href="#">Privacy Policy</a>
                        <a className="hover:text-white" href="#">Terms of Service</a>
                        <a className="hover:text-white" href="#">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;