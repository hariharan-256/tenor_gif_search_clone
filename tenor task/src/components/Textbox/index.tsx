import styles from './index.module.scss';

const Textbox = (props: any) => {
    return (
        <input
            className={styles.textbox}
            type={props?.type}
            autoComplete="off"
            onKeyDown={props?.onKeyDown}
            placeholder={props?.label}
            name={props?.name}
            id={props?.id}
            onChange={props?.onChange}
            value={props?.value}
        />
    );
};

export default Textbox;
