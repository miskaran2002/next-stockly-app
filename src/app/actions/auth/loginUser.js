"use server";

import { collectionNamesObj, mongodbConnect } from "@/lib/mongodb";
import bcrypt from "bcrypt";

export const loginUser = async (payload) => {
    const { email, password } = payload;

    // MongoDB connect
    const userCollection = await mongodbConnect(collectionNamesObj.userCollection);

    // Validation
    const user = await userCollection.findOne({ email });
    if (!user) return null;

    // Password check
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return null;

    // 
    return user;
};
