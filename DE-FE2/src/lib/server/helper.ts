import axios from 'axios';
import {newUser, property, user} from '@/types/index';
const url = "http://localhost:3000/api/v1"

export class Service{
    async register(user: newUser){
        try {
            const response = await axios.post(`${url}/user/register`,user)
            if (response) {
                return this.login({
                    username: user.username,
                    email: user.email,
                    password: user.password})
            }else{
                return null
            }
        } catch (error) {
            console.log("at register");
        }
        
    }

    async login(user: user){
        try {
            const res =  await axios.post(`${url}/user/login`,user,{withCredentials:true})
            // console.log(res.data.data);
            if (res) {
                return res
            }else{
                return null
            }
        } catch (error) {
            console.log("at login");
        }
    }

    async logout(){
        try {
            return await axios.get(`${url}/user/logout`,{withCredentials:true})
        } catch (error) {
            console.log("at logout");
        }
    }

    async getUserdata(){
        try {
            const data = await axios.get(`${url}/user/getUser`,{withCredentials:true})
            if (data) {
                // return data
                return data.data.data
            }else{
                return null
            }
        } catch (error) {
            console.log("at fetch user");
        }
    }

    async getProperties({pageParam=1}){
        try {
            const response =  await axios.get(`${url}/property/?page=${pageParam}&limit=3`)
            const responseData = response.data;
            // const dataArray = responseData.data;
            // console.log(dataArray);
            return responseData
        } catch (error) {
            console.log("at fetch properties");
        }
    }

    async postProperty(property: property){
        try {
            // console.log({propertyTitle, locality,price1,price2, typo, bedrooms,typeOfProperty,image1,image2});
            return await axios.post(`${url}/property/add-property`,property,{headers:{'Content-Type': 'multipart/form-data'},withCredentials:true})
        } catch (error) {
            console.log("at post property");
        }
    }

    async getUserProperties(){
        try {
            const response =  await axios.get(`${url}/user/user-property`,{withCredentials:true})
            const responseData = response.data;
            const dataArray = responseData.data;
            // console.log(dataArray[0].yourProperty);

            return dataArray[0].yourProperty
        } catch (error) {
            console.log("at post property");
            throw error
        }
    }

    async getPropertyById(id:string){
        
        try {
            const res = await axios.get(`${url}/property/property/${id}`,{withCredentials:true})
            return res.data
        } catch (error) {
            console.log(error);
            throw error
        }
    }
}


const service = new Service()
export default service