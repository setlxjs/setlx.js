var1 = 12;
var2 = 14;
if ( true ) {
var1 = 2;
}
if ( "false" ) {
var1 = 4;
} else {
var1 = 4;
var2 = 14;
}
if ( false ) {
var2 = var1;
} else if ( 35 ) {
var1 = var2;
} else {
var2 = 31;
}