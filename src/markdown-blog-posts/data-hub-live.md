---
path: "/blog/data-hub-live"
date: "2020-07-14"
title: "Our data hub is live!"
featuredImage: "../images/data-hub-map.png"
---

After months of coding our online data hub is now up and running, check it out [here](https://data.birminghamurbanobservatory.com). This is _the_ place to view, map and plot all the data being collected by the variety of sensors we're deploying across Birmingham.

Although many of the sensors already have their own individual data portals, for example the Konect system for our [ClimaVUE50 weather stations](/blog/check-weather-in-your-region/) and [WeatherMap](https://weathermap.netatmo.com/) for the Netatmo weather stations, we wanted to bring all this data under one roof. Allowing you to compare and contrast observations from different deployments.

It's still in beta phase at the moment so you may find a few [bugs](https://github.com/birminghamurbanobservatory/public-data-hub/issues), but we wanted to share it as early as possible so you can see what we're up to. If you come across any issues, or have any ideas, then please let us know on [Github](https://github.com/birminghamurbanobservatory/public-data-hub/issues) or via our [Contact Us](/contact) page.


# Our to-do list

There's still lots of features we'd like to add. Here's just a few:

- Provide a searchable directory to make it easier to find sensors and the platforms they are hosted on without having to use the map each time.
- Allow data exports. We know that some of you will want to perform your own analysis on the data, and will therefore want an easy way to download data. We intend to provide a web page where you can specify what you would like to download and over which time period before downloading a CSV file. The alternative is to use our REST API (more details coming in future blog post).
- There's still loads more sensors we need to deploy. In particular, dozens of Air Quality sensors. As soon as it's safe to deploy these across Birmingham we'll make the data available through this data hub.
- We'd also like to bring in more third-party data, e.g. traffic information.


# How it's built

For the curious, the data hub is built using the [Angular](https://angular.io/) framework from Google. It also uses [Google Maps](https://developers.google.com/maps/documentation/javascript) for the map, and [CanvasJS](https://canvasjs.com) for many of the plots. The code is open-source and available from [Github](https://github.com/birminghamurbanobservatory/public-data-hub).

