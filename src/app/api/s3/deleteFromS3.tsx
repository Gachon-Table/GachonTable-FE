import { DeleteObjectCommand, S3Client } from '@aws-sdk/client-s3';

const Bucket = process.env.NEXT_PUBLIC_AWS_BUCKET;
const s3 = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY as string,
  },
});

export async function deleteFromS3(key: string): Promise<void> {
  try {
    const deleteParams = {
      Bucket: Bucket,
      Key: key,
    };

    await s3.send(new DeleteObjectCommand(deleteParams));
    console.log(`Successfully deleted object: ${key}`);
  } catch (error) {
    console.error('S3 삭제 에러', error);
    throw new Error('이미지 삭제 실패');
  }
}
