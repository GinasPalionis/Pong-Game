#pragma strict

function OnTriggerEnter2D (hitInfo : Collider2D) {
if (hitInfo.name == "Ball")
{
var sienospav = transform.name;
audio.Play();
Administracija.Taskai (sienospav);
Administracija.gyvybes();
audio.Play();
hitInfo.gameObject.SendMessage("Reset");


}


}

