export default function SplashScreen({ name }) {
  return (
    <div className="splash-screen" aria-live="polite">
      <div className="splash-core">
        <div className="splash-mark">S</div>
        <h1>{name}</h1>
        <p>Minimal ideas. Thoughtful systems.</p>
      </div>
    </div>
  );
}
