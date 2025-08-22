"use server";

import { collectionNamesObj, mongodbConnect } from "@/lib/mongodb";


export const registerUser = async (payload) => {
    const userCollection = mongodbConnect(collectionNamesObj.userCollection)
    // validation
    const {email,name, password} = payload;
    if (!email || !name || !password) 
     return {success:false};
    const user = await userCollection.findOne({ email: payload.email });
   if (user) {
       const result = await userCollection.insertOne(payload);
       return result;

    }
    return {success: false};



}