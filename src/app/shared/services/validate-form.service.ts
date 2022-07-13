import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ValidateFormService {
private url = environment.BACKEND_URL;
private api = {contact:`${this.url}/contact`};

  constructor() { }


}
