import { PATH_NAME } from '@/shared/model';
import { PERSONAL_PATH } from '@/shared/model/path';
import { api } from '@/shared/utils';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import KakaoProvider from 'next-auth/providers/kakao';
import NaverProvider from 'next-auth/providers/naver';

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID!,
      clientSecret: process.env.NAVER_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const { data } = await api.post('/api/auth/login', credentials);

          if (data) {
            return data;
          }
        } catch (e) {
          console.log('🚀 ~ authorize ~ e:', e);
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: 'jwt' as const,
    maxAge: 60 * 60 * 24,
  },

  callbacks: {
    async signIn({ user }) {
      try {
        console.log('🚀 ~ signIn ~ user:', user);
        // const res = await fetch(`/api/auth/check-user?id=${user.id}`);
        // const { isNewUser } = await res.json();

        const isNewUser = true;

        if (isNewUser) {
          return PATH_NAME.PERSOANL(PERSONAL_PATH.JOIN); // 새 회원: 회원 정보 입력 FORM 리다이렉트
        }

        return true; // 기존 회원: 바로 로그인
      } catch (e) {
        console.error(e);
        return false;
      }
    },
    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
      }
      if (user) {
        token.id = user.id;
        token.active = user.active;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.active = token.active;
      session.accessToken = token.accessToken;
      return session;
    },
  },
  pages: {
    signIn: PATH_NAME.AUTH.LOGIN,
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
