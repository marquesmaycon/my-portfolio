import Image from "next/image"

import { companies, testimonials } from "@/data"

import { InfiniteMovingCards } from "./ui/infinite-moving-card"

export const Clients = () => {
  return (
    <section id="testimonials">
      <h2 className="heading">
        Palavras de <span className="text-purple-300">Clientes Satisfeitos</span>
      </h2>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
              <Image src={img} alt={name} width={40} height={40} className="w-5 md:w-10 rounded-full" />
              <Image src={nameImg} alt={name} width={96} height={96} className="w-10 md:w-24 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
