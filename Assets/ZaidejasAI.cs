using UnityEngine;
using System.Collections;

public class ZaidejasAI : MonoBehaviour {
	
	public Transform Target;
	private GameObject Ball;
	private GameObject Player2;
	private float Range;
	public float Speed;
	
	
	// Use this for initialization
	void Start () {
		Ball = GameObject.FindGameObjectWithTag ("Ball");
		Player2 = GameObject.FindGameObjectWithTag ("Player2");
	}
	
	// Update is called once per frame
	void Update () {
		Range = Vector2.Distance (Ball.transform.position, Player2.transform.position);
		if (Range <= 15f) {
			transform.Translate(Vector2.MoveTowards (Ball.transform.position, Player2.transform.position, Range) * Speed * Time.deltaTime);
		}
	}
}