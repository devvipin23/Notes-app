const Text = (props) =>
{
    return(
        <div className=' w-full h-full absolute top-0 left-0 flex flex-col justify-between p-5'>
                <h1 className='bg-white text-xl font-semibold w-10 h-10 flex items-center justify-center rounded-full'>{props.id+1}</h1>
                <div>
                <p className='mb-10 text-sm w-[90%] text-white leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, consequatur. Laboriosam veniam recusandae harum nihil.</p>
                <div className='flex justify-between'>
                <button className='bg-blue-600 rounded-full py-2 px-5 text-white'>{props.tag}</button>
                <button className='bg-blue-600 rounded-full py-2 px-3 text-white'><i className="ri-arrow-right-line"></i></button>
                </div>
                </div>
            </div>
    )
}
export default Text