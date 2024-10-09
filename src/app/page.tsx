export default function Home() {
  return (
    <div className="relative w-[100%] h-[100dvh] overflow-hidden flex justify-center items-center">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 right-0 bottom-0 object-cover h-full w-full">
        <source src="./main_page_video.mp4" type="video/mp4" />
      </video>
      <div className="z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 lg:mt-0">
          <div className="flex justify-center items-center flex-col">
            <p className="font-bold italic text-[100px]">
              A<span className="text-cyan-500">W</span>_
            </p>
          </div>
          <div className="p-4 flex justify-center items-center ">
            <iframe
              height={"225px"}
              width={"450px"}
              src="https://www.youtube.com/embed/w4rW9pIsexI?si=v9fFBtoAK_LE8myQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
