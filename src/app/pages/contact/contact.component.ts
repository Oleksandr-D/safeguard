import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  constructor(
    private fb: FormBuilder
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
    console.log(this.contactForm.value)
  }




}