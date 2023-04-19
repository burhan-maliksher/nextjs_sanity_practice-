import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  
  const projects=await getProjects();

  return (
    <div className="">
      <h1 className="text-5xl md:text-7xl font-extrabold">
        {/* Hello <br></br> */}
        I&apos;m <br></br>
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Muhammad Burhan
        </span>
        !
      </h1>

      <p className="mt-3 text-xl text-gray-600">
        Salam Everyone! Checkout My Projects!
      </p>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>
      
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {projects.map((project)=>(
          <Link href={`/projects/${project.slug}`}  key={project._id} 
                className="hover:scale-105 transition hover:border-blue-500 hover:border-4 border border-gray-500 rounded-lg p-1 m-2">
            {/* checking if image is available then apply below code */}
            {project.image &&(
              <Image  
                src={project.image}
                alt={project.name}
                width={300}
                height={100}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}        

            <div className="font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>    
  );
}
