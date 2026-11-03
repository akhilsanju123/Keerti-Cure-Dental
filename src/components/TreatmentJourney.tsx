import { journeySteps } from '@/lib/clinicContent';

const treatmentJourneyStyles = `
.tj-section {
  padding: 96px 0;
  background: #f5faf8;
}

.tj-container {
  width: min(1180px, calc(100% - 48px));
  margin: 0 auto;
}

.tj-heading {
  margin-bottom: 64px;
  text-align: center;
}

.tj-eyebrow {
  display: inline-block;
  margin-bottom: 16px;
  padding: 8px 16px;
  border-radius: 999px;
  background: #d7f5eb;
  color: #056b6f;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .14em;
}

.tj-heading h2 {
  margin: 0;
  color: #082f38;
  font-size: clamp(28px, 3.6vw, 40px);
  line-height: 1.2;
}

.tj-steps {
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 24px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.tj-steps::before {
  content: '';
  position: absolute;
  top: 35px;
  left: 10%;
  right: 10%;
  height: 2px;
  background: linear-gradient(90deg, #9fd6cc, #087f83, #9fd6cc);
}

.tj-step {
  position: relative;
  text-align: center;
}

.tj-circle {
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  width: 72px;
  height: 72px;
  margin: 0 auto 20px;
  border: 2px solid #087f83;
  border-radius: 50%;
  background: #ffffff;
  color: #056b6f;
  font-size: 22px;
  font-weight: 700;
  transition: background .3s ease, color .3s ease, transform .3s ease;
}

.tj-step:hover .tj-circle {
  background: #087f83;
  color: #ffffff;
  transform: scale(1.06);
}

.tj-step h3 {
  margin: 0 0 8px;
  color: #082f38;
  font-size: 18px;
}

.tj-step p {
  max-width: 200px;
  margin: 0 auto;
  color: #3d5a60;
  font-size: 15px;
  line-height: 1.55;
}

@media (max-width: 900px) {
  .tj-steps {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .tj-steps::before {
    top: 36px;
    bottom: 36px;
    left: 35px;
    right: auto;
    width: 2px;
    height: auto;
    background: linear-gradient(180deg, #9fd6cc, #087f83, #9fd6cc);
  }

  .tj-step {
    display: grid;
    grid-template-columns: 72px minmax(0, 1fr);
    align-items: center;
    gap: 20px;
    text-align: left;
  }

  .tj-circle {
    margin: 0;
  }

  .tj-step p {
    max-width: none;
    margin: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .tj-circle {
    transition: none !important;
  }
}
`;

export function TreatmentJourney() {
  return (
    <section className="tj-section">
      <style>{treatmentJourneyStyles}</style>

      <div className="tj-container">
        <div className="tj-heading">
          <span className="tj-eyebrow">YOUR VISIT</span>
          <h2>Simple 5-Step Treatment Journey</h2>
        </div>

        <ol className="tj-steps">
          {journeySteps.map((step, index) => (
            <li className="tj-step" key={step.title}>
              <span className="tj-circle">{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
