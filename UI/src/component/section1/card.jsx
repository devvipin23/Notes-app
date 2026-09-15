import Text from "./card_text";

const Card = (props) =>
{
    return(
        <div className='h-full shrink-0 overflow-hidden w-60 bg-red-600 rounded-4xl relative'>
            <img className='w-full h-full object-cover' src={props.img} alt="error" />
            <Text tag={props.tag} id={props.id}/>
        </div>
    )
}
export default Card