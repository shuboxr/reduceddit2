import React from 'react';
import { Search } from './components/Search/Search';
import { Results } from './components/Results/Results';
import { FullPost } from './components/FullPost/FullPost';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggleActivePost } from './store/redditSlice';

function App() {
  const dispatch = useDispatch();
  const reddit = useSelector((state) => state.reddit);
  const activePost = typeof reddit.activePostIndex === "number" ? reddit.posts[reddit.activePostIndex] : null;
  const content = activePost ?
    (
      <main>
        <FullPost post={activePost}/>
      </main>
    ) : (
      <main>
        <Search />
        <Results />
      </main>
    );

  const handleClick = () => {
    dispatch(toggleActivePost());
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1 onClick={handleClick} className="main-title">reduceddit</h1>
        <p className="subtitle">because you deserve less&trade;</p>
      </header>
      {content}
    </div>
  );
}

export default App;
