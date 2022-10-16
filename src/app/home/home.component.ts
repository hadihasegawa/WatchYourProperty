import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
    // load the google map on the browser
    let loader = new Loader({
      apiKey:'AIzaSyAmTH35KrbxaTxcejqvrREm6wzAjqyfbpI'
    });

    loader.load().then(()=> {
      console.log("loaded map")

      // give location latitude and longtitude

      const location ={
        lat:1.3452,
        lng: 103.9326
      };

      this.map = new google.maps.Map(document.getElementById('map'),{
        center:location,
        zoom:17,

      })

      // marker

      const marker = new google.maps.Marker({
        position: location,
        map: this.map
    
      })
      

    })

  }
  title = "google-maps"

  private map: google.maps.Map
}
