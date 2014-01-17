/* -*- Mode: js; js-indent-level: 2; indent-tabs-mode: nil -*- */
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

'use strict';

var icc_worker = {
  dummy: function icc_worker_dummy(message, iccManager) {
    DUMP('STK Command not implemented yet');
    iccManager.responseSTKCommand(message, {
      resultCode: iccManager._iccManager.STK_RESULT_OK
    });
  },

  // STK_CMD_REFRESH
  '0x1': function STK_CMD_REFRESH(message, iccManager) {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=800271#c10
    DUMP('STK_CMD_REFRESH', message.command.options);
    icc_worker.dummy(message, iccManager);
  },

  // STK_CMD_POLL_INTERVAL
  '0x3': function STK_CMD_POLL_INTERVAL(message, iccManager) {
    DUMP('STK_CMD_POLL_INTERVAL', message.command.options);
    icc_worker.dummy(message, iccManager);
  },

  // STK_CMD_POLL_OFF
  '0x4': function STK_CMD_POLL_OFF(message, iccManager) {
    DUMP('STK_CMD_POLL_OFF', message.command.options);
    icc_worker.dummy(message, iccManager);
  },

  // STK_CMD_SET_UP_EVENT_LIST
  '0x5': function STK_CMD_SET_UP_EVENT_LIST(message, iccManager) {
    DUMP('STK_CMD_SET_UP_EVENT_LIST:', message.command.options);
    icc_events.register(message.command.options.eventList);
    iccManager.responseSTKCommand(message, {
      resultCode: iccManager._iccManager.STK_RESULT_OK
    });
  },

  // STK_CMD_SET_UP_CALL
  '0x10': function STK_CMD_SET_UP_CALL(message, iccManager) {
    function stkSetupCall(confirmed, postMessage) {
      iccManager.responseSTKCommand(message, {
        hasConfirmed: confirmed,
        resultCode: iccManager._iccManager.STK_RESULT_OK
      });
      if (confirmed && postMessage) {
        // Transfering the second alpha id to dialer (Bug #873906)
        window.navigator.mozSettings.createLock().set({
          'icc.callmessage': options.callMessage
        });
      }
    }

    var _ = navigator.mozL10n.get;
    DUMP('STK_CMD_SET_UP_CALL:', message.command.options);
    var options = message.command.options;
    if (!options.confirmMessage) {
      options.confirmMessage = _(
        'icc-confirmCall-defaultmessage', {
          'number': options.address
        });
    }
    if (options.confirmMessage) {
      iccManager.asyncConfirm(message, options.confirmMessage,
        function(confirmed) {
          stkSetupCall(confirmed, options.callMessage);
        });
    } else {
      stkSetupCall(true, options.callMessage);
    }
  },

  // STK_CMD_SEND_SS
  '0x11': function STK_CMD_SEND_SS(message, iccManager) {
    DUMP('STK_CMD_SEND_SS:', message.command.options);
    var options = message.command.options;
    iccManager.responseSTKCommand(message, {
      resultCode: iccManager._iccManager.STK_RESULT_OK
    });
    if (!options.text) {
      var _ = navigator.mozL10n.get;
      options.text = _('icc-alertMessage-defaultmessage');
    }
    iccManager.alert(message, options.text);
  },

  // STK_CMD_SEND_USSD
  '0x12': function STK_CMD_SEND_USSD(message, iccManager) {
    DUMP('STK_CMD_SEND_USSD:', message.command.options);
    this['0x13'](message, iccManager);
  },

  // STK_CMD_SEND_SMS
  '0x13': function STK_CMD_SEND_SMS(message, iccManager) {
    DUMP('STK_CMD_SEND_SMS:', message.command.options);
    var options = message.command.options;
    iccManager.responseSTKCommand(message, {
      resultCode: iccManager._iccManager.STK_RESULT_OK
    });
    if (options.text) {
      iccManager.confirm(message, options.text);
    } else if (options.text != undefined) {
      var _ = navigator.mozL10n.get;
      iccManager.alert(message, _('icc-alertMessage-defaultmessage'));
    }
  },

  // STK_CMD_SEND_DTMF
  '0x14': function STK_CMD_SEND_DTMF(message, iccManager) {
    DUMP('STK_CMD_SEND_DTMF:', message.command.options);
    var options = message.command.options;
    iccManager.responseSTKCommand(message, {
      resultCode: iccManager._iccManager.STK_RESULT_OK
    });
    if (options.text) {
      iccManager.alert(message, options.text);
    } else if (options.text == '') {
      var _ = navigator.mozL10n.get;
      iccManager.alert(message, _('icc-confirmMessage-defaultmessage'));
    }
  },

  // STK_CMD_LAUNCH_BROWSER
  '0x15': function STK_CMD_LAUNCH_BROWSER(message, iccManager) {
    DUMP('STK_CMD_LAUNCH_BROWSER:', message.command.options);
    var options = message.command.options;
    iccManager.responseSTKCommand(message, {
      resultCode: iccManager._iccManager.STK_RESULT_OK
    });
    iccManager.showURL(message, options.url, options.confirmMessage);
  },

  // STK_CMD_PLAY_TONE
  '0x20': function STK_CMD_PLAY_TONE(message, iccManager) {
    function getPhoneSound(toneCode) {
      toneCode =
        typeof(toneCode) == 'string' ? toneCode.charCodeAt(0) : toneCode;
      switch (toneCode) {
        case iccManager._iccManager.STK_TONE_TYPE_DIAL_TONE:
          return 'resources/dtmf_tones/350Hz+440Hz_200ms.opus';
        case iccManager._iccManager.STK_TONE_TYPE_CALLED_SUBSCRIBER_BUSY:
          return 'resources/dtmf_tones/480Hz+620Hz_200ms.opus';
        case iccManager._iccManager.STK_TONE_TYPE_CONGESTION:
          return 'resources/dtmf_tones/425Hz_200ms.opus';
        case iccManager._iccManager.STK_TONE_TYPE_RADIO_PATH_ACK:
        case iccManager._iccManager.STK_TONE_TYPE_RADIO_PATH_NOT_AVAILABLE:
          return 'resources/dtmf_tones/425Hz_200ms.opus';
        case iccManager._iccManager.STK_TONE_TYPE_ERROR:
          return 'resources/dtmf_tones/950Hz+1400Hz+1800Hz_200ms.opus';
        case iccManager._iccManager.STK_TONE_TYPE_CALL_WAITING_TONE:
        case iccManager._iccManager.STK_TONE_TYPE_RINGING_TONE:
          return 'resources/dtmf_tones/425Hz_200ms.opus';
        case iccManager._iccManager.STK_TONE_TYPE_GENERAL_BEEP:
          return 'resources/dtmf_tones/400Hz_200ms.opus';
        case iccManager._iccManager.STK_TONE_TYPE_POSITIVE_ACK_TONE:
          return 'resources/dtmf_tones/425Hz_200ms.opus';
        case iccManager._iccManager.STK_TONE_TYPE_NEGATIVE_ACK_TONE:
          return 'resources/dtmf_tones/300Hz+400Hz+500Hz_400ms.opus';
        default:
          return 'resources/dtmf_tones/350Hz+440Hz_200ms.opus';
      }
    }

    DUMP('STK_CMD_PLAY_TONE:', message.command.options);
    var options = message.command.options;

    var tonePlayer = new Audio();
    tonePlayer.src = getPhoneSound(options.tone);
    tonePlayer.loop = true;

    var timeout = 0;
    if (options.duration &&
        options.duration.timeUnit != undefined &&
        options.duration.timeInterval != undefined) {
      timeout = iccManager.calculateDurationInMS(options.duration.timeUnit,
        options.duration.timeInterval);
    } else if (options.timeUnit != undefined &&
        options.timeInterval != undefined) {
      timeout = iccManager.calculateDurationInMS(options.timUnit,
        options.timeInterval);
    } else {
      timeout = iccManager._toneDefaultTimeout;
    }
    timeout && DUMP('Tone stop in (ms): ', timeout);

    if (options.text) {
      iccManager.confirm(message, options.text, timeout, function(userCleared) {
        tonePlayer.pause();
        if (userCleared == null) {  // Back && Terminate
          return;
        }
        iccManager.responseSTKCommand(message, {
          resultCode: iccManager._iccManager.STK_RESULT_OK
        });
      });
    } else {
      // If no dialog is showed, we answer the STK command
      iccManager.responseSTKCommand(message, {
        resultCode: iccManager._iccManager.STK_RESULT_OK
      });
      // Stop playing after timeout
      setTimeout(function _iccTonePlayerStop() {
        tonePlayer.pause();
      }, timeout);
    }

    if (options.isVibrate) {
      window.navigator.vibrate([200]);
    }

    tonePlayer.play();
  },

  // STK_CMD_DISPLAY_TEXT
  '0x21': function STK_CMD_DISPLAY_TEXT(message, iccManager) {
    DUMP('STK_CMD_DISPLAY_TEXT:', message.command.options);
    var options = message.command.options;
    if (options.responseNeeded) {
      iccManager.responseSTKCommand(message, {
        resultCode: iccManager._iccManager.STK_RESULT_OK
      });
      iccManager.confirm(message, options.text, iccManager._displayTextTimeout,
        null);
    } else {
      iccManager.confirm(message, options.text, iccManager._displayTextTimeout,
        function(userCleared) {
          if (userCleared == null) {
            return;   // ICC Back or ICC Terminate
          }
          DUMP('STK_CMD_DISPLAY_TEXT callback for ', message.command);
          if (options.userClear && !userCleared) {
            DUMP('No response from user (Timeout)');
            iccManager.responseSTKCommand(message, {
              resultCode:
                iccManager._iccManager.STK_RESULT_NO_RESPONSE_FROM_USER
            });
          } else {
            DUMP('Alert closed');
            iccManager.responseSTKCommand(message, {
              resultCode: iccManager._iccManager.STK_RESULT_OK
            });
          }
        });
    }
  },

  // STK_CMD_GET_INKEY
  '0x22': function STK_CMD_GET_INKEY(message, iccManager) {
    DUMP('STK_CMD_GET_INKEY:', message.command.options);
    this['0x23'](message, iccManager);
  },

  // STK_CMD_GET_INPUT
  '0x23': function STK_CMD_GET_INPUT(message, iccManager) {
    DUMP('STK_CMD_GET_INPUT:', message.command.options);
    var options = message.command.options;

    DUMP('STK Input title: ' + options.text);

    document.addEventListener('visibilitychange',
      function stkInputNoAttended() {
        document.removeEventListener('visibilitychange', stkInputNoAttended,
          true);
        iccManager.responseSTKCommand(message, {
          resultCode:
            iccManager._iccManager.STK_RESULT_UICC_SESSION_TERM_BY_USER
        });
        iccManager.hideViews();
      }, true);

    var timeout = options.duration ||
      iccManager.calculateDurationInMS(options.duration) ||
      iccManager._inputTimeout;
    iccManager.input(options.text, timeout, options,
      function(response, value) {
        if (response == null) {
          return;   // ICC Back or ICC Help
        }
        if (!response) {
          DUMP('STK_CMD_GET_INPUT: No response from user (Timeout)');
          iccManager.responseSTKCommand(message, {
            resultCode:
              iccManager._iccManager.STK_RESULT_NO_RESPONSE_FROM_USER
          });
        } else {
          DUMP('STK_CMD_GET_INPUT: Response = ', value);
          iccManager.responseSTKCommand(message, {
            resultCode: iccManager._iccManager.STK_RESULT_OK,
            input: value
          });
        }
      });
  },

  // STK_CMD_SELECT_ITEM
  '0x24': function STK_CMD_SELECT_ITEM(message, iccManager) {
    var application = document.location.protocol + '//' +
      document.location.host.replace('system', 'settings');
    DUMP('STK_CMD_SET_UP_MENU. Transferring to ' + application + ': ',
      message.command);
    var reqIccData = window.navigator.mozSettings.createLock().set({
      'icc.data': JSON.stringify(message.command)
    });
    reqIccData.onsuccess = function icc_getIccData() {
      if (AppWindowManager.getRunningApps()[application]) {
        return DUMP('Settings is running. Ignoring');
      }
      navigator.mozApps.mgmt.getAll().onsuccess = function gotApps(evt) {
        var apps = evt.target.result;
        apps.forEach(function appIterator(app) {
          if (app.origin != application)
            return;
          DUMP('Launching ', app.origin);
          app.launch();
        }, this);
      };
    };
  },

  // STK_CMD_SET_UP_MENU
  '0x25': function STK_CMD_SET_UP_MENU(message, iccManager) {
    DUMP('STK_CMD_SET_UP_MENU:', message.command.options);
    var reqApplications = window.navigator.mozSettings.createLock().set({
      'icc.applications': JSON.stringify(message.command.options)
    });
    reqApplications.onsuccess = function icc_getApplications() {
      DUMP('Cached');
      iccManager.responseSTKCommand(message, {
        resultCode: iccManager._iccManager.STK_RESULT_OK
      });
    };
  },

  // STK_CMD_PROVIDE_LOCAL_INFO
  '0x26': function STK_CMD_PROVIDE_LOCAL_INFO(message, iccManager) {

    // XXX: check bug-926169
    // this is used to keep all tests passing while introducing multi-sim APIs
    var conn = window.navigator.mozMobileConnection ||
      window.navigator.mozMobileConnections &&
        window.navigator.mozMobileConnections[0];

    DUMP('STK_CMD_PROVIDE_LOCAL_INFO:', message.command.options);
    switch (message.command.options.localInfoType) {
      case iccManager._iccManager.STK_LOCAL_INFO_LOCATION_INFO:
        iccManager.responseSTKCommand(message, {
          localInfo: {
            locationInfo: {
              mcc: IccHelper.iccInfo.mcc,
              mnc: IccHelper.iccInfo.mnc,
              gsmLocationAreaCode: conn.voice.cell.gsmLocationAreaCode,
              gsmCellId: conn.voice.cell.gsmCellId
            }
          },
          resultCode: iccManager._iccManager.STK_RESULT_OK
        });
        break;

      case iccManager._iccManager.STK_LOCAL_INFO_IMEI:
        var req = conn.sendMMI('*#06#');
        req.onsuccess = function getIMEI() {
          if (req.result && req.result.statusMessage) {
            iccManager.responseSTKCommand(message, {
              localInfo: {
                imei: req.result.statusMessage
              },
              resultCode: iccManager._iccManager.STK_RESULT_OK
            });
          }
        };
        req.onerror = function errorIMEI() {
          iccManager.responseSTKCommand(message, {
              localInfo: {
                imei: '0'
              },
            resultCode:
              iccManager._iccManager.STK_RESULT_REQUIRED_VALUES_MISSING
          });
        };
        break;

      case iccManager._iccManager.STK_LOCAL_INFO_DATE_TIME_ZONE:
        iccManager.responseSTKCommand(message, {
          localInfo: {
            date: new Date()
          },
          resultCode: iccManager._iccManager.STK_RESULT_OK
        });
        break;

      case iccManager._iccManager.STK_LOCAL_INFO_LANGUAGE:
        var reqLanguage =
          window.navigator.mozSettings.createLock().get('language.current');
        reqLanguage.onsuccess = function icc_getLanguage() {
          iccManager.responseSTKCommand(message, {
            localInfo: {
              language: reqLanguage.result['language.current'].substring(0, 2)
            },
            resultCode: iccManager._iccManager.STK_RESULT_OK
          });
        };
        reqLanguage.onerror = function icc_getLanguageFailed() {
          iccManager.responseSTKCommand(message, {
            localInfo: {
              language: 'en'
            },
            resultCode:
              iccManager._iccManager.STK_RESULT_REQUIRED_VALUES_MISSING
          });
        };
        break;
    }
  },

  // STK_CMD_TIMER_MANAGEMENT
  '0x27': function STK_CMD_TIMER_MANAGEMENT(message, iccManager) {
    DUMP('STK_CMD_TIMER_MANAGEMENT:', message.command.options);
    var a_timer = advanced_timer;
    var options = message.command.options;
    var pendingTime = 0;
    switch (options.timerAction) {
      case iccManager._iccManager.STK_TIMER_START:
        a_timer.start(options.timerId, options.timerValue * 1000,
          function() {
            DUMP('Timer expiration - ' + options.timerId);
            (icc.getIcc(message.iccId)).sendStkTimerExpiration({
              'timerId': options.timerId
            });
          });
        iccManager.responseSTKCommand(message, {
          timer: {
            'timerId': options.timerId,
            'timerValue': options.timerValue,
            'timerAction': iccManager._iccManager.STK_TIMER_START
          },
          resultCode: iccManager._iccManager.STK_RESULT_OK
        });
        break;

      case iccManager._iccManager.STK_TIMER_DEACTIVATE:
        pendingTime = a_timer.stop(options.timerId) / 1000;
        iccManager.responseSTKCommand(message, {
          timer: {
            'timerId': options.timerId,
            'timerValue': pendingTime,
            'timerAction': iccManager._iccManager.STK_TIMER_DEACTIVATE
          },
          resultCode: iccManager._iccManager.STK_RESULT_OK
        });
        break;

      case iccManager._iccManager.STK_TIMER_GET_CURRENT_VALUE:
        pendingTime = a_timer.queryPendingTime(options.timerId) / 1000;
        iccManager.responseSTKCommand(message, {
          timer: {
            'timerId': options.timerId,
            'timerValue': pendingTime,
            'timerAction': iccManager._iccManager.STK_TIMER_GET_CURRENT_VALUE
          },
          resultCode: iccManager._iccManager.STK_RESULT_OK
        });
        break;
    }
  },

  // STK_CMD_SET_UP_IDLE_MODE_TEXT
  '0x28': function STK_CMD_SET_UP_IDLE_MODE_TEXT(message, iccManager) {
    DUMP('STK_CMD_SET_UP_IDLE_MODE_TEXT:', message.command.options);
    var options = message.command.options;
    NotificationHelper.send('STK', options.text, '', function() {
      iccManager.alert(message, options.text);
    });
    iccManager.responseSTKCommand(message, {
      resultCode: iccManager._iccManager.STK_RESULT_OK
    });
  }

};
