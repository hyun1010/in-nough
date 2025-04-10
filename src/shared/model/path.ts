export const COMPANY_PATH = {
  ROOT: '',
  JOIN: 'join',
  REGISTER: 'register',
};

export const PERSONAL_PATH = {
  ROOT: '',
  JOIN: 'join',
  INVITE: 'invite',
};

export const PATH_NAME = {
  HOME: '/',
  AUTH: {
    LOGIN: '/login',
    SIGNUP: '/signup',
  },
  WORKSPACE: {
    MAIN: '/main',
    TASKS: '/tasks',
  },
  COMPANY: (subPath: (typeof COMPANY_PATH)[keyof typeof COMPANY_PATH] = '') =>
    `/company${subPath ? `/${subPath}` : ''}`,

  PERSOANL: (subPath: (typeof COMPANY_PATH)[keyof typeof COMPANY_PATH] = '') =>
    `/personal${subPath ? `/${subPath}` : ''}`,
};
