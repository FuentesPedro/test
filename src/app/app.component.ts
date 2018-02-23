import { Component } from '@angular/core';
import { Http, Response, Headers, Jsonp } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'Tienda de mascotas Max';
 infoImage: any = {};
 listDogs: any = {};
 breed='';
 curUser : any = {}; 
 listImagenes:any ={}; 
 
 

 constructor(private _http: Http) {
   this.getImage();
   this.getListDogs();
   
 }

 private getImage() {
   return this._http.get('https://dog.ceo/api/breeds/image/random')
               .map((res: Response) => res.json())
                .subscribe(data => {
                       this.infoImage = data;
                       console.log(this.infoImage);
               });
 }

 getImagenes(breed) {
  return this._http.get('https://dog.ceo/api/breed/'+breed+'/images')
              .map((res: Response) => res.json())
               .subscribe(data => {
                      this.listImagenes = data;
                      console.log(this.listImagenes);
              });
}


 private getListDogs() {
   return this._http.get('https://dog.ceo/api/breeds/list')
               .map((res: Response) => res.json())
                .subscribe(dogs => {
                       this.listDogs = dogs;
                       console.log(this.listDogs);
               });
 }
 setNewUser(user): void {
  console.log(user);
  this.curUser = user;
  }
 
 
}