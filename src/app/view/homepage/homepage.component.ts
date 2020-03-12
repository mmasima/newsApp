import { Component, OnInit } from '@angular/core';
import { TechService } from '../../config/services/tech.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private call: TechService) { }

  ngOnInit(): void {
    this.call.TechNews.subscibe(())
  }

}
