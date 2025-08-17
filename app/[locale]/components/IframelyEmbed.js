'use client'

import React, { useEffect } from "react";

const IframelyEmbed = ({ embedHtml }) => {
  useEffect(() => {
    const scriptId = "iframely-embed-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "//cdn.iframe.ly/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      if (window.iframely) window.iframely.load();
    }
  }, [embedHtml]);
  
  return (
    <div className="iframely-container" dangerouslySetInnerHTML={{ __html: embedHtml }}></div>
  );
};

export default IframelyEmbed;
