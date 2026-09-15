import Card from "./card";

const Right =(props)=>
{
    console.log(props);
    
    return(
        <div className='h-full w-2/3 overflow-x-auto [scrollbar-width:none]  rounded-4xl bg-white p-6 flex flex-nowrap gap-10'>
            {props.users.map(function(elem,idx)
            {
                return <Card key={idx} id={idx} img={elem.img} tag={elem.tag}/>
            })}

        </div>
    )
}
export default Right