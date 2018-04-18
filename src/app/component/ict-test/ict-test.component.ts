import { Component, OnInit } from '@angular/core';
import { IctTestService } from '../../Service/ict-test.service';

@Component({
  selector: 'app-ict-test',
  templateUrl: './ict-test.component.html',
  styleUrls: ['./ict-test.component.css'],
})
export class IctTestComponent implements OnInit {

  constructor(
    private ictTestService: IctTestService,
  ) { }

  ngOnInit() {}

}
