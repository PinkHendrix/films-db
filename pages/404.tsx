import type { NextPage } from 'next';
import Image from 'next/image';

console.log('Eight 6 seven 5 three oh 9 / Jenny, Song by Tommy Tutone');

const errorHandle: NextPage = () => (
  <div>
    <h2>This route ain't here, easter egg perhaps...</h2>
    <span>
      <Image
        src="/no_image.jpg"
        width="867px"
        height="530px" // nine..
        objectFit="contain"
        alt="no_image_easter_egg"
      />
    </span>
  </div>
);

export default errorHandle;
