import { FiMapPin } from "react-icons/fi";
import EmbedLauncher from "./EmbedLauncher";

export default function AqiMap() {
  return (
    <div className="climate">
      <div className="climate__intro">
        <h4>Mumbai AQI — Live Sensor Dashboard</h4>
        <p>
          An hour-by-hour view of Mumbai's air quality across 2,200+ IoT
          sensors, built for the BMC's live monitoring pipeline. Hit play to
          scrub through the day and watch pollution levels shift block by
          block.
        </p>
      </div>

      <EmbedLauncher
        icon={<FiMapPin />}
        label={
          <>
            <strong>Explore live:</strong> Mumbai's Air, Hour by Hour
          </>
        }
        hint="Hover sensors for readings · press play to scrub through the day"
        title="Mumbai AQI — Hour by Hour"
        src="/models/mumbai-aqi-map.html"
        height={640}
        heightMobile={520}
      />
    </div>
  );
}
