import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function Searchbar(props) {

    const { placeholder, data, setLocation } = props;

    const [prediction, setPrediction] = useState([]);
    const [textInput, setTextInput] = useState("");

    const handleType = (event) => {
        const userInput = event.target.value;
        setTextInput(userInput);
        const newPrediction = data.filter((value) => {
            return value.city.toLowerCase().includes(userInput.toLowerCase());
        });

        if (userInput === "") {
            setPrediction([]);
        } else {
            setPrediction(newPrediction);
        }
    };

    const clearInput = () => {
        setPrediction([]);
        setTextInput("");
    };

    const clickResult = (event) => {
        const lat = event.currentTarget.getAttribute("lat");
        const lng = event.currentTarget.getAttribute("lng");
        setLocation([lat, lng]);
    };

    const GetResults = () => {

        const smallData = prediction.slice(0, 20);

        return smallData.map((value, key) => (

          <div className='searchItem' key={key} onClick={clickResult} lat={value.lat} lng={value.lng} >
            <p>
                {
                    value.country === "United States" ?
                    value.city + ", " + value.admin_name + " (USA)" :
                    value.city + ", " + value.country
                }
            </p>
          </div>

        ));
    };

    return (

        <div className="searchContainer">
            <div className="searchInputs">
                <input type="text" placeholder={placeholder} value={textInput} onChange={handleType} />
                <div className="searchIcon">
                    {
                        prediction.length === 0 ? <SearchIcon /> : <CloseIcon id="clearButton" onClick={clearInput} />
                    }
                </div>
            </div>
            {
                prediction.length !== 0 && (
                <div className="searchResult">
                    <GetResults />
                </div>)
            }
        </div>

    );

}

export default Searchbar;