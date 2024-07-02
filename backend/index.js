const cloudinary = require('cloudinary').v2;

// Configuration
cloudinary.config({
  cloud_name: 'dlgjc1dzo',
  api_key: '666325575846635',
  api_secret: 'RRwAn2BbGFYCbzNkWNNAQ-rROHA',
  secure: true,
});

exports.clod = async (fileBuffer) => {
  try {
    // העלאת תמונה ל-Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream({ resource_type: 'image' }, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
      uploadStream.end(fileBuffer);
    });

    console.log(uploadResult);

    // אופטימיזציה לתמונה
    const optimizeUrl = cloudinary.url(uploadResult.public_id, {
      fetch_format: 'auto',
      quality: 'auto'
    });

    console.log(optimizeUrl);

    // חיתוך אוטומטי של התמונה
    const autoCropUrl = cloudinary.url(uploadResult.public_id, {
      crop: 'auto',
      gravity: 'auto',
      width: 500,
      height: 500,
    });

    console.log(autoCropUrl);

    return uploadResult;
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw error;
  }
};
