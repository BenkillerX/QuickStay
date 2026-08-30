import { FaArrowRight } from "react-icons/fa6";
import Quick3 from "../../assets/images/Quick3.jpg"
import formatPrice from "../../utils/FormatPrice";
const VerifiedHomes = () => {

    const verifiedHomes = [
        {
            housewImage:Quick3,
            houseName:"Mordern Bungalow",
            houseLocation:"Lekki",
            houseState:"Lagos",
            houseType:"Apartment",
            houseProperty1:"Wi-fi",
            houseProperty2:"Air Conditioning",
            houseProperty3:"Parking",
            houseProperty4:"Security",
            housePrice:85000,

        },
        {
            housewImage:Quick3,
            houseName:"Mordern Bungalow",
            houseLocation:"Lekki",
            houseState:"Lagos",
            houseType:"Apartment",
            houseProperty1:"Wi-fi",
            houseProperty2:"Air Conditioning",
            houseProperty3:"Parking",
            houseProperty4:"Security",
            housePrice:85000,

        },
        {
            housewImage:Quick3,
            houseName:"Mordern Bungalow",
            houseLocation:"Lekki",
            houseState:"Lagos",
            houseType:"Apartment",
            houseProperty1:"Wi-fi",
            houseProperty2:"Air Conditioning",
            houseProperty3:"Parking",
            houseProperty4:"Security",
            housePrice:85000,

        },
        {
            housewImage:Quick3,
            houseName:"Mordern Bungalow",
            houseLocation:"Lekki",
            houseState:"Lagos",
            houseType:"Apartment",
            houseProperty1:"Wi-fi",
            houseProperty2:"Air Conditioning",
            houseProperty3:"Parking",
            houseProperty4:"Security",
            housePrice:85000,

        },
        {
            housewImage:Quick3,
            houseName:"Mordern Bungalow",
            houseLocation:"Lekki",
            houseState:"Lagos",
            houseType:"Apartment",
            houseProperty1:"Wi-fi",
            houseProperty2:"Air Conditioning",
            houseProperty3:"Parking",
            houseProperty4:"Security",
            housePrice:85000,

        },
    ]


  return (
    <section className='w-[85%] min-h-60  m-auto mb-30'>
        {/* Verified Homes Header */}
        <div className="flex justify-between items-center mb-5.5">
            <div>
                <h1 className="text-2xl font-bold">Verified homes</h1>
                <p className="text-sm">Reviewed by Quickstay before publishing.</p>
            </div>
            <div>
                View All <FaArrowRight className="inline-block"/>
            </div>
        </div>
        {/* Homes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                verifiedHomes.map((home)=>(
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-xl transition">
                        
                        <img className="w-full h-72 object-cover" src={home.housewImage} alt={home.houseName} />
                        <div className="px-4 pb-4">
                            <h1 className="text-lg font-medium">{home.houseName}</h1>
                            <div className="flex gap-2 text-sm">
                                <span className="inline-block">{home.houseLocation}</span>    
                                <span className="inline-block">{home.houseState}</span>    
                                <span className="inline-block">{home.houseType}</span>    
                            </div>
                            <div className="flex gap-2 text-sm">
                                <span>{home.houseProperty1}</span>
                                <span>{home.houseProperty2}</span>
                                <span>{home.houseProperty3}</span>
                                <span>{home.houseProperty4}</span>
                            </div>
                            <h1 className="text-lg font-medium mt-2">₦{formatPrice(home.housePrice)}/night</h1>
                        </div>   
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default VerifiedHomes