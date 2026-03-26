<script setup>
import { onMounted, onUnmounted } from "vue";
import AMapLoader from "@amap/amap-jsapi-loader";

const AMAP_KEY = "ad72acc500213cc133110eb50b1e859d";
const COMPANY_NAME = "上海铠福防护科技有限公司";
const COMPANY_ADDRESS = "上海市奉贤区金汇镇大叶公路7208号7号楼";
const FALLBACK_CENTER = [121.613098, 30.983405];

let containerRef = null;
let map = null;
let marker = null;
let infoWindow = null;

const createInfoContent = (title, address) => {
  return `
    <div class="map-card">
      <div class="map-card__title" title="${title}">${title}</div>
      <div class="map-card__arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M12 4v10.6"
            stroke="currentColor"
            stroke-width="2.2"
            stroke-linecap="round"
          />
          <path
            d="M7.6 8.4 12 4l4.4 4.4"
            stroke="currentColor"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 14.6h4.8"
            stroke="currentColor"
            stroke-width="2.2"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div class="map-card__address">${address}</div>
    </div>
  `;
};

const showPoi = (AMap, poi) => {
  const lnglat = Array.isArray(poi.location)
    ? new AMap.LngLat(poi.location[0], poi.location[1])
    : poi.location;
  const title = poi.name || COMPANY_NAME;
  const address = poi.address || COMPANY_ADDRESS;

  marker?.setMap(null);
  infoWindow?.close();

  marker = new AMap.Marker({
    position: lnglat,
    title,
    anchor: "bottom-center",
  });
  marker.setMap(map);

  infoWindow = new AMap.InfoWindow({
    isCustom: true,
    content: createInfoContent(title, address),
    offset: new AMap.Pixel(24, -6),
    anchor: "bottom-left",
  });

  map.setZoomAndCenter(18, lnglat);
  infoWindow.open(map, lnglat);

  marker.on("click", () => {
    infoWindow.open(map, lnglat);
  });
};

const resolveByCompany = (AMap) => {
  return new Promise((resolve) => {
    try {
      const placeSearch = new AMap.PlaceSearch({
        city: "上海",
        citylimit: true,
        pageSize: 1,
        pageIndex: 1,
        autoFitView: false,
      });

      placeSearch.search(COMPANY_NAME, (status, result) => {
        const pois = result?.poiList?.pois || [];
        const poi = pois.find((item) => item.name === COMPANY_NAME) || pois[0];

        if (status === "complete" && poi?.location) {
          resolve({
            name: poi.name,
            address: poi.address,
            location: [poi.location.lng, poi.location.lat],
          });
          return;
        }

        resolve(null);
      });
    } catch (error) {
      console.error("PlaceSearch failed:", error);
      resolve(null);
    }
  });
};

const resolveByAddress = (AMap) => {
  return new Promise((resolve) => {
    try {
      const geocoder = new AMap.Geocoder({
        city: "021",
      });

      geocoder.getLocation(COMPANY_ADDRESS, (status, result) => {
        const geocode = result?.geocodes?.[0];

        if (status === "complete" && geocode?.location) {
          resolve({
            name: COMPANY_NAME,
            address: geocode.formattedAddress || COMPANY_ADDRESS,
            location: [geocode.location.lng, geocode.location.lat],
          });
          return;
        }

        resolve(null);
      });
    } catch (error) {
      console.error("Geocoder failed:", error);
      resolve(null);
    }
  });
};

onMounted(async () => {
  if (!containerRef) return;

  try {
    const AMap = await AMapLoader.load({
      key: AMAP_KEY,
      version: "2.0",
      plugins: ["AMap.PlaceSearch", "AMap.Geocoder"],
    });

    map = new AMap.Map(containerRef, {
      viewMode: "2D",
      zoom: 18,
      center: FALLBACK_CENTER,
      resizeEnable: true,
      pitchEnable: false,
      rotateEnable: false,
      showIndoorMap: false,
      mapStyle: "amap://styles/normal",
    });

    showPoi(AMap, {
      name: COMPANY_NAME,
      address: COMPANY_ADDRESS,
      location: FALLBACK_CENTER,
    });

    AMap.plugin(["AMap.PlaceSearch", "AMap.Geocoder"], async () => {
      const poi =
        (await resolveByCompany(AMap)) || (await resolveByAddress(AMap));

      if (poi) {
        showPoi(AMap, poi);
      }
    });
  } catch (error) {
    console.error("AMap load failed:", error);
  }
});

onUnmounted(() => {
  infoWindow?.close();
  map?.destroy();
});
</script>

<template>
  <div ref="containerRef" class="map-container"></div>
</template>

<style scoped>
.map-container {
  width: 100%;
  height: 100%;
}

:deep(.map-card) {
  position: relative;
  min-width: 220px;
  max-width: 280px;
  padding: 18px 56px 18px 22px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 16px 28px rgba(15, 30, 52, 0.18);
  color: #1d2736;
}

:deep(.map-card::before) {
  content: "";
  position: absolute;
  left: -10px;
  top: 22px;
  width: 18px;
  height: 18px;
  background: rgba(255, 255, 255, 0.96);
  transform: rotate(45deg);
  border-radius: 3px;
}

:deep(.map-card__title) {
  overflow: hidden;
  color: #1d2736;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.3;
  text-overflow: ellipsis;
  white-space: nowrap;
}

:deep(.map-card__address) {
  margin-top: 6px;
  color: #6b7280;
  font-size: 12px;
  line-height: 1.5;
}

:deep(.map-card__arrow) {
  position: absolute;
  right: 16px;
  top: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  color: #2583ff;
  transform: translateY(-50%);
}

:deep(.map-card__arrow svg) {
  width: 100%;
  height: 100%;
}
</style>
