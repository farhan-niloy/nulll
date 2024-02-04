// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import {exportAppRoute} from "next/dist/export/routes/app-route";
// import GithubProvider from "next-auth/providers/github"
// import {PrismaAdapter} from "@auth/prisma-adapter";
// import prisma from "@/utils/connect";
//
// const handler = NextAuth({
//     adapter: PrismaAdapter(prisma),
//     // Configure one or more authentication providers
//     providers: [
//         GithubProvider({
//             clientId: process.env.GITHUB_ID,
//             clientSecret: process.env.GITHUB_SECRET,
//         }),
//         GoogleProvider({
//             clientId:process.env.GOOGLE_CLIENT_ID??"",
//             clientSecret:process.env.GOOGLE_CLIENT_SECRET??"",
//         }),
//     ],
// });
//
// export {handler as GET, handler as POST};

import { authOptions } from "@/utils/auth";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
