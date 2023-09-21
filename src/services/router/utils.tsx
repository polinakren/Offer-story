import { compile } from 'path-to-regexp';
import qs from 'qs';

export interface NavigateOptions<TState> {
  state?: TState;
  replace?: boolean;
}

type RouteConfig = {
  name: string;
  params?: RouteParams;
  query?: RouteParams;
};

type RouteParams = {
  [key: string]: number | boolean | string;
};

const cache: Record<string, () => void> = {};
const cacheLimit = 10000;
let cacheCount = 0;

function compilePath(path: string) {
  if (cache[path]) return cache[path];

  const generator = compile(path);

  if (cacheCount < cacheLimit) {
    cache[path] = generator;
    cacheCount++;
  }

  return generator;
}

function generateUri(path = '/', params = {}) {
  return compilePath(path)(params);
}

type NavigateParams = Omit<RouteConfig, 'name'> & {
  options?: NavigateOptions<unknown>;
};

const getUri = (to: string, opts?: NavigateParams) => {
  const str = qs.stringify(opts?.query);
  const uri = generateUri(to, opts?.params);
  return str ? `${uri}?${str}` : uri;
};

type To =
  | string
  | (RouteConfig & {
      options?: NavigateOptions<unknown>;
    });

export const buildUri = (to: To) => {
  if (typeof to !== 'string') {
    return {
      uri: getUri(to.name, { ...to }),
      options: to.options,
    };
  }
  return {
    uri: getUri(to),
  };
};
