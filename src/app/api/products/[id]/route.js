// src/app/api/products/[id]/route.js
import { mongodbConnect } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
    try {
        const { id } = params; // URL theke id

        if (!ObjectId.isValid(id)) {
            return new Response(
                JSON.stringify({ message: "Invalid product ID" }),
                { status: 400 }
            );
        }

        const productsCollection = await mongodbConnect("products");
        const product = await productsCollection.findOne({ _id: new ObjectId(id) });

        if (!product) {
            return new Response(
                JSON.stringify({ message: "Product not found" }),
                { status: 404 }
            );
        }

        return new Response(JSON.stringify(product), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("❌ Error fetching product:", error);
        return new Response(
            JSON.stringify({ message: "Failed to fetch product", error: error.message }),
            { status: 500 }
        );
    }
}
