Agastya load features from separate js files based on user. Font size, dyslexia, etc., can be one basic.js and then all others or removing should be done externally. Footprint of initial file loaded for each user will be tiny.

---

Comment added in 2025:

> Back when I was working on Oswald Labs, Agastya was our web accessibility plugin. The idea behind this note was to separate the JavaScript files that would be loaded based on the settings, so that the footprint of the initial file will be very small and then you can lazy load the modules that are required, like code splitting.
