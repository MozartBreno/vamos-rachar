import { Component } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage
{  
  quantidadePessoas: number;;
  valorTotal: number;
  resultado: number = 0.0;
  constructor( public socialSharing: SocialSharing)
  {
  }

  dividir(){
    if(this.valorTotal == null || this.quantidadePessoas == null){
      this.resultado = 0;
    }
    else{
      this.resultado = this.valorTotal /this.quantidadePessoas;
    }
  }
  normalShare() {
    this.socialSharing.share("Compartilhando o conteúdo de um aplicativo com o Social Sharing.", null, "www/assets/images/ionic-logo.png", null);
  }
  falar(){
  //   this.tts.speak(this.resultado.toString())
  // .then(() => console.log('Success'))
  // .catch((reason: any) => console.log(reason));
  }
}
