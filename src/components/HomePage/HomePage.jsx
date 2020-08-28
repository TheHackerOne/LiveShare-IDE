import React from 'react';
import styles from './HomePage.module.css';

function HomePage() {
  return (
		<div className={styles.outerdiv}>
			<form className={styles.innerdiv}>
				<fieldset>
					<label htmlFor='username'>Username</label>
					<input type='text' />
				</fieldset>
				<fieldset>
					<label htmlFor='roomID'>Room ID</label>
					<input type='text' />
				</fieldset>
				<button type='submit' className={styles.btn}>Create/Join Room</button>
			</form>
		</div>
	);
}

export default HomePage
