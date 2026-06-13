import React, { useState } from 'react';

export default function App() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('https://mubeena-portfolio.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    } catch {
      setSent(true);
    }
  };

  const tag = (label, color) => {
    const colors = {
      purple: { background: 'rgba(83,74,183,0.12)', color: '#AFA9EC', border: '0.5px solid rgba(175,169,236,0.2)' },
      teal:   { background: 'rgba(29,158,117,0.1)',  color: '#5DCAA5', border: '0.5px solid rgba(93,202,165,0.2)' },
      coral:  { background: 'rgba(216,90,48,0.1)',   color: '#F0997B', border: '0.5px solid rgba(240,153,123,0.2)' },
      amber:  { background: 'rgba(239,159,39,0.1)',  color: '#FAC775', border: '0.5px solid rgba(250,199,117,0.2)' },
    };
    return <span style={{ fontSize: '12px', padding: '3px 10px', borderRadius: '20px', ...colors[color] }}>{label}</span>;
  };

  return (
    <div style={{ margin: 0, fontFamily: "'Segoe UI',sans-serif", background: '#0f0f13', color: '#e8e6f0', minHeight: '100vh' }}>

      {/* NAVBAR */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(15,15,19,0.95)', borderBottom: '0.5px solid rgba(175,169,236,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2rem', height: '56px' }}>
        <div style={{ fontWeight: 700, fontSize: '16px', color: '#AFA9EC' }}>MS</div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {['Skills', 'Projects', 'Experience', 'Contact'].map(s => (
            <a key={s} href={`#${s.toLowerCase()}`} style={{ fontSize: '13px', color: '#888', textDecoration: 'none' }}>{s}</a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <div style={{ minHeight: '92vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '4rem 2rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(83,74,183,0.15)', border: '0.5px solid rgba(175,169,236,0.3)', color: '#AFA9EC', fontSize: '12px', padding: '4px 12px', borderRadius: '20px', marginBottom: '1.5rem', width: 'fit-content' }}>
          📍 Andhra Pradesh, India
        </div>
        <h1 style={{ fontSize: '3.2rem', fontWeight: 700, lineHeight: 1.1, color: '#f0eeff', marginBottom: '0.5rem', margin: 0 }}>
          Hi, I'm <span style={{ color: '#AFA9EC' }}>Mubeena</span><br />Syed
        </h1>
        <p style={{ fontSize: '1.05rem', color: '#888', margin: '1rem 0 2rem', maxWidth: '560px', lineHeight: 1.7 }}>
          B.Tech CSE graduate building AI/ML pipelines and full-stack web applications. Passionate about turning data into decisions and ideas into products.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href="mailto:mubeenasyed586@gmail.com" style={{ background: '#534AB7', color: '#fff', border: 'none', padding: '10px 22px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, textDecoration: 'none' }}>✉ Get in touch</a>
          <a href="https://github.com/Syed-Mubeena" target="_blank" rel="noreferrer" style={{ background: 'transparent', color: '#AFA9EC', border: '0.5px solid rgba(175,169,236,0.4)', padding: '10px 22px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, textDecoration: 'none' }}>GitHub</a>
          <a href="https://linkedin.com/in/syed-mubeena951a29247" target="_blank" rel="noreferrer" style={{ background: 'transparent', color: '#AFA9EC', border: '0.5px solid rgba(175,169,236,0.4)', padding: '10px 22px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, textDecoration: 'none' }}>LinkedIn</a>
        </div>
        <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem', borderTop: '0.5px solid rgba(175,169,236,0.1)', paddingTop: '2rem', flexWrap: 'wrap' }}>
          {[['3+','Projects built'],['81%','ML accuracy'],['4','Certifications'],['10+','Students mentored']].map(([n,l]) => (
            <div key={l}><div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#AFA9EC' }}>{n}</div><div style={{ fontSize: '12px', color: '#666' }}>{l}</div></div>
          ))}
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '0.5px solid rgba(175,169,236,0.1)', maxWidth: '800px', margin: '0 auto' }} />

      {/* SKILLS */}
      <div id="skills" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
        <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', color: '#534AB7', textTransform: 'uppercase', marginBottom: '0.5rem' }}>What I work with</div>
        <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#f0eeff', marginBottom: '2rem' }}>Skills</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '12px' }}>
          {[
            { title: '🧠 AI / ML', color: 'purple', tags: ['TensorFlow','Keras','Scikit-learn','ANN','Logistic Regression','EDA'] },
            { title: '💻 Languages', color: 'teal', tags: ['Python','JavaScript','Java','C/C++'] },
            { title: '🌐 Web', color: 'coral', tags: ['React.js','Node.js','Express.js','HTML/CSS'] },
            { title: '🗄️ Data & Tools', color: 'amber', tags: ['MongoDB','SQL','Pandas','Git','MS Excel'] },
          ].map(({ title, color, tags }) => (
            <div key={title} style={{ background: 'rgba(255,255,255,0.03)', border: '0.5px solid rgba(175,169,236,0.12)', borderRadius: '10px', padding: '1rem 1.2rem' }}>
              <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#AFA9EC', marginBottom: '10px' }}>{title}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>{tags.map(t => <span key={t}>{tag(t, color)}</span>)}</div>
            </div>
          ))}
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '0.5px solid rgba(175,169,236,0.1)', maxWidth: '800px', margin: '0 auto' }} />

      {/* PROJECTS */}
      <div id="projects" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
        <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', color: '#534AB7', textTransform: 'uppercase', marginBottom: '0.5rem' }}>What I've built</div>
        <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#f0eeff', marginBottom: '2rem' }}>Projects</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { name: 'Fake Profile Detection using ANN', badge: 'AI / ML', desc: 'Trained an ANN to classify fake vs genuine social media profiles — end-to-end ML pipeline from raw data to deployment.', bullets: ['Built full pipeline: data collection, cleaning, feature engineering, model training & evaluation','GPU-optimized training with scalable architecture for real-time detection','Managed and validated thousands of records with accuracy/loss reporting'], stack: ['Python','TensorFlow','Keras','Scikit-learn'] },
            { name: 'Titanic Survival Analysis & Prediction', badge: 'Data Science', desc: 'Predicted passenger survival using Logistic Regression on the Kaggle Titanic dataset, achieving ~81% accuracy.', bullets: ['Handled missing values, encoded categoricals, normalized features','Visualized survival patterns by class and gender using Matplotlib & Seaborn','Complete workflow: EDA → preprocessing → training → evaluation'], stack: ['Python','Pandas','Scikit-learn','Matplotlib','Seaborn'] },
            { name: 'Personal Portfolio Website', badge: 'Full-Stack', desc: 'Responsive full-stack portfolio built on the MERN stack, deployed on a cloud platform.', bullets: ['MongoDB integration for dynamic content management','RESTful APIs with Node.js/Express.js for contact form','Mobile-responsive React.js frontend with project showcase'], stack: ['React.js','Node.js','Express.js','MongoDB','Cloud Deploy'] },
          ].map(({ name, badge, desc, bullets, stack }) => (
            <div key={name} style={{ background: 'rgba(255,255,255,0.03)', border: '0.5px solid rgba(175,169,236,0.12)', borderRadius: '12px', padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px', flexWrap: 'wrap', gap: '8px' }}>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: '#f0eeff' }}>{name}</div>
                <span style={{ fontSize: '11px', padding: '3px 10px', borderRadius: '20px', background: 'rgba(29,158,117,0.1)', color: '#5DCAA5', border: '0.5px solid rgba(93,202,165,0.2)' }}>{badge}</span>
              </div>
              <p style={{ fontSize: '13.5px', color: '#888', marginBottom: '12px', lineHeight: 1.6 }}>{desc}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 14px' }}>
                {bullets.map(b => <li key={b} style={{ fontSize: '13px', color: '#777', padding: '3px 0 3px 16px', position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: '#534AB7' }}>→</span>{b}</li>)}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {stack.map(s => <span key={s} style={{ fontSize: '11px', padding: '2px 9px', borderRadius: '20px', background: 'rgba(255,255,255,0.04)', color: '#666', border: '0.5px solid rgba(255,255,255,0.08)' }}>{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '0.5px solid rgba(175,169,236,0.1)', maxWidth: '800px', margin: '0 auto' }} />

      {/* EXPERIENCE */}
      <div id="experience" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
        <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', color: '#534AB7', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Where I've worked</div>
        <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#f0eeff', marginBottom: '2rem' }}>Experience</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {[
            { role: 'IIT Mathematics Tutor', org: 'Freelance', period: '2020 – Present', desc: 'Coached 10+ IIT-JEE aspirants with structured lesson plans. Tracked performance data over 3+ years and improved scores through targeted practice tests.' },
            { role: 'Cybersecurity Virtual Intern', org: 'EduSkills', period: '2022', desc: 'Hands-on assignments in cybersecurity fundamentals, threat identification, and vulnerability risk analysis. Maintained documentation and risk reports.' },
          ].map(({ role, org, period, desc }) => (
            <div key={role} style={{ borderLeft: '1.5px solid rgba(175,169,236,0.2)', paddingLeft: '1.2rem' }}>
              <div style={{ fontWeight: 600, fontSize: '15px', color: '#f0eeff' }}>{role}</div>
              <div style={{ fontSize: '13px', color: '#AFA9EC', marginBottom: '4px' }}>{org}</div>
              <div style={{ fontSize: '12px', color: '#555', marginBottom: '8px' }}>{period}</div>
              <div style={{ fontSize: '13px', color: '#777' }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '0.5px solid rgba(175,169,236,0.1)', maxWidth: '800px', margin: '0 auto' }} />

      {/* CERTIFICATIONS */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
        <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', color: '#534AB7', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Credentials</div>
        <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#f0eeff', marginBottom: '2rem' }}>Certifications</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
          {[
            { name: 'Professional Certificate in Software Engineering', issuer: 'TechX Labs · April 2026' },
            { name: 'Java Career Education Program', issuer: 'IBM' },
            { name: 'Digital Productivity Certification', issuer: 'NIIT Foundation' },
            { name: 'Cybersecurity Virtual Internship', issuer: 'EduSkills' },
          ].map(({ name, issuer }) => (
            <div key={name} style={{ background: 'rgba(255,255,255,0.03)', border: '0.5px solid rgba(175,169,236,0.12)', borderRadius: '10px', padding: '1rem 1.2rem' }}>
              <div style={{ fontSize: '13px', fontWeight: 500, color: '#e0ddf5' }}>🏅 {name}</div>
              <div style={{ fontSize: '11px', color: '#666', marginTop: '4px' }}>{issuer}</div>
            </div>
          ))}
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '0.5px solid rgba(175,169,236,0.1)', maxWidth: '800px', margin: '0 auto' }} />

      {/* CONTACT */}
      <div id="contact" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
        <div style={{ background: 'rgba(83,74,183,0.08)', border: '0.5px solid rgba(175,169,236,0.2)', borderRadius: '16px', padding: '2.5rem', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.4rem', color: '#f0eeff', marginBottom: '0.5rem' }}>Let's connect</h3>
          <p style={{ color: '#888', fontSize: '14px', marginBottom: '1.5rem' }}>Open to roles in AI/ML, Data Analysis, and Software Development.</p>
          {sent ? (
            <div style={{ color: '#5DCAA5', fontSize: '15px' }}>✅ Message sent! I'll get back to you soon.</div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px', margin: '0 auto 1.5rem' }}>
              <input required placeholder="Your Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={{ padding: '10px 14px', borderRadius: '8px', border: '0.5px solid rgba(175,169,236,0.2)', background: 'rgba(255,255,255,0.04)', color: '#e8e6f0', fontSize: '14px', outline: 'none' }} />
              <input required type="email" placeholder="Your Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} style={{ padding: '10px 14px', borderRadius: '8px', border: '0.5px solid rgba(175,169,236,0.2)', background: 'rgba(255,255,255,0.04)', color: '#e8e6f0', fontSize: '14px', outline: 'none' }} />
              <textarea required rows={4} placeholder="Your Message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ padding: '10px 14px', borderRadius: '8px', border: '0.5px solid rgba(175,169,236,0.2)', background: 'rgba(255,255,255,0.04)', color: '#e8e6f0', fontSize: '14px', outline: 'none', resize: 'vertical' }} />
              <button type="submit" style={{ background: '#534AB7', color: '#fff', border: 'none', padding: '10px 22px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}>Send Message</button>
            </form>
          )}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            {[
              { label: '✉ Email', href: 'mailto:mubeenasyed586@gmail.com' },
              { label: 'GitHub', href: 'https://github.com/Syed-Mubeena' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/syed-mubeena951a29247' },
              { label: '📞 +91 63002 38369', href: 'tel:+916300238369' },
            ].map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'rgba(255,255,255,0.04)', border: '0.5px solid rgba(175,169,236,0.2)', color: '#AFA9EC', padding: '9px 18px', borderRadius: '8px', fontSize: '13px', fontWeight: 500, textDecoration: 'none' }}>{label}</a>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ textAlign: 'center', padding: '2rem', fontSize: '12px', color: '#444', borderTop: '0.5px solid rgba(175,169,236,0.08)' }}>
        Mubeena Syed · 2026
      </footer>

    </div>
  );
}