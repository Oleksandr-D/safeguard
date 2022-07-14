import {
  HttpClient
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  Observable
} from 'rxjs';
import {
  environment
} from 'src/environments/environment';
import {
  IFormRequest,
  IFormResponse
} from '../interfaces/form.interface';

@Injectable({
  providedIn: 'root'
})
export class ValidateFormService {
  private url = environment.BACKEND_URL;
  private api = {
    contact: `${this.url}/contact`
  };

  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable < IFormResponse[] > {
    return this.http.get < IFormResponse[] > (this.api.contact);
  }

  create(contacts: IFormRequest): Observable < IFormResponse > {
    return this.http.post < IFormResponse > (this.api.contact, contacts);
  }
}