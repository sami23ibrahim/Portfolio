
import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare,BsYoutube,BsDownload } from "react-icons/bs"
import { useState } from 'react';



// Define a separate component for the project description
// const ProjectDescription = () => {
//   return (
//     <div>
//       <p>Sami's List is an Android App designed with Kotlin tailored for a more organized shopping journey.</p>
//       <p>It transforms the shopping experience with a user-friendly interface that allows users to explore and locate products with ease.</p>
//       <p>The App allows users with tools for a streamlined shopping process, featuring a pre-visit checklist and in-store assistance, ensuring a quick, efficient, and enjoyable experience.</p>
//       <h1 className="text-1xl font-bold mb-6">Home Screen Features:</h1>
//       <ul>
//         <li>'Smart Search' for instant product searches, aggregates sale items, and weekly flyers.</li>
//         <li>The category shortcuts, when clicked, display all items within that category, allowing users to easily add items to their list or view detailed information.</li>
//       </ul>
//       <h1 className="text-1xl font-bold mb-6">Checklist Screen:</h1>
//       <p>Includes a 'Dynamic Checklist' where the added items are displayed with their quantity and price. 'In-Store Navigation' aids in locating and checking off items, with automatic updates to the estimated total bill as items are found.</p>
//     </div>
//   );
// };



// const projects: { name: string; description: React.ReactNode; image: string; github?: string; link?: string; }[] = [

// //const projects = [
//   {
//     name: "Sami's List Andriod App",
//     description: <ProjectDescription />,
//   //   description:
//   //   <div>
//   //   <p>Sami's List is an Android App designed with Kotlin tailored for a more organized shopping journey.</p>
//   //   <p>It transforms the shopping experience with a user-friendly interface that allows users to explore and locate products with ease.</p>
//   //   <p>The App allows users with tools for a streamlined shopping process, featuring a pre-visit checklist and in-store assistance, ensuring a quick, efficient, and enjoyable experience.</p>
//   //   <h1 className="text-1xl font-bold mb-6">Home Screen Features:</h1>
//   //   <ul>
//   //     <li>'Smart Search' for instant product searches, aggregates sale items, and weekly flyers.</li>
//   //     <li>The category shortcuts, when clicked, display all items within that category, allowing users to easily add items to their list or view detailed information.</li>
//   //   </ul>
//   //   <h1 className="text-1xl font-bold mb-6">Checklist Screen:</h1>
//   //   <p>Includes a 'Dynamic Checklist' where the added items are displayed with their quantity and price. 'In-Store Navigation' aids in locating and checking off items, with automatic updates to the estimated total bill as items are found.</p>
//   // </div>,
//       // "Sami's List is an Android App designed with Kotlin tailored for a more organized shopping journey.\n\n" +
//       // " It transforms the shopping experience with a user-friendly interface that allows users to explore and locate products with ease."
//       // +"The App allows users with tools for a streamlined shopping process, featuring a pre-visit checklist and in-store assistance, ensuring a quick, efficient, and enjoyable experience."
//       // +"Home Screen Features: 'Smart Search' for instant product searches, aggregates sale items, and weekly flyers. The category shortcuts, when clicked, display all items within that category, allowing users to easily add items to their list or view detailed information."
//       // +"checklist Screen: Includes a 'Dynamic Checklist' where the added items are displayed with their quantity and price. 'In-Store Navigation' aids in locating and checking off items, with automatic updates to the estimated total bill as items are found.",
    
//     image: "/myApp.jpg",
//     github: "https://github.com/sami23ibrahim/ShoPping-List-APP",
//     link: "https://github.com/sami23ibrahim/ShoPping-List-APP",
//   },
//   {
//     name: "AI Face Mask Detector",
//     description:
//       "Implemented a Deep Learning Convolutional Neural Network (CNN) using Python and trained it to detect whether a person is wearing aface mask or not, as well as the type of mask that is being worn.",
//     image: "/face_mask2.png",
//    // images: ["/face_mask2.png"],
//     github: "https://github.com/sami23ibrahim/AI-Face-Mask-Detector-main",
//     link: "",
//   },
//   {
//     name: "Halloween fighters 2.5D Game",
//     description: "2.5D variation of Sunset Riders game built in Unity using C#. In this variation, rather than being set in beautiful sunset from the old west, the game takes place in a scary haunted manor.",
//     image: "/Halloween_fighters.png",
//     //images: ["/Halloween_fighters.png"],
//     github: "",
//     link: "https://www.youtube.com/watch?v=MhkEzkghuvQ",
//   },
//   {
//     name: "Rentrack Data base",
//     description:
//       "Designed a relational database using SQL to help streamline the process of managing customers, employees, reservations, invoices, and payments of truck renting company.",
//     image: "/rent.png",
//     //images: ["/rent.png"],
//     github: "https://github.com/sami23ibrahim/Rentrack-main",
//     link: "",
//   },
//   {
//     name: "Serial Cleaners 3D Game",
//     description:
//       "3D multiplayer game built in Unity using C#, the Two players work together to clean a crime scene left behind by a serial killer. Their goal is to leave the crime scene squeaky clean in the shortest time possible before the next residents arrive.",
//     image: "/Serial-Cleaners.png",
//     //images: ["/Serial-Cleaners.png"],
//     github: "https://github.com/sami23ibrahim/Serial-Cleaners/tree/main",
//     link: "",
//   },
// ]
// //];
// //**************************************************************** */
// const ProjectsSection = () => {
//   return (
//     <section id="projects">
//       <h1 className="my-10 text-center font-bold text-4xl">
//         Projects
//         <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
//       </h1>

//       <div className="flex flex-col space-y-28">
//         {projects.map((project, idx) => {
//           return (
//             <div key={idx}>
//               <SlideUp offset="-300px 0px -300px 0px">
//                 <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
//                   <div className="md:w-1/2">
//                     {project.link ? (
//                       <Link href={project.link}>
//                         <Image
//                           src={project.image}
//                           alt=""
//                           width={1000}
//                           height={1000}
//                           className="rounded-xl shadow-xl hover:opacity-70"
//                         />
//                       </Link>
//                     ) : (
//                       <Image
//                         src={project.image}
//                         alt=""
//                         width={800}
//                         height={800}
//                         className="rounded-xl shadow-xl"
//                       />
//                     )}
//                   </div>
//                   <div className="mt-8 md:w-1/2">
//                     <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
//                     <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
//                       {project.description}
//                     </p>
//                     <div className="flex flex-row align-bottom space-x-4">
//                       {project.github && (
//                         <Link href={project.github} target="_blank">
//                           <BsGithub
//                             size={30}
//                             className="hover:-translate-y-1 transition-transform cursor-pointer"
//                           />
//                         </Link>
//                       )}
//                       {project.link && (
//                         <Link href={project.link} target="_blank">
//                           <BsArrowUpRightSquare
//                             size={30}
//                             className="hover:-translate-y-1 transition-transform cursor-pointer"
//                           />
//                         </Link>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </SlideUp>
//             </div>
//           )
//         })}
//       </div>
//     </section>
//   )
// }

// export default ProjectsSection;





const ProjectDescription = () => {
  return (
    <div>
      <p>Sami's List is an Android App designed with Kotlin tailored for a more organized shopping journey.</p>
      <p>It transforms the shopping experience with a user-friendly interface that allows users to explore and locate products with ease.</p>
      <br></br>
      <p>The App allows users with tools for a streamlined shopping process, featuring a pre-visit checklist and in-store assistance, ensuring a quick, efficient, and enjoyable experience.</p>
      <br></br>
      <h1 className="text-1xl font-bold mb-6">Home Screen Features:</h1>
      <ul>
        <li>'Smart Search' for instant product searches, aggregates sale items, and weekly flyers.</li>
        <li>The category shortcuts, when clicked, display all items within that category, allowing users to easily add items to their list or view detailed information.</li>
      </ul>
      <br></br>
      <h1 className="text-1xl font-bold mb-6">Checklist Screen:</h1>
      <p>Includes a 'Dynamic Checklist' where the added items are displayed with their quantity and price. 'In-Store Navigation' aids in locating and checking off items, with automatic updates to the estimated total bill as items are found.</p>
    </div>
  );
};

const projects = [
  {
    name: "Sami's List Andriod App",
    description: <ProjectDescription />,
    image: "/myApp.jpg",
    github: "https://github.com/sami23ibrahim/ShoPping-List-APP",
    link: "https://www.youtube.com/watch?v=D4aVstpxR5M",
    download:"https://drive.google.com/file/d/1fx0gpO0AlnnhKdCW1Oq_g7IavzhTIaa9/view?usp=sharing"
  },
  
  {
    name: "AI Face Mask Detector",
    description:
      "Implemented a Deep Learning Convolutional Neural Network (CNN) using Python and trained it to detect whether a person is wearing aface mask or not, as well as the type of mask that is being worn.",
    image: "/face_mask2.png",
   // images: ["/face_mask2.png"],
    github: "https://github.com/sami23ibrahim/AI-Face-Mask-Detector-main",
    link: "",
  },
  {
    name: "Halloween fighters 2.5D Game",
    description: "2.5D variation of Sunset Riders game built in Unity using C#. In this variation, rather than being set in beautiful sunset from the old west, the game takes place in a scary haunted manor.",
    image: "/Halloween_fighters.png",
    //images: ["/Halloween_fighters.png"],
    github: "",
    link: "https://www.youtube.com/watch?v=MhkEzkghuvQ",
  },
  {
    name: "Rentrack Data base",
    description:
      "Designed a relational database using SQL to help streamline the process of managing customers, employees, reservations, invoices, and payments of truck renting company.",
    image: "/rent.png",
    //images: ["/rent.png"],
    github: "https://github.com/sami23ibrahim/Rentrack-main",
    link: "",
  },
  {
    name: "Serial Cleaners 3D Game",
    description:
      "3D multiplayer game built in Unity using C#, the Two players work together to clean a crime scene left behind by a serial killer. Their goal is to leave the crime scene squeaky clean in the shortest time possible before the next residents arrive.",
    image: "/Serial-Cleaners.png",
    //images: ["/Serial-Cleaners.png"],
    github: "https://github.com/sami23ibrahim/Serial-Cleaners/tree/main",
    link: "",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:w-1/2">
                    {project.link ? (
                      <Link href={project.link}>
                        <Image
                          src={project.image}
                          alt=""
                          width={1000}
                          height={1000}
                          className="rounded-xl shadow-xl hover:opacity-70"
                        />
                      </Link>
                    ) : (
                      <Image
                        src={project.image}
                        alt=""
                        width={800}
                        height={800}
                        className="rounded-xl shadow-xl"
                      />
                    )}
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <div className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {typeof project.description === "string" ? project.description : <ProjectDescription />}
                    </div>
                    <div className="flex flex-row align-bottom space-x-4">
                      {project.github && (
                        <Link href={project.github} target="_blank">
                          <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
                      {project.link && (
                        <Link href={project.link} target="_blank">
                          <BsYoutube
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
                       {project.download && (
                        <Link href={project.download} target="_blank">
                          <BsDownload
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProjectsSection;