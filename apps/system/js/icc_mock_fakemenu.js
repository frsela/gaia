function getICCFakeMenu(iccObject) {
  return {
    "mainMenu": {
      "title": "STK Faked",
      "isHelpAvailable": true,
      "items": [{
        "identifier": 1,
        "text": "STK Commands Tests"
      },{
        "identifier": 2,
        "text": "NAI menu (Bug #874308)"
      },{
        "identifier": 3,
        "text": "About..."
      }]
    },
    "subMenus": {
      1: {
          "cmd": iccObject.STK_CMD_SELECT_ITEM,
          "help": "Shows a list of STK commands to be tested",
          "opt": {
              "title": "STK Commands Tests",
              "defaultItem": 101,
              "items": [{
                    "identifier": 101,
                    "text": "STK_CMD_REFRESH"
                  },{
                    "identifier": 102,
                    "text": "STK_CMD_POLL_INTERVAL"
                  },{
                    "identifier": 103,
                    "text": "STK_CMD_POLL_OFF"
                  },{
                    "identifier": 104,
                    "text": "STK_CMD_SET_UP_EVENT_LIST"
                  },{
                    "identifier": 105,
                    "text": "STK_CMD_SEND_SS"
                  },{
                    "identifier": 106,
                    "text": "STK_CMD_SEND_USSD"
                  },{
                    "identifier": 107,
                    "text": "STK_CMD_SEND_SMS"
                  },{
                    "identifier": 108,
                    "text": "STK_CMD_SEND_DTMF"
                  },{
                    "identifier": 109,
                    "text": "STK_CMD_LAUNCH_BROWSER"
                  },{
                    "identifier": 110,
                    "text": "STK_CMD_DISPLAY_TEXT"
                  },{
                    "identifier": 111,
                    "text": "STK_CMD_GET_INKEY"
                  },{
                    "identifier": 112,
                    "text": "STK_CMD_GET_INPUT"
                  },{
                    "identifier": 113,
                    "text": "STK_CMD_SELECT_ITEM"
                  },{
                    "identifier": 114,
                    "text": "STK_CMD_SET_UP_MENU"
                  },{
                    "identifier": 115,
                    "text": "STK_CMD_PROVIDE_LOCAL_INFO"
                  },{
                    "identifier": 116,
                    "text": "STK_CMD_TIMER_MANAGEMENT"
                  },{
                    "identifier": 117,
                    "text": "STK_CMD_SET_UP_IDLE_MODE_TEXT"
              }]
          },
          "parent": 0
      },

      2: {
          "cmd": iccObject.STK_CMD_SELECT_ITEM,
          "help": "Shows a menu with next action indicators (see #874308)",
          "opt": {
              "title": "STK Commands Tests",
              "defaultItem": 201,
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
          },
          "parent": 0
      },

      3: {
          "cmd": iccObject.STK_CMD_DISPLAY_TEXT,
          "help": "Shows the about page",
          "opt": {
            "text": "This is a STK Mock for testing"
          },
          "parent": 0
      },

      // Menu 1: Commands tests

      // STK_CMD_REFRESH
      101: {
        "cmd": iccObject.STK_CMD_DISPLAY_TEXT,
        "opt": {
          "text": "Command not yet mocked"
        },
        "parent": 1
      },

      // STK_CMD_POLL_INTERVAL
      102: {
        "cmd": iccObject.STK_CMD_DISPLAY_TEXT,
        "opt": {
          "text": "Command not yet mocked"
        },
        "parent": 1
      },

      // STK_CMD_POLL_OFF
      103: {
        "cmd": iccObject.STK_CMD_DISPLAY_TEXT,
        "opt": {
          "text": "Command not yet mocked"
        },
        "parent": 1
      },

      // STK_CMD_SET_UP_EVENT_LIST
      104: {
        "cmd": iccObject.STK_CMD_SELECT_ITEM,
        "opt": {
          "title": "STK_CMD_SET_UP_EVENT_LIST",
          "defaultItem": 10401,
          "items": [{
            "identifier": 10401,
            "text": "Register all STK events"
          },{
            "identifier": 1,
            "text": "Return to main menu"
          }]
        },
        "parent": 1
      },
      10401: {
        "cmd": iccObject.STK_CMD_SET_UP_EVENT_LIST,
        "opt": {
          "eventList": [
            iccObject.STK_EVENT_TYPE_MT_CALL,
            iccObject.STK_EVENT_TYPE_CALL_CONNECTED,
            iccObject.STK_EVENT_TYPE_CALL_DISCONNECTED,
            iccObject.STK_EVENT_TYPE_LOCATION_STATUS,
            iccObject.STK_EVENT_TYPE_USER_ACTIVITY,
            iccObject.STK_EVENT_TYPE_IDLE_SCREEN_AVAILABLE,
            iccObject.STK_EVENT_TYPE_CARD_READER_STATUS,
            iccObject.STK_EVENT_TYPE_LANGUAGE_SELECTION,
            iccObject.STK_EVENT_TYPE_BROWSER_TERMINATION,
            iccObject.STK_EVENT_TYPE_DATA_AVAILABLE,
            iccObject.STK_EVENT_TYPE_CHANNEL_STATUS,
            iccObject.STK_EVENT_TYPE_SINGLE_ACCESS_TECHNOLOGY_CHANGED,
            iccObject.STK_EVENT_TYPE_DISPLAY_PARAMETER_CHANGED,
            iccObject.STK_EVENT_TYPE_LOCAL_CONNECTION,
            iccObject.STK_EVENT_TYPE_NETWORK_SEARCH_MODE_CHANGED,
            iccObject.STK_EVENT_TYPE_BROWSING_STATUS,
            iccObject.STK_EVENT_TYPE_FRAMES_INFORMATION_CHANGED
          ]
        },
        "parent": 104
      },

      // STK_CMD_SEND_SS
      105: {
        "cmd": iccObject.STK_CMD_SELECT_ITEM,
        "opt": {
          "title": "STK_CMD_SEND_SS",
          "defaultItem": 10501,
          "items": [{
            "identifier": 10501,
            "textSend SS with confirm message"
          },{
            "identifier": 10502,
            "text": "empty confirm message"
          },{
            "identifier": 10503,
            "text": "null confirm message"
          },{
            "identifier": 10504,
            "text": "undefined confirm message"
          },{
            "identifier": 1,
            "text": "Return to main menu"
          }]
        },
        "parent": 1
      },
      10501: {
        "cmd": iccObject.STK_CMD_SEND_SS,
        "opt": {
          "text": "A message will be sent (SS)"
        },
        "parent": 105
      },
      10502: {
        "cmd": iccObject.STK_CMD_SEND_SS,
        "opt": {
          "text": ""
        },
        "parent": 105
      },
      10502: {
        "cmd": iccObject.STK_CMD_SEND_SS,
        "opt": {
          "text": null
        },
        "parent": 105
      },
      10504: {
        "cmd": iccObject.STK_CMD_SEND_SS,
        "opt": {
        },
        "parent": 105
      },

      // STK_CMD_SEND_USSD
      106: {
        "cmd": iccObject.STK_CMD_SELECT_ITEM,
        "opt": {
          "title": "STK_CMD_SEND_USSD",
          "defaultItem": 10601,
          "items": [{
            "identifier": 10601,
            "text": "with confirm message"
          },{
            "identifier": 10602,
            "text": "empty confirm message"
          },{
            "identifier": 10603,
            "text": "null confirm message"
          },{
            "identifier": 10604,
            "text": "undefined confirm message"
          },{
            "identifier": 1,
            "text": "Return to main menu"
          }]
        },
        "parent": 1
      },
      10601: {
        "cmd": iccObject.STK_CMD_SEND_USSD,
        "opt": {
          "text": "A message will be sent (USSD)"
        },
        "parent": 106
      },
      10602: {
        "cmd": iccObject.STK_CMD_SEND_USSD,
        "opt": {
          "text": ""
        },
        "parent": 106
      },
      10602: {
        "cmd": iccObject.STK_CMD_SEND_USSD,
        "opt": {
          "text": null
        },
        "parent": 106
      },
      10604: {
        "cmd": iccObject.STK_CMD_SEND_USSD,
        "opt": {
        },
        "parent": 106
      },

      // STK_CMD_SEND_SMS
      107: {
        "cmd": iccObject.STK_CMD_SELECT_ITEM,
        "opt": {
          "title": "STK_CMD_SEND_SMS",
          "defaultItem": 10701,
          "items": [{
            "identifier": 10701,
            "text": "with confirm message"
          },{
            "identifier": 10702,
            "text": "empty confirm message"
          },{
            "identifier": 10703,
            "text": "null confirm message"
          },{
            "identifier": 10704,
            "text": "undefined confirm message"
          },{
            "identifier": 1,
            "text": "Return to main menu"
          }]
        },
        "parent": 1
      },
      10701: {
        "cmd": iccObject.STK_CMD_SEND_SMS,
        "opt": {
          "text": "A message will be sent (SMS)"
        },
        "parent": 107
      },
      10702: {
        "cmd": iccObject.STK_CMD_SEND_SMS,
        "opt": {
          "text": ""
        },
        "parent": 107
      },
      10702: {
        "cmd": iccObject.STK_CMD_SEND_SMS,
        "opt": {
          "text": null
        },
        "parent": 107
      },
      10704: {
        "cmd": iccObject.STK_CMD_SEND_SMS,
        "opt": {
        },
        "parent": 107
      },

      // STK_CMD_SEND_DTMF
      108: {
        "cmd": iccObject.STK_CMD_SELECT_ITEM,
        "opt": {
          "title": "STK_CMD_SEND_DTMF",
          "defaultItem": 10801,
          "items": [{
            "identifier": 10801,
            "text": "with confirm message"
          },{
            "identifier": 10802,
            "text": "empty confirm message"
          },{
            "identifier": 10803,
            "text": "null confirm message"
          },{
            "identifier": 10804,
            "text": "undefined confirm message"
          },{
            "identifier": 1,
            "text": "Return to main menu"
          }]
        },
        "parent": 1
      },
      10801: {
        "cmd": iccObject.STK_CMD_SEND_DTMF,
        "opt": {
          "text": "A message will be sent (DTMF)"
        },
        "parent": 108
      },
      10802: {
        "cmd": iccObject.STK_CMD_SEND_DTMF,
        "opt": {
          "text": ""
        },
        "parent": 108
      },
      10802: {
        "cmd": iccObject.STK_CMD_SEND_DTMF,
        "opt": {
          "text": null
        },
        "parent": 108
      },
      10804: {
        "cmd": iccObject.STK_CMD_SEND_DTMF,
        "opt": {
        },
        "parent": 108
      },

      // STK_CMD_LAUNCH_BROWSER
      109: {
        "cmd": iccObject.STK_CMD_SELECT_ITEM,
        "opt": {
          "title": "STK_CMD_DISPLAY_TEXT",
          "defaultItem": 10901,
          "items": [{
            "identifier": 10901,
            "text": "go to mozilla (with confirm)"
          },{
            "identifier": 10902,
            "text": "go to mozilla (no confirm)"
          },{
            "identifier": 10903,
            "text": "default URL"
          },{
            "identifier": 1,
            "text": "Return to main menu"
          }]
        },
        "parent": 1
      },
      10901: {
        "cmd": iccObject.STK_CMD_LAUNCH_BROWSER,
        "opt": {
          "confirmMessage": "Surf to Mozilla !",
          "url":"mozilla.org"
        },
        "parent": 109
      },
      10902: {
        "cmd": iccObject.STK_CMD_LAUNCH_BROWSER,
        "opt": {
          "url":"mozilla.org"
        },
        "parent": 109
      },
      10903: {
        "cmd": iccObject.STK_CMD_LAUNCH_BROWSER,
        "opt": {
        },
        "parent": 109
      },

      // STK_CMD_DISPLAY_TEXT
      110: {
        "cmd": iccObject.STK_CMD_SELECT_ITEM,
        "opt": {
          "title": "STK_CMD_DISPLAY_TEXT",
          "defaultItem": 11001,
          "items": [{
            "identifier": 11001,
            "text": "Show a simple message"
          },{
            "identifier": 11002,
            "text": "responseNeeded message"
          },{
            "identifier": 11003,
            "text": "userClear message"
          },{
            "identifier": 11004,
            "text": "Show a very long message"
          },{
            "identifier": 1,
            "text": "Return to main menu"
          }]
        },
        "parent": 1
      },
      11001: {
        "cmd": iccObject.STK_CMD_DISPLAY_TEXT,
        "opt": {
          "text": "Simple Message text"
        },
        "parent": 110
      },
      11002: {
        "cmd": iccObject.STK_CMD_DISPLAY_TEXT,
        "opt": {
          "text": "Simple Message text with responseNeeded",
          "responseNeeded": true
        },
        "parent": 110
      },
      11003: {
        "cmd": iccObject.STK_CMD_DISPLAY_TEXT,
        "opt": {
          "text": "Simple Message text with userClear",
          "userClear": true
        },
        "parent": 110
      },
      11004: {
        "cmd": iccObject.STK_CMD_DISPLAY_TEXT,
        "opt": {
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
        },
        "parent": 110
      },

      // STK_CMD_GET_INKEY
      111: {
        "cmd": iccObject.STK_CMD_DISPLAY_TEXT,
        "opt": {
          "text": "Command not yet mocked"
        },
        "parent": 1
      },

      // STK_CMD_GET_INPUT
      112: {
        "cmd": iccObject.STK_CMD_DISPLAY_TEXT,
        "opt": {
          "text": "Command not yet mocked"
        },
        "parent": 1
      },

      // STK_CMD_SELECT_ITEM
      113: {
        "cmd": iccObject.STK_CMD_DISPLAY_TEXT,
        "opt": {
          "text": "Tested while navigating through the STK menues ;)"
        },
        "parent": 1
      },

      // STK_CMD_SET_UP_MENU
      114: {
        "cmd": iccObject.STK_CMD_DISPLAY_TEXT,
        "opt": {
          "text": "Tested showing the Main menu in settings ;)"
        },
        "parent": 1
      },

      // STK_CMD_PROVIDE_LOCAL_INFO
      115: {
        "cmd": iccObject.STK_CMD_DISPLAY_TEXT,
        "opt": {
          "text": "Command not yet mocked"
        },
        "parent": 1
      },

      // STK_CMD_TIMER_MANAGEMENT
      116: {
        "cmd": iccObject.STK_CMD_DISPLAY_TEXT,
        "opt": {
          "text": "Command not yet mocked"
        },
        "parent": 1
      },

      // STK_CMD_SET_UP_IDLE_MODE_TEXT
      117: {
        "cmd": iccObject.STK_CMD_SELECT_ITEM,
        "opt": {
          "title": "STK_CMD_DISPLAY_TEXT",
          "defaultItem": 11701,
          "items": [{
            "identifier": 11701,
            "text": "Show a simple idle message"
          },{
            "identifier": 11702,
            "text": "Show a very long message"
          },{
            "identifier": 1,
            "text": "Return to main menu"
          }]
        },
        "parent": 1
      },
      11701: {
        "cmd": iccObject.STK_CMD_SET_UP_IDLE_MODE_TEXT,
        "opt": {
          "text": "Simple Idle Message text"
        },
        "parent": 110
      },
      11702: {
        "cmd": iccObject.STK_CMD_SET_UP_IDLE_MODE_TEXT,
        "opt": {
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
        },
        "parent": 110
      },

      // Menu 2: NAI tests
      20101: {
          "cmd": iccObject.STK_CMD_DISPLAY_TEXT,
          "help": "Next Action Indicator test",
          "opt": {
            "text": "The NAI text should be displayed bellow the menu string"
          },
          "parent": 0
      }

    }
  };
}