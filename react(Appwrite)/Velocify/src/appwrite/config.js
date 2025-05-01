import conf from "../conf/conf";
import { Client, Databases, ID, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, content, slug, Images, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwritePostCollectionId,
        slug,
        {
          title,
          content,
          Images,
          status,
          userId,
        }
      );
    } catch (error) {
      console.error("Error creating post document:", error);
      throw error;
    }
  }

  async updatePost(slug, { title, content, Images, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwritePostCollectionId,
        slug,
        {
          title,
          content,
          Images,
          status,
        }
      );
    } catch (error) {
      console.error("Error updating post document:", error);
      throw error;
    }
  }

  async deletePost(slug) {
    try {
      return await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwritePostCollectionId,
        slug
      );
    } catch (error) {
      console.error("Error deleting post document:", error);
      throw error;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwritePostCollectionId,
        slug
      );
    } catch (error) {
      console.error("Error fetching post document:", error);
      throw error;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwritePostCollectionId,
        queries
      );
    } catch (error) {
      console.error("Error fetching post documents:", error);
      throw error;
    }
  }

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error;
    }
  }

  async deleteFile(fileId) {
    try {
      return await this.bucket.deleteFile(
        conf.appwriteBucketId,
        fileId
      );
    } catch (error) {
      console.error("Error deleting file:", error);
      throw error;
    }
  }

  async getFilePreview(fileId) {
    try {
      return await this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
      );
    } catch (error) {
      console.error("Error getting file preview:", error);
      throw error;
    }
  }
}

const service = new Service();
export default service;
