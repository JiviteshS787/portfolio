// Autoplay muted loops only when the viewer allows motion; otherwise expose native controls.
export function startVideos(root: ParentNode = document) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  root.querySelectorAll<HTMLVideoElement>('video[data-autoplay]').forEach((video) => {
    if (reduce) video.controls = true;
    else video.play().catch(() => (video.controls = true));
  });
}
