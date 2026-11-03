import { Quote } from 'lucide-react';
import { cmdProfile } from '@/lib/clinicContent';

const cmdStyles = `
.cm-section {
  padding: 96px 0;
  background: #ffffff;
}

.cm-container {
  width: min(960px, calc(100% - 48px));
  margin: 0 auto;
}

.cm-eyebrow {
  display: inline-block;
  margin-bottom: 14px;
  color: #056b6f;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .14em;
}

.cm-container h2 {
  margin: 0 0 12px;
  color: #082f38;
  font-size: clamp(28px, 3.6vw, 40px);
  line-height: 1.2;
}

.cm-name {
  margin: 0 0 32px;
  color: #056b6f;
  font-size: 18px;
  font-weight: 700;
}

.cm-card {
  position: relative;
  padding: 48px;
  border: 1px solid #dbe9e5;
  border-radius: 24px;
  background: #f5faf8;
}

.cm-card svg {
  position: absolute;
  top: 32px;
  right: 36px;
  color: #9fd6cc;
}

.cm-card p {
  margin: 0 0 18px;
  color: #3d5a60;
  font-size: 17px;
  line-height: 1.7;
}

.cm-card p:last-child {
  margin-bottom: 0;
}

@media (max-width: 600px) {
  .cm-card {
    padding: 28px 24px;
  }

  .cm-card svg {
    display: none;
  }
}
`;

export function CmdMessage() {
  return (
    <section className="cm-section">
      <style>{cmdStyles}</style>

      <div className="cm-container">
        <span className="cm-eyebrow">OUR LEADERSHIP</span>
        <h2>{cmdProfile.role}</h2>
        <p className="cm-name">
          {cmdProfile.name}, {cmdProfile.qualification}
        </p>

        <div className="cm-card">
          <Quote size={44} />
          {cmdProfile.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
