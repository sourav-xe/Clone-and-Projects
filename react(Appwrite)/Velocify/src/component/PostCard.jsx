import React from 'react';
import appwriteService from '../appwrite/config';
import { Link } from 'react-router-dom';

function PostCard({ $id, title, content, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="w-full">
      <div className="w-full bg-gray-100 rounded-xl px-4 py-3 hover:shadow-md transition">
        <div className="w-full flex justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl max-h-60 object-cover"
          />
        </div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{content.slice(0, 100)}...</p>
      </div>
    </Link>
  );
}

export default PostCard;
