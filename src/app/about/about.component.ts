import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import{Router} from '@angular/router';
import{ DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {
goals:any;
  constructor(private route:ActivatedRoute,private router:Router,private _dataService:DataService) {
    this.route.params.subscribe(res=>console.log(res.id));
   }

  ngOnInit() {
    this._dataService.goal.subscribe(res=>this.goals=res);
  }

  sendMeHome(){
    this.router.navigate(['']);
  }
}
