import { Injectable } from '@angular/core';
import { getDownloadURL, list, ref, Storage, uploadBytes } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
url: string= "";

  constructor(private storage: Storage) { }

  public uploadImage($event: any, name: string){  // esta funcion va s subir el archivo al firebase en la carpeta imagen con en name declarado en TS(perfil_ id)

    const file = $event.target.files[0]  //carga de foto como evento
    const imagRef = ref(this.storage, 'imagen/' + name)  // la imagen se carga en el storage en una constante imagRef
    uploadBytes(imagRef, file)
    .then(response => {this.getImages()})
    .catch(error => console.log(error))
  }

  getImages(){ // funcion para traer la imagen desde el Storage
    
    const imagesRef = ref(this.storage, 'imagen')
    list(imagesRef)
    .then(async response => {
      for(let item of response.items){
        this.url = await getDownloadURL(item);
      }
    })
    .catch(error => console.log(error))
  }

  clearUrl(){
    this.url ="";
  }

}
