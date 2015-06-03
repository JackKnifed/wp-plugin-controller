function ReadQuery() {
    // runs every time that you change the db or prefix values
    // generates a MySQL query to output the values you need later on
    dbname = document.getElementById("DBName").value;
    prefix = document.getElementById("Prefix").value;

    var query = "SELECT option_value FROM `" +
        dbname + "`.`" + prefix +
        "options` WHERE option_name = 'active_plugins';";

    document.getElementById("ReadQuery").value = query;
}

function GenerateBoxes() {
    uncleanArray = document.getElementById("OldPlugins").value;
        // probably need to add something to clean stuff off the front and back of the array?	
    oldPlugins = unserialize(uncleanArray);

    var pluginContainer = document.getElementById("PluginContainer");
		pluginContainer.innerHTML = '';

		for(i=0; i<oldPlugins.length; i++){
			checkboxContainer = document.createElement("div");
			checkBoxContainer.class = "checkboxContainer";

			pluginCheckbox = document.createElement("input");
			pluginCheckbox.type = "checkbox";
			pluginCheckbox.class = "pluginCheckbox";
			pluginCheckbox.name = uncleanArray[i];

			pluginLabel - document.createElement("label");
			pluginLabel.class = "checkboxLabel";
			pluginLabel.value = uncleanArray[i];

			checkboxContainer.appendChild(pluginCheckbox);
			checkboxContainer.appendChild(pluginLabel);
			pluginContainer.appendChild(checkBoxContainer);
		}
}