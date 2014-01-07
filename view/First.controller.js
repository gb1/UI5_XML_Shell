sap.ui.controller("com.gb.view.First", {

    handleListSelect: function(oEvent) {
        this.navigation.navTo("idViewApp--idViewSecond", oEvent.getParameter("listItem").getBindingContext());
    }


});