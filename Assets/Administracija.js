#pragma strict

static var zaidejas1taskai = 0;
static var zaidejas2taskai = 0;
static var zaidejas1gyvybes = 20;
static var zaidejas2gyvybes = 20;
var theSkin : GUISkin;
var kamuolys : Transform;
function Start () {

kamuolys = GameObject.FindGameObjectWithTag ("Ball").transform;
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


}



function OnGUI ()
{
GUI.skin = theSkin;
GUI.Label ( new Rect (Screen.width/2 -150-12, 20 , 100 ,100), "" + zaidejas1taskai);
GUI.Label ( new Rect (Screen.width/2 +150-12, 20 , 100 ,100), "" + zaidejas2taskai);
GUI.Label (new Rect (Screen.width/2 -250, 20, 100 , 100), "G:" + zaidejas1gyvybes);
GUI.Label (new Rect (Screen.height +350,20, 100 , 100), "G:" + zaidejas2gyvybes);
if (GUI.Button (new Rect (Screen.width/2-130/2, 35, 121, 53), "Perkrauti")){

zaidejas1taskai = 0;
zaidejas2taskai = 0;
zaidejas1gyvybes = 20;
zaidejas2gyvybes = 20;
kamuolys.gameObject.SendMessage ("Reset");

}



}



static function gyvybes ()
{
if (zaidejas1gyvybes == 0){
GameOver();

}
else if (zaidejas2gyvybes ==0)
{
GameOver();

}
}
static function GameOver()
 {
 Debug.Log("Game Over");
 Application.LoadLevel("gameover");
 }
 

