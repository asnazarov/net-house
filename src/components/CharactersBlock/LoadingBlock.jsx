import React from 'react';
import ContentLoader from "react-content-loader";

const LoadingBlock = () => {

  return (
    <div>
      <ContentLoader
        speed={2}
        width={330}
        height={363}
        viewBox="0 0 330 363"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="10" y="0" rx="0" ry="0" width="260" height="260" />
        <rect x="57" y="268" rx="0" ry="0" width="160" height="18" />
      </ContentLoader>

    </div>

  )
}
export default LoadingBlock