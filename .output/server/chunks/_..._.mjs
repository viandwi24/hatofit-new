import CredentialsProvider from 'next-auth/providers/credentials';
import { E as ERROR_MESSAGES, d as defu, e as eventHandler, s as setCookie, a as appendHeader, b as sendRedirect, u as useTypedBackendConfig, c as useRuntimeConfig, g as getRequestURLFromRequest, p as parseCookies, f as getHeaders, h as getMethod, i as getQuery, j as createError, k as isMethod, r as readBody } from './nitro/node-server.mjs';
import { AuthHandler } from 'next-auth/core';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'requrl';
import 'node:fs';
import 'node:url';
import 'ipx';

let preparedAuthHandler;
let usedSecret;
const SUPPORTED_ACTIONS = ["providers", "session", "csrf", "signin", "signout", "callback", "verify-request", "error", "_log"];
const useConfig = () => useTypedBackendConfig(useRuntimeConfig());
const readBodyForNext = async (event) => {
  let body;
  if (isMethod(event, "PATCH") || isMethod(event, "POST") || isMethod(event, "PUT") || isMethod(event, "DELETE")) {
    body = await readBody(event);
  }
  return body;
};
const parseActionAndProvider = ({ context }) => {
  const params = context.params?._?.split("/");
  if (!params || ![1, 2].includes(params.length)) {
    throw createError({ statusCode: 400, statusMessage: `Invalid path used for auth-endpoint. Supply either one path parameter (e.g., \`/api/auth/session\`) or two (e.g., \`/api/auth/signin/github\` after the base path (in previous examples base path was: \`/api/auth/\`. Received \`${params}\`` });
  }
  const [unvalidatedAction, providerId] = params;
  const action = SUPPORTED_ACTIONS.find((action2) => action2 === unvalidatedAction);
  if (!action) {
    throw createError({ statusCode: 400, statusMessage: `Called endpoint with unsupported action ${unvalidatedAction}. Only the following actions are supported: ${SUPPORTED_ACTIONS.join(", ")}` });
  }
  return { action, providerId };
};
const NuxtAuthHandler = (nuxtAuthOptions) => {
  usedSecret = nuxtAuthOptions?.secret;
  if (!usedSecret) {
    {
      throw new Error(ERROR_MESSAGES.NO_SECRET);
    }
  }
  const options = defu(nuxtAuthOptions, {
    secret: usedSecret,
    logger: void 0,
    providers: [],
    trustHost: useConfig().trustHost
  });
  const getInternalNextAuthRequestData = async (event) => {
    const nextRequest = {
      host: getRequestURLFromRequest(event, { trustHost: useConfig().trustHost }),
      body: void 0,
      cookies: parseCookies(event),
      query: void 0,
      headers: getHeaders(event),
      method: getMethod(event),
      providerId: void 0,
      error: void 0
    };
    if (event.context.checkSessionOnNonAuthRequest === true) {
      return {
        ...nextRequest,
        method: "GET",
        action: "session"
      };
    }
    const query = getQuery(event);
    const { action, providerId } = parseActionAndProvider(event);
    const error = query.error;
    if (Array.isArray(error)) {
      throw createError({ statusCode: 400, statusMessage: "Error query parameter can only appear once" });
    }
    const body = await readBodyForNext(event);
    return {
      ...nextRequest,
      body,
      query,
      action,
      providerId,
      error: String(error) || void 0
    };
  };
  const handler = eventHandler(async (event) => {
    const { res } = event.node;
    const nextRequest = await getInternalNextAuthRequestData(event);
    const nextResult = await AuthHandler({
      req: nextRequest,
      options
    });
    if (nextResult.status) {
      res.statusCode = nextResult.status;
    }
    nextResult.cookies?.forEach((cookie) => setCookie(event, cookie.name, cookie.value, cookie.options));
    nextResult.headers?.forEach((header) => appendHeader(event, header.key, header.value));
    if (!nextResult.redirect) {
      return nextResult.body;
    }
    if (nextRequest.body?.json) {
      return { url: nextResult.redirect };
    }
    return sendRedirect(event, nextResult.redirect);
  });
  if (preparedAuthHandler) {
    console.warn("You setup the auth handler for a second time - this is likely undesired. Make sure that you only call `NuxtAuthHandler( ... )` once");
  }
  preparedAuthHandler = handler;
  return handler;
};

const _____ = NuxtAuthHandler({
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/auth/login",
    error: "/auth/login",
    signOut: "/auth/login",
    newUser: "/register"
  },
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        // email & password
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" }
      },
      authorize(credentials, { query }) {
        const user = { id: "1", name: "J Smith", email: "test@mail.com", password: "password", avatar: "https://www.gravatar.com/avatar/" };
        if ((query == null ? void 0 : query.email) === user.email && (query == null ? void 0 : query.password) === user.password) {
          return user;
        } else {
          console.error("Warning: Malicious login attempt registered, bad credentials provided");
          return null;
        }
      }
    })
  ],
  callbacks: {
    jwt: async (arg) => {
      const { token, user } = arg;
      try {
        if (user) {
          token.data = user;
        }
        return token;
      } catch (error) {
        throw error;
      }
    },
    session: async ({ session, token, user }) => {
      try {
        if (token.data) {
          session.user = token.data;
        }
        console.log("session", session);
        return session;
      } catch (error) {
        throw error;
      }
    }
  }
});

export { _____ as default };
//# sourceMappingURL=_..._.mjs.map
