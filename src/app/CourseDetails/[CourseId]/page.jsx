"use client";
import { usePathname } from "next/navigation";
import { CourseList } from "@/app/page";
import Image from "next/image";
const Page = () => {
  const pathname = usePathname();
  const courseId = pathname.split("/")[2]; // assuming the path is /course/[courseId]

  // Convert courseId to integer
  const courseIdInt = parseInt(courseId, 10);

  // Find the course in the CourseList
  const course = CourseList.find((course) => course.CourseID === courseIdInt);

  if (!course) {
    return (
      <div className="items-center justify-center mt-72 text-center text-5xl">
        <span className="text-6xl">404</span> <br />
        Course not found
      </div>
    );
  }

  return (
    <div className="items-center justify-center flex flex-col">
      <h1 className="text-4xl font-extrabold font-Heading m-8">
        {CourseList[courseIdInt - 1].CourseName}
      </h1>
      <Image
        width={650}
        height={650}
        src={`/${CourseList[courseIdInt - 1].Image}`}
        alt="Course"
      />
      <p className="my-2 text-left">{CourseList[courseIdInt - 1].Instructor}</p>
      <p>{CourseList[courseIdInt - 1].Description}</p>
    </div>
  );
};

export default Page;
