import { Component, OnInit } from '@angular/core';
import { TechService } from '../../config/services/tech.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  response: any;

  constructor(private Service: TechService) { }

  ngOnInit(): void {
    this.Service.TechNews().subscribe((response) => {
      this.response = response;
    });
  }

}
