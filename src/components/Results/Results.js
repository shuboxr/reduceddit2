import './Results.css';
import { useSelector } from 'react-redux';
import { ShortPost } from './ShortPost';

export const Results = () => {
    return (
        <div className="results">
            {useSelector(state => {
                const filteredPosts = state.reddit.posts.filter(post => {
                    return post.ups > state.reddit.filter;
                });
                return filteredPosts.map(post => {
                    return <ShortPost post={post} key={post.id} />
                })
            })}
        </div>
    )
}