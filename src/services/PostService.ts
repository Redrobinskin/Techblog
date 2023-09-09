import axios from 'axios';
import { PostModel } from '../models/Post';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export class PostService {
  static async getPosts(): Promise<PostModel[]> {
    try {
      const response = await axios.get(`${BASE_URL}/posts`);
      return response.data;
    } catch (error) {
      console.error('Error fetching posts', error);
      throw error;
    }
  }

  static async getPost(id: string): Promise<PostModel> {
    try {
      const response = await axios.get(`${BASE_URL}/posts/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching post with id ${id}`, error);
      throw error;
    }
  }

  static async createPost(post: PostModel): Promise<PostModel> {
    try {
      const response = await axios.post(`${BASE_URL}/posts`, post);
      return response.data;
    } catch (error) {
      console.error('Error creating post', error);
      throw error;
    }
  }

  static async updatePost(id: string, post: PostModel): Promise<PostModel> {
    try {
      const response = await axios.put(`${BASE_URL}/posts/${id}`, post);
      return response.data;
    } catch (error) {
      console.error(`Error updating post with id ${id}`, error);
      throw error;
    }
  }

  static async deletePost(id: string): Promise<void> {
    try {
      await axios.delete(`${BASE_URL}/posts/${id}`);
    } catch (error) {
      console.error(`Error deleting post with id ${id}`, error);
      throw error;
    }
  }
}