import React, { useState, useEffect } from 'react'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import Select from 'react-select';
import Accordion from 'react-bootstrap/Accordion';
import CastesData from '../components/Castes.json'


const SearchProfile = (e) => {
    useEffect(() => {
        incomeTo(5);
        setHeightObjFn();
        setAgeObjFn();
      }, []);
    const ageRange = [];
    
    const [searchObj, setSearchObj] = useState({"searchFor":"", "age": "", "ageTo": "", "height": "", "heightTo": "", "maritalStatus": "", "religion": "", "caste": "", "motherToungue": "", "income": "", "incomeTo": "", });

    for (var i = 18; i < 50; i++) {
        ageRange.push(i)
    }

    const maritalStatus = [
            {"label":"Single (never married)","value":"single","iso":"IN"},
            {"label":"Awaiting Divorce","value":"awaiting divorce","iso":"IN"},
            {"label":"Divorced","value":"divorced","iso":"IN"},
            {"label":"Widowed","value":"widowed","iso":"IN"},
            {"label":"Annulled","value":"annulled","iso":"IN"}
        ]

    const ReligionStatus = [
        {"label":"Hindu","value":"Hindu","iso":"IN"},
        {"label":"Muslim - Sunni","value":"Muslim-Sunni","iso":"IN"},
        {"label":"Muslim - Shia","value":"Muslim-Shia","iso":"IN"},
        {"label":"Sikh","value":"Sikh","iso":"IN"},
        {"label":"Christian","value":"Christian","iso":"IN"},
        {"label":"Buddhist","value":"Buddhist","iso":"IN"},
        {"label":"Jain","value":"Jain","iso":"IN"},
        {"label":"Parsi","value":"Parsi","iso":"IN"}/*,
        {"label":"Jewish","value":"jewish","iso":"IN"},
        {"label":"Bahai","value":"Buddhist","iso":"IN"}*/
    ]

    //const [states, setStates] = useState([]);
    function maritalStatusFn(value){
    }

    function getState(value){
        /*if(jsonData["states"][value] !== undefined){
           // setStates(jsonData["states"][value])
        }else{
            setStates([])
        }*/
    }

    /** Age */
    const [ageObj, setAgeObj] = useState([])
    const [ageObjTo, setageObjTo] = useState([])
    
    function setAgeObjFn(event){
        const innerArray = []
        for(let i = 18; i < 65; i++) {
            const innerHash = {"value": i, "label": i, "color": "#00B8D9"}
            if(event !== undefined ){
                if(Math.floor(event['value']) >= i){
                    innerHash["isDisabled"]=true
                }
            }
            innerArray.push(innerHash)
        }
        if(event === undefined){
            setAgeObj(innerArray);
        }
        setageObjTo(innerArray)
    }

    /** Age */

    /* Caste */
    const [CasteObj, setCaste] = useState(CastesData['Hindu']);

    function getCaste(religionArray){ 
        if(religionArray.length > 0){
            religionArray.map((religion, index) =>{
                console.log(CasteObj.length)
                if(index === 0){
                    setCaste([]);
                    setCaste(CastesData[religion.value]);
                }else{
                    console.log("------|", index, religion.value);
                    setCaste([...CasteObj, ...CastesData[religion.value]]);
                }
            })
        }else{
            setCaste([]);
        }
    }

    /* Income */
    const incomeRowObj = [
    {"value": "0", "label": "Rs. 0", "color": '#00B8D9'},
    {"value": "1", "label": "Rs. 1 Lakh", "color": '#00B8D9'},
    {"value": "2", "label": "Rs. 2 Lakh", "color": '#00B8D9'},
    {"value": "3", "label": "Rs. 3 Lakh", "color": '#00B8D9'},
    {"value": "4", "label": "Rs. 4 Lakh", "color": '#00B8D9'},
    {"value": "5", "label": "Rs. 5 Lakh", "color": '#00B8D9'},
    {"value": "6", "label": "Rs. 6 Lakh", "color": '#00B8D9'},
    {"value": "7", "label": "Rs. 7 Lakh", "color": '#00B8D9'},
    {"value": "8", "label": "Rs. 8 Lakh", "color": '#00B8D9'},
    {"value": "9", "label": "Rs. 9 Lakh", "color": '#00B8D9'},
    {"value": "10", "label": "Rs. 10 Lakh", "color": '#00B8D9'},
    {"value": "15", "label": "Rs. 15 Lakh", "color": '#00B8D9'},
    {"value": "20", "label": "Rs. 20 Lakh", "color": '#00B8D9'},
    {"value": "25", "label": "Rs. 25 Lakh", "color": '#00B8D9'},
    {"value": "30", "label": "Rs. 30 Lakh", "color": '#00B8D9'},
    {"value": "35", "label": "Rs. 35 Lakh", "color": '#00B8D9'},
    {"value": "50", "label": "Rs. 50 Lakh", "color": '#00B8D9'},
    {"value": "75", "label": "Rs. 75 Lakh", "color": '#00B8D9'},
    {"value": "100", "label": "Rs. 1 CR", "color": '#00B8D9'},
    {"value": "101", "label": "Rs. 1 CR Above", "color": '#00B8D9'},
    ]

    const incomeObj = incomeRowObj;
    const [incomeToObj, setIncomeToObj] = useState([])
    function getIncomeTo(incomeObj){
        if(incomeObj === null){
            setIncomeToObj(incomeRowObj);
        }else{
            incomeTo(incomeObj['value'])
        }
    }

    function incomeTo(income){
        setIncomeToObj([]);
        const innerArray = []
        for(let i = 0; i < incomeRowObj.length; i++) {
            const innerHash = incomeRowObj[i]
            if(Math.floor(innerHash['value']) <= income){
                innerHash["isDisabled"]=true
            }
            
            innerArray.push(innerHash)
        }
        setIncomeToObj(innerArray);
    }
    
    /* Income */
    /** Height */
    const heightArray = [`4' -  122cm@122`, `4'1" -  124cm@124`, `4'3" -  131cm@131`, `4'4" -  132cm@132`, `4'5" -  135cm@135`, `4'6" -  137cm@137`, `4'7" -  140cm@140`, `4'8" -  142cm@142`, `4'9" -  145cm@145`, `4'10" -  147cm@147`, `4'11" -  150cm@150`, `5' -  152cm@152`, `5'1" -  155cm@155`, `5'2" -  157cm@157`, `5'3" -  160cm@160`, `5'4" -  163cm@163`, `5'5" -  165cm@165`, `5'6" -  168cm@168`, `5'7" -  170cm@170`, `5'8" -  173cm@173`, `5'9" -  175cm@175`, `5'10" -  178cm@178`, `5'11" -  180cm@180`, `6' -  183cm@183`, `6'1" -  185cm@185`, `6'2" -  188cm@188`, `6'3" -  190cm@190`, `6'4" -  193cm@193`, `6'5" -  196cm@196`, `6'6" -  198cm@198`, `6'7" -  201cm@201`, `6'8" -  203cm@203`, `6'9" -  206cm@206`, `6'10" -  208cm@208`, `6'11" -  211cm@211`, `7' -  213cm@213`, `7'1" -  216cm@216`, `7'2" -  218cm@218`, `7'3" -  221cm@221`, `7'4" -  224cm@224`, `7'5" -  226cm@226`, `7'6" -  229cm@229`, `7'7" -  231cm@231`, `7'8" -  234cm@234`, `7'9" -  236cm@236`, `7'10" -  239cm@239`, `7'11" -  241cm@241`]

    const [heightObj, setHeightObj] = useState([])
    const [heightObjTo, setHeightObjTo] = useState([])
    
    function setHeightObjFn(event){
        const innerArray = []
        for(let i = 0; i < heightArray.length; i++) {
            const innerHash = {"value": heightArray[i].split('@')[1], "label": heightArray[i].split('@')[0], "color": "#00B8D9"}
            if(event !== undefined ){
                console.log("IFFFFFF");
                if(Math.floor(event['value']) >= heightArray[i].split('@')[1]){
                    innerHash["isDisabled"]=true
                }
            }
            
            innerArray.push(innerHash)
        }
        if(event === undefined){
            setHeightObj(innerArray);
        }
        setHeightObjTo(innerArray)
        
    }

    /** Height */

    /** motherTongue */
    const motherTongue = [{"value": "bengali", "label": "Bengali", "color": '#00B8D9'},{"value": "hindi", "label": "Hindi", "color": '#00B8D9'}];
    /** motherTongue */
    /* For react select dropdown with serch */
    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRtl, setIsRtl] = useState(false);
    /* For react select dropdown with serch */
    return (
        <div>
         
            <div role="dialog" aria-modal="true" className="fade modal show" style={{"display": "block"}}>
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="modal-title h4">Search</div>
                            <button type="button" className="btn-close" aria-label="Close" onClick={e.hideModal}></button>
                        </div>
                        <div className="modal-body" style={{paddingBottom: 0, paddingLeft: 0, paddingRight: 0}}>
                            
                            <Tabs
                            defaultActiveKey="search"
                            id="fill-tab-example"
                            className="mb-3"
                            fill
                            >
                                <Tab eventKey="search" title="Search">

                                    <div className="modal-body" style={{paddingBottom: 0}}>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Basic Information</Accordion.Header>
                                            <Accordion.Body>
                                                <Table className='table table-borderless'>
                                                    <tbody>
                                                        <tr>
                                                            <td>Search For:</td>
                                                            <td>
                                                                <select className="form-select" name="searchFor">
                                                                   <option value="Bride">Bride</option>
                                                                   <option value="Groom">Groom</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Age:</td>
                                                            <td style={{textAlign: "center"}}>
                                                                <div className='col-md-5 colmd5' style={{float: "left"}}>
                                                                    <Select
                                                                        className="basic-single"
                                                                        classNamePrefix="select"
                                                                        defaultValue={ageObj[2]}
                                                                        isDisabled={false}
                                                                        isLoading={false}
                                                                        isClearable={true}
                                                                        isRtl={false}
                                                                        isSearchable={true}
                                                                        name="age"
                                                                        options={ageObj}
                                                                        onChange={(e) => { 
                                                                            setAgeObjFn(e)
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div className='col-md-1 colmd1' style={{float: "left"}}>
                                                                    <span>to</span>
                                                                </div>
                                                                <div className='col-md-6 colmd6' style={{float: "left"}}>
                                                                    <Select
                                                                        className="basic-single"
                                                                        classNamePrefix="select"
                                                                        defaultValue={ageObjTo[1]}
                                                                        isDisabled={false}
                                                                        isLoading={false}
                                                                        isClearable={true}
                                                                        isRtl={false}
                                                                        isSearchable={true}
                                                                        name="ageTo"
                                                                        options={ageObjTo}
                                                                    />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Height:</td>
                                                            <td style={{textAlign: "center"}}>
                                                                <div className='col-md-5 colmd5' style={{float: "left"}}>
                                                                    <Select
                                                                        
                                                                        className="basic-single"
                                                                        classNamePrefix="select"
                                                                        defaultValue={heightObj[2]}
                                                                        isDisabled={false}
                                                                        isLoading={false}
                                                                        isClearable={true}
                                                                        isRtl={false}
                                                                        isSearchable={true}
                                                                        name="height"
                                                                        options={heightObj}
                                                                        onChange={(e) => { 
                                                                            setHeightObjFn(e)
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div className='col-md-1 colmd1' style={{float: "left"}}>
                                                                    <span>to</span>
                                                                </div>
                                                                
                                                                <div className='col-md-6 colmd6' style={{float: "left"}}>
                                                                    <Select
                                                                        
                                                                        className="basic-single"
                                                                        classNamePrefix="select"
                                                                        defaultValue={heightObjTo[1]}
                                                                        isDisabled={false}
                                                                        isLoading={false}
                                                                        isClearable={true}
                                                                        isRtl={false}
                                                                        isSearchable={true}
                                                                        name="heightTo"
                                                                        options={heightObjTo}
                                                                    />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Marital Status:</td>
                                                            <td>
                                                                <Select
                                                                    isMulti
                                                                    className="basic-single"
                                                                    classNamePrefix="select"
                                                                    defaultValue={maritalStatus[0]}
                                                                    isDisabled={isDisabled}
                                                                    isLoading={isLoading}
                                                                    isClearable={isClearable}
                                                                    isRtl={isRtl}
                                                                    isSearchable={isSearchable}
                                                                    name="maritalStatus"
                                                                    options={maritalStatus}
                                                                    onChange={(e) => { 
                                                                        maritalStatusFn(e.value)
                                                                    }}
                                                                />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Religion:</td>
                                                            <td>
                                                                <Select
                                                                    isMulti
                                                                    className="basic-single"
                                                                    classNamePrefix="select"
                                                                    defaultValue={ReligionStatus[0]}
                                                                    isDisabled={isDisabled}
                                                                    isLoading={isLoading}
                                                                    isClearable={isClearable}
                                                                    isRtl={isRtl}
                                                                    isSearchable={isSearchable}
                                                                    name="religion"
                                                                    options={ReligionStatus}
                                                                    onChange={(e) => { 
                                                                        getCaste(e)
                                                                    }}
                                                                />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Caste:</td>
                                                            <td>
                                                                <Select
                                                                    isMulti
                                                                    className="basic-single"
                                                                    classNamePrefix="select"
                                                                    defaultValue={CasteObj[0]}
                                                                    isDisabled={isDisabled}
                                                                    isLoading={isLoading}
                                                                    isClearable={isClearable}
                                                                    isRtl={isRtl}
                                                                    isSearchable={isSearchable}
                                                                    name="caste"
                                                                    options={CasteObj}
                                                                    onChange={(e) => { 
                                                                        getState(e.value)
                                                                    }}
                                                                    
                                                                />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Mother Tongue</td>
                                                            <td>
                                                            <Select
                                                                    isMulti
                                                                    className="basic-single"
                                                                    classNamePrefix="select"
                                                                    defaultValue={motherTongue[0]}
                                                                    isDisabled={isDisabled}
                                                                    isLoading={isLoading}
                                                                    isClearable={isClearable}
                                                                    isRtl={isRtl}
                                                                    isSearchable={isSearchable}
                                                                    name="motherToungue"
                                                                    options={motherTongue}
                                                                    onChange={(e) => { 
                                                                        getState(e.value)
                                                                    }}
                                                                    
                                                                />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Income:</td>
                                                            <td style={{textAlign: "center"}}>
                                                                <div className='col-md-5 colmd5' style={{float: "left"}}>
                                                                    <Select
                                                                        
                                                                        className="basic-single"
                                                                        classNamePrefix="select"
                                                                        defaultValue={incomeObj[5]}
                                                                        isDisabled={false}
                                                                        isLoading={false}
                                                                        isClearable={true}
                                                                        isRtl={false}
                                                                        isSearchable={true}
                                                                        name="income"
                                                                        options={incomeObj}
                                                                        onChange={(e) => { 
                                                                            getIncomeTo(e)
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div className='col-md-1 colmd1' style={{float: "left"}}>
                                                                    <span>to</span>
                                                                </div>
                                                                
                                                                <div className='col-md-6 colmd6' style={{float: "left"}}>
                                                                    <Select
                                                                        
                                                                        className="basic-single"
                                                                        classNamePrefix="select"
                                                                        defaultValue={incomeToObj[0]}
                                                                        isDisabled={false}
                                                                        isLoading={false}
                                                                        isClearable={true}
                                                                        isRtl={false}
                                                                        isSearchable={true}
                                                                        name="incomeTo"
                                                                        options={incomeToObj}
                                                                    />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>Education & Career</Accordion.Header>
                                            <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Lifestyle</Accordion.Header>
                                            <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>More options</Accordion.Header>
                                            <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        </Accordion>
                                    </div>
                                </Tab>
                                <Tab eventKey="advancedSearch" title="Advanced Search">
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchProfile
