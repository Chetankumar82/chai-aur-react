const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_PROJECT_ID),
  appwiteDatabaseId: String(import.meta.env.VITE_DATABASE_ID),
  appwiteCollectionId: String(import.meta.env.VITE_COLLECTION_ID),
  appwiteBucketId: String(import.meta.env.VITE_BUCKET_ID),
};

export default conf;
