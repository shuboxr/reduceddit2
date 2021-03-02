export const Comment = (props) => {
    return (
        <div className="comment">
            <p>{props.comment.body}</p>
        </div>
    )
}