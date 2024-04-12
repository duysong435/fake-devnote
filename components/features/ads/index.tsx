/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/react-in-jsx-scope */
// import GoogleAdUnit from "nextjs13_google_adsense";

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
      />
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      <div>Test Content</div>
    </div>
  );
}
