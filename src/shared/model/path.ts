export const COMPANY_PATH = {
  ROOT: '',
  JOIN: 'join',
  REGISTER: 'register',
};

export const PATH_NAME = {
  HOME: '/',
  AUTH: {
    LOGIN: '/login',
    SIGNUP: '/signup',
  },
  COMPANY: (subPath: (typeof COMPANY_PATH)[keyof typeof COMPANY_PATH] = '') =>
    `/company${subPath ? `/${subPath}` : ''}`,

  WORKSPACE: {
    MAIN: '/main',
    TASKS: '/tasks',
  },
};
