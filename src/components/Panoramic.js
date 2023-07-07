import React, {useState, useEffect} from 'react';
import cloudPanoramic from '../assets/images/cloud_panoramic.jpg';

function Panoramic() {

    const [pos, setPos] = useState(0);

    useEffect(() => {
        
        const scroll = setInterval(() => {
            setPos((lastPos) => (lastPos + 0.01));
        }, 10);
    
        return () => {
          clearInterval(scroll);
        };

    }, []);

    return (

        <div
            style={{
                height: "100vh",
                width: "150vw",
                backgroundImage: `url(${cloudPanoramic})`,
                backgroundPosition: String(pos) + "% 0%",
                backgroundSize: "auto 100%",
            }}
            className="panoramic"
        />

    );

}

export default Panoramic;