import React, { Component } from 'react';
import Post from './Post';
import Author from './Author';
import PostService from '../services/PostService';
import AuthorService from '../services/AuthorService';
import '../styles/Blog.css';

interface State {
  posts: Array<any>,
  authors: Array<any>
}

class Blog extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      posts: [],
      authors: []
    };
  }

  componentDidMount() {
    this.getPosts();
    this.getAuthors();
  }

  getPosts = async () => {
    const posts = await PostService.getPosts();
    this.setState({ posts });
  }

  getAuthors = async () => {
    const authors = await AuthorService.getAuthors();
    this.setState({ authors });
  }

  render() {
    const { posts, authors } = this.state;

    return (
      <div className="blog-container">
        <h1>Technology and Gadgets Blog</h1>
        {authors.map((author: any) => (
          <Author key={author.id} author={author} />
        ))}
        {posts.map((post: any) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

export default Blog;