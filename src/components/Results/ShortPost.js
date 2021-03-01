import getTimeAgo from '../../utils/getTimeAgo';

export const ShortPost = (props) => {

    const ago = getTimeAgo(props.post.created);

    return (
        <div className="short-post">
            <span className="ups">&uarr;{props.post.ups < 10000 ? props.post.ups : (props.post.ups/1000).toFixed(1)+"K"}</span>
            <span className="title">{props.post.title}</span>
            <span className="time">{ago}</span>
            {props.post.selftext ? <span className="body">"{props.post.selftext}"</span> : ''}
        </div>
    )
}