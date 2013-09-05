!function() {
  var stkCommands = {
    STK_CMD_REFRESH                                 : "0x01",
    STK_CMD_POLL_INTERVAL                           : "0x03",
    STK_CMD_POLL_OFF                                : "0x04",
    STK_CMD_SET_UP_EVENT_LIST                       : "0x05",
    STK_CMD_SET_UP_CALL                             : "0x10",
    STK_CMD_SEND_SS                                 : "0x11",
    STK_CMD_SEND_USSD                               : "0x12",
    STK_CMD_SEND_SMS                                : "0x13",
    STK_CMD_SEND_DTMF                               : "0x14",
    STK_CMD_LAUNCH_BROWSER                          : "0x15",
    STK_CMD_PLAY_TONE                               : "0x20",
    STK_CMD_DISPLAY_TEXT                            : "0x21",
    STK_CMD_GET_INKEY                               : "0x22",
    STK_CMD_GET_INPUT                               : "0x23",
    STK_CMD_SELECT_ITEM                             : "0x24",
    STK_CMD_SET_UP_MENU                             : "0x25",
    STK_CMD_PROVIDE_LOCAL_INFO                      : "0x26",
    STK_CMD_TIMER_MANAGEMENT                        : "0x27",
    STK_CMD_SET_UP_IDLE_MODE_TEXT                   : "0x28" };
  var stkEvents = {
    STK_EVENT_TYPE_MT_CALL                          : "0x00",
    STK_EVENT_TYPE_CALL_CONNECTED                   : "0x01",
    STK_EVENT_TYPE_CALL_DISCONNECTED                : "0x02",
    STK_EVENT_TYPE_LOCATION_STATUS                  : "0x03",
    STK_EVENT_TYPE_USER_ACTIVITY                    : "0x04",
    STK_EVENT_TYPE_IDLE_SCREEN_AVAILABLE            : "0x05",
    STK_EVENT_TYPE_CARD_READER_STATUS               : "0x06",
    STK_EVENT_TYPE_LANGUAGE_SELECTION               : "0x07",
    STK_EVENT_TYPE_BROWSER_TERMINATION              : "0x08",
    STK_EVENT_TYPE_DATA_AVAILABLE                   : "0x09",
    STK_EVENT_TYPE_CHANNEL_STATUS                   : "0x0a",
    STK_EVENT_TYPE_SINGLE_ACCESS_TECHNOLOGY_CHANGED : "0x0b",
    STK_EVENT_TYPE_DISPLAY_PARAMETER_CHANGED        : "0x0c",
    STK_EVENT_TYPE_LOCAL_CONNECTION                 : "0x0d",
    STK_EVENT_TYPE_NETWORK_SEARCH_MODE_CHANGED      : "0x0e",
    STK_EVENT_TYPE_BROWSING_STATUS                  : "0x0f",
    STK_EVENT_TYPE_FRAMES_INFORMATION_CHANGED       : "0x10" };
  var stkTones = {
    STK_TONE_TYPE_DIAL_TONE                         : "0x01",
    STK_TONE_TYPE_CALLED_SUBSCRIBER_BUSY            : "0x02",
    STK_TONE_TYPE_CONGESTION                        : "0x03",
    STK_TONE_TYPE_RADIO_PATH_ACK                    : "0x04",
    STK_TONE_TYPE_RADIO_PATH_NOT_AVAILABLE          : "0x05",
    STK_TONE_TYPE_ERROR                             : "0x06",
    STK_TONE_TYPE_CALL_WAITING_TONE                 : "0x07",
    STK_TONE_TYPE_RINGING_TONE                      : "0x08",
    STK_TONE_TYPE_GENERAL_BEEP                      : "0x10",
    STK_TONE_TYPE_POSITIVE_ACK_TONE                 : "0x11",
    STK_TONE_TYPE_NEGATIVE_ACK_TONE                 : "0x12" };
  var stkTimeUnit = {
    STK_TIME_UNIT_MINUTE                            : "0x00",
    STK_TIME_UNIT_SECOND                            : "0x01",
    STK_TIME_UNIT_TENTH_SECOND                      : "0x02" };

  var select = document.getElementById('stk-commands');
  Object.keys(stkCommands).forEach(function (element) {
    var optionEl = document.createElement('option');
    optionEl.innerHTML = element;
    optionEl.value = stkCommands[element];
    select.appendChild(optionEl);
  });
}();