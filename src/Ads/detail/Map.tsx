import { Button } from "antd";
import { Div, MapContainer, Text2 } from "./Styles";
import start from '../../src_assets/start.png'
import end from '../../src_assets/end.png'
import { apikey } from './ApiKey'
import axios from "axios";
import { useEffect, useState } from "react";
import { AdsHistoryType } from './AdsHistory';
import { useParams } from "react-router-dom";
declare global {
  interface Window {
    kakao: any;
  }
}

// 전역변수
let map:any;

// 해당 위치로 좌표 이동 버튼 onClick()
function setCenter(adsHistory : any) { // : AdsHistoryType
  var moveLatLon = new window.kakao.maps.LatLng(adsHistory?.path[0].latitude,adsHistory?.path[0].longitude);
  map.panTo(moveLatLon);
  }

export default function Map() {

  let index = useParams();

  const [adsHistory, setAdsHistory] = useState<AdsHistoryType>();

  useEffect(() => {
    axios.get<AdsHistoryType>(`/api/ads/${index.index}/${index.historyId}`)
      .then((res) => {
        setAdsHistory(res.data)
      });
  }, [])

  // poly-line (latitude, longitude)배열 생성
  var polyPath : {latitude: string, longitude: string}[] = [];
  if(adsHistory) {
    const len = adsHistory.path.length;
    for(let i = 0; i < len; i++){
      polyPath.push(new window.kakao.maps.LatLng(adsHistory.path[i].latitude, adsHistory.path[i].longitude));
    }
  }

  // kakao map api
  window.scrollTo(0, 0);
  const mapScript = document.createElement("script");
  const appKey = apikey;

  mapScript.async = true;
  mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&autoload=false`;
  document.head.appendChild(mapScript);


  const onLoadKakaoMap = () => {

    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById("map");
      const mapOption = {
        center: new window.kakao.maps.LatLng(adsHistory?.path[0].latitude,adsHistory?.path[0].longitude), // 지도의 중심좌표
        level: 4,
      };
      map = new window.kakao.maps.Map(mapContainer, mapOption);

      // 지도 타입 전환: 일반 지도, 스카이뷰
      var mapTypeControl = new window.kakao.maps.MapTypeControl();
      var zoomControl = new window.kakao.maps.ZoomControl();

      map.addControl(mapTypeControl, window.kakao.maps.ControlPosition.TOPRIGHT);
      map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

      // 마커 옵션 ------------------------------------------------------------------
      var imageSrc1 = start,
      imageSize1 = new window.kakao.maps.Size(50, 45),
      imageOption1 = {offset: new window.kakao.maps.Point(15, 43)};

      var imageSrc2 = end,
      imageSize2 = new window.kakao.maps.Size(50, 45),
      imageOption2 = {offset: new window.kakao.maps.Point(15, 43)};


      var markerImage1 = new window.kakao.maps.MarkerImage(imageSrc1, imageSize1, imageOption1),
      markerPosition1 = new window.kakao.maps.LatLng(adsHistory?.path[0].latitude,adsHistory?.path[0].longitude);

      var markerImage2 = new window.kakao.maps.MarkerImage(imageSrc2, imageSize2, imageOption2),
      markerPosition2 = new window.kakao.maps.LatLng(adsHistory?.path[adsHistory?.path.length-1].latitude,adsHistory?.path[adsHistory?.path.length-1].longitude);

      // 마커 생성
      var marker1 = new window.kakao.maps.Marker({
      position: markerPosition1,
      image: markerImage1
      });
      var marker2 = new window.kakao.maps.Marker({
        position: markerPosition2,
        image: markerImage2
        });
      // // ------------------------------------------------------------------------------

      // -- 경로 표시 코드 (polyline) -------------------------------------------------------------

      var polyline = new window.kakao.maps.Polyline({
        map: map,
        path : polyPath,
        // path: [
        //   new window.kakao.maps.LatLng(37.54699, 127.09598),
        //   new window.kakao.maps.LatLng(37.54117, 127.09597),
        // ],
        strokeWeight: 4,
        strokeColor: 'blue',
        strokeOpacity: 0.7,
        strokeStyle: 'solid'
      });
      // ------------------------------------------------------------------------------

      marker1.setMap(map);
      marker2.setMap(map);
      polyline.setMap(map);
    });
  };

  mapScript.addEventListener("load", onLoadKakaoMap);

  return (
    <Div>
      <MapContainer id="map"></MapContainer>
      <Button onClick={() => setCenter(adsHistory)}>라이더 시작 위치로 이동</Button> <br/> <br/>
      <Text2>리워드 : {adsHistory?.reward} ADS</Text2>
      <Text2>이동 거리 : {adsHistory?.meters} m</Text2>
    </Div>
  );

}