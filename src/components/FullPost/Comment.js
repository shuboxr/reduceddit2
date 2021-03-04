import getTimeAgo from '../../utils/getTimeAgo';

export const Comment = (props) => {

    const ago = getTimeAgo(props.comment.created);

    return (
        <div className="short-post">
            <div className="short-line-one">
                <span className="comment-body">
                    <a href={props.comment.permalink} target="_blank" rel="noreferrer">{props.comment.body}</a>
                </span>
            </div>
            <div className="short-line-two">
                <span className="ups">&uarr;{props.comment.ups < 10000 ? props.comment.ups : (props.comment.ups/1000).toFixed(1)+"K"}</span>
                <span className="author-time">{ago} by <a target="_blank" rel="noreferrer" href={`http://www.reddit.com/u/${props.comment.author}`}>{props.comment.author}</a></span>
            </div>
        </div>
    )
}