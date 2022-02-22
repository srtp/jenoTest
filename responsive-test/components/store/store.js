import { makeAutoObservable } from "mobx";
import axios from "axios";

const url = `http://localhost:3001`;

class Store {
  genId = Math.floor(100000 + Math.random() * 900000);
  genIdComment = Date.now();
  posts = [];
  thePost = [];
  editPost = [];
  comments = [];
  theComments = [];
  like = 0;
  constructor() {
    makeAutoObservable(this);
  }

  getAllPost() {
    axios.get(`${url}/posts`).then((res) => {
      this.posts = res.data;
    });
  }

  getByid(id) {
    axios.get(`${url}/posts/${id}`).then((res) => {
      this.thePost = res.data;
    });
  }

  likePost(id, like) {
    axios.patch(`${url}/posts/${id}`, { like: like }).then((res) => {
      this.posts.push(res.data);
      console.log(this.posts);
    });
  }

  // Comment
  getAllComments() {
    axios.get(`${url}/comments/`).then((res) => {
      this.comments = res.data;
    });
  }

  createComment(newComment, id) {
    axios
      .post(`${url}/comments`, {
        postId: Number(id),
        id: this.genIdComment,
        author: "Guest",
        body: newComment.body,
      })
      .then((res) => {
        this.comments.push(res.data);
      });
  }
}

export const store = new Store();
