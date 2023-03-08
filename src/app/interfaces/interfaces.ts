export interface services{
    image:string;
    title: string;
    description: string;
}

 export interface CoverageContent{ 
          image:string
          content:string 
          title:string   
}


export interface Countries {
    header:{
        height:string,
        title:string[],
        image:string[],
        content:string[]
    }
    country:string
    search:boolean
    link:boolean
    button:boolean,
}

export interface LatestNewsContent{
    title:string,
    content:string
    image:string
    country:string
}

export interface Offer{
    image:string
    title:string
    content:string
}
export interface authorities{
    name:string;
    image:string;
    rank: string;
    description: string;
}

export interface order{
    country_id:string;
    product_id:string;
    email:string
}

export interface contactus{
    country_id:string;
    firstname:string;
    lastname:string;
    email:string;
    phone:string;
    subject:string;
    message:string;
}