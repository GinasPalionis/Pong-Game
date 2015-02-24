#pragma strict

var mainCam: Camera;

var virsus : BoxCollider2D;
var apacia : BoxCollider2D;
var kaire : BoxCollider2D;
var desine: BoxCollider2D;

var zaidejas1 : Transform;
var zaidejas2 : Transform;


function Start () {
virsus.size = new Vector2 (mainCam.ScreenToWorldPoint (new Vector3 (Screen.width * 2f, 0f, 0f)).x ,1f);
virsus.center = new Vector2 (0f, mainCam.ScreenToWorldPoint (new Vector3 (0f, Screen.height, 0f)).y + 0.5f);

apacia.size = new Vector2 (mainCam.ScreenToWorldPoint (new Vector3 (Screen.width * 2f, 0f, 0f)).x ,1f);
apacia.center = new Vector2 (0f, mainCam.ScreenToWorldPoint (new Vector3 (0f, 0f, 0f)).y - 0.5f);

kaire.size = new Vector2 (1f, mainCam.ScreenToWorldPoint (new Vector3 (0f, Screen.height * 2f, 0f)).y);;
kaire.center = new Vector2 (mainCam.ScreenToWorldPoint (new Vector3 (0f, 0f, 0f)).x - 0.5f, 0f);

desine.size = new Vector2 (1f, mainCam.ScreenToWorldPoint (new Vector3 (0f, Screen.height * 2f, 0f)).y);
desine.center = new Vector2 (mainCam.ScreenToWorldPoint (new Vector3 (Screen.width, 0f, 0f)).x + 0.5f, 0f);


zaidejas1.position.x = mainCam.ScreenToWorldPoint (new Vector3 (75f, 0f, 0f)).x;
zaidejas2.position.x = mainCam.ScreenToWorldPoint (new Vector3 (Screen.width -75f, 0f, 0f)).x;










}