// import * as d3 from "d3-lib";
import React, { useEffect, useState } from "react";
import { useSvg } from "./SvgProvider";
import * as d3 from "d3";

const Zoom = ({ children }) => {
  const svgElement = useSvg();
  const [{ x, y, k }, setTransform] = useState({ x: 0, y: 0, k: 1 });

  useEffect(() => {
    if (!svgElement) return;
    const zoom = d3.zoom().on("zoom", (ZoomEvent) => {
      setTransform(ZoomEvent.transform);
    });
    d3.select(svgElement).call(zoom);

    return () => d3.select(svgElement).on(".zoom", null);
  }, [svgElement]);

  return <g transform={`translate(${x}, ${y}) scale(${k})`}>{children}</g>;
};

export default Zoom;
