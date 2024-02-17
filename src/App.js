

import Navbar from './navbar';
import Home from './Home';
function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  const link = "https://www.google.com";
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <a href={link}>Google site</a>
      </div>
    </div>
  );
}

export default App;
