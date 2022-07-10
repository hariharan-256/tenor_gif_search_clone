import styles from "./index.module.scss";

const Card = (props: any) => {
    return <div className={`${props?.className} ${styles.card}`}>{props?.children}</div>;
};

export default Card;
