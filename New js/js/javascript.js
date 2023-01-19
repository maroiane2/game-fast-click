let mybutton = document.getElementById("mybutton");
let mybutton1 = document.getElementById("mybutton1");
let mybutton2 = document.getElementById("mybutton2");
let mybutton3 = document.getElementById("mybutton3");
let colecte = document.getElementById("colecte");
let Start = document.getElementById("Start");


Start.onclick = function () {
    this.style.display = "none"
    mybutton.style.display = "block"

    var s=20;
    var m=0;
    
    var time= setInterval(function() {timer()}, 1000);
    function timer(){
    
    
    s--;
    if(s == -1){
    m--;
    s=59;
    
    if(m == -1){
    m= 0;
    s= 0;
    
    clearInterval(time);
    alert("time is over");
    }
    }
    
    document.getElementById("m").innerHTML = m;
    document.getElementById("s").innerHTML = s;
    }
}
mybutton.onclick = function () {
mybutton.style.display = "none"
mybutton1.style.display = "block"
mybutton1.style.position = "relative"
mybutton1.style.top = "500px"
mybutton1.style.left = "400px"

}
mybutton1.onclick = function () {
    this.style.display = "none"
    mybutton2.style.display = "block"
    mybutton2.style.position = "relative"
    mybutton2.style.top = "234px"
    mybutton2.style.left = "1000px"
}
mybutton2.onclick = function () {
    this.style.display = "none"
    mybutton3.style.display = "block"
    mybutton3.style.position = "relative"
    mybutton3.style.top = "100px"
    mybutton3.style.left = "600px"
    
}
mybutton3.onclick = function () {
    this.style.top = "500px"
    this.style.left = "700px"
    mybutton3.onclick = function () {
            this.style.top = "300px"
            this.style.left = "600px"
        mybutton3.onclick = function () {
                this.style.top = "400px"
                this.style.left = "400px"
            mybutton3.onclick = function () {
                this.style.top = "100px"
                this.style.left = "1000px"
                mybutton3.onclick = function () {
                    this.style.top = "40px"
                    this.style.left = "800px"
                    this.style.width= "90px";
                    this.style.height= "90px";
                    this.style.opacity= "0.9";
                    mybutton3.onclick = function () {
                        this.style.top = "400px"
                        this.style.left = "40px"
                        this.style.width= "80px";
                        this.style.height= "80px";
                        this.style.opacity= "0.9";
                        mybutton3.onclick = function () {
                            this.style.top = "7px"
                            this.style.left = "1000px"
                            this.style.width= "70px";
                            this.style.height= "70px";
                            this.style.opacity= "0.9";
                            mybutton3.onclick = function () {
                                this.style.top = "400px"
                                this.style.left = "40px"
                                this.style.width= "60px";
                                this.style.height= "60px";
                                this.style.opacity= "0.8";
                                mybutton3.onclick = function () {
                                    this.style.top = "400px"
                                    this.style.left = "40px"
                                    this.style.width= "50px";
                                    this.style.height= "50px";
                                    this.style.opacity= "0.7";
                                    mybutton3.onclick = function () {
                                        this.style.top = "600px"
                                        this.style.left = "4px"
                                        this.style.width= "40px";
                                        this.style.height= "40px";
                                        this.style.opacity= "0.6";
                                        mybutton3.onclick = function () {
                                            this.style.top = "0px"
                                            this.style.left = "600"
                                            this.style.width= "30px";
                                            this.style.height= "30px";
                                            this.style.opacity= "0.5";
                                            mybutton3.onclick = function () {
                                                this.style.display = "none"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}






