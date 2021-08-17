export interface Card {
    id: number;
    name: string;
    username: string;
    email:string;
    company:{ 
        name:string,
    }

    address:{
        city:string,
        street:string,
    }
       
    
}
