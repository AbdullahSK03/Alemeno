'use client'
import Link from "next/link"
import Image from "next/image"

const CourseList =[
  {
    "CourseID": 1,
    "CourseName": "Machine Learning",
    "Instructor": "Andrew Ng",
    "Image": "machine_learning_image.png",
    "Description": "This course provides a broad introduction to machine learning and statistical pattern recognition.",
    "EnrollmentStatus": "Open",
    "CourseDuration": "3 weeks",
    "Schedule": "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
    "Location": "Online",
    "Prerequisites": ["Basic understanding of linear algebra", "Familiarity with Python programming"],
    "Syllabus": {
      "Week1": "Introduction and Basic Concepts",
      "Week2": "Intermediate Topics and Practical Applications",
      "Week3": "Advanced Topics and Project Presentations"
    }
  },
  {
    "CourseID": 2,
    "CourseName": "Introduction to Python",
    "Instructor": "Guido van Rossum",
    "Image": "intro_to_python_image.png",
    "Description": "Learn Python fundamentals, one of the hottest and fastest growing programming languages.",
    "EnrollmentStatus": "Open",
    "CourseDuration": "3 weeks",
    "Schedule": "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
    "Location": "Online",
    "Prerequisites": ["None"],
    "Syllabus": {
      "Week1": "Python Basics and Syntax",
      "Week2": "Data Structures and Functions",
      "Week3": "Advanced Python Features and Project Work"
    }
  },
  {
    "CourseID": 3,
    "CourseName": "Data Structures and Algorithms",
    "Instructor": "Robert Sedgewick",
    "Image": "data_structures_algorithms_image.png",
    "Description": "Learn about data structures that are used in computational thinking – both basic and advanced.",
    "EnrollmentStatus": "Closed",
    "CourseDuration": "3 weeks",
    "Schedule": "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
    "Location": "Room 101",
    "Prerequisites": ["Basic understanding of programming concepts"],
    "Syllabus": {
      "Week1": "Fundamental Data Structures",
      "Week2": "Algorithm Design and Analysis",
      "Week3": "Advanced Algorithms and Problem Solving"
    }
  },
  {
    "CourseID": 4,
    "CourseName": "Artificial Intelligence",
    "Instructor": "Peter Norvig",
    "Image": "artificial_intelligence_image.png",
    "Description": "Learn the fundamentals of Artificial Intelligence (AI), and apply them.",
    "EnrollmentStatus": "Open",
    "CourseDuration": "3 weeks",
    "Schedule": "Tuesdays and Thursdays, 5:00 PM - 7:00 PM",
    "Location": "Online",
    "Prerequisites": ["Basic knowledge of programming", "Familiarity with basic concepts of probability and linear algebra"],
    "Syllabus": {
      "Week1": "Introduction to AI and Search Algorithms",
      "Week2": "Knowledge Representation and Machine Learning",
      "Week3": "Advanced AI Techniques and Applications"
    }
  },
  {
    "CourseID": 5,
    "CourseName": "Deep Learning",
    "Instructor": "Yoshua Bengio",
    "Image": "deep_learning_image.png",
    "Description": "Understand the modern deep learning techniques, from basics to state-of-the-art.",
    "EnrollmentStatus": "Open",
    "CourseDuration": "3 weeks",
    "Schedule": "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
    "Location": "Online",
    "Prerequisites": ["Basic understanding of machine learning concepts", "Familiarity with Python programming"],
    "Syllabus": {
      "Week1": "Basics of Neural Networks",
      "Week2": "Convolutional Neural Networks (CNNs) and Recurrent Neural Networks (RNNs)",
      "Week3": "Advanced Deep Learning Architectures and Applications"
    }
  },
  {
    "CourseID": 6,
    "CourseName": "Computer Vision",
    "Instructor": "Fei-Fei Li",
    "Image": "computer_vision_image.png",
    "Description": "This course provides an introduction to computer vision including fundamentals, methods for application and machine learning classification.",
    "EnrollmentStatus": "Open",
    "CourseDuration": "3 weeks",
    "Schedule": "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    "Location": "Online",
    "Prerequisites": ["Basic understanding of machine learning concepts", "Familiarity with Python programming"],
    "Syllabus": {
      "Week1": "Image Processing Basics and Feature Extraction",
      "Week2": "Object Detection and Recognition",
      "Week3": "Advanced Computer Vision Techniques and Projects"
    }
  },
  {
    "CourseID": 7,
    "CourseName": "Natural Language Processing",
    "Instructor": "Christopher Manning",
    "Image": "natural_language_processing_image.png",
    "Description": "This course covers a broad range of topics in natural language processing, including word and sentence tokenization, text classification and sentiment analysis.",
    "EnrollmentStatus": "Open",
    "CourseDuration": "3 weeks",
    "Schedule": "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
    "Location": "Online",
    "Prerequisites": ["Basic understanding of machine learning concepts", "Familiarity with Python programming"],
    "Syllabus": {
      "Week1": "Text Processing Basics and Language Models",
      "Week2": "Text Classification and Sentiment Analysis",
      "Week3": "Advanced NLP Techniques and Project Work"
    }
  },
  {
    "CourseID": 8,
    "CourseName": "Software Engineering",
    "Instructor": "Ian Sommerville",
    "Image": "software_engineering_image.png",
    "Description": "Learn software engineering principles and take a deep dive into software design, architecture, and construction.",
    "EnrollmentStatus": "Open",
    "CourseDuration": "3 weeks",
    "Schedule": "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    "Location": "Online",
    "Prerequisites": ["Basic understanding of programming concepts"],
    "Syllabus": {
      "Week1": "Introduction to Software Engineering and Software Development Life Cycle",
      "Week2": "Software Design Patterns and Testing Strategies",
      "Week3": "Advanced Topics in Software Engineering and Project Implementation"
    }
  },
  {
    "CourseID": 9,
    "CourseName": "Cybersecurity",
    "Instructor": "Edward Snowden",
    "Image": "cybersecurity_image.png",
    "Description": "This course provides a detailed understanding of the discipline of cybersecurity.",
    "EnrollmentStatus": "Open",
    "CourseDuration": "3 weeks",
    "Schedule": "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
    "Location": "Online",
    "Prerequisites": ["Basic understanding of networking concepts", "Familiarity with operating systems"],
    "Syllabus": {
      "Week1": "Introduction to Cybersecurity and Threat Landscape",
      "Week2": "Cyber Defense Mechanisms and Risk Management",
      "Week3": "Advanced Cybersecurity Concepts and Practical Applications"
    }
  },
  {
    "CourseID": 10,
    "CourseName": "Blockchain Technology",
    "Instructor": "Satoshi Nakamoto",
    "Image": "blockchain_technology_image.png",
    "Description": "Understand the concepts of Blockchain and cryptocurrencies, learn about the various applications of Blockchain in different sectors.",
    "EnrollmentStatus": "Open",
    "CourseDuration": "3 weeks",
    "Schedule": "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
    "Location": "Online",
    "Prerequisites": ["Basic understanding of cryptography", "Familiarity with distributed systems"],
    "Syllabus": {
      "Week1": "Blockchain Basics and Cryptography",
      "Week2": "Smart Contracts and Decentralized Applications (DApps)",
      "Week3": "Advanced Blockchain Topics and Industry Use Cases"
    }
  }
]





const page = () => {
  return (
    <div className='m-4 flex flex-col items-center justify-center'>
      <h1 className="tracking-in-expand-fwd text-center text-6xl font-Heading font-extrabold">
        Welcome!
      </h1>
      {
        CourseList.map((course, index) => (
        <div key={course.CourseID} className={`slide-in-left overflow-hidden m-10 mx-4 max-w-screen-lg rounded-xl border hover:shadow-lg hover:shadow-black/30 md:pl-8`} style={{animationDelay: `${index * 0.2}s`}}>
          <div className="flex flex-col bg-white sm:flex-row md:h-80">
          <div className="flex w-full flex-col p-2 sm:w-1/2 sm:p-8 lg:w-3/5">
            <h2 className="text-xl font-bold text-gray-900 md:text-2xl lg:text-4xl">{course.CourseName}</h2>
            <p className="mt-2 text-md">By {course.Instructor}</p>
            <p className="mt-2 mb-4 max-w-md text-gray-500">{course.Description}</p>
            <span className={`text-sm text-gray-500 ${course.EnrollmentStatus === "Closed" ? "text-red-500" : "text-green-500"}`}>Enrollment Status: {course.EnrollmentStatus}</span>
            <span className="text-sm text-gray-500">Course Duration: {course.CourseDuration}</span>
            <span className="text-sm text-gray-500">Location: {course.Location}</span>
            <span className="text-sm text-gray-500">Schedule: {course.Schedule}</span>
            <Link href={`/CourseDetails/${course.CourseID}`} className="text-center rounded-xl border bg-black px-4 py-2 font-semibold text-white hover:bg-white hover:text-black hover:border-black hover:shadow-lg hover:shadow-black/30 w-48">Enroll</Link>
          </div>
          <div className="order-first ml-auto h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
            <Image width={500} height={600} className="h-full w-full object-cover" src={`/${course.Image}`} loading="lazy" alt="course image" />
          </div>
        </div>
      </div>
    
        ))
      }
    </div>
  )
}
export {CourseList};
export default page;