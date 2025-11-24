const Post = ({ post }) => {
  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {post.reactions.like}
          <span class="visually-hidden">unread messages</span>
        </span>
        <p className="card-text">{post.content}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary m-1">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};
export default Post;
