import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import { compare } from "bcrypt";
import { userAgentFromString } from "next/server";
import { User } from "@prisma/client";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const { email, password } = credentials ?? {}
        if (!email || !password) {
          throw new Error("Missing email or password");
        }

        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });

        // if user doesn't exist or password doesn't match
        
        if (!user || !(await compare(password, user.password))) {
          throw new Error("Invalid username or password");
        }

        return user
      },
    }),
  ],
  callbacks: {
    session: ({session, token}) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          email: token.email,
          username: token.username,
          role: token.role
        }
      }
    },
    jwt: ({token, user}) => {

      if (user) {
        const u = user as unknown as User
        return {
          ...token,
          id: u.id,
          email: u.email,
          username: u.username,
          role: u.role
        }
      }

      return token
    }
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
