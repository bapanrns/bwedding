import React, { useState } from 'react';

import Select from 'react-select';

import { useNavigate } from "react-router-dom";


//export class Test extends Component {

const Test = () => {
 

  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  const ColourOption = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
    { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
  ];

  const navigate = useNavigate();

  function linkChange(){

    localStorage.setItem("login", true);



    navigate("/profiledetails/1");
  }

  function localstorageClear(){
    localStorage.clear();
  }

    return (
      <div>
            <h1>Test -- {localStorage.getItem('login')}</h1>
            <button type='button' onClick={linkChange}> ok</button>

            <button type='button' onClick={localstorageClear}> Clear</button>

            <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={ColourOption[0]}
                isDisabled={isDisabled}
                isLoading={isLoading}
                isClearable={isClearable}
                isRtl={isRtl}
                isSearchable={isSearchable}
                name="color"
                options={ColourOption}
            />


      </div>
    )
}

export default Test
