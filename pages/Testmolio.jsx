import { Carousel } from "@material-tailwind/react";
import Image from "next/image"
export default function Example() {
  return (
    <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <Image
	 width={500}
	 height={500}
        src="/1.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <Image
	   width={500}
	   height={500}
        src="/2.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <Image 
	  width={500}
	  height={500}
        src="/3.jpeg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}