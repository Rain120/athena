/*
 * @Author: Rainy
 * @Date: 2020-02-27 16:38:27
 * @LastEditors: Rainy
 * @LastEditTime: 2020-02-27 17:28:53
 */

// import copy from './utils/copy';

export default ({ Vue, options, router, siteData, isServer }) => {
  setTimeout(() => {
    try {
      //对document的判断是防止编译的时候报错
      document &&
        (() => {
          // copy();
        })();
    } catch (e) {
      console.error(e.message);
    }
  }, 500);
};
