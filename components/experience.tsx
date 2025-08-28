import Image from "next/image"

import { workExperience } from "@/data"

import { Button } from "./ui/moving-border"

export const Experience = () => {
  return (
    <section id="experience">
      <h2 className="heading">
        Minha <span className="text-purple-300">Experiência Profissional</span>
      </h2>
      <div className="w-full mt-12 grid grid-cols-1 gap-10 lg:grid-cols-4">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            borderRadius="1.75rem"
            duration={Math.floor(Math.random() * 10000) + 10000}
            className="flex-1 text-white border-neutral-200 dark:border-slate-800 p-4"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image src={card.thumbnail} alt={card.title} width={128} height={128} className="w-16 md:w-20 lg:w-32" />
            </div>
            <div className="lg:ms-5">
              <h2 className="text-start text-xl md:text-2xl font-bold">{card.title}</h2>
              <p className="text-start text-neutral-200 mt-3 font-light">{card.desc}</p>
            </div>
          </Button>
        ))}
      </div>
    </section>
  )
}
