import Content from "./content";
import Navbar from "./Navbar";

const Section1 =(props)=>
{
    console.log(props);
    
    return(
        <div className='h-screen w-full bg-white'>
            <Navbar />
            <Content users={props.users}/>
        </div>
    )
}
export default Section1