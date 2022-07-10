import styles from './index.module.scss';

const Pagination = (props: any) => {
    return (
        <ul className={styles.pagination}>
            <li>1</li>
            <li onClick={props?.onClick}>2</li>
            <li onClick={props?.onClick}>3</li>
        </ul>
    )
}

export default Pagination;