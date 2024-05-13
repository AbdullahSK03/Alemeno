"use client";
import Link from "next/link";
import Image from "next/image";
const page = () => {
  return (
    <div className="p-10 text-center flex flex-col justify-center items-center">
      <div className="">
        <Image
          src="/pfp.webp"
          width={250}
          height={250}
          className="relative align-left object-cover"
          alt="profile"
        />
      </div>
      <div className="">
        <h1 className="font-Heading font-extrabold text-5xl">
          Abdullah Shaikh
        </h1>
        <p className="text-2xl m-4">Software Developer</p>
      </div>
      <hr className="w-1/2 mt-2 border-black" />
      <table>
        <tbody>
          <tr>
            <td className="p-4"><Link href="/Profile/Bio">Bio</Link></td>
            <td className="p-4"><Link href="/Profile/Courses">Courses</Link></td>
            <td className="p-4"><Link href="/Profile/Projects">Projects</Link></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default page;