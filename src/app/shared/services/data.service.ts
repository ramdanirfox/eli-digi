import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  botUser = 'bot5361073312:AAFg-Wlqhn8a9GM_V6bsY5Qu_1xd6oObdAI';
  slideshowDb = 49;
  constructor(private httpClient: HttpClient) { }

  submitImage(imageFile: File) {
    const form = new FormData();
    form.append('chat_id', '-1001788347516');
    form.append('disable_notification', 'false');
    form.append('photo', imageFile);
    form.append('caption', 'Optional');
    const url = "https://api.telegram.org/bot5361073312:AAFg-Wlqhn8a9GM_V6bsY5Qu_1xd6oObdAI/sendPhoto";

    return this.httpClient.post(url, form);
  }

  submitMessage(tulisan: string) {
    const url = 'https://api.telegram.org/' + this.botUser + '/sendMessage';
    const headers = new HttpHeaders({'content-type': 'application/json'});
    const body = JSON.stringify({
      chat_id: '-1001788347516',
      text: tulisan
    });
    return this.httpClient.post(url, body, {headers});
  }

  editMessage(tulisanBaru: string) {
    const url = 'https://api.telegram.org/' + this.botUser + '/editMessageText';
    const headers = new HttpHeaders({'content-type': 'application/json'});
    const body = JSON.stringify({
      chat_id: '-1001788347516',
      message_id: this.slideshowDb,
      text: tulisanBaru
    });
    return this.httpClient.post(url, body, {headers});
  }

  copyMessage(tulisanBaru: string) {
    const url = 'https://api.telegram.org/' + this.botUser + '/editMessageText';
    const headers = new HttpHeaders({'content-type': 'application/json'});
    const body = JSON.stringify({
      chat_id: '-1001788347516',
      message_id: this.slideshowDb,
      text: tulisanBaru
    });
    return this.httpClient.post(url, body, {headers});
  }

  deleteMessage(message_id: any) {
    const url = 'https://api.telegram.org/' + this.botUser + '/deleteMessage' + '?chat_id=-1001788347516&message_id=' + message_id;
    const headers = new HttpHeaders({'content-type': 'application/json'});
    return this.httpClient.get(url);
  }

  forwardMessage(message_id: any) {
    const url = 'https://api.telegram.org/' + this.botUser + '/forwardMessage' + '?chat_id=-1001788347516&from_chat_id=-1001788347516&message_id=' + message_id;
    const headers = new HttpHeaders({'content-type': 'application/json'});
    return this.httpClient.get(url);
  }

  readMessage() {
    let msg = '';
    return this.forwardMessage(this.slideshowDb).pipe(switchMap((x: any) => {
      console.log('fwd', x);
      msg = x.result.text;
      return this.deleteMessage(x.result.message_id);
    }), map(x => {
      return msg
    }));
  }

  resolveFile(fileId: string) {
    const url = 'https://api.telegram.org/' + this.botUser + '/getFile?file_id=' + fileId;
    return this.httpClient.get<any>(url);
  }

  resolveFileToUrl(fileId: string) {
    return this.resolveFile(fileId).pipe(map(x => {
      return this.generateReceiveFilePath(x.result.file_path);
    }));
  }

  generateReceiveFilePath(pathFile: string) {
    const url = "https://api.telegram.org/file/" + this.botUser + "/" + pathFile;
    return url;
  }

  // resolve first before receive file
  receiveFile(pathFile: string) {
    return this.httpClient.get(this.generateReceiveFilePath(pathFile));
  }

  // HIGH LEVEL SERVICES
  addSlideshow(imageFile: File){
    //upload
    //get last img id
    //read msg
    //apnd to msg
    //edit msg
    let newPhotoId = '---';
    return this.submitImage(imageFile).pipe(switchMap((x: any) => {
      newPhotoId = x.result.photo[x.result.photo.length -1].file_id;
      return this.readMessage();
    }),
    switchMap((x: string) => {
      let dataspl = x.split('\n\n');
      dataspl.push(newPhotoId);
      const updMsg = dataspl.join('\n\n');
      return this.editMessage(updMsg);
    }));
  }
}
