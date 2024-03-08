import { Dot } from "@/components/ui/dot";

export default function SignUi() {
  return (
    <>
      <div className="absolute top-0 right-0 pt-3 pr-3 text-white">
        <Dot />
      </div>
      <div className="flex relative z-30 flex-col justify-center pl-4 md:pr-12 xl:pr-12 md:pl-24">
        <h3 className="text-4xl font-extrabold leading-tight text-white">
          ChatLink <br />
          Chating Private &amp; Open
        </h3>
        <p className="text-xl text-white leading-normal pt-3 xl:w-10/12">
          ChatLink는 카카오톡 그룹톡의 친밀함과 트위터의 공개적인 소통 방식을
          결합한 새로운 형태의 소규모 그룹 채팅 웹 애플리케이션입니다.
        </p>
      </div>
      <div className="z-20 absolute bottom-0 left-0 pb-3 pl-3 text-white">
        <Dot />
      </div>
    </>
  );
}
