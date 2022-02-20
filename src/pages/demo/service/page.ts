import { object2params } from '../utils';
import { get, post } from './base';

export interface IPage {
  id: number;
  name: string;
  desc: string;
  appCode: string;
  pageCode: string;
  ownerName: string;
  ownerWorkId: string;
  deleteAt?: any;
  createdAt: string;
  updatedAt: string;
}


export function getPageList(data: Partial<IPage>) {
  return get<IPage[]>(
    `/api/v1/page/list?pageIndex=1&pageSize=100&${object2params(data)}`
  );
}

export function createPage(data: Partial<IPage>) {
  return post<any>('/api/v1/page', data);
}
