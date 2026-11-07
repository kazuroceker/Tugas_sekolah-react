import CountUp from "../common/CountUp.jsx";
import { homePage } from "../../data/home.js";

export default function StatsSection() {
  return (
    <section className="py-4 border-top border-bottom">
      <div className="container">
        <div className="row">
          {homePage.stats.map((stat) => (
            <div
              className="col-6 col-lg-3 text-center stat-item"
              data-aos="fade-up"
              data-aos-delay="0"
              key={stat.label}
            >
              <div className="stat-number">
                <CountUp value={stat.value} />
                {stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
