import { RowCenter } from '../../components/ui/custom_tag';
import React from 'react';

const Docs = () => {

    const instruction = [
        {
            name: "Step 1: Create new google sheets",
            description: "Create new google sheets",
            image: require('../../assets/pictures/docs/create.PNG'),
            alt: "create",
            text: `In sheets.google.com create a new spreadsheet.
            Then click the Share button.`,
        },
        {
            name: "Step 2: Share and copy link",
            description: "Create new google sheets",
            image: require('../../assets/pictures/docs/copyLink.png'),
            alt: "copy",
            text: `Click on Advanced and select Anyone with the Link.
            Then change access to Can Edit.
            Save changes.`,
        },
        {
            name: "Step 3: Paste link to Scan to Google Sheet application",
            description: "Create new google sheets",
            image: require('../../assets/pictures/docs/pasteUrl.png'),
            alt: "paste",
            text: `Still in Share settings open Get Shareable Link.
            Copy the URL link.
            Paste into App settings.`,
        },
        {
            name: "Step 4: Create new configuration",
            description: "Create new google sheets",
            image: require('../../assets/pictures/docs/addSheets.png'),
            alt: "add",
            text: `Create a new google sheets configuration in your app. Your google sheets will be automatically generated with sheets name, column, options. And the app will transfer data to google sheet through these configurations when you send data.`,
        },
        {
            name: "Step 5: Set default sheets",
            description: "Create new google sheets",
            image: require('../../assets/pictures/docs/setDefaultSheet.png'),
            alt: "set default",
            text: `Users can add multiple sheets configurations, only default sheet will be selected to transfer data.`,
        },
        {
            name: "You're Ready to Start Scanning!",
            description: "Create new google sheets",
            image: require('../../assets/pictures/docs/result.jpg'),
            alt: "enjoy",
            text: `Allow the App access to your Camera.
            Once you have finished scanning press Send.
            Your scans will be available in your Spreadsheet.`,
        },
    ];

    return (
        <div className="w-full h-full">

            <RowCenter className="min-h-[90vh]">

                <div className="w-full h-full  p-4 flex flex-col justify-start items-center">
                    <div className="font-bold text-5xl mt-10">Public Sheet Set-up Guide</div>
                    <p className="font-medium text-slate-400 text-xl mt-10">This guide assumes you are using Google Sheets from a web browser or mobile device.</p>
                    {instruction.map((item, index) => (
                        <div key={index} className={`mb-10 w-full sm:w-8/12 gap-10 mt-10 flex flex-col ${index % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'} justify-center item-center`}>
                            <div className="w-12/12 sm:w-6/12 flex flex-col justify-center items-center">
                                <p className="mt-4 font-bold text-[color:var(--logo)] text-3xl w-full">{item.name}</p>
                                <p className="text-slate-400 text-xl mt-2">{item.text}</p>
                            </div>
                            <div className="w-12/12 sm:w-6/12 flex flex-col justify-center items-center shadow-2xl">
                                <img className="mt-10 mb-10" src={item.image} alt={item.alt} />
                            </div>
                        </div>
                    ))
                    }
                </div>

            </RowCenter>

        </div>
    );
};

export default Docs;