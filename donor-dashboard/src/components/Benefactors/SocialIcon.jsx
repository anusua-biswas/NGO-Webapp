import React from "react";

function SocialIcon({ id, fill }) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<svg id="${id}" class="social-icon" style="width: 24px; height: 24px; fill: ${fill}"></svg>`,
      }}
    />
  );
}

export default SocialIcon;
