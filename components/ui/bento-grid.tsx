"use client"

import { useState } from "react"
import { IoCopyOutline } from "react-icons/io5"
import Lottie from "react-lottie"

import confettiAnimationData from "@/data/confetti.json"
import { cn } from "@/lib/utils"

import { BackgroundGradientAnimation } from "./gradient-bg"
import { GlobeDemo } from "./grid-globe"
import { MagicButton } from "./magic-button"

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div className={cn("mx-auto grid max-w-7xl md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8", className)}>{children}</div>
  )
}

type BentoGridItemProps = {
  id: number
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  img?: string | React.ReactNode
  imgClassName?: string
  titleClassName?: string
  spareImg?: string | React.ReactNode
}

export const BentoGridItem = ({ id, className, title, description, img, imgClassName, titleClassName, spareImg }: BentoGridItemProps) => {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText("mayconmarquesh@gmail.com")
    setCopied(true)
  }
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-white/[0.1]  transition duration-200 hover:shadow-xl  dark:shadow-none overflow-hidden relative",
        className,
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundImage: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={cn(id === 6 && "flex justify-center", "h-full")}>
        <div className="w-full h-full absolute">
          {img && <img src={img} alt={img} className={cn(imgClassName, "object-cover object-center")} />}
        </div>
        <div className={cn("absolute right-0 -bottom-5", id === 5 && "w-full opacity-80")}>
          {spareImg && <img src={spareImg} alt={spareImg} className="object-cover object-center w-full h-full" />}
        </div>
        {id === 6 && <BackgroundGradientAnimation />}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
          )}
        >
          <div className="font-sans text-sm md:text-xs lg:text-base font-extralight text-[#c1c2d3]">{description}</div>

          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 ">{title}</div>

          {id === 2 && <GlobeDemo />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:right-2">
              <div className="flex flex-col gap-3 lg:gap-8">
                {["react", "node", "next", "sql"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"></span>
              </div>
              <div className="flex flex-col gap-3 lg:gap-8">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"></span>
                {["typescript", "git", "aws", "postgres"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className="absolute -bottom-5 right-0 ">
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData: confettiAnimationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </div>
              <MagicButton
                title={copied ? "E-mail copiado!" : "Copiar E-mail"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
