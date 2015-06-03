function ReadQuery() {
    // runs every time that you change the db or prefix values
    // generates a MySQL query to output the values you need later on

    var query = "SELECT option_value FROM `" +
        document.getElementById("DBName") + "`.`" +
        document.getElementById("Prefix") + 
        "options` WHERE option_name = 'active_plugins';"

    document.getElementById("ReadQuery").value = query
}