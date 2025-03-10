import { Component } from '@angular/core';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',  
  standalone: false, 
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'IMC';  

  // O ! garante que a variável vai ser inicializada depois, evitando avisos de null ou undefined
  peso!: number;
  altura!: any;
  imc!: number;
  classificacao!: string;
  imagem!: string;

  calcularIMC() {
    // Verifica se peso e altura foram fornecidos antes de calcular o IMC
    if (this.peso && this.altura) {
      this.formatarAltura(); // Chama a função para garantir que a altura está correta
      this.imc = this.peso / (this.altura * this.altura); // Fórmula do IMC
      this.definirClassificacao(); // Chama o método para definir a classificação do IMC
    }
  }

  definirClassificacao() {
    if (this.imc < 18.5) {
      this.classificacao = 'Abaixo do peso';
      this.imagem = 'imagens/baixo_peso.png';
    } 
    else if (this.imc < 24.9) {
      this.classificacao = 'Peso normal';
      this.imagem = 'imagens/peso_normal.png';
    } 
    else if (this.imc < 29.9) {
      this.classificacao = 'Sobrepeso';
      this.imagem = 'imagens/sobrepeso.png';
    } 
    else {
      this.classificacao = 'Obesidade';
      this.imagem = 'imagens/obesidade.png';
    }
  }

  // Método para colocar "," automaticamente na altura
  formatarAltura() {
    if (this.altura) {
      // Se o valor for maior que 100, divide por 100 para transformá-lo em metros
      if (this.altura >= 100) {
        this.altura = (this.altura / 100).toFixed(2);  // Divide por 100 e limita a 2 casas decimais
      }
      this.altura = parseFloat(this.altura.toString().replace(',', '.')); // Substitui vírgula por ponto e garante um número
    }
  }
}
