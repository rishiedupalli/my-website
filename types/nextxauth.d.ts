export enum Role {
    USER = "USER",
    ASMIN = "ADMIN",
    WEBMASTER = "WEBMASTER",
}

import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
        id: number | null,
        email: string | null,
        username: string | null,
        role: Role | null
    }
  }
}

type Session = {
  
}