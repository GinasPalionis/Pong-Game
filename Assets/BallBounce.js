#pragma strict

function Start () {
 yield WaitForSeconds (5);
 Pradzia();


}

function OnCollisionEnter2D (colInfo : Collision2D){

if (colInfo.collider.tag == "Player"){

rigidbody2D.velocity.y = rigidbody2D.velocity.y/2 + colInfo.collider.rigidbody2D.velocity.y/3;
audio.Play();

}



}

function Reset (){

rigidbody2D.velocity.y = 0;
rigidbody2D.velocity.x = 0;
transform.position.y = 0;
transform.position.x = 0;

yield WaitForSeconds (1);
Pradzia();

}




function Pradzia () {
var randomNumber = Random.Range (0, 2);
if (randomNumber <= 0.5)
{
rigidbody2D.AddForce (new Vector2 (80, 10));
}
else {
rigidbody2D.AddForce (new Vector2 (-80, -10));
}
}