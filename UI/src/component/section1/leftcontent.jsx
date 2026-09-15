import { ArrowUpRight } from "lucide";
import 'remixicon/fonts/remixicon.css'

const Left = () =>
{
    return(
        <div className='h-full w-1/3 bg-white flex flex-col justify-between'>
            <div className='py-8 px-10'>
                <h1 className='text-5xl mb-8 font-bold leading-[1.1]'>Perspective <br /> <span className='text-gray-600'>customer</span> <br/>   <span>segmentation</span></h1>
                <p className='text-m font-medium text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa quibusdam, sequi similique id vitae minima omnis ad dolores architecto rem maiores perspiciatis veritatis saepe quam deserunt quis debitis. A, consequuntur.</p>
            </div>
            <div><i className="ri-arrow-right-up-line text-8xl font-normal"></i></div>
        </div>
    )
}
export default Left