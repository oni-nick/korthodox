import './App.css';
import { useState } from 'react';
function App() {
  
  let [name, func] = useState(['잠실 -> 서울역 ', '잠실  -> 성수대교', '역삼역 -> 강남역'])
  let [check, funcheck] = useState(0)

  let postcontent = '2023년 3월 14일 오후 2시'
  return (
    <div className="App">
      
      <div className="black-nav">
        <h1>
          AdsRider 광고내역조회
        </h1>
      </div>

      <div className="list">
        <h4>{name[0]} <span onClick={ () => { funcheck(check+1) }}> ✅ </span> {check} </h4>        
        <p>{postcontent}</p>
      </div>
      <div className="list">
        <h4>{name[1]} <span> ✅ </span> 0 </h4>
        <p>{postcontent}</p>
      </div>
      <div className="list">
        <h4>{name[2]} <span> ✅ </span> 0 </h4>
        <p>{postcontent}</p>
      </div>
      <h3 onClick={() => {
          let copy2 = [...name]
          copy2.sort()
          func(copy2)
      }}>제목 정렬하기</h3>
    </div>
  );
}

export default App;
