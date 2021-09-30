import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    $(document).ready(function () {
      $("label.signup").click(function () {
        $('form.login').css('marginLeft', '-50%');
        $('form.login').css('marginLeft', '-50%');
      });
      $("label.login").click(function () {
        $('form.login').css('marginLeft', '0%');
        $('form.login').css('marginLeft', '0%');
      });
      $("label.login").click(function () {
        $('form.login').css('marginLeft', '0%');
        $('form .signup-link a').css('marginLeft', '0%');
      });
    });
  }

}
