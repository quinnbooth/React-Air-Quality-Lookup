# React Air Quality Lookup

Visit the website at: https://quinnbooth.github.io/React-Air-Quality-Lookup/

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Data is sourced from the OpenWeather Air Pollution API along with geospatial information from simplemaps' World Cities Database.

An API proxy is hosted on the Deno Javascript Runtime to keep keys secure.

<br>

<p align="center">
  <img src="./README_media/readme_opening.gif" alt="Title Screen" width="600" height="278">
  <br>
</p>

<br>

## Author

👨‍💻 **Quinn Booth** - `qab2004@columbia.edu`
<br><br>

## How to Use

First, visit the website above. Once there, scroll down and enter your city into the search bar. If it's in the database, air quality data for the next 24 hours will show up on the provided graphs!
<br><br>

# How it Works


Scrolling down the page will reveal a search bar and interactive graphs with a parallax effect. The search bar filters through a JSON file containing data from the World Cities Database. Typing in the search bar and pressing enter or selecting a predictive entry prompts the page to fetch air quality information for the chosen location via its API proxy.

The proxy runs on the Deno JS runtime and exclusively handles requests from my personal GitHub pages sites. This added measure ensures the privacy of my API transactions, as React is primarily a frontend framework, which might otherwise expose sensitive information like keys in the source code. When it receives an OpenWeather API request, it appends the access token and relays it to OpenWeather. Afterward, it sends the query's response back to the Air Quality Lookup, where the information is displayed.<br><br>

<p align="center">
  <img src="./README_media/readme_chart.png" alt="Chart" width="360" height="180">
  <br>
</p>

<p align="center">
  <img src="./src/assets/images/legend.png" alt="Julia Set Animation" width="160" height="52">
  <br>
</p>

<br>

Air quality information is displayed over the next 24 hours using the Recharts library. A unique JSX gradient is generated to visually represent the different levels of gas presence in the atmosphere, ranging from "good" (green) to "very poor" (dark red). Hovering over the plots provides detailed insights for each time interval, revealing the precise gas density in the area during that period.

Thanks for checking out this air quality visualization tool! I hope you found it useful and insightful. Feel free to reach out and contact me if you have any questions.
