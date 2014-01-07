sap.ui.controller("com.gb.view.Shell", {

	onNavigate:function(evt){

		switch(evt.getParameter("key")){
			case "key1":
  				this.getView().byId("oShell").setContent(sap.ui.xmlview("com.gb.view.First"));
  				break;
			case "key2":
				this.getView().byId("oShell").setContent(sap.ui.xmlview("com.gb.view.Second"));
				break;
			default:
				this.getView().byId("oShell").setContent(sap.ui.xmlview("com.gb.view.First"));
		}
	}

});