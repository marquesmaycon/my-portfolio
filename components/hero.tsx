import { FaLocationArrow } from "react-icons/fa"

import { cn } from "@/lib/utils"

import { MagicButton } from "./ui/magic-button"
import { Spotlight } from "./ui/spotlight"
import { TextGenerateEffect } from "./ui/text-generate-effect"

export const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="-top-10 -left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="relative flex h-screen w-full items-center justify-center bg-white dark:bg-black-100">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_3%,black)] dark:bg-black-100"></div>

        <div className="flex justify-center z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-blue-100 max-w-80">Dynamic Web Magic with Next.js</h2>

            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="Transforme Conceitos em Experiências de Usuário Harmoniosas"
            />

            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Olá, meu nome é Maycon, um desenvolvedor do Brasil.
            </p>

            <a href="#about">
              <MagicButton title="Veja meu trabalho" icon={<FaLocationArrow />} position="right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
