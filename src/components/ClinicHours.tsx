import { Clock, Phone } from 'lucide-react';
import { clinicHours, clinicHoursNote } from '@/lib/clinicContent';
import { phone, phoneLink } from '@/lib/constants';

const clinicHoursStyles = `
.ch-section {
  padding: 96px 0;
  background: #ffffff;
}

.ch-container {
  width: min(1180px, calc(100% - 48px));
  margin: 0 auto;
}

.ch-card {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 48px;
  align-items: center;
  padding: 48px;
  border-radius: 24px;
  background: #082f38;
  color: #ffffff;
  box-shadow: 0 30px 70px rgba(5,47,56,.22);
}

.ch-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 14px;
  color: #7be4cf;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .14em;
}

.ch-card h2 {
  margin: 0 0 12px;
  color: #ffffff;
  font-size: clamp(28px, 3.6vw, 40px);
  line-height: 1.2;
}

.ch-clinic {
  margin: 0 0 28px;
  color: #cfe9e4;
  font-size: 16px;
}

.ch-call {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 24px;
  border-radius: 999px;
  background: #7be4cf;
  color: #082f38;
  font-weight: 700;
  text-decoration: none;
  transition: transform .3s ease, background .3s ease;
}

.ch-call:hover {
  background: #ffffff;
  transform: translateY(-2px);
}

.ch-rows {
  display: grid;
  gap: 16px;
}

.ch-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 22px 26px;
  border: 1px solid rgba(255,255,255,.14);
  border-radius: 16px;
  background: rgba(255,255,255,.06);
}

.ch-days {
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
}

.ch-time {
  color: #7be4cf;
  font-size: 17px;
  font-weight: 600;
  white-space: nowrap;
}

.ch-note {
  margin: 20px 0 0;
  color: #cfe9e4;
  font-size: 14px;
  line-height: 1.5;
}

@media (max-width: 860px) {
  .ch-card {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 32px 24px;
  }
}

@media (max-width: 480px) {
  .ch-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
}
`;

export function ClinicHours() {
  return (
    <section className="ch-section">
      <style>{clinicHoursStyles}</style>

      <div className="ch-container">
        <div className="ch-card">
          <div>
            <span className="ch-eyebrow">
              <Clock size={16} />
              CLINIC SCHEDULE
            </span>
            <h2>Operating Hours</h2>
            <p className="ch-clinic">Keerti Cure Dental Clinic in Vizag</p>

            <a className="ch-call" href={phoneLink}>
              <Phone size={18} />
              Call {phone}
            </a>
          </div>

          <div>
            <div className="ch-rows">
              {clinicHours.map(({ days, hours }) => (
                <div className="ch-row" key={days}>
                  <span className="ch-days">{days}</span>
                  <span className="ch-time">{hours}</span>
                </div>
              ))}
            </div>
            <p className="ch-note">{clinicHoursNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
