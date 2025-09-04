const { bucket } = require('./deploy-env');

const deleteBucketFiles = async () => {
  try {
    const [files] = await bucket.getFiles();
    if (files.length === 0) {
      throw new Error('No files found in the bucket. Nothing to delete.');
    }
    const deletePromises = files.map(file => file.delete());
    await Promise.all(deletePromises);
    console.log('Files deleted successfully.');
  }
  catch (error) {
    console.error('Error deleting files:', error);
  }
};

deleteBucketFiles();
