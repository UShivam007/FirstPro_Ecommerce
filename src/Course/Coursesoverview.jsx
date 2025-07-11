import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Courses = [
    {
        "courseId": 100,
        "courseName": "MERN Stack with AI",
        "description": "Master full stack web development with AI integration and cloud deployment.",
        "price": 50000,
        "duration": "7 Month",
        "technologies": ["HTML", "CSS", "JS", "JQUERY", "BOOTSTRAP", "REACT", "NODE", "EXPRESS", "MONGODB", "AI integration", "cloud deployment"],
        "imageUrl": "https://www.mangoitsolutions.com/wp-content/uploads/2022/01/becomeamernstackdeveloper-mobile-300x279.png",
        "rating": { count: 2000, avgrating: 4.5, ratingFrom: 5 }
    },
    {
        "courseId": 101,
        "courseName": "JAVA FULL Stack with AI",
        "description": "Build robust Java-based web apps enhanced with AI and cloud tools.",
        "price": 50000,
        "duration": "7 Month",
        "technologies": ["HTML", "CSS", "JS", "JQUERY", "BOOTSTRAP", "REACT", "JAVA", "Adv. Java", "HIBERNATE & SPRING", "AI integration", "cloud deployment"],
        "imageUrl": "https://miro.medium.com/v2/resize:fit:400/1*eyVWUDy9kDXVGDGv1Ev4iA.png",
        "rating": { count: 5000, avgrating: 4.9, ratingFrom: 5 }
    },
    {
        "courseId": 102,
        "courseName": "Python Full Stack with Django",
        "description": "Create dynamic websites with Django and master backend Python development.",
        "price": 45000,
        "duration": "6 Month",
        "technologies": ["HTML", "CSS", "JS", "BOOTSTRAP", "DJANGO", "PYTHON", "SQL", "API Integration"],
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
        "rating": { count: 1200, avgrating: 4.6, ratingFrom: 5 }
    },
    {
        "courseId": 103,
        "courseName": "Data Science with Python",
        "description": "Explore data analytics, machine learning, and AI using Python libraries.",
        "price": 60000,
        "duration": "8 Month",
        "technologies": ["Python", "NumPy", "Pandas", "Matplotlib", "Machine Learning", "Deep Learning", "AI", "Data Analysis"],
        "imageUrl": "https://cdn-icons-png.flaticon.com/512/4824/4824797.png",
        "rating": { count: 3000, avgrating: 4.8, ratingFrom: 5 }
    },
    {
        "courseId": 104,
        "courseName": "MEAN Stack Developer",
        "description": "Build scalable apps using Angular and Node with MongoDB backend.",
        "price": 48000,
        "duration": "6 Month",
        "technologies": ["MongoDB", "Express", "Angular", "Node.js", "REST API", "JWT", "Deployment"],
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTTWjbRExQL185fIm2qWis1biBwkT_9qEkwg&s",
        "rating": { count: 1700, avgrating: 4.4, ratingFrom: 5 }
    },
    {
        "courseId": 105,
        "courseName": "Front-End Developer Bootcamp",
        "description": "Design beautiful UIs using HTML, CSS, JS, React, and Figma.",
        "price": 15000,
        "duration": "2 Month",
        "technologies": ["HTML", "CSS", "JS", "React", "Bootstrap", "Tailwind", "Figma"],
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Front-end-logo-color%402x.png",
        "rating": { count: 2500, avgrating: 4.3, ratingFrom: 5 }
    },
    {
        "courseId": 106,
        "courseName": "Back-End Developer with Spring Boot",
        "description": "Master backend development with Java, Spring Boot, and secure APIs.",
        "price": 42000,
        "duration": "5 Month",
        "technologies": ["Java", "Spring Boot", "Hibernate", "JPA", "REST API", "MySQL", "Security"],
        "imageUrl": "https://du0ulnyus7r80.cloudfront.net/wp-content/uploads/2020/02/spring-boot-logo-png-4-transparent.png",
        "rating": { count: 2300, avgrating: 4.7, ratingFrom: 5 }
    },
    {
        "courseId": 107,
        "courseName": "DevOps & Cloud Mastery",
        "description": "Become a DevOps pro with Docker, Kubernetes, AWS, and CI/CD tools.",
        "price": 70000,
        "duration": "9 Month",
        "technologies": ["Linux", "Docker", "Kubernetes", "AWS", "Terraform", "CI/CD", "Monitoring"],
        "imageUrl": "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/340345882/original/719cdc18b2583fc186be080ab905ca889a2bfa8f/do-devops-and-aws-cloud.png",
        "rating": { count: 1800, avgrating: 4.6, ratingFrom: 5 }
    },
    {
        "courseId": 108,
        "courseName": "Machine Learning with Projects",
        "description": "Learn machine learning hands-on with real-world projects and tools.",
        "price": 55000,
        "duration": "7 Month",
        "technologies": ["Python", "Scikit-learn", "TensorFlow", "Projects", "NLP", "Computer Vision"],
        "imageUrl": "https://cdn-icons-png.freepik.com/512/8618/8618881.png",
        "rating": { count: 2700, avgrating: 4.8, ratingFrom: 5 }
    },
    {
        "courseId": 109,
        "courseName": "Full Stack with Next.js",
        "description": "Build modern full stack apps using React, Next.js, and Vercel.",
        "price": 50000,
        "duration": "6 Month",
        "technologies": ["React", "Next.js", "Tailwind", "Node.js", "MongoDB", "Vercel"],
        "imageUrl": "https://images.seeklogo.com/logo-png/44/3/next-js-logo-png_seeklogo-449824.png",
        "rating": { count: 1100, avgrating: 4.4, ratingFrom: 5 }
    },
    {
        "courseId": 110,
        "courseName": "Android Development",
        "description": "Build native Android apps with Java, Kotlin, and Firebase.",
        "price": 38000,
        "duration": "4 Month",
        "technologies": ["Java", "Kotlin", "XML", "Firebase", "Android Studio"],
        "imageUrl": "https://developer.android.com/static/studio/images/new-studio-logo-1.png",
        "rating": { count: 2100, avgrating: 4.5, ratingFrom: 5 }
    },
    {
        "courseId": 111,
        "courseName": "iOS App Development",
        "description": "Design and develop iOS apps using Swift and Xcode.",
        "price": 40000,
        "duration": "4 Month",
        "technologies": ["Swift", "Xcode", "UI Kit", "Core Data"],
        "imageUrl": "https://developer.apple.com/assets/elements/icons/swift/swift-64x64_2x.png",
        "rating": { count: 1900, avgrating: 4.4, ratingFrom: 5 }
    },
    {
        "courseId": 112,
        "courseName": "UI/UX Design",
        "description": "Create stunning interfaces with modern design tools and practices.",
        "price": 20000,
        "duration": "2 Month",
        "technologies": ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Testing"],
        "imageUrl": "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
        "rating": { count: 2300, avgrating: 4.7, ratingFrom: 5 }
    },
    {
        "courseId": 113,
        "courseName": "Cloud Computing with AWS",
        "description": "Get certified in AWS and learn cloud infrastructure management.",
        "price": 55000,
        "duration": "6 Month",
        "technologies": ["AWS", "EC2", "S3", "Lambda", "CloudFormation"],
        "imageUrl": "https://cdn.iconscout.com/icon/free/png-256/aws-1869025-1583149.png",
        "rating": { count: 2600, avgrating: 4.8, ratingFrom: 5 }
    },
    {
        "courseId": 114,
        "courseName": "Database Administration",
        "description": "Manage SQL and NoSQL databases with high performance.",
        "price": 35000,
        "duration": "4 Month",
        "technologies": ["MySQL", "PostgreSQL", "MongoDB", "Indexing", "Backups"],
        "imageUrl": "https://cdn-icons-png.flaticon.com/512/1048/1048947.png",
        "rating": { count: 1500, avgrating: 4.2, ratingFrom: 5 }
    },
    {
        "courseId": 115,
        "courseName": "Cyber Security Essentials",
        "description": "Learn to secure systems, detect threats, and protect data.",
        "price": 60000,
        "duration": "7 Month",
        "technologies": ["Firewalls", "Encryption", "Ethical Hacking", "OWASP", "SIEM"],
        "imageUrl": "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
        "rating": { count: 2100, avgrating: 4.5, ratingFrom: 5 }
    },
    {
        "courseId": 116,
        "courseName": "Artificial Intelligence with Python",
        "description": "Build intelligent systems using Python and AI libraries.",
        "price": 58000,
        "duration": "6 Month",
        "technologies": ["Python", "AI", "TensorFlow", "OpenCV", "Neural Networks"],
        "imageUrl": "https://cdn-icons-png.flaticon.com/512/4149/4149653.png",
        "rating": { count: 2200, avgrating: 4.6, ratingFrom: 5 }
    },
    {
        "courseId": 117,
        "courseName": "Blockchain Developer Program",
        "description": "Develop smart contracts and DApps on Ethereum.",
        "price": 65000,
        "duration": "6 Month",
        "technologies": ["Solidity", "Ethereum", "Truffle", "Ganache", "Web3.js"],
        "imageUrl": "https://cdn-icons-png.flaticon.com/512/5977/5977575.png",
        "rating": { count: 1800, avgrating: 4.5, ratingFrom: 5 }
    },
    {
        "courseId": 118,
        "courseName": "Salesforce Developer",
        "description": "Master Salesforce development and CRM solutions.",
        "price": 55000,
        "duration": "5 Month",
        "technologies": ["Apex", "Visualforce", "Salesforce Lightning", "SOQL"],
        "imageUrl": "https://cdn.iconscout.com/icon/free/png-256/salesforce-282597.png",
        "rating": { count: 1600, avgrating: 4.3, ratingFrom: 5 }
    },
    {
        "courseId": 119,
        "courseName": "Business Intelligence Analyst",
        "description": "Analyze data and deliver insights with BI tools and SQL.",
        "price": 48000,
        "duration": "5 Month",
        "technologies": ["Power BI", "Tableau", "SQL", "Excel", "Reporting"],
        "imageUrl": "https://cdn-icons-png.flaticon.com/512/906/906175.png",
        "rating": { count: 1950, avgrating: 4.4, ratingFrom: 5 }
    }
];

const CourseOverview = () => {
    const { courseId } = useParams();
    const [course,setcourse] = useState({});


    useEffect(() => {
        setcourse(Courses.filter(c => c.courseId === Number(courseId))[0]);
    }, [courseId]);

    return (
    <>
            {/* {console.log("courseId", course)} */}
            <div className="container flex">
                <div className="left w-[40vw] bg-amber-100">
                    <img src={course.imageUrl} alt="" style={{ height: "50vh" }} />
                </div>
                <div className="right w-[60vw] bg-gray-400">
                    <h1 className="text-3xl">{course.courseName}{` :${courseId}`}</h1>
                    <h1 className="text-xl">{course.description}</h1>
                    <h1 className="text-xl"> Price : {course.price}</h1>
                </div>
            </div>
        </>
    )
};

export default CourseOverview;