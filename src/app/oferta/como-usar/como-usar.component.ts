import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ComoUsarService } from 'src/app/como.usar.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [
    ComoUsarService
  ]
})
export class ComoUsarComponent implements OnInit {
  
  public comoUsar: string = '';
  constructor(private route:ActivatedRoute, private comoUsarService: ComoUsarService) { }

  ngOnInit() {
    const paramParent = this.route.parent.snapshot.params['id'];
    this.comoUsarService.getComoUsar(paramParent).then((descricao:string)=>{
      this.comoUsar = descricao;
    })
  }

}
