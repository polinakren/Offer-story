import { useNavigate as useNavigateHook } from 'react-router-dom';

import { buildUri, NavigateOptions } from '~services/router/utils';

type RouteParams = {
  [key: string]: number | boolean | string;
};

type RouteConfig = {
  name: string;
  params?: RouteParams;
  query?: RouteParams;
};

type To =
  | string
  | (RouteConfig & {
      options?: NavigateOptions<unknown>;
    });

export const useNavigate = () => {
  const history = useNavigateHook();

  return (to: To) => {
    try {
      const { options, uri } = buildUri(to);
      if (uri) {
        return history(uri, { state: options?.state });
      }
    } catch (error) {
      console.error('Битая ссылка!', error);
    }
  };
};
