import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  success: boolean = false;
  errors: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
