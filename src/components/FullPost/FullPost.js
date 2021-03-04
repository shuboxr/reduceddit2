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
                    <a href={props.post.permalink} target="_blank" rel="noreferrer">
                        <img alt="" className="thumbnail-image" src={props.post.thumbnail} />
                    </a>
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
        dispatch(fetchComments(index, props.post.permalink));
    }

    const renderComments = () => {
        if (props.post.error) {
            return (
                <div className="full-post">
                    <p>Error loading comments.</p>
                    <button onClick={handleCommentsClick}>Try Again?</button>
                </div>
            )
        }
        if (props.post.loadingComments) {
            return (
                <div className="results-loading">
                    LOADING
                </div>
            )
        }
        if (props.post.showingComments) {
            return (
                <div className="comments">
                    {props.post.comments.map(comment => {
                        return <Comment className="comment" comment={comment} key={comment.id} />
                    })}
                </div>
            )
        }
        return '';
    }

    return (
        <div className="full-post">
            <button onClick={handleActiveClick}>return to search</button>
            <div className="full-post-header">
                <h2 className="full-post-title">
                    <a target="_blank" rel="noreferrer" href={props.post.permalink}>{props.post.title}</a>
                </h2>
                <hr className="short-divider" />
                <div className="full-post-info">
                    <p className="info-line">
                        <span className="ups">&uarr;{props.post.ups}</span>
                        {ago + " by "}<a target="_blank" rel="noreferrer" href={`http://reddit.com/u/${props.post.author}`}>{props.post.author}</a>{" "}
                    </p>
                    <p className="info-line">
                        <a alt="" href={props.post.permalink} >View on Reddit</a>
                    </p>
                </div>
            {img}
            {body}
            </div>
            <button onClick={handleCommentsClick}>{props.post.showingComments ? "hide " : "show "}comments</button>
            {renderComments()}
        </div>
    )
}