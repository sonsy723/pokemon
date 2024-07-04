import React from "react";

function DetailPage({ params: { id } }: { params: { id: string } }) {
  return <div>상세화면 페이지 id : {id}</div>;
}

export default DetailPage;
