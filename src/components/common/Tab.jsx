export default function Tab({ tabData, field, setField }) {
  return (
    <div className="tab1">
      {tabData.map((tab) => (
        <button
          style={
            field === tab.type
              ? {
                  fontFamily: 'inherit',
                  fontWeight: '500',
                  // background: '#3770ff',
                  background: 'linear-gradient(0deg, rgb(25, 95, 255) 0%, rgb(106, 129, 255) 100%)',
                  border: 'none',
                  color: '#fff',
                  boxShadow: '4px 4px 60px 0 rgba(255, 255, 255, .5), -1px -1px 1px 0 rgba(116, 125, 136, .5), inset -4px -4px 6px 0 rgba(255, 255, 255, .2), inset 3px 3px 4px 0 rgba(0, 0, 0, .4)',
                }
              : {
                  boxShadow: 'inset 2px 2px 2px 0px rgba(255,255,255,.5), 7px 7px 20px 0px rgba(0,0,0,.1), 2px 2px 2px 0px rgba(0,0,0,.1)',
                  // boxShadow: 'inset 2px 2px 2px 0px rgba(255,255,255,.5),7px 7px 20px 0px rgba(0,0,0,.1), 4px 4px 5px 0px rgba(0,0,0,.1)',
                  border: 'none',
                  fontFamily: 'inherit',
                  fontWeight: '500',
                  backgroundColor: '#FFF',
                  color: '#666666',
                }
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
