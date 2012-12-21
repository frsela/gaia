/* -*- Mode: js; js-indent-level: 2; indent-tabs-mode: nil -*- */
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

'use strict';

(function() {
  /**
   * Constants
   */
  var DEBUG = false;

  /**
   * Debug method
   */
  function debug(msg, optObject) {
    if (DEBUG) {
      var output = '[DEBUG] STKCACHE: ' + msg;
      if (optObject) {
        output += JSON.stringify(optObject);
      }
      console.log(output);
    }
  }

  if (!window.navigator.mozMobileConnection) {
    return;
  }

  var icc = window.navigator.mozMobileConnection.icc;
  window.navigator.mozSetMessageHandler('icc-stkcommand',
    function handleSTKCommand(command) {
      debug('STK Proactive Command:', command);
      switch (command.typeOfCommand) {
      case icc.STK_CMD_SET_UP_MENU:
        debug('STK_CMD_SET_UP_MENU:', command.options);
        var reqApplications = window.navigator.mozSettings.createLock().set({
          'icc.applications': JSON.stringify(command.options)
        });
        reqApplications.onsuccess = function icc_getApplications() {
          debug('Cached');
          icc.sendStkResponse(command, {
            resultCode: icc.STK_RESULT_OK
          });
        }
        break;

      case icc.STK_CMD_SET_UP_IDLE_MODE_TEXT:
        debug('STK_CMD_SET_UP_IDLE_MODE_TEXT', command.options);
        icc.sendStkResponse(command, {
          resultCode: icc.STK_RESULT_OK
        });
        displayNotification(command);
        break;

      case icc.STK_CMD_REFRESH:
        debug('STK_CMD_REFRESH', command.options);
        icc.sendStkResponse(command, {
          resultCode: icc.STK_RESULT_OK
        });
        clearNotification();
        break;

      default:
        // Unsolicited command? -> Open settings
        debug('CMD: ', command);
        var application = document.location.protocol + '//' +
          document.location.host.replace('system', 'settings');
        debug('application: ', application);
        if (WindowManager.getRunningApps()[application]) {
          return;   // If settings is opened, we don't manage it
        }
        navigator.mozApps.mgmt.getAll().onsuccess = function gotApps(evt) {
          var apps = evt.target.result;
          apps.forEach(function appIterator(app) {
            if (app.origin == application) {
              var reqIccData = window.navigator.mozSettings.createLock().set({
                'icc.data': JSON.stringify(command)
              });
              reqIccData.onsuccess = function icc_getIccData() {
                debug('Launching ', app.origin);
                app.launch();
              }
            }
          }, this);
        }
      }
    });

  /**
   * Display text on the notifications bar and Idle screen
   */
  function displayNotification(command) {
    debug('displayNotification');
    navigator.mozApps.getSelf().onsuccess = function getSelfCB(evt) {
      debug('sendNotification');
      var app = evt.target.result;
      var iconURL = NotificationHelper.getIconURI(app);
      NotificationHelper.send('STK', command.options.text, iconURL);
    };
  }

  /**
   * Remove text on the notifications bar and Idle screen
   */
  function clearNotification() {
    debug('clearNotification - TODO');
    // TODO (Notification bar doesn't support remove notifications just now)
  }

})();
