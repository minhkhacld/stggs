import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

const Pricing = () => {
    const pricing = [
        {
            name: 'Free',
            description: 'All the basic for staring new business',
            price: 0,
            includes: [
                { name: "Ads removing", status: 0, },
                { name: "Unlimeted Sheets", status: 1, },
                { name: "Unlimited Scan", status: 1, },
                { name: "Auto send data", status: 0, },
                { name: "Send data in background", status: 0, },
                { name: "Send batch data", status: 0, },
                { name: "Manual editing", status: 0, },
                { name: "Multi scan", status: 0, },
            ],
        },
        {
            name: 'Premium',
            description: 'Unblock all features, buy once and use forever',
            price: 3.4,
            includes: [
                { name: "Ads removing", status: 1, },
                { name: "Unlimeted Sheets", status: 1, },
                { name: "Unlimited Scan", status: 1, },
                { name: "Auto send data", status: 1, },
                { name: "Send data in background", status: 1, },
                { name: "Send batch data", status: 1, },
                { name: "Manual editing", status: 1, },
                { name: "Multi scan", status: 1 },
            ],
        },
    ];

    return (
        <div className=" w-full relative flex flex-col  items-center justify-center pb-10">
            <div className="w-full flex flex-col justify-center content-center items-center">
                <h2 className="items-center mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Pricing Plans</h2>
                <p className="mt-4 text-xl text-gray-500 lg:mx-auto p-2">Start using for free, and then business growing up. Account plans unblock additional features.</p>
            </div>
            <div className="w-full mt-10 gap-10 flex flex-col sm:flex-row justify-center item-center content-center ">
                {
                    pricing.map((item, index) => (
                        <div className="w-full min-h-[600px] sm:w-3/12 flex flex-row justify-center item-center" key={index}>

                            <div className="w-10/12 sm:w-full divide-y divide-gray-400  border border-slate-400 shadow-md rounded-3xl flex flex-col justify-start 
                            content-center pt-5 pb-2">

                                <div className="relative w-full justify-center content-center items-center">
                                    {
                                        item.name === "Premium" &&
                                        <img src={require("../../../assets/pictures/best_seller.png")}
                                            className="lg:block absolute right-0 top-0 translate-x-6 -translate-y-5 -rotate-45 inset-y-0 w-20 h-20"
                                            alt="best-seller" />
                                    }
                                    <h6 className="text-center mt-2 text-lg leading-6 font-medium text-gray-900">{item.name}</h6>
                                    <p className="text-center mt-2 text-base text-gray-500">{item.description}</p>
                                    <div className="bg-[#c542a6] mt-2 flex flex-row justify-center item-center content-center text-white text-2xl p-3">
                                        {item.price}$
                                    </div>
                                </div>
                                <div className="w-full mt-4 flex flex-col item-center content-center justify-start p-4">
                                    {
                                        item.includes.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex flex-row justify-center items-center w-full mt-3">
                                                <FontAwesomeIcon icon={feature.status === 0 ? faXmark : faCheck}
                                                    color={feature.status === 0 ? 'red' : 'green'} size={20}
                                                />
                                                <p className="w-8/12 text-left pl-1.5">{feature.name}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default Pricing;