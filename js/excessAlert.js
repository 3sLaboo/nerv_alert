/**
 * NERV警告アラート
 * ※かなり雑に書いてることをお許しください。
 * written by 3s.laboo
 */

/** 警告アラートの周りに表示する六角形のテンプレート */
var hexagon_alert_template =
  "<div class='hexagon__alert' style='top:$top$px;left:$left$px;'><div class='hexagon__common hexagon__alert__hexagon1'><div class='hexagon__border__common hexagon__left__border-1'></div><div class='hexagon__border__common hexagon__left__border-2 hexagon__rotate-1'></div><div class='hexagon__border__common hexagon__left__border-3 hexagon__rotate-2'></div><div class='hexagon__inner__common'></div><div class='hexagon__inner__common hexagon__rotate-1'></div><div class='hexagon__inner__common hexagon__rotate-2'></div></div><div class='hexagon__common hexagon__alert__hexagon2'><div class='hexagon__border__common hexagon__up__border-1'></div><div class='hexagon__border__common hexagon__up__border-2 hexagon__rotate-1'></div><div class='hexagon__border__common hexagon__up__border-3 hexagon__rotate-2'></div><div class='hexagon__inner__common'></div><div class='hexagon__inner__common hexagon__rotate-1'></div><div class='hexagon__inner__common hexagon__rotate-2'></div><div class='triangle__common triangle__up triangle__up__alert'></div></div><div class='hexagon__common hexagon__alert__hexagon3'><div class='hexagon__border__common hexagon__down__border-1'></div><div class='hexagon__border__common hexagon__down__border-2 hexagon__rotate-1'></div><div class='hexagon__border__common hexagon__down__border-3 hexagon__rotate-2'></div><div class='hexagon__inner__common'></div><div class='hexagon__inner__common hexagon__rotate-1'></div><div class='hexagon__inner__common hexagon__rotate-2'></div><div class='triangle__common triangle__down triangle__down__alert'></div></div><div class='hexagon__common hexagon__alert__hexagon4'><div class='hexagon__border__common hexagon__middle__border'></div><div class='hexagon__inner__common hexagon__inner__middle'></div></div><div class='hexagon__common hexagon__alert__hexagon5'><div class='hexagon__border__common hexagon__up__border-1'></div><div class='hexagon__border__common hexagon__up__border-2 hexagon__rotate-1'></div><div class='hexagon__border__common hexagon__up__border-3 hexagon__rotate-2'></div><div class='hexagon__inner__common hexagon__inner-1'></div><div class='hexagon__inner__common hexagon__inner-2 hexagon__rotate-1'></div><div class='hexagon__inner__common hexagon__inner-3 hexagon__rotate-2'></div><div class='triangle__common triangle__up triangle__up__alert'></div></div><div class='hexagon__common hexagon__alert__hexagon6'><div class='hexagon__border__common hexagon__down__border-1'></div><div class='hexagon__border__common hexagon__down__border-2 hexagon__rotate-1'></div><div class='hexagon__border__common hexagon__down__border-3 hexagon__rotate-2'></div><div class='hexagon__inner__common'></div><div class='hexagon__inner__common hexagon__rotate-1'></div><div class='hexagon__inner__common hexagon__rotate-2'></div><div class='triangle__common triangle__down triangle__down__alert'></div></div><div class='hexagon__common hexagon__alert__hexagon7'><div class='hexagon__border__common hexagon__right__border-1'></div><div class='hexagon__border__common hexagon__right__border-2 hexagon__rotate-1'></div><div class='hexagon__border__common hexagon__right__border-3 hexagon__rotate-2'></div><div class='hexagon__inner__common'></div><div class='hexagon__inner__common hexagon__rotate-1'></div><div class='hexagon__inner__common hexagon__rotate-2'></div></div><div class='hexagon__alert__warning__common hexagon__alert__warning__side hexagon__alert__warning__left hexagon__alert__warning__top'>警告</div><div class='hexagon__alert__warning__common hexagon__alert__warning__side hexagon__alert__warning__left hexagon__alert__warning__bottom'>警告</div><div class='hexagon__alert__warning__common hexagon__alert__warning__side hexagon__alert__warning__right hexagon__alert__warning__top'>警告</div><div class='hexagon__alert__warning__common hexagon__alert__warning__side hexagon__alert__warning__right hexagon__alert__warning__bottom pointer' onclick='closeExcessAlert()'>閉幕</div><div class='hexagon__alert__warning__common hexagon__alert__warning__head'>警告</div><div class='hexagon__alert__message'><span class='blinking'>$alertStr$</span></div></div></div>";
/** 警告アラートの本体のテンプレート */
var hexagon_element_template =
  "<div class='hexagon' style='top:$top$px;left:$left$px;'><div class='hexagon__common'><div class='hexagon__border__common hexagon__border'></div><div class='hexagon__border__common hexagon__border hexagon__rotate-1'></div><div class='hexagon__border__common hexagon__border hexagon__rotate-2'></div><div class='hexagon__inner__common hexagon__inner-1'></div><div class='hexagon__inner__common hexagon__inner-2 hexagon__rotate-1'></div><div class='hexagon__inner__common hexagon__inner-3 hexagon__rotate-2'></div><div class='triangle__common triangle__up triangle__up__hexagon'></div><div class='triangle__common triangle__down triangle__down__hexagon'></div><div class='hexagon__inner__emergency'>EMERGENCY</div></div></div>";
/** 六角形の表示する位置を配列で定義 */
var hexagon_position_array = [
  { top: 35, left: 30 },
  { top: 35, left: 280 },
  { top: 35, left: 529 },
  { top: 35, left: 777 },
  { top: 107, left: 155 },
  { top: 107, left: 405 },
  { top: 107, left: 653 },
  { top: 180, left: 30 },
  { top: 180, left: 777 },
  { top: 320, left: 30 },
  { top: 320, left: 777 },
  { top: 392, left: 155 },
  { top: 392, left: 405 },
  { top: 392, left: 653 },
  { top: 464, left: 30 },
  { top: 464, left: 280 },
  { top: 464, left: 529 },
  { top: 464, left: 777 },
];
/** 警告アラートの本体を表示する位置を定義 */
var hexagon_alert_position = { top: 185, left: 166 };

/**
 * 初期化処理
 */
function excessAlert_init() {
  // <div id='alert_cover'></div>を配置
  let alert_cover = document.createElement("div");
  alert_cover.id = "alert_cover";
  document.body.appendChild(alert_cover);
}

/**
 * NERV警告アラートを表示する
 * @param alert_str 警告文
 */
function openExcessAlert(alert_str) {
  // html内のalert_coverを取得
  let parentDiv = document.getElementById("alert_cover");
  // 黒い幕の大きさ・位置を指定
  parentDiv.style.width = "960px";
  parentDiv.style.height = "620px";
  parentDiv.style.top = "0";
  parentDiv.style.left = "0";
  // 内部を初期化
  parentDiv.innerHTML = "";
  // NERV警告アラート本体を取得 且つ 警告文と表示位置を置換
  let hexagon_alert = hexagon_alert_template
    .replace("$alertStr$", alert_str)
    .replace("$top$", hexagon_alert_position.top)
    .replace("$left$", hexagon_alert_position.left);
  setTimeout(() => {
    // NERV警告アラート本体を配置
    parentDiv.innerHTML = parentDiv.innerHTML + hexagon_alert;
    // 六角形を順々に配置していく
    // タイマーを置くことで、あの映画感を出す
    hexagon_position_array.forEach((hexagon_position, index) => {
      setTimeout(() => {
        // 六角形のテンプレートを取得 且つ 表示位置を置換
        let hexagon_element = hexagon_element_template
          .replace("$top$", hexagon_position.top)
          .replace("$left$", hexagon_position.left);
        // 画面に表示していく
        parentDiv.innerHTML = parentDiv.innerHTML + hexagon_element;
      }, 20 * index);
    });
  }, 10);
}

/**
 * NERV警告文を消す
 */
function closeExcessAlert() {
  // html内のalert_coverを取得
  let parentDiv = document.getElementById("alert_cover");
  // 順々に消していく
  setTimeout(() => {
    // 黒い幕をサイズを縮小して消す
    parentDiv.style.width = "0";
    parentDiv.style.height = "0";
    // NERV警告文本体を消す
    let hexagonAlert = document.getElementsByClassName("hexagon__alert")[0];
    hexagonAlert.remove();
    // 周りに配置している六角形の要素を取得
    let hexagonArray = Array.prototype.slice.call(
      document.getElementsByClassName("hexagon")
    );
    // 順々に消していく
    // タイマーを置くことで、あの映画感を出す
    hexagonArray.forEach((hexagon, index) => {
      setTimeout(() => {
        hexagon.remove();
      }, 20 * index);
    });
  }, 10);
}
