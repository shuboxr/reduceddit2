export const Comments = (props) => {
    return (
        <div className="comments">
            {props.post.comments.map(comment => {
                return <p className="comment">{comment.body}</p>
            })}
        </div>
    )
}