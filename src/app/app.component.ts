import { Component, OnInit } from '@angular/core';
import { MyDet } from './shared/det.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project11dz';
  dets: MyDet[] = [];
  name: string;
  status = true;


  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      let card: MyDet = { id: i, name: 'Card' + i, status: Boolean(Math.floor(Math.random() * 2)) }
      this.dets.push(card);
    }
  }

  onDeleteCard(id: number) {
    let index = this.dets.findIndex(det =>
      det.id === id);
    if (index !== -1) {
      this.dets.splice(index, 1);
    }
  }

  onAddCard() {
    let det: MyDet = {
      name: this.name,
      status: this.status
    };
    if (typeof det.name !== 'undefined') {
      det.name = det.name.replace(/\s+/g, '');
      if (det.name.length > 0) {
        let id = this.dets.length > 0 ? this.dets[this.dets.length - 1].id + 1 : 0;
        det.id = id;
        this.dets.push(det);
      } else
        alert('Проверьте правильность введенных данных');
    } else
      alert('Проверьте правильность введенных данных');
  }

}
