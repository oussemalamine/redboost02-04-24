function Tooltip({ state = false, error }) {
  return (
    <div className={state ? "tooltip visible" : "tooltip"}>
      <p>{error}</p>
      <div className="arrow"></div>
    </div>
  );
}

export default Tooltip;
