import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { observer } from "mobx-react-lite";
import { store } from "../../components/store/store";
import NavbarPost from "../../components/layouts/elements/navbarPost";
import FooterPost from "../../components/layouts/elements/footerPost";

const PostId = observer(() => {
  const { thePost, comments } = store;
  const router = useRouter();
  const id = router.query.id;
  const [like, setLike] = useState(0);
  const showComments = comments.filter((theComment) => {
    return theComment.postId === Number(id);
  });

  useEffect(() => {
    store.getByid(id);
    store.getAllComments();
  }, []);
  return (
    <div>
      <NavbarPost />
      {thePost.map((post) => {
        const likePost = () => {
          setLike(++post.like);
          store.likePost(post.id, like);
        };
        return (
          <div key={post.id}>
            <div className="navbar">
              <div className="navbar-start">
                <br />
                <br /> <br />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z" />
                </svg>
                <b>{post.author}</b>
              </div>
              <div className="navbar-cebter"></div>
              <div className="navbar-end" style={{ marginRight: 20 }}>
                Post-ID : {post.id}
              </div>
            </div>
            <b style={{ paddingRight: 40, paddingLeft: 40 }}>{post.topic}</b>
            <p style={{ paddingRight: 40, paddingLeft: 40 }}>{post.content}</p>
            <br />
            <div style={{ paddingRight: 40, paddingLeft: 40 }}>
              <button className="btn btn-sm btn-info" onClick={likePost}>
                Like : {post.like}
              </button>
            </div>
          </div>
        );
      })}
      <div class="divider"></div>
      {showComments.map((theComment) => {
        return (
          <div>
            <center>
              <b>Comments</b>
            </center>
            <div className="navbar">
              <div className="navbar-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="grey"
                    d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z"
                  />
                </svg>
                <b>{theComment.author}</b>
              </div>
              <div className="navbar-center"></div>
              <div className="navbar-end" style={{ marginRight: 20 }}>
                <p>Comment-ID : {theComment.id}</p>
              </div>
            </div>
            <div style={{ paddingRight: 40, paddingLeft: 60 }}>
              {theComment.body}
            </div>
            <div class="divider" style={{ marginTop: 40 }}></div>
          </div>
        );
      })}
      <FooterPost />
    </div>
  );
});

export default PostId;
