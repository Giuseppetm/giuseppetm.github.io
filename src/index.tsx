import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './global.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* Click to scroll to section 
$('.click_to_scroll').click(function(){
  var clickedId = $(this).attr('href');
  $('html, body').animate({ scrollTop: ($(clickedId!).offset()!.top)} , 1000);
  return false;
});
*/

$(document).ready(function() {
  // executes when HTML-Document is loaded and DOM is ready
 console.log("document is ready");
     $('[data-toggle="offcanvas"], #navToggle').on('click', function () {
     $('.offcanvas-collapse').toggleClass('open')
   })
 });
 
 
 window.onload = function() {
  // executes when complete page is fully loaded, including all frames, objects and images
 console.log("window is loaded");
   
   
 // window load  
 };

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);