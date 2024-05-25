import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { SportService } from '../../service/sport.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent implements OnInit{
  Sport: any = [
    {
      img: 'assets/index/facebook.png',
      createdAt: 'facebook premier',
      name: 'level agency partner0',
    },
  ];
  constructor(public sportService: SportService) {}

  ngOnInit() {
    this.getSport();
  }

  getSport() {
    this.sportService.getSport().subscribe((res) => {
      console.log(res);
      this.Sport = res;
    });
  }

  createRandomSport() {
    let obj = {};

    this.sportService.createRandomSport(obj).subscribe((res) => {
      this.getSport();
    });
  }

  deleteSport(id: string) {
    this.sportService.deleteSport(id).subscribe((res) => {
      this.getSport();
    });
  }
}




