import "./Pagination.css";

function NavItem({ step, index, content, onClickCB }) {
  return (
    <div
      className="Nav__navItem"
      onClick={onClickCB}
      style={{
        borderBottom: `${step === index ? "2px solid #7AB2D3" : "2px solid #6a6a6a"}`,
        color: `${step === index ? "#7AB2D3" : "#6a6a6a"}`,
      }}
    >
      <strong>{content}</strong>
    </div>
  );
}

export default function Pagination({ pageIndicator, step, setStep }) {
  return (
    <div className="Nav__navigation">
      {pageIndicator.map((el) => {
        let ran = Math.random();
        let kv = `nav_${ran}_${el}`;
        return (
          <NavItem
            step={step}
            index={el}
            content={`${el+1}`}
            onClickCB={() => {
              setStep(el);
            }}
            key={kv}
          />
        );
      })}
    </div>
  );
}
