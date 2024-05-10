import dynamic from "next/dynamic";
import Image from "next/image";

const NoSSR = dynamic(() => import("./page"), { ssr: false });

const page = () => {
  // Define your tabs here
  const tabs = ["Bio", "Courses", "Projects"];

  return (
    <div className="p-10 text-center flex flex-col justify-center items-center">
      <NoSSR />
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
            {tabs.map((tab, index) => (
              <td key={index} className="p-4">{tab}</td>
            ))}
          </tr>
        </tbody>
        <tbody>
          <tr>
            {/* Your content here */}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default page;
