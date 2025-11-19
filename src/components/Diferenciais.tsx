import Image from "next/image";
import Exempla from "@/components/DiferenDetalhes";
export default function Nossosdiferencias() {
  return (
    <>
      <div className="bg-gray-100 mt-20 mb-20">
  <div className="flex flex-row">
    <div className="basis-3/6 relative">
      <Image
        src="/whychoose.webp"
        alt="Por Que Nos Escolher Background"
        width={1200}
        height={900}
        className=""
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25" />
    </div>
    <div className="basis-4/6 p-12">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="relative z-10 max-w-2xl mt-20">
          <h2 className="relative z-10 text-4xl font-semibold lg:text-5xl text-[#020e2a]">
            <span className="text-[#fab909] text-5xl font-semibold">
              Por Que
            </span>{" "}
            Nos Escolher
          </h2>
        </div>
        <Exempla />
      </div>
    </div>
  </div>
</div>
    </>
  );
}