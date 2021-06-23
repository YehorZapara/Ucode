window.weatherWidgetConfig = window.weatherWidgetConfig || [];
window.weatherWidgetConfig.push({
    selector: ".weatherWidget",
    apiKey: "JTRWMNMWF6EAJJJF93XNCALXV",
    location: "Kiev, UA",
    unitGroup: "metric",
    forecastDays: 7,
    title: "Kiev, UA",
});

(function () {
    let d = document, s = d.createElement('script');
    s.src = 'https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s); 
})();
