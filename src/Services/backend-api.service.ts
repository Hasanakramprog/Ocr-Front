import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConstantsService} from './constants-service.service';
import {Template} from '../Model/Template';


@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(
    private httpClient: HttpClient,
    private constantsService: ConstantsService
  ) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    })
  };

  resourcePath = this.constantsService.API_ENDPOINT + 'addTemplate';
  resourcePath2 = this.constantsService.API_ENDPOINT + 'image';
  resourcePath3 = this.constantsService.API_ENDPOINT + 'templates';

  Addtemplate(temp: Template) {
    return this.httpClient.post(this.resourcePath, temp, this.httpOptions);
  }

  image(file) {
    console.log(file);
    return this.httpClient.post(this.resourcePath2, file);
  }

  GetAllTemplates() {
    return this.httpClient.get(this.resourcePath3);
  }

  Ocr(template, image) {
    return this.httpClient.post(this.resourcePath2 + '/' + template, image, this.httpOptions);
  }
}
