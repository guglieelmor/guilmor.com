import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-loader-site',
  templateUrl: './loader-site.component.html',
  styleUrls: ['./loader-site.component.scss']
})
export class LoaderSiteComponent implements AfterViewInit{

  public classOut: boolean;

  constructor(){
    this.classOut = false;
  }

  ngAfterViewInit() {
    setTimeout(() => {

      this.disableLoad();
      
    }, 0)
  }

  private disableLoad(): void{
    setTimeout(() => {

      this.classOut = true;

    }, 2000)
  }

}
