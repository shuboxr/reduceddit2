import './FullPost.css';
import getTimeAgo from '../../utils/getTimeAgo';
import { Comments } from './Comments';

export const FullPost = (props) => {

    const ago = getTimeAgo(props.post.created);

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

    const handleClick = () => {
        console.log('return button clicked');
    }

    return (
        <div className="full-post">
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
                        {ago + " by "}<a href={`http://reddit.com/u/${props.post.author}`}>{props.post.author}</a>{" "}
                    </p>
                </div>
            </div>
            {img}
            {body}
            {props.post.showingComments ? <Comments post={props.post} /> : ''}
        </div>
    )
}