const conf = {
    appwriteUrl : String(import.meta.env.Vite_APPWRITE_URL),
    appwriteProjectId : String(import.meta.env.Vite_PROJECT_ID),
    appwriteBucketId : String(import.meta.env.Vite_BUCKET_ID),
    appwriteDatabaseId : String(import.meta.env.Vite_DATABASE_ID),
    appwriteCollectionId : String(import.meta.env.Vite_COLLECTION_ID),
    
}

export default conf