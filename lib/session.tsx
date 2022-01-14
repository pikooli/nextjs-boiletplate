// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextApiHandler
} from 'next';
import type { IronSessionOptions } from 'iron-session';
import { withIronSessionSsr, withIronSessionApiRoute } from 'iron-session/next';
import _ from 'lodash';

// This is where we specify the typings of req.session.*
declare module 'iron-session' {
  interface IronSessionData {
    user: User;
  }
}

export const sessionOptions: IronSessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD as string,
  cookieName: process.env.COOKIE_NAME as string,
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production'
  }
};

//  ============================= Api ==========================================

// this if for the api router
export function withSessionRoute(handler: NextApiHandler) {
  return withIronSessionApiRoute(handler, sessionOptions);
}

// this if for the api router
export function withApiGuard(handler: NextApiHandler) {
  return withIronSessionApiRoute(async (req, res) => {
    if (!req.session.user) {
      // need to check db for the correct data ? normally this should be enought
      res.status(403).redirect('/signin');
      return;
    }
    return handler(req, res);
  }, sessionOptions);
}

//  ============================= Page ==========================================

// this if for the page router
export function withSessionSsr<
  P extends { [key: string]: unknown } = { [key: string]: unknown }
>(
  handler: (
    context: GetServerSidePropsContext
  ) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>
) {
  return withIronSessionSsr(handler, sessionOptions);
}

// this if for the page router that need authentication
export function withGuard<
  P extends { [key: string]: unknown } = { [key: string]: unknown }
>(
  handler: (
    context: GetServerSidePropsContext
  ) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>
) {
  const secure = async (context: GetServerSidePropsContext) => {
    if (!context.req.session.user?.is_logged) {
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      };
    }
    return await handler(context);
  };
  return withSessionSsr(secure);
}
