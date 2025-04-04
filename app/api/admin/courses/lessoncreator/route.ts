import prisma from "@/lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"
import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export async function POST(req: Request) {
    const { /* a shit ton of data */ } = await req.json()

    const session = await getServerSession(authOptions)

    if (!session || !session.role === 'WEBMASTER') {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }


}