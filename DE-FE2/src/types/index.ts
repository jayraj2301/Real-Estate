
export type newUser = {
    username:string, email:string,password:string,mobile_no:string
}

export type user = {
    username:string, email:string,password:string
}

export type getUser = {
    id: string, username:string, email:string,mobile_no:string
}

export type property = {
    _id:string
    propertyTitle:string,
    locality:string,
    price1:number,
    price2:number, 
    typo:string, 
    bedrooms:number,
    typeOfProperty:string,
    image1:File,
    image2:File
}
export type getProperty = {
    _id:string,
    propertyTitle:string,
    locality:string,
    price1:number,
    price2:number, 
    typo:string, 
    bedrooms:number,
    typeOfProperty:string,
    images: []
}

export type NavLinks = {
    imgUrl: string,
    route: string,
    label: string
}