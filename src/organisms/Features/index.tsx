import { useState } from "react";
import useAPI from "../../api";
import styles from "./index.module.scss";

const Features = (props: any) => {


    const { loading, data }: any = useAPI(
        `https://tenor.googleapis.com/v2/featured?&key=AIzaSyCMUM1yE8gZ26WmRRqJqVfM__tWDns6TrE&limit=30`
    );
    const searchData = props?.search?.data;
    // console.log(props?.search);

    const searchedData = searchData && searchData?.results?.map((elem: any) => {
        return (
            <figure key={elem?.id}>
                <img
                    src={`${elem?.media[0]?.gif?.url}`}
                    alt={elem?.content_description}
                />
            </figure>
        );
    });
    // console.log(props?.relateTrend);

    const trendRelated = props?.relateTrend?.results && props?.relateTrend?.results?.map((el: any) => {
        return (
            <figure key={el?.id}>
                <img
                    src={`${el?.media[0]?.gif?.url}`}
                    alt={el?.content_description}
                />
            </figure>
        )
    })


    return (
        <div className='container space-50'>
            <h2>Featured GIFs {props?.search?.value?.value}</h2>
            <div className={styles?.Grid}>
                {trendRelated}
                {searchedData}
                {data?.results && data?.results?.map((el: any) => {
                    return (
                        <figure key={el?.id}>
                            <img
                                src={`${el?.media_formats?.gif?.url}`}
                                alt={el?.content_description}
                            />
                            <figcaption>
                                <ul>
                                    <li>
                                        <a href='#!'>{`# ${el?.tags?.[0]}`}</a>
                                    </li>
                                </ul>
                            </figcaption>
                        </figure>
                    );
                })
                }
            </div>
        </div>
    );
};

export default Features;
