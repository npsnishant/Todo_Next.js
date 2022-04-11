import { useState } from 'react';
import styles from "../styles/Home.module.css";
import Image from 'next/image'
import imgDel from '../public/clos.png'

const Index = () => {

	const [task, setTask] = useState('');
	const [list, setList] = useState([]);

	const handleChange = (e) => {
		// console.log(e)
		e.preventDefault();
		setTask(e.target.value);
		// console.log(task);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		setList([
			task,
			...list
		])

		setTask("");
		// console.log(list)
	}

	const handleDelete = (todo) => {
		const new_del = list.filter(todoItem => list.indexOf(todoItem) != list.indexOf(todo));
		setList(new_del);
	}

	return (
		<>
			<div className={styles.body}>
				<div className={styles.container}>
					<div className={styles.newtask}>
						<input value={task} onChange={handleChange} type="text" placeholder="Task to be done.." />
						<button onClick={handleSubmit} className="push">Add</button>
					</div>
					{
						list.length >= 1 ? list.map((todo, key) => {
							return (
								<>
									<div className={styles.task}>
										{todo}
										<button className={styles.del} onClick={(e) => {
											e.preventDefault()
											handleDelete(todo)
										}}>
											<Image
												src={imgDel}
												alt="delete"
												width="350px"
												height="300px"
											/>
										</button>
									</div>
								</>
							)
						})
							: <div className={styles.add_item}>Add a item.. </div>
					}

				</div>
			</div>
		</>
	)
}

export default Index