
export default function Sign() {
    return (
      <div className="flex px-2">
        <div className="border-2 bg-[#D4CFB9] border-black rounded-[10px] relative">
          <div className="absolute top-0 bottom-2.5 my-auto -left-2 translate-y-[50%] w-4 z-10 h-2.5 bg-black" />
          <div className="h-full absolute w-full"></div>
          <p className="py-[5px] px-[20px] font-medium">HYDROPOWER BY MILLER</p>
          <div className="absolute top-0 bottom-2.5 my-auto -right-2 translate-y-[50%] w-4 z-10 h-2.5 bg-black" />
        </div>
      </div>
    );
}