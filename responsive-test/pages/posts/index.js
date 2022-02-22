import React, { useEffect } from "react";
import Layout from "../../components/layouts/layout";
import { observer } from "mobx-react-lite";
import { store } from "../../components/store/store";
import Link from "next/link";

const index = observer(() => {
  const { posts } = store;
  useEffect(() => {
    store.getAllPost();
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return (
          <div style={{ padding: 20 }}>
            <Link href={`/posts/${post.id}`}>
              <div
                className="grid h-20 card bg-base-300 rounded-box  navbar hover:bg-sky-500"
                style={{ cursor: "pointer" }}
              >
                <div className="navbar-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="40"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z" />
                  </svg>
                  <div className="navbar-center ">{post.author}</div>
                  <div
                    className="navbar-end"
                    align="right"
                    style={{ float: "right", position: "absolute", right: 0 }}
                  >
                    <button className="btn btn-ghost">
                      {post.like} People Likes
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
});
index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default index;
