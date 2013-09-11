!function() {

  function debug(str) {
    dump('mozIccManager: ' + str + '\n');
  }

  FFOS_RUNTIME.makeNavigatorShim('mozIccManager', {
    iccInfo: {
      iccid: true
    },
    cardState: 'absent',
    setCardLock: function() {
      debug('setCardLock');
    },
    getCardLock: function() {
      debug('getCardLock');
    },
    unlockCardLock: function() {
      debug('unlockCardLock');
    },
    addEventListener: function() {
      debug('addEventListener');
    },
    removeEventListener: function() {
      debug('removeEventListener');
    },

    /////////////////////////////////////////////////////////////////
    // SIM Application ToolKit (STK) - (from nsIDOMIccManager.idl)
    /////////////////////////////////////////////////////////////////
    STK_MENU_TYPE_NOT_SPECIFIED                     : "0x00",
    STK_MENU_TYPE_DATA_VALUES                       : "0x01",
    STK_MENU_TYPE_NAVIGATION_OPTIONS                : "0x03",
    STK_BROWSER_MODE_LAUNCH_IF_NOT_ALREADY_LAUNCHED : "0x00",
    STK_BROWSER_MODE_USING_EXISTING_BROWSER         : "0x02",
    STK_BROWSER_MODE_USING_NEW_BROWSER              : "0x03",
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
    STK_CMD_SET_UP_IDLE_MODE_TEXT                   : "0x28",
    STK_RESULT_OK                                   : "0x00",
    STK_RESULT_PRFRMD_WITH_PARTIAL_COMPREHENSION    : "0x01",
    STK_RESULT_PRFRMD_WITH_MISSING_INFO             : "0x02",
    STK_RESULT_PRFRMD_WITH_ADDITIONAL_EFS_READ      : "0x03",
    STK_RESULT_PRFRMD_LIMITED_SERVICE               : "0x06",
    STK_RESULT_UICC_SESSION_TERM_BY_USER            : "0x10",
    STK_RESULT_BACKWARD_MOVE_BY_USER                : "0x11",
    STK_RESULT_NO_RESPONSE_FROM_USER                : "0x12",
    STK_RESULT_HELP_INFO_REQUIRED                   : "0x13",
    STK_RESULT_USSD_SS_SESSION_TERM_BY_USER         : "0x14",
    STK_RESULT_TERMINAL_CRNTLY_UNABLE_TO_PROCESS    : "0x20",
    STK_RESULT_NETWORK_CRNTLY_UNABLE_TO_PROCESS     : "0x21",
    STK_RESULT_USER_NOT_ACCEPT                      : "0x22",
    STK_RESULT_USER_CLEAR_DOWN_CALL                 : "0x23",
    STK_RESULT_LAUNCH_BROWSER_ERROR                 : "0x26",
    STK_RESULT_BEYOND_TERMINAL_CAPABILITY           : "0x30",
    STK_RESULT_CMD_TYPE_NOT_UNDERSTOOD              : "0x31",
    STK_RESULT_CMD_DATA_NOT_UNDERSTOOD              : "0x32",
    STK_RESULT_CMD_NUM_NOT_KNOWN                    : "0x33",
    STK_RESULT_SS_RETURN_ERROR                      : "0x34",
    STK_RESULT_SMS_RP_ERROR                         : "0x35",
    STK_RESULT_REQUIRED_VALUES_MISSING              : "0x36",
    STK_RESULT_USSD_RETURN_ERROR                    : "0x37",
    STK_RESULT_MULTI_CARDS_CMD_ERROR                : "0x38",
    STK_RESULT_USIM_CALL_CONTROL_PERMANENT          : "0x39",
    STK_RESULT_BIP_ERROR                            : "0x3a",
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
    STK_EVENT_TYPE_FRAMES_INFORMATION_CHANGED       : "0x10",
    STK_SERVICE_STATE_NORMAL                        : "0x00",
    STK_SERVICE_STATE_LIMITED                       : "0x01",
    STK_SERVICE_STATE_UNAVAILABLE                   : "0x02",
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
    STK_TONE_TYPE_NEGATIVE_ACK_TONE                 : "0x12",
    STK_TIME_UNIT_MINUTE                            : "0x00",
    STK_TIME_UNIT_SECOND                            : "0x01",
    STK_TIME_UNIT_TENTH_SECOND                      : "0x02",
    STK_LOCAL_INFO_LOCATION_INFO                    : "0x00",
    STK_LOCAL_INFO_IMEI                             : "0x01",
    STK_LOCAL_INFO_DATE_TIME_ZONE                   : "0x03",
    STK_LOCAL_INFO_LANGUAGE                         : "0x04",
    STK_TIMER_START                                 : "0x00",
    STK_TIMER_DEACTIVATE                            : "0x01",
    STK_TIMER_GET_CURRENT_VALUE                     : "0x02",

    /**
     * Send the response back to ICC after an attempt to execute STK Proactive
     * Command.
     *
     * @param command
     *        Command received from ICC. See MozStkCommand.
     * @param response
     *        The response that will be sent to ICC.
     * @see MozStkResponse for the detail of response.
     */
    sendStkResponse: function(command, response) {
      debug('Response received: ',response);
      debug('Command: ', command);
      var _subMenu = null;

      switch (response.resultCode) {
      case this.STK_RESULT_OK:
        if (response.itemIdentifier) {
          _subMenu = this.iccMenu['subMenus'][response.itemIdentifier];
        } else {
          _subMenu = this.iccMenu['subMenus'][this._lastMenuOptionSent];
        }
        this._lastMenuOptionSent = response.itemIdentifier;
        if (_subMenu.cmd == icc.STK_CMD_SELECT_ITEM) {
          this._lastMenu = response.itemIdentifier;
        }
        this.emitCommand(
          this.createCommand(
            _subMenu.cmd,
            _subMenu.opt
          ));
        break;
      case this.STK_RESULT_PRFRMD_WITH_PARTIAL_COMPREHENSION:
      case this.STK_RESULT_PRFRMD_WITH_MISSING_INFO:
      case this.STK_RESULT_PRFRMD_WITH_ADDITIONAL_EFS_READ:
      case this.STK_RESULT_PRFRMD_LIMITED_SERVICE:
      case this.STK_RESULT_UICC_SESSION_TERM_BY_USER:
        debug('Response not implemented');
        this.sendToParent();
      case this.STK_RESULT_BACKWARD_MOVE_BY_USER:
      case this.STK_RESULT_NO_RESPONSE_FROM_USER:
        this.sendToParent();
        break;
      case this.STK_RESULT_HELP_INFO_REQUIRED:
      case this.STK_RESULT_USSD_SS_SESSION_TERM_BY_USER:
      case this.STK_RESULT_TERMINAL_CRNTLY_UNABLE_TO_PROCESS:
      case this.STK_RESULT_NETWORK_CRNTLY_UNABLE_TO_PROCESS:
      case this.STK_RESULT_USER_NOT_ACCEPT:
      case this.STK_RESULT_USER_CLEAR_DOWN_CALL:
      case this.STK_RESULT_LAUNCH_BROWSER_ERROR:
      case this.STK_RESULT_BEYOND_TERMINAL_CAPABILITY:STK/Bug881675
      case this.STK_RESULT_CMD_TYPE_NOT_UNDERSTOOD:
      case this.STK_RESULT_CMD_DATA_NOT_UNDERSTOOD:
      case this.STK_RESULT_CMD_NUM_NOT_KNOWN:
      case this.STK_RESULT_SS_RETURN_ERROR:
      case this.STK_RESULT_SMS_RP_ERROR:
      case this.STK_RESULT_REQUIRED_VALUES_MISSING:
      case this.STK_RESULT_USSD_RETURN_ERROR:
      case this.STK_RESULT_MULTI_CARDS_CMD_ERROR:
      case this.STK_RESULT_USIM_CALL_CONTROL_PERMANENT:
      case this.STK_RESULT_BIP_ERROR:
        debug('Response not implemented');
        this.sendToParent();
        break;
      default:
        debug('Response not recognized');
        this.sendToParent();
      }
    },

    /**
     * Send the "Menu Selection" Envelope command to ICC for menu selection.
     *
     * @param itemIdentifier
     *        The identifier of the item selected by user.
     * @param helpRequested
     *        true if user requests to provide help information, false otherwise.
     */
    sendStkMenuSelection: function(itemIdentifier, helpRequested) {
      debug('Menu selected: ', itemIdentifier);
      helpRequested && debug('Help requested');

      var _subMenu = this.iccMenu['subMenus'][itemIdentifier];
      if (helpRequested) {
        this.emitCommand(
          this.createCommand(
            this.STK_CMD_DISPLAY_TEXT,
            {
              "text": _subMenu.help || "No help provided"
            }
          ));
        return;
      }
      this.emitCommand(
        this.createCommand(
          _subMenu.cmd,
          _subMenu.opt
        ));
    },

    /**
     * Send the "Timer Expiration" Envelope command to ICC for TIMER MANAGEMENT.
    `*
     * @param timer
     *        The identifier and value for a timer.
     *        timerId: Identifier of the timer that has expired.
     *        timerValue: Different between the time when this command is issued
     *                    and when the timer was initially started.
     *        @see MozStkTimer
     */
    sendStkTimerExpiration: function(timer) {
      debug('icc_mock - method not yet implemented');
    },

    /**
     * Send "Event Download" Envelope command to ICC.
     * ICC will not respond with any data for this command.
     *
     * @param event
     *        one of events below:
     *        - MozStkLocationEvent
     *        - MozStkCallEvent
     *        - MozStkLanguageSelectionEvent
     *        - MozStkGeneralEvent
     */
    sendStkEventDownload: function(event) {
      debug('icc_mock - method not yet implemented');
    },

    /**
     * The 'stkcommand' event is notified whenever STK Proactive Command is
     * issued from ICC.
     */
    onstkcommand: function() {
      debug('onstkcommand not changed');
    },

    /**
     * 'stksessionend' event is notified whenever STK Session is terminated by
     * ICC.
     */
    onstksessionend: function() {
      debug('onstksessionend not changed');
    },

    // UICC Phonebook Interfaces.

    /**
     * Read ICC contacts.
     *
     * @param contactType
     *        One of type as below,
     *        - 'adn': Abbreviated Dialling Number
     *        - 'fdn': Fixed Dialling Number
     */
    readContacts: function(contactType) {
      debug('icc_mock - method not yet implemented');
    },

    /**
     * Update ICC Phonebook contact.
     *
     * @param contactType
     *        One of type as below,
     *        - 'adn': Abbreviated Dialling Number
     *        - 'fdn': Fixed Dialling Number
     * @param contact
     *        The contact will be updated in ICC
     * @param [optional] pin2
     *        PIN2 is only required for 'fdn'.
     */
    updateContact: function(contactType, contact, pin2) {
      debug('icc_mock - method not yet implemented');
    },

    // End of UICC Phonebook Interfaces.

    // UICC Secure Element Interfaces

    /**
     * A secure element is a smart card chip that can hold
     * several different applications with the necessary security.
     * The most known secure element is the Universal Integrated Circuit Card (UICC)
     */

    /**
     * Send request to open a logical channel defined by its
     * application identifier (AID)
     *
     * @param aid
     *        The Application Identifier of the Applet to be selected on this channel
     * return value : An instance of Channel (channelID) if available or null.
     */
    iccOpenChannel: function(aid) {
      debug('icc_mock - method not yet implemented');
    },

    /**
     * Interface, used to communicate with an applet through the
     * Application Data Protocol Units (APDUs) and is
     * used for all data that is exchanged between the UICC card and the terminal (ME).
     *
     * @param channel
     *        The Application Identifier of the Applet to which APDU is directed
     * @param apdu
     *        Application Protocol Data Unit
     * return value : Response APDU
     */
    iccExchangeAPDU: function(channel, apdu) {
      debug('icc_mock - method not yet implemented');
    },

    /**
     * Send request to close the selected logical channel identified by its
     * application identifier (AID)
     *
     * @param aid
     *        The Application Identifier of the Applet , to be closed
     */
    iccCloseChannel: function(channel) {
      debug('icc_mock - method not yet implemented');
    }

  }, true);

  setInterval(function() {
    debug("......");
    if (!navigator.mozIccManager || !navigator.mozIccManager.onstkcommand)
      return;
    debug("++++++");
    navigator.mozIccManager.onstkcommand({
      "commandNumber":1,
      "typeOfCommand":16,
      "commandQualifier":0,
      "options":{
        "confirmMessage":"Screen in SAT menu",
        "callMessage":"",
        "address":"33155663732"
      }
    });
  }, 5000);
}();
