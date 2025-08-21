// src/app/api/products/route.js
import { mongodbConnect } from "@/lib/mongodb";

export async function POST(req) {
    try {
        const body = await req.json();
        if (!body || Object.keys(body).length === 0) {
            return new Response(
                JSON.stringify({ message: "No product data provided" }),
                { status: 400 }
            );
        }

        const productsCollection = await mongodbConnect("products");

        const result = await productsCollection.insertOne(body);

        if (result.acknowledged) {
            console.log("Product added successfully:", result);
            return new Response(
                JSON.stringify({ message: "Product added successfully" }),
                { status: 201 }
            );
        } else {
            console.error("❌ Product insertion failed:", result);
            return new Response(
                JSON.stringify({ message: "Failed to add product" }),
                { status: 500 }
            );
        }
    } catch (error) {
        console.error("❌ Error adding product:", error);
        return new Response(
            JSON.stringify({ message: "Failed to add product", error: error.message }),
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        const productsCollection = await mongodbConnect("products");

        const products = await productsCollection.find({}).toArray();

        return new Response(JSON.stringify(products), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("❌ Error fetching products:", error);
        return new Response(
            JSON.stringify({ message: "Failed to fetch products", error: error.message }),
            { status: 500 }
        );
    }
}
