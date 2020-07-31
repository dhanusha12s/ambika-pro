class Anything{
    constructor(){}



anything(){
    textSize(15);
    fill("red");
    text("currently nameless app", 150,190);
    rectMode(CENTER);
    rect(200,98,50,50);
    login = createButton("SIGN IN");
    signnn = createButton("SIGN UP");
    login.show();
    login.position(160, 210);
    //signnn.position(160, 260); 

    login.mousePressed(function(){
        appState = 1;
        haha1 = new Haha();
        login.style.visibility = "hidden"; 
        login.hide();
        signnn.hide();
    })

}

hide(){
    login.hide();
        signnn.hide();
}
}/*
class Form {

    constructor() {
     // this.input = createInput("Name");
      this.button = createButton('Play');
      //this.greeting = createElement('h2');
    }
    hide(){
     // this.greeting.hide();
      this.button.hide();
      //this.input.hide();
    }
  
    display(){
      var title = createElement('h2')
      title.html("Currently nameless app");
      title.position(130, 150);
  
      //this.input.position(displayWidth/2 - 30, displayHeight/2 -80);
      this.button.position(200,200);
  
      this.button.mousePressed(()=>{
        //this.input.hide();
        this.button.hide();
        //player.name = this.input.value();
        //playerCount+=1;
        //player.index = playerCount;
       // player.update();
        //player.updateCount(playerCount);
        //this.greeting.html("Hello " + player.name)
        //this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
  
    }
  }
  */