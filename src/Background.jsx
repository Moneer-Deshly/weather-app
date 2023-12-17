function Background({ weatherData, className }) {
    const weatherToVideoMap = {
        Clear: "/Clear.mp4",
        Rain: "/Rain.mp4",
        Clouds: "/Clouds.mp4",
        Thunderstorm: "/Thunderstorm.mp4",
        Drizzle: "/Rain.mp4",
        Fog: "/Fog.mp4",
        Mist: "/Fog.mp4",
        Snow: "/Snow.mp4",
        Smoke: "/Squall.mp4",
        Haze: "/Haze.mp4",
        Dust: "/Dust.mp4",
        Sand: "/Dust.mp4",
        Ash: "/Fog.mp4",
        Squall: "/Squall.mp4",
        Tornado: "/Tornado.mp4",
    };

    if (typeof weatherData.main !== "undefined") {
        const mainCondition = weatherData.weather[0].main;
        const videoURL = weatherToVideoMap[mainCondition];

        return (
            <div className="video-container">
                <video className="background-video" key={videoURL} autoPlay loop muted>
                    <source src={videoURL} type="video/mp4" />
                </video>
            </div>
        );
    }

    return <div className="background-container" style={{ backgroundColor: '#05050D' }}></div>;
}

export default Background;
