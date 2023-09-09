import React, { Component } from 'react';
import { PostModel } from '../models/Post';
import { AuthorModel } from '../models/Author';
import { PostService } from '../services/PostService';
import { AuthorService } from '../services/AuthorService';
import './Post.css';

interface PostProps {
  post: PostModel;
}

interface PostState {
  author: AuthorModel | null;
}

class Post extends Component<PostProps, PostState> {
  constructor(props: PostProps) {
    super(props);
    this.state = {
      author: null,
    };
  }

  componentDidMount() {
    AuthorService.getAuthor(this.props.post.authorId)
      .then((author) => this.setState({ author }))
      .catch((error) => console.error(error));
  }

  render() {
    const { post } = this.props;
    const { author } = this.state;

    return (
      <div className="post-container">
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        {author && (
          <div className="author-container">
            <h3>{author.name}</h3>
            <p>{author.bio}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Post;