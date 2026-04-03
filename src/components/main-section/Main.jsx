import React, { useEffect, useState } from 'react';

const tagStyles = {
    popular: 'badge badge-info badge-outline',
    new: 'badge badge-success badge-outline',
    'best seller': 'badge badge-warning badge-outline',
};

const Main = ({ cartItems, onAddToCart, onRemoveFromCart, onClearCart }) => {
    const [activeSection, setActiveSection] = useState('products');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            const response = await fetch('/data.json');
            const data = await response.json();
            setProducts(data);
        };

        loadProducts();
    }, []);

    return (
        <section className="bg-white py-16">
            <div className="mx-auto w-11/12">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-[#101727]">Premium Digital Tools</h2>
                    <p className="mx-auto mt-3 max-w-2xl text-sm text-[#6B7280]">
                        Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
                    </p>

                    <div className="mt-6 flex items-center justify-center gap-3">
                        <button
                            type="button"
                            onClick={() => setActiveSection('products')}
                            className={`btn rounded-full px-7 ${
                                activeSection === 'products' ? 'btn-primary text-white' : 'btn-outline btn-primary'
                            }`}
                        >
                            Products
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveSection('cart')}
                            className={`btn rounded-full px-7 ${
                                activeSection === 'cart' ? 'btn-primary text-white' : 'btn-outline btn-primary'
                            }`}
                        >
                            Cart ({cartItems.length})
                        </button>
                    </div>
                </div>

                {activeSection === 'products' ? (
                    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {products.map((product) => (
                            <article key={product.id} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                                <div className="mb-4 flex items-center justify-between">
                                    <span className="text-2xl" aria-hidden="true">{product.icon}</span>
                                    <span className={tagStyles[product.tag]}>{product.tagType}</span>
                                </div>

                                <h3 className="text-xl font-bold text-[#101727]">{product.name}</h3>
                                <p className="mt-2 text-sm text-[#6B7280]">{product.description}</p>

                                <p className="mt-4 text-3xl font-bold text-[#101727]">
                                    ${product.price}
                                    <span className="ml-1 text-base font-medium text-[#6B7280]">/{product.period}</span>
                                </p>

                                <ul className="mt-4 space-y-1.5 text-sm text-[#6B7280]">
                                    {product.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2">
                                            <span className="text-green-600">✓</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    type="button"
                                    className="btn btn-primary mt-6 w-full rounded-full text-white"
                                    onClick={() => onAddToCart(product)}
                                >
                                    Buy Now
                                </button>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="mx-auto mt-10 max-w-2xl space-y-4">
                        {cartItems.length === 0 ? (
                            <div className="rounded-xl border border-dashed border-gray-300 p-10 text-center text-[#6B7280]">
                                Your cart is empty.
                            </div>
                        ) : (
                            <>
                                <div className="space-y-3">
                                    {cartItems.map((item) => (
                                        <article key={item.id} className="flex items-center justify-between rounded-xl border border-gray-200 p-4">
                                            <div className="flex items-center gap-3">
                                                <span className="text-xl" aria-hidden="true">{item.icon}</span>
                                                <div>
                                                    <h4 className="font-semibold text-[#101727]">{item.name}</h4>
                                                    <p className="text-sm text-[#6B7280]">${item.price}/{item.period}</p>
                                                </div>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => onRemoveFromCart(item.id)}
                                                className="btn btn-sm btn-outline btn-error"
                                            >
                                                Remove
                                            </button>
                                        </article>
                                    ))}
                                </div>

                                <button type="button" onClick={onClearCart} className="btn btn-primary w-full rounded-full text-white">
                                    Proceed to Checkout
                                </button>
                            </>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Main;