import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, username,  password, subscribed } = await req.json();
  const emailExists = await prisma.user.findUnique({
    where: {
      email,
    },
  });

    const usernameExists = await prisma.user.findUnique({
      where: {
        username,
    },
  });

  if (emailExists || usernameExists) {
    return NextResponse.json({ error: "Username or Email already exists" }, { status: 400 });
  } else {
    const user = await prisma.user.create({
      data: {
        email,
        username,
        password: await hash(password, 10),
        subscribed
      },
    });
    return NextResponse.json(user);
  }
}
