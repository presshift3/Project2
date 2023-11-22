//=============================================================================
// NYA_EditGameEnd.js
//=============================================================================

/*:
 * @plugindesc ゲーム終了画面にヘルプウィンドゥを追加します
 * @author Nyatama
 * @param HelpText
 * @desc ゲームを終了画面のヘルプウィンドゥの文字列
 * @default 本当にゲームを終了してもよろしいですか？\n保存していないデータは失われます
 *
 * @param isToTitleDown
 * @type boolean
 * @text 「タイトルへ」の位置
 * @desc 「タイトルへ」のコマンド位置
 * 常にコマンド上側がカーソルデフォルト位置となります
 * @on 「タイトルへ」が下
 * @off 「タイトルへ」が上
 * @default false
 * 
 */
 

(function() {
    "use strict";

    var parameters = PluginManager.parameters('NYA_EditGameEnd');
    var helpText = String(parameters['HelpText'] || '本当にゲーム終了をしてもよろしいですか？\n保存していないデータは失われます');
    var isToTitleDown = Boolean(parameters['isToTitleDown'] === 'true' || false);
    
    var _Scene_GameEnd_create = Scene_GameEnd.prototype.create;
    Scene_GameEnd.prototype.create = function() {
        _Scene_GameEnd_create.call(this);
        
        this.createHelpWindow();
        
        this._helpWindow.x = 100; //ヘルプウィンドゥのX軸位置
        this._helpWindow.y = 100; //ヘルプウィンドゥのY軸位置
        this._helpWindow.width = 600; //ヘルプウィンドゥの幅
        this._helpWindow.opacity = 0; //ヘルプウィンドゥの枠の不透明度 0:透明 255:不透明
    };
    
    Scene_GameEnd.prototype.createHelpWindow = function() {
        this._helpWindow = new Window_Help(2);//ヘルプウィンドゥの行数
        this._helpWindow.setText(this.helpWindowText());
        this.addWindow(this._helpWindow);
    };
    
    Scene_GameEnd.prototype.helpWindowText = function() {
        return helpText;
    };
    
    Window_GameEnd.prototype.makeCommandList = function() {
        if(isToTitleDown){
            this.addCommand(TextManager.cancel,  'cancel');
            this.addCommand(TextManager.toTitle, 'toTitle');
        }else{
            this.addCommand(TextManager.toTitle, 'toTitle');
            this.addCommand(TextManager.cancel,  'cancel');
        }
    };
}());