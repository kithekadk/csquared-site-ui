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
        title:string,
        image:string,
        content:string
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
}

export interface Offer{
    image:string
    title:string
}