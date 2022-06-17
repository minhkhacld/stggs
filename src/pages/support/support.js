import { useState, Fragment } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import background from '../../assets/pictures/wave.svg';

export default function Support() {

    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <div className="w-full h-full">

            <Navbar />

            <div className="w-full h-full flex flex-col md:flex-row sm:flex-row justify-center items-center"
                style={{ backgroundImage: `url(${background})`, backgroundPosition: "center", backgroundSize: 'cover' }}
            >
                {/* <object data={background} type="image/svg+xml"
                    className="w-full absolute bottom-0 -z-1 opacity-70"
                ></object> */}

                <div className="w-6/12 h-full flex flex-col justify-center items-center">

                    <div className="w-[100%] md:w-[70%]  text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                        We are here to help you
                    </div>

                </div>

                <div className="w-full md:w-6/12  h-full pl-10 pr-10 flex flex-col justify-center items-center">

                    <div className="bg-white p-10 shadow-lg rounded-2xl border-slate-500">
                        <Accordion open={open === 1} onClick={() => handleOpen(1)}>
                            <AccordionHeader>What is Scan to google Sheets?</AccordionHeader>
                            <AccordionBody>
                                Scan to google Sheets is an mobile application that allows you to scan and send data directly to Google sheet.
                            </AccordionBody>
                        </Accordion>

                        <Accordion open={open === 2} onClick={() => handleOpen(2)}>
                            <AccordionHeader>Which kind of business Scan to google Sheets can be use?</AccordionHeader>
                            <AccordionBody>
                                Scan to google Sheets can be use for inventory management, attendance tracking, store management, and any kind of business that use QR, Barcode for tracking and management.
                            </AccordionBody>
                        </Accordion>

                        <Accordion open={open === 3} onClick={() => handleOpen(3)}>
                            <AccordionHeader>What can I do with Scan To Google Sheets?</AccordionHeader>
                            <AccordionBody>
                                Users can use Scan to google Sheets to scan QR, Barcode. Generate QR code, store to divice storage or share QR codes to others applications.
                            </AccordionBody>
                        </Accordion>

                        <Accordion open={open === 4} onClick={() => handleOpen(4)}>
                            <AccordionHeader>How much money should i pay for Scan to Google Sheets?</AccordionHeader>
                            <AccordionBody>
                                You only need to pay once, and then use it forever with no extra cost adding.
                            </AccordionBody>
                        </Accordion>
                    </div>


                </div>
            </div>

            <Footer />
        </div>
    );
}