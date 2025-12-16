let timeLeft = 25 * 60;
let timerId = null;
let timeLeftbase = timeLeft;
document.getElementById('start').onclick = () => {
  if (timerId) return;
  timerId = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      const m = Math.floor(timeLeft / 60);
      const s = timeLeft % 60;
      document.getElementById('display').textContent = `${m}:${String(
        s
      ).padStart(2, '0')}`;
    } else {
      clearInterval(timerId);
      alert('終了！');
    }
  }, 1000);
};

document.getElementById('reset').onclick = () => {
  clearInterval(timerId);
  timerId = null;
  timeLeft = timeLeftbase * 60;
  document.getElementById('display').textContent = `${timeLeftbase}:00`;
};
// 追加する要素の取得
const overlay = document.getElementById('overlay');
const newTimeInput = document.getElementById('newTime');

// SETTINGボタン：オーバーレイを開く
document.getElementById('setting').onclick = () => {
  clearInterval(timerId);
  timerId = null;
  overlay.style.display = 'flex'; // オーバーレイを表示
};

// CANCELボタン：閉じるだけ
document.getElementById('cancel').onclick = () => {
  overlay.style.display = 'none';
};

// SAVEボタン：入力された数字をタイマーに反映
document.getElementById('save').onclick = () => {
  const minutes = Number(newTimeInput.value);

  if (minutes > 0) {
    timeLeft = minutes * 60;
    timeLeftbase = minutes;
    // 分を秒に変換
    // 表示を更新
    document.getElementById('display').textContent = `${minutes}:00`;
    overlay.style.display = 'none'; // 閉じる
  } else {
    alert('1以上の数字を入れてね！');
  }
};
