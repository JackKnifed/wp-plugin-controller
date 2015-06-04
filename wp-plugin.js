function ReadQuery() {
    // runs every time that you change the db or prefix values
    // generates a MySQL query to output the values you need later on
    dbname = document.getElementById("DBName").value;
    prefix = document.getElementById("Prefix").value;

    var query = '';

    if dbname != '' {
        query = "SELECT option_value FROM `" +
            dbname + "`.`" + prefix +
            "options` WHERE option_name = 'active_plugins';";
    } else {
        query = "SELECT option_value FROM `" + prefix +
            "options` WHERE option_name = 'active_plugins';";
    }

    document.getElementById("ReadQuery").value = query;
}

function GenerateBoxes() {
    // generates a bunch of textboxes in a div for each plugin that was enabled
    uncleanArray = document.getElementById("OldPlugins").value;
    // probably need to add something to clean stuff off the front and back of the array?	
    oldPlugins = unserialize(uncleanArray);

    var pluginContainer = document.getElementById("PluginContainer");
    pluginContainer.innerHTML = '';

    for (i = 0; i < oldPlugins.length; i++) {
        checkboxContainer = document.createElement("div");
        checkBoxContainer.class = "checkboxContainer";

        pluginCheckbox = document.createElement("input");
        pluginCheckbox.type = "checkbox";
        pluginCheckbox.class = "pluginCheckbox";
        pluginCheckbox.onclick = GenerateBoxes();
        pluginCheckbox.onkeyup = GenerateBoxes();
        pluginCheckbox.name = uncleanArray[i];

        pluginLabel - document.createElement("label");
        pluginLabel.class = "checkboxLabel";
        pluginLabel.value = uncleanArray[i];

        checkboxContainer.appendChild(pluginCheckbox);
        checkboxContainer.appendChild(pluginLabel);
        pluginContainer.appendChild(checkBoxContainer);
    }
}

function CreateQuery() {
    // generatesa a query to update wordpress with the new enabled plugins
    disableAll = document.getElementById("DisableAllPlugins");
    outputTextBox = document.getElementBy('UpdateQuery');
    dbname = document.getElementById("DBName").value;
    prefix = document.getElementById("Prefix").value;
    pluginContainer = document.getElementById("PluginContainer");
    enabledPlugins = [];

    if (disableAll.checked == false) {
        for (var i in pluginContainer.children) {
            for (var j in pluginContainer[i].children) {
                if (pluginContainer[i][j].type == "checkbox" && pluginContainer[i][j].checked == true) {
                    enabledPlugins.push(pluginContainer[i][j].name);
                }
            }
        }
    }

    serialPlugins = serialize(enabledPlugins);

if dbname != '' {
    updateQuery = "UPDATE `" + dbname + "`.`" + prefix + "options` SET option_value = '" +
        serialPlugins + "' WHERE option_name = 'active_plugins';";
} else {
    updateQuery = "UPDATE `" + prefix + "options` SET option_value = '" +
        serialPlugins + "' WHERE option_name = 'active_plugins';";
}

    outputTextBox.value = updateQuery;
}