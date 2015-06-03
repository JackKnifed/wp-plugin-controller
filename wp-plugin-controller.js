function ReadQuery() {
    // runs every time that you change the db or prefix values
    // generates a MySQL query to output the values you need later on

    var prefix = document.getElementById("Prefix")
    var db = document.getElementById("DBName")

    var query = "SELECT option_value FROM `" + db.value + "`.`" + prefix.value + "options` WHERE option_name = 'active_plugins';"

    document.getElementById("ReadQuery").value = query
}