export interface services{
    image:string;
    title: string;
    subtitle: string;
    description: string;
    logo:string
    bestfit:string[];
    features:string[];
    benefits:benefits[]
    support:string;
    contact:string;
    brochure:string
}

export interface about_info{
    image:string;
    title: string;
    subtitle: string;
    description: string;
}

export interface benefits{
    heading: string;
    description: string;
    image: string;
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
    position:string
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

export interface news{
    country : string
    created_at: string
    description : string
    image : string
    slug : string
    title: string
}