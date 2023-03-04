const FlexWrapper = ({ children }: any) => (

  <div className="flex" style={{ justifyContent: 'space-between', margin: '1em 0' }}>
    {children}

  </div>

);

export const LayWrapper = ({ children }: any) => (

  <div style={{ margin: '1em 0' }}>
    {children}

  </div>

);

export default FlexWrapper;
