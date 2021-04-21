import $ from 'jquery';
import BikeService from './js/bike-service.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$('#submit').on('click', (event) => {
  event.preventDefault();
  let zipcode = $('#zipcode').val();
  let distance = $('#distance').val();
  BikeService.getBike(zipcode, distance)
    .then(function(response) {
      getBikes(response);
    });
});


const getBikes = (response) => {
  if(response.bikes) {
    response.bikes.forEach((element) => {
      console.log(element);
    });
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
};
