/*
 * @Author: Rainy
 * @Date: 2020-02-27 16:38:27
 * @LastEditors: Rainy
 * @LastEditTime: 2020-02-27 18:20:34
 */

export default (userName = 'Rain120') => {
  function addCopy(e) {
    let copyTxt = '';
    e.preventDefault(); // 取消默认的复制事件
    copyTxt = window.getSelection(0).toString();
    copyTxt = `${copyTxt}\n作者：${userName}\n原文：${window.location.href}\n著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。`;
    const clipboardData = e.clipboardData || window.clipboardData;
    clipboardData.setData('text', copyTxt);
  }
  document.addEventListener('cut', e => {
    addCopy(e);
  });
  document.addEventListener('copy', e => {
    addCopy(e);
  });
};
