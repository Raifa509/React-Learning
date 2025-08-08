import { useEffect, useState } from "react";

function useWeather(city) {

    const [weatherdata, setWeatherData] = useState('')
    useEffect(() => {

        if (city) {
            fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`
            )
                .then((res) => res.json())
                .then((result) => {
                    setWeatherData(result);
                });
        }
    }, [city]);
    return weatherdata

}
export default useWeather