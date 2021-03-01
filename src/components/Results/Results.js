import './Results.css';
import { useSelector } from 'react-redux';
import { ShortPost } from './ShortPost';

export const Results = () => {
    return (
        <div className="posts">
            {useSelector(state => {
                return state.reddit.posts.map(post => {
                    return <ShortPost post={post} key={post.id} />
                })
            })}
        </div>
    )
}