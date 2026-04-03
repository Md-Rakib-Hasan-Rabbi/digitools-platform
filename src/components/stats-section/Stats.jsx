import React from 'react';

const Stats = () => {
    return (
        <section className="w-full bg-linear-to-r from-primary to-secondary py-8">
            <div className="mx-auto w-full">
                <div className="grid grid-cols-1 text-center md:grid-cols-3">
                    <div className="py-4 md:border-r">
                        <h3 className="text-5xl font-bold">50K+</h3>
                        <p>Active Users</p>
                    </div>
                    <div className="py-4 md:border-r">
                        <h3 className="text-5xl font-bold">200+</h3>
                        <p>Premium Tools</p>
                    </div>
                    <div className="py-4">
                        <h3 className="text-5xl font-bold">4.9</h3>
                        <p>Rating</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;