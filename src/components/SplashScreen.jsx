export default function SplashScreen({ name }) {
  return (
    <div className="splash-screen" aria-live="polite">
      <div className="splash-core">
        <div className="splash-badge">portfolio</div>
        <h1>{name}</h1>
        <p>Building experiences that feel alive.</p>
      </div>
    </div>
  );
}
