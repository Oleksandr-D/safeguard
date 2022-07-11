import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  ValidateFormService
} from 'src/app/shared/services/validate-form.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
 
  nameRegExp: RegExp = /^[A-Za-zА-Яа-я]{5,40}$/;
  conpanyRegExp: RegExp = /^[A-Za-zА-Яа-я]{3,30}$/;
  phoneRegExp: RegExp = /^[0-9]{13,14}$/;
  emailRegExp: RegExp = /^[a-z0-9_.&#]+[^\s@]+@[^\s@]+[.][^\s@\W]{1,3}$/;
  status = false;
  name!: any;
  conpany!: any;
  phone!: any;
  email!: any;


  constructor(
    private fb: FormBuilder,
    private validateService: ValidateFormService
  ) {}

  ngOnInit(): void {
    this.initContactForm();
  }

  scrlTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }
  initContactForm(): void {
    this.contactForm = this.fb.group({
      fname: [null, Validators.required],
      cname: [null, Validators.required],
      pnumber: [null, Validators.required],
      email: [null, Validators.required],
      userMessage: [null, Validators.required]
    })
  }


  sendMesg(): void {
    console.log(this.contactForm.value.fname)
    this.checkSignIn();
    this.contactForm.reset();
  }

  checkSignIn():void{
    this.name = this.nameRegExp.test(this.contactForm.value.fname);
    this.conpany = this.conpanyRegExp.test(this.contactForm.value.cname);
    console.log('Works ==>', this.status);
    if (this.name && this.conpany) {
      this.status = false;
      // return this.status;
    } else {
      this.status = true;
    
      // return this.status;

    };
    
    
  }

}