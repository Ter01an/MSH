import LayoutDefault from "../../components/Layout";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import Tabs from "../../components/Tabs";
import Tab from "../../components/Tab";
import News from "../../components/News";
import NewsItem from "../../components/NewsItem";
import Jobs from "../../components/Jobs";
import JobsItem from "../../components/JobsItem";
import { useState } from "react";

export default function Search() {
    const [ tab, setTab ] = useState(0);

    const news = [
        {
            id: 1,
            title: 'Всероссийский день заботы о памятниках истории и культуры в Москве',
            date: '16 – 24 апреля 2022, 10:00 - 17:00',
            place: 'г. Москва, ул. Пушкина 63',
            image: '/fish/news.jpg',
            type: 'Офлайн'
        },
        {
            id: 2,
            title: 'Всероссийский день заботы о памятниках истории и культуры в Москве',
            date: '16 – 24 апреля 2022, 10:00 - 17:00',
            place: 'г. Москва, ул. Пушкина 63',
            image: '/fish/news.jpg',
            type: 'Офлайн'
        },
        {
            id: 3,
            title: 'Всероссийский день заботы о памятниках истории и культуры в Москве',
            date: '16 – 24 апреля 2022, 10:00 - 17:00',
            place: 'г. Москва, ул. Пушкина 63',
            image: '/fish/news.jpg',
            type: 'Офлайн'
        },
        {
            id: 4,
            title: 'Всероссийский день заботы о памятниках истории и культуры в Москве',
            date: '16 – 24 апреля 2022, 10:00 - 17:00',
            place: 'г. Москва, ул. Пушкина 63',
            image: '/fish/news.jpg',
            type: 'Офлайн'
        },
    ];

    const jobs = [
        {
            id: 1,
            title: 'Помощник библиотекаря',
            place: 'г. Москва, ул. Пушкина 63',
            date: '16 – 24 апреля 2022, 10:00 - 17:00',
            labels: [
                'Гражданство РФ'
            ]
        },
        {
            id: 2,
            title: 'Помощник библиотекаря',
            place: 'г. Москва, ул. Пушкина 63',
            date: '16 – 24 апреля 2022, 10:00 - 17:00',
            labels: [
                'Гражданство РФ'
            ]
        },
        {
            id: 3,
            title: 'Тимлидер',
            place: 'г. Москва, ул. Пушкина 63',
            date: '16 – 24 апреля 2022, 10:00 - 17:00',
            labels: [
                'Гражданство РФ'
            ]
        },
        {
            id: 4,
            title: 'Тимлидер',
            place: 'г. Москва, ул. Пушкина 63',
            date: '16 – 24 апреля 2022, 10:00 - 17:00',
            labels: [
                'Гражданство РФ'
            ]
        },
    ];

    return (
        <div>
            <Header>
                Найти
            </Header>
            <SearchBar/>

            <Tabs>
                <Tab active={tab === 0} onClick={() => setTab(0)}>События</Tab>
                <Tab active={tab === 1} onClick={() => setTab(1)}>Вакансии</Tab>
            </Tabs>

            {tab === 0 && (
                <div>
                    <News>
                        {news.map(item => (
                            <NewsItem key={item.id} item={item} />
                        ))}
                    </News>
                </div>
            )}
            {tab === 1 && (
                <div>
                    <Jobs>
                        {jobs.map(item => (
                            <JobsItem key={item.id} item={item} />
                        ))}
                    </Jobs>
                </div>
            )}
        </div>
    )
}

Search.getLayout = page => <LayoutDefault>{page}</LayoutDefault>;