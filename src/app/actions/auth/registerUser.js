"use server";

import { collectionNamesObj, mongodbConnect } from "@/lib/mongodb";
import bcrypt from "bcrypt";

export const registerUser = async (payload) => {
    // Await the connection to get the collection
    const userCollection = await mongodbConnect(collectionNamesObj.userCollection);

    let { email, fullName, password } = payload;

    let hasedPassword = await bcrypt.hash(password, 10);
    password = hasedPassword;

    // validation
    if (!email || !fullName || !password) {
        return { success: false, message: "All fields are required" };
    }

    // check if user already exists
    const existingUser = await userCollection.findOne({ email });
    if (existingUser) {
        return { success: false, message: "User already exists" };
    }

    // insert new user
    const result = await userCollection.insertOne({ email, fullName, password });
    if (result.insertedId) {
        return { success: true, message: "Registration successful" };
    }

    return { success: false, message: "Registration failed" };
};
