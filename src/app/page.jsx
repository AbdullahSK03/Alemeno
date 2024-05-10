import Image from "next/image"

const CourseList = [
  {
      "CourseID": 1,
      "CourseName": "Machine Learning",
      "Instructor": "Andrew Ng",
      "Image": "machine_learning_image.png",
      "Description": "This course provides a broad introduction to machine learning and statistical pattern recognition."
  },
  {
      "CourseID": 2,
      "CourseName": "Introduction to Python",
      "Instructor": "Guido van Rossum",
      "Image": "intro_to_python_image.png",
      "Description": "Learn Python fundamentals, one of the hottest and fastest growing programming languages."
  },
  {
      "CourseID": 3,
      "CourseName": "Data Structures and Algorithms",
      "Instructor": "Robert Sedgewick",
      "Image": "data_structures_algorithms_image.png",
      "Description": "Learn about data structures that are used in computational thinking – both basic and advanced."
  },
  {
      "CourseID": 4,
      "CourseName": "Artificial Intelligence",
      "Instructor": "Peter Norvig",
      "Image": "artificial_intelligence_image.png",
      "Description": "Learn the fundamentals of Artificial Intelligence (AI), and apply them."
  },
  {
      "CourseID": 5,
      "CourseName": "Deep Learning",
      "Instructor": "Yoshua Bengio",
      "Image": "deep_learning_image.png",
      "Description": "Understand the modern deep learning techniques, from basics to state-of-the-art."
  },
  {
      "CourseID": 6,
      "CourseName": "Computer Vision",
      "Instructor": "Fei-Fei Li",
      "Image": "computer_vision_image.png",
      "Description": "This course provides an introduction to computer vision including fundamentals, methods for application and machine learning classification."
  },
  {
      "CourseID": 7,
      "CourseName": "Natural Language Processing",
      "Instructor": "Christopher Manning",
      "Image": "natural_language_processing_image.png",
      "Description": "This course covers a broad range of topics in natural language processing, including word and sentence tokenization, text classification and sentiment analysis."
  },
  {
      "CourseID": 8,
      "CourseName": "Software Engineering",
      "Instructor": "Ian Sommerville",
      "Image": "software_engineering_image.png",
      "Description": "Learn software engineering principles and take a deep dive into software design, architecture, and construction."
  },
  {
      "CourseID": 9,
      "CourseName": "Cybersecurity",
      "Instructor": "Edward Snowden",
      "Image": "cybersecurity_image.png",
      "Description": "This course provides a detailed understanding of the discipline of cybersecurity."
  },
  {
      "CourseID": 10,
      "CourseName": "Blockchain Technology",
      "Instructor": "Satoshi Nakamoto",
      "Image": "blockchain_technology_image.png",
      "Description": "Understand the concepts of Blockchain and cryptocurrencies, learn about the various applications of Blockchain in different sectors."
  }
]


const page = () => {
  return (
    <div className='m-4 flex flex-col items-center justify-center'>
      <h1 className="text-center text-8xl font-Heading font-extrabold">
        Welcome!
      </h1>
      {
        CourseList.map((course) => (
        <div key={course.CourseID} class="m-10 mx-4 max-w-screen-lg overflow-hidden rounded-xl border shadow-lg md:pl-8">
          <div class="flex flex-col overflow-hidden bg-white sm:flex-row md:h-80">
          <div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
            <h2 class="text-xl font-bold text-gray-900 md:text-2xl lg:text-4xl">{course.CourseName}</h2>
            <p class="mt-2 text-lg">By {course.Instructor}</p>
            <p class="mt-4 mb-8 max-w-md text-gray-500">{course.Description}</p>
            <button class="rounded-xl border bg-black px-4 py-2 font-semibold text-white hover:bg-white hover:text-black hover:border-black w-48">Enroll</button>
          </div>
          <div class="order-first ml-auto h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
            <Image width={500} height={500} class="h-full w-full object-cover" src="" loading="lazy" />
          </div>
        </div>
      </div>
    
        ))
      }
    </div>
  )
}

export default page