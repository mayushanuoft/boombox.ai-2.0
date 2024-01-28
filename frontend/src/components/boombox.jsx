import { React, useState, useEffect } from "react"
import "./boomBox.css"
import Slider from '@mui/material/Slider';
import SpotifyPlayer from 'react-spotify-web-playback';

export const BoomBox = () => {
    return (
        <div id="container">
            <Background />
            <Screen songName={"On Top"} artist={"Karan Ajual"} time={"1:45"} />
            <Tape />
            <VolumeSliderBox />
            <Speaker />
            <DialScreenDiv />
            <Buttons />
            <DialBox />
            <MySpotifyPlayer />
        </div>
    )
}

const MySpotifyPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        console.log(setIsPlaying)
        setIsPlaying(prevState => !prevState);
    };

    const getOAuthToken = (callback) => {
        const accessToken = 'BQAdP2Au7LJgRUXNGvCNwXbeU8XPsGVkD1c52nLykmbGw0NgggfLJ8jEqkyjsFq9TIfXCcsuKtZAiA3aHlvie9xSZYdOGsj0-9JmShTXzcDBhsr77wU';
        callback(accessToken);
    };

    return (
        <div>
            <button onClick={handlePlayPause}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <SpotifyPlayer
                token=""
                callback={state => console.log(state)}
                getOAuthToken={getOAuthToken}
                play={isPlaying}
                uris={['spotify:track:2Xr1dTzJee307rmrkt8c0g']}
            />
        </div>
    );
};

const Background = () => {
    return (
        <div id="background">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={712}
                height={428}
                fill="none"
            >
                <rect width={712} height={356} y={72} fill="#9107FD" rx={14} />
                <path fill="#D74BA3" d="M273 144h174v284H273z" />
                <path
                    fill="#4407FD"
                    d="M0 86c0-7.732 6.268-14 14-14h684c7.732 0 14 6.268 14 14v73H0V86Z"
                />
                <path fill="#9107FD" d="M146 37h34v35h-34V37ZM540 37h34v35h-34V37Z" />
                <path fill="#4407FD" d="M146 9a9 9 0 0 1 9-9h410a9 9 0 0 1 9 9v28H146V9Z" />
            </svg>
        </div>
    );
}
const Screen = ({ songName, artist, time }) => {
    return (
        <div id="screen">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="141"
                height="57"
                fill="none"
                viewBox="0 0 141 57"
            >
                <rect width="141" height="57" fill="#210537" rx="8"></rect>
            </svg>
            <h2 className="text" id="songName">{songName}</h2>
            <h2 className="text" id="artist">{artist}</h2>
            <h1 className="text" id="time">{time}</h1>
        </div>
    );
}
const Tape = () => {
    return (
        <>
            <TapeBox />
            <TapeReel />
            <TapeWheel id={"tapeWheelLeft"} spin={true} />
            <TapeWheel id={"tapeWheelRight"} spin={true} />
        </>
    )
}
const TapeBox = () => {
    return (
        <div id="tapeBox">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="141"
                height="81"
                fill="none"
                viewBox="0 0 141 81"
            >
                <rect width="141" height="81" fill="#210537" rx="10"></rect>
            </svg>
        </div>
    )
}
const TapeReel = () => {
    return (
        <div id="tapeReel">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="125"
                height="45"
                fill="none"
                viewBox="0 0 125 45"
            >
                <path
                    stroke="#D9D9D9"
                    strokeWidth="3"
                    d="M102.728 2H23.22C11.76 2 2.47 11.29 2.47 22.75S11.76 43.5 23.22 43.5h79.508c11.46 0 20.75-9.29 20.75-20.75S114.188 2 102.728 2z"
                ></path>
            </svg>
        </div>
    )
}
const TapeWheel = ({ id, spin }) => {
    return (
        <div id={id} className={spin ? 'spin' : ''}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="44"
                fill="none"
                viewBox="0 0 45 44"
            >
                <circle
                    cx="22.731"
                    cy="22"
                    r="16"
                    fill="#D9D9D9"
                    transform="rotate(30 22.731 22)"
                ></circle>
                <ellipse
                    cx="22.731"
                    cy="22"
                    fill="#210537"
                    rx="9.806"
                    ry="9.806"
                    transform="rotate(30 22.731 22)"
                ></ellipse>
                <rect
                    width="2.065"
                    height="4.129"
                    x="29.768"
                    y="8.779"
                    fill="#210537"
                    rx="1"
                    transform="rotate(30 29.768 8.78)"
                ></rect>
                <rect
                    width="2.065"
                    height="4.129"
                    x="37.428"
                    y="17.969"
                    fill="#210537"
                    rx="1"
                    transform="rotate(76 37.428 17.97)"
                ></rect>
                <rect
                    width="2.065"
                    height="4.129"
                    x="31.344"
                    y="28.76"
                    fill="#210537"
                    rx="1"
                    transform="rotate(-60 31.344 28.76)"
                ></rect>
                <rect
                    width="2.065"
                    height="4.129"
                    x="9.511"
                    y="14.963"
                    fill="#210537"
                    rx="1"
                    transform="rotate(-60 9.51 14.963)"
                ></rect>
                <rect
                    width="2.065"
                    height="4.129"
                    x="18.701"
                    y="7.304"
                    fill="#210537"
                    rx="1"
                    transform="rotate(-14 18.7 7.304)"
                ></rect>
                <rect
                    width="2.065"
                    height="4.129"
                    x="15.694"
                    y="35.221"
                    fill="#210537"
                    rx="1"
                    transform="rotate(-150 15.694 35.22)"
                ></rect>
                <rect
                    width="2.065"
                    height="4.129"
                    x="8.035"
                    y="26.03"
                    fill="#210537"
                    rx="1"
                    transform="rotate(-104 8.035 26.03)"
                ></rect>
                <rect
                    width="2.065"
                    height="4.129"
                    x="26.762"
                    y="36.696"
                    fill="#210537"
                    rx="1"
                    transform="rotate(166 26.762 36.696)"
                ></rect>
            </svg>
        </div>
    )
}
const VolumeSliderBox = () => {
    return (
        <>
            <VolumeSlider id="topSlider" start={30} />
            <VolumeSlider id="bottomSlider" start={70} />
        </>
    );
};
const VolumeSlider = ({ id, start }) => {
    const [value, setValue] = useState(start);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Slider
            aria-label="Volume"
            value={value}
            onChange={handleChange}
            id={id}
            color="secondary"
        />
    );
};
const Speaker = () => {
    const [randomInterval, setRandomInterval] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRandomInterval(getRandomInt(100, 400));
        }, 800);
        return () => clearInterval(intervalId);
    }, []);

    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    return (
        <>
            <SpeakerRim id={"leftSpeakerRim"} on={true} randomInterval={randomInterval} />
            <SpeakerRim id={"rightSpeakerRim"} on={true} randomInterval={randomInterval} />
        </>
    );
};
const SpeakerRim = ({ id, on, randomInterval }) => {
    return (
        <>
            <div id={id}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="231"
                    height="231"
                    fill="none"
                    viewBox="0 0 231 231"
                >
                    <circle cx="115.5" cy="115.5" r="115.5" fill="#fff"></circle>
                    <circle cx="115.5" cy="115.5" r="115.5" fill="#fff"></circle>
                    <circle cx="116" cy="115" r="101" fill="#000"></circle>
                    <circle cx="116" cy="115" r="101" fill="#210537"></circle>
                </svg>
            </div>
            <SpeakerBase id={`${id}Bass`} bass={on} randomInterval={randomInterval} />
        </>
    );
};
const SpeakerBase = ({ id, bass, randomInterval }) => {
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsActive(prevState => {
                if (!bass) {
                    return false; // If bass is false, isActive should always be false
                } else {
                    // If bass is true, isActive can be toggled
                    return !prevState;
                }
            });
        }, randomInterval);

        // Set isActive initially based on bass value
        setIsActive(bass);

        // Cleanup function to clear the interval
        return () => clearInterval(intervalId);

    }, [randomInterval, bass]);

    return (
        <div id={id} className={isActive ? 'bass-active' : 'bass-inactive'}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                fill="none"
                viewBox="0 0 80 80"
            >
                <circle cx="40" cy="40" r="40" fill="#fff"></circle>
                <circle cx="40" cy="40" r="40" fill="#fff"></circle>
                <circle cx="40.173" cy="39.827" r="34.978" fill="#000"></circle>
                <circle cx="40.173" cy="39.827" r="34.978" fill="#210537"></circle>
            </svg>
        </div>
    );
};
const DialScreenDiv = () => {
    return (
        <>
            <DialScreen id={"leftDialScreen"} rotation={true} />
            <DialScreen id={"rightDialScreen"} rotation={true} />
        </>
    )
}
const DialScreen = ({ rotation, id }) => {
    return (
        <>
            <div id={id}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="106"
                    height="63"
                    fill="none"
                    viewBox="0 0 106 63"
                >
                    <rect width="106" height="63" fill="#fff" rx="6"></rect>
                    <rect width="98" height="55" x="4" y="4" fill="#313131" rx="6"></rect>
                </svg>
            </div>
            <DialScreenDial id={id} rotation={rotation} />
        </>
    )
}
const DialScreenDial = ({ rotation, id }) => {


    return (
        <div id={`${id}Dial`} className={rotation ? 'dialrotator' : ''}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="44"
                fill="none"
                viewBox="0 0 15 44"
            >
                <path stroke="#fff" strokeWidth="3" d="M7.5 0L7.5 31"></path>
                <circle cx="7.5" cy="36.5" r="7.5" fill="#fff"></circle>
                <circle cx="7.5" cy="36.5" r="5.5" fill="#313131"></circle>
            </svg>
        </div>
    )
}
const Buttons = () => {
    return (
        <>
            <PlayButton />
            <PauseButton />
            <BackwardButton />
            <ForwardButton />
        </>

    )
}
const PlayButton = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
        setTimeout(() => {
            setIsClicked(false);
        }, 300); // Reset the state after 300ms (adjust this duration as needed)
    };

    return (
        <div
            id="playButton"
            className={`buttonAni ${isClicked ? 'clicked' : ''}`}
            onClick={handleClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="33"
                fill="none"
                viewBox="0 0 30 33"
            >
                <rect width="30" height="33" fill="#1E1E1E" rx="5"></rect>
                <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 8H9v16h4V8zM21 8h-4v16h4V8z"
                ></path>
            </svg>
        </div>
    );

};
const PauseButton = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
        setTimeout(() => {
            setIsClicked(false);
        }, 300); // Reset the state after 300ms (adjust this duration as needed)
    };

    return (
        <div
            id="pauseButton"
            className={`buttonAni ${isClicked ? 'clicked' : ''}`}
            onClick={handleClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="33"
                fill="none"
                viewBox="0 0 30 33"
            >
                <rect width="30" height="33" fill="#1E1E1E" rx="5"></rect>
                <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 7l14 9-14 9V7z"
                ></path>
            </svg>
        </div>
    );
};
const BackwardButton = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
        setTimeout(() => {
            setIsClicked(false);
        }, 300); // Reset the state after 300ms (adjust this duration as needed)
    };

    return (
        <div
            id="backwardButton"
            className={`buttonAni ${isClicked ? 'clicked' : ''}`}
            onClick={handleClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="33"
                fill="none"
                viewBox="0 0 30 33"
            >
                <rect width="30" height="33" fill="#1E1E1E" rx="5"></rect>
                <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M22 23l-10-8 10-8v16zM8 22V8"
                ></path>
            </svg>
        </div>
    );
};
const ForwardButton = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
        setTimeout(() => {
            setIsClicked(false);
        }, 300); // Reset the state after 300ms (adjust this duration as needed)
    };

    return (
        <div
            id="forwardButton"
            className={`buttonAni ${isClicked ? 'clicked' : ''}`}
            onClick={handleClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="33"
                fill="none"
                viewBox="0 0 30 33"
            >
                <rect width="30" height="33" fill="#1E1E1E" rx="5"></rect>
                <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 8l10 8-10 8V8zM24 9v14"
                ></path>
            </svg>
        </div>
    );
};
const DialBox = () => {
    return (
        <>
            <Dial id={"first"} />
            <Dial id={"second"} />
            <Dial id={"third"} />
            <Dial id={"fourth"} />

        </>
    )
}
const Dial = ({ id }) => {
    return (
        <div id={id} className="dial">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="none"
                viewBox="0 0 40 40"
            >
                <circle cx="20" cy="20" r="20" fill="#fff"></circle>
                <circle cx="20" cy="20" r="20" fill="#fff"></circle>
                <circle cx="20" cy="20" r="20" fill="#fff"></circle>
                <circle cx="20" cy="20" r="15" fill="#313131"></circle>
                <path stroke="#fff" strokeWidth="2" d="M20 8L20 21"></path>
                <circle cx="20" cy="20" r="4" fill="#fff"></circle>
            </svg>
        </div>
    )
}


