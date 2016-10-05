import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.fillArray();
    this.title = "Tic Tac Toe";

  }

  private nextTurn:string = "X";

  private gameStatus:string;

  private fillArray()
  {
    for (let array of this.board)
      for (let position of array)
      {
        position = " ";
        
      }
  }

  public board: String[][] = [[" ", " ", " "],[" ", " ", " "],[" ", " ", " "]];

  public title: string;

  public  boardClicked(x:number, y:number)
  {
    //this.fillArray();
    console.log("board clicked: ("+x + ", "+y+")");
    this.board[x][y] = this.nextTurn;
    console.log("added a "+this.nextTurn);
    this.nextTurn = (this.nextTurn == "X" ? "O" : "X");

    if (this.gameWon())
    {// An alert dialog
      let alert = this.alertCtrl.create({
        title: 'Game Over!',
        subTitle: this.gameStatus,
        buttons: [{text: 'ok', handler: () => this.board = [[" ", " ", " "],[" ", " ", " "],[" ", " ", " "]] }]
      }
      );
      alert.present();
      // this.board = [[" ", " ", " "],[" ", " ", " "],[" ", " ", " "]];
       // comment
    }
  }

  public gameWon()
  {
    let winner:any = " ";
    if (this.board[0][0] == this.board[0][1] && this.board[0][1] == this.board[0][2]) winner = this.board[0][2];
    else if (this.board[1][0] == this.board[1][1] && this.board[1][1] == this.board[1][2]) winner = this.board[1][2];
    else if (this.board[2][0] == this.board[2][1] && this.board[1][1] == this.board[2][2]) winner = this.board[2][2];
    
    else if (this.board[0][0] == this.board[1][0] && this.board[1][0] == this.board[2][0]) winner = this.board[2][0];
    else if (this.board[0][1] == this.board[1][1] && this.board[1][1] == this.board[2][1]) winner = this.board[2][1];
    else if (this.board[0][2] == this.board[1][2] && this.board[1][2] == this.board[2][2]) winner = this.board[2][2];
    
    else if (this.board[0][0] == this.board[1][1] && this.board[1][1] == this.board[2][2]) winner = this.board[2][2];
    else if (this.board[0][2] == this.board[1][1] && this.board[1][1] == this.board[2][0]) winner = this.board[2][0];
    

    if (winner == "X" || winner == "O")
    {
      this.gameStatus = "The winner is "+ winner;
     
      return true;
    } 
    winner = " ";  
    return false;
  }
}
