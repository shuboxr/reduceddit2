import React, { useEffect } from 'react';
import { Search } from './components/Search/Search';
import { Results } from './components/Results/Results';
import { FullPost } from './components/FullPost/FullPost';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggleActivePost, fetchPosts } from './store/redditSlice';


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
        <Results />
      </main>
    );

    useEffect(() => {
      dispatch(fetchPosts('popular'));
     }, [dispatch]);

  const handleClick = () => {
    dispatch(toggleActivePost());
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="titles-container">
          <h1 onClick={handleClick} className="main-title">reduceddit</h1>
          <p className="subtitle">because you deserve less&trade;</p>
        </div>
        <Search />
      </header>
      {content}
    </div>
  );
}

export default App;
