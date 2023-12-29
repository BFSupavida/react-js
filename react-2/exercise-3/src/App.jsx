import usePost from "./hook/usePost";
import "./App.css";

function App() {
  const { get, remove } = usePost();

  return (
    <div id="app">
      <h1>Enter Data</h1>
      <PostContainer />
      <FeedSection get={get} remove={remove}/>
    </div>
  );
}

const PostContainer = () => {
  return (
    <div className="post-container">
      <div className="post-header">
        <img className="post-avatar" src="avatar.jpg" alt="Your Avatar" />
        <div className="post-author">You</div>
      </div>
      <div className="post-content">
        <textarea
          className="post-input"
          placeholder="What's on your mind?"
        ></textarea>
      </div>
      <div className="post-actions">
        <button className="post-button">Post</button>
      </div>
    </div>    
  );
};

const FeedSection = (props) => {
  const get = props.get;
  const remove = props.remove
  return (
    <div>
      <Post get={get} remove={remove}/>
    </div>
  );
};

const Post = () => {
  const get = props.get;
  const remove = props.remove
  return (
    // <>
    // {feedData.map((posts) => {
    //   return (
    //     <div class="post">
    //     <div class="post-header">
    //       <img
    //         class="post-avatar"
    //         src={posts.avatar}
    //         alt="User 1"
    //       />
    //       <div>
    //         <div class="post-author">{posts.author}</div>
    //         <div class="post-time">{posts.time}</div>
    //       </div>
    //     </div>
    //     <div class="post-content">{posts.content}</div>
    //     <img
    //       class="post-image"
    //       src={posts.image}
    //       alt="Post 1"
    //     />
    //     <button>DELETE</button>
    //   </div>
      )
    }
    )}
    </>
  );
};

export default App;
