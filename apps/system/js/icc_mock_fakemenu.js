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
        "text": "NO"
      }]
    },
    "subMenus": {
      1: {
          "cmd": iccObject.STK_CMD_SELECT_ITEM,
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
          "cmd": iccObject.STK_CMD_DISPLAY_TEXT,
          "opt": {
            "text": "HOLA2"
          },
          "parent": 0
      },

      101: {
          "cmd": iccObject.STK_CMD_SELECT_ITEM,
          "opt": {
            "title": "STK_CMD_REFRESH",
            "defaultItem": 10101,
            "items": [{
              "identifier": 10101,
              "text": "test1"
            },{
              "identifier": 1,
              "text": "volver"
            }]
          },
          "parent": 1
      },

      10101: {
          "cmd": iccObject.STK_CMD_DISPLAY_TEXT,
          "opt": {
            "text": "HOLA10101"
          },
          "parent": 101
      }
    }
  };
}