/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/react-in-jsx-scope */
// import GoogleAdUnit from "nextjs13_google_adsense";

// import Script from "next/script";

export default function Ads() {
  return (
    <div>
      <div>Test Title</div>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8742627001531739"
        crossOrigin="anonymous"
      />
      <ins
        className="adsbygoogle"
        style={{ display: "inline-block", width: "360px", height: "800px" }}
        data-ad-client="ca-pub-8742627001531739"
        data-ad-slot="4660006480"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      <div>Test Content</div>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8742627001531739"
        crossOrigin="anonymous"
      />
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-format="fluid"
        data-ad-layout-key="-6t+ed+2i-1n-4w"
        data-ad-client="ca-pub-8742627001531739"
        data-ad-slot="9460056960"
        data-full-width-responsive="true"
      />
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      <div>test 2</div>
    </div>
  );
}
