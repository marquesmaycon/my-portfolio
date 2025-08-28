import { FaLocationArrow } from "react-icons/fa"

import { socialMedia } from "@/data"

import { MagicButton } from "./ui/magic-button"

export const Footer = () => {
  return (
    <footer className="w-full pt-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img src="/footer-grid.svg" alt="grid" className="w-full h-full opacity-100" />
      </div>

      <div className="flex flex-col items-center">
        <h2 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple-300">your</span> digital presence to the next-level
        </h2>
        <p className="text-neutral-200 md:mt-10 my-5 text-center">
          Reach out to me today and let's discuss how I can help you achieve your goals.
        </p>

        <a href="mailto:mayconmarquesg@gmail.com">
          <MagicButton title="Lets get in touch" icon={<FaLocationArrow />} position="right" />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-4">
        <p className="md:text-base text-sm md:font-normal font-light">Copyright &copy;</p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="flex items-center size-10 cursor-pointer  justify-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 rounded-lg border border-neutral-700"
            >
              <img src={profile.img} alt={profile.img} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
