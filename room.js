// Decide when to change room etc..

function player_dead(){
	
	// When the player dies
	player.x = 0;
	player.y = 0;
	player.velocity.current = 0;
	player.health.state = 100;
	
	// Get rid of the enemies and projectiles
	enemy = []; // Empty array
	projectile = []; // Empty array
}