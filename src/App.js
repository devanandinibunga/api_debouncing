// import moment from "moment/moment";
import React from "react";
import moment from 'moment';
import "./App.css";
import { v4 as uuidv4 } from 'uuid';
import { ApiCalling1 } from "./components/ApiCalling1/ApiCalling1";
import { ApiCalling2 } from "./components/ApiCalling2/ApiCalling2";
import { ApiCalling3 } from "./components/ApiCalling3/ApiCalling3";
import { ApiCalling4 } from "./components/ApiCalling4/ApiCalling4";

// import { LineChart } from './components/LineChart/LineChart';
// import { Rador } from './components/Rador/Rador';

function App() {

  const url1 = "https://api.postalpincode.in/pincode/533003";
  const url2 = "https://api.postalpincode.in/pincode/522002";
  const url3 = "https://api.postalpincode.in/pincode/522001";
  const url4 = "https://api.postalpincode.in/pincode/533005";

let urlData = {};
// let urlliveRecord = {};
const newId=uuidv4();
urlData[newId]={calledUrl:"",apiCallingTime:''}


function apiDebounce(callback, delay) {
  let timeoutId;
  
  return function() {
    // const context = this;
    const args = arguments;
    
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}

function delayedFetch(url,newId) {
  console.log(`Fetching ${url}...`);
  // Do the actual fetch here



 const fetchedStatus=fetch(url)
    .then((response) => {
      return response.json();
      
    })
    .then((jsondata) => {
      console.log(jsondata);
      return jsondata;
    });
    // const newId=uuidv4();
    urlData[newId]={status:fetchedStatus};
  // urlRecord={};
  console.log(urlData,"urlRecord")
}

function delayedFetchWithDebounce(url, delay) {
  // console.log((moment().format('h:mm:ss') - urlRecord[url]))
  // const otherId=uuidv4();
  // urlliveRecord[otherId] = {calledUrl:url,apiCallingTime:moment().seconds()};
  // console.log("url1",url)
  // console.log(urlliveRecord[otherId].apiCallingTime)

  // console.log(urlliveRecord[otherId].apiCallingTime - urlRecord[newId].apiCallingTime)

  const currentTime=moment().seconds();
 
  if((urlData[newId].calledUrl === url) && (currentTime - urlData[newId].apiCallingTime < delay/1000) ){
    // console.log((moment().seconds() - urlRecord[newId].apiCallingTime))
    console.log(`Skipping fetch for ${url}`);
    return;
  }

  urlData[newId] = {calledUrl:url,apiCallingTime:moment().seconds()};
  const apiFetchedDebounce = apiDebounce(() => {
    delayedFetch(url,newId);
  }, delay);
  apiFetchedDebounce();

}

  return (
    <>
      <ApiCalling1 delayedFetchWithDebounce={delayedFetchWithDebounce} url1={url1}/>
      <ApiCalling2 delayedFetchWithDebounce={delayedFetchWithDebounce} url2={url2}/>
      <ApiCalling3 delayedFetchWithDebounce={delayedFetchWithDebounce} url3={url3}/>
      <ApiCalling4 delayedFetchWithDebounce={delayedFetchWithDebounce} url4={url4}/>
    </>
  );
}
export default App;



