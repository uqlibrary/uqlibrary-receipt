/**
 * By Jan-Willem Wisgerhof <j.wisgerhof@uq.edu.au>
 */
(function () {
  Polymer({
    is: 'uqlibrary-receipt',
    properties: {
      /**
       * Whether the transaction succeeded
       */
      _success: {
        type: Boolean,
        value: false
      },
      /**
       * The receipt number
       */
      _receiptNr: {
        type: String,
        value: ''
      },
      /**
       * The receipt value
       */
      _value: {
        type: Number,
        value: 0
      }
    },
    attached: function () {
      this._success = (this._getQueryVariable("Success") == 1);
      this._receiptNr = this._getQueryVariable("Receipt");
      this._value = parseInt(this._getQueryVariable("AmountPaid")) / 100;

      this.fire("uqlibrary-receipt-loaded");
    },
    /**
     * Returns a string
     * @private
     */
    _successString: function (success) {
      return (success ? "successful" : "unsuccessful");
    },
    /**
     * Gets a query variable from the URL
     * @param variable
     * @returns {*}
     * @private
     */
    _getQueryVariable: function (variable) {
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
          return pair[1];
        }
      }
      return (false);
    }
  });
})();