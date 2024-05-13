import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials, req) {
        const url = process.env.NEXT_PUBLIC_API_URL + '/auth/token';
        const formData = new URLSearchParams();
        formData.append('email', credentials.email);
        formData.append('password', credentials.password);
        const res = await fetch(url, {
          method: "POST",
          headers: { "Accept": "application/json" },
          body: formData
        });
        if (!res.ok) {
          return {
            id: 1,
            email: credentials.email,
            token:'11111111111'
          };
          return await res.json();
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/login',
    newUser: '/register'
  }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }