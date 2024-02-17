const Home = () => {
    const handleClick = ()=>{
        console.log("Hello, Ninjas");
    };
    return ( 
        <div className="home">
            <h1>Homepage</h1>
            <button onClick={handleClick} >Click me</button>
        </div>
     );
}
 
export default Home;