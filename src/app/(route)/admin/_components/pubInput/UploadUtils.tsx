import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

AWS.config.update({
  accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY,
  secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY,
});

const myBucket = new AWS.S3({
  params: { Bucket: process.env.NEXT_PUBLIC_BUCKET },
  region: process.env.NEXT_PUBLIC_REGION,
});

interface UploadParams {
  ACL: string;
  Body: File;
  Bucket: string;
  Key: string;
}

export const uploadToS3 = (img: File): Promise<string> => {
  const uuid = uuidv4();
  const fileExtenson = img.name.split('.').pop();
  const params: UploadParams = {
    ACL: 'public-read',
    Body: img,
    Bucket: process.env.NEXT_PUBLIC_BUCKET || 'gachotable/menu',
    Key: `gachontable/menu/${uuid}.${fileExtenson}`,
  };

  return new Promise((resolve, reject) => {
    myBucket
      .putObject(params)
      .on('httpUploadProgress', (evt) => {})
      .send((err, _) => {
        if (err) {
          reject(err);
          return;
        }
        const imgURL = `https://${process.env.NEXT_PUBLIC_BUCKET}.s3.${process.env.NEXT_PUBLIC_REGION}.amazonaws.com/${params.Key}`;
        resolve(imgURL);
      });
  });
};
