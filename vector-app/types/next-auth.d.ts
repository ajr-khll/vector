import "next-auth"

declare module "next-auth" {
  interface Session {
    accessToken?: string
    user: {
      id?: string
      name?: string | null
      email?: string | null
      image?: string | null
      googleId?: string
    }
  }

  interface JWT {
    idToken?: string
    accessToken?: string
    googleId?: string
  }
}