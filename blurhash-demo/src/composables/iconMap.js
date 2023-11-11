//map icons to weather conditions
const iconMap = {
    "day": {
        "skc": {
            "description": "Fair/clear",
            "icon": "wi wi-day-sunny"
        },
        "few": {
            "description": "A few clouds",
            "icon": "wi wi-day-cloudy"
        },
        "sct": {
            "description": "Partly cloudy",
            "icon": "wi wi-day-cloudy"
        },
        "bkn": {
            "description": "Mostly cloudy",
            "icon": "wi wi-day-cloudy",
        },
        "ovc": {
            "description": "Overcast",
            "icon": "wi wi-day-cloudy"
        },
        "wind_skc": {
            "description": "Fair/clear and windy",
            "icon": "wi wi-day-windy"
        },
        "wind_few": {
            "description": "A few clouds and windy",
            "icon": "wi wi-day-cloudy-windy"
        },
        "wind_sct": {
            "description": "Partly cloudy and windy",
            "icon": "wi wi-day-cloudy-windy"
        },
        "wind_bkn": {
            "description": "Mostly cloudy and windy",
            "icon": "wi wi-day-cloudy-windy",
        },
        "wind_ovc": {
            "description": "Overcast and windy",
            "icon": "wi wi-day-cloudy-windy"
        },
        "snow": {
            "description": "Snow",
            "icon": "wi wi-day-snow"
        },
        "rain_snow": {
            "description": "Rain/snow",
            "icon": "wi wi-day-rain-mix"
        },
        "rain_sleet": {
            "description": "Rain/sleet",
            "icon": "wi wi-day-rain-mix"
        },
        "snow_sleet": {
            "description": "Snow/sleet",
            "icon": "wi wi-day-rain-mix"
        },
        "fzra": {
            "description": "Freezing rain",
            "icon": "wi wi-day-rain-mix"
        },
        "rain_fzra": {
            "description": "Rain/freezing rain",
            "icon": "wi wi-day-rain-mix"
        },
        "snow_fzra": {
            "description": "Freezing rain/snow",
            "icon": "wi wi-day-rain-mix"
        },
        "sleet": {
            "description": "Sleet",
            "icon": "wi wi-day-rain-mix"
        },
        "rain": {
            "description": "Rain",
            "icon": "wi wi-day-rain"
        },
        "rain_showers": {
            "description": "Rain showers (high cloud cover)",
            "icon": "wi wi-day-showers"
        },
        "rain_showers_hi": {
            "description": "Rain showers (low cloud cover)",
            "icon": "wi wi-day-showers"
        },
        "tsra": {
            "description": "Thunderstorm (high cloud cover)",
            "icon": "wi wi-day-thunderstorm"
        },
        "tsra_sct": {
            "description": "Thunderstorm (medium cloud cover)",
            "icon": "wi wi-day-thunderstorm"
        },
        "tsra_hi": {
            "description": "Thunderstorm (low cloud cover)",
            "icon": "wi wi-day-thunderstorm"
        },
        "tornado": {
            "description": "Tornado",
            "icon": "wi wi-day-lightning"
        },
        "hurricane": {
            "description": "Hurricane conditions",
            "icon": "wi wi-day-lightning"
        },
        "tropical_storm": {
            "description": "Tropical storm conditions",
            "icon": "wi wi-day-lightning"
        },
        "dust": {
            "description": "Dust",
            "icon": "wi wi-day-cloudy-windy"
        },
        "smoke": {
            "description": "Smoke",
            "icon": "wi wi-day-cloudy-windy"
        },
        "haze": {
            "description": "Haze",
            "icon": "wi wi-day-cloudy-windy"
        },
        "hot": {
            "description": "Hot",
            "icon": "wi wi-hot"
        },
        "cold": {
            "description": "Cold",
            "icon": "wi wi-snowflake-cold"
        },
        "blizzard": {
            "description": "Blizzard",
            "icon": "wi wi-snowflake-cold"
        },
        "fog": {
            "description": "Fog/mist",
            "icon": "wi wi-day-fog"
        }
    },
    "night": {
        "skc": {
            "description": "Fair/clear",
            "icon": "wi wi-night-clear"
        },
        "few": {
            "description": "A few clouds",
            "icon": "wi wi-night-alt-cloudy"
        },
        "sct": {
            "description": "Partly cloudy",
            "icon": "wi wi-night-alt-cloudy"
        },
        "bkn": {
            "description": "Mostly cloudy",
            "icon": "wi wi-night-alt-cloudy"
        },
        "ovc": {
            "description": "Overcast",
            "icon": "wi wi-night-alt-cloudy"
        },
        "wind_skc": {
            "description": "Fair/clear and windy",
            "icon": "wi wi-night-alt-cloudy-windy"
        },
        "wind_few": {
            "description": "A few clouds and windy",
            "icon": "wi wi-night-alt-cloudy-windy"
        },
        "wind_sct": {
            "description": "Partly cloudy and windy",
            "icon": "wi wi-night-alt-cloudy-windy"
        },
        "wind_bkn": {
            "description": "Mostly cloudy and windy",
            "icon": "wi wi-night-alt-cloudy-windy"
        },
        "wind_ovc": {
            "description": "Overcast and windy",
            "icon": "wi wi-night-alt-cloudy-windy"
        },
        "snow": {
            "description": "Snow",
            "icon": "wi wi-night-alt-snow"
        },
        "rain_snow": {
            "description": "Rain/snow",
            "icon": "wi wi-night-alt-rain-mix"
        },
        "rain_sleet": {
            "description": "Rain/sleet",
            "icon": "wi wi-night-alt-rain-mix"
        },
        "snow_sleet": {
            "description": "Snow/sleet",
            "icon": "wi wi-night-alt-rain-mix"
        },
        "fzra": {
            "description": "Freezing rain",
            "icon": "wi wi-night-alt-rain-mix"
        },
        "rain_fzra": {
            "description": "Rain/freezing rain",
            "icon": "wi wi-night-alt-rain-mix"
        },
        "snow_fzra": {
            "description": "Freezing rain/snow",
            "icon": "wi wi-night-alt-rain-mix"
        },
        "sleet": {
            "description": "Sleet",
            "icon": "wi wi-night-alt-rain-mix"
        },
        "rain": {
            "description": "Rain",
            "icon": "wi wi-night-alt-rain"
        },
        "rain_showers": {
            "description": "Rain showers (high cloud cover)",
            "icon": "wi wi-night-alt-showers"
        },
        "rain_showers_hi": {
            "description": "Rain showers (low cloud cover)",
            "icon": "wi wi-night-alt-showers"
        },
        "tsra": {
            "description": "Thunderstorm (high cloud cover)",
            "icon": "wi wi-night-alt-thunderstorm"
        },
        "tsra_sct": {
            "description": "Thunderstorm (medium cloud cover)",
            "icon": "wi wi-night-alt-thunderstorm"
        },
        "tsra_hi": {
            "description": "Thunderstorm (low cloud cover)",
            "icon": "wi wi-night-alt-thunderstorm"
        },
        "tornado": {
            "description": "Tornado",
            "icon": "wi wi-night-alt-lightning"
        },
        "hurricane": {
            "description": "Hurricane conditions",
            "icon": "wi wi-night-alt-lightning"
        },
        "tropical_storm": {
            "description": "Tropical storm conditions",
            "icon": "wi wi-night-alt-lightning"
        },
        "dust": {
            "description": "Dust",
            "icon": "wi wi-night-alt-cloudy-windy"
        },
        "smoke": {
            "description": "Smoke",
            "icon": "wi wi-night-alt-cloudy-windy"
        },
        "haze": {
            "description": "Haze",
            "icon": "wi wi-night-alt-cloudy-windy"
        },
        "hot": {
            "description": "Hot",
            "icon": "wi wi-hot"
        },
        "cold": {
            "description": "Cold",
            "icon": "wi wi-snowflake-cold"
        },
        "blizzard": {
            "description": "Blizzard",
            "icon": "wi wi-snowflake-cold"
        },
        "fog": {
            "description": "Fog/mist",
            "icon": "wi wi-night-fog"
        }
    }
}

export default iconMap;