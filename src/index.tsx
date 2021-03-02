import 'bootstrap/dist/css/bootstrap.min.css';
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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);