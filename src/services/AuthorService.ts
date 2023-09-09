import axios from 'axios';
import { AuthorModel } from '../models/Author';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export class AuthorService {
  static async getAuthors(): Promise<AuthorModel[]> {
    try {
      const response = await axios.get(`${BASE_URL}/authors`);
      return response.data;
    } catch (error) {
      console.error('Error fetching authors', error);
      return [];
    }
  }

  static async getAuthor(id: string): Promise<AuthorModel | null> {
    try {
      const response = await axios.get(`${BASE_URL}/authors/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching author with id ${id}`, error);
      return null;
    }
  }

  static async createAuthor(author: AuthorModel): Promise<AuthorModel | null> {
    try {
      const response = await axios.post(`${BASE_URL}/authors`, author);
      return response.data;
    } catch (error) {
      console.error('Error creating author', error);
      return null;
    }
  }

  static async updateAuthor(author: AuthorModel): Promise<AuthorModel | null> {
    try {
      const response = await axios.put(`${BASE_URL}/authors/${author.id}`, author);
      return response.data;
    } catch (error) {
      console.error(`Error updating author with id ${author.id}`, error);
      return null;
    }
  }

  static async deleteAuthor(id: string): Promise<boolean> {
    try {
      await axios.delete(`${BASE_URL}/authors/${id}`);
      return true;
    } catch (error) {
      console.error(`Error deleting author with id ${id}`, error);
      return false;
    }
  }
}