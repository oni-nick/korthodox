import { Button } from "antd";
import { Div, MapContainer } from "./Styles";
import start from '../../src_assets/start.png'
import end from '../../src_assets/end.png'

declare global {
  interface Window {
    kakao: any;
  }
}

// 전역변수
let map:any;

// 시작 위치로 좌표 이동 버튼 onClick()
function setCenter() {
  var moveLatLon = new window.kakao.maps.LatLng(37.54699, 127.09598);
  map.panTo(moveLatLon);
  }

export default function Map() {
  window.scrollTo(0, 0);
  const mapScript = document.createElement("script");
  const appKey = '165a23041aebe58bdfa679362be30b7f';

  mapScript.async = true;
  mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&autoload=false`;
  document.head.appendChild(mapScript);

  const onLoadKakaoMap = () => {

    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById("map");
      const mapOption = {
        center: new window.kakao.maps.LatLng(37.54699, 127.09598), // 지도의 중심좌표
        level: 4,
      };
      map = new window.kakao.maps.Map(mapContainer, mapOption);

      // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
      var mapTypeControl = new window.kakao.maps.MapTypeControl();
      var zoomControl = new window.kakao.maps.ZoomControl();

      map.addControl(mapTypeControl, window.kakao.maps.ControlPosition.TOPRIGHT);
      map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

      // // -- 마커 표시 코드 -------------------------------------------------------------------
      var imageSrc1 = start,
      imageSize1 = new window.kakao.maps.Size(50, 45),
      imageOption1 = {offset: new window.kakao.maps.Point(15, 43)};

      var imageSrc2 = end,
      imageSize2 = new window.kakao.maps.Size(50, 45),
      imageOption2 = {offset: new window.kakao.maps.Point(15, 43)};


      var markerImage1 = new window.kakao.maps.MarkerImage(imageSrc1, imageSize1, imageOption1),
      markerPosition1 = new window.kakao.maps.LatLng(37.54699, 127.09598);

      var markerImage2 = new window.kakao.maps.MarkerImage(imageSrc2, imageSize2, imageOption2),
      markerPosition2 = new window.kakao.maps.LatLng(37.54117, 127.09577);

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
        path: [
            new window.kakao.maps.LatLng(37.54699, 127.09598),
            new window.kakao.maps.LatLng(37.54117, 127.09597)
        ],
        strokeWeight: 6,
        strokeColor: 'red',
        strokeOpacity: 0.8,
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
      <Button onClick={() => setCenter()}>라이더 시작 위치로 이동</Button>
    </Div>
  );

}