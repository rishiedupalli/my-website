import prisma from "@/lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"
import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export async function POST(req: Request) {
    const { courseTitle, desc1, desc2, desc3 } = await req.json()

    const session = await getServerSession(authOptions)

    if (!session || !session.role === 'WEBMASTER') {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const courseExists = await prisma.course.findUnique({
        where: {
            title: courseTitle
        }
    })

    if (courseExists) {
        return NextResponse.json({ error: "Course Already Exists" }, { status: 400 });
    } else {
        const newCourse = await prisma.course.create({
            data: {
                title: courseTitle,
                desc1: desc1,
                desc2: desc2,
                desc3: desc3
            },
        });
        return NextResponse.json(newCourse);
    }
}