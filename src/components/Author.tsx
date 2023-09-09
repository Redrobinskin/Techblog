import React, { Component } from 'react';
import { AuthorModel } from '../models/Author.ts';
import '../styles/Author.css';

interface AuthorProps {
  author: AuthorModel;
}

class Author extends Component<AuthorProps> {
  render() {
    const { author } = this.props;

    return (
      <div className="author-container">
        <h2>{author.name}</h2>
        <p>{author.description}</p>
      </div>
    );
  }
}

export default Author;