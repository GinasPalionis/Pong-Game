using UnityEngine;
using System.Collections;

public class zaidejas2 : MonoBehaviour {

	public Transform Player;

	Vector3 Direction;

	// Use this for initialization
	void Start () {
	 
		Direction = transform.position - Player.transform.position;

	}
	
	// Update is called once per frame
	void LateUpdate () {
	
		transform.position = Player.transform.position + Direction;

	}


}
