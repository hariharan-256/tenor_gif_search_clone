import { useState, useEffect, SyntheticEvent } from "react";
import Textbox from "../../components/Textbox";
import axios from "axios";
import styles from "./index.module.scss";

const Header = (props: any) => {
    const [values, setValues] = useState({ search: "" });
    // console.log(props?.trendvalue);


    const handleChange = (event: Event) => {
        const { name, value }: any = event.target;
        setValues({
            ...values,
            [name]: value,
        });
        // console.log(values);
    };
    const getss: any = (event: any) => {
        if (event?.key === 'Enter' || props?.trendvalue?.value) {
            axios.get(`https://g.tenor.com/v1/search?&key=LIVDSRZULELA&limit=8&q=${values?.search || props?.trendvalue?.val}&limit=50`).then((response: any) => {
                props?.getSearch(response.data, { value: values?.search });
            });
            setValues({ search: '' });
        }
    };

    useEffect(getss, []);



    return (
        <header className={styles.header}>
            <div className='container'>
                <div className='flex'>
                    <img
                        src='images/tenor-logo-white.svg'
                        alt='tenor-logo-white'
                    />
                    <div className={styles.input}>
                        <Textbox
                            type='search'
                            onChange={handleChange}
                            onKeyDown={getss}
                            value={values?.search || props?.trendvalue?.val}
                            name="search"
                            tabindex="0"
                            label='Search for GIFs and Stickers'
                        />
                        <img src="/images/search.svg" alt="search" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
