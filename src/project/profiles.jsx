import { User } from "lucide-react";
const Profile = (props) =>
{
    return(
        
        
        <div className="parent">
           
            <div className="card">
                <div className="top">
                    <button className="btn1">{props.available}</button>
                     
                    <h2>$55/hr</h2>
                   
                </div>
                <div className="middle">
                    <div className="imgmid">
                    <img src={props.logo} alt="Error" />
                    </div>
                    <div className="text">
                    <h2>{props.name}</h2>
                    <p>{props.work}</p>
                    <p><User className="usericon" size={14}/> Epic Coder</p>
                    </div>
                    <div className="work">
                        <button className="ui">{props.btn1}</button>
                        <button className="ux">{props.btn2}</button>
                        <button className="photo">{props.btn3}</button>
                        <button className="plus">{props.btn4}</button>
                    </div>
                </div>
                <div className="bottom">
                    <p>Wade is 32 year old UI/UX desiner, with an</p>
                    <p>impressive portfolo behind him.</p>
                    <button>VIEW PROFILE</button>
                </div>
            </div>
        </div>
    )
}
export default Profile;