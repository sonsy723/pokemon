import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pokemon Book",
  description: "Pokemon Book",
};

function DetailPage({ params: { id } }: { params: { id: string } }) {
  return (
    <div className="w-1/2 h-auto m-auto mt-12 bg-white text-black rounded-xl">
      <div className="bg-neutral-200 text-center py-6 rounded-xl">
        <h3 className="text-2xl font-bold mb-2">몬스터이름</h3>
        <p>NO.숫자</p>
      </div>
      <div className="p-6 text-center">
        <img src="#" alt="몬스터 모습" className="m-auto pb-2" />
        <p className="pb-2">이름 : {}</p>
        <p className="text-sm pb-2">
          키 : {} &nbsp;&nbsp; 무게 : {}
        </p>
        <p className="font-bold pb-2">
          타입 : {} &nbsp;&nbsp; 특성 : {}
        </p>
        <p className="font-bold pb-2">기술 :</p>
        <p>{}</p>
      </div>
      <button className="bg-blue-600	w-28 h-10 rounded-xl text-white font-bold item-center">
        뒤로 가기
      </button>
    </div>
  );
}

export default DetailPage;
