#pragma strict

private var thisTransform : Transform;
 private var velocity : Vector2;
 var target : Transform; 
 var smoothTime = 0.3;
 //var xOffset : float = 5.0;
//var yOffset : float = 5.0;
 
 function Start()
 {
        thisTransform = transform;
 }
 
 function LateUpdate()
 {
 
        //thisTransform.position.x = Mathf.Lerp( thisTransform.position.x, target.position.x + xOffset, Time.deltaTime * smoothTime);
 
        thisTransform.position.y = Mathf.Lerp( thisTransform.position.y, target.position.y ,  Time.deltaTime * smoothTime);
 
 }