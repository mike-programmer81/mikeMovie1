import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { category } from './app.model';
import { Observable, of } from 'rxjs';


@Injectable({providedIn: 'root'})
export class AppService {
   

    getcolectionComponent() : Observable<category[]>{
        return of([
             
                {
                    id : 1,
                    title : " Fast & Furious X ",
                    "ratingTotal": "/10",
                    "ratingNow": 5.7,
                    "Stars": "Vin Diesel , Michelle Rodriguez , Jason Statham",
                    "plot": " Dom Toretto and his family are targeted by the vengeful son of drug kingpin Hernan Reyes.",
                    "poster": "https://m.media-amazon.com/images/S/pv-target-images/d5fcb3ec40c75576fcaf15f263a7df5e5e50dfb2057d4fce8a5d355fe1009576._UR1920,1080_SX720_FMjpg_.jpg",
                    "image": "https://wallpapercg.com/download/fast-x-3840x2160-11583.jpg",
                    "runtime": "2h 21m",
                    "boxOffice": "$28.3 million",
                    "rating": 4,   
                    "Genre": "Action , Car Action  , mystery",
                },
                {
                    id : 2,
                    title : "Deadpool & Wolverine",
                    "ratingTotal": "/10",
                    "ratingNow": 7.6,
                    "Stars": "Ryan Reynolds , Hugh Jackman , Emma Corrin",
                    "plot": "Deadpool is offered a place in the Marvel Cinematic Universe by the Time Variance Authority, but instead recruits a variant of Wolverine to save his universe from extinction.",
                    "poster": "https://wallpapercat.com/w/full/5/f/e/5823011-1920x1300-desktop-hd-deadpool-wolverine-comics-background-image.jpg",
                    "image": "https://wallpapercat.com/w/full/6/0/c/5822914-2880x1620-desktop-hd-deadpool-wolverine-comics-background-image.jpg",
                    "runtime": "2h 08m",
                    "boxOffice": "$28.3 million",
                    "rating": 2,

                    
                    
                    "Genre": "Action , Dark Comedy , Adventure",
                    
                },
                {
                    id : 3,
                    title : "Atlas",
                    "ratingTotal": "/10",
                    "ratingNow": 5.6,
                    "Stars": "Jennifer Lopez , Simu Liu , Sterling K. Brown",
                    "plot": "In a bleak-sounding future, an A.I. soldier has determined that the only way to end war is to end humanity.",
                    "poster": "https://movieswetextedabout.com/wp-content/uploads/2024/05/Atlas-Movie-Review-Brian.webp",
                    "image": "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/05/atlas-atlas-shepherd-jennifer-lopez.jpg",
                    "runtime": "1h 58m",
                    "boxOffice": "$28.3 million",
                    "rating": 3,
                    
                    
                    "Genre": "Action,Action Epic,Artificial Intelligence",
                    
                },



                {
                    id : 4,
                    title : "Sonic the Hedgehog 3 ",
                    "ratingTotal": "/10",
                    "ratingNow": 6.9,
                    "Stars": "Jim Carrey , Ben Schwartz , Keanu Reeves",
                    "plot": "Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched, Team Sonic must seek out an unlikely alliance.",
                    "poster": "https://www.dexerto.com/cdn-image/wp-content/uploads/2024/12/13/sonic-3-shadow-poster.jpg?width=1200&quality=60&format=auto",
                    "image": "https://www.techadvisor.com/wp-content/uploads/2025/02/when-is-sonic-3-available-to-stream-2.jpg?quality=50&strip=all",
                    "runtime": "1h 50m",
                    "boxOffice": "$28.3 million",
                    "rating": 4,
                    
                    
                    "Genre": "Animal Adventure, Superhero , Family"
                    
                },
                {
                    id : 5,
                    title : "Venom: The Last Dance",
                    "ratingTotal": "/10",
                    "ratingNow": 6.0,
                    "Stars": "Tom Hardy , Chiwetel Ejiofor , Juno Temple",
                    "plot": "Eddie Brock and Venom must make a devastating decision as they're pursued by a mysterious military man and alien monsters from Venom's home world.",
                    "poster": "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2024/06/venom-the-last-dance.jpg",
                    "image": "https://spcdn.shortpixel.ai/spio/ret_img,q_orig,to_webp,s_webp/thecosmiccircus.com/wp-content/uploads/2023/05/Untitled-design-41.jpg",
                    "runtime": "1h 50m",
                    "boxOffice": "$28.3 million",
                    "rating": 3,
                    
                    "Genre": "Action , Road Trip  , Alien Invasion",
                    
                },
                {
                    id : 6,
                    title : "The Godfather",
                    "ratingTotal": "/10",
                    "ratingNow": 9.2,
                    "Stars": "Marlon Brando , Al Pacino , James Caan",
                    "plot": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
                    "poster": "https://wallpapers.com/images/hd/marlon-brando-the-godfather-poster-v288n2h2t3u85apc.jpg",
                    "image": "https://streamcoimg-a.akamaihd.net/000/390/615/390615-Banner-L2-5910462c50979976730b358bb59c3ec1.jpg",
                    "runtime": "2h 55m",
                    "boxOffice": "$28.3 million",
                    "rating": 5,
                    
                    
                    "Genre": "Gangster , Tragedy  , Drama",
                    
                },
            
        ])
    }








    // http=inject(HttpClient)
    


    // getposts(){
    //     return this.http.get('https://freetestapi.com/api/v1/movies')
   
    // }
}