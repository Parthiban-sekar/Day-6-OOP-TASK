// Q4 write a class to calculate the uber price.

class UberPrice{
    
    constructor(BaseFare, PerKm, Distance){
        this.BaseFare = BaseFare;
        this.PerKm = PerKm;
        this.Distance = Distance;
    }
       get Price(){
            return  `The person travelled ${this.Distance} km in uber.
               Perkm cost is ${this.PerKm}Rs
               Total Uber Price is Rs ${this.PerKm  * this.Distance}` 
       }  
}
 var FinalAmount = new UberPrice(50,20,30);  
 
 console.log(FinalAmount.Price);