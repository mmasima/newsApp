import { Component, OnInit } from '@angular/core';
import { TechService } from '../../config/services/tech.service';
import { NewsModel } from '../../config/models/NewsDetails';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  response: any;
  more: boolean;
  article: NewsModel;
  selectedArticle: any;
  item: any;

  constructor(private Service: TechService) { }

  ngOnInit(): void {
    this.Service.TechNews().subscribe((response) => {
      this.response = response;
    });
    this.more = false;
  }
  readmore(item) {
    this.more = true;
    this.item = item;
    console.log(this.item);
  }
  basicmodal() {

  }

}
