import React from 'react';
import { faNetworkWired, faFileExport, faShareAlt, faPaperPlane, faEdit, faAngleDoubleRight, faSearch, faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Feature = () => {

  const features = [
    {
      name: 'Custom Schemas',
      description:
        'Quickly enter codes by hand or edit scanned rows to provide additional data or correct entries.',
      icon: faNetworkWired,
    },
    {
      name: 'Manual Editing',
      description:
        'Quickly enter codes by hand or edit scanned rows to provide additional data or correct entries.',
      icon: faEdit,
    },
    {
      name: 'Settings Export',
      description:
        'Easily export your custom configurations and share them with your team members.',
      icon: faFileExport,
    },
    {
      name: 'Continuous Scanning',
      description:
        'Keep scanning mode alive until you are finished with your batch.',
      icon: faAngleDoubleRight,
    },
    {
      name: 'Background sending',
      description:
        'Transfer data from the application to google sheet can be done in background, user can have more control and perform other tasks.',
      icon: faShareAlt,
    },
    {
      name: 'Search QR, Barcode with google',
      description:
        'Search information for QR codes with just an single click, helpful for searching product infomation',
      icon: faSearch,
    },
    {
      name: 'Automated Sending',
      description:
        'Automatically send data to your sheet after each scan.',
      icon: faPaperPlane,
    },
    {
      name: 'User-Defined Labels',
      description:
        'Quickly tag your scans with your choice from a list of predefined labels.',
      icon: faTag,
    },
  ];

  return (
    <div className="py-20 relative" id="feature">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="lg:text-center mb-10">
          {/* <h2 className="text-base text-[#c542a6] font-semibold tracking-wide uppercase">Transactions</h2> */}
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to save your cost
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Start your own business with the lowest cost. Scan to Google Sheets provide users many powerful features which will make your business easier and simpler.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:gap-y-20">
            {features.map((feature, index) => (
              <div key={index} className="relative custom_feature_class opacity-0">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#c542a6] text-white">
                    {/* <feature.icon className="h-6 w-6" aria-hidden="true" /> */}
                    <FontAwesomeIcon icon={feature.icon} className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>

      </div>
    </div>
  )
};

export default Feature;


