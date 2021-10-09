function Hero(){

    return(
        <div id="Hero">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100vw"
            height="100vh"
            style={{
                backgroundColor: "rgba(0,0,0, 0.00)",
            }}
            
            >
                <defs>
                    <radialGradient id="rgrad" cx="50%" cy="50%" r="50%">
                    <stop
                        offset="0%"
                        style={{
                        stopColor: "rgb(79,95,164)",
                        stopOpacity: 1,
                        }}
                    />
                    <stop
                        offset="65%"
                        style={{
                        stopColor: "rgb(0,0,0)",
                        stopOpacity: 0,
                        }}
                    />
                    </radialGradient>
                </defs>
                <ellipse
                    cx="70%"
                    cy="58%"
                    rx="100vw"
                    ry="80vh"
                    style={{
                    fill: "url(#rgrad)",
                    }}
                />
            </svg>
        </div>
    )
}

export {Hero}