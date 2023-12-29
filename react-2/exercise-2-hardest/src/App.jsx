import "./App.css";

function App() {

  const posts = [
    {
      author: "User 1",
      avatar: "https://cdn.pixabay.com/photo/2017/09/01/00/15/png-2702691_640.png",
      time: "2 hours ago",
      content: "This is my first post! 🎉",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"
    },
    {
      author: "User 2",
      avatar: "https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png",
      time: "4 hours ago",
      content: "Enjoying a beautiful day outdoors! ☀️",
      image: "https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png"
    },
    {
      author: "User 3",
      avatar: "https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png",
      time: "1 day ago",
      content: "Exploring new places and cultures. 🌍✈️",
      image: "https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png"
    }
  ];

  return (
    <div id="app">
      <h1>Enter Data</h1>
      <PostContainer />
      <FeedSection feed={posts}/>
    </div>
  );
}

const PostContainer = () => {
  return (
    <div class="post-container">
      <div class="post-header">
        <img class="post-avatar" src="avatar.jpg" alt="Your Avatar" />
        <div class="post-author">You</div>
      </div>
      <div class="post-content">
        <textarea
          class="post-input"
          placeholder="What's on your mind?"
        ></textarea>
      </div>
      <div class="post-actions">
        <button class="post-button">Post</button>
      </div>
    </div>
  );
};

const FeedSection = (props) => {
  const feed = props.feed;
  return (
    <div>
      <Post feed={feed}/>
    </div>
    
  );
};

const Post = (props) => {
  const feedData = props.feed;
  return (
    <>
    {feedData.map((posts) => {
      return (
        <div class="post">
        <div class="post-header">
          <img
            class="post-avatar"
            src={posts.avatar}
            alt="User 1"
          />
          <div>
            <div class="post-author">{posts.author}</div>
            <div class="post-time">{posts.time}</div>
          </div>
        </div>
        <div class="post-content">{posts.content}</div>
        <img
          class="post-image"
          src={posts.image}
          alt="Post 1"
        />
        <button>DELETE</button>
      </div>
      )
    }

    )}
    {/* <div class="post">
        <div class="post-header">
          <img
            class="post-avatar"
            src="https://cdn.pixabay.com/photo/2017/09/01/00/15/png-2702691_640.png"
            alt="User 1"
          />
          <div>
            <div class="post-author">User 1</div>
            <div class="post-time">2 hours ago</div>
          </div>
        </div>
        <div class="post-content">This is my first post! 🎉</div>
        <img
          class="post-image"
          src="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"
          alt="Post 1"
        />
        <button>DELETE</button>
      </div> */}
    </>
  )
}

export default App;
