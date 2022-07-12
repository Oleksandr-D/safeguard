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

  nameRegExp: RegExp = /^([A-Za-zА-Яа-я-']{2,}\s[A-Za-zА-Яа-я]{1,}'?-?[A-Za-zА-Яа-я]{2,}\s?([A-Za-zА-Яа-я]{1,})?)/;
  companyRegExp: RegExp = /^[A-Za-zА-Яа-я-']{2,}\s?[A-Za-zА-Яа-я]{2,}/;
  phoneRegExp: RegExp = /^[0-9-+]{10,}$/;
  emailRegExp: RegExp = /^[a-z0-9_.&#]+[^\s@]+@[^\s@]+[.][^\s@\W]{1,3}$/;
  statusName = false;
  statusCompany = false;
  statusPhone = false;
  statusEmail = false;
  name!: any;
  company!: any;
  phone!: any;
  email!: any;
  checked = false;

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
    this.checkForm();
  }

  validateName() {
    this.name = this.nameRegExp.test(this.contactForm.value.fname);
    if (this.name) {
      this.statusName = false;
    } else {
      this.statusName = true;
    }
  };

  validateCompany() {
    this.company = this.companyRegExp.test(this.contactForm.value.cname);
    if (this.company) {
      this.statusCompany = false;
    } else {
      this.statusCompany = true;
    }
  }

  validatePhone() {
    this.phone = this.phoneRegExp.test(this.contactForm.value.pnumber);
    if (this.phone) {
      this.statusPhone = false;
    } else {
      this.statusPhone = true;
    }
  }

  validateEmail() {
    this.email = this.emailRegExp.test(this.contactForm.value.email);
    if (this.email) {
      this.statusEmail = false;
    } else {
      this.statusEmail = true;
    }
  }

  checkForm(): void {
    if (this.name && this.company && this.phone && this.email) {
      this.checked = true;
      console.log('success', this.contactForm.value);

      this.contactForm.reset();
    } else {
      this.checked = false;
      console.log('error');
    }
  }

}