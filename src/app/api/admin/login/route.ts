import { NextResponse } from "next/server";
import server from "@/utils/axios-server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { id, password } = body;

        const response = await server.post('/admin/login', {
            id,
            password
        });

        return NextResponse.json(response.data, { status: response.status });
    }
    catch(error){
        console.error('[ERROR]: ', error);
    }
}