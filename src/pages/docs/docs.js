import Navbar from '../../components/navbar/navbar';
import { RowCenter } from '../../components/ui/custom_tag';
import { Footer } from '../pages';

const Docs = () => {

    const instruction = [
        {
            name: "Step 1: Create new google sheets",
            description: "Create new google sheets",
            image: require('../../assets/pictures/best_seller.png'),
            alt: "create"
        },
        {
            name: "Step 2: Share and copy link",
            description: "Create new google sheets",
            image: require('../../assets/pictures/best_seller.png'),
            alt: "create"
        },
        {
            name: "Step 3: Paste link to Scan to Google Sheet application",
            description: "Create new google sheets",
            image: require('../../assets/pictures/best_seller.png'),
            alt: "create"
        },
        {
            name: "Step 4: Create new configuration",
            description: "Create new google sheets",
            image: require('../../assets/pictures/best_seller.png'),
            alt: "create"
        },
        {
            name: "Step 5: Set default sheets",
            description: "Create new google sheets",
            image: require('../../assets/pictures/best_seller.png'),
            alt: "create"
        },
        {
            name: "Step 6: Start scanning",
            description: "Create new google sheets",
            image: require('../../assets/pictures/best_seller.png'),
            alt: "create"
        },
        {
            name: "Enjoy it",
            description: "Create new google sheets",
            image: require('../../assets/pictures/best_seller.png'),
            alt: "create"
        },


    ]

    return (
        <div className="w-full h-full">

            <Navbar />

            <RowCenter className="min-h-[90vh]">

                <div className="w-full h-full flex flex-col justify-start items-center">
                    {instruction.map((item, index) => (
                        <div key={index} className="mb-10 w-8/12">
                            <p className="mt-4 text-slate-900 text-xl">{item.name}</p>
                            <img className="mt-10 mb-10" src={item.image} alt={item.alt} />
                            <p className="text-slate-500">{item.description}</p>

                        </div>
                    ))
                    }

                </div>


            </RowCenter>

            <Footer />

        </div>
    )
}

export default Docs;