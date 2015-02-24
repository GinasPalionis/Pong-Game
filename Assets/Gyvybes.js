#pragma strict
static var zaidejas1taskai = 0;
static var zaidejas2taskai = 0;
static var zaidejas1gyvybes = 100;
static var zaidejas2gyvybes = 100;
function Start () {

}

static function Taskai (sienospav : String) {

if (sienospav == "Desine")
{
zaidejas1taskai += 1 ;
zaidejas2gyvybes -= 1 ;
}
else
{

zaidejas2taskai += 1;
zaidejas1gyvybes -= 1;
}
if (zaidejas1taskai == 15 )
{

zaidejas1gyvybes +=3;

}
else if (zaidejas2taskai == 15)
{

zaidejas2gyvybes +=3;

}

if (zaidejas1taskai == 20)
{
Application.LoadLevel ("Level2");

} 

else if (zaidejas2taskai == 20)
{

Application.LoadLevel("Level2");
}
}