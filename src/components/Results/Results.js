import './Results.css';
import { useSelector } from 'react-redux';
import { ShortPost } from './ShortPost';

export const Results = () => {

    const reddit = useSelector(state => state.reddit);
    if (reddit.isLoading) {
        return <div className="results-loading">LOADING</div>;
    }

    const filteredPosts = reddit.posts.filter(post => {
        return post.ups > reddit.filter;
    });

    return (
        <div className="results">
            {filteredPosts.map(post => {
                return <ShortPost post={post} key={post.id} />
            })}
        </div>
    )
}