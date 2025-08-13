Agastya widget.php for analytics

---

Comment added in 2025:

> Back when I was working on Oswald Labs, Agastya was our web accessibility plugin. I had the idea of server-side analytics that instead of sending a beacon or fetch request on load, we could do web analytics on the server-side by storing the user agent and IP geolocation directly from the widget.php request. This would reduce latency and be more privacy-friendly, which exists today as Cloudflare Analytics.
