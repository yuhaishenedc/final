


function layer1(){ //line number 4
    var a=900;

    /*
    function test(a,b){
        return a+b;
    }
    */

    function layer2(){   //line number 6
        return function layer3(){   //line number 7
            return function layer4(c,d){    //line number 8
                //return a+test(c,d);
                return a+c+d;
            }
        }
    }
    //need to call layer2 here and test
    return layer2;
}

//let tmp=200;

//const f=layer1(tmp);

const f=layer1();

var x=f()()(100,100);

//var y=f()()(100,200);

//var z=f()()(100,300);

console.log(x);
//console.log(y);
//console.log(z);

