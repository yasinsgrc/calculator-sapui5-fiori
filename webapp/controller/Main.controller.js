sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("casetwo.controller.Main", {
			onInit: function () {

			},
			calculate: function () {
				var item1Value = this.getView().byId("input1").getValue(); // get prices values on the screen 
				var item2Value = this.getView().byId("input2").getValue();
				var total = Number(item1Value) + Number(item2Value);  // set the values to integer from string
				this.getView().byId("total").setText(total); // and set the total values
			}
		});
	});
