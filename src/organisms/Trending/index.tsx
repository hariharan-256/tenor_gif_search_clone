import { useRef } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./index.module.scss";
import useAPI from "../../api";
import Card from "../../components/Card";

const Trending = (props: any) => {
    const ref: any = useRef<HTMLElement>(null);
    const HandleClick: any = (e: any) => {
        e.preventDefault();
        const Value = e.currentTarget?.getAttribute("href");
        axios.get(`https://g.tenor.com/v1/search?&key=LIVDSRZULELA&limit=50&q=${Value}}`).then((response) => {
            props?.trendRelate(response.data);
        });
        props?.GetTrend(Value);
    };

    const { loading, data }: any = useAPI(
        `https://g.tenor.com/v1/trending?key=LIVDSRZULELA`
    );

    const searchData = props?.search?.data;

    const trendRelate = props?.relateTrend?.results && props?.relateTrend?.results?.map((el: any, index: any) => {
        return (
            <Card key={el?.id} className={`${styles?.terndCard}`}>
                <a href={`${el?.content_description}`} onClick={HandleClick}>
                    <div>
                        <img
                            src={`${el?.media[0]?.gif?.url}`}
                            alt={el?.content_description}
                        />
                    </div>
                    <h4>{el?.content_description}</h4>
                </a>
            </Card>
        )
    })

    const Trendings = data?.results && data?.results?.map((el: any, index: any) => {
        return (
            <Card key={el?.id} className={`${styles?.terndCard}`}>
                <a href={`${el?.content_description}`} onClick={HandleClick}>
                    <div>
                        <img
                            src={`${el?.media[0]?.gif?.url}`}
                            alt={el?.content_description}
                        />
                    </div>
                    <h4>{el?.content_description}</h4>
                </a>
            </Card>
        );
    });

    const SearchedData =
        searchData?.results &&
        searchData?.results?.map((el: any, index: any) => {
            return (
                <Card key={el?.id} className={`${styles?.terndCard}`}>
                    <a href={`${el?.content_description}`} onClick={HandleClick}>
                        <div>
                            <img
                                src={`${el?.media[0]?.gif?.url}`}
                                alt={el?.content_description}
                            />
                        </div>
                        <h4>{el?.content_description}</h4>
                    </a>
                </Card>
            );
        });

    const settings = {
        dots: false,
        easing: "linear",
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        infinite: false,
    };
    return (
        <div className='container' ref={ref}>
            <h2>{props?.search?.value?.value && props?.search?.value?.value}</h2>
            <h2>Trending Tenor Searches</h2>
            <Slider {...settings} className='Trendingslide'>
                {trendRelate}
                {SearchedData}
                {Trendings}
            </Slider>
        </div>
    );
};

export default Trending;
