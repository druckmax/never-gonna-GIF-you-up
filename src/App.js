import './App.scss';
import MyFavorites from './components/MyFavorites/MyFavorites';
import Random from './components/Random/Random';
import SearchResults from './components/SearchResults/SearchResults';
import Trending from './components/Trending/Trending';

function App() {
  return (
    <div className='wrapper'>
      <h1>Welcome</h1>
      <Trending />
      </div>
  );
}

export default App;
