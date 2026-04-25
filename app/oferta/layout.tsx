import Script from "next/script";

export default function OfertaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* VTurb Performance Optimizations */}
      <Script id="vturb-perf" strategy="beforeInteractive">
        {`!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);`}
      </Script>
      
      <link
        rel="preload"
        href="https://scripts.converteai.net/1b27179a-ba8a-4485-adab-86acabe00490/players/69ec3cb779a9b357d90e199b/v4/player.js"
        as="script"
      />
      <link
        rel="preload"
        href="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js"
        as="script"
      />
      <link
        rel="preload"
        href="https://cdn.converteai.net/1b27179a-ba8a-4485-adab-86acabe00490/69ec3c8fe47d7b09a8dfb460/main.m3u8"
        as="fetch"
      />
      <link rel="dns-prefetch" href="https://cdn.converteai.net" />
      <link rel="dns-prefetch" href="https://scripts.converteai.net" />
      <link rel="dns-prefetch" href="https://images.converteai.net" />
      <link rel="dns-prefetch" href="https://api.vturb.com.br" />
      
      {children}
    </>
  );
}
