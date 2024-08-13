import { v4 as uuidv4 } from 'uuid';
import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const Bucket = process.env.NEXT_PUBLIC_AWS_BUCKET;
const s3 = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY as string,
  },
});

// 이미지 저장 및 서명된 URL 반환
export async function uploadToS3(file: File): Promise<string> {
  try {
    const fileExtension = file.name.split('.').pop();
    const Key = `menus/${uuidv4()}.${fileExtension}`;
    const Body = (await file.arrayBuffer()) as Buffer;

    await s3.send(
      new PutObjectCommand({
        Bucket,
        Key,
        Body,
        ContentType: file.type,
      }),
    );

    const imgUrl = await getSignedUrl(
      s3,
      new GetObjectCommand({
        Bucket,
        Key,
      }),
      { expiresIn: 3600 },
    );

    return imgUrl;
  } catch (error) {
    console.error('S3 업로드 에러', error);
    throw new Error('이미지 업로드 실패');
  }
}
