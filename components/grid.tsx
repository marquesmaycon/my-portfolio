import { gridItems } from "@/data"

import { BentoGrid, BentoGridItem } from "./ui/bento-grid"

export const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(({ id, title, description, img, className, imgClassName, titleClassName, spareImg }, index) => (
          <BentoGridItem
            key={index.toString()}
            id={id}
            title={title}
            description={description}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  )
}
