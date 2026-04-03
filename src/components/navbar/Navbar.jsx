import React from 'react';
import cart from '../../assets/cart.png';

const Navbar = ({ cartCount }) => {
    return (
        <header className="w-full border-b border-sky-200 bg-white">
            <nav className="mx-auto flex h-20 max-w-11/12 items-center justify-between px-6">
                <a className="text-5 font-bold tracking-tight text-violet-600" href="#">
                    DigiTools
                </a>

                <ul className="hidden items-center gap-8 text-sm font-medium text-gray-700 lg:flex">
                    <li><a className="transition-colors hover:text-violet-600" href="">Products</a></li>
                    <li><a className="transition-colors hover:text-violet-600" href="">Features</a></li>
                    <li><a className="transition-colors hover:text-violet-600" href="">Pricing</a></li>
                    <li><a className="transition-colors hover:text-violet-600" href="">Testimonials</a></li>
                    <li><a className="transition-colors hover:text-violet-600" href="">FAQ</a></li>
                </ul>

                <div className="flex items-center gap-4 text-sm font-medium text-gray-700">
                    <div className="relative">
                        <img src={cart} alt="Cart" />
                        <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-violet-600 px-1 text-xs font-bold text-white">
                            {cartCount}
                        </span>
                    </div>
                    <a className="hidden transition-colors hover:text-violet-600 sm:inline" href="">
                        Login
                    </a>
                    <a className="rounded-full bg-violet-600 px-5 py-2.5 text-white transition-colors hover:bg-violet-700" href="">
                        Get Started
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;