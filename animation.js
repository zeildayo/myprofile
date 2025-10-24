// ページのDOM（HTML）が読み込まれたら実行
document.addEventListener('DOMContentLoaded', () => {
  
  // (1) アニメーションさせたい要素をすべて取得
  // (タイトル と 各セクション)
  const elementsToAnimate = document.querySelectorAll('h1, body > div');
  
  // (2) 取得した要素を一つずつ処理
  elementsToAnimate.forEach((element, index) => {
    
    // (3) 順番に表示するために、遅延時間（ディレイ）を計算
    // 1番目 (index=0) は 100ms後
    // 2番目 (index=1) は 300ms後 (100 + 200)
    // 3番目 (index=2) は 500ms後 (100 + 200 * 2)
    const delay = 100 + (index * 200);
    
    // (4) 計算した遅延時間の後に、クラスを追加する
    setTimeout(() => {
      element.classList.add('is-visible');
    }, delay);
  });
});