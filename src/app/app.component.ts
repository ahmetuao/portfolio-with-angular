import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-with-angular';
  showMe:boolean=false;
  text:string= "Angular";
  textProje: Array<any> = [
    'Angular Proje 1', 'Angular Proje 2', 'Angular Proje 3', 'Angular Proje 4' 
  ];
  constructor(){}

  ngOnInit(){}

  id:any = "hakkımda";
  tabChange(ids:any){
    this.id = ids;
  }

  idProje:any = "html";
  tabChangeProje(x:any){
    this.idProje = x;
    console.log(this.idProje);
  }

  idHtmlProje:any = "proje1";
  tabChangeHtmlProje(y:any){
    this.
    idHtmlProje = y;
  }

  idJs:any = "";
  tabChangeJs(z:any){
    this.idJs = z;
  }

  toggleTag(){
    this.showMe=!this.showMe
  }

  js(text:string){
    this.text = text
  }

  jsProje(textProje:Array<String>){
    this.textProje = textProje;
  }

  
}
