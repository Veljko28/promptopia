import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req: Request, {params}: any) => {
    try {
        await connectToDB();
        const prompt =
        await Prompt.findById(params.id).populate('creator');
        if (!prompt) return new Response("Prompt not found", {status: 404});

        return new Response(JSON.stringify(prompt), {
            status: 200
        })
    }
    catch (err){
        console.error(err);
        
        return new Response("Failed to fetch all prompts", {
            status: 500
        })
    }
}


export const PATCH = async () => {
    
}

