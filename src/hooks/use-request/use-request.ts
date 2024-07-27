import { DependencyList } from 'react';
interface Result {
  data: any;
  loading: boolean;
  error: any;
  refresh(): void;
}

interface Options {
  onSuccess(): void;
  onError(): void;
  refreshDeps: DependencyList;
  /**
   * 是否开启Suspense
   */
  suspense: boolean;
  defaultParams: any[];
}

/**
 * 实现一个useRequest的hooks
 * 需要实现以下几点
 * 1. 错误处理
 * 2. 竞态条件
 * 3. 数据更改和重新验证
 * 4. typescript 类型支持
 * 可选实现以下几点
 * 1. 数据缓存、缓存刷新
 * 2. 兼容 Suspense
 * 3. 兼容 React 18 Concurrent Rendering
 */
export function useRequest(fetcher: unknown, options?: Partial<Options>): Result {
  return {} as Result;
}
