import styles from './Table.module.scss'

export const Table: React.FC = () => {
	return (
		<table className={`text_semi-bold text_fs-300  text_right ${styles.table}`}>
			<thead className={`border-bottom text_dark-500 ${styles.head}`}>
				<th>Month</th>
				<th>2022</th>
				<th>2023</th>
			</thead>
			<tbody className={`text_dark-800 ${styles.body}`}>
				<tr className={styles.row}>
					<td>July</td>
					<td>$20,000</td>
					<td>—</td>
				</tr>
				<tr className={styles.row}>
					<td>July</td>
					<td>$20,000</td>
					<td>—</td>
				</tr>
				<tr className={styles.row}>
					<td>July</td>
					<td>$20,000</td>
					<td>—</td>
				</tr>
			</tbody>
		</table>
	)
}
