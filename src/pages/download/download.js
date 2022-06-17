import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import background from '../../assets/pictures/wave.svg';

const Download = () => {

    return (
        <div className="w-full h-full overflow-y-auto">

            <Navbar />

            <div className="relative w-full h-full  min-h-[100vh] sm:min-h-[90vh] flex flex-col md:flex-row sm:flex-row justify-center items-center"
                style={{ backgroundImage: `url(${background})`, backgroundPosition: "center", backgroundSize: 'cover' }}
            >
                {/* <object data={background} type="image/svg+xml"
                    className="absolute bottom-0 z-1 opacity-70"
                ></object> */}

                <div className="w-6/12 h-full mb-20 sm:mb-0 flex flex-col justify-center items-center">

                    <div className="w-[100%] md:w-[70%]  text-4xl tracking-tight font-extrabold text-[#1E293B] sm:text-white sm:text-5xl md:text-6xl">
                        Download now and start scanning
                    </div>

                </div>

                <div className="w-full md:w-6/12 h-full pl-10 pr-10 flex flex-col justify-center items-center">
                    <div className="bg-white p-10 shadow-2xl rounded-2xl border-slate-500 flex flex-col justify-center items-center">
                        <div className="mb-10 flex flex-col justify-center items-center">
                            <p className="text-2xl mb-3">Free</p>
                            <a href="https://play.google.com/store/apps/details?id=com.scantogooglesheets"
                                className="flex flex-col justify-center items-center"
                            >
                                <img
                                    className="w-10/12"
                                    src={require('../../assets/pictures/google_play_button.png')}
                                    alt="play_store" />

                            </a>
                        </div>
                        <div className="mb-10  flex flex-col justify-center items-center">
                            <p className="text-2xl mb-3">Premium</p>
                            <a href="https://play.google.com/store/apps/details?id=com.scantogooglesheetspro"
                                className="flex flex-col justify-center items-center"
                            >
                                <img
                                    className="w-10/12"
                                    src={require('../../assets/pictures/google_play_button.png')}
                                    alt="play_store" />

                            </a>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Download;