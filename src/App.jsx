import Profile from "./project/profiles.jsx";

const app = () =>
{
    const information = [
        {
        available: "Not available",
        pay: "45$/hr",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlOM2xioC7GlLd1-p8XXARs5WSkAlGHLsP8gWk9Giuqw&s=10",
        name: "Spider Man",
        work: "UI/UX Developer",
        btn1: "UI",
        btn2: "UX",
        btn3: "Photoshop",
        btn4: "+4"
    },

    {
        available: "available",
        pay: "35$/hr",
        logo: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8d40e9ca-1974-4a87-bbfa-165264db741b/dfljxrc-d380debb-e701-41d9-8886-900350a0174d.png/v1/fill/w_769,h_1040/batman__dc__render_2_by_soul151killer_dfljxrc-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjY4OCIsInBhdGgiOiIvZi84ZDQwZTljYS0xOTc0LTRhODctYmJmYS0xNjUyNjRkYjc0MWIvZGZsanhyYy1kMzgwZGViYi1lNzAxLTQxZDktODg4Ni05MDAzNTBhMDE3NGQucG5nIiwid2lkdGgiOiI8PTE5ODgifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.sS7rcRXL5yXWt7t2bEIzedlloVtOyhKt1uKbztYB6QE",
        name: "Batman Wilson",
        work: "Mobile Designer",
        btn1: "PHP",
        btn2: "Android",
        btn3: "iOS",
        btn4: "+2"
    },

    {
        available: "Not available",
        pay: "50$/hr",
        logo: "https://www.denofgeek.com/wp-content/uploads/2020/04/avengers-endgame-captain-america-thor-hammer.jpg?fit=1280%2C718",
        name: "Captain America",
        work: "Software Developer",
        btn1: "Java",
        btn2: "React",
        btn3: "Python",
        btn4: "+9"
    },

    {
        available: "available",
        pay: "65$/hr",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTXvmU1sqLhdIhGZGT4NIvhyn46TxkGh0eqROnWnmf6PyaDGj-1vhgOCe6&s=10",
        name: "Thor",
        work: "AI Developer",
        btn1: "Python",
        btn2: "Engineering",
        btn3: "LLMs",
        btn4: "+5"
    },

    {
        available: "Not available",
        pay: "45$/hr",
        logo: "https://images.wallpapersden.com/image/download/hulk-smash-4k_bGdmbmiUmZqaraWkpJRmbmdlrWdpZWU.jpg",
        name: "Hulk",
        work: "Data Scientist",
        btn1: "SQL",
        btn2: "Excel",
        btn3: "NumPy",
        btn4: "+12"
    },

    {
        available: "available",
        pay: "250$/hr",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzPE8H0EVJZrkBaP3n_VWuMD4wPQwTujhFU64mWEDek_RY5nktHJ4q2zrk&s=10",
        name: "Iron Man",
        work: "Research Scientist",
        btn1: "Cyber",
        btn2: "Quantum",
        btn3: "Robotics",
        btn4: "+99"
    },

    {
        available: "Not available",
        pay: "45$/hr",
        logo: "https://w0.peakpx.com/wallpaper/22/679/HD-wallpaper-sasuke-uchiha-sasuke-uchiha-naruto-anime-artwork-digital-art.jpg",
        name: "Sasuke uchiha",
        work: "UI/UX Developer",
        btn1: "UI",
        btn2: "UX",
        btn3: "Photoshop",
        btn4: "4+"
    },

    {
        available: "available",
        pay: "45$/hr",
        logo: "/vipin.jpeg",
        name: "Vipin",
        work: "UI/UX Developer",
        btn1: "UI",
        btn2: "UX",
        btn3: "Photoshop",
        btn4: "4+"
    }
];
    return(
        <div>
            
         <h3 className="profile">PROFILES (420)</h3>
        <div className="parent">
            {
                information.map(function(elem,index)
                    {
                return (
                    <Profile 
                    key={index}
                    available={elem.available}
                    pay={elem.pay}
                    logo={elem.logo}
                    name={elem.name}
                    work={elem.work}
                    btn1={elem.btn1}
                    btn2={elem.btn2}
                    btn3={elem.btn3}
                    btn4={elem.btn4}
                    />
                );
                })
            }
        
        </div>
        </div>
    )
}
export default app;