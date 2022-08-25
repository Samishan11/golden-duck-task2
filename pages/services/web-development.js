import Link from "next/link";
import Image from 'next/image'

export default function first() {
  return (
    <>
      <h1>Web Devlopment in nepal </h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <Image
        src="/assets/images/asset 0.png" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
  />
    </>
  );
}
