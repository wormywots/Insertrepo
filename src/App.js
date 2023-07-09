import logo from './logo.svg';
import './App.css';
import {Post} from './components/post';

function App() {
  const getPosts = () => {
    const posts = ["this is a post", "this is another post", "another post"];]
    return posts.map(post => {return (<Post content={post} />)});
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
{getPosts()}
</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
