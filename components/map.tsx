import React, { useEffect, useMemo, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { useTheme } from "next-themes";
import Image from "next/image";

const MapComponent: React.FC = () => {
  const { theme } = useTheme();
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);

  const style = useMemo(() => {
    return theme === "dark"
      ? "mapbox://styles/mapbox/dark-v11"
      : "mapbox://styles/mapbox/standard";
  }, [theme]);

  useEffect(() => {
    const map = new mapboxgl.Map({
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
      container: mapContainerRef.current as HTMLElement,
      style: style,
      center: [106.8507, -6.2255],
      zoom: 10,
    });

    map.on("load", () => {
      setMapLoaded(true);
    });

    return () => map.remove(); // Cleanup on unmount
  }, [style]);

  return (
    <div className="rounded-3xl w-full h-full overflow-hidden">
      {!mapLoaded && (
        <Image
          alt="Map"
          className="w-full h-full object-cover"
          height={300}
          src="/map.PNG"
          width={300}
        />
      )}
      <div ref={mapContainerRef} className="w-full h-full" />
      <div className="top-1/2 left-1/2 absolute flex justify-center items-center border-2 border-white md:border-4 bg-blue-400 bg-opacity-40 shadow-lg border-opacity-80 rounded-full w-14 md:w-20 h-14 md:h-20 transform -translate-x-1/2 -translate-y-1/2 hover:animate-pulse cursor-pointer">
        <Image
          alt="Icon"
          className="rounded-full w-full h-full object-cover"
          height={300}
          src="https://pub-efc1edc293984f03ae656bde9e2e3f9a.r2.dev/Memoji.jpg"
          width={300}
        />
      </div>
    </div>
  );
};

export default MapComponent;
