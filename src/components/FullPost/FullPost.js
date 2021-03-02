import './FullPost.css';
import getTimeAgo from '../../utils/getTimeAgo';
import { Comment } from './Comment';
import { fetchComments, toggleActivePost} from '../../store/redditSlice';
import { useDispatch, useSelector } from 'react-redux';

export const FullPost = (props) => {

    const ago = getTimeAgo(props.post.created);
    const dispatch = useDispatch();
    const reddit = useSelector((state) => state.reddit);

    let img = '';
    if (props.post.thumbnail && props.post.thumbnail !== "self") {
        img = (<div className="thumbnail-container">
                    <img alt="" className="thumbnail-image" src={props.post.thumbnail} />
            </div>);
    }

    let body = '';
    if (props.post.selftext) {
        body = (<p className="full-post-body">
            {props.post.selftext}
        </p>);
    }

    const handleActiveClick = () => {
        dispatch(toggleActivePost());
    }

    const handleCommentsClick = () => {
        const index = reddit.posts.findIndex((post) => {
                return post.id === props.post.id;
            });
        fetchComments(index, props.post.permalink);
    }

    const renderComments = () => {
        if (props.post.error) {
            return (
                <div>
                    <p>Error loading comments.</p>
                    <button>Try Again?</button>
                </div>
            )
        }
        if (props.post.loadingComments) {
            return (
                <div>
                    <p>Loading!</p>
                    <p>loading.</p>
                    <p>LOADING?</p>
                </div>
            )
        }
        if (props.post.showingComments) {
            return (
                <div className="full-post">
                    <button onClick={handleCommentsClick}>Hide Comments</button>
                    {props.post.comments.map(comment => {
                        return <Comment className="comment" comment={comment} key={comment.id} />
                    })}
                </div>
            )
        }
        return (
            <button onClick={handleCommentsClick}>Show Comments</button>
        );
    }

    return (
        <div className="full-post">
            <button onClick={handleActiveClick}>GO BACK! FOR THE LOVE OF GOD!</button>
            <div className="full-post-header">
                <h2 className="full-post-title">
                    {props.post.title}
                </h2>
                <div className="full-post-info">
                    <p className="info-line">
                        <span className="ups">&uarr;{props.post.ups}</span>
                        <a alt="" href={props.post.permalink} >View on Reddit</a>
                    </p>
                    <p className="info-line">
                        {ago + " by "}<a target="_blank" rel="noreferrer" href={`http://reddit.com/u/${props.post.author}`}>{props.post.author}</a>{" "}
                    </p>
                </div>
            </div>
            {img}
            {body}
            {renderComments()}
        </div>
    )
}