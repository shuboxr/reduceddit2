import { useDispatch, useSelector } from 'react-redux';
import { toggleActivePost } from '../../store/redditSlice';
import getTimeAgo from '../../utils/getTimeAgo';

export const ShortPost = (props) => {

    const dispatch = useDispatch();
    const ago = getTimeAgo(props.post.created);
    const reddit = useSelector((state) => state.reddit);

    const handleClick = () => {
        const index = reddit.posts.findIndex((post) => {
            return post.id === props.post.id;
        });
        dispatch(toggleActivePost(index));
    };

    return (
        <div className="short-post">
            <div className="short-line-one" onClick={handleClick}>
                <span className="title">{props.post.title}</span>
            </div>
            <hr className="short-divider" />
            <div className="short-line-two">
                <span className="ups">&uarr;{props.post.ups < 10000 ? props.post.ups : (props.post.ups/1000).toFixed(1)+"K"}</span>
                <span className="author-time">{ago} by <a target="_blank" rel="noreferrer" href={`http://www.reddit.com/u/${props.post.author}`}>{props.post.author}</a></span>
            </div>
        </div>
    )
}