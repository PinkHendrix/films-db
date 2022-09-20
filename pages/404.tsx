import type { NextPage } from 'next';
import Image from 'next/image';

console.log('+1 (800) 867-53oh9 / Jenny, Song by Tommy Tutone');

const Error: NextPage = () => (
  <div>
    <h2>This route ain't here, sorry (easter eggy perhaps)...</h2>
    <span>
      <Image
        priority
        height="530px"
        width="867px"
        objectFit="scale-down"
        objectPosition="center"
        src="/no_image.jpg"
        alt="no_image_easter_egg"
      />
    </span>
  </div>
);

export default Error;
