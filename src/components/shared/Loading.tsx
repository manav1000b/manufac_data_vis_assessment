import { memo } from 'react';

export default memo(function Loading(props: { style: React.CSSProperties }): JSX.Element {
  return (
    <div id='loading-container' style={props.style}>
      <span>Loading...</span>
    </div>
  );
});
