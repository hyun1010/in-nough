import { PATH_NAME } from '@/shared/model';
import { IconHome } from '@tabler/icons-react';

export const project_data = [
  {
    title: '프로젝트1',
    author: '이것은 프로젝트1 입니다.',
  },
  {
    title: '프로젝트2',
    author: '이것은 프로젝트2 입니다.',
  },
  {
    title: '프로젝트3',
    author: '이것은 프로젝트3 입니다.',
  },
];

export const menu_items = [
  { name: 'Dashboard', href: PATH_NAME.WORKSPACE.MAIN, icon: IconHome },
  { name: 'Tasks', href: PATH_NAME.WORKSPACE.TASKS, icon: IconHome },
];

export const company_list = [
  { id: 1, name: '구글' },
  { id: 2, name: '네이버' },
  { id: 3, name: '카카오' },
];
