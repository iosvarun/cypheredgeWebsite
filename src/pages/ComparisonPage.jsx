import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import WhatsAppButton from '../components/shared/WhatsAppButton';
import './ComparisonPage.css';

const DUMMY_COMPARISON_DATA = {
  'freelancers-vs-agencies': {
    title: 'Freelancers vs CypherEdge',
    subtitle: 'Why growing companies prefer managed engineering teams over individual contractors.',
    optionA: 'Freelance Networks',
    optionB: 'CypherEdge Teams',
    factors: [
      { name: 'Vetting & Quality', a: 'Self-reported skills, variable quality.', b: 'Rigorous 4-stage technical & cultural vetting.', aPros: false, bPros: true },
      { name: 'Management Overhead', a: 'Requires your internal team to manage day-to-day.', b: 'Self-managed pods with PMs/Tech Leads.', aPros: false, bPros: true },
      { name: 'Scalability', a: 'Hard to scale up quickly with coordinated teams.', b: 'Rapidly scale pods up or down within days.', aPros: false, bPros: true },
      { name: 'IP & Security', a: 'Fragmented NDAs, personal devices.', b: 'Enterprise-grade security policies and centralized IP control.', aPros: false, bPros: true }
    ],
    verdict: 'While freelancers offer short-term cost savings for tiny tasks, CypherEdge provides the reliability, scale, and management layer required for serious product engineering.'
  }
};

export default function ComparisonPage({ comparisonSlug, onNavigate }) {
  const data = DUMMY_COMPARISON_DATA[comparisonSlug] || DUMMY_COMPARISON_DATA['freelancers-vs-agencies'];

  return (
    <div className="comparison-page">
      <section className="comparison-hero">
        <div className="container text-center">
          <div className="badge-neon">Comparison Guide</div>
          <h1 className="hero-title">{data.title}</h1>
          <p className="hero-subtitle">{data.subtitle}</p>
        </div>
      </section>

      <section className="comparison-table-section section-padding">
        <div className="container">
          <div className="table-wrapper glass-panel">
            <div className="table-header">
              <div className="th-factor">Factor</div>
              <div className="th-option-a">{data.optionA}</div>
              <div className="th-option-b text-gradient-neon">{data.optionB}</div>
            </div>
            <div className="table-body">
              {data.factors.map((factor, idx) => (
                <div key={idx} className="table-row">
                  <div className="td-factor"><strong>{factor.name}</strong></div>
                  <div className="td-option-a">
                    {factor.aPros ? <CheckCircle className="icon-pro" size={18}/> : <XCircle className="icon-con" size={18}/>}
                    <span>{factor.a}</span>
                  </div>
                  <div className="td-option-b">
                    {factor.bPros ? <CheckCircle className="icon-pro" size={18}/> : <XCircle className="icon-con" size={18}/>}
                    <span>{factor.b}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="comparison-verdict section-padding">
        <div className="container">
          <div className="verdict-card glass-panel">
            <h3>The Verdict</h3>
            <p>{data.verdict}</p>
            <button className="btn-glow mt-8" onClick={() => onNavigate('#contact')}>
              Talk to an Expert <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}
