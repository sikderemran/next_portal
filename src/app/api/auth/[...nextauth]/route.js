import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials, req) {
        const url = process.env.NEXT_PUBLIC_API_URL + '/login';
        const formData = new URLSearchParams();
        formData.append('email', credentials.email);
        formData.append('password', credentials.password);
        const res = await fetch(url, {
          method: "POST",
          headers: { 
            "Accept": "application/json" 
          },
          body: formData
        });
        const data = await res.json();
        if (res.ok && data.status=='success') {
          const loggeinUser={
            name:data.authorization.token
          }
          return loggeinUser
        }
        return null
      }
    })
  ],

  // callbacks: {
  //    jwt(token, user) {
  //     if (user) {
  //       token.name = user.name;
  //     }
  //     return token;
  //   },
  //    session(session, token) {
  //     if (token) {
  //       session.user = {
  //         name: token.name,
  //       };
  //       session.expires = token.expires;
  //     }
  //     return session;
  //   },
  // },
  // session: {
  //   jwt: true,
  // },
  // jwt: {
  //   secret: process.env.NEXTAUTH_SECRET,
  // },

  pages: {
    signIn: '/login',
    signOut: '/auth/signout',
    error: '/auth/error',
    newUser: '/register',
  }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }