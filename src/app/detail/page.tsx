function DetailPage({ params: { id } }: { params: { id: string } }) {
  return (
    <div className="w-1/2 h-auto m-auto mt-12 bg-white text-black rounded-xl">
      <div className="bg-neutral-200 text-center py-6 rounded-xl">
        <h3 className="text-2xl font-bold mb-2">몬스터이름</h3>
        <p>NO.숫자</p>
      </div>
      <div className="p-6">
        <img src="#" alt="몬스터 모습" />
        <p>이름 : 파이리</p>
        <p>키 : 0.6m &nbsp;&nbsp; 무게 : 8.5kg</p>
        <p>타입 : 불꽃 &nbsp;&nbsp; 특성 : 선파워</p>
        <p>기술 :</p>
        <p>메가톤펀치 어쩌구저쩌구</p>
      </div>
      <button className="bg-blue-600	w-28 h-10 rounded-xl text-white font-bold item-center">
        뒤로 가기
      </button>
    </div>
  );
}

export default DetailPage;
