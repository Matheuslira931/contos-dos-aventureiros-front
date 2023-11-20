import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {

  @Input() imgCard: any;
  @Input() titleCard = '';
  @Input() descriptionCard = '';
  @Input() iconName:any;

  constructor() { }

  ngOnInit(): void {
  }

}
