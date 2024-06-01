import NextAuth from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';

const handler = NextAuth({
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 30,
  },
  // jwt: {
  //   secret: process.env.NEXTAUTH_URL
  // },
  callbacks: {
    async jwt({ account, token }) {
      if (account) {
        token = { ...token, accessToken: account.access_token };
      }
      return token;
    },
    async session({ session, token }) {
      const newSession = { ...session, accessToken: token.accessToken };
      return newSession;
    },
  },
});

export { handler as GET, handler as POST };
