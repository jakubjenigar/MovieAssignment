import {HttpHeaders, HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map, catchError, tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';



const baseUrl = 'http://localhost:8080/api/tvshows/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {
  // gettvShow() {
  //   return [
  //     {
  //       title: 'Chicago med',
  //       genre: 'Drama',
  //       photo: 'https://castingt.com/storage/app/jobs/1551206551-chicagomed.jpg',
  //       trailer: 'J_tGlmHqRC4',
  //       description: 'The doctors who work at the emergency ward strive to save the lives of their patients while dealing with personal issues.',
  //       type: 'show'
  //     },
  //     {
  //       title: 'House MD',
  //       genre: 'Drama',
  //       photo: 'https://wallpaperset.com/w/full/2/2/e/22432.jpg',
  //       trailer: 'MczMB8nU1sY',
  //       description: 'Dr House clashes with doctors as he comes up with hypotheses about his patient illnesses.',
  //       type: 'show'
  //     },
  //     {
  //       title: 'Riverdale',
  //       genre: 'Mystery',
  //       photo: 'https://img.purch.com/o/aHR0cDovL3d3dy5uZXdzYXJhbWEuY29tL2ltYWdlcy9pLzAwMC8yMTAvMzk5L2kwMi9ETGFvbmg3VUVBQVFGc2QuanBn',
  //       trailer: 'HxtLlByaYTc&t',
  //       description: 'A group of teens tackle being teenagers in a town that is rife with sinister happenings and blood-thirsty criminals.',
  //       type: 'show'
  //     },
  //     {
  //       title: 'Attack on Titan',
  //       genre: 'Anime',
  //       photo: 'https://thelootgaming.com/wp-content/uploads/Attack-on-titan-2.jpg',
  //       trailer: 'MGRm4IzK1SQ',
  //       description: 'After his hometown is destroyed, Eren Yeager vows to cleanse the earth of the Titans that have brought humanity to extinction.',
  //       type: 'show'
  //     },
  //     {
  //       title: 'Curb your Enthusiasm',
  //       genre: 'Comedy',
  //       photo: 'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1687,w_3000,x_0,y_0/dpr_1.5/c_limit,w_1600/fl_lossy,q_auto/v1579499422/200117-kennedy-curb-tease_jkbrw7',
  //       trailer: 'iIepKA36SB8&t',
  //       description: 'The life and times of Larry David and the predicaments he gets himself into with his friends and strangers.',
  //       type: 'show'
  //     },
  //     {
  //       title: 'The Office',
  //       genre: 'Comedy',
  //       photo: 'https://www.inputmag.dk/wp-content/uploads/2017/12/the-office.gif',
  //       trailer: 'LHOtME2DL4g',
  //       description: 'A mockumentary on a group of office workers, where the workday consists of clashes, inappropriate behavior, and tedium.',
  //       type: 'show'
  //     }
  //   ];
  // }

constructor(private http: HttpClient) {

}

getTvShows(){
return this.http.get(baseUrl);
}

}