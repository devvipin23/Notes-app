import {Bookmark} from "lucide-react"
import {useState} from "react";
function Create(props)
{
const [zoom, setzoom]= useState(false);
const change=()=>
{
    setzoom(!zoom);
}
    return(
       <div className="parent">
           <div className="card">
            <div className="top">
                <img src={props.logo} alt="" onClick={change}/>
                {zoom && (
                    <div className="zoom"  onClick={change}>
                    <img src={props.logo} alt="" onClick={(e) => e.stopPropagation()} />
                </div>
                )}
                <button>Save<Bookmark size={14} /></button>
            </div>
            <div className="centre">
                <h3>{props.name }<span> {props.date}</span></h3>
                <h2>{props.post}</h2>
                <div className="tag">
                    <h4>{props.tag1}</h4>
                    <h4>{props.tag2}</h4>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h3>{props.pay}</h3>
                    <p>{props.location}</p>
                </div>
                <button>Apply Now</button>
            </div>
           </div>
        </div>

    );
}
export default Create;

//       -----------------------------App.jsx--------------------------------

// const App = () =>
//     {
//         const information = [
//             {
//                 logo:"https://www.pngplay.com/wp-content/uploads/3/Amazon-Logo-Transparent-PNG.png",
//                 name:"Amazon",
//                 date:"5 Days Ago",
//                 post:"UI/UX",
//                 tag1:"Full Time",
//                 tag2:"Senior Level",
//                 pay:"$45/hour",
//                 location:"Mumbai, India"
//             },
//             {
//                 logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ReYZBRNNUBJvly8XZepi3a3R6O7PDZej4rOjzI2Jln8K1lrHOMHhmzgu&s=10",
//                 name:"Google",
//                 date:"2 week Ago",
//                 post:"Software Developer",
//                 tag1:"Part Time",
//                 tag2:"Senior Level",
//                 pay:"$85/hour",
//                 location:"Hydrabad, India"
//             },
//             {
//                 logo:"https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
//                 name:"Netflix",
//                 date:"5 Days Ago",
//                 post:"AI Engineer",
//                 tag1:"Full Time",
//                 tag2:"Senior Level",
//                 pay:"$100/hour",
//                 location:"Pune, India"
//             },
//             {
//                 logo:"https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/3840px-Facebook_f_logo_%282021%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
//                 name:"Facebook",
//                 date:"3 week Ago",
//                 post:"Frontend Developer",
//                 tag1:"Part Time",
//                 tag2:"Senior Level",
//                 pay:"$60/hour",
//                 location:"Menlo Park, USA"
//             },
//             {
//                 logo:"https://img.magnific.com/premium-vector/modern-badge-logo-instagram-icon_578229-124.jpg?semt=ais_test_b&w=740&q=80",
//                 name:"Instgram",
//                 date:"6 Days Ago",
//                 post:"Data Scientist",
//                 tag1:"Full Time",
//                 tag2:"Senior Level",
//                 pay:"$120/hour",
//                 location:"Json City, France"
//             },
//             {
//                 logo:"https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
//                 name:"Fire Fox",
//                 date:"4 week Ago",
//                 post:"Machine Learning Engineer",
//                 tag1:"Part Time",
//                 tag2:"Senior Level",
//                 pay:"$100/hour",
//                 location:"melica, Canada"
//             }

//         ];
//         // console.log(information);
        


//     return(
//         <div className="parent">
//             {
//             information.map(function(elem,idx)
//         {
//             console.log(idx);
            
//             return <div key={idx}> <Create logo={elem.logo} name={elem.name} date={elem.date} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
//             </div>
//         })}
//         </div>
//     )
// }
// export default App;

//       -------------------------------Css-----------------------------

// *
// {
//     margin:0px;
//     padding:0px;
// }
// body 
// {   
//     background-color:#bfb9b9;
// }
// .parent
// {
//     padding:20px;
//     display:flex;
//     flex-wrap:wrap;
//     gap:25px;
// }
// .card
// {
//     width:300px;
//     height:300px;
//     border-radius:20px;
//     padding:20px;
//     border:1px solid #fff;
//     background-color:#fff;
//     display:flex;   /* imp line */
//     flex-direction:column;
//     justify-content:space-between;
// }
// .card .top
// {
//     display:flex;
//     justify-content:space-between;
//     align-items:center;
// }
// .card img
// {
//     width:30px;
//     height:30px;
//     border:1px solid #dadada;
//     border-radius:50%;
//     object-fit:cover;
//     padding:2px;
// }
// .top button
// {
//     display:flex;
//     align-items:center;
//     border:1px solid #dadada;
//     padding:5px 10px;
//     font-size:14px;
//     border-radius:5px;
//     gap:3px;
// }
// .centre
// {
//     margin-bottom:60px;
// }
// .centre h3
// {
//     font-size:18px;
//     font-weight:500;
// }
// .centre h3 span
// {
//     font-size:10px;
//     font-weight:400;
//     color:#8b8b8b;
// }
// .centre h2
// {
//     font-size:20px;
// }
// .centre .tag
// {
//     display:flex;
//     gap:5px;
//     margin-top:10px;
// }
// .centre .tag h4
// {
//     font-size:14px;
//     background-color:#dadada;
//     color:#111;
//     font-weight:500;
//     padding:4px 8px;
//     border-radius:3px;
// }
// .bottom
// {
//     display:flex;
//     justify-content:space-between;
//     align-items:center;
//     border-top:1px solid #dadada;
//     padding-top:15px;
// }
// .bottom p
// {
//     font-size:10px;
//     color:#8b8b8b;
// }
// button
// {
//     background-color:black;
//     color:white;
//     font-weight:500;
//     padding:8px 10px;
//     border:none;
//     border-radius:5px;
//     cursor:pointer;
// }
// .top img {
//     width: 34px;
//     height: 34px;
//     object-fit: contain;
//     cursor: pointer;
// }
// .zoom {
//     position: fixed;
//     inset: 0;

//     display: flex;
//     justify-content: center;
//     align-items: center;

//     background: rgba(122, 117, 117, 0.7);
// }
// .zoom img {
//     width: 500px;
//     height: 500px;
// }
