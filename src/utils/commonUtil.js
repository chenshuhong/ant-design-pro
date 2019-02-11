/* eslint-disable import/prefer-default-export */
/**
 * @Author: 陈树鸿
 * @Date: 2019-02-12
 */

/**
 * 模拟耗时操作
 * @param time
 * @returns {Promise<any>}
 */
export function sleep(time = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
