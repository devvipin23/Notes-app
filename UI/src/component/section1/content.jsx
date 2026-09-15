import Left from "./leftcontent";
import Right from "./rightcontent";

const Content =(props)=>
{
    return(
        <div className='bg-white h-[90vh] py-8 px-10 flex justify-between items-center'>
            <Left />
            <Right users={props.users} />
        </div>
    )
}
export default Content