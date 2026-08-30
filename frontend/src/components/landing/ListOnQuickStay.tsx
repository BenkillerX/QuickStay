import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa6'
const ListOnQuickStay = () => {
    const stayPeriod = [
        {
        title:"Short stays",
        des:"Nightly pricing for weekends and short trips."
        },
        {
        title:"Long stays",
        des:"Weekly and monthly rates for extended stays." 
        },
        {
            title:"Flexible stays",
            des:"Set your own minimum and maximum nights."
        },
    ]
  return (
    <section className='w-full min-h-140 bg-gray-200 pt-15 pb-15 lg:px-28'>
        {/* Have A Property card*/}
        <div className=' bg-white flex flex-col gap-8 md:flex-row justify-between items-center px-8 py-8 rounded-2xl mb-10'>
            <div>
                <h1 className='text-lg md:text-2xl lg:text-4xl font-medium mb-4'>Have a propery? List it on Quickstay.</h1>
                <p className='text-md max-w-140 mb-10 text-gray-400'>Verify once, publish professionally and manage reservations, availability and earnings from one dashboard.</p>
                <Link to=""
                className='px-4 py-4 bg-orange-500 rounded-md text-white'>
                    Become a Host
                </Link>
            </div>
            <div className='flex flex-col sm:flex-row gap-4 w-full md:w-1/2'>
               {stayPeriod.map((period)=>(
                <div className='px-4 py-4 bg-gray-200 rounded-sm'>
                    <h1 className='text-lg font-md'>{period.title}</h1>
                    <p className='text-sm text-gray-400'>{period.des}</p>
                </div>
               ))}
            </div>
        </div>
        {/* Stars */}
        <div className='px-6 md:px-4'>
            <h1 className='text-2xl font-medium'>Guest reviews</h1>
            
            {/* container to wrap all reviews */}
            <div className=''>

            <div className='max-w-100 h-30 border border-gray-400 rounded-2xl px-4 py-2'>
                <FaStar className='inline-block text-orange-500'/>
                <FaStar className='inline-block text-orange-500'/>
                <FaStar className='inline-block text-orange-500'/>
                <FaStar className='inline-block text-orange-500'/>
                <FaStar className='inline-block text-orange-500'/>
               
                <h1>“Exactly as described — spotless, quiet and the check-in code worked perfectly.”</h1>
                <p>Samuel Adeleke · Modern 2-Bedroom Apartment</p>
            </div>
            </div>
        </div>
        
    </section>
  )
}

export default ListOnQuickStay