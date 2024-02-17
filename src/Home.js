import { useState } from "react";
const Home = () => {
    // let name = "chesere";
    const [name, setName] = useState('chesere');
    const [age, setAge] = useState(30);

    const handleClick = ()=>{
        setName("mike");
        setAge(40);
       
    };
    return ( 
        <div className="home">
            <h1>Homepage</h1>
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick} >Click me</button>
        </div>
     );
}
 
export default Home;