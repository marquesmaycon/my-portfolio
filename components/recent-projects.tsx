import { FaLocationArrow } from "react-icons/fa"
import { projects } from "@/data"
import { PinContainer } from "./ui/3d-pin"

export const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small collection of <span className="text-purple-500">recent projects</span>
      </h1>
      <div className="flex flex-wrap justify-center items-center p-4 gap-x-16 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, link, iconLists }) => (
          <div key={id} className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
            <PinContainer title="Visitar" href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] sm:h-[40vh] h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="alt-img" />
                </div>
                <img src={img} alt={title} className="z-10 absolute bottom-0" />
              </div>
              <h3 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">{title}</h3>

              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">{des}</p>

              <div className="flex items-center mt-7 mb-3">
                {iconLists.map((ic) => (
                  <div
                    key={ic}
                    className="border border-white/[0.2] rounded-full bg-black lg:size-10 size-8 grid place-content-center -ml-2"
                  >
                    <img src={ic} alt="icon" className="p-2" />
                  </div>
                ))}

                <div className="flex items-center ml-auto">
                  <p className="text-sm md:text-xs lg:text-xl text-purple-300">Check live site</p>
                  <FaLocationArrow className="ms-3" color="#cbacf9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}
