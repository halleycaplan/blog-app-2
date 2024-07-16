import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const divEl = document.getElementById("root");
const root = ReactDOM.createRoot(divEl);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

fetchBlogs().then((res) => {
  console.log(res);
}). catch(err => {
  console. log(err);
}) ;



const asyncFunction = () => {
  return new Promise((resolve, reject)=>{
    if(Promise.then(value)) {
      resolve()
    } else {
      reject()
    }
  })
}



const fetchBlogs = async () => {
  fetch("http://localhost:8000/api/blogs", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
}).then(res => {
  resolve(res);
}).catch(err => {
  reject(err);
});
}