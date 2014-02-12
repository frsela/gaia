/* -*- Mode: js; js-indent-level: 2; indent-tabs-mode: nil -*- */
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

'use strict';

var stkTester = (function () {
  //var iccId1 = '0987654321098765432';
  var iccId1 = '8934071100282138266';
  var iccId2 = '1234567890123456789';

  var iccConsts = {
    STK_MENU_TYPE_NOT_SPECIFIED: 0x00,
    STK_MENU_TYPE_DATA_VALUES: 0x01,
    STK_MENU_TYPE_NAVIGATION_OPTIONS: 0x03,
    STK_BROWSER_MODE_LAUNCH_IF_NOT_ALREADY_LAUNCHED: 0x00,
    STK_BROWSER_MODE_USING_EXISTING_BROWSER: 0x02,
    STK_BROWSER_MODE_USING_NEW_BROWSER: 0x03,
    STK_CMD_REFRESH: 0x01,
    STK_CMD_POLL_INTERVAL: 0x03,
    STK_CMD_POLL_OFF: 0x04,
    STK_CMD_SET_UP_EVENT_LIST: 0x05,
    STK_CMD_SET_UP_CALL: 0x10,
    STK_CMD_SEND_SS: 0x11,
    STK_CMD_SEND_USSD: 0x12,
    STK_CMD_SEND_SMS: 0x13,
    STK_CMD_SEND_DTMF: 0x14,
    STK_CMD_LAUNCH_BROWSER: 0x15,
    STK_CMD_PLAY_TONE: 0x20,
    STK_CMD_DISPLAY_TEXT: 0x21,
    STK_CMD_GET_INKEY: 0x22,
    STK_CMD_GET_INPUT: 0x23,
    STK_CMD_SELECT_ITEM: 0x24,
    STK_CMD_SET_UP_MENU: 0x25,
    STK_CMD_PROVIDE_LOCAL_INFO: 0x26,
    STK_CMD_TIMER_MANAGEMENT: 0x27,
    STK_CMD_SET_UP_IDLE_MODE_TEXT: 0x28,
    STK_RESULT_OK: 0x00,
    STK_RESULT_PRFRMD_WITH_PARTIAL_COMPREHENSION: 0x01,
    STK_RESULT_PRFRMD_WITH_MISSING_INFO: 0x02,
    STK_RESULT_PRFRMD_WITH_ADDITIONAL_EFS_READ: 0x03,
    STK_RESULT_PRFRMD_LIMITED_SERVICE: 0x06,
    STK_RESULT_UICC_SESSION_TERM_BY_USER: 0x10,
    STK_RESULT_BACKWARD_MOVE_BY_USER: 0x11,
    STK_RESULT_NO_RESPONSE_FROM_USER: 0x12,
    STK_RESULT_HELP_INFO_REQUIRED: 0x13,
    STK_RESULT_USSD_SS_SESSION_TERM_BY_USER: 0x14,
    STK_RESULT_TERMINAL_CRNTLY_UNABLE_TO_PROCESS: 0x20,
    STK_RESULT_NETWORK_CRNTLY_UNABLE_TO_PROCESS: 0x21,
    STK_RESULT_USER_NOT_ACCEPT: 0x22,
    STK_RESULT_USER_CLEAR_DOWN_CALL: 0x23,
    STK_RESULT_LAUNCH_BROWSER_ERROR: 0x26,
    STK_RESULT_BEYOND_TERMINAL_CAPABILITY: 0x30,
    STK_RESULT_CMD_TYPE_NOT_UNDERSTOOD: 0x31,
    STK_RESULT_CMD_DATA_NOT_UNDERSTOOD: 0x32,
    STK_RESULT_CMD_NUM_NOT_KNOWN: 0x33,
    STK_RESULT_SS_RETURN_ERROR: 0x34,
    STK_RESULT_SMS_RP_ERROR: 0x35,
    STK_RESULT_REQUIRED_VALUES_MISSING: 0x36,
    STK_RESULT_USSD_RETURN_ERROR: 0x37,
    STK_RESULT_MULTI_CARDS_CMD_ERROR: 0x38,
    STK_RESULT_USIM_CALL_CONTROL_PERMANENT: 0x39,
    STK_RESULT_BIP_ERROR: 0x3a,
    STK_EVENT_TYPE_MT_CALL: 0x00,
    STK_EVENT_TYPE_CALL_CONNECTED: 0x01,
    STK_EVENT_TYPE_CALL_DISCONNECTED: 0x02,
    STK_EVENT_TYPE_LOCATION_STATUS: 0x03,
    STK_EVENT_TYPE_USER_ACTIVITY: 0x04,
    STK_EVENT_TYPE_IDLE_SCREEN_AVAILABLE: 0x05,
    STK_EVENT_TYPE_CARD_READER_STATUS: 0x06,
    STK_EVENT_TYPE_LANGUAGE_SELECTION: 0x07,
    STK_EVENT_TYPE_BROWSER_TERMINATION: 0x08,
    STK_EVENT_TYPE_DATA_AVAILABLE: 0x09,
    STK_EVENT_TYPE_CHANNEL_STATUS: 0x0a,
    STK_EVENT_TYPE_SINGLE_ACCESS_TECHNOLOGY_CHANGED: 0x0b,
    STK_EVENT_TYPE_DISPLAY_PARAMETER_CHANGED: 0x0c,
    STK_EVENT_TYPE_LOCAL_CONNECTION: 0x0d,
    STK_EVENT_TYPE_NETWORK_SEARCH_MODE_CHANGED: 0x0e,
    STK_EVENT_TYPE_BROWSING_STATUS: 0x0f,
    STK_EVENT_TYPE_FRAMES_INFORMATION_CHANGED: 0x10,
    STK_SERVICE_STATE_NORMAL: 0x00,
    STK_SERVICE_STATE_LIMITED: 0x01,
    STK_SERVICE_STATE_UNAVAILABLE: 0x02,
    STK_TONE_TYPE_DIAL_TONE: 0x01,
    STK_TONE_TYPE_CALLED_SUBSCRIBER_BUSY: 0x02,
    STK_TONE_TYPE_CONGESTION: 0x03,
    STK_TONE_TYPE_RADIO_PATH_ACK: 0x04,
    STK_TONE_TYPE_RADIO_PATH_NOT_AVAILABLE: 0x05,
    STK_TONE_TYPE_ERROR: 0x06,
    STK_TONE_TYPE_CALL_WAITING_TONE: 0x07,
    STK_TONE_TYPE_RINGING_TONE: 0x08,
    STK_TONE_TYPE_GENERAL_BEEP: 0x10,
    STK_TONE_TYPE_POSITIVE_ACK_TONE: 0x11,
    STK_TONE_TYPE_NEGATIVE_ACK_TONE: 0x12,
    STK_TIME_UNIT_MINUTE: 0x00,
    STK_TIME_UNIT_SECOND: 0x01,
    STK_TIME_UNIT_TENTH_SECOND: 0x02,
    STK_LOCAL_INFO_LOCATION_INFO: 0x00,
    STK_LOCAL_INFO_IMEI: 0x01,
    STK_LOCAL_INFO_DATE_TIME_ZONE: 0x03,
    STK_LOCAL_INFO_LANGUAGE: 0x04,
    STK_TIMER_START: 0x00,
    STK_TIMER_DEACTIVATE: 0x01,
    STK_TIMER_GET_CURRENT_VALUE: 0x02
  };

  var testCommands = [
    [
      {
        group: 'STK_CMD_REFRESH',
        tests: [
        ]
      },
      {
        group: 'STK_CMD_POLL_INTERVAL',
        tests: [
        ]
      },
      {
        group: 'STK_CMD_POLL_OFF',
        tests: [
        ]
      },
      {
        group: 'STK_CMD_SET_UP_EVENT_LIST',
        tests: [
          {
            typeOfCommand: iccConsts.STK_CMD_SET_UP_EVENT_LIST,
            options: {
              "eventList": [
                iccConsts.STK_EVENT_TYPE_MT_CALL,
                iccConsts.STK_EVENT_TYPE_CALL_CONNECTED,
                iccConsts.STK_EVENT_TYPE_CALL_DISCONNECTED,
                iccConsts.STK_EVENT_TYPE_LOCATION_STATUS,
                iccConsts.STK_EVENT_TYPE_USER_ACTIVITY,
                iccConsts.STK_EVENT_TYPE_IDLE_SCREEN_AVAILABLE,
                iccConsts.STK_EVENT_TYPE_CARD_READER_STATUS,
                iccConsts.STK_EVENT_TYPE_LANGUAGE_SELECTION,
                iccConsts.STK_EVENT_TYPE_BROWSER_TERMINATION,
                iccConsts.STK_EVENT_TYPE_DATA_AVAILABLE,
                iccConsts.STK_EVENT_TYPE_CHANNEL_STATUS,
                iccConsts.STK_EVENT_TYPE_SINGLE_ACCESS_TECHNOLOGY_CHANGED,
                iccConsts.STK_EVENT_TYPE_DISPLAY_PARAMETER_CHANGED,
                iccConsts.STK_EVENT_TYPE_LOCAL_CONNECTION,
                iccConsts.STK_EVENT_TYPE_NETWORK_SEARCH_MODE_CHANGED,
                iccConsts.STK_EVENT_TYPE_BROWSING_STATUS,
                iccConsts.STK_EVENT_TYPE_FRAMES_INFORMATION_CHANGED
              ]
            }
          }
        ]
      },
      {
        group: 'STK_CMD_SET_UP_CALL',
        tests: [
        ]
      },
      {
        group: 'STK_CMD_SEND_SS',
        tests: [
          {
            typeOfCommand: iccConsts.STK_CMD_SEND_SS,
            options: {
              "text": "A message will be sent (SS)"
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_SEND_SS,
            options: {
              "text": ""
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_SEND_SS,
            options: {
              "text": null
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_SEND_SS,
            options: {}
          }
        ]
      },
      {
        group: 'STK_CMD_SEND_USSD',
        tests: [
          {
            typeOfCommand: iccConsts.STK_CMD_SEND_USSD,
            options: {
              "text": "A message will be sent (USSD)"
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_SEND_USSD,
            options: {
              "text": ""
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_SEND_USSD,
            options: {
              "text": null
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_SEND_USSD,
            options: {}
          }
        ]
      },
      {
        group: 'STK_CMD_SEND_SMS',
        tests: [
          {
            typeOfCommand: iccConsts.STK_CMD_SEND_SMS,
            options: {
              "text": "A message will be sent (SMS)"
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_SEND_SMS,
            options: {
              "text": ""
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_SEND_SMS,
            options: {
              "text": null
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_SEND_SMS,
            options: {}
          }
        ]
      },
      {
        group: 'STK_CMD_SEND_DTMF',
        tests: [
          {
            typeOfCommand: iccConsts.STK_CMD_SEND_DTMF,
            options: {
              "text": "A message will be sent (DTMF)"
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_SEND_DTMF,
            options: {
              "text": ""
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_SEND_DTMF,
            options: {
              "text": null
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_SEND_DTMF,
            options: {}
          }
        ]
      },
      {
        group: 'STK_CMD_LAUNCH_BROWSER',
        tests: [
          {
            typeOfCommand: iccConsts.STK_CMD_LAUNCH_BROWSER,
            options: {
              "confirmMessage": "Surf to Mozilla !",
              "url":"mozilla.org"
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_LAUNCH_BROWSER,
            options: {
              "url":"mozilla.org"
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_LAUNCH_BROWSER,
            options: {}
          }
        ]
      },
      {
        group: 'STK_CMD_PLAY_TONE',
        tests: [
          {
            typeOfCommand: iccConsts.STK_CMD_PLAY_TONE,
            options: {
              "tone": iccConsts.STK_TONE_TYPE_DIAL_TONE,
              "duration": {
                "timeUnit": iccConsts.STK_TIME_UNIT_SECOND,
                "timeInterval": 10
              },
              "isVibrate": true,
              "text": "Vibrator, Dial tone, 10 secs"
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_PLAY_TONE,
            options: {
              "tone": iccConsts.STK_TONE_TYPE_CALLED_SUBSCRIBER_BUSY,
              "duration": {
                "timeUnit": iccConsts.STK_TIME_UNIT_MINUTE,
                "timeInterval": 1
              },
              "isVibrate": true,
              "text": "Vibrator, called subscriber tone, 1 min"
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_PLAY_TONE,
            options: {
              "tone": iccConsts.STK_TONE_TYPE_CONGESTION,
              "duration": {
                "timeUnit": iccConsts.STK_TIME_UNIT_TENTH_SECOND,
                "timeInterval": 10
              },
              "isVibrate": true,
              "text": "Vibrator, congestion tone, 20 tenth/secods"
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_PLAY_TONE,
            options: {
              "tone": iccConsts.STK_TONE_TYPE_DIAL_TONE,
              "duration": {
                "timeUnit": iccConsts.STK_TIME_UNIT_SECOND,
                "timeInterval": 10
              },
              "text": "STK_TONE_TYPE_DIAL_TONE, 10 secs"
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_PLAY_TONE,
            options: {
              "tone": iccConsts.STK_TONE_TYPE_CALLED_SUBSCRIBER_BUSY,
              "duration": {
                "timeUnit": iccConsts.STK_TIME_UNIT_SECOND,
                "timeInterval": 10
              },
              "text": "STK_TONE_TYPE_CALLED_SUBSCRIBER_BUSY, 10 secs"
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_PLAY_TONE,
            options: {
              "tone": iccConsts.STK_TONE_TYPE_CONGESTION,
              "duration": {
                "timeUnit": iccConsts.STK_TIME_UNIT_SECOND,
                "timeInterval": 10
              },
              "text": "STK_TONE_TYPE_CONGESTION, 10 secs"
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_PLAY_TONE,
            options: {
              "tone": iccConsts.STK_TONE_TYPE_RADIO_PATH_ACK,
              "duration": {
                "timeUnit": iccConsts.STK_TIME_UNIT_SECOND,
                "timeInterval": 10
              },
              "text": "STK_TONE_TYPE_RADIO_PATH_ACK, 10 secs"
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_PLAY_TONE,
            options: {
              "tone": iccConsts.STK_TONE_TYPE_RADIO_PATH_NOT_AVAILABLE,
              "duration": {
                "timeUnit": iccConsts.STK_TIME_UNIT_SECOND,
                "timeInterval": 10
              },
              "text": "STK_TONE_TYPE_RADIO_PATH_NOT_AVAILABLE, 10 secs"
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_PLAY_TONE,
            options: {
              "tone": iccConsts.STK_TONE_TYPE_ERROR,
              "duration": {
                "timeUnit": iccConsts.STK_TIME_UNIT_SECOND,
                "timeInterval": 10
              },
              "text": "STK_TONE_TYPE_ERROR, 10 secs"
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_PLAY_TONE,
            options: {
              "tone": iccConsts.STK_TONE_TYPE_CALL_WAITING_TONE,
              "duration": {
                "timeUnit": iccConsts.STK_TIME_UNIT_SECOND,
                "timeInterval": 10
              },
              "text": "STK_TONE_TYPE_CALL_WAITING_TONE, 10 secs"
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_PLAY_TONE,
            options: {
              "tone": iccConsts.STK_TONE_TYPE_RINGING_TONE,
              "duration": {
                "timeUnit": iccConsts.STK_TIME_UNIT_SECOND,
                "timeInterval": 10
              },
              "text": "STK_TONE_TYPE_RINGING_TONE, 10 secs"
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_PLAY_TONE,
            options: {
              "tone": iccConsts.STK_TONE_TYPE_GENERAL_BEEP,
              "duration": {
                "timeUnit": iccConsts.STK_TIME_UNIT_SECOND,
                "timeInterval": 10
              },
              "text": "STK_TONE_TYPE_GENERAL_BEEP, 10 secs"
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_PLAY_TONE,
            options: {
              "tone": iccConsts.STK_TONE_TYPE_POSITIVE_ACK_TONE,
              "duration": {
                "timeUnit": iccConsts.STK_TIME_UNIT_SECOND,
                "timeInterval": 10
              },
              "text": "STK_TONE_TYPE_POSITIVE_ACK_TONE, 10 secs"
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_PLAY_TONE,
            options: {
              "tone": iccConsts.STK_TONE_TYPE_NEGATIVE_ACK_TONE,
              "duration": {
                "timeUnit": iccConsts.STK_TIME_UNIT_SECOND,
                "timeInterval": 10
              },
              "text": "STK_TONE_TYPE_NEGATIVE_ACK_TONE, 10 secs"
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_PLAY_TONE,
            options: {
              "duration": {
                "timeUnit": iccConsts.STK_TIME_UNIT_SECOND,
                "timeInterval": 10
              },
              "text": "Defautl tone, 10 secs"
            }
          }
        ]
      },
      {
        group: 'STK_CMD_DISPLAY_TEXT',
        tests: [
          {
            typeOfCommand: iccConsts.STK_CMD_DISPLAY_TEXT,
            options: {
              "text": "This is a STK Mock for testing 1/4"
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_DISPLAY_TEXT,
            options: {
              "text": "This is a STK Mock for testing 2/4"
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_DISPLAY_TEXT,
            options: {
              "text": "This is a STK Mock for testing 3/4"
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_DISPLAY_TEXT,
            options: {
              "text": "This is a STK Mock for testing 4/4"
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_DISPLAY_TEXT,
            options: {
              "text": "Simple Message text"
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_DISPLAY_TEXT,
            options: {
              "text": "Simple Message text with responseNeeded",
              "responseNeeded": true
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_DISPLAY_TEXT,
            options: {
              "text": "Simple Message text with userClear",
              "userClear": true
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_DISPLAY_TEXT,
            options: {
              "text": "Very long message ABCDEFGHIJKLMNOPQRSTUVWXYZ " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 EOF"
            }
          }
        ]
      },
      {
        group: 'STK_CMD_GET_INKEY',
        tests: [
          {
            typeOfCommand: iccConsts.STK_CMD_GET_INKEY,
            options: {
              "text": "Enter data",
              "minLength": 1,
              "maxLength": 15,
              "isHelpAvailable": true,
              "isYesNoRequested": false
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_GET_INKEY,
            options: {
              "text": "To be or not to be...",
              "isHelpAvailable": false,
              "isYesNoRequested": true
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_GET_INKEY,
            options: {
              "text": "Very long message ABCDEFGHIJKLMNOPQRSTUVWXYZ " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 EOF",
              "isHelpAvailable": true,
              "isYesNoRequested": true
            }
          }
        ]
      },
      {
        group: 'STK_CMD_GET_INPUT',
        tests: [
          {
            typeOfCommand: iccConsts.STK_CMD_GET_INPUT,
            options: {
              "text": "Enter data",
              "minLength": 0,
              "maxLength": 30,
              "isHelpAvailable": false,
              "isYesNoRequested": false
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_GET_INPUT,
            options: {
              "text": "To be or not to be...",
              "isHelpAvailable": true,
              "isYesNoRequested": true
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_GET_INPUT,
            options: {
              "text": "Very long message ABCDEFGHIJKLMNOPQRSTUVWXYZ " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 EOF",
              "isHelpAvailable": true,
              "isYesNoRequested": false
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_GET_INPUT,
            options: {
              "text": "Alphabet",
              "minLength": 0,
              "maxLength": 30,
              "isHelpAvailable": false,
              "isYesNoRequested": false,
              "isAlphabet": true
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_GET_INPUT,
            options: {
              "text": "Numeric",
              "minLength": 0,
              "maxLength": 10,
              "isHelpAvailable": false,
              "isYesNoRequested": false
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_GET_INPUT,
            options: {
              "text": "Hidden",
              "hidden": true,
              "isYesNoRequested": true
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_GET_INPUT,
            options: {
              "text": "Password",
              "minLength": 4,
              "maxLength": 15,
              "isHelpAvailable": false,
              "isYesNoRequested": false,
              "hideInput": true
            }
          }
        ]
      },
      {
        group: 'STK_CMD_SELECT_ITEM',
        tests: [
          { 
            typeOfCommand: iccConsts.STK_CMD_SELECT_ITEM,
            options: {
              "title": "Dummy Test Menu",
              "defaultItem": 20101,
              "items": [{
                "identifier": 20101,
                "text": "Item stkItemsNaiSetUpCall",
                "nai": "stkItemsNaiSetUpCall"
              },{
                "identifier": 20101,
                "text": "Item stkItemsNaiSendSs",
                "nai": "stkItemsNaiSendSs"
              },{
                "identifier": 20101,
                "text": "Item stkItemsNaiSendUssd",
                "nai": "stkItemsNaiSendUssd"
              },{
                "identifier": 20101,
                "text": "Item stkItemsNaiSendSms",
                "nai": "stkItemsNaiSendSms"
              },{
                "identifier": 20101,
                "text": "Item stkItemsNaiSendDtmf",
                "nai": "stkItemsNaiSendDtmf"
              },{
                "identifier": 20101,
                "text": "Item stkItemsNaiLaunchBrowser",
                "nai": "stkItemsNaiLaunchBrowser"
              },{
                "identifier": 20101,
                "text": "Item stkItemsNaiPlayTone",
                "nai": "stkItemsNaiPlayTone"
              },{
                "identifier": 20101,
                "text": "Item stkItemsNaiDisplayText",
                "nai": "stkItemsNaiDisplayText"
              },{
                "identifier": 20101,
                "text": "Item stkItemsNaiGetInkey",
                "nai": "stkItemsNaiGetInkey"
              },{
                "identifier": 20101,
                "text": "Item stkItemsNaiGetInput",
                "nai": "stkItemsNaiGetInput"
              },{
                "identifier": 20101,
                "text": "Item stkItemsNaiSelectItem",
                "nai": "stkItemsNaiSelectItem"
              },{
                "identifier": 20101,
                "text": "Item stkItemsNaiSetUpMenu",
                "nai": "stkItemsNaiSetUpMenu"
              },{
                "identifier": 20101,
                "text": "Item stkItemsNaiProvideLocalInfo",
                "nai": "stkItemsNaiProvideLocalInfo"
              },{
                "identifier": 20101,
                "text": "Item stkItemsNaiSetIdleModeText",
                "nai": "stkItemsNaiSetIdleModeText"
              },{
                "identifier": 20101,
                "text": "Item stkItemsNaiOpenChannel",
                "nai": "stkItemsNaiOpenChannel"
              },{
                "identifier": 20101,
                "text": "Item stkItemsNaiCloseChannel",
                "nai": "stkItemsNaiCloseChannel"
              },{
                "identifier": 20101,
                "text": "Item stkItemsNaiReceiveData",
                "nai": "stkItemsNaiReceiveData"
              },{
                "identifier": 20101,
                "text": "Item stkItemsNaiSendData",
                "nai": "stkItemsNaiSendData"
              },{
                "identifier": 20101,
                "text": "Item stkItemsNaiGetChannelStatus",
                "nai": "stkItemsNaiGetChannelStatus"
              }]
            }
          }
        ]
      },
      {
        group: 'STK_CMD_SET_UP_MENU',
        tests: [
          {
            "commandNumber": 1,
            "typeOfCommand": iccConsts.STK_CMD_SET_UP_MENU,
            "commandQualifier": 0,
            "rilMessageType": "stkcommand",
            "options": {
              "title": "Test Main Menu",
              "items": [{
                "identifier": 1,
                "text": "Dummy 1"
              },
              {
                "identifier": 2,
                "text": "Dummy 2"
              },
              {
                "identifier": 3,
                "text": "Dummy 3"
              }],
              "presentationType":0
            }
          }
        ]
      },
      {
        group: 'STK_CMD_PROVIDE_LOCAL_INFO',
        tests: [
        ]
      },
      {
        group: 'STK_CMD_TIMER_MANAGEMENT',
        tests: [
        ]
      },
      {
        group: 'STK_CMD_SET_UP_IDLE_MODE_TEXT',
        tests: [
          {
            typeOfCommand: iccConsts.STK_CMD_SET_UP_IDLE_MODE_TEXT,
            options: {
              "text": "Simple Idle Message text"
            }
          },
          {
            typeOfCommand: iccConsts.STK_CMD_SET_UP_IDLE_MODE_TEXT,
            options: {
              "text": "Long Idle Message text ABCDEFGHIJKLMNOPQRSTUVWXYZ " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 " +
                      "1234567890 1234567890 1234567890 1234567890 EOF"
            }
          }
        ]
      }
    ]
  ]

  var testCommandsOLD = [
    {
      "commandNumber": 1,
      "typeOfCommand": iccConsts.STK_CMD_SET_UP_MENU,
      "commandQualifier": 0,
      "rilMessageType": "stkcommand",
      "options": {
        "title": "Test Main Menu",
        "items": [{
          "identifier": 1,
          "text": "Dummy 1"
        },
        {
          "identifier": 2,
          "text": "Dummy 2"
        },
        {
          "identifier": 3,
          "text": "Dummy 3"
        }],
        "presentationType":0,
        "isHelpAvailable": true
      }
    },
    { 
      typeOfCommand: iccConsts.STK_CMD_SELECT_ITEM,
      options: {
        "title": "Dummy Test Menu",
        "defaultItem": 20101,
        "items": [{
          "identifier": 20101,
          "text": "Item stkItemsNaiSetUpCall",
          "nai": "stkItemsNaiSetUpCall"
        },{
          "identifier": 20101,
          "text": "Item stkItemsNaiSendSs",
          "nai": "stkItemsNaiSendSs"
        },{
          "identifier": 20101,
          "text": "Item stkItemsNaiSendUssd",
          "nai": "stkItemsNaiSendUssd"
        },{
          "identifier": 20101,
          "text": "Item stkItemsNaiSendSms",
          "nai": "stkItemsNaiSendSms"
        },{
          "identifier": 20101,
          "text": "Item stkItemsNaiSendDtmf",
          "nai": "stkItemsNaiSendDtmf"
        },{
          "identifier": 20101,
          "text": "Item stkItemsNaiLaunchBrowser",
          "nai": "stkItemsNaiLaunchBrowser"
        },{
          "identifier": 20101,
          "text": "Item stkItemsNaiPlayTone",
          "nai": "stkItemsNaiPlayTone"
        },{
          "identifier": 20101,
          "text": "Item stkItemsNaiDisplayText",
          "nai": "stkItemsNaiDisplayText"
        },{
          "identifier": 20101,
          "text": "Item stkItemsNaiGetInkey",
          "nai": "stkItemsNaiGetInkey"
        },{
          "identifier": 20101,
          "text": "Item stkItemsNaiGetInput",
          "nai": "stkItemsNaiGetInput"
        },{
          "identifier": 20101,
          "text": "Item stkItemsNaiSelectItem",
          "nai": "stkItemsNaiSelectItem"
        },{
          "identifier": 20101,
          "text": "Item stkItemsNaiSetUpMenu",
          "nai": "stkItemsNaiSetUpMenu"
        },{
          "identifier": 20101,
          "text": "Item stkItemsNaiProvideLocalInfo",
          "nai": "stkItemsNaiProvideLocalInfo"
        },{
          "identifier": 20101,
          "text": "Item stkItemsNaiSetIdleModeText",
          "nai": "stkItemsNaiSetIdleModeText"
        },{
          "identifier": 20101,
          "text": "Item stkItemsNaiOpenChannel",
          "nai": "stkItemsNaiOpenChannel"
        },{
          "identifier": 20101,
          "text": "Item stkItemsNaiCloseChannel",
          "nai": "stkItemsNaiCloseChannel"
        },{
          "identifier": 20101,
          "text": "Item stkItemsNaiReceiveData",
          "nai": "stkItemsNaiReceiveData"
        },{
          "identifier": 20101,
          "text": "Item stkItemsNaiSendData",
          "nai": "stkItemsNaiSendData"
        },{
          "identifier": 20101,
          "text": "Item stkItemsNaiGetChannelStatus",
          "nai": "stkItemsNaiGetChannelStatus"
        }]
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_DISPLAY_TEXT,
      options: {
        "text": "This is a STK Mock for testing 1/4"
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_DISPLAY_TEXT,
      options: {
        "text": "This is a STK Mock for testing 2/4"
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_DISPLAY_TEXT,
      options: {
        "text": "This is a STK Mock for testing 3/4"
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_DISPLAY_TEXT,
      options: {
        "text": "This is a STK Mock for testing 4/4"
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_SET_UP_EVENT_LIST,
      options: {
        "eventList": [
          iccConsts.STK_EVENT_TYPE_MT_CALL,
          iccConsts.STK_EVENT_TYPE_CALL_CONNECTED,
          iccConsts.STK_EVENT_TYPE_CALL_DISCONNECTED,
          iccConsts.STK_EVENT_TYPE_LOCATION_STATUS,
          iccConsts.STK_EVENT_TYPE_USER_ACTIVITY,
          iccConsts.STK_EVENT_TYPE_IDLE_SCREEN_AVAILABLE,
          iccConsts.STK_EVENT_TYPE_CARD_READER_STATUS,
          iccConsts.STK_EVENT_TYPE_LANGUAGE_SELECTION,
          iccConsts.STK_EVENT_TYPE_BROWSER_TERMINATION,
          iccConsts.STK_EVENT_TYPE_DATA_AVAILABLE,
          iccConsts.STK_EVENT_TYPE_CHANNEL_STATUS,
          iccConsts.STK_EVENT_TYPE_SINGLE_ACCESS_TECHNOLOGY_CHANGED,
          iccConsts.STK_EVENT_TYPE_DISPLAY_PARAMETER_CHANGED,
          iccConsts.STK_EVENT_TYPE_LOCAL_CONNECTION,
          iccConsts.STK_EVENT_TYPE_NETWORK_SEARCH_MODE_CHANGED,
          iccConsts.STK_EVENT_TYPE_BROWSING_STATUS,
          iccConsts.STK_EVENT_TYPE_FRAMES_INFORMATION_CHANGED
        ]
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_SEND_SS,
      options: {
        "text": "A message will be sent (SS)"
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_SEND_SS,
      options: {
        "text": ""
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_SEND_SS,
      options: {
        "text": null
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_SEND_SS,
      options: {}
    },
    {
      typeOfCommand: iccConsts.STK_CMD_SEND_USSD,
      options: {
        "text": "A message will be sent (USSD)"
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_SEND_USSD,
      options: {
        "text": ""
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_SEND_USSD,
      options: {
        "text": null
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_SEND_USSD,
      options: {}
    },
    {
      typeOfCommand: iccConsts.STK_CMD_SEND_SMS,
      options: {
        "text": "A message will be sent (SMS)"
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_SEND_SMS,
      options: {
        "text": ""
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_SEND_SMS,
      options: {
        "text": null
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_SEND_SMS,
      options: {}
    },
    {
      typeOfCommand: iccConsts.STK_CMD_SEND_DTMF,
      options: {
        "text": "A message will be sent (DTMF)"
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_SEND_DTMF,
      options: {
        "text": ""
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_SEND_DTMF,
      options: {
        "text": null
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_SEND_DTMF,
      options: {}
    },
    {
      typeOfCommand: iccConsts.STK_CMD_LAUNCH_BROWSER,
      options: {
        "confirmMessage": "Surf to Mozilla !",
        "url":"mozilla.org"
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_LAUNCH_BROWSER,
      options: {
        "url":"mozilla.org"
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_LAUNCH_BROWSER,
      options: {}
    },
    {
      typeOfCommand: iccConsts.STK_CMD_PLAY_TONE,
      options: {
        "tone": iccConsts.STK_TONE_TYPE_DIAL_TONE,
        "duration": {
          "timeUnit": iccConsts.STK_TIME_UNIT_SECOND,
          "timeInterval": 10
        },
        "isVibrate": true,
        "text": "Vibrator, Dial tone, 10 secs"
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_PLAY_TONE,
      options: {
        "tone": iccConsts.STK_TONE_TYPE_CALLED_SUBSCRIBER_BUSY,
        "duration": {
          "timeUnit": iccConsts.STK_TIME_UNIT_MINUTE,
          "timeInterval": 1
        },
        "isVibrate": true,
        "text": "Vibrator, called subscriber tone, 1 min"
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_PLAY_TONE,
      options: {
        "tone": iccConsts.STK_TONE_TYPE_CONGESTION,
        "duration": {
          "timeUnit": iccConsts.STK_TIME_UNIT_TENTH_SECOND,
          "timeInterval": 10
        },
        "isVibrate": true,
        "text": "Vibrator, congestion tone, 20 tenth/secods"
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_PLAY_TONE,
      options: {
        "tone": iccConsts.STK_TONE_TYPE_DIAL_TONE,
        "duration": {
          "timeUnit": iccConsts.STK_TIME_UNIT_SECOND,
          "timeInterval": 10
        },
        "text": "STK_TONE_TYPE_DIAL_TONE, 10 secs"
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_PLAY_TONE,
      options: {
        "tone": iccConsts.STK_TONE_TYPE_CALLED_SUBSCRIBER_BUSY,
        "duration": {
          "timeUnit": iccConsts.STK_TIME_UNIT_SECOND,
          "timeInterval": 10
        },
        "text": "STK_TONE_TYPE_CALLED_SUBSCRIBER_BUSY, 10 secs"
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_PLAY_TONE,
      options: {
        "tone": iccConsts.STK_TONE_TYPE_CONGESTION,
        "duration": {
          "timeUnit": iccConsts.STK_TIME_UNIT_SECOND,
          "timeInterval": 10
        },
        "text": "STK_TONE_TYPE_CONGESTION, 10 secs"
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_PLAY_TONE,
      options: {
        "tone": iccConsts.STK_TONE_TYPE_RADIO_PATH_ACK,
        "duration": {
          "timeUnit": iccConsts.STK_TIME_UNIT_SECOND,
          "timeInterval": 10
        },
        "text": "STK_TONE_TYPE_RADIO_PATH_ACK, 10 secs"
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_PLAY_TONE,
      options: {
        "tone": iccConsts.STK_TONE_TYPE_RADIO_PATH_NOT_AVAILABLE,
        "duration": {
          "timeUnit": iccConsts.STK_TIME_UNIT_SECOND,
          "timeInterval": 10
        },
        "text": "STK_TONE_TYPE_RADIO_PATH_NOT_AVAILABLE, 10 secs"
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_PLAY_TONE,
      options: {
        "tone": iccConsts.STK_TONE_TYPE_ERROR,
        "duration": {
          "timeUnit": iccConsts.STK_TIME_UNIT_SECOND,
          "timeInterval": 10
        },
        "text": "STK_TONE_TYPE_ERROR, 10 secs"
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_PLAY_TONE,
      options: {
        "tone": iccConsts.STK_TONE_TYPE_CALL_WAITING_TONE,
        "duration": {
          "timeUnit": iccConsts.STK_TIME_UNIT_SECOND,
          "timeInterval": 10
        },
        "text": "STK_TONE_TYPE_CALL_WAITING_TONE, 10 secs"
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_PLAY_TONE,
      options: {
        "tone": iccConsts.STK_TONE_TYPE_RINGING_TONE,
        "duration": {
          "timeUnit": iccConsts.STK_TIME_UNIT_SECOND,
          "timeInterval": 10
        },
        "text": "STK_TONE_TYPE_RINGING_TONE, 10 secs"
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_PLAY_TONE,
      options: {
        "tone": iccConsts.STK_TONE_TYPE_GENERAL_BEEP,
        "duration": {
          "timeUnit": iccConsts.STK_TIME_UNIT_SECOND,
          "timeInterval": 10
        },
        "text": "STK_TONE_TYPE_GENERAL_BEEP, 10 secs"
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_PLAY_TONE,
      options: {
        "tone": iccConsts.STK_TONE_TYPE_POSITIVE_ACK_TONE,
        "duration": {
          "timeUnit": iccConsts.STK_TIME_UNIT_SECOND,
          "timeInterval": 10
        },
        "text": "STK_TONE_TYPE_POSITIVE_ACK_TONE, 10 secs"
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_PLAY_TONE,
      options: {
        "tone": iccConsts.STK_TONE_TYPE_NEGATIVE_ACK_TONE,
        "duration": {
          "timeUnit": iccConsts.STK_TIME_UNIT_SECOND,
          "timeInterval": 10
        },
        "text": "STK_TONE_TYPE_NEGATIVE_ACK_TONE, 10 secs"
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_PLAY_TONE,
      options: {
        "duration": {
          "timeUnit": iccConsts.STK_TIME_UNIT_SECOND,
          "timeInterval": 10
        },
        "text": "Defautl tone, 10 secs"
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_DISPLAY_TEXT,
      options: {
        "text": "Simple Message text"
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_DISPLAY_TEXT,
      options: {
        "text": "Simple Message text with responseNeeded",
        "responseNeeded": true
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_DISPLAY_TEXT,
      options: {
        "text": "Simple Message text with userClear",
        "userClear": true
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_DISPLAY_TEXT,
      options: {
        "text": "Very long message ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890 " +
                "1234567890 1234567890 1234567890 1234567890 1234567890 " +
                "1234567890 1234567890 1234567890 1234567890 1234567890 " +
                "1234567890 1234567890 1234567890 1234567890 1234567890 " +
                "1234567890 1234567890 1234567890 1234567890 1234567890 " +
                "1234567890 1234567890 1234567890 1234567890 1234567890 " +
                "1234567890 1234567890 1234567890 1234567890 1234567890 " +
                "1234567890 1234567890 1234567890 1234567890 1234567890 " +
                "1234567890 1234567890 1234567890 1234567890 1234567890 " +
                "1234567890 1234567890 1234567890 1234567890 1234567890 " +
                "1234567890 1234567890 1234567890 1234567890 1234567890 " +
                "1234567890 1234567890 1234567890 1234567890 1234567890 " +
                "1234567890 1234567890 1234567890 1234567890 1234567890 EOF"
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_GET_INKEY,
      options: {
        "text": "Enter data",
        "minLength": 1,
        "maxLength": 15,
        "isHelpAvailable": true,
        "isYesNoRequested": false
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_GET_INKEY,
      options: {
        "text": "To be or not to be...",
        "isHelpAvailable": false,
        "isYesNoRequested": true
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_GET_INKEY,
      options: {
        "text": "Very long message ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890 " +
                "1234567890 1234567890 1234567890 1234567890 1234567890 " +
                "1234567890 1234567890 1234567890 1234567890 1234567890 " +
                "1234567890 1234567890 1234567890 1234567890 1234567890 " +
                "1234567890 1234567890 1234567890 1234567890 1234567890 " +
                "1234567890 1234567890 1234567890 1234567890 1234567890 " +
                "1234567890 1234567890 1234567890 1234567890 1234567890 " +
                "1234567890 1234567890 1234567890 1234567890 1234567890 " +
                "1234567890 1234567890 1234567890 1234567890 1234567890 " +
                "1234567890 1234567890 1234567890 1234567890 1234567890 " +
                "1234567890 1234567890 1234567890 1234567890 1234567890 " +
                "1234567890 1234567890 1234567890 1234567890 1234567890 " +
                "1234567890 1234567890 1234567890 1234567890 1234567890 EOF",
        "isHelpAvailable": true,
        "isYesNoRequested": true
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_GET_INPUT,
      options: {
        "text": "Enter data",
        "minLength": 0,
        "maxLength": 30,
        "isHelpAvailable": false,
        "isYesNoRequested": false
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_GET_INPUT,
      options: {
        "text": "To be or not to be...",
        "isHelpAvailable": true,
        "isYesNoRequested": true
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_GET_INPUT,
      options: {
        "text": "Very long message ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890 " +
        "1234567890 1234567890 1234567890 1234567890 1234567890 " +
        "1234567890 1234567890 1234567890 1234567890 1234567890 " +
        "1234567890 1234567890 1234567890 1234567890 1234567890 " +
        "1234567890 1234567890 1234567890 1234567890 1234567890 " +
        "1234567890 1234567890 1234567890 1234567890 1234567890 " +
        "1234567890 1234567890 1234567890 1234567890 1234567890 " +
        "1234567890 1234567890 1234567890 1234567890 1234567890 " +
        "1234567890 1234567890 1234567890 1234567890 1234567890 " +
        "1234567890 1234567890 1234567890 1234567890 1234567890 " +
        "1234567890 1234567890 1234567890 1234567890 1234567890 " +
        "1234567890 1234567890 1234567890 1234567890 1234567890 " +
        "1234567890 1234567890 1234567890 1234567890 1234567890 EOF",
        "isHelpAvailable": true,
        "isYesNoRequested": false
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_GET_INPUT,
      options: {
        "text": "Alphabet",
        "minLength": 0,
        "maxLength": 30,
        "isHelpAvailable": false,
        "isYesNoRequested": false,
        "isAlphabet": true
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_GET_INPUT,
      options: {
        "text": "Numeric",
        "minLength": 0,
        "maxLength": 10,
        "isHelpAvailable": false,
        "isYesNoRequested": false
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_GET_INPUT,
      options: {
        "text": "Hidden",
        "hidden": true,
        "isYesNoRequested": true
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_GET_INPUT,
      options: {
        "text": "Password",
        "minLength": 4,
        "maxLength": 15,
        "isHelpAvailable": false,
        "isYesNoRequested": false,
        "hideInput": true
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_DISPLAY_TEXT,
      options: {
        "text": "Tested while navigating through the STK menues ;)"
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_SET_UP_IDLE_MODE_TEXT,
      options: {
        "text": "Simple Idle Message text"
      }
    },
    {
      typeOfCommand: iccConsts.STK_CMD_SET_UP_IDLE_MODE_TEXT,
      options: {
        "text": "Long Idle Message text ABCDEFGHIJKLMNOPQRSTUVWXYZ " +
                "1234567890 1234567890 1234567890 1234567890 1234567890 " +
                "1234567890 1234567890 1234567890 1234567890 1234567890 " +
                "1234567890 1234567890 1234567890 1234567890 1234567890 " +
                "1234567890 1234567890 1234567890 1234567890 1234567890 " +
                "1234567890 1234567890 1234567890 1234567890 1234567890 " +
                "1234567890 1234567890 1234567890 1234567890 1234567890 " +
                "1234567890 1234567890 1234567890 1234567890 1234567890 " +
                "1234567890 1234567890 1234567890 1234567890 1234567890 " +
                "1234567890 1234567890 1234567890 1234567890 1234567890 " +
                "1234567890 1234567890 1234567890 1234567890 1234567890 " +
                "1234567890 1234567890 1234567890 1234567890 1234567890 " +
                "1234567890 1234567890 1234567890 1234567890 1234567890 EOF"
      }
    }
  ];

  function init() {
    // Try to set real iccIds
    icc._iccManager.oniccdetected = function (evt) {
      if (navigator.mozMobileConnections.length > 0)
        iccId1 = navigator.mozMobileConnections[0].iccId;
      if (navigator.mozMobileConnections.length > 1)
        iccId2 = navigator.mozMobileConnections[1].iccId;
      //console.log('STKTester # ICC Id 1 = ' + iccId1 + ' # ICC Id 2 = ' +
      //  iccId2, navigator.mozMobileConnections[0].iccId);
    }
    // End setting real iccIds
/*
    // Change getIcc for testing purposes
    icc.getIcc = function icc_getIcc(iccId) {
      DUMP('STKTester # Getting ICC (test mode) for ' + iccId);
      if (icc._iccManager.getIccById) {
        var iccObject = icc._iccManager.getIccById(iccId);
        if (!iccObject) {
          DUMP('STKTester # Using ICC from first real card');
          // Return first real card
          iccObject = icc._iccManager.getIccById(iccId1);
        }
        return iccObject;
      }
    };
    // End of getIcc change for testing    
*/
  }

  function launchCommandOLD(number, card_iccId, delayed) {
    function _launch(number, card_iccId) {
      DUMP('STKTester # Going to launch STK test command ' +
        testCommandsOLD[number].typeOfCommand + ': ', testCommandsOLD[number]);
      icc.handleSTKCommand({
        command: testCommandsOLD[number],
        iccId: card_iccId
      });
    }
    if (delayed > 0) {
      DUMP('STKTester # Delaying STK test command ' + delayed + ' msecs');
      setTimeout(function() {
        _launch(number, card_iccId);
      }, delayed);
    } else {
      _launch(number, card_iccId);
    }
  }

  function launchAllCommandsOLD(cardNumber, delayed) {
    var lastCard = 0;
    var testInterval = setInterval(function() {
      DUMP('STKTester # -------------------------------------');
      DUMP('STKTester # Test ' + lastCard + ' / ' + testCommandsOLD.length);
      DUMP('STKTester # -------------------------------------');
      launchCommandOLD(lastCard, (cardNumber == 1 && iccId1) || iccId2);
      lastCard++;
      if (lastCard >= testCommandsOLD.length) {
        clearInterval(testInterval);
      }
    }, delayed);
  }

  // Initializate
  init();

  return {
    launch_card1: function launch_card1(number, delayed) {
      launchCommandOLD(number, iccId1, delayed);
    },
    launch_card2: function launch_card2(number, delayed) {
      launchCommandOLD(number, iccId2, delayed);
    },
    // Use adb logcat -v time | egrep 'ICC|STK|icc|stk'
    // for check traces (enable Gaia DUMP ;)
    launchAll: function launchAll(card, delayed) {
      launchAllCommandsOLD(card, delayed);
    }
  };
})();

//stkTester.launch_card2(0, 10000); // Main Menu
//stkTester.launch_card2(1, 15000); // SelectItem

//stkTester.launch_card1(2, 10000); // DISPLAY
//stkTester.launch_card1(54, 20000); // INPUT
//stkTester.launch_card1(56, 10000); // IDLE TEXT

//stkTester.launch_card1(6, 10000); // Events
//stkTester.launch_card2(11, 10000);
//stkTester.launch_card1(39, 10000);
/*
setTimeout(function() {
  stkTester.launchAll(1, 5000);
}, 30000);
*/
/*
setTimeout(function() {
  stkTester.launchAll(2, 10000);
}, 30000);
*/
