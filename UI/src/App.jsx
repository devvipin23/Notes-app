
import Section1 from "./component/section1/section1";
import Section2 from "./component/section2/section2";


const App=()=>
{
  const users = [
    {
      img:'https://plus.unsplash.com/premium_photo-1683880731792-39c07ceea617?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b2ZmaWNlJTIwZW52aXJvbm1lbnR8ZW58MHx8MHx8fDA%3D',
      about:'',
      tag:'Satisfied'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D',
      about:'',
      tag:'Underserved'
    },
    {
      img:'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      about:'',
      tag:'Underbanked'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661777467209-d1fb895cd266?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D',
      about:'',
      tag:'Underbanked'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661583687357-f047d7f7b399?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwNHx8fGVufDB8fHx8fA%3D%3D',
      about:'',
      tag:'Underbanked'
    }
  ]
  return(
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}
export default App;