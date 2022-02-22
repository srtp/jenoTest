import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { store } from "../../store/store";
import { useRouter } from "next/router";

const footerPost = observer(() => {
  const [comment, setComment] = useState([]);
  const router = useRouter();
  const id = router.query.id;
  const onChangeValue = (event) => {
    const { name, value } = event.target;
    setComment((prevComment) => {
      return {
        ...prevComment,
        [name]: value,
      };
    });
  };
  const onSubmit = () => {
    store.createComment(comment, id);
  };
  return (
    <div className="">
      <form onSubmit={onSubmit}>
        <nav className="divide-y fixed bottom-0  inset-x-0 bg-white flex justify-between text-sm uppercase font-mono">
          <a
            href="#"
            className="w-full block  px-3 text-center  transition duration-300"
          >
            <svg
              className="w-6 h-6 mb-2 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M21.586 10.461l-10.05 10.075c-1.95 1.949-5.122 1.949-7.071 0s-1.95-5.122 0-7.072l10.628-10.585c1.17-1.17 3.073-1.17 4.243 0 1.169 1.17 1.17 3.072 0 4.242l-8.507 8.464c-.39.39-1.024.39-1.414 0s-.39-1.024 0-1.414l7.093-7.05-1.415-1.414-7.093 7.049c-1.172 1.172-1.171 3.073 0 4.244s3.071 1.171 4.242 0l8.507-8.464c.977-.977 1.464-2.256 1.464-3.536 0-2.769-2.246-4.999-5-4.999-1.28 0-2.559.488-3.536 1.465l-10.627 10.583c-1.366 1.368-2.05 3.159-2.05 4.951 0 3.863 3.13 7 7 7 1.792 0 3.583-.684 4.95-2.05l10.05-10.075-1.414-1.414z" />
            </svg>
            Attach file
          </a>
          <input
            type="text"
            name="body"
            className=" input input-bordered w-full max-w-xs"
            placeholder="Comment"
            onChange={onChangeValue}
            value={comment.body}
          />
        </nav>
      </form>
    </div>
  );
});

export default footerPost;
