class car{
    company: string;
    color: string;
    price:number    ;
    constructor(company:string, color:string, price:number){
        this.company = company;
        this.color = color;
        this.price = price;


        
    }
    
}

var result = new car("Honda","red",9230);
console.log(result);

var result2 = new car("Kia","black",3230);
console.log(result2);
var result3 = new car("Toyota","black",9230);
 console.log(result3);
 var result4 = new car("Elantra","black",6130)
 console.log(result4);

 class car1 extends car{
 
    super(height:string,width:string){
        this.height =height;
        this.width = width;
    
    }
 }