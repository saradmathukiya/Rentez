export default function Tab({ tabData, field, setField }) {
  return (
    <div className="tab-container">
      {tabData.map((tab) => (
        <button
          className="tab-button"
          style={
            field === tab.type
              ? { backgroundColor: "#006f80", borderRadius: "10px" }
              : { backgroundColor: "white", borderRadius: "10px" }
          }
          key={tab.id}
          onClick={() => setField(tab.type)}
        >
          {tab?.tabName}
        </button>
      ))}
    </div>
  );
}
